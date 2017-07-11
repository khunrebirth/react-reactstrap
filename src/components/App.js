import React, { Component } from 'react';
import { Container } from 'reactstrap';
import '../styles/App.css';
import TaskList from './TaskList';
import Date from './Date';
import Avatar from './Avatar';
import ActionButton from './ActionButton';

class App extends Component {

  constructor() {
    super();

    // Set State
    this.state = {
      tasks: [
        {
          id: '_' + Math.random().toString(36).substr(2, 9),
          time: '8',
          period: 'AM',
          title: 'Meeting Startup',
          description: '#React working',
        },
        {
          id: '_' + Math.random().toString(36).substr(2, 9),
          time: '10',
          period: 'PM',
          title: 'Meeting learn Angular',
          description: '#Angular working',
        },
        {
          id: '_' + Math.random().toString(36).substr(2, 9),
          time: '9',
          period: 'AM',
          title: 'Meeting learn Vue',
          description: '#Vue working',
        },
        {
          id: '_' + Math.random().toString(36).substr(2, 9),
          time: '4',
          period: 'AM',
          title: 'Meeting learn Javascript',
          description: '#Javascript working',
        },
      ],
    }

    this.delTask = this.delTask.bind(this);
  }

  delTask(index) {

    // console.log(this.state.tasks);
    let id = this.state.tasks.findIndex((item) => item.id === index);

    // console.log('id :', id, index);
    this.state.tasks.splice(id, 1);

    // Action Set State
    this.setState({
      tasks: this.state.tasks,
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Avatar />
          <Date />
          <TaskList 
            pTasks={this.state.tasks} 
            pDelTask={this.delTask} 
          />
          <ActionButton />
        </Container>
      </div>
    );
  }
}

export default App;
