var salesData = [
    { department: 'hardware', sales: 4500, day: 'Monday' },
    { department: 'outdoor', sales: 1500, day: 'Monday' },
    { department: 'carpentry', sales: 5500, day: 'Monday' },
    { department: 'hardware', sales: 7500, day: 'Tuesday' },
    { department: 'outdoor', sales: 2505, day: 'Tuesday' },
    { department: 'carpentry', sales: 1540, day: 'Tuesday' },
    { department: 'hardware', sales: 1500, day: 'Wednesday' },
    { department: 'outdoor', sales: 8507, day: 'Wednesday' },
    { department: 'carpentry', sales: 8009, day: 'Wednesday' },
    { department: 'hardware', sales: 12000, day: 'Thursday' },
    { department: 'outdoor', sales: 18007, day: 'Thursday' },
    { department: 'carpentry', sales: 6109, day: 'Thursday' },
    { department: 'hardware', sales: 7005, day: 'Friday' },
    { department: 'outdoor', sales: 12006, day: 'Friday' },
    { department: 'carpentry', sales: 16109, day: 'Friday' },
];

var salesData2 = [
    { department: 'electronics', sales: 4500, day: 'Monday' },
    { department: 'outdoor', sales: 1500, day: 'Monday' },
    { department: 'carpentry', sales: 5500, day: 'Monday' },
    { department: 'steelwork', sales: 7500, day: 'Tuesday' },
    { department: 'outdoor', sales: 2505, day: 'Tuesday' },
    { department: 'carpentry', sales: 1540, day: 'Tuesday' },
    { department: 'hardware', sales: 1500, day: 'Wednesday' },
    { department: 'outdoor', sales: 8507, day: 'Wednesday' },
    { department: 'carpentry', sales: 8009, day: 'Wednesday' },
    { department: 'hardware', sales: 12000, day: 'Thursday' },
    { department: 'carpentry', sales: 6109, day: 'Thursday' },
    { department: 'hardware', sales: 7005, day: 'Friday' },
    { department: 'electronics', sales: 12006, day: 'Friday' },
    { department: 'electronics', sales: 16109, day: 'Saturday' },
    { department: 'steelwork', sales: 7500, day: 'Tuesday' },
    { department: 'outdoor', sales: 2505, day: 'Tuesday' },
    { department: 'carpentry', sales: 1540, day: 'Tuesday' },
    { department: 'steelwork', sales: 1500, day: 'Wednesday' },
    { department: 'carpentry', sales: 8009, day: 'Wednesday' },
];

function mostProfitableDepartment(salesData) {
    var salesMap = {};
    for (var i = 0; i < salesData.length; i++) {
        const deptSales = salesData[i];
        salesMap[deptSales.department] = 0;
    }
    for (var i = 0; i < salesData.length; i++) {
        const deptSales = salesData[i];
        var curDept = salesMap[deptSales.department];
        curDept += deptSales.sales;
        salesMap[deptSales.department] = curDept;
    }
    let Sales = 0;
    var saleDepartment = "";
    for (const departmentSale in salesMap) {
        const curSalesDept = salesMap[departmentSale];

        if (curSalesDept > Sales) {
            Sales = curSalesDept;
            curDept = departmentSale;
        }
    }
    return curDept;
}



describe('this should test the mostProfitableDepartment function', function () {
    it('should give us the most profitable department when sales data 2 is passed as input', function () {

        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");



    });

    it('should give us the most profitable department when sales data 2 is passed as input', function () {

        assert.equal('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");



    });

});