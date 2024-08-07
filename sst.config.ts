/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable no-new */
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sebastian-software-remix",
      removal: input.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "eu-central-1",
          // AWS Profile configuration in ~/.aws/credentials
          // You need aws_access_key_id and aws_secret_access_key of an account that
          // can write to the stack.
          // We currently ignore stage and always use PROD profile.
          profile: process.env.CI ? undefined : "sebastiansoftwarede"
        },
        cloudflare: true
      }
    }
  },
  async run() {
    sst.Linkable.wrap(aws.dynamodb.Table, (table) => ({
      properties: { tableName: table.name }
    }))

    const table = new sst.aws.Dynamo("WebVitals", {
      fields: {
        id: "string"
      },
      primaryIndex: { hashKey: "id" }
    })

    let domain
    if ($app.stage === "production") {
      domain = {
        name: "sebastian-software.de",
        redirects: ["www.sebastian-software.de"],
        dns: sst.cloudflare.dns({
          zone: "1849459b28dd975658208ee4ffdb2257"
        })
      }
    }

    new sst.aws.Remix("Website", {
      domain,
      server: {
        architecture: "arm64",
        memory: "1024 MB"
      },
      link: [table]
    })
  }
})
