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
                sh 'npm ci'
                sh 'npm run prettier-check'
            }
        }
        stage('ESLint') {
            steps {
                sh 'npm ci'
                sh 'npm run eslint-check'
            }
        }
    }
}
