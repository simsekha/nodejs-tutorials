
function log(req, res, next) {
    console.log("Custome Logger");
    next();
}

module.exports = log;