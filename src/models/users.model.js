import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,//optimise for searching optional       
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullname:{
        type:String,
        require:true,
        trim:true,
        index:true,
    },
    avatar:{
        type:String,// by link cloud url
        require:true,
    },
    coverImage:{
        type:String,// by link cloud url
    },
    watchHistory:[//array
        {//obj
            type:Schema.Types.ObjectId, 
            ref:"Video"
        }
    ],
    password:{
        type:String,
        require:[true,"Password is required"],//can be used in any where with require key
    },
    refreshToken:{
        type:String
    }
},{timestamps:true})

//pre hook plugin //save update etcc // hook inject
userSchema.pre("save",async function (next) {
    if(!this.isModified("password")) return next(); // if password not chnge
    this.password = bcrypt.hash(this.password,10)//bcrypt 10digit hash password
    next()
}) //async callback

//inject method custom
userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password,this.password)// password and encrypted password compare    
}

//TOKEN GENERATE
userSchema.methods.generateAccessToken =  function (){
    return jwt.sign({
        _id: this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
    ) 
}
//same as accesstoken but less info becoz it run many time
userSchema.methods.generateRefreshToken= async function (){
    return jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
    ) 
}


export const User = mongoose.model("User", userSchema)