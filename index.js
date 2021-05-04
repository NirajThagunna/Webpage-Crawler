console.log("Webpage Crawler");

// querySelectorAll() - returns tha data in NodeList
// let links = document.querySelectorAll("a");
// console.log(links.length);

// you can't use forEach loop with HTMLCollection
// you can use forEach() loop with array and list - NodeList

// Converting the HTMLCollection into an array
// let arr = Array.from(links);

// links.forEach((element) => {
//     console.log(element.href);
// });

document.getElementById("searchBtn").addEventListener(
    "click", (e) => {
        e.preventDefault();

        let str = document.getElementById("txtString").value;
        console.log(str);

        // links
        let links = document.querySelectorAll('a');

        let href;
        links.forEach((element) => {
            href = element.href;
            if (href.includes(str)) {
                let element = document.createElement("li");
                let text = document.createTextNode(href);
                element.appendChild(text);

                // get the ul list
                let list = document.getElementById("list");
                list.appendChild(element);
            }
        });
    }
)



