import React, { Component } from "react";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";

import "./index.less";

type PageStateProps = {
  // store: {
  //   counterStore: {
  //     counter: number,
  //     increment: Function,
  //     decrement: Function,
  //     incrementAsync: Function
  //   }
  // }
};

interface Index {
  // props: PageStateProps;
}

@inject("store")
@observer
class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <View className="year">
          <Text>二零二零年</Text>
          <Text>撰</Text>
        </View>
        <View className="month">
          <Text>一月</Text>
          <Text>二月</Text>
        </View>
        <Text>设</Text>
      </View>
    );
  }
}

export default Index;
