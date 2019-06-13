import React, {Component} from 'react';
import axios from 'axios';

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    const url = ``

    axios.get(url)
      .then((response) => {
        this.setState({
          images: respnonse.data
        })
      })
      .catch((error) => console.log(error));
  }

  renderItems() {
    return this.state.images.map((item) => (
      <WallPaper key={item.url} item={item} />
    ));
  }

  render() {
    return (
      <div></div>
    )
  }
}