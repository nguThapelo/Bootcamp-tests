function countAllPaarl(regNo) {
    var list = regNo.split(",");
    var paarl = [];
    var count = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i].includes("CJ") === true) {
            count++;
            paarl.push(list[i].trim());
        }
    }
    return count;
}

describe('this should test the countAllPaarl function', function () {
    it('Should return 3 when the string "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123" is passed as input', function () {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
        
         });
    it('Should return 2 when the string "CJ 345 123, CK 345, CJ 123" is passed as input', function () {
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
       

    });
});
