
let input=document.querySelector('input');
let button=document.querySelector('button');
let para=document.getElementsByClassName('left-side-para');
let para2=document.getElementById('para2');
let para3=document.getElementById('para3');

const url=("https://api.dictionaryapi.dev/api/v2/entries/en/")

const myFunction=async()=>{
  
    let inpword=input.value;
    fetch(`${url}${inpword}`)
    .then((response)=>response.json())
    .then((data)=>{
       
        para[0].innerText=inpword;
        para2.innerText=data[0].meanings[0].definitions[0].definition;
        para3.innerText=data[0].meanings[0].synonyms[0];
      }).catch(()=>{
        para2.innerHTML=`<p>Could not find Meaning </p>`;
        para3.innerHTML=`<p>Can't find</p>`;
      })
       
    };
 
button.addEventListener('click',myFunction);

