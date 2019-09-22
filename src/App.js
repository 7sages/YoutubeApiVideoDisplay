//import logo from './logo.svg';
import "./App.css";

import React from "react";
//import Youtube from "./apis/Youtube";
import axios from "axios";
import Searchbar from "./components/Searchbar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };

  componentDidMount() {
    this.onSearchSubmit("learn react");
  }

  onSearchSubmit = async inputvalue => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResult: "5",
          key: "AIzaSyA9EihIqwP-agFalPSpJpRXhUW2zZI29FA",
          q: inputvalue
        }
      }
    );
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  render() {
    return (
      <div className="ui container">
        <Searchbar onFormSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
