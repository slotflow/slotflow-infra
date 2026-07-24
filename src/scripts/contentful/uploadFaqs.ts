// import { createClient } from "contentful-management";
// import { contentfulConfig } from "../../scripts/contentful/config";

// const faqs = [];

// const client = createClient(
//   {
//     accessToken: contentfulConfig.cmaToken,
//   },
//   {
//     type: "legacy",
//   }
// );

// const space = await client.getSpace(contentfulConfig.spaceId);

// const environment = await space.getEnvironment(
//   contentfulConfig.environment
// );

// async function uploadFaqs() {
//     try {
//         for (const faq of faqs) {
//             const entry = await environment.createEntry("faq", {
//                 fields: {
//                     id: {
//                         "en-US": faq.id,
//                     },
//                     value: {
//                         "en-US": faq.value,
//                     },
//                     question: {
//                         "en-US": faq.question,
//                     },
//                     answer: {
//                         "en-US": faq.answer,
//                     },
//                 },
//             });
            
//             await entry.publish();
            
//             console.log(`Uploaded FAQ ${faq.id}`);
//         }
//     } catch (error) {
//         console.log("faqs uploading failed : ",error);
//     }
// }

// uploadFaqs();