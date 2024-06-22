function solution(money) {
    var answer = [];
    var coffee = parseInt(money / 5500);
    var change = money % 5500;
    answer = [coffee, change]
    return answer;
}