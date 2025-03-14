function notFound(req, res, next){
    res.status(404)
    res.json({
        error: "Not Found",
        message: "Paggina non trovata"
    })
}

module.exports = notFound;