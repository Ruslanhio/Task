const arr2 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr3;

arr3 = [...arr2];  // Change this line

console.log(arr3);


const HIGH_TEMPERATURE = {
    yesterday: 75,
    today: 74,
    tomorrow: 70
  };
  
  // Only change code below this line
  
  const {today} = HIGH_TEMPERATURE ;
  const {tomorrow} = HIGH_TEMPERATURE;

  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  const {today:highToday } = HIGH_TEMPERATURES;
  const {tomorrow: highTomorrow} = HIGH_TEMPERATURES;
  
  // Only change code above this line