// function for goalRoutes

// @desc Get all goals 
// @route GET /api/goals
// @access Privete
const getGoals = (req, res) => {
        res.status(200).json({
        message:'Get goals'
    });
}

// @desc Set goals 
// @route POST /api/goals
// @access Privete
const setGoals = (req, res) => {
       res.status(200).json({
        message:`Update goal ${req.params.id}`
    });
}

// @desc Update goals 
// @route PUT /api/goals/:id
// @access Privete
const updateGoals = (req, res) => {
     res.status(200).json({
        message:`Update goal ${req.params.id}`
    });
}

// @desc Delete all goals 
// @route DELETE /api/goals/:id
// @access Privete
const deleteGoals = (req, res) => {
     res.status(200).json({
        message:`Delete goal ${req.params.id}`
    });
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}