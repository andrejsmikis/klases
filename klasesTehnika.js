function klasesTehnika1() {
    let kabinetaNr=14;
    let datoruSkaits=0;
   
    for(i=0;i<datoruDB.length;i++){
        razotajs=datoruDB[i][razotajs];
        if (razotajs="HP")
        {
            datoruSkaits++;
        }
    }
    console.log(datoruSkaits);

    rindas.innerHTML += `
<tr>
<td>${kabinetaNr}</td>
<td>${datoruSkaits}</td>
</tr>`;
  
    }