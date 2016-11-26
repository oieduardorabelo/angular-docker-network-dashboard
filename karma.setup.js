//make sure you have your directory and regex test set correctly!
var context = require.context('./app/directives', true, /\.js$/);
context.keys().forEach(context);
