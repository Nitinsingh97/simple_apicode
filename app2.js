let Joi = require('joi');
let bodyParser = require('body-parser');
let express = require('express');
let app = express();



let schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    access_token: [Joi.string(), Joi.number()],
    birthyear: Joi.number().integer().min(1900).max(2013),
    email: Joi.string().email({ minDomainAtoms: 2 })
})
 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api', (request, response) => {
    let a = request.body.username;
    let b = request.body.birthyear;
    let c = request.body.pass;
    console.log(request.body);
    const result = Joi.validate({ username: a, birthyear: b ,password: c}, schema);

    
    response.send(result);
     console.log(result);
});

app.listen(3060);