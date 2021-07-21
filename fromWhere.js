describe('this should test the fromWhere function', function () {
    it('should tell we from Bellville if string that starts with "CY" is passed as input', function () {

        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('should tell we from Paarl if string that starts with "CJ" is passed as input', function () {

        assert.equal(fromWhere('CJ'), 'Paarl');
    });
    it('should tell we from Cape Town if string that starts with "CA" is passed as input', function () {
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
    it('should tell we from some other place if string that starts with "CC" is passed as input', function () {
        assert.equal(fromWhere('CC'), 'Some other place!');
    });

});

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