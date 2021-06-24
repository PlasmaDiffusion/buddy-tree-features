//Get the url for testing or the server
export function getUrl() : string
{
if (process.env.NODE_ENV == "development") return "http://127.0.0.1:5000/";
else return "https://buddy-tree-features.herokuapp.com/";
}