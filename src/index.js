import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () =>{
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentAdd="Hello" profileImage = {faker.image.avatar()}/>
            <CommentDetail author="Alex" timeAgo="Today at 5PM" commentAdd ="Hi!" profileImage = {faker.image.avatar()}/>
            <CommentDetail author="Jane" timeAge="Yesterday at 4PM" commentAdd = "Hey There!" profileImage = {faker.image.avatar()} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));