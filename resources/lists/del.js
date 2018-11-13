module.exports = function delList (req, res, next) {
    res.send({hey: 'you called delete'});
    next();
};