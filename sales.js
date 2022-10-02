"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

// calculate totals by quarter
const quarterOne = region1[0] + region2[0] + region3[0] + region4[0] + region5[0];
const quarterTwo =  region1[1] + region2[1] + region3[1] + region4[1] + region5[1];
const quarterThree = region1[2] + region2[2] + region3[2] + region4[2] + region5[2]; 
const quarterFour = region1[3] + region2[3] + region3[3] + region4[3] + region5[3];



// display totals by quarter
document.write("<h2>Sales by Quarter</h2>");
document.write(`Q1: $${quarterOne}<br> Q2: $${quarterTwo}<br> Q3: $${quarterThree}<br> Q4: $${quarterFour}`);



// calculate totals by region
const region1Totals = region1[0] + region1[1] + region1[2] + region1[3]; 
const region2Totals = region2[0] + region2[1] + region2[2] + region2[3]; 
const region3Totals = region3[0] + region3[1] + region3[2] + region3[3]; 
const region4Totals = region4[0] + region4[1] + region4[2] + region4[3]; 
const region5Totals = region5[0] + region5[1] + region5[2] + region5[3]; 

let regionTotals = [region1Totals + region2Totals + region3Totals + region4Totals + region5Totals]; 



// display totals by quarter 
document.write("<h2>Sales by Region</h2>"); 
document.write(`Region 1: $${region1Totals}<br> Region 2: $${region2Totals}<br> Region 3: $${region3Totals}<br> Region 4: $${region4Totals}<br> Region 5: $${region5Totals}<br>`);

// calculate total sales 
let totalSales = 0; 

for (let i = 0; i < regionTotals.length; i++) {
    totalSales += regionTotals[i] + '\n';
}


// display total sales, use document write to display on html page 
document.write("<h2>Total Sales</h2>");  
document.write(`$${totalSales}`);