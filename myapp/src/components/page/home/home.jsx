// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
function Home() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
