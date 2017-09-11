import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  GridList,
  GridTile
} from 'material-ui/GridList';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './ModelDetails.css';

const styles = {
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  gridTile: {
    color: 'rgb(0, 188, 212)',
  },
};

class ModelDetails extends Component {
  constructor(props) {
    super(props);
      this.state = {
        model: {}
      };
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
    console.log(model.model);
    return (
      <div>
        <GridList style={styles.gridList} cellHeight={330}>
          {!model.medias ?
            <div>{'...Loading Model Profile'}</div> :
            model.medias.map((photo, i) => (
              <GridTile
                key={i}
              >
                <img src={photo} />
              </GridTile>
          ))}
        </GridList>
        <Card className="model-info">
          <CardTitle className="name" title={model.first_name + ' ' + model.last_name} subtitle={model.city_name}/>
          <CardText>
            <div className="row">
              <div className="col-md-6">
                <p className="model-attr">Height: {!model.model ? ' ' : model.model.height}</p>
              </div>
              <div className="col-md-6">
                <p>Weight: {!model.model ? ' ' : model.model.weight}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <p>Bust: {!model.model ? ' ' : model.model.bust}</p>
              </div>
              <div className="col-md-4">
                <p>Waist: {!model.model ? ' ' : model.model.waist}</p>
              </div>
              <div className="col-md-4">
                <p>Hips: {!model.model ? ' ' : model.model.hips}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p>Hair Color: {!model.model ? ' ' : model.model.hair_color}</p>
              </div>
              <div className="col-md-6">
                <p>Eye Color: {!model.model ? ' ' : model.model.eye_color}</p>
              </div>
            </div>
            <div>
              <p>Biography:<br/>{!model.model? ' ' : model.bio}</p>
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}
/* {!model.model.weight ? ' ' : model.model.weight}*/
export default ModelDetails;
