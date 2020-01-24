import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import Card from './card';
import { getAllList } from './reduxComponents/action';
import './list.css';

class List extends Component {
    componentDidMount() {
        this.props.getAllList();
    }

    render() {
        return (
            <div className="board">
                {/* <h1> trello list page</h1> */}
                <div className="list-group">
                    {this.props.list.map(list => (
                        <div key={list.id} className="list-item">
                            <h1>{list.name}</h1>
                            <div className="card-group">
                                {list.cards.map(card => (
                                    <div className='card-item' key={card.id}>
                                        <p >
                                            {card.name}
                                        </p>
                                        <button>edit</button>
                                        <button className='delete'>delete</button>
                                    </div>
                                ))}
                            </div>
                            <Link to="/list/card">
                                <button> add card</button>
                            </Link>
                        </div>
                    ))}
                    <Link to="/list/add">
                        <button > add list</button>
                    </Link>
                </div>
            </div>
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
