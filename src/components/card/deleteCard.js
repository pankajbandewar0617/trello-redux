import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteCard } from '../reduxComponents/action';

class DeleteCard extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.deleteCard(id)
        this.props.history.push('/list')
    }

    render() {
        return (
            <h2>Card Deleted</h2>
        );
    }
}


const mapDispatchToProps = {
    deleteCard
}

export default connect(null, mapDispatchToProps)(withRouter(DeleteCard));
