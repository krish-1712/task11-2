var weather=document.createElement('div')
weather.innerHTML=`<input type="text" id="txt" placeholder="  Enter the City Name">
<button class="button-class" type="button" onClick="foo()">Search</button>`
weather.setAttribute('id','count')
var head=document.getElementById("header")
head.after(weather)
function foo() {
    var value = document.getElementById('value');
    if(value){
        value.innerText="";
    }
const p=new Promise((resolve,reject)=>{
    let cityNames= document.getElementById("txt").value
    if(!cityNames){
        alert('please enter country name');
        return;
    }
    var res= fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNames}&appid=38b841c2fac06fc20dcd3522becdd0e4`);
    res.then((json)=>resolve(json.json())).then((err)=>reject(err));
})
console.log('after promise', p);
p.then((res)=>{
    console.log(res)

      let temperature= res.main.temp
      console.log(temperature)

     let ws= res.wind.speed
     console.log(ws)
     let humidity= res.main.humidity
     console.log(humidity)
    
     let cityNames = res.name
   console.log(cityNames)
     
     var weather=document.createElement('div')
     document.getElementById('txt').value="";
     weather.innerText=` Temperature in ${cityNames} : ${temperature} 

            Windspeed in ${cityNames} : ${ws}

            Humidity  in ${cityNames} : ${humidity}`

      
         weather.setAttribute('id','value')
         weather.setAttribute('class','result')
         var res=document.getElementById("result")
         res.after(weather)
 
}).catch((err)=>{
    alert("Please enter proper value")
})
}
