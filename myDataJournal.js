const weekData = [
  {day:"Monday", sleepHours:7.5,screenTime:9,mood:"Depressed",focusLevel:5, workedOnGame:false},
  {day:"Tuesday", sleepHours:8,screenTime:8,mood:"Sad",focusLevel:7,workedOnGame:true},
  {day:"Wednesday", sleepHours:7.8,screenTime:6,mood:"Neutral",focusLevel:5,workedOnGame:true},
  {day:"Thursday", sleepHours:8,screenTime:7,mood:"Neutral",focusLevel:5,workedOnGame:true},
  {day:"Friday", sleepHours:8,screenTime:10,mood:"Depressed",focusLevel:3,workedOnGame:false},
  {day:"Saturaday", sleepHours:10,screenTime:13,mood:"Good",focusLevel:9,workedOnGame:true},
  {day:"Sunday", sleepHours:10,screenTime:,mood:"Good",focusLevel:9,workedOnGame:true}
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

console.log(dayWithHighestScreenTime(weekData));

