const express = require('express');
const app = express(); // return object

// app.use(express.json());

const courses = [
    { id: 1, name: 'React' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'JS' }

];

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});



app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('ID was not Found')
    res.send(course);
});
const port = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Listening Port ${port}...`))