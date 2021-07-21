function fromWhere(regNo) {
    if (regNo.startsWith("CY")) {
        return "Bellville";
    } else if (regNo.startsWith("CJ")) {
        return "Paarl";
    } else if (regNo.startsWith("CA")) {
        return "Cape Town";
    } else if (regNo.startsWith("CC")) {
        return "Some other place!";
    } else {
        return "You're Lost"
    }
}
describe('this should test the fromWhere function', function () {
    it('should tell us where we from if we have', function () {

        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('fromWhere', function () {

        assert.equal(fromWhere('CJ'), 'Paarl');
    });
    it('fromWhere', function () {
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
    it('fromWhere', function () {
        assert.equal(fromWhere('CC'), 'Some other place!');
    });

});