import React from 'react';
import Info from "../Components/Info"
import Skills from "../Components/Skills"
import Repo from "../Components/Repo"

class Homepage extends React.Component {
    render(){
        return (
            <div>
                <Info />
                <Skills />
                <Repo />
            </div>
        )
    }
}



export default Homepage;