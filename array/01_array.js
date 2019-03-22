let array_test = [1,2,3];
let a = array_test.join('-');
console.log(a);
//push pop
array_test.push(4); //插入数组
array_test.pop();  //将数组 最后一项移除
//shift unshift
let array_test2 = [222,212,31,2,3];
array_test2.unshift('111',22);
console.log(array_test2);
array_test2.shift();
console.log(array_test2);
//sort
var b = array_test2.sort((value1, value2) => {
     if (value1 < value2) {return -1;}
      else if (value1 > value2) { return 1;}
      else {
          return 0;
      }
});
//reverse
console.log(b);
console.log(b.reverse()); //原数组改变
//concat
let ax = [1,2,34];
let cx =ax.concat(1,2,3);
console.log(cx);

//slice 切

let arraySlice = [1,2,3,4,5,6,7,8];
let slice1 = arraySlice.slice(1); //从 下标为1 的 位置开始
let slice2 =arraySlice.slice(1,4); // 从下标为1的位置开始到 3
//如果下标为负数， 则等于 下标 + 数组长度后 再做运算
console.log(slice1);
console.log(slice2);

// splice 粘
console.log('splice')
let arraySplice = [1,2,3,4,5,6];
let arraySplice2 = arraySlice.splice(2,1);
console.log(arraySlice);
console.log(arraySplice2);
let arraySplice3 = arraySplice.splice(2,2,10,20);
console.log(arraySplice);

//indexOf lastIndexOf

//接收两个参数 要查找的项 和 表示查找位置的索引