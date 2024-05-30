import {asyncHandler} from "../utils/asyncHandler.js"

//registerUser function is wrapped with asyncHandler to make handles req res async
const registerUser = asyncHandler ( async (req , res) => {
    res.status(200).json({
        message:"okk"
    });
});

export {registerUser}