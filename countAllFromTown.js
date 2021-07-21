function countAllFromTown(regNo, town) {
    var list = regNo.split(",");
    var Townlist = [];
    var count = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i].includes(town) === true) {
            count++;
            Townlist.push(list[i].trim());
        }
    }
    return count;
}
var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF')

describe('this should test the countAllFromTown function', function () {
    it('Should return 3 when the string "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123" is passed as input', function () {

        assert.equal(fromStellies, 3)
        
    });
    it('should count how many registration numbers are from Kuilsriver', function () {

        
        assert.equal(fromKuilsriver, 1)
    });


});
