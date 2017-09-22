/* Hoisting about var and function declaration ： lifing.

Javascript hoisting for function: function can be invoked before or after functions are declared.  

Javascript hoisting for vars are not as the same as the function.

The default value for the var is  undefined and is set by javascript engine.

example are list below:
*/

hositing_example_function_declaration();

function hositing_example_function_declaration() {
    console.log("var is lifted value is undefined because the value is assigned down line 21 " + " " + var_test);

    var which = "which is hoisted : both var or function declaration";

    console.log(which);

    var var_test = "var is declared and set value by string as you can see"

    console.log(var_test);

}


/* 
hositing_example_function_expression_1();
var hositing_example_function_expression_1 = function () {
    console.log("why does show error happend here ? Becuase a value haven't assigned yet and the vaule that get assigned is a function " + " " + a + b);

};
var a = 1;
var b = 2;
*/

var c = 6;
var d = 7;

var how_to_avoid = function () {

    console.log (" call function after function expression and put vars declaration on the top of scope or function then you wont get error " + " " + c + " " + d );
                 }
how_to_avoid();











