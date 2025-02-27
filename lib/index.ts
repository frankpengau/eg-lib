// import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface EgLibProps {
  // Define construct properties here
}

export class EgLib extends Construct {

  constructor(scope: Construct, id: string, props: EgLibProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'EgLibQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
