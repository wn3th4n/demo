// recursion - de quy
/*
    1. xac dinh diem dung
    2. logic handle => tao diem dung
*/

var arr = ["a", "b", "c", "d", "a", "b", "d"];

//console.log([...(new Set(arr))])
// Set la object cho chung ta tao 1 object moi moi phan tu khong trung lap

// loop -> cpu
// de quy - RAM

// functional programming

function deQuy(num) {
  if (num == 0) {
    // stop
    // ....
    return 1;
  }
  deQuy();
}

function timeCountDown(num) {
  if (num >= 0) {
    console.log(num);
    timeCountDown(num - 1);
  }
  return num;
}

// vi du

function loop(start, end, callback) {
  if (start <= end) {
    callback(start);
    return loop(start + 1, end, callback);
  }
}

var array = ["c#", "php", "java", "css", "js"];

loop(0, array.length - 1, function (index) {
  console.log("index: " + index);
});

// tinh giai thua
function giaiThua(num) {
  if (num <= 0) return 1;
  return num * giaiThua(num - 1);
}

console.log(giaiThua(6)); // 720
