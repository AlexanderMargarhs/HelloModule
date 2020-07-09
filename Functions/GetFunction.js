GetReply = function(request, response)
{
    var par = request.params;
    if (request.originalUrl == '/Persons')
    {
        const Person = require('../Person.js');
        var PersonList = require('../data.js');
        
        var name = request.body.name;
        var age = request.body.age;
        var gender = request.body.gender;
        
        var person = new Person(name, age, gender);
        
        PersonList.push({'name' : person.getName(), 'age' : person.getAge(), 'gender' : person.getGender()});
        
        response.json(PersonList);
    }
    else if (par.Person != undefined) // If it's the URL /Persons/<name>.
    {
        var PersonList = require('../data.js');
        
        let index = PersonList.findIndex(x => x.name === par.Person); // Find the index of the array.

        if (index == -1)
        {
            response.send("Person " + par.Person + " was not on the list!");
        }
        else
        {
            response.json(PersonList[index]);
        }
    }
    else
    {
        response.json(par);
    }
}

module.exports = GetReply;