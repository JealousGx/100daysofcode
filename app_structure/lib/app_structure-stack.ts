import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from "aws-cdk-lib/aws-lambda"
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AppStructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const lambdaAPI = new lambda.Function(this, "apiFunc", {
      runtime: lambda.Runtime.PYTHON_3_9,
      code: lambda.Code.fromAsset("../py-app/"),
      handler: "api.handler"
    })

    // example resource
    // const queue = new sqs.Queue(this, 'AppStructureQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
