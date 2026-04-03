// let studentNamesLiteral = [];

// let studentNamesObject = new Array();

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// let numbers = [10, 20, 30, 40, 50];

// let flags = [true, false, true, false];

// let mixedArray = ["Ali", 25, true, null];

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h1>Qualifications:</h1>");

// for (let i = 0; i < qualifications.length; i++) {
//     document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }

// let studentNames = ["Anas", "Khzer", "Salahuddin"];
// let scores = [450, 400, 480];
// let totalMarks = 500;
// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (scores[i] / totalMarks) * 100;

//     document.write(
//         "Score of " + studentNames[i] + " is " + scores[i] +
//         ". Percentage: " + percentage + "%<br>"
//     );
// }
// let colors = ["Red", "Green", "Blue"];

// document.write("<b>Initial Colors:</b> " + colors + "<br><br>");

// let colorStart = prompt("Enter a color to add at the beginning:");
// colors.unshift(colorStart);
// document.write("<b>After adding at beginning:</b> " + colors + "<br><br>");

// let colorEnd = prompt("Enter a color to add at the end:");
// colors.push(colorEnd);
// document.write("<b>After adding at end:</b> " + colors + "<br><br>");

// colors.unshift("Purple", "Orange");
// document.write("<b>After adding two colors at beginning:</b> " + colors + "<br><br>");

// colors.shift();
// document.write("<b>After deleting first color:</b> " + colors + "<br><br>");

// colors.pop();
// document.write("<b>After deleting last color:</b> " + colors + "<br><br>");

// let addIndex = +prompt("At which index do you want to add a color?");
// let addColor = prompt("Enter the color name:");
// colors.splice(addIndex, 0, addColor);
// document.write("<b>After adding color at index:</b> " + colors + "<br><br>");

// let delIndex = +prompt("At which index do you want to delete color(s)?");
// let delCount = +prompt("How many colors do you want to delete?");
// colors.splice(delIndex, delCount);
// document.write("<b>After deleting color(s):</b> " + colors + "<br><br>");