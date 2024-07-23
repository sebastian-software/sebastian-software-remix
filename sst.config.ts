import * as acm from "aws-cdk-lib/aws-certificatemanager";
import type { SSTConfig } from "sst";
import { RemixSite } from "sst/constructs";
import type { SsrDomainProps } from "sst/constructs/SsrSite.js";

// TODO: Auto deployment from GitHub disabled for now
// import { IAM } from "./sst/deploy-github";

interface DomainConfigProps {
  mainDomain: SsrDomainProps["domainName"];
  alternateDomain: SsrDomainProps["alternateNames"];
};

// Created in the AWS Console. Must be us-east-1 region to support Cloudfront and Lambda.
const CERT_ARN = "arn:aws:acm:us-east-1:050064799383:certificate/789e2e33-da69-4b88-9cbf-756a25af525e";

// Uncomment to enable PROD deployment of sebastian-software.de
// const DomainConfig: DomainConfigProps = {
//   mainDomain: "sebastian-software.de",
//   alternateDomain: ["www.sebastian-software.de"],
// };

// WIP domain
const DomainConfig: DomainConfigProps = {
  mainDomain: "next.sebastian-software.de",
  alternateDomain: undefined,
};

export default {
  config(input) {
    return {
      name: "sebastiansoftwarede",
      region: "eu-central-1",
      // AWS Profile configuration in ~/.aws/credentials
      // You need aws_access_key_id and aws_secret_access_key of an account that
      // can write to the stack.
      // We currently ignore stage and always use PROD profile.
      profile: input.stage === "production" ? "sebastiansoftwarede" : "sebastiansoftwarede"
    };
  },

  stacks(app) {
    app.stack(({ stack }) => {
      const site = new RemixSite(stack, "site", {
        runtime: "nodejs20.x",
        customDomain: stack.stage === "prod" ? {
          domainName: DomainConfig.mainDomain,
          alternateNames: DomainConfig.alternateDomain,
          isExternalDomain: true,
          cdk: {
            certificate: acm.Certificate.fromCertificateArn(stack, "MyCert", CERT_ARN),
          },
        } : undefined
      });

      if (stack.stage === "prod") {
        // TODO: Auto deployment from GitHub disabled for now
        // IAM({ app, stack });
      }

      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;

