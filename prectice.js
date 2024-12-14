const sum3 = (arr, n, target) => {
  let ans = [];
  for (let i = 0; i < n - 1; i++) {
    let temp = [];
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === target) {
        temp.push(i);
        temp.push(j);
      }
    }
    ans.push(temp);
  }
  console.log(ans);
};

let arr = [2, 3, 4, 2, 5];
let target = 7;
let n = arr.length;
sum3(arr, n, target);
