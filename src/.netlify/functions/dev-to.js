const https = require("https");
let url = "https://dev.to/api/articles/me";

exports.handler = function (event, context, callback) {
  const options = {
    headers: {
      api_key: `${process.env.DEV_TO_API_KEY}`,
    },
  };

  https
    .get(url, options, (res) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res.body),
      });
    })
    .on("error", (e) => {
      callback(Error(e));
    });
};
