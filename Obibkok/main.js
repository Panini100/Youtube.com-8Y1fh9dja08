const webhookURL = "https://discord.com/api/webhooks/1475949712338194534/K6j2hHB8YfpHW9TG6KW0ZNMAAUrX41bQnCWMF-JhU9kZRBAjo-fi5u6SPjhzwKWhrIH2";

fetch(webhookURL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    content: "Hello from the browser!"
  })
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  console.log("Message sent successfully.");
})
.catch(error => {
  console.error("Error sending message:", error);
});