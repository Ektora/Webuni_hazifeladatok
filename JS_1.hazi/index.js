import {szinez} from "./szinez.js";
import {szamolas} from "./szamol.js";
document.addEventListener('DOMContentLoaded', function(){
	initFeladatok();
});


const feladat1={
	name: 'Bevásárlás',
	isCompleted: false
};

const feladat2={
	name: 'Házi állatok etetése',
	isCompleted: false
};

const feladat3={
	name: 'Szemét lehúzása',
	isCompleted: false
};

const feladat4={
	name: 'Autómosás',
	isCompleted: true
};

const feladat5={
	name: 'Fűnyírás',
	isCompleted: false
};

const feladat6={
	name: 'Levágott fű összegyűjtése',
	isCompleted: true
};

const feladatok = [feladat1, feladat2, feladat3, feladat4, feladat5, feladat6];


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
