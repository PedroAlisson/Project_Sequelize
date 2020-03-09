const index = (req,res) =>{
    res.render('home')
}

const store = (req,res) =>{
    res.render('')
}

const deletePessoa = (id,req,res) => {
    res.render('')
}

module.exports = {index,store,deletePessoa}