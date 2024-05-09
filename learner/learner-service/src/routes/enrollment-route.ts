import { Router } from "express";
import UserMiddleware from "../middleware/user-middleware";
import {
  CreateEnrollment,
  GetAllEnrollments,
  GetOneEnrollment,
  //GetEnrollmentProfiles,
  DeleteEnrollmentDetails,
  GetEnrollmentsByUserId
} from "../controller/enrollment-controller";
import constants from "../utils/constants";

const EnrollmentRouter = Router();

EnrollmentRouter.post("/create", CreateEnrollment);

// EnrollmentRouter.get(
//   "/getOneEnrollment/:enrollmentId",
//   // UserMiddleware.authorize([
//   //   constants.USER.ROLES.ADMIN,
//   //   constants.USER.ROLES.USER,
//   // ]),
//   GetEnrollmentProfiles
// );

EnrollmentRouter.get(
  "/getAllEnrollment",
  //UserMiddleware.authorize([constants.USER.ROLES.USER]),
  GetAllEnrollments
);

EnrollmentRouter.get(
  "/getOneEnrollment/:enrollmentId", 
    //UserMiddleware.authorize([constants.USER.ROLES.USER]),

  GetOneEnrollment
);


EnrollmentRouter.delete(
  "/deleteEnrollment/:enrollmentId",
  //UserMiddleware.authorize([constants.USER.ROLES.ADMIN]),
  DeleteEnrollmentDetails
);

EnrollmentRouter.get(
  "/getEnrollmentsByUser/:userId",
  // UserMiddleware.authorize([
  //   constants.USER.ROLES.ADMIN,
  //   constants.USER.ROLES.USER,
  // ]),
  GetEnrollmentsByUserId
);

export default EnrollmentRouter;
