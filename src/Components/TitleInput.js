import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class TitleInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) => {
        this.setState({text: event.target.value});
    }

    render() {
        return (
                <TextField
                    readOnly={this.props.readOnly}
                    floatingLabelText="Enter the title..."
                    hintText='Title'
                    id='new-todo'
                    onChange={this.onChange}
                    value={this.state.text||this.props.text}
                    style={{
                        height: '96px',
                    }}
                />
        );
    }
}
export default TitleInput;