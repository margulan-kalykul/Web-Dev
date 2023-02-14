let name = "Ilya";

alert( `hello ${1}` );
// returns "hello 1" because ${1} is replaced with 1

alert( `hello ${"name"}` ); 
// returns "hello name" because "name" is specified inside ${} as a string

alert( `hello ${name}` ); 
// returns "hello Ilya" because name is variable that contains string "Ilya"