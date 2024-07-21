function solution(numbers, k) {
    var answer = 0;
    var position = 0;
    for (let i = 0; i < k - 1; i++) {
        position += 2;
        if (position > numbers.length) {
            position -= numbers.length;
        }
    }
    answer = numbers[position];    
    return answer;
}