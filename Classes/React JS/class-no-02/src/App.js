import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Button from "./components/button/Button";
// import Image from "./assets/download.jfif"

function App() {
  return (
    <div>
      <Header />
      <h1>Hello World</h1>
      {/* <img style={{borderRadius: 20}} src={Image} /> */}
      {/* <img src="/logo192.png" /> */}

      <Footer />
      <Button title="App Button"  />
    </div>
  );
}

export default App;
