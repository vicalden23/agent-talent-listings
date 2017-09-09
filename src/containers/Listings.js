import React, { Component } from 'react';
import axios from 'axios';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

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
      <div className="App">
        <p>hello world</p>
        {
          this.state.listings.map((user, i) => {
            return (
              <Card key={i}>
                {user.username}
                <CardMedia>
                  <img src={user.picture} alt={user.username} />
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
