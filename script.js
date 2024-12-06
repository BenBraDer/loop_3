function printToPage(content) {
    const outputDiv = document.getElementById('output');
    const p = document.createElement('p');
    p.innerHTML = content;
    outputDiv.appendChild(p);
}

// Task 1: Skriv ut "Hello World" 10 ganger
for (let i = 0; i < 10; i++) {
    printToPage("Hello World");
}

// Task 2: Skriv ut tallene fra 1-50
let numbers1to50 = "";
for (let i = 1; i <= 50; i++) {
    numbers1to50 += i;
}
printToPage(numbers1to50);

// Task 3: Beregn summen av tallene mellom 1 og 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
printToPage("Sum of numbers from 1 to 10: " + sum);

// Task 4: Lag en løkke som skriver ut følgende:
let pyramid = "";
for (let i = 1; i <= 4; i++) {
    pyramid += "#";
    printToPage(pyramid);
}

// Task 5: Skriv ut partallene fra 1-50
let evenNumbers = "";
for (let i = 2; i <= 50; i += 2) {
    evenNumbers += i;
}
printToPage("Even numbers from 1 to 50: " + evenNumbers);

// Task 6: Skriv ut tall fra 1 til 100 som er delbare med 3 og 5
let divisibleBy3And5 = "";
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        divisibleBy3And5 += i + ", ";
    }
}
printToPage("Numbers divisible by 3 and 5: " + divisibleBy3And5.slice(0, -2));

// Task 7: Finn det største tallet i en liste ved bruk av for-loop
let numbers = [5, 8, 12, 3, 7];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
printToPage("Largest number: " + largest);

// Task 8: Forstørr teksten brukeren skriver inn (<h1> ... <h6>)
let text = "Hello";
for (let i = 1; i <= 6; i++) {
    printToPage(`<h${i}>${text}</h${i}>`);
}

// URFORDRING 1: Tegn et tomt rektangel basert på brukerens input
let width = 10;
let height = 5;
let rectangle = "";
for (let i = 1; i <= height; i++) {
    if (i === 1 || i === height) {
        rectangle += "*".repeat(width) + "<br>";
    } else {
        rectangle += "*" + "&nbsp;".repeat(width - 2) + "*" + "<br>";
    }
}
printToPage(rectangle);

// URFORDRING 2: Tegn linjer basert på N
let N = 5;
for (let i = 1; i <= N; i++) {
    printToPage("Du har " + i + " linjer.");
}
