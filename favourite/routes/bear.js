const express = require('express');
const router = express.Router();

const fs = require('fs');
const db = require('../db.json');





router.route('/')
  .get((req, res) => {
    fs.readFile('db.json', 'utf-8', (err, data) => {
      if (err) throw err;
      res.send(JSON.parse(data));
    });
  })
  .post((req, res) => {
    
    

    let c=0;
    db.forEach((bear , index) =>
    {
      if(bear.id==req.body.id)
      {
          c=1;
          res.send('already added!');
      }
    });

    if(c==0)
    {
      
         db.push(req.body);
    
   
        fs.writeFile('db.json', JSON.stringify(db), (err, data) => {
          if (err) throw err;
          res.send('Favourite added!');
        });
    }
        
});

router.route('/:id')

  .put((req, res) => {
    const newBear = req.body;
    db.forEach((bear, index) => {
      if (bear.id === req.params.id) {
        db.splice(index, 1, newBear);
      }
    });
    fs.writeFile('db.json', JSON.stringify(db), (err, data) => {
      if (err) throw err;
      res.send('Bear modified!');
    });
  })



  .delete((req, res) => {
     
    db.forEach((bear, index) => {
      

      if (bear.id == req.params.id) {
        
        db.splice(index, 1);
      }
    });
    fs.writeFile('db.json', JSON.stringify(db), (err, data) => {
      if (err) throw err;
      fs.readFile('db.json', 'utf-8', (err, data) => {
      if (err) throw err;
      res.send(JSON.parse(data));
    });
  
      
    });
    
  });

module.exports = router;
