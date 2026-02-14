provider "aws" {
  region = "ap-south-1"
}

# Security Group for EC2
resource "aws_security_group" "app_sg" {
  name = "app-sg"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  
  }

  ingress {
    from_port   = 5173
    to_port     = 5173
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# EC2 Instance
resource "aws_instance" "app_server" {
  ami           = "ami-0f5ee92e2d63afc18"  
  instance_type = "t3.micro"
  key_name      = "devops-key"                

  security_groups = [aws_security_group.app_sg.name]

  # User data script runs on EC2 startup
  user_data = <<EOF
#!/bin/bash
  sudo apt-get update -y
  sudo apt-get install docker.io docker-compose -y
  sudo systemctl start docker
  sudo systemctl enable docker
  sudo usermod -aG docker ubuntu
EOF
}
