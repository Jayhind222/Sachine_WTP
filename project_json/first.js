//https://api.openweathermap.org/data/2.5/weather?q={mumbai}&appid={05cd4085a146dbba80c842c686f2553e}

console.log('start 😎');

//fetchData("banglore")

/*const fetchData = (city)=>{

    
    const data= fetch('https://api.openweathermap.org/data/2.5/weather?q={mumbai}&appid={05cd4085a146dbba80c842c686f2553e}')
    .then(response => response.json())
    .then(response => response.log(result))
    .catch(error => console.log('error', error));

    //console.log(date);
    console.log("middle 😎"); 
} */
const fetchData= async(city) => {
    const response= await axios('https://api.openweathermap.org/data/2.5/weather?q={mumbai}&appid={05cd4085a146dbba80c842c686f2553e}')
    console.log(response.data.main.temp-273.15);
    console.log('middle');
}

function search {
    const city = document.getElementsByClassName('city')[0].ariaValueMax;
    fetchData(city)
}

fetchData()

console.log("End 😃");