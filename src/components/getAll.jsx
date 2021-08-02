import React from 'react';
import { Link } from "react-router-dom";

export default class GetProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    async componentDidMount() {
        // const webService = 'http://145.24.222.126:9200/projects/';
        const webService = 'http://localhost:8000/projects';
        const res = await fetch(webService)

        this.setState({
            projects: await res.json()
        })
        console.log(this.state.projects)
    }

    render(){
        let data = this.state.projects.items;
        let projectTable = 'fetching data';
        console.log(data);
        if(data != null) {
            projectTable = data.map(project => {
                return(
                    <div className="row">
                        <div className="col s12 m4">
                            <p>Client:</p>
                        </div>
                        <div className="col s12 m4">
                            {project.client}
                        </div>
                        <div className="col s12 m4">
                            <Link to={`/projects/${project._id}/single`}>View Page</Link>
                        </div>
                    </div>
                )
            })
        }
        else {
            projectTable = 'waiting';
        }
        return(
            <div>
                {projectTable}
            </div>
        )
    }
}