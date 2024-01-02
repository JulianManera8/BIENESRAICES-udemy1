import express from 'express';

const router = express.Router();

//ROUTS

// router.get('/id', (req, res) => {
//     res.json({msg: 'respuesta de tipo GET'});
// });


// router.post('/id', (req, res) => {
//     res.json({msg: 'respuesta de tipo POST'});
// });

//varias routes dentro de una
router.route('/id')

    .get( (req, res) => {
        res.json({msg: 'respuesta de tipo GET'});
    })
    .post( (req, res) => {
        res.json({msg: 'respuesta de tipo POST'});
    });








export default router;