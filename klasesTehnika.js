function klasesTehnika1() {
    let kabinetaNr=14;
    let datoruSkaits=0;
    for(i=0;i<datoruDB.length;i++){
        razotajs=datoruDB[i][razotajs];
        if razotajs="HP"
        {
            datoruSkaits++;
        }
    }

    rindas.innerHTML += `
<tr>
<td>${kabinetaNr}</td>
<td>${' - '}</td>
<td>${datoruSkaits}</td>
</tr>`;
   
    }