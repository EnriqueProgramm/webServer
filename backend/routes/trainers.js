const router = require('express').Router();
let Trainer = require('../models/trainer.model');

router.route('/').get((req, res) => {
    Trainer.find()
    .then(trainers => res.json(trainers))
    .catch(err => res.status(400).json('Err' + err));
});

router.route('/add').post((req, res) =>{
    const trainerName = req.body.trainerName;
    const trainerSpeciality = req.body.trainerSpeciality;
    const yearsOfExperience = Number(req.body.yearsOfExperience);
                                              

    const newTrainer = new Trainer({
        trainerName,
        trainerSpeciality,
        yearsOfExperience
    });

    newTrainer.save()
    .then(() => res.json('Trainer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Trainer.findById(req.params.id)
    .then(trainer => res.json(trainer))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Trainer.findByIdAndDelete(req.params.id)
    .then(() => res.json('Trainer deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Trainer.findById(req.params.id)
    .then( trainer => {
        trainer.trainerName = req.body.trainerName;
        trainer.trainerSpeciality = req.body.trainerSpeciality;
        trainer.yearsOfExperience = Number(req.body.yearsOfExperience);       

        trainer.save()
            .then(() => res.json('Exercise Updated'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
