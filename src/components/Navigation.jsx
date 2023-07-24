const { useState } = require("react");

import { useSelector, useDispatch } from 'react-redux';
import {NavLink, Link} from 'rect-router-dom'

import {SignOut} from '../store/modules/auth/actions/authActions'
import Default from '../assets/default.png'

import './Navigation.css'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const currentState = useSelector((state) => state)

    const {isAuthenticated, currentUser} = currentState.Auth

    const dispatch = useDispatch()
    const logoutUser = () => dispatch(SignOut())


    let imagePreview = null
    if(currentUser && currentUser.avatar_path) {
        imagePreview = (<img className="img_style_nav" src={currentUser.avatar_path} alt="profile pic" />)
    } else {
        imagePreview = (<img className="img_style_nav" src={Default} alt="profile pic" />)
    }

    const logout = (e) => {
        e.prventDefault()
        logoutUser()
    }

    const userProfile = isAuthenticated ? `/profile/${currentState.Auth.currentUser.id}` : ""


    const SignedInLinks = (
        <>
        <NavItem className='mt-2' style={{marginRight: "15px"}}>
            <NavLink to="/createpost">
                Create Post
            </NavLink>
        </NavItem>
        <NavItem className='mt-2' style={{marginRight: "15px"}}>
            <NavLink to="/authposts">
                My Posts
            </NavLink>
        </NavItem>
        <UncontrolledDropdown>
            <DropdownToggle nav inNavbar>
                {imagePreview}
            </DropdownToggle>
            <DropdownMenu right>
            <DropdownItem>
                <NavItem>
                    <NavLink to={userProfile}>
                        Profile
                    </NavLink>
                </NavItem>
            </DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>
                <a onClick={logout}>Logout</a>
            </DropdownItem>
        </DropdownMenu>
        </UncontrolledDropdown>
        </>
    )

    const SignedOutLinks = (
        <>
        <NavItem style={{marginRight: "15px"}}>
            <Link to="/login">Login</Link>
        </NavItem>
        <NavItem>
            <Link to="/signup">Signup</Link>
        </NavItem>
        </>
    )

    return (
        <div className="mb-3">
            <Navbar color="right" light expand="md">
                <NavbarBrand className='mx-auto' href='/'>Seamflow</NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        {isAuthenticated ? SignedInLinks : SignedOutLinks}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation