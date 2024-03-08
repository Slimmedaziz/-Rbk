var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
 }; 
 function list(obj) {
   for(let key in obj){
      console.log(key)
   }
 }
 function display(student){
    return student.name+ " " +student.sclass+ " " +student.rollno
     ;} 
  
 function remove(student){
     return delete student.rollno
        }     
 function name(obj) {
  var res=0
  for(key in obj) {
    res++
  } 
  return res;
 }
 var library = [ 
    {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
    },
    {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
    },
    {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
    }];
function displayer(library){
    var disp=""
    for (let i=0; i<library.length;i++) {
    console.log(library[i].author + " " + library[i].title + " " + library[i].readingStatus )
    }
}
function Book(title,genre,author,read,readdate) {
   return {
      title:title,
      genre:genre,
      author:author,
      read:read,
      readdate:readdate
   }
}
function BookList() {
   return{}
}
