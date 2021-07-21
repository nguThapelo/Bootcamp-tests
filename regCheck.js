function regCheck(regNo, regEnds) {
    return (regNo.endsWith(regEnds));
}

describe('this should test the regCheck function', function () {
    it('should return TRUE if registration number that ends with GP is passed as input', function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
         });
    it('should return FALSE if registration number that ends with EC is passed as input', function () {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
         });
    it('should return TRUE if registration number that ends with L is passed as input', function () {
        assert.equal(regCheck('5566 L', 'L'), true);
         });
    it('should return FALSE if registration number that ends with M is passed as input', function () {
        assert.equal(regCheck('5566 L', 'M'), false);
         });
    it('should return TRUE if registration number that ends with EC is passed as input', function () {
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
         });
    it('should return FALSE if registration number that ends with GP is passed as input', function () {
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
         });
    it('should return TRUE if registration number that ends with MP is passed as input', function () {
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
         });
    it('should return FALSE if registration number that ends with MP is passed as input', function () {
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });

});
