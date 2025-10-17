# 💱 Currency Converter

A simple and responsive single-page web app that allows users to convert between different currencies using live exchange rate data from a public API.

---

## 🚀 Project Overview

This project is part of the **HackYourFuture** curriculum.  
It demonstrates practical skills in:
- DOM manipulation  
- Asynchronous JavaScript (fetching data from APIs)  
- Error and loading handling  
- Responsive front-end design  

The goal is to build a **single-page application (SPA)** that provides real-time currency conversion with a clean and user-friendly interface.

---

## 🧠 Learning Goals

- Work with real-world APIs and handle asynchronous data.  
- Manipulate the DOM dynamically using JavaScript.  
- Handle loading and error states gracefully.  
- Build responsive layouts for all screen sizes.  
- Practice version control (creating a new branch per issue/task).

---

## 📋 Project Requirements

### ✅ Must Have

- [x] Responsive design for mobile and desktop  
- [x] Single Page Application (only one `index.html`)  
- [x] Fetch live exchange rates from a public API  
- [x] Show a loading indicator while fetching data  
- [x] Display a visible error message when the API fails  
- [x] Input fields for:  
  - Amount  
  - From currency  
  - To currency  
- [x] Display the **converted result** dynamically  
- [x] Validate user input (no negative or invalid values)  
- [x] Accessible and semantic HTML structure  
- [x] Clean and consistent UI styling  

---

### 🌟 Nice to Have

- [ ] Add a favicon  
- [ ] Display live exchange rate updates (auto-refresh)  
- [ ] “Swap” button to flip From/To currencies  
- [ ] Dark mode toggle 🌙☀️  
- [ ] Historical exchange rate chart (past 7 days)  
- [ ] Save last used currencies and amount in `localStorage`  
- [ ] Copy converted result to clipboard  
- [ ] Show offline message when connection is lost  
- [ ] Smooth animations and hover effects  
- [ ] Basic unit tests for conversion logic  
- [ ] Deployed version (GitHub Pages / Vercel / Netlify)  

---

## ⚙️ Technologies Used

- **HTML5**, **CSS**, **JavaScript (ES6)**  
- **Fetch API** for HTTP requests  
- **ExchangeRate.host API** *(free and no API key required)*  
- **Git & GitHub** for version control  
- *(Optional)*: Chart.js, localStorage, Jest for testing  

---

# 🧩 Project Structure

## currency-converter

- index.html # Main HTML file (SPA entry point)
- style.css # Styles for layout and responsiveness
- script.js # Main JS logic (fetching, DOM updates)
- assets/ # Icons, favicon, or images
- README.md # Documentation