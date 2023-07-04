const Model = require("./contact.model");

//
const create = (payload) => {
  // writing in DB
  return Model.create(payload);
};

const list = () => {
  // pagination
  return Model.find();
};

const getById = (id) => {
  return Model.findOne({ _id: id });
};

const update = (id, payload) => {
  return Model.updateOne({ _id: id }, payload);
};

const remove = (id) => {
  return Model.deleteOne({ _id: id });
};

module.exports = { create, list, getById, update, remove };
