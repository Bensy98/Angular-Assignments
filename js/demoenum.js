"use strict";
//declare 
var printMedia;
(function (printMedia) {
    printMedia["Newspaper"] = "NEWSPAPER";
    printMedia["Newsletter"] = "NEWSLETTER";
    printMedia["Magazine"] = "MAGAZINE";
    printMedia["Book"] = "BOOK";
})(printMedia || (printMedia = {}));
//Access  enum element
console.log(printMedia.Newsletter.toLowerCase());
//Tuple
var employee = [100, " bensy"];
console.log(employee);
employee[1] = employee[1].concat(" manager");
console.log(employee);
