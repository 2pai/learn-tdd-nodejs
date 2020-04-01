class User{

	constructor(name,age,gender){
		this.name = name || null 
		this.age = age || null 
		this.gender = gender || null
	}
	
	getName(){
		return this.gender != null ? (this.gender == 'male' ? 'Mr. '+this.name : 'Mrs.'+this.name) :this.name
	}
	getGender(){
		return this.gender
	}
}

module.exports = User;
