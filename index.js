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

const dataa = async() => {
    let response = await fetch("https://swapi.co/api/people/")
    .then(async (response) => {
        response = await response.json()
        return response.results
    })
    .catch(err => {
        return err
    })
    response.map((res, index)=>{
        document.getElementById("list").innerHTML = document.getElementById("list").innerHTML +
        `<div>No.${index +1}<br>Name : ${res.name}<br>Height : ${res.height} <br> Hair Color : ${res.hair_color}<hr></div>`
    })
}
    dataa()



// fetch("https://swapi.co/api/people")
//     .then(response => {
//         return response.json()
//     })
//     .then(response => {
//         response.results.map((res, index)=>{
//             document.getElementById("list").innerHTML = document.getElementById("list").innerHTML +
//             `<div>No.${index +1}<br>Name : ${res.name}<br>Height : ${res.height} <br> Hair Color : ${res.hair_color}<hr></div>`
//         })
//     })



//level 3

const coba = async () => {
    let response = await fetch("https://api.github.com/users/wellyandriani/followers")
        .then(async (response) => {
            response = await response.json()
            return response
        })
        .catch(err => {
            return err
        })
    response.map((res, avatar_url) => {
        document.getElementById("image").innerHTML = document.getElementById("image").innerHTML +
        `<div class="d-flex mb-3 mt-3">
        <div align="center" class="card" style="width: 300px;">
        <div class="col-ms-3 card-img-top"><img width="300px" src="${res.avatar_url}">
        <div class="card-body">
        <h5 class="card-title"> ${res.login}</h5>
        <a href="${res.html_url}" class="btn btn-primary">Profile</a>
        </div>
        </div>
        </div>
        </div>`
    })
}
coba()