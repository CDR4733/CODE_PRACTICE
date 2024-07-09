function solution(numbers, direction) {
    var answer = [];
    if (direction == "right") {
        let r = numbers[numbers.length - 1];
        numbers.pop();
        numbers.unshift(r);
    } else if (direction == "left") {
        let l = numbers[0];
        numbers.shift();
        numbers.push(l);
    }
    answer = numbers;
    return answer;
}