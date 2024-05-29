import {v2 as cloudinary} from 'cloudinary';
import fs from "fs" //fs = file system node.js by default

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    //give local file
    const uploadOnCloudinary = async (localFilePath) => {
        try {
            if(!localFilePath) return null 
            //upload the file on cloudinary
            const respone = await cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto"
            })
            //file has been uploaded sucess full
            console.log("fiile is uploaded on cloudinary",respone.url);
            return respone;

        } catch (error) {
            fs.unlinkSync(localFilePath)//remove the locally saved temmp file as the operation failed
            return null;
        }
    }

    export {uploadOnCloudinary}
    
