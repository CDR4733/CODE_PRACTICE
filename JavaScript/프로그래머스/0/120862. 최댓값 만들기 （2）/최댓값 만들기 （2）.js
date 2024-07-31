function solution(numbers) {
    var answer = 0;
    numbers.sort((a, b) => b - a);
    var plus = numbers[0] * numbers[1];
    var minus = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    answer = plus > minus ? plus : minus;
    return answer;
}