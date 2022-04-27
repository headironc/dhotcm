import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";

import Navigation from "../navigation";

import "./index.scss";

export default function Layout({ title, hasBackBtn, children }) {
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  useEffect(() => {
    const { statusBarHeight: height } = Taro.getSystemInfoSync();
    setStatusBarHeight(height);
  }, [statusBarHeight]);

  return (
    <View className="layout">
      <Navigation
        title={title}
        hasBackBtn={hasBackBtn}
        statusBarHeight={statusBarHeight}
      />
      <View
        style={{
          height: `calc(100vh - ${statusBarHeight}Px - 40Px)`,
          backgroundColor: "#f1f2f2",
          padding: "18px",
        }}
      >
        {children}
      </View>
    </View>
  );
}
