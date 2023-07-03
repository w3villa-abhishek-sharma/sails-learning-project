/**
 * TaskController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    createTask: async (req, res) => {
        try {
            const { task_name, task_description, task_status, task_priority } = req.body;
            let data = await Task.create({ task_name, task_description, task_status, task_priority });
            res.status(200).json({status: true,msg: "Task create successfully",data});
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: false, error });
        }
    },
    getAllTask: async (req, res) => {
        try {
            let tasks = await Task.find();
            res.status(200).json({status: true,tasks});
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: false, error });
        }
    }
};

