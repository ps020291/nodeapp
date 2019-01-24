var mongoose = require("mongoose");

module.exports = {
	mongooseConnectLocal : function(){
		mongoose.connect("mongodb://localhost:27017/nodeapp", (err)=>{
			if(err) console.log("Error "+err);
			else console.log("Connected to MongoDB");
		});
	},
	mongooseConnect : function(){
		mongoose.connect("mongodb+srv://ps020291:ps020291@cluster0-clgv8.mongodb.net/test?retryWrites=true", (err)=>{
			if(err) console.log("Error "+err);
			else console.log("Connected to MongoDB");
		});
	}

}