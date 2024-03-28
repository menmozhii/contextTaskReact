import React from 'react'
import Product from './components/Product'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple} from '@fortawesome/free-brands-svg-icons';
import Context from './Utils/Context';
import { UserContext } from './Utils/Context';
import { useContext } from 'react';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

function App() {

  return <>
  <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
          <FontAwesomeIcon style={{fontSize:"38px"}} icon={faMobile} />{' '}
            <span style={{fontFamily:"monospace" , color:"blue" , fontWeight:"bold"}}>Mobile Store</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Context><Product /></Context>
  <Context />
   
  </>
}

export default App