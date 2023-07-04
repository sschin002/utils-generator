const Model = require("./contact.model");

const create = (payload) => {
    // writing in DB
    return Model.create(payload);
};

const list = () => {
    // pagination
    return Model.find();
};

const getById = (id) => {
    return Model.findOne(id);
};

const update = (id, payload) => {
    return Model.updateOne(id, payload);
};

const remove = (id) => {
    return Model.deleteOne(id);
};

module.exports = {create, list, getById, update, remove};