import config from '../Config/config';
import {Client,ID,Databases,Storage,Query} from "appwrite";
export class Service{
  client=new Client();
  databases;
  bucket;


  constructor(){
    this.client
    .setEndpoint(config.url)
    .setProject(config.projectId);
    this.databases=new Databases(this.client);
    this.bucket=new Storage(this.client);

  }
  async createPost({Title,slug,content,featuredImage,status,userId}){
    try{
      return await this.databases.createDocument(
        config.url,
        config.collectionId,
        slug,
        {
            Title,
            content,
            featuredImage,
            status,
            userId
        }
      )
    }
    catch(error){
        throw error;
    }
  }
  async updatePost(slug,{Title,content,featuredImage,status}){
    try{
        return await this.databases.updateDocument(
            config.url,
            config.collectionId,
            slug,
            {
                Title,
                content,
                featuredImage,
                status
            }
        )
    }
    catch(error){
        throw error;
    }

  }

  async deletePost(slug){
    try{
        await this.databases.deleteDocument(
            config.url,
            config.collectionId,
            slug
        )
        return true;
    }
    catch(error){
        throw error;
       
    }
  }
  async getPost(slug){
    try{
        return await this.databases.getDocument(
            config.url,
            config.collectionId,
            slug
        )
    }
    catch(error){
        throw error;
    }
  }
  async getPosts(queries=[Query.equal("status","true")]){
    try{
        return await this.databases.listDocuments(
            config.url,
            config.collectionId,
            queries,
        )
    }
    catch(error){
        throw error;
    }
  }
  async uploadFile(file){
    try{
        return await this.bucket.createFile(
            config.bucketId,
            ID.unique(),
            file
        )
    }
    catch(error){
        throw error;
    }
  }
  async deleteFile(fileId){
    try{
        await this.bucket.deleteFile(
            config.bucketId,
            fileId
        )
    }
    catch(error){
        throw error;
    }
  }
  async getFilePreview(fileId){
    try{
        return this.bucket.getFilePreview(
            config.bucketId,
            fileId
        )
    }
    catch(error){
        throw error;
    }
  }
}
const service = new Service();
export default service;