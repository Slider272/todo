import React, { Component } from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderColumn,
  TableBody,
  TableRowColumn,
  Checkbox,
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
            disabled={true}
          />
        </TableRowColumn>

        <TableRowColumn>
          <TextField
            name={`${item.id}`}
            value={item.task}
            disabled={true}
            rows={2}
          />
        </TableRowColumn>

        <TableRowColumn
          style={{
            width: '90px',
            textAlign: 'center',
          }}
        >
          <Checkbox
            checked={item.isComplited}
            disabled={true}
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
                Complited
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
          {this.props.items.map((item, index) => (
            this.getItems(item, index)
          ))}
        </TableBody>
      </Table>
      </div>
    );
  }
}

export default TodoList;