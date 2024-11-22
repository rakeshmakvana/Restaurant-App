import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form, Nav, Tab } from 'react-bootstrap';
import '../styles/profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import api from '../api';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [userData, setUserData] = useState({});
    const [formData, setFormData] = useState({});
    const [passwordData, setPasswordData] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await api.get('/api/auth/user', { headers: { 'x-auth-token': token } });
                setUserData(response.data);
                setFormData({
                    ...response.data,
                    restaurant: response.data.restaurant ? response.data.restaurant.restaurant_name : '',
                });
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            avatar: e.target.files[0],
        }));
    };

    const handlePasswordChange = (e) => {
        setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        try {
            const token = localStorage.getItem("token");
            const data = new FormData();

            Object.keys(formData).forEach((key) => {
                if (key === 'avatar' && formData[key]) {
                    data.append(key, formData[key]);
                } else {
                    data.append(key, formData[key]);
                }
            });

            await api.put('/api/auth/update', data, { headers: { 'x-auth-token': token, 'Content-Type': 'multipart/form-data' } });
            setUserData(formData);
            setIsEditing(false);
            alert("Profile Updated Successfully");
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    const changePassword = async () => {
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            console.log('Passwords do not match');
            return;
        }
        try {
            const token = localStorage.getItem('token');
            const response = await api.put('/api/auth/change-password', passwordData, { headers: { 'x-auth-token': token } });
            window.alert('Password Changed Successfully');
            setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
        } catch (error) {
            console.log('Error changing password');
        }
    };

    const handleSelect = (selectedTab) => {
        setActiveTab(selectedTab);
    };

    return (
        <div className="page-wrapper">
            <div className="text-light profile-sidebar vh-100 pt-4 px-4 px-md-0">
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={3} className="profile-section rounded-3 mb-3"><br></br>
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
                    <Col xs={12} sm={6} md={8} className="profile-background p-4 rounded-3 profile-section" style={{ height: '80%' }}>
                        <Tab.Content>
                            <Tab.Pane eventKey="profile" active={activeTab === 'profile'}>
                                <div className="main-profile-img profile-main-class-img-img">
                                    <img src="https://s3-alpha-sig.figma.com/img/0955/b7cb/6b8d7b581303d40fcc1f30dfc6de9d00?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PMEBYMP5RqT6Y-Fry3wR3to663zyYQVWK9mrIXFNJPa3nRNU6yThdWdt-9gZMwSgO8PqpBqh~~E-i72ibOZLV46WrNANvUNfWwwQChpqRQ1uu9XDSs52M21hvkPynbMHWDCCJkTLsHzjH4Tb38a7ocABAc~mpp4MhGrZQNYZNe6Ag6E4JnuENqX-Fiv1rxFRy5dGn31JNBEq2SLmd~0bEX~lRjZ4JAyF4p~8cjzdVC79671T3KJ921UjrAC3GbJ0kMgq4P0AA~XMUoy9I~gXp4mN~FybAZhr972ul3jTyDhefEEGu7iF~CHOHMxoYD2xXACLnU-1DTCmU4JxF~gKug__" alt="Profile" />
                                </div>
                                {/* Profile Form */}
                                <Form encType="multipart/form-data">
                                    <Row className="mb-3">
                                        <Col xs={12} sm={12} md={12}>
                                            <Form.Group className='mb-3'>
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <div className="d-flex align-items-center">
                                                        <img src={formData.avatar || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfw5Zrm1sT55AxuAxyTs2dbfXJfJvNMw4_Ww&s"} alt="User Avatar" className="rounded-circle me-3 profile-images" />
                                                    </div>
                                                </div>
                                                <Form.Control
                                                    type="file"
                                                    name="avatar"
                                                    onChange={handleFileChange}
                                                    readOnly={!isEditing}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group className='mb-3'>
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="firstname"
                                                    value={formData.firstname || ""}
                                                    onChange={handleChange}
                                                    readOnly={!isEditing}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group className='mb-3'>
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="lastname"
                                                    value={formData.lastname || ""}
                                                    onChange={handleChange}
                                                    readOnly={!isEditing}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group className='mb-3'>
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={formData.email || ""}
                                                    onChange={handleChange}
                                                    readOnly={!isEditing}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group className='mb-3'>
                                                <Form.Label>Phone</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    name="phone"
                                                    value={formData.phone || ""}
                                                    onChange={handleChange}
                                                    readOnly={!isEditing}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group className='mb-3'>
                                                <Form.Label>Restaurant Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="restaurant"
                                                    value={formData.restaurant || ""}
                                                    readOnly={!isEditing}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group className='mb-3'>
                                                <Form.Label>Gender</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="gender"
                                                    value={formData.gender || ""}
                                                    onChange={handleChange}
                                                    readOnly={!isEditing}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group className='mb-3'>
                                                <Form.Label>City</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="city"
                                                    value={formData.city || ""}
                                                    onChange={handleChange}
                                                    readOnly={!isEditing}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group className='mb-3'>
                                                <Form.Label>State</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="state"
                                                    value={formData.state || ""}
                                                    onChange={handleChange}
                                                    readOnly={!isEditing}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Form.Group className='mb-3'>
                                                <Form.Label>Country</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="country"
                                                    value={formData.country || ""}
                                                    onChange={handleChange}
                                                    readOnly={!isEditing}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={12}>
                                            <Form.Group>
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="address"
                                                    value={formData.address || ""}
                                                    onChange={handleChange}
                                                    readOnly={!isEditing}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button
                                        variant={isEditing ? "success" : "warning"}
                                        onClick={() => {
                                            if (isEditing) {
                                                handleUpdate();
                                            } else {
                                                setIsEditing(true);
                                            }
                                        }}
                                    >
                                        {isEditing ? "Save Changes" : "Edit Profile"}
                                    </Button>
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
                                                <Form.Control
                                                    type="password"
                                                    name="currentPassword"
                                                    value={passwordData.currentPassword}
                                                    onChange={handlePasswordChange}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>New Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="newPassword"
                                                    value={passwordData.newPassword}
                                                    onChange={handlePasswordChange}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Confirm New Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="confirmPassword"
                                                    value={passwordData.confirmPassword}
                                                    onChange={handlePasswordChange}
                                                />
                                            </Form.Group>
                                            <Button variant="warning w-100" onClick={changePassword}>
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
