import { combineReducers } from "redux";

import adminReducer from "./admin/reducer";
import bannerReducer from "./banner/reducer";
import coinPlanReducer from "./coinPlan/reducer";
import vipPlanReducer from "./vipPlan/reducer";
import giftCategoryReducer from "./giftCategory/reducer";
import spinnerReducer from "./spinner/reducer";
import giftReducer from "./gift/reducer";
import songReducer from "./song/reducer";
import hashtagReducer from "./hashtag/reducer";
import levelReducer from "./level/reducer";
import userReducer from "./user/reducer";
import postReducer from "./post/reducer";
import videoReducer from "./video/reducer";
import followerReducer from "./follower/reducer";
import settingReducer from "./setting/reducer";
import advertisementReducer from "./advertisement/reducer";
import complainReducer from "./complain/reducer";
import redeemReducer from "./redeem/reducer";
import dashboardReducer from "./dashboard/reducer";
import reportedUserReducer from "./reportedUser/reducer";
import stickerReducer from "./sticker/reducer";

export default combineReducers({
  dashboard: dashboardReducer,
  setting: settingReducer,
  followersFollowing: followerReducer,
  video: videoReducer,
  post: postReducer,
  user: userReducer,
  level: levelReducer,
  hashtag: hashtagReducer,
  song: songReducer,
  gift: giftReducer,
  spinner: spinnerReducer,
  giftCategory: giftCategoryReducer,
  vipPlan: vipPlanReducer,
  coinPlan: coinPlanReducer,
  banner: bannerReducer,
  admin: adminReducer,
  advertisement: advertisementReducer,
  complain: complainReducer,
  redeem: redeemReducer,
  report: reportedUserReducer,
  sticker: stickerReducer,
});
