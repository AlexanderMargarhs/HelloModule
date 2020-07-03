GetReply = function(request, response) // Add the response function.
{
    let Hello = {answer : "Hello World!"};
    response.send(Hello.answer);
}

module.exports.GetReply = GetReply; // Export Function.