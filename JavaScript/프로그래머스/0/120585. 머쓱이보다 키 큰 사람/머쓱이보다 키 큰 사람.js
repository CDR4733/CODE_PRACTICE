function solution(array, height) {
    var answer = 0;
    array.sort((a, b) => b - a)
    for (let i = 0; i < array.length; i++) {
        if (array[i] > height) {
            answer++
        } else { 
            break;
        }
    }
    return answer;
}