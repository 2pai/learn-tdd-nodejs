const orderTotal = (items) => {
    if(items.length == 0){
        throw new Error('Objek Item Kosong')
    }
    /* 
    before refactor 
    items.map(item => {
        if(item.price === undefined){
            throw new Error('Harga tidak terdefinisi')
        }
        if(item.price < 0){
            throw new Error('Harga tidak boleh negatif')
        }
        if(item.name  === undefined){
            throw new Error('Nama tidak terdefinisi')
        }
        if(!item.qyt){
            item.qyt = 1
        }
        total += (item.qyt*item.price)
    })
    */ 

    // after refactor
    const reducer = (prev,item) => {
        if(item.price === undefined){
            throw new Error('Harga tidak terdefinisi')
        }
        if(item.price < 0){
            throw new Error('Harga tidak boleh negatif')
        }
        if(item.name  === undefined){
            throw new Error('Nama tidak terdefinisi')
        }
        return item.price * (item.qyt || 1) + prev
       
    }
    const total = items.reduce(reducer,0)
    return total
}

module.exports = orderTotal