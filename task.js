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
    tomorrow: 79
  };
  
  // Only change code below this line
    
  const {today:highToday } = HIGH_TEMPERATURES;
  const {tomorrow: highTomorrow} = HIGH_TEMPERATURES;
  
  // Only change code above this line

  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 69, high: 79 }
  };
  
  // Only change code below this line
    
  const {today: {low: lowsToday, high: highsToday }} = LOCAL_FORECAST;
  // Only change code above this line


  function testEqual(myVal) {
    if (myVal == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

  function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);