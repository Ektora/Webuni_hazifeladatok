export const szamolas = feladatok => {
    let count = 0;
    for(let i = 0; i < feladatok.length; i++){
        if(feladatok[i].isCompleted){
        count++;
        }
    }
    return count/feladatok.length*100;
}
