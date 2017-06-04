const express = require('express');
const router = express.Router();

const fs = require('fs');
const db = require('../db.json');





router.route('/')


//Getting the favourite list
      .get((req, res) => {
        fs.readFile('db.json', 'utf-8', (err, data) => {
          if (err) throw err;
          res.send(JSON.parse(data));
        });
      })


//posting the favourite part
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

//router api for put and delete

router.route('/:id')

//Updating the favourite list

      .put((req, res) => {
        console.log(req.body)
        const newBear = req.body;
        db.forEach((bear, index) => {
          console.log(index)
          if (bear.id == req.params.id) {
            db.splice(index, 1, newBear);
          }
        });
        fs.writeFile('db.json', JSON.stringify(db), (err, data) => {
          if (err) throw err;
          res.send('Bear modified!');
        });
      })

//Deleting the Favourite Part

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