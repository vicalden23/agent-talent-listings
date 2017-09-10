import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  GridList,
  GridTile
} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

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
    console.log(model.medias);
    return (
      <GridList style={styles.gridList} cols={2.8}>
          {!model.medias ?
            <div>{'...loading'}</div> :
            model.medias.map((photo, i) => (
            <GridTile
              key={i}
              title={model.first_name}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img src={photo} />
            </GridTile>
          ))}
        </GridList>
    );
  }
}

export default ModelDetails;
