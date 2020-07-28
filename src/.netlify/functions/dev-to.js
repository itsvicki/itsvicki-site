const fetch = require("node-fetch");
const API_ENDPOINT = "https://dev.to/api/articles/me";

exports.handler = async (event, context) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      headers: {
        "content-type": "application/json; charset=utf-8",
        api_key: `${process.env.DEV_TO_API_KEY}`,
      },
      method: "GET",
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: data,
      }),
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }
};
