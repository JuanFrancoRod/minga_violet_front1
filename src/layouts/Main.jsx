import React, { Children } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mobile from '../components/Mobile';

export default function Main(props) {
  return (
    <>
      <div className="min-h-screen ">
        <Navbar />
        {/* nav */}
        {props.children}
        {/*carrousel*/}
              {/*main*/}
        <Footer />
        {/*footer*/}
      </div>
    </>
  );
}
