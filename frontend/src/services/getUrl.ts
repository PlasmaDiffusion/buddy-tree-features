//Get the url for testing or the server
export function getUrl()
{
if (process.env.NODE_ENV == "development") return "http://localhost:5000/";
else return "heroku-site-here";
}