// Get the button and message elements
const button = document.getElementById('myButton');
const messageDiv = document.getElementById('message');

// Function to fetch data from the JSONPlaceholder API using async/await
async function fetchPosts() {
    // Display loading message
    messageDiv.innerHTML = 'Loading...';

    // Create a timeout promise that rejects after 5 seconds
    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Operation timed out.'); // Reject with timeout error
        }, 5000); // 5000 milliseconds = 5 seconds
    });

    // Create a fetch promise to get data
    const fetchPromise = fetch('https://dummyjson.com/posts')
        .then(response => {
            if (!response.ok) {
                return ('Network response was not ok');
            }else{return response.json()};
        });

    // Using Promise.race to race the fetch promise against the timeout promise
    return Promise.race([fetchPromise, timeoutPromise]);
}

// Add a click event listener to the button
button.addEventListener('click', async () => {
    try {
        // Fetch posts using async/await
        const data = await fetchPosts();
        // Extract post titles and display them
        const postTitles = data.posts.map(post => post.title).join(', ');
        messageDiv.innerHTML = `Fetched Posts: ${postTitles}`;
    } catch (error) {
        messageDiv.innerHTML = `Error fetching data: ${error}`;
    }
});
