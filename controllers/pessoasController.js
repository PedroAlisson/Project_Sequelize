const index = (req,res) =>{
    res.render('home')
}

const store = (req,res) =>{
    res.render('')
}

const deletePessoa = (req,res) => {
    res.render('')
}

module.exports = {index,store,deletePessoa}