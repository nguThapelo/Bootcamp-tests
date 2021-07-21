function countRegNumber(regNo) {
    return regNo.split(",").length;
};


describe('this should test the countRegNumber function', function () {
    it('countRegNumber', function () {
var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')

        assert.equal(regCount, 3);
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });

});
