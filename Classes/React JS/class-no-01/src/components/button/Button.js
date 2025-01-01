import "./button.css"




export default function Button(props){

console.log("Props=>>>>>>>>>>>",props)

let btn = "aqua"
if(props.title === "Header Button"){
    btn = "red"
}
else if(props.title === "App Button"){
    btn = "blue"
}

    return(
        <div>
            <button type="button" style={{backgroundColor: btn}} class="btn btn-success">{props.title}</button>
    
        </div>
    )
}




















