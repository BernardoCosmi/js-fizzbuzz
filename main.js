const ul=document.querySelector('ul.list')

for(let i=1; i<=100; i++){

    const element= `<li> ${i} </li>`;

    if( i %3 == 0 && i %5 == 0){
        ul.innerHTML += '<li> Buzz Fizz </li>'

    }else if(i %3 == 0 ){
        ul.innerHTML += '<li> Fizz </li>'

    }else if(i %5 == 0 ){
        ul.innerHTML += '<li> Buzz </li>'
        
    }else {
        ul.innerHTML += element
    }
}