const chalk = require('chalk');
const readline= require('readline-sync');
function welcome()
{
  console.log(chalk.yellow("Hello munchkin!!Are  you excited to know that your bithyear is a leap year or not\n "));
  console.log(chalk.red("what is a leap year and what so special about it?\n"))
  console.log(chalk.green("A leap year also known as 'intercalary day' is a calender year which contains an additional day in february which is february 29  "))
}
function userdata()
{
  var username=readline.question("what is your name\n");
  console.log("welcome",''+username)
  var year =readline.question("what is your birth year(YYYY)\n")
if(isNaN(year))
{
  console.log("you entered a string please enter a number\n")
}
else
{
  checkans(year)
}

}
function checkans(year){
  if (year%4===0)
  {
    console.log(chalk.yellow("your Bithyear is a Leap year\n"))
  }
  else{
    console.log(chalk.yellow("sorry! your birth year is not a leap year\n"))
  }
}
welcome()
userdata()