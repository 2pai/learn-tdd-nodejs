/*
 const items = [
    {name:"Pepaya", price: 10000, qyt:2},
    {name:"Mangga", price: 15000},
    {name:"Belimbing", price: 9000, qyt:1},
]
  buatlah fungsi orderTotal untuk menghitun total harga yang harus di bayar
  - throw error jika objek items kosong
  - throw error jika price tidak terdefinisi
  - throw error jika price negative 
  - throw error jika name tidak terdefinisi
  - apabila qyt tidak terdefinisi maka set qyt = 1
  - fungsi dapat menghitung total barang jika items >= 1
  - harga barang = price * qyt 
  - hitung jumlah total dengan cara menjumlahkan semua harga barang + tax
  - jumlah tax di hitung dari 10% harga barang
*/
const orderTotal = require('./order')

describe('orderTotal',() => {


    it('should throw error when items isEmpty',() => {
        const items = []
        const expectedResult = 'Objek Item Kosong'
        expect(() => orderTotal(items)).toThrow(expectedResult) 
    })
    it('should throw error when price is undefined',() => {
        const items = [
            {name:"Apel",qyt:1}
        ]
        const expectedResult = 'Harga tidak terdefinisi'
        expect(() => orderTotal(items)).toThrow(expectedResult) 
    })
    it('should throw error when price is negative',() => {
        const items = [
            {name:"Apel",price:-100,qyt:1}
        ]
        const expectedResult = 'Harga tidak boleh negatif'
        expect(() => orderTotal(items)).toThrow(expectedResult) 
    })
    it('should throw error when name is undefined',() => {
        const items = [
            {price:100,qyt:1}
        ]
        const expectedResult = 'Nama tidak terdefinisi'
        expect(() => orderTotal(items)).toThrow(expectedResult)
    })
    it('should set qyt to 1 if qyt is undefined',() => {
        const items = [
            {name:"Mangga",price:1000}
        ]
        const expectedResult = 1000
        expect(orderTotal(items)).toBe(expectedResult)
    })
    it('should return the right total price if items = 1',() => {
        const items = [
            {name:"Mangga",price:1000,qyt:10}
        ]
        const expectedResult = 10000
        expect(orderTotal(items)).toBe(expectedResult)
    })
    it('should return the right total price if items > 1',() => {
        const items = [
            {name:"Mangga",price:1000,qyt:5},
            {name:"Apel",price:2000,qyt:5},
            {name:"Alpukat",price:5000,qyt:5}
        ]
        const expectedResult = 40000
        expect(orderTotal(items)).toBe(expectedResult)
    })
})