function yearsAgo(year) {
    const yearNo = new Date();
    return yearNo.getFullYear() - year;
}


describe('this should test the yearsAgo function', function () {
    it('should tell us how many years ago, 1976 was from the present year', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
       
    });
    it('should tell us how many years ago, 2000 was from the present year', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
        
    });

});
