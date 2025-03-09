const { protect, restrictTo } = require("../Controllers/authController");
const {
  getCheckOutSession,
  webhookCheckout,
  createPayout,
  ExpertAccountDetails,
  getPayoutRequest,
  createPyoutRequest,
  getAccountDetails,
  EditAccountDetails,
  DeleteAccountDetails,
  purchaseByPoints,
} = require("../Controllers/paymentController");

const paymentRouter = require("express").Router();

paymentRouter.route("/checkout").post(webhookCheckout);
paymentRouter.use(protect);
paymentRouter
  .route("/purchase/:course_id")
  .get(getCheckOutSession)
  .post(purchaseByPoints);
paymentRouter.route("/payout/:id").post(restrictTo(["admin"]), createPayout);
paymentRouter.use(restrictTo(["expert"]));
paymentRouter
  .route("/accountDetails")
  .post(ExpertAccountDetails)
  .get(getAccountDetails)
  .patch(EditAccountDetails)
  .delete(DeleteAccountDetails);
paymentRouter.route("/payoutRequest").post(createPyoutRequest);

module.exports = paymentRouter;
