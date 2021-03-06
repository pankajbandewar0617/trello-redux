import React, { Component } from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewCard } from '../reduxComponents/action';
import Button from '@material-ui/core/Button';


class AddCard extends Component {

    passValue = e => {
        e.preventDefault();
        const id = this.props.match.params.id
        const cardName = e.target[0].value;
        this.props.addNewCard(id, cardName);
        this.props.history.push('/list')
    }

    render() {
        return (

            <div>
                <Link to="/list">
                    <button className="back-button">Back</button>
                </Link>

                <div className="card-add">
                    <h3>Add New Card</h3>
                    <div>
                        <form onSubmit={this.passValue}>
                            <input
                                type="text"
                                placeholder="Enter Card Name..."
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
    addNewCard
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddCard));

// export default AddCard;