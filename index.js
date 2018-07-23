//level 0

// fetch("https://swapi.co/api/people")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     });


//level 1


// fetch("https://swapi.co/api/people")
//     .then(response => {
//         return response.json();
//     })
//     .then(response => {
//         console.log(response.results);
//     });


//level 2

// const dataa = async() => {
//     let response = await fetch("https://swapi.co/api/people/")
//     .then(async (response) => {
//         response = await response.json()
//         return response.results
//     })
//     .catch(err => {
//         return err
//     })
//     response.map((res, index)=>{
//         document.getElementById("list").innerHTML = document.getElementById("list").innerHTML +
//         `<div>No.${index +1}<br>Name : ${res.name}<br>Height : ${res.height} <br> Hair Color : ${res.hair_color}<hr></div>`
//     })
// }
//     dataa()



fetch("https://swapi.co/api/people")
    .then(response => {
        return response.json()
    })
    .then(response => {
        response.results.map((res, index)=>{
            document.getElementById("list").innerHTML = document.getElementById("list").innerHTML +
            `<div>No.${index +1}<br>Name : ${res.name}<br>Height : ${res.height} <br> Hair Color : ${res.hair_color}<hr></div>`
        })
    })




    