import React from 'react';
import './App.module.scss';
import {Movie} from "./component/Movie/Movie";
import AppNavbar from "./component/navbar/navbar";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movie: {}
        };
        this.handleSearchMovieByPressButton = this.handleSearchMovieByPressButton.bind(this);
    }

    handleSearchMovieByPressButton(text) {
        const url = 'http://www.omdbapi.com/?t=' + text + "&apikey=be4aa4e6";
        fetch(url)
            .then(data => data.json())
            .then(x => {
                if (x.Response === "False") {
                    console.log('false');
                    this.setState({
                        movie: {}
                    })
                } else {
                    console.log('true');
                    this.setState({
                        movie: x
                    })
                }
            }).catch(error => {
            console.log(error);
        })
    }

    render() {
        if (Object.keys(this.state.movie).length < 1) {
            return (
                <div className="App">
                    <AppNavbar handleSearch={this.handleSearchMovieByPressButton}/>
                    <p>Result not found</p>
                </div>
            );
        } else {
            return (
                <div>
                    <AppNavbar handleSearch={this.handleSearchMovieByPressButton}/>
                    <Movie movie={this.state.movie}/>
                </div>
            )
        }
    }
}

export default App;
