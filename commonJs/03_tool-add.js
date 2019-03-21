//假设 我们工具中有个 工具模块

let tools = {
    add: (...numbers) => {
        let sum = 0;
        for (let number in numbers) {
             sum += numbers[number];
        }
        return sum;
    }
}
module.exports = tools;