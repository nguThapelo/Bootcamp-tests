var itemList = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },
    { name: 'apples', qty: 3 },
];

var results = [
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },
];

var itemList2 = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 19 },
    { name: 'bananas', qty: 17 },
    { name: 'apples', qty: 3 },
];

var results2 = [];

var itemList3 = [
    { name: 'apples', qty: 40 },
    { name: 'pears', qty: 20 },
    { name: 'bananas', qty: 23 },
    { name: 'apples', qty: 37 }
];

var results3 = [
    { name: 'apples', qty: 40 },
    { name: 'bananas', qty: 23 },
    { name: 'apples', qty: 37 }
];
function findItemsOver20(itemList) {
    let newList = [];
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i].qty > 20) {
            newList.push(itemList[i]);
        }
    } return newList;
}


describe('this should test the finditemsOver20 function', function () {
    it('finditemsOver20', function () {

        assert.deepEqual(results, findItemsOver20(itemList));
        assert.deepEqual(results2, findItemsOver20(itemList2));
        assert.deepEqual(results3, findItemsOver20(itemList3));




    });

});