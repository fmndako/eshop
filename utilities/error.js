class ErrorHandler extends Error {
    constructor(statusCode, error){
        super();
        error = error.message ? error.message : error;
        this.statusCode = statusCode;
        this.message = error;

    }
    
}
function handleError(err, res) {
    const {statusCode, message} = err;
    res.status(statusCode).json({
        status:'error', 
        statusCode,
        message
    });
}
    
module.exports = { 
    ErrorHandler,
    handleError};