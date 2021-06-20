//Money formatter function
export const moneyFormatter = (num) => {
 if(num) {let p = num.toFixed(2).split(".");
  return (
    
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );}
  else if(num === 0){
    return 0
  }
};
