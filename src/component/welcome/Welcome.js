import React, {useRef, useEffect} from 'react';
import Below from '../../assets/1@1X.png';
// import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';


const styles = {
    
    home: {
        position: "fixed",
        top: "25%",
        left: "35%",
        transform: "translate('-50%', '-50%')"
    },
    below: {
        position: "absolute",
        bottom: "-5px"
    },
    btn: {
        position: "absolute",
        bottom: "55px",
        left: "25%",
        display: "none"
    },
    mar20: {
        marginRight: "20px"
    }
};



function Welcome() {
    const ref = useRef(null);


    useEffect(() => {
        setTimeout(() => {
          ref.current.style.display = "block";
        }, 3000); //miliseconds
      }, []);

    return (
        <div >
            <div style={styles.home}>
            <img src="app_logo.png" alt="" height="40px" width="133px"/>
            </div>  
            <div style={styles.below}>
            <img src={Below} alt="" height="100%" width="100%"/>
            </div>
            <div style={styles.btn} ref={ref}>
            <Button variant="primary" style={styles.mar20}>Sign Up</Button>

            <Button variant="outline-light">LogIn</Button>

            </div>
        </div>
    )
};

export default Welcome;
