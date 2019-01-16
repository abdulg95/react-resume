import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

//build tabs using react-mdl's tab components and store index of current active tab
class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab:0}
    }

    toggleCategories() {
        //web development projects
        if(this.state.activeTab === 0){
          return(
            <div className="projects-grid">
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto 20px auto auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Toronto waste lookup</CardTitle>
                <CardText>
                web app to search for waste items using the Toronto Waste Wizard database, and save frequently used ones.
                </CardText>
                <CardActions border>
                  <Button colored><a href="https://github.com/abdulg95/shopify-web-engineer-challenge" rel="noopener noreferrer" target="_blank" style={{color:"inherit"}}> Github </a></Button>
                  <Button colored><a href="https://abdulg95.github.io/shopify-web-engineer-challenge" rel="noopener noreferrer" target="_blank" style={{color:"inherit"}}> Live demo </a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto auto auto 0'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Burger Builder</CardTitle>
                <CardText>
                  Fully responsive burger builder with all components built from scratch in react js and orders posted to backend at firebase
                </CardText>
                <CardActions border>
                  <Button colored><a href="https://github.com/abdulg95/BurgerBuilder" rel="noopener noreferrer" target="_blank" style={{color:"inherit"}}> Github </a></Button>
                  <Button>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              
              
            </div>
          )
        } else if(this.state.activeTab === 1) {
          return (
            <div><h1>Will upload projects soon!</h1></div>
          )
        } 
      }
    

    render(){
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>Web Dev</Tab>
                <Tab>Game Dev</Tab>                
                </Tabs> 

                <Grid>
                    <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>             
          </div>
        );
    }
}

export default Projects; 