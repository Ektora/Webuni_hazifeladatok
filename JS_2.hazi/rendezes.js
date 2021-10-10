import { feladatKiIras } from "./index.js";
export const novekvoRendezes = feladatok =>{
	const gomb = document.getElementById('novekvoGomb');
	gomb.addEventListener('click', ()=>{
		feladatok.sort((a,b)=>{
			return a.difficulty - b.difficulty;
		});
		feladatKiIras(feladatok);
	});
};

export const csokkenoRendezes = feladatok =>{
	const gomb = document.getElementById('csokkenoGomb');
	gomb.addEventListener('click', ()=>{
		feladatok.sort((a,b)=>{
			return b.difficulty - a.difficulty;
		});
		feladatKiIras(feladatok);
	});
};

export const legnehezebbElem = feladatok =>{
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