const faqItems = document.querySelectorAll('.box');
const newArr = Array.from(faqItems);
console.log(newArr);
newArr.forEach(element => {
       element.addEventListener('click', (item)=>{
        element.classList.toggle('active')
       })
})