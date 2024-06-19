//loop

/*
1. for - Lập trình với điều kiện
2. for/in - Lặp qua key của đối tượng
3. for/of - Lặp qua value của đối tượng
4. while - Lặp với điều kiện
5. do...while - Lặp ít nhất 1 lần, sau đó lặp khi đúng điều kiện
break - continue - Thoát khỏi vòng lặp
*/

//for
for (var i = 0; i < 10; i++) {
  //do something
}
/**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 *
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 *
 * => Treo trình duyệt!!!
 */

var getRandNumbers = (min, max, lenght) => {
  var result = [];
  for (let i = 0; i < lenght; i++) {
    var rand = Math.floor(Math.random() * (max - min + 1)) + min;
    result.push(rand);
  }
  return result;
};

// Expected results
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17
function getTotal(arr) {
  var num = 0;
  for (var i = 0; i < arr.length; i++) num += arr[i];

  return num;
}

//for...of / for.. in
var languages = ["PHP", "JS", "Ruby", "Python"];
var object = { name: "Nguyen Van A", age: 16 };

for (var language in languages) {
  console.log(language); // Output: 0 1 2 3
} // use for object

for (var language of languages) {
  console.log(language); // Output: PHP JS Ruby Python
} // use for array

// can u of in object?
for (var key of Object.keys(object)) {
  console.log(key); // Output: name age
}

//while
var i = 0;
while (i < 10) {
  console.log(i); // Output: 0 1 2 3 4 5 6 7 8 9
  i++;
}

//do...while
var i = 0;
do {
  console.log(i); // Output: 0 1 2 3 4 5 6 7 8 9
  i++;
} while (i < 10);

//break
for (var language of languages) {
  if (language == "PHP") {
    break;
  }
  console.log(language); // Output: PHP
}

//continue
for (var language of languages) {
  if (language == "PHP") {
    continue;
  }
  console.log(language); // Output: JS Ruby Python
}
