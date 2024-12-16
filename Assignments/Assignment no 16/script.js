

function justForm() {
    var getButton = document.getElementById('botton')
    var dvr1 = document.getElementById('diver1')
    var dvr2 = document.getElementById('diver2')
    var dvr3 = document.getElementById('diver3')
    var dvr4 = document.getElementById('diver4')
    var dvr5 = document.getElementById('diver5')
    var dvr6 = document.getElementById('diver6')

    var wer1 = dvr1?.value
    var wer2 = dvr2?.value
    var wer3 = dvr3?.value
    var wer4 = dvr4?.value
    var wer5 = dvr5?.value
    var wer6 = dvr6?.value

    console.log(wer1);
    console.log(wer2);
    console.log(wer3);
    console.log(wer4);
    console.log(wer5);
    console.log(wer6);

    var try1 = document.getElementById('tree1')
    var try2 = document.getElementById('tree2')
    var try3 = document.getElementById('tree3')
    var try4 = document.getElementById('tree4')
    var try5 = document.getElementById('tree5')
    var try6 = document.getElementById('tree6')

    try1.innerHTML = `User ID is = ${wer1}`
    try2.innerHTML = `User Password is = ${wer2}`
    try3.innerHTML = `User Name is = ${wer3}`
    try4.innerHTML = `Address is = ${wer4}`
    try5.innerHTML = `User Email is = ${wer5}`
    try6.innerHTML = `About is = ${wer6}`
    
}


































