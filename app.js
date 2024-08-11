// Get the button element
const button = document.getElementById('myButton');

// Get the button's div element
const divElement = document.getElementsByClassName('button');

// Add a click event listener to the button 
button.addEventListener('click', () => {
    // Set a timeout to delay the action
    setTimeout(() => {
        //Action to be performed after the delay
        divElement.innerText = 'Callback executed after 5 seconds';
        console.log(divElement.innerText);
    }, 5000); // 5000 milliseconds = 5 seconds
});