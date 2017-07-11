import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
    render() {

        let {
                pTasks, 
                pDelTask,
        } = this.props;

        return (
            <div>
                {
                    pTasks.map((item, index) => {
                        return (
                            <Task
                                key={index}
                                pId={item.id}
                                pTime={item.time}
                                pPeriod={item.period}
                                pTitle={item.title}
                                pDescription={item.description}
                                
                                pDelTask={pDelTask}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default TaskList;