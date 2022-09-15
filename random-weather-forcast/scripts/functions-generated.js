let dates = [
    {
        "date": "Fri Sep 16 2022",
        "morning": "wi-storm-showers",
        "day": "wi-day-cloudy",
        "evening": "wi-showers",
        "night": "wi-night-storm-showers"
    },
    {
        "date": "Sat Sep 17 2022",
        "morning": "wi-hail",
        "day": "wi-sprinkle",
        "evening": "wi-storm-showers",
        "night": "wi-night-storm-showers"
    },
    {
        "date": "Sun Sep 18 2022",
        "morning": "wi-rain-wind",
        "day": "wi-hail",
        "evening": "wi-thunderstorm",
        "night": "wi-night-partly-cloudy"
    },
    {
        "date": "Mon Sep 19 2022",
        "morning": "wi-cloud",
        "day": "wi-day-sunny",
        "evening": "wi-rain",
        "night": "wi-night-storm-showers"
    },
    {
        "date": "Tue Sep 20 2022",
        "morning": "wi-showers",
        "day": "wi-day-sunny",
        "evening": "wi-rain-wind",
        "night": "wi-night-cloudy"
    },
    {
        "date": "Wed Sep 21 2022",
        "morning": "wi-cloudy-gusts",
        "day": "wi-thunderstorm",
        "evening": "wi-cloud",
        "night": "wi-night-clear"
    },
    {
        "date": "Thu Sep 22 2022",
        "morning": "wi-cloudy",
        "day": "wi-fog",
        "evening": "wi-cloud",
        "night": "wi-night-rain-wind"
    },
    {
        "date": "Fri Sep 23 2022",
        "morning": "wi-storm-showers",
        "day": "wi-day-cloudy-high",
        "evening": "wi-storm-showers",
        "night": "wi-night-rain"
    },
    {
        "date": "Sat Sep 24 2022",
        "morning": "wi-sprinkle",
        "day": "wi-cloudy-gusts",
        "evening": "wi-cloud",
        "night": "wi-night-clear"
    },
    {
        "date": "Sun Sep 25 2022",
        "morning": "wi-hail",
        "day": "wi-storm-showers",
        "evening": "wi-thunderstorm",
        "night": "wi-night-showers"
    },
    {
        "date": "Mon Sep 26 2022",
        "morning": "wi-storm-showers",
        "day": "wi-cloud",
        "evening": "wi-storm-showers",
        "night": "wi-night-fog"
    },
    {
        "date": "Tue Sep 27 2022",
        "morning": "wi-cloudy",
        "day": "wi-cloudy",
        "evening": "wi-rain-wind",
        "night": "wi-night-rain-wind"
    },
    {
        "date": "Wed Sep 28 2022",
        "morning": "wi-cloudy",
        "day": "wi-showers",
        "evening": "wi-storm-showers",
        "night": "wi-night-storm-showers"
    },
    {
        "date": "Thu Sep 29 2022",
        "morning": "wi-cloudy-gusts",
        "day": "wi-storm-showers",
        "evening": "wi-sprinkle",
        "night": "wi-night-thunderstorm"
    },
    {
        "date": "Fri Sep 30 2022",
        "morning": "wi-sprinkle",
        "day": "wi-cloudy-gusts",
        "evening": "wi-cloudy-gusts",
        "night": "wi-night-fog"
    },
    {
        "date": "Sat Oct 01 2022",
        "morning": "wi-cloudy-gusts",
        "day": "wi-fog",
        "evening": "wi-showers",
        "night": "wi-night-lightning"
    },
    {
        "date": "Sun Oct 02 2022",
        "morning": "wi-rain-wind",
        "day": "wi-fog",
        "evening": "wi-hail",
        "night": "wi-night-fog"
    },
    {
        "date": "Mon Oct 03 2022",
        "morning": "wi-thunderstorm",
        "day": "wi-showers",
        "evening": "wi-cloudy-gusts",
        "night": "wi-night-thunderstorm"
    },
    {
        "date": "Tue Oct 04 2022",
        "morning": "wi-storm-showers",
        "day": "wi-fog",
        "evening": "wi-showers",
        "night": "wi-night-storm-showers"
    },
    {
        "date": "Wed Oct 05 2022",
        "morning": "wi-rain",
        "day": "wi-storm-showers",
        "evening": "wi-thunderstorm",
        "night": "wi-night-lightning"
    },
    {
        "date": "Thu Oct 06 2022",
        "morning": "wi-storm-showers",
        "day": "wi-hail",
        "evening": "wi-cloudy-gusts",
        "night": "wi-night-clear"
    },
    {
        "date": "Fri Oct 07 2022",
        "morning": "wi-cloudy",
        "day": "wi-day-cloudy",
        "evening": "wi-storm-showers",
        "night": "wi-night-rain-wind"
    },
    {
        "date": "Sat Oct 08 2022",
        "morning": "wi-storm-showers",
        "day": "wi-hail",
        "evening": "wi-rain",
        "night": "wi-night-rain"
    },
    {
        "date": "Sun Oct 09 2022",
        "morning": "wi-rain-wind",
        "day": "wi-rain-wind",
        "evening": "wi-thunderstorm",
        "night": "wi-night-cloudy"
    },
    {
        "date": "Mon Oct 10 2022",
        "morning": "wi-cloud",
        "day": "wi-cloudy-gusts",
        "evening": "wi-rain",
        "night": "wi-night-lightning"
    },
    {
        "date": "Tue Oct 11 2022",
        "morning": "wi-sprinkle",
        "day": "wi-rain-wind",
        "evening": "wi-sprinkle",
        "night": "wi-night-showers"
    },
    {
        "date": "Wed Oct 12 2022",
        "morning": "wi-cloudy-gusts",
        "day": "wi-day-cloudy-high",
        "evening": "wi-thunderstorm",
        "night": "wi-night-clear"
    },
    {
        "date": "Thu Oct 13 2022",
        "morning": "wi-rain",
        "day": "wi-cloudy-gusts",
        "evening": "wi-fog",
        "night": "wi-night-rain-wind"
    },
    {
        "date": "Fri Oct 14 2022",
        "morning": "wi-thunderstorm",
        "day": "wi-cloudy-gusts",
        "evening": "wi-cloudy-gusts",
        "night": "wi-night-fog"
    },
    {
        "date": "Sat Oct 15 2022",
        "morning": "wi-showers",
        "day": "wi-day-cloudy",
        "evening": "wi-thunderstorm",
        "night": "wi-night-partly-cloudy"
    },
    {
        "date": "Sun Oct 16 2022",
        "morning": "wi-fog",
        "day": "wi-day-cloudy-high",
        "evening": "wi-storm-showers",
        "night": "wi-night-fog"
    }
];

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
let output = '';

dates.forEach(function(date, index) { 
    output +='<div class="col-3 mb-3">';
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
