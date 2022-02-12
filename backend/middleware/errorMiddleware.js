const errorHandler = (err, req, res, next) => {
    // 500 server error
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)


    res.json({
        message: err.message,
        // stack tells you where is the error in code line
        stack:process.env.NODE_ENV === 'product' ? null : err.stack
    })
} 

module.exports = {
    errorHandler
}