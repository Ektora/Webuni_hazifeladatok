//import {szinez} from "./szinez.js";
//import {szamolas} from "./szamol.js";
document.addEventListener('DOMContentLoaded', function(){
	initFeladatok();
	eventUjFeladatHozzaAdasa(feladatok);
	novekvoRendezes(feladatok);
	csokkenoRendezes(feladatok);
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

const feladatTorles = (feladatok) => {
	document.querySelectorAll('.feladatTorles').forEach((input, index) => {
	input.addEventListener('click',() => {
		feladatok.splice(index,1);
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
		text = text + `
		<div class=${feladat.isCompleted ? "complete" : "not-complete"}> 
		<input type="checkbox" class="check" ${feladat.isCompleted ? 'checked' : '' }> 
		<span class="szinez">${index+1}. ${feladat.name} - ${feladat.difficulty}</span>
		<input type="button" class="feladatTorles" value='X'>
		</div>
		`;
	});
	container.innerHTML = text;
	eventHozzaAdas(feladatok);
	feladatTorles(feladatok);
	legnehezebbElem(feladatok);
};

const novekvoRendezes = feladatok =>{
	const gomb = document.getElementById('novekvoGomb');
	gomb.addEventListener('click', ()=>{
		feladatok.sort((a,b)=>{
			return a.difficulty - b.difficulty;
		});
		feladatKiIras(feladatok);
	});
};

const csokkenoRendezes = feladatok =>{
	const gomb = document.getElementById('csokkenoGomb');
	gomb.addEventListener('click', ()=>{
		feladatok.sort((a,b)=>{
			return b.difficulty - a.difficulty;
		});
		feladatKiIras(feladatok);
	});
};

const legnehezebbElem = feladatok =>{
	const elem = document.getElementById('legnehezebbElem');
	let seged = feladatok.map((value) =>{
	if(!value.isCompleted)
		return value.difficulty;
	else
		return 0;
	});
	if(Math.max(...seged) > 0)
	elem.innerHTML = `${feladatok[seged.indexOf(Math.max(...seged))].name} - ${feladatok[seged.indexOf(Math.max(...seged))].difficulty}`;
	else
	elem.innerHTML = "Gratulálok, minden feladatot elvégeztél!";
};
