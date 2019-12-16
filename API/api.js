//command line application that consumes a news api
// api key 81ef747619f245e893392ea7cc555fce
//news sources
// aljazeera
//bbc
//cnn
//abc



const https = require("https");

// user  inputs new source
console.log("Please enter a number of one of the news source:\n");
console.log("1. al-jazeera-english\n2. bbc-news\n3. cnn\n4. abc-news\n");

const pickData = () => {
const news_sources = {
1: "al-jazeera-english",
2: "bbc-news",
3: "cnn",
4: "abc-news"
};

// setting process.stdin as the standard input object.
const standard_input = process.stdin;

// Setting input character encoding.
standard_input.setEncoding("utf-8");

let user_input = "";

// result when user inputs data
standard_input.on("data", data => {
const sources = [1, 2, 3, 4];

// convert string to integer
const num_data = Number(data);

// User input exit.
if (data === "exit\n") {
process.exit();
} else if (!sources.includes(num_data)) {
// Program exit.
console.log("Please input a valid news source");
} else {
const url = `https://newsapi.org/v2/top-headlines?sources=${news_sources[num_data]}&pageSize=10&apiKey=81ef747619f245e893392ea7cc555fce`;

https
.get(url, response => {
let data = "";

// A chunk of data has been received
response.on("data", chunk => {
data += chunk;
});

// The whole response has been received. Print out the result.
response.on("end", () => {
res = JSON.parse(data);
console.log("Res", res);
});
})
.on("error", err => {
error = err;
console.log("Error", err);
});
// process.exit();
}
});
};

pickData();
