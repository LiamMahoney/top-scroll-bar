window.addEventListener('scroll', determineScrollerColors);
/*
    Calculates the percentages of each color to display for the scroll 
    bar on the top of the screen. 

    //TODO: phantom blue on scrollbar.....
*/
function determineScrollerColors() {
    let scrollbar = document.querySelector('.scroller');
    let current = window.scrollY + window.innerHeight;
    let percentage = (current / document.body.scrollHeight) * 100;

    let white = 100 - percentage;

    // Scroller will always be initially yellow, need to 
    // determine how much yellow to show
    let yellow = Math.min(percentage, 33.33);
    if (percentage < 33.33) {

    scrollbar.style.background = `linear-gradient(
        to right, #efeb0b ${yellow}%, white 0
    )`; 
    }

    // If screen is over 33 percent scrolled, some purple needs
    // to be shown
    let purple;
    if (percentage > 33.33) {
        // determining how much purple to show
        purple = Math.min(percentage, 66.66);
        scrollbar.style.background = `linear-gradient(
            to right, #efeb0b ${yellow}%, #c610c9 ${purple}%, white 0
        )`; 
    } else {
        purple = 0;
    }

    // If screen is over 66 percent scrolled, some blue needs 
    // to be shown
    let blue;
    if (percentage > 66.66) {
        // determining how much blue to show
        blue = Math.min(percentage, 100);
        scrollbar.style.background = `linear-gradient(
            to right, #efeb0b ${yellow}%, #c610c9 ${purple}%, #42e2f4 ${blue}%, white 0
        )`;  
    } else {
        blue = 0;
    }
}