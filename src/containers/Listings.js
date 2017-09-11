import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
import './Listings.css';

class Listings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:2023/api/listings')
      .then(res => {
        console.log(res.data.users[0]);
        this.setState({
          listings: res.data.users
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="all-users">
        {
          this.state.listings.map((user, i) => {
            return (
              <Card className="user-card" key={i}>
                <Link to={`/model/${i}`}>
                  {user.first_name}
                </Link>
                {user.username}
                <CardMedia
                  overlay={<CardTitle title={user.first_name + ' ' + user.last_name} subtitle={user.city_name}/>}
                >
                    <img className="profile-pic" src={user.picture} alt={user.username} />
                </CardMedia>
              </Card>
            )
          })
        }
      </div>
    );
  }
}

export default Listings;
