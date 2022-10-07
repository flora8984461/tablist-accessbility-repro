// code origin from https://codesandbox.io/s/s3s22s?file=/example.tsx
import {
  makeStyles,
  shorthands,
  Tab,
  TabList,
  TabListProps,
} from "@fluentui/react-components";
import * as React from "react";

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    ...shorthands.padding("50px", "20px"),
    rowGap: "20px",
  },
});

export const TabListExample = (props: Partial<TabListProps>) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <TabList {...props}>
        <Tab value="tab1">First Tab</Tab>
        <Tab value="tab2">Second Tab</Tab>
        <Tab value="tab3">Third Tab</Tab>
        <Tab value="tab4">Fourth Tab</Tab>
      </TabList>
    </div>
  );
};
