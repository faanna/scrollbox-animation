const boxex = document.querySelectorAll('.box');
const h1 = document.querySelector('h1');
console.log((window.innerHeight / 5) * 4);
// console.log(h1.getBoundingClientRect().top); //110.00000762939453

window.addEventListener('scroll', showBox);

showBox();
function showBox() {
	const triggerBottom = (window.innerHeight / 5) * 4;

	boxex.forEach((el, index) => {
		const boxTop = el.getBoundingClientRect().top;
		// 대상.getBoundingClientRect :
		//대상요소의 위치정보를 얻을 수있는 메서드
		//정밀한 값을 반환함
		if (boxTop < triggerBottom) {
			el.classList.add('on');
		} else {
			el.classList.remove('on');
		}
	});
}
