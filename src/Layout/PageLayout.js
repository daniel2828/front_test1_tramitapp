import React from 'react'

import FakeData from '../Components/fakeData'
import "./PageLayout.css"
import Headroom from "react-headroom";
function PageLayout() {
  
    return (
        <div>
            <Headroom ><h1 className="header">Hi</h1></ Headroom>
            <FakeData></FakeData>
        </div>
    )
}
export default PageLayout;