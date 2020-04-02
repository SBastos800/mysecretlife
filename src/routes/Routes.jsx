import React, { Component } from 'react';
import { Router, globalHistory } from '@reach/router';
import Public from '../components/Public';
import Private from '../components/Private';
import Profile from "../components/Profile/Profile";
import PrivateRoutes from "../routes/PrivateRoutes";
import firebase, { providers } from "../firebase";

export default class Routes extends Component {
    
    state = {
        user: null
    }

    signIn = () => {
        firebase
            .auth()
            .signInWithPopup(providers.google)
            .then(result => {
                console.log(result.user);
                this.setState({user: result.user});
            })
            .catch(error => {
                console.log(error);
            })
    }

    signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.setState({user: null});
                globalHistory.navigate("/");
            })
    }

    componentDidMount() {
        this.signIn();
    }

    render() {
        return (
            <Router>
                <Public path="/" />
                <PrivateRoutes path="private" user={this.state.user}>
                    <Private path="myprofile" user={this.state.user} signOut={this.signOut}/>
                </PrivateRoutes>
            </Router>
        )
    }
}