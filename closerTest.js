
var memberInfo = function(){
	var name = '';
	var age = 0;
	var sex = 'M';
	
	this.setName = function(pname){
		name = pname;
	}
	this.getName = function(){
		return name;
	}
	this.setAge = function(page){
		age = page;
	}
	this.getAge = function(){
		return age;
	}
	this.setSex = function(psex){
		sex = psex;
	}
	this.getSex = function(){
		return sex;
	}
}
