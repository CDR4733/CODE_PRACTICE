function solution(emergency) {
    var answer = [];
    answer = emergency.map((e) => {
        let count = 1;
        for (let i = 0; i < emergency.length; i++) {
            if (e < emergency[i]) {
                count++;
            }
        }
        return count;
    });
    return answer;
}