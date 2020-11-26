import React from 'react';
import PostListItem from '../post-list-item';
import "./post-list.css";
import ListGroup from 'react-bootstrap/ListGroup';

const PostList = ({posts}) => {
    
    const elements = posts.map(item => {
        if(typeof item === 'object'&& item.label != false) {
            
            const {id} = item;
            return (
                <li key={id} className="list-group-item">
                    <PostListItem label={item.label} important={item.important} /> 
                    {/* <PostListItem {...item} /> сокращенный синтаксис */}
                </li>
            )
        }
        
    });

    

    return (
        <ListGroup className="app-list">
           {elements}
        </ListGroup>
    )
}

export default PostList;