export const resHandler = (res, statusCode, msg, data=null)=>{
    if(!res){
        console.log("No response provided.");
        return;
    }
    const success = statusCode < 400 ; 
    if(!data){
            return res.status(statusCode).json({
            success,
            statusCode,
            message: msg
        });
    }
    return res.status(statusCode).json({
        success,
        statusCode,
        message: msg,
        data
    });
}