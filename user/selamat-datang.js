const user = require('./user')

const Users = new user('iqbal',19,'male')

if(Users.getGender() == 'male') console.log('Mr.'+Users.getName())
else if(Users.getGender() == 'female') console.log('Mrs'+Users.getName())
else console.log(Users.getName())
