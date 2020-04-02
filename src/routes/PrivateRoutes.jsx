import React, { Component } from "react";
import { globalHistory } from "@reach/router";
import Private from "../components/Private";

export default class PrivateRoutes extends Component {
    render() {
        if(!this.props.user) {
            console.log("no user");
            return null;
        } else {
            console.log("user");
            return (this.props.children);
        }
    }
}