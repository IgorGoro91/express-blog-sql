function errorsHandler( err, req, res, next){
    res.status(500)
    res.json({
        error: "Interval server error",
        error: err.message
    })
}

module.exports = errorsHandler;