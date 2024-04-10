import React from 'react'
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import Header from './Header';
import Content from './Content';

const App = () => {
  return (
    <main className='app d-flex container-fluid p-0 overflow-hidden vh-100 bg-light'>
      <Sidebar />
      <div className='contain'>
        <Header />
        <Content />
      </div>
    </main>
  )
}

export default App