//Get the url for testing or the server
export function getUrl() : string
{
if (process.env.NODE_ENV == "development") return "http://127.0.0.1:5000/";
else return "https://buddy-tree-features.herokuapp.com/";
}

//Get the user through the last / part of the url
export function getUserFromURL() : string
{
const url = window.location.href;
let params = url.split("/");

let user = params[params.length-1];
if (user=="" || user == null) alert("Only users can vote for requests.");
return user;

}
        