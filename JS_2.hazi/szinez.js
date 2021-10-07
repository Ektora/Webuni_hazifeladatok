export const szinez = (index, checked) => {
	const tomb = document.querySelectorAll('.szinez');
	if(checked){
		tomb[index].style.color='black';
		tomb[index].style.textDecoration='line-through';
	}
	else{
		tomb[index].style.color='red';
		tomb[index].style.textDecoration='none';
	}
};