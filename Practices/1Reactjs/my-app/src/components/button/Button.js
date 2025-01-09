
import "./button.css"


 export default function Button(props){

    return(
        <div>
            <button ClassName="button" style={{backgroundColor: props.color}} >{props.title}</button>
        </div>
    )
}

export  function Button2(props){
    return(
        <div>
            <button ClassName="button" style={{backgroundColor: props.color}} >{props.title}</button>
        </div>
    )
}


