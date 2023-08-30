const complimentModel = require('../models/complimentModel');

class ComplimentController {
    generateCompliment(req, res) {
        const theme = req.query.theme || 'positivity';
        const language = req.query.language || 'en';
        const name = req.query.name || 'Friend';

        const compliment = complimentModel.generateCompliment(theme, language, name);
        res.json({ compliment });
    }
}

module.exports = new ComplimentController();
