import React from 'react'
import { Form,Row,Col,Control,Button,Group,Label } from 'react-bootstrap';


const styles = {
    padd:{
        padding: "10px"
    },
    h1: {
        fontSize: "40px",
        textAlign: "left",
        margin:"20px 5px",
        fontWeight: "100"
    },
    margin: {
        marginTop: "100px"
    },
    align: {
        
        textAlign: "left",
        
    },
    btn: {
        position: "absolute",
        bottom: "55px",
        width:"95%"
    }

};


 function Signup() {
    return (
        <div style={styles.padd}>
        <div style={styles.margin}>
            <h1 style={styles.h1}>SignUp</h1>
            <Form>
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    
                    <Form.Control size="lg" type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                   
                    <Form.Control size="lg"  type="text" placeholder="Last Name" />
                </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridPassword">
                   
                    <Form.Control size="lg"  type="email" placeholder="Email Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                
                <Form.Control size="lg"  type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                {/* <Form.Label>State</Form.Label> */}
                <Form.Control size="lg"  type="text" placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check style={styles.align} type="checkbox" label="By clicking Sign Up you agree to our terms and conditions as well as our privacy policy" />
                </Form.Group>

                <div className="d-grid gap-2" style={styles.btn}>
                    <Button variant="primary" size="lg">
                        SignUp
                    </Button>
                </div>  
                </Form>
        </div>
        </div>
    )
};

export default Signup
