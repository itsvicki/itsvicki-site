const https = require("https");
let url = "https://dev.to/api/articles/me";

exports.handler = async function (event) {
  const options = {
    headers: {
      api_key: `${process.env.DEV_TO_API_KEY}`,
    },
  };

  return new Promise((resolve, reject) => {
    https
      .get(url, options, (res) => {
        resolve(res);
      })
      .on("error", (e) => {
        reject(Error(e));
      });
  });
};
