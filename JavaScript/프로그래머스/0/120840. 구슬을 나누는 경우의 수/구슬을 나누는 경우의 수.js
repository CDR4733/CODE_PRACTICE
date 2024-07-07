const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1))
function solution(balls, share) {
    var answer = 0;   
    answer = Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
    return answer;
}
