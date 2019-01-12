var arrayOfNum = [];

function addNumToList(num){
  arrayOfNum.push(num);
}

function sortListOfNum(){
  return arrayOfNum.sort(function(a, b){
    return a - b;
  });
}

function givesSorted(){
  return sortListOfNum();
}

module.exports = {
  list: addNumToList,
  sortedList: givesSorted
};



// -------NOTES: -------- 

// Create a module that exports a function that takes a number as a parameter and stores it in a list. The list should not be accessible from outside the module. DONE 

// Export another function that returns a version of the data list that is sorted in ascending order. The function you use to sort the data correctly should not be accessible from outside the module. (Think back to the Custom Sorting Exercise when handling sorting) DONE

// Implement a Node.js script that imports the functionality of your module, adds at least 5 different data points to the module's data list, and outputs the sorted list. DONE

// private function for sorting data 
   // uses a cb to give the sorted data to addNumToList



// addNumToList(6);
// addNumToList(8);
// addNumToList(9);
// addNumToList(8);
// addNumToList(3);

//console.log(arrayOfNum);


// "arguments keyword- only available in non [=>] functions"

// function addAnyNumsToList() {
//    console.log([...arguments]); 
// 
// }

// addAnyNumsToList(1, 2, 3, 5);

// function addNumToList(num){
//    var arrayOfNum = [];
//    if (arrayOfNum.length < 5){
//       arrayOfNum.push(num);
//       console.log(arrayOfNum);
//       return arrayOfNum;
//    }
// }

//addNumToList([1, 3, 5, 7, 9, 7]);