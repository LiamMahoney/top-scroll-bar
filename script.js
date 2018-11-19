document.body.addEventListener('scroll', determineScrollerColors);
window.addEventListener('load', determineScrollerColors);

/*
    Calculates the percentages of each color to display for the scroll 
    bar on the top of the screen. 

    //TODO: phantom blue on scrollbar.....
*/
function determineScrollerColors() {

    let scrollbar = document.querySelector('.scroller');
    //users current position on the document
    let current = document.body.scrollTop + window.innerHeight;
    //the percent the user is seing of the total page 
    let percentage = (current / document.body.scrollHeight) * 100;

    let white = 100 - percentage;

    scrollbar.style.background = `linear-gradient(
        to right, black ${percentage}%, white 0
    )`; 
}