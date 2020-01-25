import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from './card';
import { getAllList } from './reduxComponents/action';
import './list.css';
import Button from '@material-ui/core/Button';

class List extends Component {
    componentDidMount() {
        this.props.getAllList();
    }

    render() {
        return (
            <div className="board">
                <div className="list-group">
                    {this.props.list.map(list => (
                        <div key={list.id} className="list-item">
                            <p>{list.name}</p>
                            <Link to={`/list/${list.id}/edit`}>
                                <Button color="primary" variant="contained" idList={list.id}>edit</Button >
                            </Link>                            <Link to={`/list/${list.id}/archieve`}>
                                <Button color="secondary" variant="contained" idList={list.id}>archieve</Button >
                            </Link>
                            <Card cards={list.cards} idList={list.id} />
                        </div>
                    ))}
                    <Link to="/list/add">
                        <Button color="secondary"> add list</Button>
                    </Link>
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        list: state.list
    };
};

const mapDispatchToProps = {
    getAllList
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
// export default List;
