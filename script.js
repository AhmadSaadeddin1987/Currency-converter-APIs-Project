const app = document.getElementById('app');

app.innerHTML = `
<section class="converter">
<h1>Currency Converter</h1>
<p class="muted">Get live exchange rates instantly 💱</p>
<label for="amount">Amount:</label>
<input type="number" id="amount" placeholder="Enter amount" />

<label for="fromCurrency">From:</label>
<select id="fromCurrency">
    <option value="USD">USD</option>
    <option value="EUR">EUR</option>
</select>

<label for="toCurrency">To:</label>
<select id="toCurrency">
    <option value="EUR">EUR</option>
    <option value="USD">USD</option>
</select>

<button id="convertBtn">Convert</button>
</section>
`;
