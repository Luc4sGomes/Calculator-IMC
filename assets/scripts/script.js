//catch the event of submit of form;

const form = document.querySelector('#form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log('event preventended');
});

