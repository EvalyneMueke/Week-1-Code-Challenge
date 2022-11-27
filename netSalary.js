// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits
//Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary
//net salary = gross salary - deductions
const prompt = require("prompt-sync")();
var basicSalary = prompt("Enter your basic Salary");
var benefits = prompt("Enter your benefits");
const personalRelief = 2400;
const insuranceRelief = 5000;
const housingRelief = 9000;

var grossPay = basicSalary + benefits + personalRelief + insuranceRelief + housingRelief;
function netSalary(Salary) {
    
  function taxCalculator(Tax) {
    if ((basicSalary > 32, 333)) {
      Tax = basicSalary * 0.3;
    } else if (basicSalary > 24000 && basicSalary <= 32333) {
      Tax = basicSalary * 0.25;
    } else if (basicSalary <= 24000) {
      Tax = basicSalary * 0.2;
    }
    function NSSFDeductions(NSSF) {
      NSSF = basicSalary * 0.06;

      function NHIFDeductions(NHIF) {
        if (grossPay <= 5999) {
          NHIF === 150;
        } else if (grossPay >= 6000 && grossPay <= 7999) {
          NHIF === 300;
        } else if (grossPay >= 8000 && grossPay <= 11999) {
          NHIF === 400;
        } else if (grossPay >= 12000 && grossPay <= 14999) {
          NHIF === 500;
        } else if (grossPay >= 15000 && grossPay <= 19999) {
          NHIF === 600;
        } else if (grossPay >= 20000 && grossPay <= 24999) {
          NHIF === 750;
        } else if (grossPay >= 25000 && grossPay <= 29999) {
          NHIF === 850;
        } else if (grossPay >= 30000 && grossPay <= 34999) {
          NHIF === 900;
        } else if (grossPay >= 35000 && grossPay <= 39999) {
          NHIF === 950;
        } else if (grossPay >= 40000 && grossPay <= 44999) {
          NHIF === 1000;
        } else if (grossPay >= 45000 && grossPay <= 49999) {
          NHIF === 1100;
        } else if (grossPay >= 50000 && grossPay <= 59999) {
          NHIF === 1200;
        } else if (grossPay >= 60000 && grossPay <= 69999) {
          NHIF === 1300;
        } else if (grossPay >= 70000 && grossPay <= 79999) {
          NHIF === 1400;
        } else if (grossPay >= 80000 && grossPay <= 89999) {
          NHIF === 1500;
        } else if (grossPay >= 90000 && grossPay <= 99999) {
          NHIF === 1600;
        } else if (grossPay >= 100000) {
          NHIF === 1700;
        }

        var deductions = NHIF + NSSF + Tax;
        Salary = grossPay - deductions;
        console.log(netSalary);
      }
    }
  }
}
