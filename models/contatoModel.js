const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
  caractheristics:{
    name: { type: String, required: [true, 'Name is required'] },
    age: { type: String, required: [true, 'Age is required'] },
    formation: { type: String, required: [true, 'Formation is required'] },
    origin: { type: String },
    personality: { type: String },
    history: { type: String },
    wishes: { type: String },
    required: [true, 'The caractheristics is required']
  },
  atributes: {
    level: { type: Int8Array, required: [true, ' is required'] },
    dp: { type: Int8Array, required: [true, ' is required'] },
    sanity: { type: Int8Array, required: [true, ' is required'] }, 
    pv: { type: Int8Array, required: [true, ' is required'] },
    shield: { type: Int8Array, required: [true, ' is required'] },
    ammo: { type: Int8Array, required: [true, ' is required'] },
    pary: { type: Int8Array },
    dodge: { type: Int8Array },
    required: [true, 'The caractheristics is required']
  },
  habilities: {
    naturals: {
      inteligence : { type: Int8Array, required: [true, 'Inteligence is required'] },
      wisdom : { type: Int8Array, required: [true, 'Wisdom is required'] },
      existance : { type: Int8Array, required: [true, 'Existance is required'] },
      //required: [true, 'The caractheristics is required']
    },
    main: {
      intelect  : { type: Int8Array, required: [true, ' is required'] },
      strengh   : { type: Int8Array, required: [true, ' is required'] },
      agility   : { type: Int8Array, required: [true, ' is required'] },
      charisma  : { type: Int8Array, required: [true, ' is required'] },
      willing   : { type: Int8Array, required: [true, ' is required'] },
      //required: [true, 'The caractheristics is required']
    },
    lasts: {
      acrobacy    : { type: Int8Array, required: [true, ' is required'] },
      art         : { type: Int8Array, required: [true, ' is required'] },
      currents    : { type: Int8Array, required: [true, ' is required'] },
      training    : { type: Int8Array, required: [true, ' is required'] },
      atlethics   : { type: Int8Array, required: [true, ' is required'] },
      science     : { type: Int8Array, required: [true, ' is required'] },
      crime       : { type: Int8Array, required: [true, ' is required'] },
      diplomacy   : { type: Int8Array, required: [true, ' is required'] },
      decieving   : { type: Int8Array, required: [true, ' is required'] },
      fortitude   : { type: Int8Array, required: [true, ' is required'] },
      furtivity   : { type: Int8Array, required: [true, ' is required'] },
      initiative  : { type: Int8Array, required: [true, ' is required'] },
      intimidating: { type: Int8Array, required: [true, ' is required'] },
      intuition   : { type: Int8Array, required: [true, ' is required'] },
      fight       : { type: Int8Array, required: [true, ' is required'] },
      medicine    : { type: Int8Array, required: [true, ' is required'] },
      ocultism    : { type: Int8Array, required: [true, ' is required'] },
      misticism   : { type: Int8Array, required: [true, ' is required'] },
      perception  : { type: Int8Array, required: [true, ' is required'] },
      piloting    : { type: Int8Array, required: [true, ' is required'] },
      profession  : { type: Int8Array, required: [true, ' is required'] },
      acuracy     : { type: Int8Array, required: [true, ' is required'] },
      reflex      : { type: Int8Array, required: [true, ' is required'] },
      religion    : { type: Int8Array, required: [true, ' is required'] },
      surviving   : { type: Int8Array, required: [true, ' is required'] },
      tatics      : { type: Int8Array, required: [true, ' is required'] },
      technology  : { type: Int8Array, required: [true, ' is required'] },
      force       : { type: Int8Array, required: [true, ' is required'] },
      //required: [true, 'The caractheristics is required']
    },
    extras: {}
  }
  /*
  ,
    items: {},
    money: {}
  */
}, {
  timestamps: true
});

module.exports = mongoose.model('Contato', contatoSchema);

