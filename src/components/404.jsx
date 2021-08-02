import React from 'react';
import { Link } from "react-router-dom";

export default class CannotFind extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: []
        }
    }

    render(){
        return(
            <div>
                Cannot find what you are looking for!
            </div>
        )
    }
}