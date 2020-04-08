import React, { Component } from "react";
import styles from './Private.module.scss';
import firebase, { firestore } from "../../firebase";

export default class Private extends Component {
    render() {
        return(
            <div>
                <h1>Name: {this.props.user.displayName}</h1>
                <image src={this.props.user.photoURL}></image>
                <p>Email : {this.props.user.email}</p>
                <button onClick={this.props.signOut}>Sign Out</button>
            </div>
        );
    }
}
