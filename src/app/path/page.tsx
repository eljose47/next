import * as React from "react";

const Test: React.FunctionComponent<TestProps> = (props) => {
  return <div>Test Path</div>;
};

Test.displayName = "Test";

export default Test;

export interface TestProps {}
