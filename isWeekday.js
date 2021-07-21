function isWeekday(weekDay) {
    return weekDay.startsWith("Mon");
}


describe('this should test the isWeekday fucntion', function () {
    it('isWeekday', function () {
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Monday'), true);
    });

});
