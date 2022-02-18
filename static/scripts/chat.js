var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Tsag avah
function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

// Anhnii message
function AnhniiUtga() {
  let firstMessage = "Идэр их сургуулийн чатанд тавтай морилно уу.";
  document.getElementById("botStarterMessage").innerHTML =
    '<p class="botText"><span>' + firstMessage + "</span></p>";

  let time = getTime();

  $("#chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);
}

AnhniiUtga();

// Hariult uguh
function HariultOgoh(userText) {
  let Hariu = HariultAvah(userText);
  let botHtml = '<p class="botText"><span>' + Hariu + "</span></p>";
  $("#chatbox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Hereglegchiin oruulsan utgiig avah
function utgaAvah() {
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = "Та асуух зүйлээ бичнэ үү?";
  }

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    HariultOgoh(userText);
  }, 1000);
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
  utgaAvah();
}

function heartButton() {
  buttonSendText("Зүрх дарагдлаа");
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    utgaAvah();
  }
});
