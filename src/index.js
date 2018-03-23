import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import TodoApp from './TodoApp';

const App = () => (
    <MuiThemeProvider>
        <TodoApp />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
