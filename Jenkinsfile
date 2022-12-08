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
                cd 'rest-api/server'
                sh 'npm i'
                sh 'npm run prettier-check'
            }
        }
        stage('ESLint') {
            steps {
                cd 'cd rest-api/server'
                sh 'npm i'
                sh 'npm run eslint-check'
            }
        }
    }
}
