
import "./button.css"


function Button(){
    return(
        <div>
            <button onClick={() => alert('Hello, world!')}>Click Me</button>
            <br/>
            <button onClick={() => alert('Goodbye, world!')}>Goodbye</button>
            <br/>
            <button onClick={() => alert('Hello, world! Twice')}>Click Me Twice</button>
            <br/>
            <button onClick={() => alert('Goodbye, world! Twice')}>Goodbye Twice</button>
            <br/>
            <button onClick={() => alert('Hello, world! Thrice')}>Click Me Thrice</button>
            <br/>
            <button onClick={() => alert('Goodbye, world! Thrice')}>Goodbye Thrice</button>
            <br/>
            <button onClick={() => alert('Hello, world! Four times')}>Click Me Four Times</button>
            <br/>
        </div>
    )
}

export default Button