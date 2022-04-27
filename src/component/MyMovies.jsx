import { Component } from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";

class MyMovies extends Component {
  state = {
    movieList1: [],
    movieList2: [],
    movieList3: [],
  };

  endpoint = "https://www.omdbapi.com/?apikey=91375f6c";

  componentDidMount = () => {
    this.fetchMovies();
  };

  fetchMovies = async () => {
    try {
      const [response1, response2, response3] = await Promise.all([
        fetch(this.endpoint + "&s=avengers"),
        fetch(this.endpoint + "&s=harry%20potter"),
        fetch(this.endpoint + "&s=star%20wars"),
      ]);
      if ((response1.ok, response2.ok, response3.ok)) {
        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();

        this.setState({ movieList1: data1.Search });
        this.setState({ movieList2: data2.Search });
        this.setState({ movieList3: data3.Search });
      } else {
        alert("Error Occured");
      }
    } catch (error) {
      console.log("something went wrong");
    }
  };

  render() {
    return (
       <>
        {
        this.state.movieList1 &&
        
      <div>
        <img src={this.movieList1.Poster} alt="" />
      </div>
      }
      </>
      
    )};
  export default MyMovies
;