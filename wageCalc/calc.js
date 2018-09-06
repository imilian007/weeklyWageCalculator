"use strict";

let hourlyWage = prompt("Enter wage");

let hoursWorked = prompt("Enter hours worked");

let i = 0; 

let weeklyPay;

if (hoursWorked < 40 && hoursWorked > 0 && hourlyWage > 0)
	{
		weeklyPay = hoursWorked * hourlyWage;
	} 
	else if (hoursWorked > 40 && hourlyWage > 0) 
	{
		weeklyPay = ((40 * hourlyWage) + ((hoursWorked - 40) * hourlyWage) * 1.5);
	} 
	else 
	{
		console.log(i);
	}

console.log("You worked " + hoursWorked + " hours. Your weekly pay is: " + weeklyPay);