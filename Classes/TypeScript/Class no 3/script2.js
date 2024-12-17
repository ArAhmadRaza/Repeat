

async function tree() {
    let getUserByInput = document.getElementById("input").value
    const getGithubUsers =await fetch(`http://api.github.com/users/${getUserByInput}`)
    const response = await getGithubUsers.json()
    console.log(response);
    let userName = document.getElementById("name")
    let userImage = document.getElementById("img")
    let userBio = document.getElementById("bio")
    userName.innerHTML = response.name
    userImage.src = response.avatar_url
    if(response.bio == null){
        userBio.innerHTML = 'No Bio provided by the user'
        return;
    }else{
    userBio.innerHTML = response.bio
    }
    <h1 id="follower">
        ${response.followers}
    </h1>
    // let getFollowers = document.getElementById("follower")
    let getFollowing = document.getElementById("following")
    // getFollowers.innerHTML = response.followers
    getFollowing.innerHTML = response.following
}






















// function tree() {
    


// fetch('http://api.github.com/users/ahmadraza')
// .then(repon => {
//     console.log(repon);
    
//     return repon.json()
// })
// .then(repomse => {
//     console.log(repomse);
    
// })
// }







// var wer = Math.min(10,20,359,878,76,67)
// var wer = Math.sqrt(64)
// var wer = Math.ceil(4.2)
// var wer = Math.round(3.6)
// var wer = Math.cbrt(64)
// var wer = Math.floor(23.90)


// console.log(wer);


















































