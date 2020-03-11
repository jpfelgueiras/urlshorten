const AnalyticsSchema = require('../models/analytics');

const getAll = (req, res) => {
    AnalyticsSchema.find({}, function(err, results) {
        res.status(200).send(results); //for example.
    });
}

const getAnalytics = (req, res) => {
    if(req.params.code){
        const id = req.params.code;
        //return null;
        AnalyticsSchema.find({urlId : id},(err, analytics) => {
            if(err) {
                return res.status(500).json({ message: 'Internal Server Error', error: err });
            }
            if(analytics === null) return res.status(404).json({ message: 'Resource Not Found' });
            return res.status(200).send(analytics);
        })
    }
}

module.exports = {
    getAnalytics,
    getAll
};