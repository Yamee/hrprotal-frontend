import React, { Component } from 'react';
import Layout from '../../components/Layout';
const AboutContent = (props) => {
  return <div className="row">
      <div className="col">
        <h1>HR PORTAL</h1>
        <p>
      First hand support portal for employee.
</p>
        <p>
         
        </p>
      </div>
    </div>
}
class About extends Component {
  render(){
    return <Layout>
        <AboutContent />
      </Layout>
  }
}
export default About;