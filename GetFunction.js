GetReply = function(request, response) // Add the response function.
{
    let Hello = {answer : "Hello World!"};
    response.json(Hello);
}

module.exports = GetReply; // Export Function.