/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    WebVitals: {
      name: string
      type: "sst.aws.Dynamo"
    }
    Website: {
      type: "sst.aws.Remix"
      url: string
    }
  }
}
export {}
