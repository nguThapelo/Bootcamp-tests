function countRegNumber(regNo) {
    return regNo.split(",").length;
};

describe('this should test the countRegNumber function', function () {
    
    it('Should return 3 when the string "CA 182736,CY 523519,CJ 812328" is passed as input', function () {
      var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')

        assert.equal(regCount, 3);
    });
    
it('Should return 1 when the string "CA 182736" is passed as input', function () {
           var regCount = countRegNumber('CA 182736')

        assert.equal(regCount, 1);
    });

});
