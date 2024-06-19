/*
1. Tạo mảng
    - cách tạo
    - sử dụng cách nào? tại sao?
    - kiểm tra data type?
2. Truy xuất mảng
    - độ dài mảng
    - lấy phần tử theo index
3. Làm việc với mảng
    *Keyworks
        1. to string
        2. join
        3. pop
        4. push
        5. shift
        6. unshift
        7. splice
        8. slice
        9. concat
        10. sort
        11. reverse
        12. indexOf
        13. lastIndexOf
        14. includes
        15. find
        16. findIndex
        17. fill
        18. copyWithin
        19. entries
        20. keys
        21. values
        22. forEach
        23. map
        24. filter
        25. some
        26. every
        27. reduce
        28. reduceRight
        29. flat
        30. flatMap
        31. flatMapDepth
    */

var arr = [1, 2, 3, 4, 5];
var arr1 = new Array(1, 2, 3, 4, 5);
var arr2 = new Array(5);

// nối mảng lại tạo thành 1 string
arr = arr.join(", "); //1, 2, 3, 4, 5

arr = arr.split(", "); // [1, 2, 3, 4, 5]

// xóa phần tử cuối cùng
// console.log(arr.pop()); // 5
// console.log(arr); // [1, 2, 3, 4]

// thêm phần tử vào cuối mảng
// console.log(arr.push(5)); // 5

// xóa phần tử đầu tiên
// console.log(arr.shift()); // 1

// thêm phần tử vào đầu mảng
// console.log(arr.unshift(0)); // 1

//xóa phần tử theo index
arr.splice(1, 1); // [1, 3]

// thay đổi phần tử theo index
arr.splice(1, 1, 3); // [1, 3]

/*
    Array methods:
    foreach
    every
    some
    find
    filter
    map
    reduce
*/

var courses = [
  { id: 1, name: "Javascript", coin: 0 },
  { id: 2, name: "HTML, CSS", coin: 100 },
  { id: 3, name: "PHP", coin: 200 },
  { id: 4, name: "Ruby", coin: 300 },
  { id: 5, name: "Javascript", coin: 0 },
];

//foreach
courses.forEach(function (course, index) {
  console.log(index, course.name);
});

// every
var isFree = courses.every(function (course, index) {
  return course.coin === 0;
}); // kiem tra tung phan tu neu coin === 0 thi true, den 1 phan tu != 0 ngung ham every va tra ve false

// some
var isFree = courses.some(function (course, index) {
  return course.coin === 0;
}); // kiem tra tung phan tu chi can 1 phan tu co coin === 0 thi return true

//find
var php = courses.find(function (course, index) {
  return course.name === "PHP";
}); // tra ve 1 phan tu tim dc

//filter
var filter = courses.filter(function (course, index) {
  return course.name === "Javascript";
});

//map
function courseHandler(course) {
  // console.log(course);
  return course;
}

var newCourses = courses.map(courseHandler);

console.log(newCourses);
