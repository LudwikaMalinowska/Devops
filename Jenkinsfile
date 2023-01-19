pipeline {
    agent {
        docker {
            image 'node:latest'
        }
    }

        options {
            timeout(10)
            gitLabConnection('GitLab')
        }
        triggers {
            gitlab(
                triggerOnPush: true,
                triggerOnMergeRequest: true,
                branchFilterType: 'All'
            )
        }

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Prettier') {
            steps {
                sh 'npm i --prefix rest-api/server-ps'
                sh 'npm run prettier-check --prefix rest-api/server'
            }
        }
        stage('ESLint') {
            steps {
                sh 'npm i --prefix rest-api/server-ps'
                sh 'npm run eslint-check --prefix rest-api/server'
            }
        }
    }
}
