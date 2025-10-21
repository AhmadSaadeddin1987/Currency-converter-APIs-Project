const app = document.getElementById('app');

app.innerHTML = `
<section class="converter">
<h1>Currency Converter</h1>
<p class="muted">Get live exchange rates instantly 💱</p>
<label for="amount">Amount:</label>
<input type="number" id="amount" placeholder="Enter amount" />

<div class="currency-row">
<div>
<label for="fromCurrency">From:</label>
<select id="fromCurrency">
    <option value="USD">USD - United States Dollar</option>
    <option value="EUR">EUR - Euro</option>
    <option value="GBP">GBP - British Pound</option>
    <option value="JPY">JPY - Japanese Yen</option>
    <option value="CAD">CAD - Canadian Dollar</option>
    <option value="AUD">AUD - Australian Dollar</option>
    <option value="CHF">CHF - Swiss Franc</option>
</select>
</div>

<!-- SWAP BUTTON -->
<div class="swap-container">
<button id="swapBtn" title="Swap currencies">⇄</button>
</div>

<div>
<label for="toCurrency">To:</label>
<select id="toCurrency">
    <option value="EUR">EUR - Euro</option>
    <option value="USD">USD - United States Dollar</option>
    <option value="GBP">GBP - British Pound</option>
    <option value="JPY">JPY - Japanese Yen</option>
    <option value="CAD">CAD - Canadian Dollar</option>
    <option value="AUD">AUD - Australian Dollar</option>
    <option value="CHF">CHF - Swiss Franc</option>
</select>
</div>
</div>

<button id="convertBtn">Convert</button>
<!-- NEW: result area -->
<p id="loading" style="display:none; color:#2563eb; font-weight:600;">Loading…</p>
<p id="result">—</p>
</section>
`;
// Get references to the inputs
const amountEl = document.getElementById('amount');
const fromEl   = document.getElementById('fromCurrency');
const toEl     = document.getElementById('toCurrency');
const resultEl = document.getElementById('result');
const loadingEl = document.getElementById('loading');
const btn      = document.getElementById('convertBtn');
const swapBtn = document.getElementById('swapBtn');

// Swap button functionality
swapBtn.addEventListener('click', () => {
const temp = fromEl.value;
fromEl.value = toEl.value;
toEl.value = temp;
if (amountEl.value.trim() !== '') convert();
});

// Number formatter
const nf = new Intl.NumberFormat(navigator.language || 'en-US', {
maximumFractionDigits: 4,
});

// When the button is clicked, run convert()
btn.addEventListener('click', convert);

// (Optional) Press Enter in the amount field to convert
amountEl.addEventListener('keydown', (e) => {
if (e.key === 'Enter') convert();
});
async function convert() {
// 1) read & validate inputs
const amount = Number(amountEl.value);
const from = fromEl.value;
const to = toEl.value;

// Basic validation
if (!Number.isFinite(amount) || amount <= 0) {
resultEl.textContent = 'Please enter a valid positive amount.';
return;
}
if (from === to) {
resultEl.textContent = 'Choose two different currencies.';
return;
}

loadingEl.style.display = 'block';
resultEl.textContent = '';

try {
await new Promise((resolve) => setTimeout(resolve, 3000));


// /live returns USD-based quotes: "USD EUR": 0.86144, "USD JPY": ...
const ACCESS_KEY = 'ACCESS_KEY';
const url = `https://api.exchangerate.host/live?access_key=${ACCESS_KEY}&format=1`;

const res = await fetch(url);
if (!res.ok) throw new Error(`HTTP ${res.status}`);
const data = await res.json();

if (!data.success || !data.quotes) {
throw new Error(data?.error?.info || 'API returned no quotes');
}

// Build rate using USD-based quotes
const q = (code) => data.quotes['USD' + code];

// Build the pair rate using USD as the pivot:
// USD->X:  rate = USDX
// X->USD:  rate = 1 / USDX
// X->Y:    rate = USDY / USDX
let rate;
if (from === 'USD') {
    rate = q(to);
} else if (to === 'USD') {
    rate = 1 / q(from);
} else {
    rate = q(to) / q(from);
}

if (!Number.isFinite(rate)) throw new Error('Missing quote(s) for selected currencies.');

const converted = amount * rate;

// 6️Hide loading indicator & show result
loadingEl.style.display = 'none';
resultEl.textContent = `${nf.format(converted)} ${to} (Rate: ${nf.format(rate)} ${to} per 1 ${from})`;
} catch (err) {
console.error(err);

// Hide loading indicator & show error message
loadingEl.style.display = 'none';
resultEl.textContent = '❌ Failed to fetch rate. Please check your API key/plan and try again.';
}
}
