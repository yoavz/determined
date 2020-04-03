describeNode = "echo \"Running on \${NODE_NAME} (executor: \${EXECUTOR_NUMBER})\""

pipeline {
  agent any
  triggers {
    cron('H 1 * * *')
  }
  environment {
    INTEGRATIONS_RESOURCE_SUFFIX="-${env.BUILD_TAG}"
  }
  stages {
    stage('Nightly tests') {
      options {
        timeout(time: 2, unit: 'HOURS')
      }
      environment {
        AWS_DEFAULT_REGION = "us-west-2"
        PYTEST_MARKS = "nightly"
        REPORT_ROOT = "${env.WORKSPACE}/build"
        SHORT_GIT_HASH = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
        CLUSTER_NAME = "${env.SHORT_GIT_HASH}-nightly"
      }
      steps {
        sh "${describeNode}"
        sh 'virtualenv --python="$(command -v python3.6)" --no-site-packages venv'
        sh "venv/bin/python -m pip install -r combined-reqs.txt"
        sh ". venv/bin/activate && det-deploy aws --user $CLUSTER_NAME --version `git rev-parse HEAD` --keypair integrations-test"
        sh "export MASTER_HOST=`venv/bin/python CI/integrations/get_address.py $CLUSTER_NAME`"
        sh ". venv/bin/activate && make test-python-integrations"
        sh ". venv/bin/activate && det-deploy aws --user $CLUSTER_NAME --delete"
      }
      post {
        always {
          junit "**/build/test-reports/*.xml"
        }
      }
    }
  }
}