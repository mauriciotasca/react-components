#!groovy
library 'shared-pipeline-template'

configureSlack('#acdc-ui')

pipeline {

  agent {
    kubernetes {
      cloud 'k8s.avenuecode.com'
      label 'docker-slave'
      defaultContainer 'docker-slave'
    }
  }

  stages {
    stage('Checkout') {
      steps {
        notifyInfo("Build started")
        script {
          scmVars = checkout scm
          version = scmVars.GIT_COMMIT                  
        }
      }
    }

  stage('Build') {
      steps {
        script {
          app = dockerBuild("nexus.avenuecode.com/ac-ui/styleguide:${version}", "--target builder $WORKSPACE")
        }
      }
    }

    /* stage('Test') {
        steps {
            sh "docker run --rm ${app.id} npm test -- --coverage"
        }
    }*/

    
    stage('Bake') { 
      steps {
        script {
          container('docker-slave') {
            app = dockerBuild("nexus.avenuecode.com/ac-ui/styleguide:$version", "$WORKSPACE")
          }
        }
      }
    }

    stage('Publish') {
      when {
        anyOf {
          branch "master"
          branch "develop"
          branch "release"
        }
      }
      steps {
        container('docker-slave') {
          dockerPublish(app, version)
        }
      }
    }      
  }

  post {
    always {
      notifyPipelineStatus(currentBuild, scmVars)
    }
  }
    
}
