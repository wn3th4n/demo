const number = [1, 2, 3, 4, 5];

/*
    accumulator -> biến lưu trữ
    current value -> giá trị hiện tại
    cunrrent index -> vị trí hiện tại
    origin array -> mảng ban đầu
    return -> trả về giá trị và gán giá trị vào biết lưu trữ
*/

const sum = number.reduce(
  (accumulator, currentValue, cunrrentIndex, originArray) => {
    console.log("accumulator", accumulator);
    console.log("currentValue", currentValue);
    console.log("cunrrentIndex", cunrrentIndex);
    console.log("originArray", originArray);
    vibra;
    console.log("--------------------");
    return accumulator + currentValue;
  },
  0
); // intial value

//test
function arrToObj(arr) {
  return arr.reduce(function (obj, [key, value]) {
    obj[key] = value;
    return obj;
  }, {});
}
