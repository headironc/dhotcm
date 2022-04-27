import Taro from "@tarojs/taro";
import { Image, Text, View } from "@tarojs/components";

import "./index.scss";

import left from "../../static/icons/angle-left-solid.svg";

export default function Navigation({
  title,
  hasBackBtn = false,
  statusBarHeight,
}) {
  const handleClick = () => {
    Taro.navigateBack({
      delta: 1,
    });
  };

  return (
    <View>
      <View style={{ height: `${statusBarHeight}PX` }} />
      <View className="navigation">
        <View className={`icon-box`}>
          {hasBackBtn && (
            <Image
              mode={`heightFix`}
              onClick={handleClick}
              className={`icon`}
              src={left}
            />
          )}
        </View>
        <View className="title-box">
          <Text className="title">{title}</Text>
        </View>
        <View />
      </View>
    </View>
  );
}
