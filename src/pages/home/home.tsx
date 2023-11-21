import "./home.scss";
import Header from "../../components/header/header";
export default function Home() {
  return (
    <>
     <Header/>
    
    <div className="container global-padding" id="home">
      
      <div className="left-top">
        <p>One stop shop for fresh fruits & vegetables</p>
        <button id="shopnow">Shop Now</button>
      </div>

        <div className="left-bottom">
          <p>+91 7061874438</p>
        </div>

        <div className="right-bottom">
          <p>FARMHOUSE</p>
        </div>
      </div>
    </>
  );
}
