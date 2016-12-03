import React, {Component, PropTypes} from 'react';

class Todo extends Component {
    constructor(props){
     super(props)   
    }

    render() {
        return (
            <div>
            {[1,2,3,4].map((x,index)=><p key={index}>{x} ssssssssssssssss</p>)}
                todo is here
            </div>
        );
    }
}

Todo.propTypes = {

};

export default Todo;