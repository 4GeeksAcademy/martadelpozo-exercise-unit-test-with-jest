// Import the function sum from the app.js file
const { sum, fromEuroToDollar,fromDollarToYen,
    fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})




test("50 dollars should be 7825 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');
  
    // Use the function to convert 50 dollars to yen
    const yenAmount = fromDollarToYen(50);
  
    // Calculate the expected yen amount
    const expectedYenAmount = 50 * 156.5;
  
    // Perform the test comparison
    expect(yenAmount).toBe(expectedYenAmount);
  });



test("1000 yen should be 5.46 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');
  
    // Use the function as it should be used
    const pounds = fromYenToPound(1000);
  
    // Calculate the expected value using the correct conversion factor
    const expected = 1000/ 156.5 * 0.87; // 1 yen = 0.0054 pounds
  
    // Perform the test comparison
    expect(pounds).toBe(expected);
  });

