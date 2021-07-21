function transportFee(shiftWorking) {
    if (shiftWorking === "morning") {
        return "R20";
    } else if (shiftWorking === "afternoon") {
        return "R10";
    } else {
        return "free";
    }
}

describe('this should test the transportFee function', function () {
    it('transportFee', function () {
        assert.equal(transportFee('morning'), 'R20');
        assert.equal(transportFee('afternoon'), 'R10');
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');

    });

});