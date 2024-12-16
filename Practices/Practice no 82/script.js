
async function tree() {
var wer2 = document.getElementById('input').value
var wer =await fetch(`http://api.github.com/users/${wer2}`)
// console.log(wer);
var data = await wer.json();
// console.log(data);
data.innerHTML = wer2
var rew = document.getElementById('hi')
var rew1 = document.getElementById('img')
var rew2 = document.getElementById('bio')

rew.innerHTML = data.login

rew1.src = data.avatar_url

rew2.innerHTML = data.bio


    
    
}




































