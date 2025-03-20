import React from 'react';
import "./app.scss"
import Accordion from './components/block/accordion-2';
import Dropdown from './components/elements/dropdown-2';

function App() {
  return (
    <div className="app">
      <Accordion />
      {/* <div className='layout'>
        <div className='navbar'></div>
        <div className='sidebar'></div>
        <div className='main'></div>
        <div className='settings'></div>
        <div className='footer'></div>
      </div> */}
      {/* <div className='flex'>
        <div className='card'>1</div>
        <div className='card'>2</div>
        <div className='card'>3</div>
        <div className='card'>4</div>
        <div className='card'>5</div>
        <div className='card'>6</div>
        <div className='card'>7</div>
        <div className='card'>8</div>
        <div className='card'>9</div>
        <div className='card'>10</div>
      </div> */}
      {/* <div className='grid'>
        <div className='card'>1</div>
        <div className='card'>2</div>
        <div className='card'>3</div>
        <div className='card'>4</div>
        <div className='card'>5</div>
        <div className='card'>6</div>
        <div className='card'>7</div>
        <div className='card'>8</div>
        <div className='card'>9</div>
        <div className='card'>10</div>
      </div> */}
    </div>
  );
}

export default App;