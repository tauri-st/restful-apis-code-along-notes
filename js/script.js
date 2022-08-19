//Create an async function
const getData = async function () {
    //Create a variable to hold the response for the API and await response before moving onto next line of code
    const res = await fetch(
        "https://quote-garden.herokuapp.com/api/v3/quotes?author=beyonce"
    );
    //Call the json method on the res to transform the data into objects
    //json is also asynchronous so use await keyword
    const data = await res.json();
    //Log out the data
    console.log(data);
};
getData();