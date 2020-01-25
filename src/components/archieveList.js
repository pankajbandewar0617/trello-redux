import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { archieveList } from './reduxComponents/action';


class ArchieveList extends Component {


    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.archieveList(id);
        this.props.history.push('/list');
    }
    render() {
        return (
            <h1>
                List archieved
            </h1>
        );
    }
}

const mapDispatchToProps = {
    archieveList
}

export default connect(null, mapDispatchToProps)(withRouter(ArchieveList));
