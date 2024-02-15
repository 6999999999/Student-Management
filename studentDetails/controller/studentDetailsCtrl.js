exports.getAllStudent = (req, res) => {
    getAllStudentData(req, res, (err, students) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.send(students);
    });
};

const getAllStudentData = (req, res, next) => {
    let students = getStudents();
    next(null, students);
};

const getStudents = () => {
    return [{ name: 'ravindra', roll: 1 }, { name: "strutik", roll: 2 }];
};
