import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <h2>Card Page</h2>
        );
    }
}

export default Card;

{
    this.props.directors.map(data => (
        < div key={data.id} className='director-block' id={data.id}  >
            <div className='list-area-director'>
                <p>{data.id}</p>
                <p> Director: {data.Director}</p>
            </div>
            <div className="buttons">
                <Link to={`/directors/${data.id}/update`}>
                    <button className="update">Update</button>
                </Link>
                <Link to="/directors">
                    <button className="update delete" onClick={this.printEvent}>Delete</button>
                </Link>

            </div>
        </ div>
    ))
}