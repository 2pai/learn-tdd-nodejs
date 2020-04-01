const User = require('./user')

describe('Users',() => {
	test('name should Be null',() =>{
	
		const Users = new User()
		const expectedName = null
		expect(Users.getName()).toBe(expectedName)

	})

	test('name should be return Iqbal',() => {
		const Users = new User('Iqbal',19,'male')
		const expectedName = 'Mr. Iqbal'
		expect(Users.getName()).toBe(expectedName)
	})
})

