import React from 'react';
import {Button} from 'react-bootstrap';
import "./post-status-filter.css";

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <Button outline variant="info">Все</Button>
            <button className="btn btn-outline-secondary">Понравилось</button>
        </div>
    )
}

export default PostStatusFilter;