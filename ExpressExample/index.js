const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./logger');
const Joi = require('joi');


const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(helmet());
app.use(morgan('tiny'));
app.use(logger);


app.get('/', (req, res) => {
    res.send('Hello World')
});

var courses = [{
    "Name": "CSE100",
    "Teacher": "Hayri Şimşek"
}, {
    "Name": "CSE102",
    "Teacher": "Hayri Şimşek"
}];

app.get('/api/courses', (req, res) => {
    res.send(courses)
});

app.post("/api/courses", (req, res) => {         
    const { error} = validateCourse(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);  
    } else {
        courses.push(req.body);
        res.send(courses);
    } 

});

app.listen(4555, () => {
    console.log("Listening")
});

function validateCourse(course) {
    var schema = {
        Name: Joi.string().min(3).required(),
        Teacher: Joi.string().min(3).required()
    }
    const result = Joi.validate(course, schema);
    return result;
}