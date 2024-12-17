exports.handler = async () => {
    console.log("Scheduled Function is running at", new Date().toISOString());
    
    return {
      statusCode: 200,
      body: "Scheduled Function executed successfully!",
    };
  };
  