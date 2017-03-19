var fs=require('fs');

var XLSX = require('xlsx');
var wb = XLSX.readFile('working.xls');
var sheetname = 'Worksheet'; // if the sheet name is different ,use wb.SheetNames[0] to get the first sheet
var jsonOut = XLSX.utils.sheet_to_json(wb.Sheets[sheetname]);

console.log( ' jsonOut= ', jsonOut);

jsonstringi  = JSON.stringify(jsonOut);
// fs.write('data.json',jso,'w');
fs.writeFileSync('data.json',jsonstringi,{flag:'w'});
