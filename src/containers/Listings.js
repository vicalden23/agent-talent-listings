import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardTitle
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
      <div className="listings-container">
        <div className="all-users">
          {
            this.state.listings.map((user, i) => {
              return (
                <Link to={`/model/${i}`}>
                  <Card className="user-card" key={i}>
                    <CardMedia
                      overlay={<CardTitle title={
                        <div>
                        {user.first_name + ' ' + user.last_name}
                        <span className="pull-right">
                          ${user.hour_rate} HR
                        </span>
                        </div>
                      }
                      subtitle={user.city_name}/>}
                    >
                      <img className="profile-pic" src={user.picture} alt={user.username} />
                    </CardMedia>
                  </Card>
                </Link>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Listings;
