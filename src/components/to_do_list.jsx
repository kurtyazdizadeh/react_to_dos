import React from 'react';
import ListItem from './list_item';

const toDos = [
  {
    id: '01',
    title: 'Wash car'
  },
  {
    id: '02',
    title: 'Code more'
  },
  {
    id: '03',
    title: 'Cook dinner'
  },
  {
    id: '04',
    title: 'Make money'
  },
  {
    id: '05',
    title: 'Get paid'
  }
]

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.toDoElements = toDos.map((item) => {
      return <ListItem key={item.id} title={item.title} />
    });
  }
  render() {
    return (
      <ol>
        {this.toDoElements}
      </ol>
    )
  }
}

export default ToDoList;
