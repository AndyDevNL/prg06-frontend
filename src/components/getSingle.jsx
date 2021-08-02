import React from 'react';
import { Link, Redirect} from "react-router-dom";


export default class GetProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: []
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        // const webService = 'http://145.24.222.126:9200/projects/';
        const webService = `http://localhost:8000/projects/${id}`;
        const res = await fetch(webService)
        console.log(res)
        this.setState({
            project: await res.json(),
            statusCode: res.status
        })
        console.log(res.status)
    }

    render(){
        if(this.state.statusCode == 404){
            return <Redirect to="/404"></Redirect>
        }
        let data = this.state.project;
        let projectTable = 'fetching data';
        console.log(data);
        if(data != null) {
            projectTable = 
                    <div className="row">
                        <div className="projectCard">
                            <div className="col s12 blue lighten-3">
                                <p>Client:</p>
                            </div>
                            <div className="col s12 blue lighten-2">
                                {data.client}
                            </div>
                            <div className="col s12 red lighten-3">
                                <p>Description</p>
                            </div>
                            <div className="col s12 red lighten-2">
                                {data.description}
                            </div> 
                            <div className="col s12 yellow lighten-3">
                                <p>Technologies</p>
                            </div> 
                            <div className="col s12 yellow lighten-2">
                                {data.technologies}
                            </div>   
                        </div>
                        <div className="settings">
                            <Link className="button green darken-5" to={`/projects/${data._id}/update`}>update</Link>
                            <Link className="button red darken-5" to={`/projects/${data._id}/delete`}>delete</Link>
                        </div>
                    </div>
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