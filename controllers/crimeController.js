const Crime = require('../models/crime');

const crime_index = (req,res)=>{
    Crime.find().sort({createdAt:-1})
        .then((result)=>{
            res.render('home',{crimes:result,title:'Home'})
        })
        .catch(err=>{   
            console.log(err);
        })
}
const crime_details = (req,res)=>{
    const id = req.params.id;
    Crime.findById(id)
        .then(result =>{
            res.render('detail',{title:result.title,crime:result})
        })
        .catch(err=>{
            res.status(404).render('404',{title:'Not Found Error'});
            console.log(err);
        })
}
const crime_report_get = (req,res)=>{
    res.render('report',{title:'Create a Crime'})
}
const crime_report_post = (req,res)=>{
    const newCrime = new Crime(req.body)
    newCrime.save()
    .then(() => {
        res.redirect('/'); 
    })
    .catch(err => {
        console.log(err);
    });
}
const crime_delete = (req,res)=>{
    const id = req.params.id;
    Crime.findByIdAndDelete(id)
        .then((result) =>{
            res.json({redirect:'/crimes'});
        })
        .catch(err => {console.log(err)});
}

module.exports = {
    crime_index,
    crime_details,
    crime_delete,
    crime_report_get,
    crime_report_post
}