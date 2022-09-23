import React from "react";
import CardBody from "./CardBody";
import {connect} from 'react-redux';


const Counter = ({count, dispatch}) => {
    const handleIncrement = () => {
        dispatch({type: 'INCREMENT'});
    };

    const handleDecrement = () => {
        dispatch({type: 'DECREMENT'});
    };
    return (
        <div className="card text-center">
            <div className="card-header bg-primary text-white">
                Click Counter!
            </div>
            <CardBody count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
        </div>
    );
}

const mapStateToProps = state => ({
    count: state.count
});

// const connectCounter = connect(mapStateToProps);

// const ReduxCounter = connectCounter(Counter);

// export default ReduxCounter;

export default connect(mapStateToProps)(Counter);