
let name = "Elizabeth";
function greet(name) {
    if(name == "Elizabeth"){
        return "Hello," + name;
    }
    if (name == null) {
        console.log("Hello there!");
    }
    if (name.toUpperCase){
        return "Hello, " + name.toUpperCase;
    }
}






describe ('test greet()', function ()
{
it ('should be called', function () {
expect (greet ('Elizabeth')).toBeCalled();
});
});