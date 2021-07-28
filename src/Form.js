import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
    state = {
        keyWord: "",
        startDate: "",
        endDate: ""
    };

    change = e => { 
        this.props.onChange({ [e.target.name]: e.target.value});
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault;
        //this.props.onSubmit(this.state);
        fetch(this.props.formAction, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({description: this.state.description})
        });
        this.setState({
            keyWord: "",
            startDate: "",
            endDate: ""
        });
        this.props.onChange({
            keyWord: "",
            startDate: "",
            endDate: ""
        });
    };

    render(){
        return (
            <form
            id="main-login"
                action={this.props.action}
                method={this.props.method}
                onSubmit={this.onSubmit}
            >
                <input 
                    name="keyWord"
                    placeholder="Mots-clés"
                    value={this.state.keyWord} 
                    onChange={e => this.change(e)} 
                />
                <br />
                <input 
                    name="startDate"
                    placeholder="Date de début" 
                    value={this.state.startDate} 
                    onChange={e => this.change(e)} 
                />
                <input 
                    name="endDate"
                    placeholder="Date de fin"
                    value={this.state.endDate} 
                    onChange={e => this.change(e)} 
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Rechercher</button>
            </form>
        );
    }
 }

 Form.defaultProps = {
    action: '',
    method: 'post'
 }

 export default Form;