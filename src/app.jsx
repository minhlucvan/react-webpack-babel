import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Teal, Purple } from './style/theme';
import {Wrapper, Welcome, Heading, Code, Button} from './styles';

export default class App extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {theme: Teal, themeNum: 0};
  
    this.onToggleStyle = this.onToggleStyle.bind(this);
  }

  onToggleStyle(){
    let themeNum = 1 - this.state.themeNum;
    let theme = App.themes[themeNum];

    this.setState({theme, themeNum}); 
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Wrapper>
          <Heading>
            It's Works
            <Button onClick={this.onToggleStyle}>
              toggle style
            </Button>
          </Heading>
          <Welcome>
            please remove those files <Code>app.jsx</Code>, <Code>styles.jsx</Code> creating your owm and happy coding...
          </Welcome>
        </Wrapper>
       </ThemeProvider>
    )
  }
}

App.themes = [Teal, Purple];