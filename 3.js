// reivew if condition + string 
// example 1: Upper or lower ? javascript is sensitive program.
var question = 'right';

if (question === "Right") {
    console.log("correct");
} else {
    console.log("wrong");
}

// example 2: how to fix example 1 if you want to print out lower case.



if (question.toLocaleLowerCase() === "right") {
    console.log('right');
} else {
    console.log("wrong");
}

// example 3 : how to fix example 1 if you want to print out upper  case.
if (question.toLocaleUpperCase() === "RIGHT") {
    console.log('RIGHT');
} else {
    console.log("wrong");
}


// example 4 : what about adding space and print out Space not wrong ?
// Trim() method removes any leading and trailing space;


var question_add_space = "Space ";

if (question_add_space.toUpperCase().trim() === "SPACE") {
    console.log("SPACE");
} else {
    console.log("wrong");
}


// example 5 : what about if input var  is string that include 5 words not one word ?

var question_two_words = "test test";

if (question_two_words.indexOf("test test") > -1) {
    console.log("correct");
} else {
    console.log("wrong");
}
