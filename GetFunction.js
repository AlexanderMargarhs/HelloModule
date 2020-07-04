GetReply = function(request, response) // Add the response function.
{
    let name = request.params;
    response.json(name);
}

module.exports = GetReply; // Export Function.