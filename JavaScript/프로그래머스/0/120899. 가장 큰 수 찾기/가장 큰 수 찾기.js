function solution(array) {
    var answer = [];
    let maxValue = Math.max(...array);
    let maxIndex = array.indexOf(maxValue);
    answer = [maxValue, maxIndex];
    return answer;
}