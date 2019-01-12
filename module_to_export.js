
function addNumToList(num){
   var arrayOfNum = [];
   if (arrayOfNum.length < 5){
      arrayOfNum.push(num);
      console.log(arrayOfNum);
      return arrayOfNum;
   }
}

addNumToList([1, 3, 5, 7, 9, 7]);

module.exports = {
   list: addNumToList(),
   //sortedList: sortListOfNum()
};