//var context = require.context('./', true, /\.js$/); //make sure you have your directory and regex test set correctly!
var context = require.context('.', false, /hdprivatekey.js$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);
