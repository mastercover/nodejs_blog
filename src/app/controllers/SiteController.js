const res = require('express/lib/response');

class SiteController {
    // [GET] /home
    index(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

    // [GET] /flower
    flower(req, res) {
        res.render('flower');
    }
}
module.exports = new SiteController();
