//Get the url for testing or the server
export function getServerURL() : string
{
if (process.env.NODE_ENV == "development") return "http://127.0.0.1:5000/";
else if (process.env.NODE_ENV == "test") return "";
else return "https://buddy-tree-features.herokuapp.com/";
}

//Get the user through the last / part of the url
export function getUserFromURL(showUserPrompt : boolean = false) : string
{
const url = window.location.href;
let params = url.split("/");
let user = params[params.length-1];


//Tell user to login if the argument was passed in
if ((user=="" || user == null) && showUserPrompt) alert("Only users can vote or add on to the list of features.");
return user;

}

//Make a string of getFeatures/ or getFeatures/<user>
export function createGetRequest() : string
{
    const user = getUserFromURL(false);
    let url = ""
    if (user=="") url=getServerURL() + "getFeatures";
    else url= getServerURL() + "getFeatures/" + user;

    return url;
}