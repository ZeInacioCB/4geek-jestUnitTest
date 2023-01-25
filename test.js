// import the function sum from the app.js file
const { fromDollarToYen, fromYenToPound } = require('./app.js');


// first test for sum function
test('adds 14 + 9 to equal 23', () => {
    // import the function sum from the app.js file
    const { sum } = require('./app.js');

    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


// testing fromEUroToDollar
test("1 EUR should be 1.206 USD", function(){
    //import the function from app.js
    const {fromEuroToDollar} = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

// testing fromDollarToYen
test("1 USD should be 11,511 JPY", function(){

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(70);

    // from the converting system:
    // 1 USD = 127.9/1.2 = 106,58 JPY/USD
    const oneUSDis = 127.9 / 1.2; 
    
    // if 1 USD is 11,511 JPY, then 70 USD should be (75 * 11,511)
    const expected = 70 * oneUSDis;
    
    // this is the comparison for the unit test
     expect(yens).toBe(expected); //1 USD is 11.511 JPY, then 70 euros should be = (75 * 11.511))
})

// testing fromYenToPound
test("1 JPY should be 0.00625 GBP", function(){

    // use the function like its suppoed to be used
    const yens = fromYenToPound(1150);

    // from the converting system:
    // 1 JPY = 0.8/127.9 GBP = 0.00625 GBP/JPY
    const oneJPYtoGBP = 0.8 / 127.9; 
    
    // if 1 USD is 11,511 JPY, then 70 USD should be (75 * 11,511)
    const expected = 1150 * oneJPYtoGBP;
    
    // this is the comparison for the unit test
     expect(yens).toBe(expected); //1 USD is 11.511 JPY, then 70 euros should be = (75 * 11.511))
})