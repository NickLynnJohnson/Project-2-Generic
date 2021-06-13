module.exports = function(app){
	const application = require('./routes/application');
	const users = require('./routes/users');
	const search = require('./routes/search');
	const mailingList = require("./routes/mailinglist");

	app.use('/', application);
	app.use('/users', users);
	app.use('/search', search);
	app.use('/mailinglist', mailingList);
}