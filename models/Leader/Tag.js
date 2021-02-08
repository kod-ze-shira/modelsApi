var mongoose = module.parent.mongoose;
var model = mongoose.model('User', new mongoose.Schema({
	"fullName": {
		"type": "String"
	},
	"age": {
		"type": "Number"
	},
	"hobbies": [{
		"name": {
			"type": "string"
		}
	}]
});
module.exports = model;
