//multer use to upload file to cloudinary
import multer from "multer";
//setting multer
//using disk storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) { //file have multer,cb = callback
    cb(null, "./public/temp")//file in public folder
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname)//not good to put originlname
    }
    })

const upload = multer({
    storage,
})