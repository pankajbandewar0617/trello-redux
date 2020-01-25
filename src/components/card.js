import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { addNewCard } from './reduxComponents/action';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'


import './card.css';

class Card extends Component {

    render() {
        return (
            <div>
                <div className="card-group">
                    {this.props.cards.map(card => (
                        <div className='card-item' key={card.id}>
                            <p >
                                {card.name}
                            </p>
                            <Button color="primary"> edit</Button>
                            <Button color="secondary"> delete</Button>
                        </div>
                    ))}
                    <Link to="/list/card">
                        <button idList={this.props.idList}>add card</button>
                    </Link>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    console.log(state);
    return {
        list: state.list
    };
};

const mapDispatchToProps = {
    addNewCard
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
// export default Card;
