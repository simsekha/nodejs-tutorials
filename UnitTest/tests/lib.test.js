const lib = require('../lib');

describe('absolute', () => {
    it('should return positive number if input is positive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });
    it('should return positive number if input is negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });
    it('should return 0 if input is 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});


describe('greet', () => {
    it('should include input name', () => {
        const result = lib.greet("hayri");
        expect(result).toMatch("hayri");
    });
});

describe('getCurrencies', () => {
    it('should return supported currencies', () => {
        const result = lib.getCurrencies();
        expect(result).toContain("TL");
        expect(result).toEqual(expect.arrayContaining(["TL","USD","AED"]));
    });
});

describe('getProduct', () => {
    it('should return a product with the given id', () => {
        const {price} = lib.getProduct(1);        
        expect(price).toEqual(10);
    });
});

