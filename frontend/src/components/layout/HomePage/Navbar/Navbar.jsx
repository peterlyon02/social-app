import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './Navbar.module.css'
import '../../../../assets/styles/boxShadow.css'
import Input from '../../../common/input'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
    return(
        <Row  className={'fancy-shadow w-100 d-flex align-items-center p-0 m-0'}>
            <Col lg={3} md={3} className={`${styles['container-navbar']}  `}>
            <   h2 className={`${styles['text-nav']}`}>Vibragram</h2>
            </Col>
            <Col md={1} className=""></Col>
            <Col lg={6} md={6}  className=" text-start p-0">
                <Input 
                
                iconbefore={faSearch}
                placeholder='Search friends'
                classgroup={`${styles['container-input']}`}
                />
            </Col>
        </Row>
    )
}

export default Navbar












/*<*/