import React, { Component } from "react";
import "./App.css";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";
import axios from "axios";
import Loading from "./Components/Loading";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    };
  }
  // componentDidMount() {
  //   fetch('http://api.giphy.com/v1/gifs/trending?api_key=nfk5l61v6iAvUc6ihToMMF3OwuO4vdUM')
  //   .then(response => response.json())
  //   .then(responseData => {
  //     this.setState({gifs: responseData.data})
  //   })
  //   .catch(error => {
  //     console.log('Error fetching and parsing data', error)
  //   });
  // }

  componentDidMount() {
    axios
    .get(`https://api.tenor.com/v1/trending?key=8SAEIM0BLC2R&limit=24`)
    .then(response => {
        this.setState({
          gifs: response.data.results,
          loading: false
        })
    })
    .catch(error => {
      console.log("Error fetching and parsing data", error);
    });
    // this.performSearch();
  }

  performSearch = (query = 'cute') => {
    axios
    .get(`https://api.tenor.com/v1/search?tag=${query}&key=8SAEIM0BLC2R&limit=24`)
    .then(response => {
        this.setState({
          gifs: response.data.results,
          loading: false
        })
    })
    .catch(error => {
      console.log("Error fetching and parsing data", error);
    });
  }

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <a href="."><h1 className="main-title">Toan.Codes</h1></a>
            <SearchForm onSearch={this.performSearch}/>
          </div>
        </div>
        <div className="main-content">
        {
          (this.state.loading)
          ? <Loading />
          :<GifList data={this.state.gifs}/>
        }
        </div>
      </div>
    );
  }
}
