import React from 'react';
import './Main.css';

function Main() {
  return (
    <main className="main">
        <div className="text-container">
          <p>Hello 👋 I'm</p>
          <section className='animation'>
            <div className='first'><div>Kalle</div></div>
            <div className='second'><div>Student</div></div>
            <div className='third'><div>Techie</div></div>
          </section>
        </div>
    </main>
  );
}

export default Main;