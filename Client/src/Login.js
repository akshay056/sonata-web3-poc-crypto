import React, { useState } from "react";
import './App.css';
import { Form, Button } from 'react-bootstrap';
import { Navbar, Container, Nav } from 'react-bootstrap';

async function loginUser(credentials) {
  return fetch('https://172.29.91.71/api/home/login', {
    method: 'POST',
    headers: {
      //'Access-Control-Allow-Origin':'*' ,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
  // .then(json => console.log(json))
}

const Login = () => {
  const [email, setName] = useState("");
  const [password, setPassword] = useState("");
  //const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password
    });
    localStorage.setItem("user-info", JSON.stringify(response))
    if (response && response['status'] == 200) {
      if (response['isAdmin'] == true) {
        // localStorage.setItem('code', response['code']);
        // localStorage.setItem('email', JSON.stringify(response.data.Email));
        window.location.href = "/dashboard";
      }
      else {
        window.location.href = "/user";
      }
      //navigate("/dashboard");
    }
    else {
      alert("Incorrect Email/Password");

    }
  }
  /*
   const handleSubmit = (e)=>{
       e.preventDefault();
       console.log(email);
   }*/
  return (
    <><><Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYaeR-i3XTeiKMy5eNtDAt29NfmgC_bRRtUBH2XHi&s'></img></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </><>
        <div className="container mt-3">
          <section className='d-flex justify-content-between'>
            <div className="left_data mt-3 p-3" style={{ width: "80%" }}>
              <h2>About NFT Reality</h2><br />
              <p class='fw-bold'>A perfect way to say "kudos"</p>
              <span>Reward and incentivize employee with a digital kudos system using blockchain based NFTs . Employees earn unique ,digital tokens for outstanding work,which can be redeemed for rewards or traded in the open market.</span>
              <p><a href="#">Read More.</a></p>
              {/* <p class='fw-bold'>A perfect way to say "kudos"</p>
              <p>Reward and incentivize employee with a digital kudos system using blockchain based NFTs . Employees earn unique ,digital tokens for outstanding work,which can be redeemed for rewards or traded in the open market.</p>
              <p><a href="#">Read More.</a></p> */}
            </div>

            <div className="right_data mt-3 p-3" style={{ width: "100%" }}>
              <h2 className='text-left col-lg-8'>Sign In</h2>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3 col-lg-8" controlId="formBasicName">
                  <Form.Label>User Email</Form.Label>
                  <Form.Control required value={email} onChange={(e) => setName(e.target.value)} type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control required value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <div className="d-flex justify-content-between mb-3 col-lg-8">
                    <Form.Check type="checkbox" label="Remember me" />
                    <Form.Check><a href="#">Forgot password</a></Form.Check></div>
                </Form.Group>
                <Button disabled={!email} type="submit" onclick={handleSubmit} variant="outline-dark">
                  Sign in

                </Button>

              </Form>
            </div>
          </section>
        </div>
      </></>
  )
}
export default Login;