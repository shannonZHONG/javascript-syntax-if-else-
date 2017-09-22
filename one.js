/* first :type coercion : forcing one type into another;
examples are list below :

    - , /,*,% convert to numbers;
+ is a bit different . It can be used to both add  numbers
together and also to concatenate strings . the first  priority  is convert things to string

   second: javascritp convert value into ture or false when
you type if condition . most of vavlues convert into true. only 7 values convert into false.
     7 values are list blow: 
     false, 0 , -0 , "", NaN, null, undefined;
     */

var a = 25;
var b = true;
var d = false;
var c = a + b;
var e = b + d;
var j = "1";

var f = a * d;
var g = a - b;
var i = a - j;
console.log(c);
console.log(e);
console.log(f);
console.log(g);
console.log(i);

var k = a + j;
console.log(k);

var see_if_it_is_true = 10;
if (see_if_it_is_true){
    console.log("it is true");
}

var see_if_it_is_true_string = "happy";
if (see_if_it_is_true_string){
    console.log("it is true");
}
var see_if_it_is_false_undefined ;
if (! see_if_it_is_false_undefined){
       new_value = 20;
    console.log(new_value);
}

var test_new_example ;
test_new_example = 2;
if (! test_new_example){
    test_new_example = 20;
}
console.log(test_new_example);

//check to see if a var has a value 

var check_if_it_is_undefined1 ;
check_if_it_is_undefined1 = 0 ;

if (typeof check_if_it_is_undefined1 === "undefined"){
    check_if_it_is_undefined1 = 10;
}
console.log(check_if_it_is_undefined1);




