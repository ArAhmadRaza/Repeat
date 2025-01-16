import Button from "../button/Button"


export default function Hero(){
    return(
        <div className="hero">

        <div className="container">
  
          <div className="left">
  
            <h1 className="h1">
              Hi, I'm <b>Julia&nbsp;Walker</b>.
              <br />Web Developer
            </h1>
  
            <p className="h3">
              Specialized in <abbr title="Accessibility">a11y</abbr>
              and Core Web Vitals
            </p>
  
            <div className="btn-group">
             <Button text="Contact me" />
              <Button text="About me" />
            </div>
  
          </div>
  
          <div className="right">
  
            <div className="pattern-bg"></div>
            <div className="img-box">
              <img src={require("../../images/hero.png")}  alt="Julia Walker" className="hero-img" />
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
            </div>
  
          </div>
{/*   
            {[{email: "test@gmail.com"},{email: "test2@gmail.com"},{email: "test3@gmail.com"},{email: "test4@gmail.com"}].map((item, index) => {
              return <div key={index} item={item}>{item.email}</div>
            })} */}
        </div>
  
      </div>
  
    )
}





























