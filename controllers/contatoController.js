const Character = require('../models/characterModel');

exports.getAllCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar characters', erro: err.message});
  }
};

exports.getCharacterById = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (!character) return res.status(404).json({ mensagem: 'Personagem não encontrado' });
    res.json(character);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar personagem', erro: err.message });
  }
};

exports.createCharacter = async (req, res) => {
  try {
    const novoCharacter = new Character(req.body);
    await novoCharacter.save();
    res.status(201).json(novoCharacter);
  } catch (err) {
    res.status(400).json({ mensagem: 'Erro ao criar Personagem', erro: err.message });
  }
};

exports.updateCharacter = async (req, res) => {
  try {
    const characterAtualizado = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!characterAtualizado) return res.status(404).json({ mensagem: 'Personagem não encontrado' });
    res.json(characterAtualizado);
  } catch (err) {
    res.status(400).json({ mensagem: 'Erro ao atualizar Personagem', erro: err.message });
  }
};

exports.deleteCharacter = async (req, res) => {
  try {
    const characterRemovido = await Character.findByIdAndDelete(req.params.id);
    if (!characterRemovido) return res.status(404).json({ mensagem: 'Personagem não encontrado' });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao excluir Personagem', erro: err.message });
  }
};
