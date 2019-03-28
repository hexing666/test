var db=require('../common/db');

var user = new db.Schema({
	username:String,
	password:String
})
user.statics.findByUsername=function(name,callBack){
	this.find({username:name},callBack);
}
//登录匹配是不是拥有的用户名和密码并且没有处于封零
user.statics.findUserLogin=function(name,pwd,callBack){
	this.find({username:name,password:pwd},callBack)
}
var userModel=db.model('user',user);
module.exports=userModel;