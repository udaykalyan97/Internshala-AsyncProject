// Get the button element
const button = document.getElementById('myButton');

// Get the button's div element
const messageDiv = document.getElementById('message');



// Callback Implementation
// Add a click event listener to the button 
button.addEventListener('click', () => {
    // Set a timeout to delay the action
    setTimeout(() => {
        //Action to be performed after the delay
        messageDiv.innerHTML = 'Callback executed after 5 seconds';
    }, 5000); // 5000 milliseconds = 5 seconds
});


// Fetch Data from API
const apiData = fetch('https://dummyjson.com/posts');

// Get the FetchAPI button
const fetchAPI = document.getElementById('fetchAPI');

// Get the fetchAPI div element
const displayFetchedData = document.getElementById('fetchedData');

// Function to fetch data from the API
function fetchData(callback){
    // Use the Fetch API to get the data from the JSONPlaceholder API
    setTimeout(() => {
        fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
    }, 5000)
}

fetchAPI.addEventListener('click', () => {
    displayFetchedData.innerHTML = 'Fetching data... Please wait for 5 seconds';
    fetchData((error,data) => {
        if(error){
            displayFetchedData.innerHTML = 'Error fetching Data';
        }else{
            const postTitles = data.posts.map(post => post.title).join(', ');
            displayFetchedData.innerHTML = `Fetched Posts: ${postTitles}`;
        }
    })
        
})