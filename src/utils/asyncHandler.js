//promise code
const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err)) 
    }
}
export {asyncHandler}

//try catch code
//high order func
// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) =>async () => {}


//async code 
// const asyncHandler =(fn) => async (req,res,next) => {
//     try{
//         await fn(req, res ,next)
//     }catch (error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }