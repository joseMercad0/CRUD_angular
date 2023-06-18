const Character = require('../models/character');

// Obtener todos los elementos
exports.getCharacters = (req, res) => {
  Character.find()
    .then((characters) => {
      res.json(characters);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Obtener un elemento por su ID
exports.getCharacterById = (req, res) => {
  Character.findById(req.params.id)
    .then((character) => {
      if (!character) {
        return res.status(404).json({ message: 'Elemento no encontrado' });
      }
      res.json(character);
      })
      .catch((error) => {
      res.status(500).json({ error: error.message });
      });
      };
      
      // Crear un nuevo elemento
      exports.createCharacter = (req, res) => {
      const newCharacter = new Character({
      name: req.body.name,
      description: req.body.description,
      breed: req.body.breed,
      saga: req.body.saga,
      serie: req.body.serie,

      // Otros campos que desees para tu modelo
      });
      newCharacter.save()
      .then((character) => {
        res.status(201).json(character);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
    };

    // Actualizar un elemento existente
    exports.updateCharacter = (req, res) => {
    Character.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((character) => {
    if (!character) {
    return res.status(404).json({ message: 'Elemento no encontrado' });
    }
    res.json(character);
    })
    .catch((error) => {
    res.status(500).json({ error: error.message });
    });
    };
    
    // Eliminar un elemento existente
    exports.deleteCharacter = (req, res) => {
    Character.findByIdAndDelete(req.params.id)
    .then((character) => {
    if (!character) {
    return res.status(404).json({ message: 'Elemento no encontrado' });
    }
    res.json({ message: 'Elemento eliminado correctamente' });
    })
    .catch((error) => {
    res.status(500).json({ error: error.message });
    });
    };
