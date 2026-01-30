pipeline {
  agent any

  environment {
    IMAGE_TAG = "${BUILD_NUMBER}"
    BACKEND_IMAGE = "fooddelivery-backend:${IMAGE_TAG}"
    FRONTEND_IMAGE = "fooddelivery-frontend:${IMAGE_TAG}"

    AWS_REGION = "ap-south-1"
    ECR_URI = "754441011337.dkr.ecr.ap-south-1.amazonaws.com/fooddelivery-backend"
  }

  stages {

    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/Sasa0920/DevOps-Project.git'
      }
    }

    stage('Build Docker Images') {
      parallel {
        stage('Build Backend Image') {
          steps {
            sh 'docker build -t ${BACKEND_IMAGE} -f backend/Dockerfile ./backend'
          }
        }
        stage('Build Frontend Image') {
          steps {
            sh 'docker build -t ${FRONTEND_IMAGE} -f frontend/Dockerfile ./frontend'
          }
        }
      }
    }

    stage('Test') {
      steps {
        script {
          sh 'docker compose down || true'
          sh 'docker rm -f $(docker ps -aq) || true'

          try {
            sh 'docker compose up --build -d'
            sh 'sleep 30'
            sh 'curl -f http://localhost:5000/'
          } finally {
            sh 'docker compose down'
          }
        }
      }
    }


    stage('Login to AWS ECR') {
        steps {
            withAWS(credentials: 'aws-credentials', region: "$AWS_REGION") {
                sh '''
                aws ecr get-login-password --region $AWS_REGION |
                docker login --username AWS --password-stdin $ECR_URI
                '''
            }
        }
    }


    stage('Push Backend Image to ECR') {
      steps {
        sh '''
        docker tag ${BACKEND_IMAGE} ${ECR_URI}:latest
        docker push ${ECR_URI}:latest
        '''
      }
    }

    stage('Login to Docker Hub') {
      steps {
        withCredentials([string(credentialsId: 'fooddelivery_dockerhubpassword', variable: 'DOCKER_PASSWORD')]) {
          sh 'docker login -u sasanthi20020920 -p $DOCKER_PASSWORD'
        }
      }
    }

    stage('Push Images to Docker Hub') {
      steps {
        sh '''
        docker tag ${BACKEND_IMAGE} sasanthi20020920/fooddelivery-backend:latest
        docker tag ${FRONTEND_IMAGE} sasanthi20020920/fooddelivery-frontend:latest
        docker push sasanthi20020920/fooddelivery-backend:latest
        docker push sasanthi20020920/fooddelivery-frontend:latest
        '''
      }
    }

    stage('Terraform Apply') {
      steps {
        dir('terraform') {
          sh '''
          terraform init
          terraform apply -auto-approve -var="ecr_uri=$ECR_URI"
          '''
        }
      }
    }
  }

  post {
    always {
      sh 'docker system prune -f'
      sh 'docker logout'
    }
  }
}
