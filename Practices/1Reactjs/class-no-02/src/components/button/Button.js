import "./button.css"


function Button(props){
    console.log("Props ===>>>>>>>", props)
    return (
    <div>
            <button class="btn" style={{backgroundColor: props.abc}}>{props.title}</button>
    </div>
    )
}


export default Button














