function regCheck(regNo, regEnds) {
    return (regNo.endsWith(regEnds));
}

describe('this should test the regCheck function', function () {
    it('should return TRUE if regNo from Gauteng is passed in', function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
         });
    it('should return FALSE if regNo ends EC', function () {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
         });
    it('should return TRUE if regNo ends', function () {
        assert.equal(regCheck('5566 L', 'L'), true);
         });
    it('should return FALSE if regNo ends', function () {
        assert.equal(regCheck('5566 L', 'M'), false);
         });
    it('should return TRUE if regNo ends EC', function () {
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
         });
    it('should return FALSE if regNo ends EC', function () {
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
         });
    it('should return TRUE if regNo ends MP', function () {
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
         });
    it('should return FALSE if regNo ends MM', function () {
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });

});
