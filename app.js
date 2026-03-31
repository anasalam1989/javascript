// Assignment # 1 - ALERTS

// var message = "Error! Please enter a valid password"
// alert (message);

// var message = "Welcome to JS Land \n Happy Coding!"
// alert (message);

// var msg1 = "Welcome to JS Land..."
// var msg2 = "Happy Coding!"
// alert (msg1);
// alert (msg2);

// console.log("Hello... I can run JS through my web browser's console");

// Assignment # 2 - VARIABLES FOR STRINGS

// var username;
// var myName = "Anas Alam";
// var myName ="Anas Alam Habibullah";

// var message;
// var message = "Hello World";
// alert (message);

// var name = "Anas Alam";
// var age = 36;
// var msg = ("Learning Java Script");

// alert (name);
// alert (age);
// alert (msg);

// alert ("Pizza\nPizz\nPiz\nPi\nP");

// var email = ("info@manahiltech.com");
// var msg = ("My email address is " + email);
// alert (msg);

// var book = ("A smarter way to learn JavaScript");
// alert (book);

// var msg = ("Yah! I can write HTML content through JavaScript");
// document.write(msg);  

// var msg = ("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
// alert (msg);

// Assignment # 3 - VARIABLES FOR STRINGS

// var age = 36;
// var msg = ("I am " + age + " years old");
// alert (msg);

// var visit_count = 0;
// visit_count = visit_count + 1; 
// var msg = ("You have visited this site " + visit_count + " times");
// alert (msg);

// var brith_year = 1989;
// var msg = ("My birth year is " + brith_year + "<br>Data type of my declared variable is number");
// document.write(msg);    

// var visitor_name = "Anas Alam";
// var product_title = "T-shirt";
// var quantity = 5;
// var msg = (visitor_name + " ordered " + quantity + " " + product_title + "(s) on XYZ Clothing store");
// document.write(msg);

// Assignment # 4 - VARIABLES NAMES LEGAL & ILLEGAL


// Legal variable names:
// var username;
// var userAge;
// var $salary;
// var _score;
// var totalMarks1;

// // Illegal variable names:

// var 1username;   // starts with digit ❌
// var my-name;     // dash not allowed ❌
// var my name;     // space not allowed ❌
// var var;         // reserved keyword ❌
// var function;    // reserved keyword ❌

// var details = "Anas Alam", age = 36, city = "Karachi";
// document.write(details + "<br>" + age + "<br>" + city);



// Assignment # 5 - MATHEMATICAL OPERATIONS
// var val = 3;
// var val1 = 5;
// document.write("Sum of 3 and 5 is " + (val + val1) + "<br>");
// document.write("Subtraction of 3 and 5 is " + (val - val1) + "<br>");
// document.write("Multiplication of 3 and 5 is " + (val * val1) + "<br>");
// document.write("Division of 3 and 5 is " + (val / val1) + "<br>");

// var declaredVariable;
// document.write("Value after variable declaration is: " + declaredVariable + "<br>");
// declaredVariable = 5;
// document.write("Initial value: " + declaredVariable + "<br>");
// document.write("Value after increment is: " + (++declaredVariable) + "<br>");
// declaredVariable = declaredVariable + 7;
// document.write("Value after addition is: " + declaredVariable + "<br>");
// declaredVariable = --declaredVariable;
// document.write("Value after decrement is: " + declaredVariable + "<br>");
// document.write("The remainder is: " + (declaredVariable % 3) + "<br>");

// var movie_ticket_price = 600;
// var total_cost = movie_ticket_price * 5;
// document.write("Total cost to buy 5 tickets to a movie is " + total_cost + " PKR");

// var num = prompt("Enter a number to display its multiplication table:");
// num = Number(num); // convert input to number

// for (var i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + " = " + (num * i) + "<br>");
//

// Assignment # 6 - 9 MATHEMATICAL OPERATIONS
// Step 1: Declare variable

// var a = 10;
// document.write("Value of a is: " + a + "<br><br>");

// // Step 2: Post-increment (a++)
// document.write("Value of a++ is: " + a++ + "<br>");
// document.write("Now value of a is: " + a + "<br><br>");

// // Step 3: Pre-decrement (--a)
// document.write("The value of --a is: " + --a + "<br>");
// document.write("Now value of a is: " + a + "<br><br>");

// // Step 4: Post-decrement (a--)
// document.write("The value of a-- is: " + a-- + "<br>");
// document.write("Now value of a is: " + a + "<br>");

// // Step 1: Ask user for their name
// var userName = prompt("Enter your name:");

// // Step 2: Greet the user
// alert("Hello, " + userName + "! Welcome to JavaScript.");

// Step 1: Take input from user
// var num = prompt("Enter a number to display its multiplication table:");

// // Step 2: Check if user entered a value
// if (num === "" || num === null) {
//     num = 5; // default value
// } 

// num = Number(num); // convert input to number

// // Step 3: Display heading
// document.write("<h2>Multiplication Table of " + num + "</h2>");

// // Step 4: Generate multiplication table using for loop
// for (var i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + " = " + (num * i) + "<br>");
// }
// Hello