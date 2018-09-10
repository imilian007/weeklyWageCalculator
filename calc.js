"use strict";

function wageCalc(hoursWorked, hourlyWage, standardWorkHours, overtimeRate){

	let pay = 0;

	if(hoursWorked <= standardWorkHours && hoursWorked > 0 && hourlyWage > 0){
		pay = hoursWorked * hourlyWage;
	}

	else if (hoursWorked > standardWorkHours && hourlyWage > 0){
		pay = ((standardWorkHours * hourlyWage) + ((hoursWorked - standardWorkHours) * hourlyWage * 1.5));
	}
	return pay;
}

let hoursWorked = parseInt(prompt("Enter hours worked"));

let hourlyWage = parseInt(prompt("Enter hourly wage"));

let standardWorkHours = 40;

let overtimeRate = 1.5;

let weeklyPay = wageCalc(hoursWorked, hourlyWage, standardWorkHours, overtimeRate);

console.log("You worked " + hoursWorked + " hours. Your weekly pay is: " + weeklyPay);