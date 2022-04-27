const defineAppConfig = {
  entryPagePath: "pages/user-center/index",
  pages: ["pages/index/index", "pages/user-center/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTextStyle: "black",
    navigationStyle: "custom",
  },
  lazyCodeLoading: "requiredComponents",
  tabBar: {
    color: "#000",
    selectedColor: "#10AEFF",
    list: [
      {
        text: "首页",
        pagePath: "pages/index/index",
        iconPath: "static/images/home.png",
        selectedIconPath: "./static/images/home-selected.png",
      },
      {
        text: "个人中心",
        pagePath: "pages/user-center/index",
        iconPath: "static/images/user.png",
        selectedIconPath: "./static/images/user-selected.png",
      },
    ],
  },
};

export default defineAppConfig;
