import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Button from "./components/button/Button"
import { Button2 } from "./components/button/Button"

function App(){
  return (
    <div>
        <Header />
      <h1>Hello World 1</h1>
      <Button title="login" color="blue" />
      <Footer />
      <Button2 title="duffer"  color="yellow"/>
    </div>
  )
}

export default App