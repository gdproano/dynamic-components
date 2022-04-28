import React from "react";
import { Text } from 'react-native'
import Bar from "./componentA";
import Foo from "./componentB";

const Components = {
  foo: Foo,
  bar: Bar
};

export default block => {
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block._uid,
      block: block
    });
  }
  return React.createElement(
    () => <Text>The component {block.component} has not been created yet.</Text>,
    { key: block._uid }
  );
};
