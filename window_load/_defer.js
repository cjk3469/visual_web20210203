// async - 파싱을 하다가 다운받고 실행하다가 다시 파싱하고 또 다운받고 실행되다가....
// defer - 파싱을 쭈우 욱 하고 병렬로 다운을 받으면서 모두가 다운될 때를 기다리고
//준비가 다 되면 그 때 하나씩 순서대로 처리를 함.
console.log('js loaded');