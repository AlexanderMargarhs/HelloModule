PostReply = function(request, response) // Add the response function.
{
    let name = request.params;
    console.log(name);
    response.json(name);
}

module.exports = PostReply; // Export Function.