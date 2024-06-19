// string javascript

// create string
var fullName = new String("Trong Kien");
var firstName = "Kien";

// backslash (\)
var str = 'Hello "World"!';

// escape character (\)
var str = "Hello \n World!";

// lenght string
console.log(fullName.length);

//connect string
var connect = "a" + "b" + "c";
console.log(connect);

//template string
console.log(`connect string :${connect}`); // connect string: abc

// javascript string methods
// 1. charAt() : return character at index
var str = "Hello World";
console.log(str.charAt(0)); // H

// 2. charCodeAt() : return character code at index
console.log(str.charCodeAt(0)); // 72

// 3. concat() : join two string
var str1 = "Hello";
var str2 = "World";
var str3 = str1.concat(" ", str2);
console.log(str3); // Hello World

// 4. fromCharCode() : return string from character code
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Hello

// 5. indexOf() : return index of first character
var str = "Hello World";
console.log(str.indexOf("o")); // 4

// 6. lastIndexOf() : return index of last character
var str = "Hello World";
console.log(str.lastIndexOf("o")); // 8

// 7. match() : return an array of matches
var str = "Hello World";
console.log(str.match(/o/g)); // ["o", "o"]

// 8. replace() : replace a string with another string
var str = "Hello World";
console.log(str.replace("World", "Kien")); // Hello Kien

// 9. search() : return index of first match
var str = "Hello World";
console.log(str.search("World")); // 6

// 10. slice() : return a part of string
var str = "Hello World";
console.log(str.slice(0, 5)); // Hello

// 11. split() : return an array of strings
var str = "Hello World";
console.log(str.split(" ")); // ["Hello", "World"]

// 12. substr() : return a part of string
var str = "Hello World";
console.log(str.substr(0, 5)); // Hello

// 13. substring() : return a part of string
var str = "Hello World";
console.log(str.substring(0, 5)); // Hello

// 14. toLowerCase() : return string in lowercase
var str = "Hello World";
console.log(str.toLowerCase()); // hello world

// 15. toUpperCase() : return string in uppercase
var str = "Hello World";
console.log(str.toUpperCase()); // HELLO WORLD

// 16. trim() : return string without whitespace
var str = "  Hello World  ";
console.log(str.trim()); // Hello World

// 17. valueOf() : return string
var str = "Hello World";
console.log(str.valueOf()); // Hello World

// 18. length : return length of string
var str = "Hello World";
console.log(str.length); // 11

// 19. includes() : return true if string includes a substring
var str = "Hello World";
console.log(str.includes("World")); // true

// 20. startsWith() : return true if string starts with a substring
var str = "Hello World";
console.log(str.startsWith("Hello")); // true

// 21. endsWith() : return true if string ends with a substring
var str = "Hello World";
console.log(str.endsWith("World")); // true

// 22. repeat() : return a new string with specified number of copies
var str = "Hello ";
console.log(str.repeat(3)); // Hello Hello Hello

// 23. padStart() : return a new string with specified length by adding characters to the beginning
var str = "Hello";
console.log(str.padStart(10, " ")); //     Hello

// 24. padEnd() : return a new string with specified length by adding characters to the end
var str = "Hello";
console.log(str.padEnd(10, " ")); // Hello

// 25. match() : return an array of matches
var str = "Hello World";
console.log(str.match(/o/g)); // ["o", "o"]

// 26. search() : return index of first match
var str = "Hello World";
console.log(str.search(/o/g)); // 4

// 27. replace() : return a new string with specified substring replaced
var str = "Hello World";
console.log(str.replace(/o/g, "x")); // Hellx Wxrld

// 28. split() : return an array of substrings
var str = "Hello World";
console.log(str.split(" ")); // ["Hello", "World"]

// 29. slice() : return a new string by extracting a part of the original string
var str = "Hello World";
console.log(str.slice(0, 5)); // Hello

// 30. substring() : return a new string by extracting a part of the original string
var str = "Hello World";
console.log(str.substring(0, 5)); // Hello
