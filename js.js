// Завдання 1
// Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let start=prompt("Task 1. Enter start of range");
let end =prompt("Enter the end range");
let sum=0;
for (let i=+start; i<= +end; i++){
    sum += i;
}
document.write ("<b>Task 1.</b> <br>"+sum+ "<br>");

// Завдання 2
// Запросить 2 числа и найти только наибольший общий делитель.
let firstNumber = prompt("Task 2. Enter the first number");
let secondNumber = prompt("Enter the second number");

for( let d_2=+secondNumber; +firstNumber>=+secondNumber; d_2=d_2-1 ){
    if(+firstNumber % d_2 == 0 && +secondNumber % d_2 == 0){
        document.write("<b>Task 2.</b><br> "+d_2+"<br>");
        break
    }
}
for( let d_2=+firstNumber; +firstNumber<+secondNumber; d_2=d_2-1 ){
    if(+firstNumber % d_2 == 0 && +secondNumber % d_2 == 0){
        document.write("<b>Task 2.</b> <br>"+d_2+"<br>");
        break
    }
}

// Завдання 3
// Запросить у пользователя число и вывести все делители этого числа.
let number_3 =prompt("Task 3. Enter the number");
document.write("<b>Task 3.</b> <br>")
for (let d_3=0; d_3<=+number_3; d_3++){
    if(+number_3%d_3==0){
        document.write(d_3+" ")
    }
}
document.write('<br>');

// Завдання 4
// Определить количество цифр в введенном числе.

// Я теж можу бути чітером:)
// let number_4 = prompt ("Task 4. Enter the number");
// alert(String(number_4).length)

let number_4 = prompt ("Task 4. Enter the number");
let sum_4=0;
for (i_4=1; +number_4>=i_4; i_4=i_4*10){
    sum_4++
}
document.write("<b>Task 4. </b><br>"+sum_4+"<br>")

// Завдання 5
// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
let i_5=1;
let positive =0;
let negative =0;
let zero=0;
let even =0;
let odd =0;
while (i_5<=10){
    let number_5=prompt("Enter the number");
    i_5++;
    console.log(number_5)
    
    if(+number_5>0){
        positive++
    }
    else if (+number_5<0){
        negative++
    }
    else if(+number_5==0){
        zero++
    }
    if(+number_5%2==0 && +number_5!==0){
        even++
    }
    else if(+number_5%2!==0){
        odd++
    }
}
document.write("<b>Task 5.</b> <br> " + "Positive numbers - " + positive+ "<br>" + "Negative numbers - "+negative+ "<br>" +"Zero - "+zero+"<br>"+"Even numbers - "+even+"<br>" + "Odd numbers - "+odd+"<br>");

// Завдання 6
// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
let answer=" ";
do{
    let firstNumber_6=prompt("Task 6. Enter the first number");
    let action_6=prompt("Choose a mathematical action: +, -, /, *");
    let secondNumber_6=prompt("Enter the second number");
    let equels;
    if(action_6==="+"){
        equels=Number(firstNumber_6) + Number(secondNumber_6);
    }
    else if (action_6 == "-"){
         equels= Number(firstNumber_6) - Number(secondNumber_6);
    }
    else if(action_6 == "/"){
         equels=Number(firstNumber_6) / Number(secondNumber_6);
    }
    else {
         equels=Number(firstNumber_6) * Number(secondNumber_6);
    }
    alert("Your answer is -  "+equels);
    answer=prompt("Do you want to count anything else? Enter yes or no ");
} while (answer=="yes");


// Завдання 7
// Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
// Чіт. Не знала як робити, знала, як погуглити
let number_7 = prompt("Task 7. Enter the number");
let shift = prompt("How many digits to shift?"); 
alert("Your answer - "+number_7.replace(RegExp("(\\d{" + shift + "})(\\d*)$"), "$2$1"));


// Завдання 8
// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
const week_1 ="Sunday";
const week_2 = "Monday";
const  week_3 = "Tuesday";
const week_4 = "Wednesday";
const week_5 = "Thursday";
const week_6 = "Friday";
const week_7= "Saturday";

let answer_8_1;
let answer_8_2;
let answer_8_3;
let answer_8_4;
let answer_8_5;
let answer_8_6;
let mainAnswer;

do {
     answer_8_1=prompt("Task 8. " +week_1+ ". Do you want to see next day?");
     if (answer_8_1=="ok"){
        answer_8_2=prompt(week_2+ ". Do you want to see next day?");
        if  (answer_8_2=="ok") {
            answer_8_3=prompt(week_3+ ". Do you want to see next day?");  
            if (answer_8_3=="ok"){
                answer_8_4=prompt(week_4+ ". Do you want to see next day?"); 
                if (answer_8_4=="ok"){
                    answer_8_5=prompt(week_5+ ". Do you want to see next day?"); 
                    if (answer_8_5=="ok"){
                        answer_8_6=prompt(week_6+ ". Do you want to see next day?"); 
                        if (answer_8_6=="ok"){
                            mainAnswer=prompt(week_7+ ". Do you want to see next day?");
                        }
                    }
                    else{
                        break
                    }
                }
                else{
                    break
                }
            }
            else{
                break
            }
        }
        else{
            break
        }
     }
     else{
         break
     }

} while (mainAnswer=="ok")

// Завдання 9
// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
let mpt;
document.write ("<b>Task 9. </b><br>")
for (let multiplicand=1; multiplicand<=9; multiplicand++){
    for (let factor=1; factor<=9; factor++){
        mtp=multiplicand*factor;
        document.write(multiplicand+" * "+factor+" = "+mtp+"<br>")
    }
}

// Завдання 10
// Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

