import React, { Component } from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewList } from '../reduxComponents/action';
import './list.css';

class AddList extends Component {

    passValue = e => {
        e.preventDefault();
        const listName = e.target[0].value;
        this.props.addNewList(listName);
        this.props.history.push('/list')
    }

    render() {
        return (

            <div>
                <Link to="/list">
                    <button className="back-button">Back</button>
                </Link>

                <div className="list-add">
                    <h3>Add New List</h3>
                    <div>
                        <form onSubmit={this.passValue}>
                            <input
                                type="text"
                                placeholder="Enter List Name..."
                                required
                            />
                            <button type="submit">add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    // console.log(state);
    return {
        list: state.list
    };
};

const mapDispatchToProps = {
    addNewList
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddList));

// export default AddList;