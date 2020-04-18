import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'


const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentAdd="Hello" profileImage = {faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Alex" timeAgo="Today at 5PM" commentAdd ="Hi!" profileImage = {faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Jane" timeAge="Yesterday at 4PM" commentAdd = "Hey There!" profileImage = {faker.image.avatar()} />
            </ApprovalCard>
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));