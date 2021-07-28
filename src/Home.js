import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Form from "./Form";

class Home extends Component {
    state = {
        fields: {}
    };

    onChange = updatedValue => {
        this.setState({ 
            fields : {
                ...this.state.fields,
                ...updatedValue
            }
        });
    };

    render(){
        return (
            <div className="Home">
                <h1>
                Tweets emotions detection.
                </h1>
            </div>,
            <div className="Formulaire">
                <Form onChange={fields => this.onChange(fields)} />
                <p> 
                    {JSON.stringify(this.state.fields, null, 2)}
                </p>
            </div>
        );
    }
}
 export default Home;