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


describe('this should test the finditemsOver function', function () {
    it('should find items that are over when item List is passed as input', function () {

        assert.deepEqual(results, findItemsOver(itemList, 20));
        
    });
it('should find items that are over when item List 2 is passed as input', function () {

        assert.deepEqual(results2, findItemsOver(itemList2, 20));
    });
    it('should find items that are over when item List 3 is passed as input', function () {

        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    });
});

function findItemsOver(itemName, threshold) {
    let item = [];
    for (var i = 0; i < itemName.length; i++) {
        if (itemName[i].qty > threshold) {
            item.push(itemName[i]);
        }
    } return item;
}
