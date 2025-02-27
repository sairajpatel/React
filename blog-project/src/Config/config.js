const config={
 url:String(import.meta.env.VITE_APPWRITE_URL),
 projectId:String(import.meta.env.VITE_APPWRITE_PROJECTID),
 collectionId:String(import.meta.env.VITE_APPWRITE_COLLECTIONID),
  bucketId:String(import.meta.env.VITE_APPWRITE_BUCKETID)
};
export default config;