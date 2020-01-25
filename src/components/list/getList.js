import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../card/getCard';
import { getAllList, editList } from '../reduxComponents/action';
import './list.css';
import Button from '@material-ui/core/Button';

class List extends Component {
    componentDidMount() {
        this.props.getAllList();
    }
    // state = {
    //     listName: ''
    // }
    // change = (e) => {
    //     console.log('change')
    //     this.setState({ listName: e.target.value })
    // }
    // submit = (id) => {
    //     console.log('submit')
    //     this.props.editList(id, this.state.listName)
    // }

    render() {
        return (
            <div className="board">
                {/* <Link to="/">
                    <button className="back-button">Back</button>
                </Link> */}
                <div className="list-group">
                    {this.props.list.map(list => (
                        <div key={list.id} className="list-item">
                            {/* <form onChange={this.change} onSubmit={this.submit(list.id)}>
                                <input defaultValue={list.name} style={{ border: 'none', backgroundColor: 'transparent' }} />
                            </form> */}
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
    getAllList, editList
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
// export default List;
