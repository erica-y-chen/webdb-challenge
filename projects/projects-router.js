const router = require('express').Router();

const Projects = require('./projects-model.js');

router.get('/', (req,res) => {
    Projects.find()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({error:'ran into an error retrieving the projects'})
        });
});

router.get('/:id', (req, res)=> {
    const projectId = req.params.id; 
    Projects.getActions(projectId)
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            res.status(500).json({message: 'error retrieving project with that id'});
        });
});

router.post('/', async (req, res) => {
    const project = req.body;
    if (project.name) {
      try {
        const inserted = await Projects.add(project);
        res.status(201).json(inserted);
      } catch (error) {
        res.status(500).json({ message: 'error creating project' });
      }
    } else {
      res.status(400).json({ message: 'Please provide name of the project' });
    }
  });





module.exports = router; 