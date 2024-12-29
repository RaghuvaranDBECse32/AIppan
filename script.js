// Theme Toggle
document.getElementById("dark-theme").addEventListener("click", () => {
  document.body.className = "dark";
});

document.getElementById("light-theme").addEventListener("click", () => {
  document.body.className = "light";
});

document.getElementById("system-theme").addEventListener("click", () => {
  document.body.className = "";
});

// Chatbot Interaction
const sendButton = document.getElementById("send-button");
const userInput = document.getElementById("user-input");
const chatMessages = document.getElementById("chat-messages");

sendButton.addEventListener("click", () => {
  const message = userInput.value;
  if (message.trim() === "") return;

  // Display user message
  const userMessage = document.createElement("div");
  userMessage.textContent = `You: ${message}`;
  chatMessages.appendChild(userMessage);

  // Send message to the backend (Streamlit)
  fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  })
    .then(response => response.json())
    .then(data => {
      // Display chatbot response
      const botMessage = document.createElement("div");
      botMessage.textContent = `AIppan: ${data.response}`;
      chatMessages.appendChild(botMessage);
    });

  userInput.value = "";
});
