import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import { editCard } from '../reduxComponents/action';

class EditCard extends Component {

    passValue = e => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const cardName = e.target[0].value;
        this.props.editCard(id, cardName);
        this.props.history.push('/list')
    }
    render() {
        return (

            <div>

                <Link to="/list">
                    <button className="back-button">Back</button>
                </Link>
                <div>
                    <h3> Edit Card Name</h3>
                    <div>
                        <form onSubmit={this.passValue}>
                            <input
                                type="text"
                                placeholder="Enter Card Name..."
                                required
                            />
                            <button type="submit">submit</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.list
    };
};

const mapDispatchToProps = {
    editCard
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditCard));