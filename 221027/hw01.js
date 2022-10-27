axios.(a)('https://api.example.com/data')
	.(b)(function (response) {
	console.log((c))
})

// (a) : get
// (b) : then
// (c) : response.data

// 동기 함수는 들어온 순서대로 작업을 진행하면서 해당 작업이 끝마쳐야 다음 작업을 실행하는 함수
// 비동기 함수는 들어온 순서대로 작업을 진행하지만, 해당 작업이 끝나지 않았더라도 다음 함수를 실행하는 함수