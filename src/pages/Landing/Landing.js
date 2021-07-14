import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { validate as validateEmail } from 'email-validator';
import "./Landing.css";

export default function Landing() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('emailToSendPromotions');
    console.log({ storedEmail });
    setEmail(storedEmail || '');
    setSubscribed(storedEmail);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('emailToSendPromotions', email);
    setSubscribed(true);
  }

  return (
    <div className="Landing">
      <div className="lander">
        <h1 className="title">Black Friday</h1>
        <p className="subtitle">Enjoy our promotions! All our products with 15% off</p>
      </div>
      {
        subscribed ?
        <div class='container'>
          <h2 className="subscribed-message">Thank's for Subscribe with email <b>{email}</b></h2>
        </div>
        :
        <div className='SubscribeBox'>
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label className="subscribe-message">You Would like to receive our promotions? Write your email below:</Form.Label>
              <Form.Control
                className="input-email"
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button block className="submitButton" size="lg" type="submit" disabled={!validateEmail(email)}>
              Subscribe
            </Button>
          </Form>
        </div>
      }
    </div>
  );
}
