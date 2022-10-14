const {simpleQuery} = require("../services/db.service");

exports.basicQuery = async (req, res) => {
    simpleQuery().then((result) => {
        res.status(200).json(result);
    }).catch(() => {
       res.status(500).send('error');
    })
}
