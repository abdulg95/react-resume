import React, { Component } from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className = "header-color" title="My portfolio" scroll>
              <Navigation>
                  <Link to="/react-resume">Home</Link>
                  <Link to="/resume">Resume</Link>                  
                  <Link to="/projects">Projects</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <Link to="/react-resume">Home</Link>
                  <Link to="/resume">Resume</Link>                  
                  <Link to="/projects">Projects</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;
