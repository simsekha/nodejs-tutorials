module.exports.absolute = function (num) {
    return num >= 0 ? num : -num;
}

module.exports.greet = function (name) {
    return `Hello ${name}`;
}

module.exports.getCurrencies = function () {
    return ["USD", "AED", "TL"];
}

module.exports.getProduct = function (productId) {
    return { id: productId, price: 10 };
}
