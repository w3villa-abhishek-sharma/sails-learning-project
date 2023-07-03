/**
 * Task.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    task_name: {
      type: 'string',
      required: true,
    },
    task_description: {
      type: 'string',
    },
    task_status: {
      type: 'string',
      isIn: ['pending', 'in progress', 'completed'],
      defaultsTo: 'pending',
    },
    task_priority: {
      type: 'string',
      isIn: ['low', 'medium', 'high'],
      defaultsTo: 'medium',
    },
    updatedAt: { type: 'number', autoUpdatedAt: true },
    createdAt: { type: 'number', autoCreatedAt: true },
  },

};

