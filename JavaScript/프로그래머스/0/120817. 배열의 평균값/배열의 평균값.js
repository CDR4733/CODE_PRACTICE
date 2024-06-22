function solution(numbers) {
    var sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    var answer = sum / numbers.length;
    return answer.toFixed(1);
}