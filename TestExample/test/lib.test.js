var lib = require('../lib');
require('jest');

describe('lib Tests', () => {
    it ('should return 1', () => {
        var res = lib.get();
        expect(res).toBe(1);
    });

})