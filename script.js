let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let msgBtnEl = document.getElementById("sendMsgBtn");
let userInputEl = document.getElementById("userInput");
let chatContainer = document.getElementById("chatContainer");


msgBtnEl.onclick = function() {
    let userInputValue = userInputEl.value;

    let msgContEl = document.createElement("div");
    msgContEl.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(msgContEl);


    let chatEl = document.createElement("span");
    chatEl.textContent = userInputValue;
    chatEl.classList.add("msg-to-chatbot", );
    msgContEl.appendChild(chatEl);


    userInputValue = "";
    getReply();
};

function getReply() {
    let noOfMsgs = chatbotMsgList.length;
    let chatMsg = chatbotMsgList[Math.ceil(Math.random() * noOfMsgs) - 1];

    let msgContEl = document.createElement("div");
    msgContEl.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(msgContEl);

    let replyEl = document.createElement("span");
    replyEl.textContent = chatMsg;
    replyEl.classList.add("msg-from-chatbot");
    msgContEl.appendChild(replyEl);
}
