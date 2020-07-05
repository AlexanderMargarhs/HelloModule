PostReply = function(request, response) // Add the response function.
{
    let par = request.params;
    if (request.originalUrl == '/Persons')
    {
        const Person = require('../Person.js'); // Import the class.
        var PersonList = require('../data.js'); // Import the List.
        
        var name = request.body.name; // Body for POST, to get name.
        var age = request.body.age; // Body for POST, to get age.
        var gender = request.body.gender; // Body for POST, to get gender.
        
        var person = new Person(name, age, gender); // Create a new object.
        
        PersonList.push({'name' : person.getName(), 'age' : person.getAge(), 'gender' : person.getGender()}); // Add to array.
        
        response.json(PersonList); // Return the list.
    }
    else if (par.Person != undefined) // If the URL is /Persons/<name>.
    {    
        var PersonList = require('../data.js'); // Import the List.
        
        let index = PersonList.findIndex(x => x.name === par.Person); // Find the index of the array.

        if (index == -1) // Check if it exists.
        {
            response.send("Person " + par.Person + " was not on the list!"); // Send a basic error message.
        }
        else
        {
            response.json(PersonList[index]); // Return the result.
        }
    }
    else // Any other URL.
    {
        console.log(request.body);
        response.json(par);
    }
}

module.exports = PostReply; // Export Function.    