

describe('this should test the isFromBelville function', function () {
    it('should return TRUE if reg starts with CY', function () {
        assert.equal(isFromBellville('CY 123'), true);
        

    });
    it('should return FALSE if reg starts with CJ', function () {
        assert.equal(isFromBellville('CJ 123'), false);

    });

});

function isFromBellville(regNo) {
    return (regNo.includes("CY"))
}