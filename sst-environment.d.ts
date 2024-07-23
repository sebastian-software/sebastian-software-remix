/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    Website: {
      type: "sst.aws.Remix"
      url: string
    }
  }
}
export { }
