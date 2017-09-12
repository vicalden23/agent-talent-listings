import React, { Component } from 'react';
import axios from 'axios';
import {
  GridList,
  GridTile
} from 'material-ui/GridList';
import {
  Card,
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
    axios.get(`http://localhost:2023/api/listings/${id}`)
      .then(res => {
        this.setState({
          model: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    let model = this.state.model;

    return (
      <div className="container">
        <GridList style={styles.gridList} cellHeight={550}>
          {!model.medias ?
            <div>{'...Loading Model Profile'}</div> :
            model.medias.map((photo, i) => (
              <a href={photo}>
                <GridTile
                  key={i}
                  className="grid-tile"
                >
                  <img src={photo} alt="model" />
                </GridTile>
              </a>
          ))}
        </GridList>
        <Card className="model-info">
          <CardTitle
            className="title"
            title={
              <div>
                {model.first_name + ' ' + model.last_name}
                <span className="pull-right">
                  ${model.hour_rate} / hour<br/>
                  ${model.rate} / day
                </span>
              </div>
            }
            subtitle={model.city_name}
          />
          <CardText className="text">
            <div className="row">
              <div className="col-md-6">
                <p className="model-attr">Height: {!model.model ? 'N/A' : model.model.height}</p>
              </div>
              <div className="col-md-6">
                <p className="model-attr">Weight: {!model.model ? 'N/A' : model.model.weight}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <p className="model-attr">Bust: {!model.model ? 'N/A' : model.model.bust}</p>
              </div>
              <div className="col-md-4">
                <p className="model-attr">Waist: {!model.model ? 'N/A' : model.model.waist}</p>
              </div>
              <div className="col-md-4">
                <p className="model-attr">Hips: {!model.model ? 'N/A' : model.model.hips}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className="model-attr" >Hair Color: {!model.model ? 'N/A' : model.model.hair_color}</p>
              </div>
              <div className="col-md-6">
                <p className="model-attr" >Eye Color: {!model.model ? 'N/A' : model.model.eye_color}</p>
              </div>
            </div>
            <div>
              <p className="model-bio">{!model.model? ' ' : model.bio}</p>
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default ModelDetails;
