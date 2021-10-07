//import {szinez} from "./szinez.js";
//import {szamolas} from "./szamol.js";
document.addEventListener('DOMContentLoaded', function(){
	initFeladatok();
	eventUjFeladatHozzaAdasa(feladatok);
	//eventCompletedListener(feladatok);
});


const feladat1={
	name: 'Bevásárlás',
	isCompleted: false,
	difficulty: 2
};

const feladat2={
	name: 'Házi állatok etetése',
	isCompleted: false,
	difficulty: 3
};

const feladat3={
	name: 'Szemét lehúzása',
	isCompleted: false,
	difficulty: 1
};

const feladat4={
	name: 'Autómosás',
	isCompleted: false,
	difficulty: 5
};

const feladat5={
	name: 'Fűnyírás',
	isCompleted: false,
	difficulty: 4
};

const feladat6={
	name: 'Levágott fű összegyűjtése',
	isCompleted: false,
	difficulty: 2
};

const feladatok = [feladat1, feladat2, feladat3, feladat4, feladat5, feladat6];


const initFeladatok = () => {
	
	feladatKiIras(feladatok);
	eventHozzaAdas(feladatok);
	szazalek();
};

const szazalek = () => {
	document.querySelector('#completed-average').innerHTML = `${Math.round(szamolas(feladatok))} %`;
};

const szamolas = feladatok => {
    let count = 0;
    for(let i = 0; i < feladatok.length; i++){
        if(feladatok[i].isCompleted){
        count++;
        }
    }
    return count/feladatok.length*100;
};

const eventHozzaAdas = (feladatok) => {
	document.querySelectorAll('.check').forEach((input, index) => {
	input.addEventListener('change',() => {
		feladatok[index].isCompleted = input.checked;
		szazalek();
		feladatKiIras(feladatok);
	});
	})
};

const eventUjFeladatHozzaAdasa = (feladatok) => {
	let nev, nehezseg;
	document.getElementById('ujFeladatMentese').addEventListener('click', () =>{
	nev = document.getElementById('ujFeladatNeve').value;
	nehezseg = Number(document.getElementById('ujFeladatNehezsege').value);
	if(nehezseg<=5 && nehezseg>=1){
	let ujFeladat = {
		name: nev,
		isCompleted: false,
		difficulty: nehezseg
	};
	feladatok.push(ujFeladat);
	feladatKiIras(feladatok);
	eventHozzaAdas(feladatok);
	szazalek();
	}
	else{
		alert('Kérlek adj meg nehézségnek 1 és 5 közötti számot!');
	}
	});
}

const feladatKiIras = feladatok =>{
	const container = document.getElementById('todo-list');
	let text='';
	feladatok.forEach((feladat, index) => {
		console.log(feladat.isCompleted, index);
		text = text + `
		<div class=${feladat.isCompleted ? "complete" : "not-complete"}> 
		<input type="checkbox" class="check" ${feladat.isCompleted ? 'checked' : '' }> 
		<span class="szinez">${index+1}. ${feladat.name} - ${feladat.difficulty}</span>
		<input type="button" value='X'>
		</div>
		`;
	});
	container.innerHTML = text;
	eventHozzaAdas(feladatok);
};