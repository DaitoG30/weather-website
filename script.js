

currTemp = 30;
currHumidity = 100;
currUvIndex = 11;
UvDescription = "UV thats a funny word XD"
currDescription = "Nice"

apiKey = "c50ff6de77c94df7bfc95351251909"

async function fetchData() {
  try {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key='+apiKey+'&q=Lagos&aqi=no'); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // Parse the JSON response
    console.log(data);
    
    console.log(data["current"]);
    currTemp = data["current"].temp_c
    currHumidity = data["current"].humidity
    currUvIndex = data["current"].uv
    currDescription = data["current"]["condition"].text



   setData();

    // Further process or display the data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function calcUV(){

    if (currUvIndex > 8){
        UvDescription = "UV's getting pretty extreme! Try to limit sun exposure."
       document.getElementById("uvIndexText").innerHTML =  UvDescription
    }
    else if(currUvIndex > 4){
        UvDescription = "Remeber some sunscreen, it helps!"
        document.getElementById("uvIndexText").innerHTML =  UvDescription
    }
    else{
    UvDescription = "Dont worry about it too much, but you can never be too safe."
    document.getElementById("uvIndexText").innerHTML =  UvDescription  
    }


}

function setData(){

    document.getElementById("humidity").innerHTML = currHumidity + "%"
    document.getElementById("uvIndex").innerHTML  = "Uv Index: " + currUvIndex 
    document.getElementById("description").innerHTML =  currDescription 
    document.getElementById("temprature").innerHTML = currTemp

    calcUV();
}

fetchData();
setData();