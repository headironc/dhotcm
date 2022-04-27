import { Image, Text, View } from "@tarojs/components";

import "./index.scss";

import right from "../../static/icons/angle-right-solid.svg";

export default function Cell({ icon, text, clickable = false }) {
  return (
    <View className="cell" hoverClass={clickable ? "cell-hover" : "none"}>
      <View className="cell-left">
        <Image src={icon} className="cell-icon" />
        <Text className="cell-text">{text}</Text>
      </View>
      <Image src={right} className="cell-right" />
    </View>
  );
}
