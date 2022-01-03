import React, { Component } from 'react';

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      id: 1,
    };
  }
  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((usersList) => {
        this.setState({ users: usersList });
      });
  }

  SetUsers() {
    this.setState({ id: this.state.id + 1 });
  }

  useEffect() {
    this.getUsers();
  }
  render() {
    console.log(this.users);
    return (
      <div>
        {this.state.users.map((x) => {
          if (x.id == this.state.id) {
            return (
              <div>
                <p key={x.id}>{x.username}</p>
                <button onClick={this.SetUsers}>Next</button>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Api;
