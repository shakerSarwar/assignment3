//https://github.com/sourav07s/assignment3

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
};
var output = kilometerToMeter(5);
console.log(output);




function budgetCalculator(watch,mobile,laptop){
   var watchPrice = watch*50;
   var mobilePrice = mobile * 100;
   var laptopPrice = laptop *500;

   var budget = watchPrice + mobilePrice + laptopPrice;
   return budget;
}
var totalBudget = budgetCalculator(2,5,1);
console.log(totalBudget);





function hotelCost(days){
var totalCost = 0;
if(days <= 10) {
 var totalCost = days * 100; 
} else if(days <= 20){
   var firstPart = 10 * 100;
   var remaining = days - 10;
   var secondPart = remaining * 80;
   totalCost = firstPart + secondPart;

}else{
  var firstPart = 10 * 100;
  var secondPart = 10 * 80;
  var remaining = days - 20;
  var thirdPart = remaining * 50;
  totalCost = firstPart + secondPart + thirdPart;
}
   return totalCost; 
}
var count = hotelCost(24);
console.log(count);




function megaFriend() {
    var maxlength = "";
    var friend = ['paine','tutul','raju','kaciMamun', 'mohin','liza'];
    for (var i = 0; i < friend.length; i++) {
      
      var element = friend[i];
        if (element.length > maxlength.length) {
           maxlength = friend[i]; 
        }
       
   }
   return maxlength;
}

var result = megaFriend();
console.log(result);


