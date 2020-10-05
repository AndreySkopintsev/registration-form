const router = require('express').Router()

router.get('/',(req,res)=>{
    res.send('heelo')
})

router.post('/register',(req,res)=>{
    res.send('ok buddy boy')
})

module.exports = router