function solution(n, numlist) {
    var answer = [];
    answer = numlist.filter((e) => e % n == 0)
    return answer;
}