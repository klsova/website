import React, { useState, useEffect } from 'react';
import './Greeting.css';

function Greetings() {
    const [greeting, setGreeting] = useState(getGreeting());

    function getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) {
            return "Good Morning!";
        } else if (hour < 18) {
            return "Good Afternoon!";
        } else {
            return "Good Evening!";
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setGreeting(getGreeting());
        }, 60000);

            return () => clearInterval(interval);
        }, []);

    return (
        <div className="greetings">
            <h1 className="greetings-text">{greeting}</h1>
        </div>
    );
}

export default Greetings;
