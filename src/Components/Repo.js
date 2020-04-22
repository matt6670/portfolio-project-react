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
                <div className={styles.repoSection}>
                    <div className={styles.descSection}>
                        <h2>Projects</h2>
                        <br />
                        <h3>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
                            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim 
                            qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. 
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
                            tincidunt ut laoreet dolore magna aliquam erat volutpat.</h3>
                        <h3>I currently have {this.state.numRepos} repost in Github</h3>
                    </div>
                    <div className={styles.gitSection}>
                        <img className={styles.githubAvatar} src={`${this.state.avatarURL}`} alt="github avatar"/>
                        <button className={styles.button} onClick={this.buttonClick}>GITHUB REPOS</button>
                    </div>
                </div>
            )
        }

        

}

export default Repo;
