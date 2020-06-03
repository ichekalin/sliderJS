let active = 0;
const img = document.querySelectorAll('img')

document.querySelector('.btn-slide').onclick = () => {
	img[active].classList.remove('active')
	active = ++active % img.length;
	img[active].classList.add('active')
}