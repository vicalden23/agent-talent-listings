import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  GridList,
  GridTile
} from 'material-ui/GridList';

class ModelDetails extends Component {
  constructor(props) {
    super(props);
      this.state = {
        model: {}
      }
  }

  componentDidMount() {

    let id = this.props.match.params.id;
    axios.get('http://localhost:2023/api/listings')
      .then(res => {
        this.setState({
          model: res.data.users[id]
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    let model = this.state.model;
    return (
      <div>
        {model.city_name}
      </div>
    );
  }
}

export default ModelDetails;
