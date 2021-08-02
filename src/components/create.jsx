import React from 'react';

export default class CreateProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'Go ahead, make a project!'
        }
    }

    // async componentDidMount() {
    //     const webService = 'http://145.24.222.126:9000/projects/';
    //     const res = await fetch(webService)

    //     this.setState({
    //         projects: await res.json()
    //     })
    //     console.log(this.state.projects)
    // }

    formHandler = formData => {
        formData.preventDefault()
        fetch('http://localhost:8000/projects/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client: formData.target.client.value,
                description: formData.target.description.value,
                technologies: formData.target.technologies.value
            })
        }).then(res => {
            if(res.ok) {
                this.setState({
                    status: 'Project Added!'
                })
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Add a new Project!</h1>
                {
                    this.state.status ? (
                        <div>{this.state.status}</div>
                    ) : (null)
                }
                <form className="row" onSubmit={this.formHandler} action="">
                    <div className="col s12">
                        <div className="col s12 m6">
                            <p>Client name:</p>
                        </div>
                        <div className="col s12 m6">
                            <input type="text" name="client"/>
                        </div>
                        <div className="col s12 m6">
                            <p>Project description:</p>
                        </div>
                        <div className="col s12 m6">
                            <input type="text" name="description"/>
                        </div>
                        <div className="col s12 m6">
                            <p>What technologies did you use?</p>
                        </div>
                        <div className="col s12 m6">
                            <input type="text" name="technologies"/>
                        </div>
                        <div className="col s12">
                            <input type="submit" value="Create Project!"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}