function solution(num_list, n) {
    var answer = [];
    for (let i = 0; i < num_list.length / n; i++) {
        let array = [];
        for (let j = 0; j < n; j++) {
            array.push(num_list[(n * i) + j]);
        }
        answer.push(array);
    }
    return answer;
}