const studentDetailsRoute = require('./studentDetails/route/studentDetailsRoute');

exports.routes = (app) => {
    app.use('/students', studentDetailsRoute);
};