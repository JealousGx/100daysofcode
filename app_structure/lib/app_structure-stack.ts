import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from "aws-cdk-lib/aws-lambda"
import * as apiGateway from "aws-cdk-lib/aws-apigateway"
// import * as sqs from 'aws-cdk-lib/aws-sqs';

import * as dotenv from "dotenv"

dotenv.config()

export class AppStructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const layer = new lambda.LayerVersion(this, 'BaseLayer', {
      code: lambda.Code.fromAsset('./lambda_base_layer/layer.zip'),
      compatibleRuntimes: [lambda.Runtime.PYTHON_3_7],
    })

    const lambdaAPI = new lambda.Function(this, "apiFunc", {
      runtime: lambda.Runtime.PYTHON_3_7,
      code: lambda.Code.fromAsset("../py-app/"),
      handler: "api.handler",
      layers: [layer],
      environment: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY ?? "",
      }
    })

    const api = new apiGateway.RestApi(this, "api", {
      restApiName: "Brand Assistant API",
    })

    const integration = new apiGateway.LambdaIntegration(lambdaAPI)
    
    api.root.addProxy({
      defaultIntegration: integration,
    })
    // example resource
    // const queue = new sqs.Queue(this, 'AppStructureQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
