import React, { Component } from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderColumn,
  TableBody,
  TableRowColumn,
  Toggle,
  FloatingActionButton
} from 'material-ui';
import TextField from 'material-ui/TextField';
import ContentDeleteSweep from 'material-ui/svg-icons/content/delete-sweep';
import ContentSort from 'material-ui/svg-icons/content/sort';
// import RaisedButton from 'material-ui/RadioButton';

class TodoList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: [],
    }

    this.handleRowSelection = this.handleRowSelection.bind(this);
  }

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection(selectedRows) {
    this.setState({
      selected: selectedRows,
    })
  };

  getItems(item, index){
    return (
      <TableRow key={item.id} className='todoRow' selected={this.isSelected(index)}>
        <TableRowColumn
          style={{
            width: '10px',
          }}
        >
          {index+1}
        </TableRowColumn>

        <TableRowColumn>
          <TextField
            name={`${item.id}`}
            value={item.titles}
            onChange={this.props.onChangeItemTitle.bind(this, item.id)}
          />
        </TableRowColumn>

        <TableRowColumn>
          <TextField
            name={`${item.id}`}
            value={item.task}
            rows={2}
            rowsMax={4}
            multiLine={true}
            onChange={this.props.onChangeTask.bind(this, item.id)}
            />
        </TableRowColumn>

        <TableRowColumn
          style={{
            width: '90px',
            textAlign: 'center',
          }}
        >
          <Toggle
            toggled={item.isComplited}
            onToggle={this.props.onChangeComplited.bind(this, item.id)}
          />
        </TableRowColumn>
        <TableRowColumn />

      </TableRow>
    );
  }

  render() {
    return (
      <div className='todo'>
        <Table
          multiSelectable={true}
          onRowSelection={this.handleRowSelection}
          allRowsSelected={false}
        >
          <TableHeader className='tableHeader'>
            <TableRow>

              <TableHeaderColumn
                style={{
                  width: '10px',
                }}
              >
                ID
              </TableHeaderColumn>

              <TableHeaderColumn
                style={{
                  textAlign: 'center',
                }}
              >
                  Title
                <FloatingActionButton
                  mini={true}
                  onClick={this.props.onSortRows}
                  style={{
                    marginLeft: '30px',
                    top: '0px',
                  }}
                >
                  <ContentSort />
                </FloatingActionButton>
              </TableHeaderColumn>

              <TableHeaderColumn
                style={{
                  textAlign: 'center',
                }}
              >
                Task
              </TableHeaderColumn>

              <TableHeaderColumn
                style={{
                  width: '90px',
                  }}
              >
                Completed
              </TableHeaderColumn>
              <TableHeaderColumn
                style={{
                  textAlign: 'right',
                }}
              >
                <FloatingActionButton
                  mini={true}
                  onClick={this.props.onDeleteRow}
                >
                  <ContentDeleteSweep />
                </FloatingActionButton>
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            deselectOnClickaway={false}
          >
          {this.props.items && this.props.items.map((item, index) => (
            this.getItems(item, index)
          ))}
        </TableBody>
      </Table>
      </div>
    );
  }
}

export default TodoList;