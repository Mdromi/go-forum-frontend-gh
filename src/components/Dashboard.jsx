import React from 'react';
import Posts from './posts/Posts';
import Navigation from './Navigation'


  const Dashboard = () => {
    return (
      <div>
        <Navigation />
        <Posts /> 
      </div>
    )
  }

  export default Dashboard;