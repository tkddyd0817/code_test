function  solution(x){
  var result ;
  //함수를 완성하세요

  var str = x.toString();
  var sum = parseInt(str[0]);
  for(let i=1 ; i< str.length ;i++){
    sum += parseInt(str[i]);
  }

  result = x % sum ? false : true
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( solution(18))