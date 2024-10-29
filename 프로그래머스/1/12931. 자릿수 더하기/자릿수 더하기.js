function solution(n)
{
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}

var solution = n => String(n).split('').reduce((a,c)=>a+c*1, 0);