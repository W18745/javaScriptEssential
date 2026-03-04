let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);
let area = length * width;
document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateGrocery(){
    let G1 = parseFloat(document.getElementById('G1').value);
    let G2 = parseFloat(document.getElementById('G2').value);
    let G3 = parseFloat(document.getElementById('G3').value);
    let total = G1 + G2 + G3;
    document.getElementById('Grocery_result').innerText = `The Grocery Total is: ${total}`;
}

