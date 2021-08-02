import React from 'react';
import {Redirect} from "react-router-dom";

export default class DeleteProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: '',
            status: 'Time to delete something',
            isDeleted: false
        }
    }


    async componentDidMount() {
        const { id } = this.props.match.params
        // const webService = 'http://145.24.222.126:9200/projects/';
        const webService = `http://localhost:8000/projects/${id}`;
        const res = await fetch(webService)
        const project = await res.json()

        console.log(res)
        this.setState({
            project: project,
            id: project._id,
            uri: webService
        })
        console.log(this.state.id)
    }

    DeleteComponent() {
        fetch(`http://localhost:8000/projects/${this.state.id}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.ok) {
                this.setState({
                    status: 'Project Deleted!'
                })
            }
        })
        this.setState({isDeleted: true})
    }

    formHandler = formData => {
        formData.preventDefault()
        fetch(`http://localhost:8000/projects/${this.state.id}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.ok) {
                this.setState({
                    status: 'Project Updated!'
                })
            }
        })
        this.setState({isDeleted: true})
    }

    render(){
        if(this.state.isDeleted) {
            return <Redirect to="/"></Redirect>
        }
        return(
            <div>
                <h1>Deleting project {this.state.project.client}</h1>
                {
                    this.state.status ? (
                        <div>{this.state.status}</div>
                    ) : (null)
                }
                <form className="row" onSubmit={this.formHandler} action="">
                    <div className="col s12">
                        <input type="submit" value="Delete Project!"/>
                    </div>
                </form>
            </div>
        )
    }
}