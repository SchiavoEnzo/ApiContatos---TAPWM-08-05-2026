const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  caractheristics:{
    name: { type: String, required: [true, 'Name is required'] },
    age: { type: String, required: [true, 'Age is required'] },
    formation: { type: String, required: [true, 'Formation is required'] },
    origin: { type: String },
    personality: { type: String },
    history: { type: String },
    wishes: { type: String }
  },
  atributes: {
    level: { type: Number, required: [true, ' is required'] },
    dp: { type: Number, required: [true, ' is required'] },
    sanity: { type: Number, required: [true, ' is required'] }, 
    pv: { type: Number, required: [true, ' is required'] },
    shield: { type: Number, required: [true, ' is required'] },
    ammo: { type: Number, required: [true, ' is required'] },
    pary: { type: Number },
    dodge: { type: Number }
  },
  habilities: {
    naturals: {
      inteligence : { type: Number, required: [true, 'Inteligence is required'] },
      wisdom : { type: Number, required: [true, 'Wisdom is required'] },
      existance : { type: Number, required: [true, 'Existance is required'] }
    },
    main: {
      intelect  : { type: Number, required: [true, ' is required'] },
      strengh   : { type: Number, required: [true, ' is required'] },
      agility   : { type: Number, required: [true, ' is required'] },
      charisma  : { type: Number, required: [true, ' is required'] },
      willing   : { type: Number, required: [true, ' is required'] }
    },
    lasts: {
      acrobacy    : { type: Number, required: [true, ' is required'] },
      art         : { type: Number, required: [true, ' is required'] },
      currents    : { type: Number, required: [true, ' is required'] },
      training    : { type: Number, required: [true, ' is required'] },
      atlethics   : { type: Number, required: [true, ' is required'] },
      science     : { type: Number, required: [true, ' is required'] },
      crime       : { type: Number, required: [true, ' is required'] },
      diplomacy   : { type: Number, required: [true, ' is required'] },
      decieving   : { type: Number, required: [true, ' is required'] },
      fortitude   : { type: Number, required: [true, ' is required'] },
      furtivity   : { type: Number, required: [true, ' is required'] },
      initiative  : { type: Number, required: [true, ' is required'] },
      intimidating: { type: Number, required: [true, ' is required'] },
      intuition   : { type: Number, required: [true, ' is required'] },
      fight       : { type: Number, required: [true, ' is required'] },
      medicine    : { type: Number, required: [true, ' is required'] },
      ocultism    : { type: Number, required: [true, ' is required'] },
      misticism   : { type: Number, required: [true, ' is required'] },
      perception  : { type: Number, required: [true, ' is required'] },
      piloting    : { type: Number, required: [true, ' is required'] },
      profession  : { type: Number, required: [true, ' is required'] },
      acuracy     : { type: Number, required: [true, ' is required'] },
      reflex      : { type: Number, required: [true, ' is required'] },
      religion    : { type: Number, required: [true, ' is required'] },
      surviving   : { type: Number, required: [true, ' is required'] },
      tatics      : { type: Number, required: [true, ' is required'] },
      technology  : { type: Number, required: [true, ' is required'] },
      force       : { type: Number, required: [true, ' is required'] }
    },
    extras: {}
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('character', characterSchema);

