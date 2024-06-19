// kiểu dữ liệu số (number)

/**
    Trong Javascript có 2 loại số:

    Các số thông thường trong Javascript được lưu trữ dưới dạng 64 bit IEEE-754 (còn được gọi là các số phẩy động). Trong hầu hết các trường hợp khi làm việc với Javascript là chúng ta sử dụng loại số này.
    Số BigInt là loại số sử dụng để biểu thị số nguyên có độ dài tùy ý.
    Vì mức độ thông dụng nên ở đây chúng ta chỉ tìm hiểu về loại số thông thường.
 * */

// khai báo thông thường
var million = 1000000;


//  Cũng là khai báo số 1000000 nhưng có cách viết khác. Bạn có thể thêm chữ e vào sau số 1 và chỉ định số số không phía sau chữ e như sau:
var million = 1e6; // tương tự: 1000000

// hoặc

var billion = 2e9; // tương tự: 2000000000 (hai tỏi à nhầm hai tỉ)

/*
Đối tượng Number
Đối tượng Number trong Javascript là đối tượng giúp chúng ta định nghĩa số và làm việc với số. Chúng ta thường sử dụng các phương thức sau của đối tượng Number khi làm việc với số trong Javascript:

Phương thức	|| Vai trò
Number.isFinite()	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
Number.isInteger()	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
Number.parseFloat()	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
Number.parseInt()	Chuyển đổi chuỗi đã cho thành một số nguyên
Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi
*/

Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238
Number.parseInt('237.22') // 237
Number.parseInt('34 56 78') // 34
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString();    // '11'
(18).toString();     // '18'
(17.3).toString();   // '17.3'

var age  = 18
var pi = 3.14

var result = 20 / 'abc'

console.log(isFinite(result)) // false

var otherNumber = new Number(9)

function isNumber(value){
    return value === +value;
}

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false


//Tuy nhiên, trong JavaScript thì kiểu của NaN cũng là number:
console.log(typeof NaN); // 'number'


// Chính vì vậy, nếu sử dụng hàm isNumber trên với đối số là NaN thì hàm vẫn trả về đúng:
console.log(isNumber(NaN)); // true
console.log(isNumber(100 / 'abc')); // true



//check NaN
parseFloat('geoff') == NaN;
parseFloat('geoff') == Number.NaN;
isNaN(NaN)
