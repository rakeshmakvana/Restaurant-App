import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Nav, Tab } from 'react-bootstrap';
import '../styles/profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const handleSelect = (selectedTab) => {
        setActiveTab(selectedTab);
    };

    return (
        <div className="page-wrapper w-100">
            <div className="text-light profile-sidebar">
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={3} className="profile-section rounded-3"><br></br>
                        <h4>Menu</h4>
                        <Nav variant="pills" className="flex-column" activeKey={activeTab} onSelect={handleSelect}>
                            <Nav.Item>
                                <Nav.Link eventKey="profile" className="custom-tab">
                                    <FontAwesomeIcon icon={faUser} className="me-3" /> Profile
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="change-password" className="custom-tab">
                                    <FontAwesomeIcon icon={faKey} className="me-3" /> Change Password
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="terms" className="custom-tab">
                                    <FontAwesomeIcon icon={faFileAlt} className="me-3" /> Terms & Conditions
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>


                    </Col>
                    <Col xs={12} sm={6} md={8} className="profile-background p-4 rounded-3 profile-section vh-100">
                        <Tab.Content>
                            <Tab.Pane eventKey="profile" active={activeTab === 'profile'}>
                                {/* Profile Details Section */}
                                <div className="main-profile-img profile-main-class-img-img">
                                    <img src="https://s3-alpha-sig.figma.com/img/0955/b7cb/6b8d7b581303d40fcc1f30dfc6de9d00?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PMEBYMP5RqT6Y-Fry3wR3to663zyYQVWK9mrIXFNJPa3nRNU6yThdWdt-9gZMwSgO8PqpBqh~~E-i72ibOZLV46WrNANvUNfWwwQChpqRQ1uu9XDSs52M21hvkPynbMHWDCCJkTLsHzjH4Tb38a7ocABAc~mpp4MhGrZQNYZNe6Ag6E4JnuENqX-Fiv1rxFRy5dGn31JNBEq2SLmd~0bEX~lRjZ4JAyF4p~8cjzdVC79671T3KJ921UjrAC3GbJ0kMgq4P0AA~XMUoy9I~gXp4mN~FybAZhr972ul3jTyDhefEEGu7iF~CHOHMxoYD2xXACLnU-1DTCmU4JxF~gKug__" alt="Profile" />
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <div className="d-flex align-items-center">
                                        <img src="https://s3-alpha-sig.figma.com/img/0f9b/81fa/21460d39cd98ccca0d3fa906d5718aa3?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BUccAMNx71ez-Vg4~KgrcIj1juF9bWRvK4j8LwnvOl7QVIjzYGX0YRHLuc1wpZOvVRC7TtV6zRfxt27IMhnQTqUB7CxbVnWh5uBny1CBYpWPlwgPszFPmW9vvAr~b~nKv9w9Z7KaHw6sPpp2jeKPOHti3L2zCSD6mQoqcL14iRxOtjkrkxBwxLPn5rYKGVtKognvFi~1KmbaaVXCzZapShqUXoabIP~TIwOE4jctLyMDM1Huh9go54LSVQLDSPzP9MOWRVH80QTGEctcL2QBY1AWrB7fbbQLpnoQwXvn~Hi4fYHpDtL9Bow-825uR6kdTdeAzZgLXxqykORURlEKDA__" alt="User Avatar" className="rounded-circle me-3 profile-images" />
                                    </div>
                                    <Button variant="warning profile-edit-icon">
                                        <i className="fas fa-edit"></i> Edit Profile
                                    </Button>
                                </div>
                                {/* Profile Form */}
                                <Form>
                                    <Row className="mb-3">
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group>
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type="text" value="Jeremy" readOnly />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group>
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" value="Wilson" readOnly />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group>
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control type="email" value="jeremy.wilson@example.com" readOnly />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group>
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control type="text" value="+1 (123) 456-7890" readOnly />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group>
                                                <Form.Label>Restaurant Name</Form.Label>
                                                <Form.Control type="text" value="Statesman Restaurants" readOnly />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group>
                                                <Form.Label>Gender</Form.Label>
                                                <Form.Control type="text" value="Male" readOnly />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group>
                                                <Form.Label>City</Form.Label>
                                                <Form.Control type="text" value="Surat" readOnly />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group>
                                                <Form.Label>State</Form.Label>
                                                <Form.Control type="text" value="Gujarat" readOnly />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group>
                                                <Form.Label>Country</Form.Label>
                                                <Form.Control type="text" value="India" readOnly />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={12}>
                                            <Form.Group>
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control type="text" value="A-151 swastik plaza punagam,varachha jamnagar gujrat." readOnly />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>
                            </Tab.Pane>

                            <Tab.Pane eventKey="change-password" active={activeTab === 'change-password'}>
                                {/* Change Password Section */}
                                <div className="main-profile-img profile-main-class-img-img">
                                    <img src="https://s3-alpha-sig.figma.com/img/0955/b7cb/6b8d7b581303d40fcc1f30dfc6de9d00?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PMEBYMP5RqT6Y-Fry3wR3to663zyYQVWK9mrIXFNJPa3nRNU6yThdWdt-9gZMwSgO8PqpBqh~~E-i72ibOZLV46WrNANvUNfWwwQChpqRQ1uu9XDSs52M21hvkPynbMHWDCCJkTLsHzjH4Tb38a7ocABAc~mpp4MhGrZQNYZNe6Ag6E4JnuENqX-Fiv1rxFRy5dGn31JNBEq2SLmd~0bEX~lRjZ4JAyF4p~8cjzdVC79671T3KJ921UjrAC3GbJ0kMgq4P0AA~XMUoy9I~gXp4mN~FybAZhr972ul3jTyDhefEEGu7iF~CHOHMxoYD2xXACLnU-1DTCmU4JxF~gKug__" alt="Profile" />
                                    <div className="profile-change-password">
                                        <h4>Change Password</h4>
                                    </div><br></br>
                                </div><br></br>
                                <Form>
                                    <Row className="mb-3">
                                        <Col xs={12} sm={6} md={8}>
                                            <Form.Group className="mb-3 ">
                                                <Form.Label>Current Password</Form.Label>
                                                <Form.Control type="password" placeholder="Enter current password" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>New Password</Form.Label>
                                                <Form.Control type="password" placeholder="Enter new password" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Confirm New Password</Form.Label>
                                                <Form.Control type="password" placeholder="Confirm new password" />
                                            </Form.Group>
                                            <Button variant="warning w-100" type="submit">
                                                Change Password
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Tab.Pane>

                            <Tab.Pane eventKey="terms" active={activeTab === 'terms'}>
                                {/* Terms & Conditions content */}
                                <div className="main-profile-img profile-main-class-img-img">
                                    <img src="https://s3-alpha-sig.figma.com/img/0955/b7cb/6b8d7b581303d40fcc1f30dfc6de9d00?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PMEBYMP5RqT6Y-Fry3wR3to663zyYQVWK9mrIXFNJPa3nRNU6yThdWdt-9gZMwSgO8PqpBqh~~E-i72ibOZLV46WrNANvUNfWwwQChpqRQ1uu9XDSs52M21hvkPynbMHWDCCJkTLsHzjH4Tb38a7ocABAc~mpp4MhGrZQNYZNe6Ag6E4JnuENqX-Fiv1rxFRy5dGn31JNBEq2SLmd~0bEX~lRjZ4JAyF4p~8cjzdVC79671T3KJ921UjrAC3GbJ0kMgq4P0AA~XMUoy9I~gXp4mN~FybAZhr972ul3jTyDhefEEGu7iF~CHOHMxoYD2xXACLnU-1DTCmU4JxF~gKug__" alt="Profile" />
                                    <div className="profile-change-password">
                                        <h4>Terms & Conditions</h4>
                                    </div><br></br>
                                </div><br></br>
                                <div className="terms-and-conditions profile-terms-conditions">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet interdum sapien. Fusce ac augue erat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.<br></br>
                                        Dolor sit amet, consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet interdum sapien. Fusce ac augue erat. Suspendisse sodales est et laoreet fringilla.<br></br>
                                        Consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi.
                                    </p>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </div>
        </div >
    );
};

export default Profile;
