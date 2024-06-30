function solution(cipher, code) {
    var answer = '';
    for (let i = 1; i * code - 1 < cipher.length; i++) {
        answer += cipher[i * code - 1];
    }
    return answer;
}