
var imports = require("./module_to_export");

imports.list(6);
imports.list(8);
imports.list(9);
imports.list(8);
imports.list(3);

console.log(imports.sortedList());

// -------NOTES: -------- 

//import the functions using the KEY names corresponding to their function values in the module.exports object. 

// var { list, sortedList} = require("./module_to_export");

// //import the functions using the KEY names corresponding to their function values in the module.exports object. 

// list(6);
// list(8);
// list(9);
// list(8);
// list(3);

// console.log(sortedList());