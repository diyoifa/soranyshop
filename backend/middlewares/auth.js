import { getSession } from "next-auth/react";
import ErrorHandler from "../utils/errorHandler";

const isAuthenticatedUser = async (req, res, next) => {
  const session = await getSession({ req })
  console.log("🚀 ~ file: auth.js:6 ~ isAuthenticatedUser ~ session:", session)

  if (!session) {
    return next(new ErrorHandler("Inicia sesion para acceder", 401));
  }
  req.user = session.user;
  next();
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `(${req.user.role}) No estas autorizado para acceder a este recurso.`
        )
      );
    }
    next();
  };
};

export { isAuthenticatedUser, authorizeRoles};
