
function greet(neighboursName) {
    return "Hello, " + neighboursName;
}

describe('this should test the greet function', function () {
    it('greet', function () {
        assert.equal(greet('Bob'), 'Hello, Bob');
        assert.equal(greet('Sam'), 'Hello, Sam');
    });

});
