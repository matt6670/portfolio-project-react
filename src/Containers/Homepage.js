import React from 'react';
import Info from "../Components/Info"
import Skills from "../Components/Skills"
import Repo from "../Components/Repo"

class Homepage extends React.Component {
    render(){
        return (
            <div>
                <div className="infoDiv"> 
                    <Info />
                </div>
                <div className="skillsDiv"> 
                    <Skills />
                </div>
                <div className="repoDiv"> 
                    <Repo />
                </div>
            </div>
            
        )
    }
}



export default Homepage;