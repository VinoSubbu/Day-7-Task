// PROMISE CHAINING 

fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then((data)=>{
    console.log(data);
    const [lat,lon] = data[parseInt(Math.random()*250)].latlng;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
    return fetch(URL);
})

.then((response)=> response.json())

.then((data)=>console.log(data))
.then((err)=>console.log(err))
.finally(()=> log("This is called Promise Chaining"));