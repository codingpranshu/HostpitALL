// chat.js

// Open Chat Function
function openChat() {
    document.getElementById("chatPopup").classList.add("show");
}

// Close Chat Function
function closeChat() {
    document.getElementById("chatPopup").classList.remove("show");
}

// Sending User's Message
function sendMessage(event) {
    if (event.key === "Enter" || event.type === "click") {
        const userInput = document.getElementById("userInput").value;

        if (userInput.trim() !== "") {
            addMessage(userInput, 'user-message');
            document.getElementById("userInput").value = "";

            setTimeout(function () {
                botReply(userInput);
            }, 500);
        }
    }
}

// Adding Message to Chatbox
function addMessage(text, className) {
    const chatBody = document.getElementById("chatBody");

    const message = document.createElement("div");
    message.classList.add("message", className);
    message.textContent = text;

    chatBody.appendChild(message);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// AI Assistant Reply (Simple Example)
function botReply(userInput) {
    let reply;

    // Simple Responses (You can add more logic here)
    if (userInput.toLowerCase().includes("appointment")) {
        reply = "You can book an appointment by going to the Appointment section.";
    } else if (userInput.toLowerCase().includes("doctor")) {
        reply = "I can help you find a doctor. Please tell me the specialization you're looking for.";
    } else {
        reply = "I am here to assist you with any questions you may have!";
    }

    addMessage(reply, 'bot-message');
}


// Open Chat Function
function openChat() {
    document.getElementById("chatPopup").classList.add("show");
}

// Close Chat Function
function closeChat() {
    document.getElementById("chatPopup").classList.remove("show");
}

// Sending User's Message
function sendMessage(event) {
    if (event.key === "Enter" || event.type === "click") {
        const userInput = document.getElementById("userInput").value;

        if (userInput.trim() !== "") {
            addMessage(userInput, 'user-message');
            document.getElementById("userInput").value = "";

            setTimeout(function () {
                botReply(userInput);
            }, 500);
        }
    }
}

// Adding Message to Chatbox
function addMessage(text, className) {
    const chatBody = document.getElementById("chatBody");

    const message = document.createElement("div");
    message.classList.add("message", className);
    message.textContent = text;

    chatBody.appendChild(message);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// AI Assistant Reply (Simple Example)
function botReply(userInput) {
    let reply;

    // Simple Responses (You can add more logic here)
    if (userInput.toLowerCase().includes("appointment")) {
        reply = "You can book an appointment by going to the Appointment section.";
    } else if (userInput.toLowerCase().includes("doctor")) {
        reply = "I can help you find a doctor. Please tell me the specialization you're looking for.";
    } else {
        reply = "I am here to assist you with any questions you may have!";
    }

    addMessage(reply, 'bot-message');
}
