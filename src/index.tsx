// code origin from https://codesandbox.io/s/s3s22s?file=/example.tsx
import * as React from "react";
import { render } from "react-dom";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { TabListExample } from "./TabListExample";

const App: React.FunctionComponent = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <TabListExample />
    </FluentProvider>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
