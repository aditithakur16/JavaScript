var number = 8;
var num1 = 0,
    num2 = 1;
var next_term = 0;
document.write("Fibonacci series of the number 8:" + "<br>")
for (i = 1; i < number; i++) {
    if (i <= 1)
        next_term = i;
    else {
        next_term = num1 + num2;
        num1 = num2;
        num2 = next_term;
    }
    document.write("Adding" + num1 + "and" + next_term + "=" + (num1 + num2) + "<br>");

}