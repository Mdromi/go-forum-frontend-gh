import React from 'react';
import PropTypes from 'prop-types';

const Message = ({msg}) => {
    return (
        <div className="alert lert-info alert-dismissible fade show" role='alert'>
            {msg}
            <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            >
            </button>
        </div>
    )
}

Message.PropTypes = {
    msg: PropTypes.string.isRequired
}
export default Message;