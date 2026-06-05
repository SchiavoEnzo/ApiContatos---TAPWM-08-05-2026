const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
  caractheristics:{
    name: { type: String, required: [true, 'Name is required'] },
    age: { type: String, required: [true, 'Age is required'] },
    formation: { type: String, required: [true, 'Formation is required'] },
    origin: { type: String },
    personality: { type: String },
    history: { type: String },
    wishes: { type: String }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Contato', contatoSchema);

