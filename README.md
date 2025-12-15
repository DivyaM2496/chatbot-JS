# 🤖 Simple Chatbot App

## 📌 Overview

The **Simple Chatbot App** is a web-based JavaScript application that simulates a chatbot conversation. Users can send messages to the chatbot, which responds with random predefined messages.

This project is ideal for beginners to practice **DOM manipulation**, **event handling**, and **dynamic content generation** in JavaScript.

---

## 🧩 Features

* Users can input messages to send to the chatbot
* Chatbot responds with random messages from a predefined list
* Displays messages in a chat container
* Simulates a simple chatbot conversation

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript

---

## ⚙️ How It Works

1. The user types a message into the input field.
2. Clicking the **Send** button triggers the `onclick` event:

   * Creates a message element for the user's input and appends it to the chat container
   * Clears the input field
   * Calls `getReply()` to generate a chatbot response
3. `getReply()` randomly selects a message from `chatbotMsgList` and appends it to the chat container

---

## 📂 Project Structure

```
chatbot-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 JavaScript Logic

```js
msgBtnEl.onclick = function() {
    let userInputValue = userInputEl.value;
    
    let msgContEl = document.createElement("div");
    msgContEl.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(msgContEl);

    let chatEl = document.createElement("span");
    chatEl.textContent = userInputValue;
    chatEl.classList.add("msg-to-chatbot");
    msgContEl.appendChild(chatEl);

    userInputEl.value = "";
    getReply();
};

function getReply() {
    let chatMsg = chatbotMsgList[Math.floor(Math.random() * chatbotMsgList.length)];

    let msgContEl = document.createElement("div");
    msgContEl.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(msgContEl);

    let replyEl = document.createElement("span");
    replyEl.textContent = chatMsg;
    replyEl.classList.add("msg-from-chatbot");
    msgContEl.appendChild(replyEl);
}
```

---

## 📚 Concepts Covered

* DOM manipulation (`createElement`, `appendChild`, `classList`)
* Event handling (`onclick`)
* Random selection of array elements
* Dynamic content update

---

## 🚀 Future Improvements

* Allow the chatbot to respond based on user input
* Add timestamps for messages
* Implement chat scrolling
* Style messages with different colors or avatars

---

## 👩‍💻 Author

Created as a practice project to strengthen **JavaScript fundamentals** and **DOM manipulation skills**.

---

⭐ If you find this project useful, feel free to star the repository!
