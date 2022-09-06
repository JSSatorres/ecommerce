import dotenv from "dotenv";

dotenv.config();

export const MONGO_URL = process.env.MONGODB_URL || "htpp:atlas.test";
export const PORT = process.env.PORT || 4000;
export const SECRETORPRIVATEKEY = process.env.SECRETORPRIVATEKEY;
// const CONFIG = {
//   db: {
//     url: process.env.DB_URL,
//   },
//   firebase: {
//     certConfig: {
//       type: process.env.type,
//       project_id: process.env.project_id,
//       private_key_id: process.env.private_key_id,
//       private_key: process.env.private_key,
//       client_email: process.env.client_email,
//       client_id: process.env.client_id,
//       auth_uri: process.env.auth_uri,
//       token_uri: process.env.token_uri,
//       auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
//       client_x509_cert_url: process.env.client_x509_cert_url,
//     },
//   },

//   cloudinary: {
//     cloud_name: process.env.cloud_name,
//     api_key: process.env.api_key,
//     api_secret: process.env.api_secret,
//   },
// };
