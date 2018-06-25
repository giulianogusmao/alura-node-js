module.exports = (app) => {
    return app.get('/produtos', (req, res) => {
        res.render("produtos/lista");
    });
}
