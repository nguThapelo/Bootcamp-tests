function totalPhoneBill(itemString) {
    const items = itemString.split(",");
    let total = 0;
    for (var i=0;i<items.length;i++){
      const currentItem = items[i].trim();
      if(currentItem.startsWith("c")) {
        total += 2.75;
      } else if (currentItem.startsWith("s")) {
        total += 0.65;
      } 
    }
 
  
    return "R" + total.toFixed(2);
  }


describe('this should test the totalPhoneBill function' , function(){
    it('totalPhoneBill' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
        
        
    });

});