document.addEventListener('DOMContentLoaded', function(){
	initFeladatok();
});


feladat1={
	name: 'Bevásárlás',
	isCompleted: false
};

feladat2={
	name: 'Házi állatok etetése',
	isCompleted: false
};

feladat3={
	name: 'Szemét lehúzása',
	isCompleted: false
};

feladat4={
	name: 'Autómosás',
	isCompleted: true
};

feladat5={
	name: 'Fűnyírás',
	isCompleted: false
};

feladat6={
	name: 'Levágott fű összegyűjtése',
	isCompleted: true
};

const feladatok = [feladat1, feladat2, feladat3, feladat4, feladat5, feladat6];

const szamolas = feladatok => {
		let count = 0;
		for(let i = 0; i < feladatok.length; i++){
			if(feladatok[i].isCompleted){
			count++;
			}
		}
		return count/feladatok.length*100;
	}

const szinez = (index, checked) => {
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
	
const initFeladatok = () => {
	document.querySelector('#completed-average').innerHTML = `${Math.round(szamolas(feladatok))} %`;
	const container = document.getElementById('todo-list');
	let x = 0, segedtomb=[];
	feladatok.forEach(feladat => {
		container.innerHTML = container.innerHTML + `
		<div class="feladatok">
		<input type="checkbox" class="check" ${feladat.isCompleted ? 'checked' : ''}> 
		<span class="szinez">${feladat.name}</span>
		</div>
		`;
		if(feladat.isCompleted){
			segedtomb.push(x);
		}
		x++;
	});
	
	for(let i=0;i<segedtomb.length;i++){
		console.log(segedtomb[i]);
		szinez(segedtomb[i],true);
	}
	
	document.querySelectorAll('.check').forEach((input, index) => {
		input.addEventListener('change', () => {
		feladatok[index].isCompleted = input.checked;
		szinez(index, feladatok[index].isCompleted);
		document.querySelector('#completed-average').innerHTML = `${Math.round(szamolas(feladatok))} %`;
		});
	}
	);
	
	
	
};
