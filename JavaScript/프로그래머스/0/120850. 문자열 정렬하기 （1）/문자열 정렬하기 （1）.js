function solution(my_string) {
    var answer = [];
    var str = my_string.split('').sort()
    for (let i = 0; i < str.length; i++) {
        if(isNaN(Number(str[i]))) {
            break;
        } else {
            answer.push(Number(str[i]));
        }
    }
    return answer;
}