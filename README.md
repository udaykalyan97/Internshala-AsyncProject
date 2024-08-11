# Internshala-AsyncProject

## Assignment: Asynchronous Programming Exercises

### Objective
Develop a series of JavaScript exercises focusing on different asynchronous programming techniques such as callbacks, promises, and async/await, while integrating API calls to display data.

### Evaluation Criteria

#### Part 1: Callbacks (25 Marks)

**Task 1: HTML and CSS (5 Marks)**
- Create an HTML file named `callbacks.html` with the basic structure of an HTML document.
- Focus on styling and design. Responsiveness is not required.

**Task 2: Callback Implementation (10 Marks)**
- Include a button and a `div` element in the HTML file.
- Implement JavaScript functionality that uses a callback function to simulate a delay of 5 seconds when the button is clicked.
- Update the text in the `div` element to display "Callback executed after 5 seconds" after the delay.

**Task 3: Fetch Data from API (10 Marks)**
- Modify the callback implementation to fetch data from the JSONPlaceholder API (e.g., posts endpoint: [https://dummyjson.com/posts](https://dummyjson.com/posts)).
- Display the fetched data (e.g., post titles) in the `div` element after the callback is executed.

#### Part 2: Promises (25 Marks)

**Task 1: HTML and CSS (5 Marks)**
- Create an HTML file named `promises.html` with the basic structure of an HTML document.
- Focus on styling and design. Responsiveness is not required.

**Task 2: Promise Implementation (15 Marks)**
- Include a button and a `div` element in the HTML file.
- Implement JavaScript functionality that creates a Promise to fetch data from the JSONPlaceholder API (e.g., posts endpoint: [https://dummyjson.com/posts](https://dummyjson.com/posts)).
- Display "Loading..." in the `div` element while the Promise is pending, and update the text to show the fetched data once the Promise is resolved.

**Task 3: Error Handling (5 Marks)**
- Implement error handling for the Promise.
- If the Promise takes longer than 5 seconds to resolve, reject it with a message like "Operation timed out."
- Display the error message in the `div` if the Promise is rejected.

#### Part 3: Async/Await (25 Marks)

**Task 1: HTML and CSS (5 Marks)**
- Create an HTML file named `async-await.html` with the basic structure of an HTML document.
- Focus on styling and design. Responsiveness is not required.

**Task 2: Async/Await Implementation (10 Marks)**
- Include a button and a `div` element in the HTML file.
- Implement JavaScript functionality that uses async/await to fetch data from the JSONPlaceholder API (e.g., posts endpoint: [https://dummyjson.com/posts](https://dummyjson.com/posts)).
- Display "Loading..." in the `div` element while the data is being fetched, and update the text to show the fetched data once it is received.

**Task 3: Error Handling (10 Marks)**
- Implement error handling in the async/await implementation.
- Handle errors such as network issues or timeouts gracefully, and display error messages in the `div` element.

### Assessment
- Marks will be assigned for each task based on adherence to guidelines, implementation correctness, code quality, and overall understanding of asynchronous programming concepts.

### Submission Guidelines
- Submit a zip file containing all HTML files, the CSS file, and the JavaScript file.
- Ensure code readability and organization, including appropriate comments for complex sections.

