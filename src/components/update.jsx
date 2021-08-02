import React from 'react';

export default class UpdateProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: '',
            status: 'Update your project!'
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
            client: project.client,
            description: project.description,
            technologies: project.technologies,
            uri: webService
        })
        console.log(this.state.uri)
    }

    formHandler = formData => {
        formData.preventDefault()
        fetch(`http://localhost:8000/projects/${this.state.id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '',
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
                    status: 'Project Updated!'
                })
            }
        })
    }

    render(){
        let data = this.state
        return(
            <div>
                <h1>Update Project!</h1>
                {
                    this.state.status ? (
                        <h2>{this.state.status}</h2>
                    ) : (null)
                }
                <form className="row" onSubmit={this.formHandler} action="">
                    <div className="col s12">
                        <div className="col s12 m6">
                            <p>Client name:</p>
                        </div>
                        <div className="col s12 m6">
                            <input type="text" name="client" value={data.client} onChange={form => this.setState({ client: form.target.value})}/>
                        </div>
                        <div className="col s12 m6">
                            <p>Project description:</p>
                        </div>
                        <div className="col s12 m6">
                            <input type="text" name="description" value={data.description} onChange={form => this.setState({ description: form.target.value})}/>
                        </div>
                        <div className="col s12 m6">
                            <p>What technologies did you use?</p>
                        </div>
                        <div className="col s12 m6">
                            <input type="text" name="technologies" value={data.technologies} onChange={form => this.setState({ technologies: form.target.value})}/>
                        </div>
                        <div className="col s12">
                            <input type="submit" value="Update Project!"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}