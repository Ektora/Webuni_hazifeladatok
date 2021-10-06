import {szinez} from "./szinez.js";
import {szamolas} from "./szamol.js";
document.addEventListener('DOMContentLoaded', function(){
	initFeladatok();
});

const feladatok = [];
feladatok[0]={
	name: 'Bevásárlás',
	nehezseg : 2,
	isCompleted: false
};

feladatok[1]={
	name: 'Házi állatok etetése',
	nehezseg : 4,
	isCompleted: false
};

feladatok[2]={
	name: 'Szemét lehúzása',
	nehezseg : 1,
	isCompleted: false
};

feladatok[3]={
	name: 'Autómosás',
	nehezseg : 5,
	isCompleted: false
};

feladatok[4]={
	name: 'Fűnyírás',
	nehezseg : 4,
	isCompleted: false
};

feladatok[5]={
	name: 'Levágott fű összegyűjtése',
	nehezseg : 2,
	isCompleted: false
};

//const feladatok = [feladat1, feladat2, feladat3, feladat4, feladat5, feladat6];


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
