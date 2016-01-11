/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Add test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/
test( "ReverseString Test", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the result from the reverseString function is valid
    ok( reverseString( 'testing' ), 'gnitset', 'Expected gnitset as the result, the result was: ' + reverseString( 'testing' ) );
});

test( "FindMinValue Test", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result from the reverseString function is valid
    ok( findMinValue( [7,3,4,6] ), 3, 'Expected gnitset as the result, the result was: ' + findMinValue( [7,3,4,6]) );
});

test( "findDistinctValues Test", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result from the reverseString function is valid
    ok( findDistinctValues( [1,2,1,2,1,2] ), [1,2], 'Expected gnitset as the result, the result was: ' + findDistinctValues( [1,2,1,2,1,2]) );
});

test( "removeFruits Test", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

    // Make sure the result from the reverseString function is valid
    ok( removeFruits(['Apple','Banana'], ['Apple'] ), ['Banana'], 'Expected gnitset as the result, the result was: ' + removeFruits( ['Apple','Banana'], ['Apple'] ) );
});

