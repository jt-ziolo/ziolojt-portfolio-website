import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "ziolojt-portfolio-site",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        path: ".",
        timeout: "25 seconds", // TODO: May fix 502 error
        customDomain: {
          isExternalDomain: true,
          domainName: "ziolojt.com",
          cdk: {
            certificate: Certificate.fromCertificateArn(stack, "AcmCert", process.env.CERT_ARN!)
          }
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
