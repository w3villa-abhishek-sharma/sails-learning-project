module.exports = function (req, res, next) {
    let TOKEN = "eyJhbsGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiaGlzaGVrcGFuZGl0NTU5OSIsImVtYWlsIjoiZXhhbXBsZUBnbWFpbC5jb20iLCJfaWQiOiI2NDliZDc2OGFkNzRjMWFjN2Q0NGE2NjIiLCJpYXQiOjE2ODc5MzUxMTh9.Eg-cUPJFu96WvSMx3Ad19AJUsXQRrEyps8_qitRNVcE"
    if (req.headers.token == TOKEN) {
        return next();
    } else {
        return res.status(401).json({ status: false, msg: "unauthorized access" });
    }
};