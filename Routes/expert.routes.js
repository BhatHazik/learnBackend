const { protect, restrictTo } = require("../Controllers/authController");
const { getRemarks } = require("../Controllers/coursesController");
const {
  getWalletDetails,
  expertDashboard,
  expertGraphs,
  getWithdrawalHistory,
  createReviewRequest,
  getProfile,
  addPastCompetition,
  getPastCompetitions,
  addUpcomingCompetition,
  getUpcomingCompetitions,
} = require("../Controllers/expertController");

const expertRouter = require("express").Router();

expertRouter.route("/profile/:id").get(getProfile);
expertRouter.use(protect, restrictTo(["expert"]));
expertRouter.route("/expertWallet").get(getWalletDetails);
expertRouter.route("/expertDashboard").get(expertDashboard);
expertRouter.route("/expertGraphs").get(expertGraphs);
expertRouter.route("/withdrawalHistory").get(getWithdrawalHistory);
expertRouter.route("/reviewRequest").post(createReviewRequest);
expertRouter.route("/getRemarks/:course_id").get(getRemarks);
expertRouter.route("/addPastMatch").post(addPastCompetition);
expertRouter.route("/addUpcomingMatch").post(addUpcomingCompetition);

module.exports = expertRouter;
