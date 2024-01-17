[] = ![]; //true
//
true == []; // false
true == ![]; // false
false == []; // true
false == ![]; // true
//
!!"false" == !!"true"; // true
!!"false" === !!"true"; // true
//
"b" + "a" + +"a" + "a"; // baNaNa
"foo" + +"bar"; // fooNaN
//
Object.is(NaN, NaN); // true
NaN === NaN; // false

Object.is(-0, 0) - // false
  0 ===
  0; //  true

Object.is(NaN, 0 / 0); // true
NaN === 0 / 0; // false
//
(![] + [])[+[]] +
  (![] + [])[+!+[]] +
  ([![]] + [][[]])[+!+[] + [+[]]] +
  (![] + [])[!+[] + !+[]]; // fail
//F-alse f-A-lse, falseundef-I-ned, fa-L-se
//
!![]; // true;
//[] == true // false
//
!!null; // false
null == false; // false
null == true; // false
0 == false; // true
"" == false; // true
//
Number.MIN_VALUE > 0; // true
//
class foo extends null {}
console.log(foo);
