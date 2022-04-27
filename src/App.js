import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import "./App.css";
import MyNavbar from "./component/MyNavbar";
import TvShow from "./component/TvShow";
import MyMovies from "./component/MyMovies";

function App() {
  return (
    <div>
      <MyNavbar />
      <TvShow />
      <MyMovies />
    </div>
  );
}

export default App;
