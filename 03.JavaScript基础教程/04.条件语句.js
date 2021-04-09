
var num1 = 10;
var num2 = 20;
var sign = "+" ;
var result = 0;
// 首先通过if语句来实现数学运算
if(sign==="+"){
    console.log("num1+num2=" + (num1 + num2) );
}else if(sign==="-"){
    console.log("num1-num2=" + (num1 - num2) );
}else if(sign==="*"){
    console.log("num1*num2=" + (num1 * num2) );
}else if(sign==="/"){
    console.log("num1/num2=" + (num1 / num2) );
}else{
    console.log("请输入正确的运算符")；
}
// 使用switch语句实现数学运算
switch(sign){
    case "+":
        console.log("num1+num2=" + (num1 + num2) );
        break;
    case "-":
        console.log("num1-num2=" + (num1 - num2) );
        break;
    case "*":
        console.log("num1*num2=" + (num1 * num2) );
        break;
    case "/":
        console.log("num1/num2=" + (num1 / num2) );
        break;
    default:
        console.log("请输入正确的操作符");
        break;


}