
async function tree() {
    var getInputById = document.getElementById('input').value
    var getgitId = await fetch(`http://api.github.com/users/${getInputById}`)
    var answer = await getgitId.json()
    console.log(answer);
    var getHone = document.getElementById('hello')
    var getImage = document.getElementById('image')
    var getBio = document.getElementById('bio')
    getHone.innerHTML = answer.login
    getImage.src = answer.avatar_url
    if (answer.bio = null) {
        console.log("bio is not have");
    }else{
    getBio.innerHTML = answer.bio
    }
}































