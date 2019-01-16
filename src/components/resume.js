import React, {Component} from 'react';
import image from '../assets/resume.jpg';


class Resume extends Component{
    render(){
        return(
            <div className = "document">
                <img 
                            src={image} 
                            alt = "resume"
                            className = "resume-img"
                            />
                           

             </div>
        );
    }

}

export default Resume; 