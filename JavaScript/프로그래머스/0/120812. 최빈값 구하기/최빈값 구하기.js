function solution(array) {
    var answer = 0;
    let data = new Map();
    
    // 1. array에 각 숫자가 몇 번 등장하는지 기록하는 data 초기세팅
    for (let i = 0; i <= Math.max(...array); i++) {
        data.set(i, 0);
    }
    
    // 2. array를 순회하면서 각 숫자가 몇 번 등장하는지 data에 기록
    for (let j = 0; j < array.length; j++) {
        // 2-1. 기존에 저장된 수에서 +1된 수를 새로 세팅해줌
        data.set(array[j], data.get(array[j]) + 1);
    }
    
    // 3. 가장 많이 등장한 횟수가 몇인지 확인
    const dataValueArr = Array.from(data.values());
    const maxCount = Math.max(...dataValueArr);
    
    // 4. 가장 많이 등장한 횟수를 가진 key가 여럿이면 -1 반환, 아니면 key 반환
    if (dataValueArr.indexOf(maxCount) !== dataValueArr.lastIndexOf(maxCount)) {
        answer = -1;
    } else {
        answer = dataValueArr.indexOf(maxCount);
    }
    return answer;
}