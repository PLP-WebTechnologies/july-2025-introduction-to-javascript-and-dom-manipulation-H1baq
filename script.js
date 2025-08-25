// Part 1: Basics (Variables + Conditionals)

// A simple personalized age check
document.getElementById("check-age").addEventListener("click", function() {
  let age = prompt("Hi Hibaq 👋, enter your age:");
  age = Number(age);

  if (age >= 18) {
    document.getElementById("age-result").textContent = 
      "Awesome! You’re an adult ready to conquer JavaScript 🚀";
  } else {
    document.getElementById("age-result").textContent = 
      "No worries! Keep learning, greatness doesn’t wait for age 🌱";
  }
});

// Part 2: Functions (Reusable logic)

// Function 1: Calculate total of a shopping cart
function calculateTotal(prices) {
  let sum = 0;
  for (let price of prices) {
    sum += price;
  }
  return sum;
}

// Function 2: Format a personalized greeting
function greetUser(name) {
  return `Hello, ${name}! Keep pushing forward in your JS journey 💻✨`;
}

// Button event: Calculate total
document.getElementById("calculate-total").addEventListener("click", function() {
  let prices = [15, 25, 40]; // Example shopping values
  let total = calculateTotal(prices);
  document.getElementById("total-result").textContent = 
    `${greetUser("Hibaq")} Your shopping total is $${total}`;
});

// Part 3: Loops (Iteration practice)

const goals = [
  "Master JavaScript fundamentals",
  "Build dynamic web apps",
  "Understand full-stack development",
  "Contribute to open source"
];

document.getElementById("show-goals").addEventListener("click", function() {
  const list = document.getElementById("goal-list");
  list.innerHTML = ""; // clear old content

  // Using a for loop to display goals
  for (let i = 0; i < goals.length; i++) {
    const li = document.createElement("li");
    li.textContent = goals[i];
    list.appendChild(li);
  }

  // While loop example (countdown log)
  let countdown = 3;
  while (countdown > 0) {
    console.log("Starting in:", countdown);
    countdown--;
  }
});


// Part 4: DOM Manipulation


// 1. Change text dynamically
document.getElementById("change-text").addEventListener("click", function() {
  document.querySelector("h1").textContent = 
    "🚀 Hibaq’s JavaScript Adventure Continues!";
});

// 2. Toggle background color (dark mode)
document.getElementById("toggle-color").addEventListener("click", function() {
  document.body.classList.toggle("highlight");
});

// 3. Add new goals dynamically
document.getElementById("add-goal").addEventListener("click", function() {
  const list = document.getElementById("dynamic-goals");
  const li = document.createElement("li");
  li.textContent = "New Goal " + (list.children.length + 1);
  list.appendChild(li);
});
