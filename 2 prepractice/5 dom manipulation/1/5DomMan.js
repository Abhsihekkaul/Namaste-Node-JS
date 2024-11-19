let elem = document.querySelector('.btn1');
elem.addEventListener('click', function(){
    const element = document.getElementsByTagName('h1');
    const firstElement = element[0] //need to make sure we are choosing the first h1 
    // two ways we can add color 
    // one is element.style.color = "yellow ";
    // second if we want to add it by adding a class list then make sure that there is 
    // class named yellow is already created inside your css
    firstElement.classList.add('yellow');
})

// adding and removing the element inside the dom 
const ListOfItems = document.querySelector('.food-items');
document.querySelector('.addElement').addEventListener('click', function(){
    const newElem = document.createElement('li');
    newElem.textContent = "Hey, You add me!"
    ListOfItems.appendChild(newElem);
})

document.querySelector('.removeElement').addEventListener('click', function(){
    ListOfItems.lastChild.remove();
    console.log(ListOfItems.setAttribute('style', 'background-color: red;'));
})



document.querySelector('.Home-items').addEventListener('click',
    function(event){
        console.log(event.target.textContent);
    }
)


// printing only those items which are of the same class
document.querySelector('.Toilet-items').addEventListener('click',
    function(event){
        if(event.target && event.target.matches('.Toilet-item')){
            console.log(event.target.textContent);
        }else{
            console.log(event.target.textContent, "does not belong to the Toilet Class" );
        }
    }
)


// feedback form

document.querySelector('.feedback-form').addEventListener('submit', 
    function(event){
        event.preventDefault(); //always do it
        let feedback = document.querySelector('.myInput').value;
        let para = document.querySelector('.showFeedback'); 
        para.textContent = `The feeback is : ${feedback}`;
    }
)