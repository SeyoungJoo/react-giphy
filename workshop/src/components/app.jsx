import React, { Component } from 'react';

import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGifId: "LmNwrBhejkK9EFP504",
      gifIdList: ["13UZisxBxkjPwI", "zOvBKUUEERdNm","PnpkimJ5mrZR"]
    };
  }

  chagesSelectedGif = (newSelectedGifId) => {
    this.setState({selectedGifId: newSelectedGifId})
  };

  render() {
    const { selectedGifId, gifIdList } = this.state;
    return (
      <div>
        <div className="left-scene">
            <SearchBar />
            <div className="selected-gif">
              <Gif gifId={selectedGifId}/>
            </div>
        </div>
        <div className="right-scene">
          <GifList gifIdList={gifIdList} chagesSelectedGif={this.chagesSelectedGif}/>
        </div>
      </div>
    );
  }
}
