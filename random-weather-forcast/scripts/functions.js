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
let savedForcast = localStorage.getItem('weatherForcast') ? JSON.parse(localStorage.getItem('weatherForcast')) : null;

const samsForcast = [
    {
        "date": "Wed Sep 21 2022",
        "morning": "wi-sprinkle",
        "day": "wi-storm-showers",
        "evening": "wi-thunderstorm",
        "night": "wi-night-showers"
    },
    {
        "date": "Thu Sep 22 2022",
        "morning": "wi-thunderstorm",
        "day": "wi-cloudy",
        "evening": "wi-sprinkle",
        "night": "wi-night-thunderstorm"
    },
    {
        "date": "Fri Sep 23 2022",
        "morning": "wi-cloudy",
        "day": "wi-storm-showers",
        "evening": "wi-cloudy-gusts",
        "night": "wi-night-clear"
    },
    {
        "date": "Sat Sep 24 2022",
        "morning": "wi-hail",
        "day": "wi-showers",
        "evening": "wi-storm-showers",
        "night": "wi-night-rain-wind"
    },
    {
        "date": "Sun Sep 25 2022",
        "morning": "wi-rain",
        "day": "wi-rain",
        "evening": "wi-thunderstorm",
        "night": "wi-night-lightning"
    },
    {
        "date": "Mon Sep 26 2022",
        "morning": "wi-cloudy-gusts",
        "day": "wi-rain-wind",
        "evening": "wi-rain",
        "night": "wi-night-lightning"
    },
    {
        "date": "Tue Sep 27 2022",
        "morning": "wi-rain",
        "day": "wi-sprinkle",
        "evening": "wi-rain",
        "night": "wi-night-thunderstorm"
    },
    {
        "date": "Wed Sep 28 2022",
        "morning": "wi-showers",
        "day": "wi-day-cloudy",
        "evening": "wi-fog",
        "night": "wi-night-cloudy"
    },
    {
        "date": "Thu Sep 29 2022",
        "morning": "wi-cloudy-gusts",
        "day": "wi-cloudy-gusts",
        "evening": "wi-thunderstorm",
        "night": "wi-night-rain-wind"
    },
    {
        "date": "Fri Sep 30 2022",
        "morning": "wi-rain-wind",
        "day": "wi-showers",
        "evening": "wi-rain",
        "night": "wi-night-partly-cloudy"
    },
    {
        "date": "Sat Oct 01 2022",
        "morning": "wi-cloud",
        "day": "wi-day-cloudy",
        "evening": "wi-thunderstorm",
        "night": "wi-night-storm-showers"
    },
    {
        "date": "Sun Oct 02 2022",
        "morning": "wi-storm-showers",
        "day": "wi-cloudy-gusts",
        "evening": "wi-sprinkle",
        "night": "wi-night-partly-cloudy"
    },
    {
        "date": "Mon Oct 03 2022",
        "morning": "wi-rain-wind",
        "day": "wi-showers",
        "evening": "wi-sprinkle",
        "night": "wi-night-cloudy"
    },
    {
        "date": "Tue Oct 04 2022",
        "morning": "wi-storm-showers",
        "day": "wi-cloudy",
        "evening": "wi-storm-showers",
        "night": "wi-night-rain-wind"
    },
    {
        "date": "Wed Oct 05 2022",
        "morning": "wi-thunderstorm",
        "day": "wi-cloudy",
        "evening": "wi-showers",
        "night": "wi-night-lightning"
    },
    {
        "date": "Thu Oct 06 2022",
        "morning": "wi-thunderstorm",
        "day": "wi-day-cloudy",
        "evening": "wi-rain",
        "night": "wi-night-lightning"
    },
    {
        "date": "Fri Oct 07 2022",
        "morning": "wi-cloud",
        "day": "wi-day-cloudy",
        "evening": "wi-thunderstorm",
        "night": "wi-night-lightning"
    },
    {
        "date": "Sat Oct 08 2022",
        "morning": "wi-hail",
        "day": "wi-cloudy-gusts",
        "evening": "wi-storm-showers",
        "night": "wi-night-showers"
    },
    {
        "date": "Sun Oct 09 2022",
        "morning": "wi-cloudy",
        "day": "wi-hail",
        "evening": "wi-storm-showers",
        "night": "wi-night-lightning"
    },
    {
        "date": "Mon Oct 10 2022",
        "morning": "wi-storm-showers",
        "day": "wi-rain",
        "evening": "wi-fog",
        "night": "wi-night-rain"
    },
    {
        "date": "Tue Oct 11 2022",
        "morning": "wi-cloudy-gusts",
        "day": "wi-cloudy",
        "evening": "wi-cloud",
        "night": "wi-night-rain"
    },
    {
        "date": "Wed Oct 12 2022",
        "morning": "wi-cloudy",
        "day": "wi-day-cloudy",
        "evening": "wi-cloudy",
        "night": "wi-night-storm-showers"
    },
    {
        "date": "Thu Oct 13 2022",
        "morning": "wi-rain",
        "day": "wi-rain",
        "evening": "wi-cloudy-gusts",
        "night": "wi-night-rain"
    },
    {
        "date": "Fri Oct 14 2022",
        "morning": "wi-hail",
        "day": "wi-day-sunny",
        "evening": "wi-cloudy",
        "night": "wi-night-showers"
    },
    {
        "date": "Sat Oct 15 2022",
        "morning": "wi-storm-showers",
        "day": "wi-fog",
        "evening": "wi-rain",
        "night": "wi-night-clear"
    },
    {
        "date": "Sun Oct 16 2022",
        "morning": "wi-fog",
        "day": "wi-day-sunny",
        "evening": "wi-sprinkle",
        "night": "wi-night-clear"
    },
    {
        "date": "Mon Oct 17 2022",
        "morning": "wi-sprinkle",
        "day": "wi-hail",
        "evening": "wi-showers",
        "night": "wi-night-cloudy"
    },
    {
        "date": "Tue Oct 18 2022",
        "morning": "wi-storm-showers",
        "day": "wi-day-cloudy",
        "evening": "wi-fog",
        "night": "wi-night-rain-wind"
    },
    {
        "date": "Wed Oct 19 2022",
        "morning": "wi-storm-showers",
        "day": "wi-thunderstorm",
        "evening": "wi-showers",
        "night": "wi-night-storm-showers"
    },
    {
        "date": "Thu Oct 20 2022",
        "morning": "wi-storm-showers",
        "day": "wi-day-cloudy-high",
        "evening": "wi-storm-showers",
        "night": "wi-night-rain-wind"
    },
    {
        "date": "Fri Oct 21 2022",
        "morning": "wi-thunderstorm",
        "day": "wi-rain",
        "evening": "wi-sprinkle",
        "night": "wi-night-storm-showers"
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

function generateForcast(forceRefresh, myForecast){
    if(savedForcast == null || forceRefresh) {
        dates = [];
        if(myForecast){
            dates = samsForcast;
        } else {
            for(let i = 0; i < 31; i++){
                const date = new Date();
                date.setDate(date.getDate() + i)
                let weatherForcast = {
                                        date: date.toDateString(),
                                        morning: random('m'),
                                        day: random('d'),
                                        evening: random('e'), 
                                        night:random('n')
                                    };
                dates.push(weatherForcast);
            }
        }
        
        localStorage.setItem('weatherForcast',JSON.stringify(dates));
        savedForcast = dates;
    } else {
        dates = savedForcast;
    }
    
    let output= '';
    dates.forEach(function(date, index) { 
        output +='<div class="col-3 col-md-3 mb-3">';
        output += '<h4 class="mt-2">'+date.date+"</h4>";
        output += 'Night: <i class=" wi '+date.night+'"></i> '+formatText(date.night)+'<br>';
        output += 'Morning: <i class=" wi '+date.morning+'"></i> '+formatText(date.morning)+'<br>';
        output += 'Day: <i class=" wi '+date.day+'"></i> '+formatText(date.day)+'<br>';
        output += 'Evening: <i class="wi '+date.evening+'"></i> '+formatText(date.evening)+'<br>';
        output +='</div>';
    });
    document.getElementById('weather-forcast').innerHTML = output;
}


$( document ).ready(function() {
    generateForcast()
});
console.log(dates);
