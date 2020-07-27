exports.handler = async (event, context, callback) => {
  const pass = (body) => {
    callback(null, {statusCode: 200, body: JSON.stringify(body)});
  };

  try {
    let response = await fetch("https://dev.to/api/articles/me", {
      method: event.httpMethod,
      headers: {
        api_key: `Bearer ${process.env.DEV_TO_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: event.body,
    });
    let data = await response.json();
    await pass(data);
  } catch (err) {
    let error = {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({error: err.message}),
    };
    await pass(error);
  }
};
