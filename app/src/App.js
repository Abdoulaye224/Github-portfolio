import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import FormUser from './FormUser.js';
import UserProfil from './UserProfil.js';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            user: false,
            github: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChecked = this.handleChecked.bind(this)

    }

    handleChecked(e) {
      this.setState({
          checked: !this.state.checked
      })
    }
    
    handleSubmit(e) {
        e.preventDefault()

        const data = new FormData(e.target)
        const username = data.get('username')
        console.log(username,data)
        this.fetchUser(username)
        this.fetchUserRepos(username)
    }
    async fetchUser(username) {
        fetch("https://api.github.com/users/"+username)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        user: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    async fetchUserRepos(username) {
        fetch("https://api.github.com/users/"+username+"/repos")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        github: result
                    });console.log(result)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { isLoading, user, github, checked} = this.state
        return (
            <div>
                {!github &&
                <FormUser
                  handleSubmit={this.handleSubmit}
                    handleChecked={this.handleChecked}
                    error = {false}
                    />
                }
                { isLoading && <p>Fetching github ...</p> }
                { !isLoading && !github.message && github && user &&
                <UserProfil 
                username = {user}
                github = {github}
                checked = {checked}
                />
                }
              { !isLoading && github.message && 
              <FormUser
              handleSubmit={this.handleSubmit}
              handleChecked={this.handleChecked}
              error = {true}
              />
            }
            </div>

        );
    }
}
export default App;
