//declare 
enum printMedia {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
//Access  enum element
console.log(printMedia.Newsletter.toLowerCase());

//Tuple
var employee: [number,string]=[100," bensy"];
console.log(employee);
employee[1]=employee[1].concat(" manager");
console.log(employee);