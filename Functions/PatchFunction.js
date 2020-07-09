PatchReply = function(request, response)
{
    var par = request.params;
    if (par.Person != undefined) // If it's the URL /Persons/<name>.
    {
        const Person = require('../Person.js');
        var PersonList = require('../data.js');
        
        let index = PersonList.findIndex(x => x.name === par.Person); // Find the index of the array.
        
        if (index == -1)
        {
            response.send("Person " + par.Person + " was not on the list!");
        }
        else
        {
            var name = request.body.name;
            var age = request.body.age;
            var gender = request.body.gender;
            
            var person = new Person(name, age, gender);
            
            PersonList[index].name = name;
            PersonList[index].age = age;
            PersonList[index].gender = gender;
            
            response.json(PersonList[index]);
        }
    }
    else
    {
        response.json(par);
    }
}

module.exports = PatchReply;