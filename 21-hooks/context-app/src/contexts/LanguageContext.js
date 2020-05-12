import React from "react";

export const LanguageContext = React.createContext();

export class LanguageProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: "russian" };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(event) {
    this.setState({ language: event.target.value });
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
