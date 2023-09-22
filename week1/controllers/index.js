const awesomeFuntion = (req, res, next)=>{
    res.json('Susana Griselda Montenegro')
}

const returnAnotherPerson = (req, res, next)=>{
    res.json('super awesome person')
}
module.exports = {awesomeFuntion,returnAnotherPerson};