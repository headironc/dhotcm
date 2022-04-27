import { Image, Text, View } from "@tarojs/components";
import { useSelector } from "react-redux";

import Layout from "../../components/layout";

import "./index.scss";

import avatar from "../../static/images/avatar.png";
import user from "../../static/icons/user-group-solid.svg";
import patients from "../../static/icons/hospital-user-solid.svg";
import prescription from "../../static/icons/file-prescription-solid.svg";
import Cell from "../../components/cell";

const lists = [
  { icon: user, text: "账户", clickable: true },
  { icon: patients, text: "诊疗人", clickable: true },
  { icon: prescription, text: "处方", clickable: true },
];

export default function UserCenter() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  return (
    <Layout title="个人中心">
      <View className="head-card">
        <View className="avatar-box">
          <Image src={avatar} className="avatar" />
        </View>
        <View className="user-info">
          <Text className="username">
            {auth?.user?.username ? auth.user.username : "微信用户"}
          </Text>
          <Text className="phone-number">
            手机号：
            {auth?.user?.phoneNumber ? auth.user.phoneNumber : "信息未完善"}
          </Text>
        </View>
      </View>
      <View className="user-center-lists">
        {lists.map(({ icon, text, clickable }, index) => (
          <Cell key={index} icon={icon} text={text} clickable={clickable} />
        ))}
      </View>
    </Layout>
  );
}
