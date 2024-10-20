const btn = document.querySelector("button");


    function handleResponse(response) {
        return response.text(); // Parse the response as plain text
    }

    // Function to change button text with the IP address
    function changeButtonText(ip) {
        btn.textContent = ip;
    }

    // Function to handle errors
    function handleError(error) {
        console.error('Error fetching IP:', error);
    }

    // Main function to make the request
    function getIpAddress() {
        fetch('https://api.ipify.org')  // Request the IP in plain text
            .then(handleResponse)      
            .then(changeButtonText)                
            .catch(handleError);
    }


btn.addEventListener("click",getIpAddress);