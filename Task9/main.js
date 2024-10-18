const btn = document.querySelector("button");


    function handleResponse(response) {
        return response.text(); // Parse the response as plain text
    }

    // Function to log the IP address
    function logIp(ip) {
        console.log(ip);
    }

    // Function to handle errors
    function handleError(error) {
        console.error('Error fetching IP:', error);
    }

    // Main function to make the request
    function getIpAddress() {
        fetch('https://api.ipify.org')  // Request the IP in plain text
            .then(handleResponse)      
            .then(logIp)                
            .catch(handleError);        
    }


btn.addEventListener("click",getIpAddress);