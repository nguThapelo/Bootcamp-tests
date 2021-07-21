function isFromBellville(regNo) {
    return (regNo.includes("CY"))
}

describe('this should test the isFromBelville function', function () {
    it('isFromBelville', function () {
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);

    });

});