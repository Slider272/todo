import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class TaskInput extends Component {

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
                    floatingLabelText='Input the task...'
                    hintText='Task'
                    rows={2}
                    rowsMax={4}
                    multiLine={true}
                    id='new-task'
                    onChange={this.onChange}
                    value={this.state.text}
                    className='textInput'
                />
        );
    }
}
export default TaskInput;