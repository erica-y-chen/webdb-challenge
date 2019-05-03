const router = require('express').Router();

const Actions = require('./actions-model.js');

router.get('/', (req,res) => {
    Actions.find()
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => {
            res.status(500).json({error:'ran into an error retrieving the actions'})
        });
});

router.get('/:id', (req, res)=> {
    const actionId = req.params.id; 
    Projects.getActions(actionId)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(error => {
            res.status(500).json({message: 'error retrieving action with that id'});
        });
});

router.post('/', async (req, res) => {
    const action = req.body;
    if (action.description) {
      try {
        const inserted = await Actions.add(action);
        res.status(201).json(inserted);
      } catch (error) {
        res.status(500).json({ message: 'error creating action' });
      }
    } else {
      res.status(400).json({ message: 'Please provide name of the action' });
    }
  });





module.exports = router; 