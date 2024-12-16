


function getGithubUsers() {
    fetch('https://api.github.com/users')
    .then(response => {
        console.log("Response =>>>>>>>",response);
        return response.json();
    })
    .then(users => {
        console.log("Users =>>>>",users)
    })
}
















// var num = parseInt(Math.random() * 1000)
// var num = Math.floor(Math.random() * 1000)


// var num = Math.round(7.4)


// var num = Math.ceil(4.0)

// var num = Math.max(10, 20, 50, 20 ,2,54,68,96)
// var num = Math.min(10, 20, 50, 20 ,2,54,68,96)

// var num = Math.sqrt(64)

// var num = Math.abs(3)

// var num = Math.pow(4, 2)

// var num = Math.log(100)

// var num = Math.cbrt(64)

// console.log(num);



















































