function isLeap(year) {
    


if (year%4==0 && year%100!=0)
    console.log("Leap Year!");
else if (year%100==0&&year%400==0)
    console.log("Leap Year!");
else
    console.log("Not a Leap Year!");    



}
isLeap(2016);