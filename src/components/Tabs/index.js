import React from 'react';

const Tabs = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export { Tabs };

// re-export subcomponents with aliases
export { Navigation as TabsNavigation } from './subcomponents/Navigation';
export { Content as TabsContent } from './subcomponents/Content';
export { Pane as TabPane } from './subcomponents/Pane';
