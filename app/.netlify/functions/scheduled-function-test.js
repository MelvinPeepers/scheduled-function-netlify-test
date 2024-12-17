
exports.handler = async (event) => {
    console.log("Scheduled function executed at:", new Date().toISOString());
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Scheduled function executed successfully!" }),
    };
  };
  