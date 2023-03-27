import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';
import Login from "../src/components/Login/Login";
// This component is the application entry point

class App extends Page {
  render() {
    return (
      <div>
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
