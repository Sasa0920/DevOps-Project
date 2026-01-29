pipeline{
  agent any // operating system that pipeline will run on

  environment{
    IMAGE_TAG = "${BUILD_NUMBER}"
    BACKEND_IMAGE = "fooddelivery-backend:${IMAGE_TAG}"
    FRONTEND_IMAGE = "fooddelivery-frontend:${IMAGE_TAG}"
  }
  stages{
    stage('Checkout'){
      steps{
        git branch: 'main', url:'https://github.com/Sasa0920/DevOps-Project.git'
      }
    }
    stage('Build Docker Images'){
      parallel{
        stage('Build Backend Image'){
          steps{
            script{
              sh'docker build -t fooddelivery-backend:${IMAGE_TAG} -f backend/Dockerfile ./backend'
            }
          }
        }
        stage('Build Frontend Image'){
          steps{
            script{
              sh'docker build -t fooddelivery-frontend:${IMAGE_TAG} -f frontend/Dockerfile ./frontend'
            }
          }
        }
      }
    }
   stage('Test'){
      steps{
        script{
          try{
            sh'docker compose up --build -d'
            sh'sleep 30'
            sh'curl -f http://localhost:5000/'
          } finally{
            sh'docker compose down'
          }
        }
      }
    }
    stage('Login to the Docker Hub'){
      steps{
        withCredentials([string(credentialsId: 'fooddelivery_dockerhubpassword', variable: 'fooddelivery_dockerhubpassword')]) {
          sh 'docker login -u sasanthi20020920 -p $fooddelivery_dockerhubpassword'
        }
      }
    }
    stage('Push Images to Docker Hub'){
      steps{
        script{
          sh'docker tag fooddelivery-backend:${IMAGE_TAG} sasanthi20020920/fooddelivery-backend:${IMAGE_TAG}'
          sh'docker tag fooddelivery-frontend:${IMAGE_TAG} sasanthi20020920/fooddelivery-frontend:${IMAGE_TAG}'
          sh'docker push sasanthi20020920/fooddelivery-backend:${IMAGE_TAG}'
          sh'docker push sasanthi20020920/fooddelivery-frontend:${IMAGE_TAG}'

          sh'docker tag fooddelivery-backend:${IMAGE_TAG} sasanthi20020920/fooddelivery-backend:latest'
          sh'docker tag fooddelivery-frontend:${IMAGE_TAG} sasanthi20020920/fooddelivery-frontend:latest'
          sh'docker push sasanthi20020920/fooddelivery-backend:latest'
          sh'docker push sasanthi20020920/fooddelivery-frontend:latest'
        }
      }
    }
  }
  post{
    always{
      sh'docker system prune -f' // clean up unused docker resources
      sh'docker logout'
    }
  }
}
