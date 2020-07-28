const http = require("http");

exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    const options = {
      host: "dev.to",
      path: "/api/articles/me",
      port: 8000,
      method: "GET",
      headers: {
        api_key: `${process.env.DEV_TO_API_KEY}`,
      },
    };

    const req = http.request(options, (res) => {
      resolve("Success");
    });

    req.on("error", (e) => {
      reject(e.message);
    });

    // Send the request
    req.write("");
    req.end();
  });
};
