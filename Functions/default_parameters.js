// We have the ability to provide the value for a parameter by default like this:
function something(a, b=3) {
    return a * b;
}
console.log(something(12)); //36
//in above function we assigned a deafult value, b =3; 
console.log(something(12, 10)); //120
//in above function we assigned a deafult value, b =3;, but still we passed the value in arguments for b= 10,
// so result is different, because the passed value takes precedence over the default, 
// default value is only used when we dont pass the value. 