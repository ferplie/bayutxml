const convert = require("xml-js");

exports.handler = async (event, context) => {
  // Generate XML data
  const jsonData = { property: "new value" }; // Replace with your JSON data
  const xmlData = convert.js2xml(jsonData, {
    compact: true,
    ignoreComment: true,
  });

  // Create response
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/xml",
    },
    body: xmlData,
  };

  return response;
};
