import Button from "./components/button/Button"
// import img from "./logo.svg"


function App(){
  return (
    <div>
      <h1>Hello World 1</h1>
      <Button title="Submit" abc="green"  />
      <img style={{width:"200px", height:"200px"}} alt="img" src={require("./logo.svg")} />
      <Button title="onClick" abc="red" />
      
    </div>
  )
}


export default App