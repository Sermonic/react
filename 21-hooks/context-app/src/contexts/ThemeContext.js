import React from "react";

export const ThemeContext = React.createContext();

export class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: true };
  }
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
