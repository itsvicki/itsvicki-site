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
        let data = "";

        // A chunk of data has been received.
        res.on("data", (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        res.on("end", () => {
          resolve(JSON.stringify(data));
          // console.log(JSON.parse(data).explanation);
        });
      })
      .on("error", (e) => {
        reject(Error(e));
      });
  });
};
