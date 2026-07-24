import "dotenv/config";

export const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID!,
  environment: process.env.CONTENTFUL_ENVIRONMENT!,
  cmaToken: process.env.CONTENTFUL_CMA_TOKEN!,
};