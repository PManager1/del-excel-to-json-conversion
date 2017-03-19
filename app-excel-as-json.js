convertExcel = require('excel-as-json').processFile;
convertExcel('working.xlsx', 'data.json');



// convertExcel = require('excel-as-json').processFile
 
// options = 
//     sheet:'1'
//     isColOriented: false
//     omitEmtpyFields: false
 
// convertExcel 'working.xlsx', 'row.json', options, (err, data) ->
//     if err then console.log "JSON conversion failure: #{err}"
 
// options = 
//     sheet:'1'
//     isColOriented: true
//     omitEmtpyFields: false
 
// convertExcel 'working.xls', 'col.json', options, (err, data) ->
//     if err then console.log "JSON conversion failure: #{err}"