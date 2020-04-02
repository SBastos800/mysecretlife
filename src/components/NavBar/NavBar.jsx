import React, { Component } from "react";
import styles from './NavBar.module.scss';
import Nav from 'react-bootstrap/Nav';
import { Link } from '@reach/router';

export default class NavBar extends Component {
    render() {
        return (
            <section>
                <Nav className={styles.nav} defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link ><Link to="/">Public</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link ><Link to="private/myprofile">Private</Link></Nav.Link>
                    </Nav.Item>
                </Nav>
            </section>
        )
    }
} 