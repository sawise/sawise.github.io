let dates = [];
let weathers = ['wi-cloudy-gusts','wi-cloud','wi-cloudy',
                'wi-rain','wi-rain-wind', 'wi-showers',
                'wi-thunderstorm', 'wi-storm-showers',
                'wi-fog','wi-sprinkle', 'wi-hail','wi-storm-showers'];
                
let weathersDay = ['wi-day-sunny', 'wi-day-cloudy',
                    'wi-day-cloudy-high'];

let weathersNight = ['wi-night-clear', 'wi-night-cloudy',
                     'wi-night-fog', 'wi-night-partly-cloudy', 
                'wi-night-rain', 'wi-night-thunderstorm', 'wi-night-storm-showers',
            'wi-night-lightning', 'wi-night-rain-wind', 'wi-night-showers'];
let weatherWinter = ['wi-snow','wi-rain-mix','wi-sleet'];
const mergedWeathers = weathersDay.concat(weathers);
let skipHail = false;
let last = Math.floor(Math.random() * ((weathers.length-1) - 0 + 1) + 0);
for(let i = 0; i < 31; i++){
    const date = new Date();
    date.setDate(date.getDate() + 1+i)
    let weatherForcast = {
                            date: date.toDateString(),
                            morning: random('m'),
                            day: random('d'),
                            evening: random('e'), 
                            night:random('n')
                        };
    dates.push(weatherForcast);
}

function random(type){
    if(type === 'm'|| type === 'e'){
        return weathers[Math.floor(Math.random() * ((weathers.length-1) - 0 + 1) + 0)];
    } else if (type === 'd') {
        return mergedWeathers[Math.floor(Math.random() * ((mergedWeathers.length-1) - 0 + 1) + 0)];
    }else if (type === 'n') {
        return weathersNight[Math.floor(Math.random() * ((weathersNight.length-1) - 0 + 1) + 0)];
    }
}
function formatText(name){
    return name.replace('wi-', '').replace('day-', '').replace('night-', '');
}

let output= '';
dates.forEach(function(date, index) { 
    output +='<div class="col-3" style="margin-bottom:10px">';
    output += date.date+"<br>";
    output += 'Morning: <i class=" wi '+date.morning+'"></i> '+formatText(date.morning)+'<br>';
    output += 'Day: <i class=" wi '+date.day+'"></i> '+formatText(date.day)+'<br>';
    output += 'Evening: <i class="wi '+date.evening+'"></i> '+formatText(date.evening)+'<br>';
    output += 'Night: <i class=" wi '+date.night+'"></i> '+formatText(date.night)+'<br>';
    output +='</div>';
})
$( document ).ready(function() {
    document.getElementById('weather-forcast').innerHTML = output;

});
console.log(dates);
