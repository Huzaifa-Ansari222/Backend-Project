import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile:{
        type:String,//cloudinary url
        require:true,
    },
    thumbnail:{
        type:String,//cloudinary url
        require:true,
    },
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    duration:{//extract from cloudinary
        type:Number,
        require:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    ower:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

//mongoose help to inject pre ,post etc middleware using aggregate
videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)//mongo make model name Videos from videoSchema