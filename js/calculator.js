/* Input: the user enters two numbers, an operator and his or her answer.
   Processing: To compute the correct answer and compare it to the user's answer. 
   Output: either "Correct! 🏆" or "Incorrect 😢".
*/

function myresult() {
    // INPUT: read as a number the typed elements from the user.
    let num1 = parseFloat(document.getElementById('firstnumber').value);
    let operator = document.getElementById('operator').value;
    let num2 = parseFloat(document.getElementById('secondnumber').value);
    let answer = parseFloat(document.getElementById('answer').value);

    // PROCESS: To compute the correct answer.
    let result;
    switch (operator) {
        case "+" : result = num1 + num2; break;
        case "-" : result = num1 - num2; break;
        case "/" : result = num1 / num2; break;
        case "*" : result = num1 * num2; break;
        default: result = "None"; alert ("Remember to use * / + or -"); break;
    }

    // PROCESS: To compare it to the user's answer.
    let programanswer;
    if (result == answer) {
        programanswer = "Correct! 🏆";
    } else {
        programanswer = "Incorrect 😢"
}

    // OUTPUT: Display the kilogram masurement to the user.
    document.getElementById('output').innerHTML = programanswer;
}