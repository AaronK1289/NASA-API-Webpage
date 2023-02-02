const sendRequestButton = document.getElementById("send-request-button");

function sendRequest() {
        // Get the selected date
        const date = document.querySelector("input[type='date']").value;

      // Send the GET request to the NASA API
        fetch(`https://api.nasa.gov/planetary/apod?api_key=sVsiAtXEb2B76AIeLGcjZd5ZykMvgEcbjrwODjtI&date=${date}`)
        .then(response => response.json())
        .then(data => getter(data));
            
        

        
    

}

const getter = data => {
    document.getElementById('header-').textContent=data.title
    document.getElementById('item1-').textContent=data.explanation
    document.getElementById('img').src = data.hdurl
    document.getElementById('item4-').textContent="Copyright: " + data.copyright
    document.getElementById('item5-').textContent="Date: " + data.date
}
