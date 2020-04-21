import React from 'react';
import styles from './Repo.module.css';

class Repo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            avatarURL: null,
            numRepos: null
        }
    }

    getRepoInfo = () => {

        fetch('https://api.github.com/users/matt6670')
        .then(response => response.json())
        .then(repoData => {
            this.setState({avatarURL:repoData.avatar_url});
        })
        .catch(error => console.error(error))

        fetch('https://api.github.com/users/matt6670/repos')
        .then(response => response.json())
        .then(repoData => {
            this.setState({numRepos: repoData.length})
        })
        .catch(error => console.error(error))
    }

    componentDidMount() {
        this.getRepoInfo();
    }

        // function ActionLink() {
        //     function handleClick(e) {
        //       e.preventDefault();
        //       console.log('The link was clicked.');
        //     }
          
        //     return (
        //       <a href="#" onClick={handleClick}>
        //         Click me
        //       </a>
        //     );
        //   

    buttonClick = () => {
         console.log('The link was clicked.');
         window.open("https://github.com/matt6670?tab=repositories");
     }


    render () {
            return (
                <div className="repoSection">
                    <h1>Repo</h1>
                    <h2>{this.state.numRepos}</h2>
                    <img src={`${this.state.avatarURL}`}/>
                    <button onClick={this.buttonClick}>My Repos</button>
                </div>
            )
        }

        

}

export default Repo;
