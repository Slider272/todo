import React, { Component } from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderColumn,
  TableBody,
  TableRowColumn,
  Checkbox,
} from 'material-ui';
import TextField from 'material-ui/TextField';

class TodoList extends Component {

  render() {
    return (
      <div className='todo'>
        <Table
          multiSelectable={true}
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

              <TableHeaderColumn>
                Title
              </TableHeaderColumn>

              <TableHeaderColumn>
                Task
              </TableHeaderColumn>

              <TableHeaderColumn
                style={{
                  width: '90px',
                }}
              >
                Complited
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
          {this.props.items.map((item, index) => (
            <TableRow key={item.id} className='todoRow'>
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
                }}
              >
                <Checkbox
                  checked={item.isComplited}
                  disabled={true}
                />
              </TableRowColumn>
              <TableRowColumn
                style={{
                  width: '30px',
                }}
              >
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    );
  }
}

export default TodoList;