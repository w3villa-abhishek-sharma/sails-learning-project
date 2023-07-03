/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    username: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
    },
    updatedAt: { type: 'number', autoUpdatedAt: true },
    createdAt: { type: 'number', autoCreatedAt: true },
  },

};

