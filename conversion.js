/*
NAME:  TAX CALCULATOR
AUTHOR: NDIFE U.S
DATE: 2nd May 2018
FOR: NODE JS CLASS
PURPOSE: THE PROGRAM TO CONVERT THE TAX AMOUNT FROM NAIRA TO KOBO,
         AND OUTPUT ITD RESULT INFORM OF AN ARRAY.
*/


function taxCalculator(Amount,tax){

    if(typeof(Amount && tax)=="number"){

        taxAmount = (Amount*(tax/100 )*100+ "k");
        taxAmount = [taxAmount];

    }else {
        console.log("sorry, numbers only!");
    }
        return taxAmount;
}

        console.log(taxCalculator(5,100));