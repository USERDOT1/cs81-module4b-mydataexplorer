const weekData = [
  {day:"Monday", sleepHours:7.5,screenTime:9,mood:"Depressed",focusLevel:5, workedOnGame:false},
  {day:"Tuesday", sleepHours:8,screenTime:8,mood:"Sad",focusLevel:7,workedOnGame:true},
  {day:"Wednesday", sleepHours:7.8,screenTime:6,mood:"Neutral",focusLevel:5,workedOnGame:true},
  {day:"Thursday", sleepHours:8,screenTime:7,mood:"Neutral",focusLevel:5,workedOnGame:true},
  {day:"Friday", sleepHours:8,screenTime:10,mood:"Depressed",focusLevel:3,workedOnGame:false},
  {day:"Saturaday", sleepHours:10,screenTime:13,mood:"Good",focusLevel:9,workedOnGame:true},
  {day:"Sunday", sleepHours:10,screenTime:10,mood:"Good",focusLevel:9,workedOnGame:true}
]

// I predict that the days I work on my game and get a good sleep I am happier
// I also predict a correlation between focus and mood
function dayWithHighestScreenTime(dayCollection){
  let highestScreenTimeDay = {day:"NA",screenTime:-1};
  for (let day of dayCollection){
    if (day.screenTime > highestScreenTimeDay.screenTime){
      highestScreenTimeDay = day;
    }
  }
  return(highestScreenTimeDay.day);
}

function correlateFocusAndWorkedOnGame(dayCollection){
  let totalWorkedOnGameDays = 0;
  let totalFocusWorkedOnGameDays = 0;
  let totalDidntWorkOnGameDays = 0;
  let totalFocusDidntWorkOnGameDays = 0;
  for (let day of dayCollection){
    if (day.workedOnGame){
      totalWorkedOnGameDays += 1;
      totalFocusWorkedOnGameDays += day.focusLevel;
    }
    else{
      totalDidntWorkOnGameDays += 1;
      totalFocusDidntWorkOnGameDays += day.focusLevel;
    }
  }
  return "On days when I worked on my game my average focus was "+(totalFocusWorkedOnGameDays/totalWorkedOnGameDays)+" and on days when I didn't my average focus was "+(totalFocusDidntWorkOnGameDays/totalDidntWorkOnGameDays)
}

function mostFrequentMood(dayCollection){
  
}
console.log(dayWithHighestScreenTime(weekData));
console.log(correlateFocusAndWorkedOnGame(weekData))
