import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import { editList } from '../reduxComponents/action';


class EditList extends Component {

    passValue = e => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const listName = e.target[0].value;
        this.props.editList(id, listName);
        this.props.history.push('/list')
    }

    render() {
        return (

            <div>
                <Link to="/list">
                    <button className="back-button">Back</button>
                </Link>

                <div className="list-add">
                    <h3>Edit List Name</h3>
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
    editList
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditList));
