import React, { Component } from "react";

export default class Profile extends Component {
    render() {
        return(
            <section onClick={this.props.signOut}>
                <p>Profile</p>
                <button>SIGN OUT!!!</button>
            </section>
        );
    }
}