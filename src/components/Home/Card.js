import React from 'react';

const Card = (props) => {
    
    const results = props;

    return (
        <>
            <div className="card mt-5">
                <div className="card-header">
                    Featured
                </div>

                <ul className="list-group list-group-flush">
                    {/* <li className="list-group-item">An item</li> */}
                    
                </ul>
            </div>
        </>
    );
}

export default Card;