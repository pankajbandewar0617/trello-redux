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
            <div>
                <h1> trello list page</h1>
                <div className="list-group">
                    {this.props.list.map(list => (
                        <div key={list.id} className="list-item">
                            <h1>{list.name}</h1>
                            {list.cards.map(card => (
                                <p key={card.id} className="card-group">
                                    {card.name}
                                </p>
                            ))}
                            <button> add card</button>
                        </div>
                    ))}
                    <button> add list</button>
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
