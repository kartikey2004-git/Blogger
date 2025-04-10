const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;


// This conf.js file centralizes Appwrite configuration settings (URL, Project ID, etc.) using environment variables. 


// It helps keep sensitive data secure, makes your app easier to maintain, and allows for quick updates without hardcoding values in multiple places.

// to avoid the import of env variables it protects us from crashing the sites