const form =document.querySelector('form');
//this useCase will give you empty
//const height=parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
e.preventfault();
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');
if(height===""|height<0||isNaN(height)){
results.innerHTML=`please enter a valid height`;
}
else if(weight===""|weight<0||isNaN(weight)){
    results.innerHTML=`please enter a valid weight`;
}else{
    const bmi =(weight/(height*height)/10000).toFixed(2);
    results.innerHTML =`<span>${bmi}</span>`;
}

});                                            