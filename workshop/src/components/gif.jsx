import React, { Component } from 'react';

export default class Gif extends Component {
  render() {
    const { gifId } = this.props;
    const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
    return (
      <img src={url} alt="git" className="gif"/>
    );
  }
}
