const asyncHandler = require('express-async-handler')

// function for goalRoutes

// @desc Get all goals 
// @route GET /api/goals
// @access Privete
const getGoals = asyncHandler(async(req, res) => {
        res.status(200).json({
        message:'Get goals'
    });
})

// @desc Set goals 
// @route POST /api/goals
// @access Privete
const setGoals = asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error ('Please add a text')
   }
       res.status(200).json({
        message:'Create goal'
    });
})

// @desc Update goals 
// @route PUT /api/goals/:id
// @access Privete
const updateGoals =asyncHandler( async(req, res) => {
     res.status(200).json({
        message:`Update goal ${req.params.id}`
    });
})

// @desc Delete all goals 
// @route DELETE /api/goals/:id
// @access Privete
const deleteGoals = asyncHandler(async(req, res) => {
     res.status(200).json({
        message:`Delete goal ${req.params.id}`
    });
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}