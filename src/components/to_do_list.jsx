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
  constructor(props){
    super(props);

    this.state = {
      list: []
    };
  }
  render() {
   const toDoElements = toDos.map((item) => {
      return <ListItem key={item.id} title={item.title} />
    });
    return (
      <ol>
        {toDoElements}
      </ol>
    )
  }
}

export default ToDoList;
