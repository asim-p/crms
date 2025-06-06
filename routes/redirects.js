const express = require('express');

const router = express.Router();

router.get('/home',(req,res)=>{
    res.redirect('/crimes');
})

router.get('/',(req,res)=>{
    res.redirect('/crimes');
})

router.get('/index',(req,res)=>{
    res.redirect('/');
})

router.get('/aboutus',(req,res)=>{
    res.redirect('/about');
})

router.get('/reportcrime',(req,res)=>{
    res.redirect('/report');
})

module.exports = router;