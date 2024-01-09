//Declaration
const cell=document.querySelector('div.list')

//CICLO FOR
for(let i=1; i<=100; i++){

    const element= `<div> ${i} </div>`;

    //Multiple of 5 and 3
    if( i %3 == 0 && i %5 == 0){
        cell.innerHTML += '<div class="col-2 py-4 border text-center shadow-lg border-danger rounded" > Buzz Fizz </div>'
        console.log('buzz fizz')
    }
    //Multiple only of 3
    else if(i %3 == 0 ){
        cell.innerHTML += '<div class="col-2 py-4 border text-center shadow-lg border-warning rounded" > Fizz </div>'
        console.log('fizz')

    }
    //Multiple only of 5
    else if(i %5 == 0 ){
        cell.innerHTML += '<div class="col-2 py-4 border text-center shadow-lg border-success rounded" > Buzz </div>'
        console.log('buzz')

    }
    //All other numbers
    else {
        cell.innerHTML += `<div class="col-2 py-4 border text-center shadow-lg border-primary rounded" > ${element} </div>`
        console.log(element)
    }

}