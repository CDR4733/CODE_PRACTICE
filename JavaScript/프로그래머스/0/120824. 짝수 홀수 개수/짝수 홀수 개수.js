function solution(num_list) {
    var answer = [];
    var eCount = 0;
    var oCount = 0;
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 == 0) {
            eCount++
        } else {
            oCount++
        }
    }
    answer = [eCount, oCount];
    return answer;
}