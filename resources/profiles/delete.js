module.exports = function deletes (req, res, next) {
    res.send({hey: 'you called delete'});
    next();
};