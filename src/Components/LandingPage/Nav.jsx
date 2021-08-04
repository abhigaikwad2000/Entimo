
import React from 'react';
import logo from '../../assets/ENTIMO30.png';
import styled from 'styled-components';
import {BrowserRouter as Router,Link,} from "react-router-dom";

const Nave = () => {
    return (
       <Router>
        <Nav>
           <Logo></Logo> 
         <Link to="/login"  ><Login>Log In</Login></Link>
         <Link to="/signup"  ><SignUp>Join Now</SignUp></Link>

            
        </Nav>
        </Router> 
    )
}

export default Nave
 
const Nav= styled.nav
`
position: absolute;

height: 157px;
width: 1440px;
background: rgba(0,0,0,0);
margin: 0 auto;


`;


const Logo= styled.div
`
position: absolute;
width: 146.01px;
height: 145px;
left: 120px;
top: 8px;
text-align: center;
background-image: url(${logo});
background-size: cover;
`;

const Login= styled.div
`
position: absolute;
width: 82px;
height: 38px;
left: 900px;
top: 61px;

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 37px;
/* identical to box height */

text-align: center;

color: #000000;

`
const SignUp= styled.div
`
position: absolute;
width: 128px;
height: 38px;
left: 1107px;
top: 61px;

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 37px;
/* identical to box height */

text-align: center;

color: #000000;

`
