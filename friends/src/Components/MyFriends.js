import axios from 'axios';
import React from 'react';

import { axiosWithAuth } from './../utils/axiosWithAuth'

class MyFriends extends React.Component {
  state = {
    myFriends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
    .get('/friends')
    .then(res=>{
      console.log(res);
      this.setState({
        ...this.state,
        myFriends: res.data
      });
    })
    .catch(err=>{
      console.log(err);
    })
  };


  render() {
    return (
      <div className="container" >
        <h1>These are my friends...I think</h1>
        <div className='friends-container'>
          {this.state.myFriends.map(friend => (
            <div key={friend.id} className='friendContainer'>
            <h3>{friend.name}</h3>
            <p>{friend.email}</p>
            <p>Age: {friend.age}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

}
export default MyFriends;