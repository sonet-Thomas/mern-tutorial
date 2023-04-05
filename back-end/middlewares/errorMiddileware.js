const notFound=(req, res, next)=> {
    res.send(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next();
  };
  
//   const errorHandler = (err, req, res, next) => {
//     const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//     res.status(statusCode);
//     res.json({
//       message: err.message,
//       stack: process.env.NODE_ENV === "production" ? null : err.stack,
//     });
//   };

const ErrorHandler = (err, req, res, next) => {
  console.log("Middleware Error Hadnling");
  const errStatus = err.statusCode || 500 || 400;
  const errMsg = err.message || 'Something went wrong';
  res.status(errStatus).json({
      success: false,
      status: errStatus,
      message: errMsg,
      stack: process.env.NODE_ENV === 'development' ? err.stack : {}
  })
  next();
}

// export default ErrorHandler
  
//   module.export = { notFound };

module.exports={ErrorHandler,notFound}