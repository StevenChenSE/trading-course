---
title: "Gap Up News Scalp (GUNS)"
---

The Gap Up News Scalp (GUNS) is a day-trading strategy built around stocks that open sharply higher on a specific news catalyst. Unlike the swing and trend-following approaches taught in earlier lessons—where positions are held over several days or weeks using daily candles—GUNS enters and exits within the same session, typically within the first 30 to 60 minutes of the market open, often in just one to a few minutes. The objective is to capture a quick 2R move as soon as a "play" stock breaks a key pre-market level. This lesson walks through the entire workflow: setting up the trading station, building the daily watchlist, the five setups that drive entries, the role of Level 2 quotes, and live examples of the strategy in action.

---

## 8.1 Introduction to Day Trading and the GUNS Strategy

### 8.1.1 Why Day Trading Differs from Swing Trading

The strategies covered earlier in Level 2 focused on swing trading and trend following, where a stop is trailed over several days or several weeks using daily candles. GUNS inverts that timeframe. Positions are opened and closed on the same day, usually within a few minutes, using 1-minute or 5-minute candles.

The strategy the instructor trades personally—and the focus of this lesson—is **GUNS**, or the **Gap Up News Scalp**. GUNS scalps stocks that are gapping up on a specific news catalyst.

### 8.1.2 The GUNS Thesis

There are approximately 7,000 stocks in the U.S. market. Every single day, fewer than ten stocks gap up because of some kind of news catalyst. The catalyst can be an earnings release (better-than-expected earnings), an FDA approval, an analyst upgrade, a clinical trial pass, a major contract win, or any other event that puts the stock "in play." When that happens, many traders pile in, and the stock runs sharply higher in the pre-market—often 5%, 10%, 15%, or 20% above the prior close.

The moment the market opens, these stocks tend to keep moving up. The GUNS approach is to:

1. Use a scanner to surface the handful of stocks that are gapping up on very high relative volume.
2. Enter the moment the market opens.
3. Exit within minutes for a 2R (or better) win.

Most GUNS trades take place within the first hour of the session. The market opens at 9:30 AM Eastern Standard Time. Some setups are entered at the open (the second the market opens, with exits in one to two minutes), while others are scaled inside the first 30 to 60 minutes.

### 8.1.3 Worked Examples: AMD and SCVL

**AMD example.** A daily chart shows the stock trading sideways near $15. After the close, the company announces very strong earnings (e.g., shares rallying roughly 6% on the earnings beat). The next morning, the price gaps up at the open and continues higher during the session. The GUNS entry happens right at the open using 1-minute or 5-minute candles, and the position is exited within minutes before the day closes.

**SCVL example.** On a 1-minute chart right after the open, the stock prints a strong first bullish candle followed by two bearish candles that signify profit-taking (lower high, lower high). The entry is placed 1 cent above the high of the last pullback candle (e.g., $33.39), the stop loss sits just below the low of that pullback candle (e.g., $33.14, about 20 cents away), and the profit target is set 40–50 cents above entry (e.g., $34.01). When the next candle pierces the high, the order triggers and the profit target is hit within a minute. This was effectively a 50-second scalp yielding 2R.

These examples illustrate the central appeal of GUNS: in and out in seconds, capturing 2R and immediately moving on to the next setup.

### 8.1.4 Prerequisites for Trading GUNS

GUNS requires tools beyond a normal swing-trading setup.

1. **Live streaming charts with pre-market data.** The trader must watch the market open and pre-market in real time. The instructor personally uses charts on **thinkorswim** as well as **Interactive Brokers** (IB) and the equivalent **Halifax Australia** IB-based platform. Any broker that provides the same live streaming and pre-market data is acceptable.
2. **Hot buttons on the trade workstation.** For swing trading, keying in an entry, stop loss, and profit target may take a minute or two. For day trading on 1-minute candles, the order must be entered within a few seconds or the trade is missed. Hot buttons pre-configure the share size, entry, stop, and target so a single click places the entire bracket order instantly. Hot buttons are configured on the IB Trader Workstation (TWS); thinkorswim supports them as well, with tutorials available online.
3. **Compliance with the SEC Pattern Day Trader rule.** Under SEC regulations, day trading requires a minimum of **$25,000** in the account. A trader who buys and sells on the same day is a Pattern Day Trader, and accounts under $25,000 that execute more than three day trades in a five-business-day period are frozen. To stay safe, keep at least **$30,000** in the account, or use a broker that is not regulated by the SEC (e.g., **SureTrader**—used at the trader's own risk and not personally recommended by the instructor), or trade **CFDs** where allowed (CFDs are illegal for U.S. citizens but available in Australia, Singapore, Hong Kong, etc.).
4. **Two monitors (or more) is preferred.** Two screens make it easy to view charts on one monitor and execute on the other. One screen works but is more challenging.
5. **Fast reaction time.** GUNS rewards practice. Once mastered, it is a high-frequency, high-discipline technique.

With those foundations in place, the next part walks through how the trade station is set up.


## 8.2 Setting Up Your Trading Station

The trading workstation is configured on the Interactive Brokers TWS (or Halifax Australia, which uses the same platform). Mosaic is the default layout.

### 8.2.1 The Four Custom Tabs

Beyond the default Classic TWS and Mosaic tabs, four custom tabs are created specifically for GUNS:

1. **GUNS News** — the watchlist tab where the daily candidate list is built.
2. **GUNS Charts M5** — four 5-minute charts side-by-side to monitor the watchlist.
3. **GUNS Charts M1** — four 1-minute charts side-by-side (or two 1-minute charts in a second variant) used to time entries after the open.
4. **GUNS Trade** — the main trading tab when focusing on one stock.

### 8.2.2 The GUNS News Tab

The GUNS News tab holds four elements:

* A **daily chart** of the selected stock.
* A **5-minute chart** of the same stock.
* The **company news** window (left side).
* The **watchlist** window (right side).

To build it, click the `+` icon, name the tab `GUNS News`, then click `Create`. Add four windows via `New Window`:

* `Chart` (twice)
* `News → Company-Specific News`
* `Watchlist`

Arrange them so the two charts share the top half and the news/watchlist share the bottom half. Set the first chart to **6 months daily candles** and the second chart to **2 days 5-minute candles**. Link the two charts (green group icon) so they show the same ticker. Click `Lock Layout` to save.

### 8.2.3 The GUNS Charts M5 Tab

Create a new tab named `GUNS Charts M5` and add four chart windows. Set all four to **2 days 5-minute candles**. Unlink them (set each chart to `No Group`) so four different tickers can be displayed at once. Indicators are added later, then `Lock Layout`.

### 8.2.4 The GUNS Charts M1 Tab

Create a `GUNS Charts M1` tab with four 1-minute charts (today, 1-minute candles), unlinked, for watching four tickers at the 1-minute time frame. A second variant with just two 1-minute charts is used once the trader is actively executing and only wants to track one or two positions. Beginners should start with the four-chart version.

### 8.2.5 The GUNS Trade Tab

This is the main trading tab when focused on one stock. It contains:

* A large **1-minute chart** (half the screen) — the execution time frame.
* A smaller **5-minute chart**.
* A smaller **daily chart**.
* The **Level 2 / Market Depth** window.
* The **Mosaic Market Scanner**.

Link the three charts (green group) so they all show the same ticker. Lock the layout.

### 8.2.6 Configuring the GUNS Scanner

On the GUNS Trade tab, create a custom Mosaic market scanner:

1. Right-click the scanner area → `New Custom Scan`.
2. **Universe:** Stocks, U.S., NYSE/AMEX/NASDAQ. Type = Corporations.
3. **Last Price:** at least $1.50 minimum, up to $1,000.
4. **Percentage Change:** at least 5% (no maximum).
5. **Volume:** more than 30,000 shares (current/intraday volume, not average volume).
6. **Sort:** descending by volume.
7. Name the scan `GUNS Scan` and save.

The scanner updates in real time during pre-market and the regular session, surfacing stocks that meet the criteria.

### 8.2.7 Adding Indicators and Saving Templates

Across every chart, four moving averages are added:

* **9 EMA** — purple, thin.
* **20 EMA** — red, thin.
* **50 SMA** — blue, thicker.
* **200 SMA** — red, thick.

In TWS: `Edit → Studies → Moving Averages`. Add two EMAs (periods 9 and 20) and two SMAs (periods 50 and 200). Adjust colors and thickness via right-click → `Change Color` and `Change Thickness`. Save the layout as a chart template named `Chart M1` (`File → Save Chart Template`). Apply that template to every chart across all four tabs and lock the layouts.

### 8.2.8 Order Entry: The Conventional Way

In Classic TWS, type the ticker into the order line (e.g., `AAPL`). Choose `STK` (stock) or `CFD`. Click `BUY` (the `ASK` side) and enter the share quantity. Use a **Buy Stop Limit** order with both a **stop price** and a **limit price**, and attach a **bracket order** for the stop loss and profit target.

For example, to buy AAPL if it reaches $194.50 with a stop loss at $189.50 and a profit target at $204.50:

* Stop price: 194.50
* Limit price: 194.70 (20 cents above the stop)
* Stop loss (bracket): 189.50
* Profit target (bracket): 204.50

`Transmit` the order. The order can be `Modified` (changed) or `Cancelled` at any time before it triggers. This is the conventional order-entry method; it is used before the market opens for Setups 1, 2, and 3 (where the order is keyed in at 9:28 or 9:29 AM with a full minute or more of cushion).

### 8.2.9 Hot Buttons: Fast One-Click Execution

Hot buttons pre-configure entry, stop, target, and share size so that one click places the entire bracket. The instructor uses seven hot buttons on each chart, named `Buy 15¢`, `Buy 20¢`, `Buy 25¢`, `Buy 30¢`, `Buy 40¢`, `Buy 50¢`, and `Buy 60¢`. The number is the stop-loss distance, in cents, below the click price on the chart. The profit target is automatically 2× that distance. The number of shares is sized so that 1% account risk per trade is preserved.

**Position sizing example.** With $10,000 capital and 1% risk per trade ($100 max loss):

* If stop distance = 15¢, share count = $100 ÷ $0.15 = **666 shares**.
* If stop distance = 20¢, share count = $100 ÷ $0.20 = **500 shares**.

To configure a button:

1. `Edit → Global Chart Configuration → Charts → Buttons`.
2. `New → Buy`. Set the `Generate Label` to the desired name (e.g., `Buy 15¢`).
3. Set `Size → Absolute` to the share count (e.g., 666).
4. Set `Order Type` to `Stop Limit`.
5. Set both `Stop Price` and `Limit Price` references to `Chart Trader Price`, with the stop **1 cent** above the click price and the limit **5 cents** above the click price.
6. Set the stop-loss reference to `Chart Trader Price` minus the configured stop distance.
7. Set the profit-target reference to `Chart Trader Price` plus 2× the configured stop distance.
8. Tick **Transmit the order instantaneously** and confirm the warning (this enables one-click entry).
9. Click `Apply`.

Repeat for each stop distance desired. Use `View → Button Panel` to toggle the buttons on or off. Before any hot button can fire in the live market, click the **Arm** toggle (described as "arming" the weapon); when armed and clicked, the bracket is submitted instantly.

### 8.2.10 Managing and Cancelling Live Orders

Once armed and clicked, the hot button places a bracket that displays directly on the chart:

* The **blue line** is the entry price.
* The **lower line** is the stop loss.
* The **upper line** is the profit target.

Until the market is open (or the price has not reached the blue line), the order can be `Cancelled`. Once filled, the position can be exited instantly with the **Close Position** button, which submits a market order to flatten. The stop loss and profit target can also be adjusted on the fly (`Amend` / `Update`).

### 8.2.11 Setting Up the Same Templates on thinkorswim

The instructor mirrors the GUNS layout on thinkorswim on a second computer. On TOS:

1. `Studies → Edit Studies → Add Study`. Add two **exponential moving averages** and two **simple moving averages**. Set periods to 9, 20, 50, and 200. Style the 9 EMA pink/purple, the 20 EMA red, the 50 SMA blue and thicker, and the 200 SMA red and thick.
2. `Save Studies` as `GUNS`.
3. Use `Flexible Grid → Customize Grid` to set up four charts in a 2×2 layout.
4. `Studies → Load Study → GUNS` on each chart, set each to the desired time frame (5-minute or 1-minute), and `Save` the grid as `GUNS M5` or `GUNS M1`.

The two-computer setup is optional but lets the trader run IB TWS for execution on one screen and TOS for cleaner charting on another.


## 8.3 Preparing the Daily Watchlist

The watchlist is the cornerstone of every GUNS day. Because the market opens at 9:30 AM Eastern Standard Time, preparation begins at **9:00 AM Eastern** (which is 9:00 PM Singapore time for the instructor). The 25 minutes between 9:00 and 9:25 are spent narrowing the 7,000-stock universe down to the **four to six best candidates** to trade.

### 8.3.1 Sources for Pre-Market Movers

Three primary sources are used to surface pre-market gappers:

1. **StockMarketWatch.com → Pre-Markets.** A free website listing pre-market gappers with percentage change and pre-market volume. Stocks gapping up more than 5% with pre-market volume above 30,000 shares are highlighted.
2. **Interactive Brokers GUNS Scanner.** The custom scanner built in Part 2, configured to surface stocks gapping up more than 5% on more than 30,000 shares above $1.50.
3. **Trade-Ideas.com (optional).** A subscription screener (~$100/month or ~$1,000/year) that can be customized to find gappers.

The instructor primarily uses StockMarketWatch.com and the IB scanner.

### 8.3.2 First-Pass Filters

From the scanner output, the watchlist is filtered on these criteria:

* **Price ≥ $1.50.**
* **Pre-market volume ≥ 30,000 shares.**
* **Percentage gap-up ≥ 5%.**
* **Strong catalyst** driving the move.
* **Low free float** (ideally under 100 million shares; 10–20 million is ideal).
* **Not an acquisition target.**

**Catalyst types ranked by strength:**

* Earnings beat (announcement the day before or before the open).
* FDA approval (drug or food approval).
* Analyst upgrade (e.g., upgrade from Buy to Strong Buy with a higher price target).
* Clinical trial pass (pharma moving closer to approval).
* Major contract win or business news (e.g., a $1.5M purchase order).

**Avoid:** Acquisitions and merger buyouts. If Stock A is at $5 and being acquired by Stock B at $7, the price moves to $7 pre-market and stays near $7 — there is no momentum to scalp.

### 8.3.3 Free Float Explained

A company's **shares outstanding** is the total issued (e.g., 100 million). Not all of those are available for trading; for example, the founder may hold 50 million privately. The remaining **50 million** is the **free float** — the shares actually available to be bought and sold.

GUNS wants **low float** because when supply is small and demand surges, demand exceeds supply and price moves sharply. A company with 10–20 million shares of float can move 100–400% in a day. A company with a large float requires far more demand to move the same percentage.

### 8.3.4 The Ideal Daily Chart

Once a candidate is shortlisted, the **daily chart** is reviewed. Two patterns are ideal:

1. **Uptrend above all moving averages.** The stock is already bullish, with price above the 9, 20, 50, and 200 MAs. When it gaps up, there is no overhead resistance and clear room to run.
2. **Downtrend gap-up above all MAs.** Even if the stock was previously in a downtrend, if the gap-up price clears the 9, 20, 50, and 200 MAs, the chart is tradeable — once above the MAs, "clear skies ahead."

If the price gaps up but is still below a key MA (e.g., the 200 SMA), the trade is only valid if there is a clear window of at least 1R of profit before that MA acts as resistance.

Ideally, the daily chart also shows the price **pulling back** to a moving average on the prior day rather than being overextended above the MAs — a pullback means the stock is not yet overbought and has more room to run.

### 8.3.5 The Ideal 5-Minute Pre-Market Chart

The pre-market is the gray zone on the 5-minute chart before the 9:30 open. The ideal pre-market chart shows:

* Price **above all moving averages** (9 EMA, 20 EMA, 50 SMA, 200 SMA).
* Price **consolidating very near the pre-market high** (within 20%, ideally within 5%, just below the high).
* **A clear pre-market high** that the price can break out of.
* **Not too many pre-market candles.** If the gray zone is packed with candles, the move has already happened pre-market and the trader is late to the party. A fresh, sparse pre-market chart is preferred.

A resistance level is drawn at the pre-market high because it acts as a "gate." The moment price breaks through the gate, momentum often accelerates. Buying just below the gate is dangerous — price can hit the gate, fail, and reverse. Buying on the breakout (1 cent above the high) is the safer entry.

### 8.3.6 Examples of Good vs. Bad Pre-Market Charts

**Good candidates:** KOD, GNE, an unnamed ticker near $5.45, an unnamed ticker near $165. All show price above the MAs, consolidating near the pre-market high after a clean run-up.

**Bad candidates:**

* **IRBT** — too many candles pre-market (party already started yesterday's post-market), price has sold off below the MAs. MAs now act as resistance.
* **NVRO** — below the 200 SMA, broken candles and gaps, very little clean liquidity.
* An unnamed ticker — many pre-market candles, sold off below MAs, in a downtrend.

For these bad-chart names, no Setup 1, 2, or 3 is taken pre-market. However, they are still watched, because once the market opens the price may turn into a clean Setup 4 or 5 pattern (live entries after the open).

### 8.3.7 Drawing Resistance Levels

For each candidate in the watchlist, the trader draws resistance levels:

* A horizontal line at the **pre-market high** (the first resistance).
* Lines at any **moving averages** the price is below on the daily chart (potential resistance overhead).

This makes it easy to see, at a glance, where the price must clear to reach 1R or 2R of profit.

### 8.3.8 From Watchlist to Trading Plan

By 9:25 AM, the trader has a clear picture:

* If one or more stocks show a clean pre-market setup (price consolidating just below the pre-market high, above MAs), the trader is ready to place Setups 1, 2, or 3 orders at 9:29 AM before the open.
* If no clean pre-market setups exist, the trader places no pre-market orders and waits for the open to hunt for Setups 4 and 5.

Just before the open, all 5-minute charts are switched to 1-minute candles for the live session.


## 8.4 GUNS Setups 1, 2, and 3 — Pre-Market Entries

The three pre-market setups share the same broad logic: orders are placed *before* 9:30 AM Eastern, with the goal of being filled the moment the market opens. Setups 1, 2, and 3 are decided by reading the 5-minute pre-market chart. Setups 4 and 5 (covered in the next part) are decided by reading 1-minute price action after the open.

**Setup frequency.** About 99% of the instructor's pre-market trades are Setup 1. Setup 2 and Setup 3 are taken only when an exceptionally clean pattern appears.

### 8.4.1 Setup 1: Break of the Pre-Market High

Setup 1 is the bread-and-butter GUNS trade. It triggers when the price is consolidating very near the pre-market high — ideally within 5% of it, just below.

**Pattern recognition.** On the 5-minute pre-market chart:

1. The price makes a pre-market high.
2. The price then **consolidates very near that high**, almost touching it, like a runner standing at the gate ready to sprint.

The pre-market high is the first resistance. When the market opens and the price breaks above it, the breakout often runs hard.

**Order entry (placed at 9:28 or 9:29 AM, before the open):**

* **Buy Stop Limit order.**
* **Stop price:** 1 cent above the pre-market high.
* **Limit price:** 3 to 5 cents above the stop price.
* **Stop loss:** 10 to 50 cents below the entry, depending on stock price (see rule of thumb below).
* **Profit target:** 2R to 2.5R above the entry.

**Rule-of-thumb stop distances by stock price:**

| Stock price | Stop distance |
| --- | --- |
| ≤ $20 | 10–15¢ |
| $20–$30 | 15–20¢ |
| $30–$50 | 20–30¢ |
| $50–$100 | 30–50¢ |

For greater accuracy, switch the chart to 1-minute candles and use the **1-minute ATR (Average True Range)** as the stop distance.

**Risk-reward ratio.** Risk 1R (entry minus stop) to make 2R or 2.5R (entry + 2× or 2.5× the 1R distance).

**Execution flow:**

1. At 9:29 AM, switch the chart to 1-minute candles.
2. Wait for 9:30 AM open.
3. If the price breaks above the entry within minutes and runs, the order fills and the target is hit.
4. The moment the price moves 1R in favor, **shift the stop loss to the entry price** to lock in a risk-free trade.

**Cancel conditions:**

* If the market opens and the price sells off and does not look like it is recovering within 5 minutes (some traders use 3 minutes), cancel the order.
* If the market opens and the price spikes above the entry but does not get filled (because the limit price is too low), cancel the order and do not chase.

**Setup 1 Case Studies**

**Case Study 1 — TGI.** Pre-market high $29.00 on the 5-minute chart. Buy Stop at $29.01, limit at $29.06 (5 cents above). Stop loss at $28.81 (20 cents below entry). Profit target at $29.51 (50 cents above entry = 2.5R). On the open, the price gapped in, triggered $29.01 within the first 1-minute candle, and hit the $29.51 target within the second 1-minute candle. Trade closed for a 2.5R win.

**Case Study 2 — CLSN.** Low-priced stock at $3.96. Pre-market high $3.96. Buy Stop at $3.97, limit $4.00 (3 cents above — a tighter limit because it is a low-priced stock). Stop at $3.87 (10 cents below = 1R). Target $4.22 (25 cents above = 2.5R). Order triggered on the open; profit target hit within the first 1-minute candle.

**Case Study 3 — FIVE.** High-priced stock at $97.94. Pre-market high $97.94. Buy Stop at $97.95, limit $98.00. Stop loss at $97.65 (30 cents = 1R). Target $98.55 or $98.71 (60–75 cents = 2R–2.5R). Triggered on the open; profit target hit on the next 1-minute candle. Note: for high-priced stocks, CFDs are recommended because the share count required by tight stops can otherwise exceed available cash. If CFDs are unavailable, use margin, or skip high-priced names entirely.

**Case Study 4 — ASTC.** Low-priced stock at $6.94. Pre-market high $6.94. Buy Stop $6.95, limit $6.98. Stop $6.85 (10 cents = 1R). Target $7.20 (25 cents = 2.5R). Order triggered on the open; target hit within the first 1-minute candle.

### 8.4.2 Setup 2: Break of the Pre-Market Pivot

Setup 2 is used when the price has sold off too far from the pre-market high for a clean Setup 1, but a new **pivot** has formed lower down.

**Pattern recognition.** On the 5-minute pre-market chart:

1. The price makes a pre-market high.
2. The price sells off and then forms a **pivot** (a small higher low / consolidation point) well below the high.
3. The price is now consolidating near that pivot — too far from the pre-market high to safely take a Setup 1.

**Order entry:**

* **Buy Stop Limit order** placed 1 cent above the pivot.
* **Limit:** 3–5 cents above the stop.
* **Stop loss:** below the pivot's low (10–50 cents below entry, or 1 ATR of the 1-minute candle).
* **Profit target:** at or just above the pre-market high (which acts as the next resistance). At minimum, the target must offer at least 1R before the pre-market high.

**Key rule:** The pivot must be at least 1R away from the pre-market high. If the pivot is too close to the pre-market high, the trade is too risky — price could easily hit the pre-market high, fail, and reverse down through the stop. Setup 1 is preferred in such cases.

**Once the trade is on**, the same management rules apply as Setup 1: shift the stop to entry at +1R, and cancel the order if the market opens down or escapes above the limit.

**Setup 2 Case Study — WB.** Pre-market high around $79. Pivot forms around $70.90. Buy Stop at $70.91, limit at $70.95. Stop at $70.60 (about 35 cents below = 1R). Target at $71.65 (75 cents above = ~2R). First 1-minute candle opens near $70, runs through $70.91, and reaches ~$72.80 within the candle — well above the $71.65 target. Closed for a 2R+ win.

### 8.4.3 Setup 3: New High of the Pre-Market Bull Flag

Setup 3 trades the **bull flag** pattern in pre-market. A bull flag consists of an **impulsive wave up** (a series of candles making higher highs — the "flagpole") followed by **corrective candles** (smaller candles making lower highs — the "flag").

**Pattern rules:**

* The impulse candles must make higher highs (a sequence of higher highs).
* There is no minimum number of impulse candles; even a single large bullish candle qualifies.
* The corrective candles must make **lower highs** (one, two, or three candles). They can be bullish (green) or bearish (red); what matters is the lower-high sequence.
* The corrective candles must **remain above the moving averages** (especially the 9 EMA or 20 EMA). If they break below the MAs, the pattern is invalid.
* Right before the open, the **last corrective candle** is making a lower high and finding support at a moving average.

**Order entry:**

* **Buy Stop Limit order** placed 1 cent above the high of the last pullback candle.
* **Limit:** 3–5 cents above the stop.
* **Stop loss:** below the low of the last pullback candle (10–50 cents below entry, or 1 ATR of the 1-minute candle).
* **Profit target:** 2R or 2.5R above entry, OR the pre-market high, whichever is closer.

**Critical filter:** There must be at least 1R of room before the pre-market high. If the pullback candle is too close to the pre-market high, take Setup 1 instead.

**Setup 3 Case Studies**

**Case Study 1 — MTBC.** Three impulse candles making higher highs, then two pullback candles making lower highs, resting near the 9 EMA. Buy Stop 1¢ above the high of the last pullback candle, stop below its low.

**Case Study 2 — CARA.** Impulse wave up to a pre-market high of $23.95. Pullback to the 20 EMA. Buy Stop above the last pullback high; stop below the low. Target at the pre-market high.

### 8.4.4 Common Order Management for Setups 1–3

* Place orders at 9:29 AM (or 9:27/9:28 if you are slow).
* Switch the chart to 1-minute candles after placing.
* Cancel if the market opens and price sells off for 3–5 minutes without recovering.
* Cancel if the price spikes above the entry but does not fill (limit was too low).
* Once filled and price moves 1R in favor, **shift stop loss to entry price** (break-even).
* Wait for the 2R or 2.5R target.

Because these orders are pre-placed before the open, hot buttons are not required. The classic TWS order entry is fast enough.


## 8.5 Pre-Market Case Study: Building the Watchlist and Placing Orders

This part walks through a live walkthrough of the routine from 9:07 AM Eastern (about 23 minutes before the open) on July 19. The instructor takes the viewer through every step of building the watchlist, marking pre-market highs, and placing orders.

### 8.5.1 Step 1 — Pulling the Pre-Market List

At 9:07 AM Eastern, the trader goes to **StockMarketWatch.com → Pre-Markets** and scrolls the gappers. From the initial list, three names stand out:

* **VRTX** — Vertex Pharmaceuticals.
* **SNI** — Scripps Networks.
* **XGTI** — a small-cap medical device / communications stock.

All three are gapping up more than 5% with five-figure pre-market volume.

### 8.5.2 Step 2 — Daily Chart Check

For each name, the daily chart is reviewed:

* **VRTX** is gapping up to $167.25 from a current ~$132. No major resistance overhead — clear skies ahead.
* **SNI** is gapping up toward $78 from ~$67. No resistance.
* **XGTI** is gapping up to $2.30 from $2.08, just above the 50 SMA and the 200 SMA. The 50 and 200 SMAs sit just below the gap-up level, but the price clears them.

All three pass the daily-chart screen.

### 8.5.3 Step 3 — News Catalyst Check

Next, news is verified on Finviz:

* **VRTX:** News from July 18 — Vertex shares soared 24% on all-time-high cystic fibrosis drug study results. Strong positive drug news. Average daily volume ~1.77 million; float ~247 million (high, but acceptable given the catalyst).
* **SNI:** Merger talks between Discovery Communications and Scripps Networks. Merger news is acceptable because it is *talks*, not a fixed buyout price — the stock could still run.
* **XGTI:** Received a $1.5M order for microwave communications equipment. Solid business catalyst. Float ~9 million (very small), average daily volume ~1.2 million — an ideal combination.

### 8.5.4 Step 4 — Pre-Market Chart Check

The 5-minute pre-market charts are reviewed on the GUNS Charts M5 grid:

* **VRTX:** A lot of pre-market activity and a pre-market high around $173. The price is far below the high — not an ideal Setup 1. Setup 2 (break of the pivot around $168.83) is the candidate entry.
* **SNI:** Pre-market high around $78, with the price consolidating just below it. Classic Setup 1.
* **XGTI:** Pre-market high around $2.50, with a recent pivot around $2.40. Setup 2 (break of pivot at $2.41).

A new name, **ALSK**, pops up late but its average volume is only 141,000 — below the 200,000 minimum — so it is skipped.

### 8.5.5 Step 5 — Placing Orders

By 9:20 AM (about 10 minutes before the open), the trader begins placing orders using Classic TWS.

**VRTX (~$160 stock):** 30¢ stop loss. Risking $100 = 333 shares. Entry: Buy Stop $168.84, limit $168.89. Bracket: stop loss $168.54 (30¢ below), profit target $169.59 (75¢ above = 2.5R). Transmit.

**SNI (~$70 stock):** 30¢ stop loss. Risking $100 = 333 shares. Entry: Buy Stop $78.02, limit $78.07. Bracket: stop $77.72, target $78.77 (75¢ above = 2.5R). Transmit.

**XGTI (~$2 stock):** 10¢ stop loss. Risking $100 = 1,000 shares. Entry: Buy Stop $2.41, limit $2.44. Bracket: stop $2.31, target $2.66 (25¢ above = 2.5R). Transmit.

By 9:27 AM, all three orders are in. The 5-minute charts are switched to 1-minute candles.

### 8.5.6 Step 6 — Live Open

At 9:30 AM:

* **VRTX** opens below the entry, sells off, and never triggers. The trader cancels after ~4 minutes.
* **XGTI** opens down and does not trigger. The trader watches for 5 minutes, then cancels.
* **SNI** opens near the high and almost immediately crosses $78.30 — the pre-market high has moved higher. The trader quickly adjusts the entry upward to **$78.35** to follow the rising high.

SNI then explodes through the entry, hits the 2.5R target at $78.77, and is sold at $79.05.

### 8.5.7 Step 7 — Result and Lessons

The day's tally: 3 orders placed, 2 did not trigger, 1 winner.

* **SNI:** Bought at $78.35, sold at $79.05. Profit = $0.70 × 333 shares = **$233** on a $100 risk.

Lessons reinforced:

* Risk $100 per trade maximum when starting out. An average of $200/day across 20 trading days = $4,000/month.
* Once experienced, scaling risk to $200 per trade can compound to $8,000/month.
* Practice, practice, practice — start small.

This case study demonstrates the entire workflow end-to-end: scanning, filtering on daily and pre-market charts, drawing resistance levels, sizing positions, placing bracket orders, switching to 1-minute candles, and managing the open.


## 8.6 GUNS Setups 4 and 5 — Post-Open Entries

Setups 4 and 5 are taken **after the market opens**, watching 1-minute price action (or 2-minute, or 5-minute, if that suits the trader). These are the setups where the speed of hot buttons becomes essential.

**Setup frequency.** Setups 1 and 4 together account for the vast majority of GUNS trades. Setup 4 is the post-open counterpart of Setup 1 — both trade the first bull flag after a strong impulsive move.

### 8.6.1 Setup 4: First Bull Flag After the Open

Setup 4 enters on the **first bull flag pattern** that forms after 9:30 AM, ideally within the first 5 to 30 minutes of the session.

**Bull flag refresher.** A bull flag = impulsive wave up (a series of candles making higher highs — the flagpole) + corrective pullback (one or more candles making lower highs — the flag). On 1-minute candles:

* **Impulse candles:** one or more candles making higher highs. Often 1–5 candles.
* **Pullback candles:** one or more candles making lower highs, ideally with **lower volume** than the impulse. The pullback should rest above the 9 EMA or 20 EMA (moving average support).

**Entry logic.** Wait for the first pullback candle (or inside bar) to close. Place a buy stop 1 cent above the high of that pullback candle. If the next candle makes a new high, the order triggers.

**Order entry:**

* **Buy Stop Limit order.** Stop = high of pullback + 1¢. Limit = stop + 5¢ (using hot button: e.g., `Buy 25¢`).
* **Stop loss:** below the low of the last pullback candle.
* **Profit target:** 2R to 2.5R above the entry.

**Adjusting the order in real time.** If, after placing the order, the next candle makes another lower high (i.e., a new pullback), cancel the original order and re-place it 1 cent above the new pullback candle's high. Continue adjusting until the order triggers, *provided the price remains above the moving averages*. If price breaks below the MAs, abandon Setup 4 on this stock.

**Hot button workflow:**

1. The first 1-minute candle closes → estimate its length (e.g., 20¢) by hovering the mouse.
2. Click the matching hot button (e.g., `Buy 25¢` — note that the smallest hot button should be 15¢ to account for spread).
3. Click on the high of the pullback candle on the chart. The bracket order is placed instantly: stop loss below the candle low, profit target 2R above entry.

**Pre-flight checks before clicking buy:**

* **Spread:** Check Level 2 quotes. Spread must be less than 10¢ (ideally ≤ 5¢). Wider spread = more risk on entry.
* **Resistance:** Is the pre-market high or a daily-chart moving average too close above the entry? If yes, there may not be 1R of room.
* **Level 2:** A large ask order above the entry acts as resistance and is a reason to skip the trade.
* **Volume on the pullback:** Ideally, volume declines during the pullback (sign of weak selling).

**Trade management rules (same as Setups 1–3):**

* The moment the trade is +1R, shift the stop loss to the entry price (risk-free).
* If a known resistance level (pre-market high, daily MA, or large Level 2 ask) is reached while in profit, also shift the stop to entry.
* If a big seller appears on Level 2 above the current price, exit early using the Close Position button.

**Important additional rules for Setup 4:**

* **Trade only the FIRST bull flag after the open.** Second and third bull flags are more risky because price has already run and the entry is at a higher level.
* **Pullback should be < 60% of the impulse width.** If the pullback retraces 100% of the impulse, the trend has failed — skip the trade.
* **Avoid stocks with 5¢ minimum tick intervals.** Some stocks only allow orders in 5¢ increments (e.g., $3.30, $3.35, $3.40). These create problems with tight stops and are avoided.
* **Entry must offer ≥ 1R of room before the next resistance.** If the pre-market high or daily MA is less than 1R above the entry, skip.

**Setup 4 Case Studies**

**Case 1.** First 1-minute candles make a strong impulsive wave (higher highs). After a pullback (red candle making a lower high), the trader places a Buy 15¢ hot-button order 1¢ above the pullback high. Entry at $5.98, stop $5.73, target $6.61. The next candle triggers and runs to target within 3–3.5 minutes. **2R win.**

**Case 2 — ASTC.** Two bullish candles form the impulse, then a pullback candle (bullish pin bar) prints at the 9 EMA support. The candle is 40¢ long, so the trader clicks `Buy 40¢`. Entry triggers on the next candle; target hit within 1 minute. **2R win.**

**Case 3 — OPHT.** Three impulsive candles (higher highs) form the flagpole, followed by a pullback candle. The first entry placed above the first pullback high does not trigger because the next candle prints another lower high. Trader cancels and re-places above the new pullback candle's high (~15¢ candle), clicks `Buy 15¢`. Triggers on the next candle and hits 2R target in 3 minutes.

**Case 4 — SDOT.** Three impulsive candles, then a 20¢ pullback. Trader clicks `Buy 20¢`, places order above the pullback high. Triggers on the next candle, runs 18–19 minutes (a long day-trade), and hits 2R target.

**Case 5 — SCVL.** First 1-minute candle, pullback candle forming a lower high. Order placed above pullback does not trigger as price forms another lower high. Order canceled and re-placed above the new candle. Triggers, target hit in 1 minute. **2R win.**

**Case 6 — CPAH.** Five impulsive candles, then first pullback candle. Buy order placed above first pullback does not trigger (next candle prints lower high + lower low). Order canceled and re-placed above new candle (20¢). Triggers on next candle; target hit in 5–6 minutes.

**Case 7 — AAPL (2-minute candle example).** Four impulsive candles, then pullback. Trader places buy order above first pullback — does not trigger. New pullback forms → re-places. New pullback forms again → re-places. Final candle sits on the 9 EMA support. Buy order triggers, target hit. Volume characteristic: high volume on impulse candles, low volume on pullback, then high volume on the breakout — "strong buying, weak selling, strong buying."

**Case 8 — VRAY (5-minute candle example).** First 5-minute candle is the impulse; next 5-minute candle is the first inside bar (lower high). Trader clicks `Buy 40¢`, places order above the inside bar high. Triggers, target hit within three 5-minute candles (15 minutes).

### 8.6.2 Setup 5: Break of the First 1-Minute Candle

Setup 5 is the simplest GUNS setup. It triggers at exactly 9:31 AM Eastern, the moment the first 1-minute candle of the session closes.

**Strict rules:**

* **Time frame must be 1-minute** (Setup 5 only).
* The first 1-minute candle (9:30–9:31) must be a **bullish candle** that closes **above all moving averages**.
* The first 1-minute candle must be **small or normal in size** — not too big. The smaller the candle relative to recent pre-market candles, the better. Huge first candles mean the move has already happened.

**Order entry:**

* **Buy Stop Limit order** placed 1 cent above the high of the first 1-minute candle.
* **Limit:** 5 cents above the stop.
* **Stop loss:** below the low of the first 1-minute candle.
* **Profit target:** 2R to 2.5R above the entry.

**Pre-flight checks (same as Setup 4):**

* Spread ≤ 10¢ (ideally ≤ 5¢).
* ≥ 1R of room to next resistance (pre-market high, daily MA).
* No huge Level 2 ask immediately above the entry.

**Hot button workflow.** As soon as the first 1-minute candle closes (9:31 AM), the trader hovers over the candle to estimate length (e.g., 20¢). Click `Buy 20¢`. Click on the candle's high. The order is live.

**Setup 5 Case Studies**

**Case 1 — OPHT.** First 1-minute candle: bullish, closes above MAs, ~20¢ long. Trader clicks `Buy 20¢`, places order above the high. Triggers on next candle. Profit target (40¢ above entry) hit in ~15 minutes. **2R win.**

**Case 2 — ATU.** First 1-minute candle: bullish, above MAs, ~30¢ long. Trader clicks `Buy 30¢`, places order at $14.21. Stop $13.91 (30¢ below). Target $14.81 (60¢ above = 2R). Triggers on next candle; target hit 4 candles (4 minutes) later. **2R win.**

### 8.6.3 Setup Cascading — Multiple Setups on the Same Stock

A single stock can morph from Setup 1 (pre-market) to Setup 5 (first 1-min candle) to Setup 4 (first bull flag) within the same session. A fast trader can scalp the same name three times in a morning:

* 9:29 — Setup 1 (break of pre-market high at the open).
* 9:31 — Setup 5 (break of the first 1-minute candle, after Setup 1 has stopped out or hit target).
* 9:35+ — Setup 4 (first bull flag pullback).

### 8.6.4 Live Scanner-Driven Trade — CALY

On one trading day, none of the watchlist stocks morph into a Setup 4/5. At 9:32 AM, **CALY** appears on the GUNS scanner: a $2 stock gapping up 27% on high volume. The trader pulls up the 1-minute chart and sees CALY has already printed two bullish 1-minute candles. Setup 5 has already passed, so the trader waits for the first pullback (lower high), measures ~25¢, clicks `Buy 25¢`, and places the order at $2.75 with stop at $2.50. Order triggers on the next candle, runs sideways for a while, eventually hits the $3.00 (50¢ = 2R) profit target — but only after nearly an hour of holding. **2R win.**

### 8.6.5 General Notes on Setups 4 and 5

* Hot buttons are **mandatory** for Setup 4 and 5 — orders must be placed within seconds.
* If the watchlist does not produce setups, the scanner is the backup source.
* Volume bars should show: rising volume on the impulse, falling volume on the pullback, rising volume on the breakout.
* Don't fight the spread, the MAs, or Level 2 resistance — if any one of these blocks the trade, move on to the next name.

---


## 8.7 Reading Level 2 Quotes (Market Depth)

Level 2 quotes — also called **market depth** — display the queue of buyers and sellers at each price level. They are useful **only for intraday trading** (GUNS), and the instructor consults them specifically when deciding whether to take Setups 4 and 5, and when deciding whether to exit a position early.

### 8.7.1 The Anatomy of Level 2

For any stock (e.g., GORO), the Level 2 window shows two columns:

* **Bid column (left):** All the buyers queuing up, each willing to buy at a certain price. Higher bids are on top (those willing to pay more get priority).
* **Ask column (right):** All the sellers queuing up, each willing to sell at a certain price. Lower asks are on top (those willing to accept less get priority).

Each row represents a price level. The numbers shown are in hundreds — a "1" means 100 shares; a "21" means 2,100 shares.

**Level 1** = just the top bid and the top ask (the inside market). **Level 2** = the full ladder of bids and asks beyond the inside market.

### 8.7.2 The Spread

The **spread** is the difference between the lowest ask and the highest bid. The ask is always higher than the bid. A tight spread (e.g., 1¢–5¢) is essential for GUNS — the moment a buy fills at the ask, the position can be sold at the bid, and that bid-ask difference is an instant loss.

**Spread rules:**

* ≤ 5¢ spread = ideal.
* 5–10¢ spread = acceptable.
* > 10¢ spread = avoid. Half of a 20¢ stop loss evaporates the moment you cross a 10¢ spread.

### 8.7.3 How to Buy and Sell on Level 2

* **Buying at the ask:** A market buy fills at the lowest ask. This is what happens when a buy stop limit order triggers — it converts to a market order and fills at the ask price.
* **Buying at the bid:** A limit buy placed at the bid joins the queue of buyers at that price and waits for a seller to hit it.
* **Buying in the middle:** A limit buy placed between the bid and ask sits in the queue.
* **Selling at the bid:** A market sell fills at the highest bid. This is how a stop loss or a manual exit fills — instant exit at the bid.
* **Selling at the ask:** A limit sell at the ask joins the seller queue.

### 8.7.4 Reading Level 2 Before a Long Entry

Before clicking the buy button on a Setup 4 or 5, four checks are made on Level 2:

1. **Spread is tight.** Less than 10¢, ideally ≤ 5¢.
2. **Bid levels are close together.** If the price is at $7.23, the next bid should be at $7.22, then $7.21, then $7.20 — bids at every 1¢. This means buying volume is stacked tightly and provides support.
3. **Bids are large.** Bid sizes (in hundreds of shares) should be substantial — e.g., 22 = 2,200 shares, 25 = 2,500 shares. Big bids act as support levels.
4. **No large ask above the entry.** A large ask above the planned entry acts as resistance. If a market maker is sitting on a huge sell order 1¢ above your entry, the price will likely stall there and reverse.

### 8.7.5 The Dangers of a Thin Bid Stack

If the bid ladder looks like this:

| Bid Price | Bid Size |
| --- | --- |
| $2.55 | 200 |
| $2.44 | 100 |
| $2.40 | 100 |
| $2.16 | 200 |

…then the moment a small buyer lifts the 200 shares at $2.55, there is no support until $2.44, then $2.40, then $2.16. The price can drop through all of these and hit the trader's stop loss. **This is a setup to avoid.** Wide bid spacing + small bid sizes = no support.

### 8.7.6 Watching a Large Ask Absorb

If a large ask (e.g., 14 = 14,000 shares) is sitting at $12.09, and the trader wants to buy at $12.08, the trade is risky. The seller at $12.09 is a wall. Two strategies:

* **Wait for absorption.** Watch the ask size at $12.09 shrink from 140 → 100 → 50 → 0 as buyers absorb the seller's shares. Once absorbed, enter the long.
* **Skip the trade.** If the wall persists, the price is unlikely to break through.

### 8.7.7 Reading Level 2 for an Early Exit

Once in a profitable Setup 4 or 5 trade, Level 2 is checked again. If the profit target is at $15.00 but a huge seller appears at $14.90, the trader exits *before* the price hits the wall:

* Click **Close Position** on the hot button panel.
* The position is flattened at the bid (market sell).
* The trader locks in the profit (less than the 2R target, but more than the eventual reversal would have yielded).

### 8.7.8 Decision Summary

* **Enter the trade** when: tight spread (< 10¢), tight bid spacing with large bid sizes, no large ask immediately above entry.
* **Skip the trade** when: spread too wide, thin bid stack, large ask immediately above entry.
* **Exit the trade early** when: a large ask appears between the current price and the profit target, *or* bid sizes below the current price start to disappear.

A large ask *combined* with large bids that absorb the shares over time is acceptable — the wall is being consumed, and the breakout is more likely to succeed.

---


## 8.8 Live Trading Examples — Full-Day Walkthrough

This final part follows a complete live trading day, from the 8:51 AM Eastern start of pre-market prep to the post-close debrief. The trader runs through every step of the GUNS routine on a real day.

### 8.8.1 Pre-Market Prep (8:51 AM Eastern)

The trader pulls up **StockMarketWatch.com → Pre-Markets** and the **IB GUNS Scanner** side-by-side. The initial candidates include:

* **IHT** — pre-market volume above 30K.
* **NSYS** — pre-market volume above 30K.
* **TSLA** — Tesla.
* **EGP** — appears on the scanner only (not on StockMarketWatch).
* **BCRX** — small gap, marginal.
* **DXCM** — earnings catalyst.
* **ESIO** — earnings catalyst.
* **BIOC** — below MA resistance on daily; deprioritized.

The trader selects the **top 4 by volume** for the focused watchlist: **TSLA, NSYS, BCRX, and ESIO**, with DXCM also kept on the radar.

### 8.8.2 Per-Ticker Analysis

**TSLA (Tesla).** Earnings beat driving the gap-up. Daily chart: gapping up, no resistance above the MAs. 5-minute pre-market chart: price consolidating very near the pre-market high of $331.76. **Candidate for Setup 1.** Pre-market high marked on the chart at $331.76. The 1-minute ATR for TSLA is roughly $2, suggesting a $2 stop loss for any Setup 1 entry.

**DXCM.** Earnings announcement (just before the open). Daily chart gapping up above all MAs. 5-minute pre-market chart: price consolidating near the pre-market high of $118.5 (drawn at $118.59). **Setup 1 candidate.**

**ESIO.** Earnings beat — $0.96 EPS + strong first-quarter physical results. Daily chart gapping up above resistance. 5-minute pre-market chart: price consolidating near the pre-market high of $21.50. **Setup 1 candidate.**

**EGP.** Merger news — merging with another company. Daily chart on a very clear uptrend. 5-minute chart: price far from the pre-market high (~$23). **No Setup 1.** Watched for Setup 4 or 5 after the open. Pre-market high marked at $23.

**IHT.** Selling some property at a profit. Not great news, but news nonetheless. Daily chart gapping up above resistance. 5-minute pre-market chart: pre-market high ~$2.70; price far below it. **No Setup 1 for now; watch for Setup 4 or 5.** Pre-market high marked.

**BIOC.** No news. Below MA resistance on the daily. Sold off far from the pre-market high. **Removed from watchlist.**

**BCRX.** Selling new shares (offering). 5-minute pre-market chart is pretty good — pre-market high ~$5.80, price right at the high. **Setup 1 candidate** (depending on news strength). Verified via Finviz: main news is the share offering.

**NSYS.** Up 10%. Daily chart clean above all resistance. 5-minute chart: below all MAs. **No Setup 1 or 2.** Possible Setup 4 or 5 if a pattern forms after the open.

### 8.8.3 Filtering Down to Two Orders

By ~9:25 AM, four stocks are near the pre-market high — TSLA, DXCM, ESIO, and BCRX — but the trader only places orders on **two** because managing four open orders simultaneously is too difficult (each requires shifting stop loss to break-even the moment it hits +1R).

The two chosen are **W** (an alias used in this segment for one of the names) and **ESIO**, because they are closest to their pre-market highs.

For position sizing, the trader risks $100 per trade:

* **W (high-priced ~$118 stock):** CFD used because cash would be tied up. Buy Stop $118.29 (1¢ above the pre-market high). Limit $118.34. Stop loss $116.99 (1.30 below = ~1R). Profit target $119.59 (1.30 above = 2R). Shares sized to risk $100.
* **ESIO:** Buy Stop $21.76 (1¢ above pre-market high). Limit $21.80. Stop loss $21.56 (20¢ below = 1R). Target $22.16 (40¢ above = 2R). 500 shares to risk $100.

Orders are placed at 9:27 AM. Charts switched to 1-minute at 9:29 AM.

### 8.8.4 The Open

At 9:30 AM Eastern:

* **W** opens around $118.30 — just below the entry. The first 1-minute candle prints but does not exceed the pre-market high. Price then sells off. The trader cancels the W order after a few minutes.
* **ESIO** opens down. The first 1-minute candle does not trigger the entry. Price sells off. The trader cancels the ESIO order.

Both Setup 1 orders are canceled. Notably, both names briefly hit the pre-market high within the first few minutes and then reversed — confirming that the pre-market high *does* act as resistance, and that entering later would have been risky.

### 8.8.5 Switch to Setup 4/5 Mode

With both watchlist Setups 1 gone, the trader watches the scanner. A new name appears: **EXEL** (Executex or similar). EXEL is not on the original watchlist — it just popped onto the scanner with high volume.

EXEL on the 1-minute chart shows two strong bullish candles (higher highs) followed by a doji and a pullback (lower high). This is the first bull flag.

The trader hovers over the pullback candle, measures ~20–25¢, clicks the **Buy 20¢** hot button, and clicks the high of the pullback candle. The bracket is placed: entry ~$21.90, stop ~$21.62, target ~$22.42.

**Spread warning:** the bid-ask spread on EXEL was 75¢–91¢ — too wide. In retrospect, the trader should not have entered. He entered anyway because of eagerness ("I want to get in"). The trade worked out, but this is a cautionary note: **do not take trades with spreads wider than 10¢.**

EXEL trades sideways, then begins to climb. At +1R ($22.10), the trader shifts the stop to entry ($21.90) — risk-free. EXEL then pulls back, hits the stop at break-even, and reverses — but only briefly. It then runs up to the $22.42 target and beyond. The trader exits on the second push for the full 2R. **2R win.**

### 8.8.6 The Second Trade — ETP

While EXEL was developing, the trader noticed **ETP** was #1 on the scanner (highest volume). ETP had already run hard by the time the trader looked at it, so Setup 5 had passed. The first 1-minute candle of ETP was huge, then came a pullback forming a lower high — Setup 4 candidate.

The pullback candle was ~25¢ long. Trader clicks **Buy 25¢**, places order at $23.48 (1¢ above the pullback high). Stop $23.24 (24¢ below = ~1R). Target $23.89 (~41¢ above = ~1.7R).

Order triggers on the next candle. Price runs up, hits +1R, and the trader shifts the stop to entry — **risk-free**. Price then reverses, hits the stop at break-even ($23.48), and the trader exits flat.

Moments later, ETP resumes its run and hits the profit target at $23.89 — without the trader. Frustrating but acceptable: a break-even trade is a zero-R trade, not a loss.

### 8.8.7 End-of-Day Debrief

The day's results:

* **EXEL:** +2R (winner).
* **ETP:** 0R (break-even after stop shifted).
* **W, ESIO:** Canceled before triggering.

Net for the day: **+2R.** On a $10,000 account risking 1% per trade, that is +$200. Across 20 trading days, that compounds to roughly +20R per month, or a 20% monthly return on capital.

If the trader had risked 2% per trade, the same day yields +$400, or 40% monthly.

The day also illustrated:

* **Why a tight watchlist matters** — only two orders were placed, both manageable.
* **Why scanner-driven trades are essential** — EXEL and ETP were not on the original pre-market watchlist but became the day's two best opportunities.
* **Why break-even exits are okay** — ETP stopped at entry after the stop was shifted, and that was the right call given the reversal pattern.
* **The discipline rule:** a losing trade is −1R; a winning trade can be +2R or more. With one winner and one scratch per day on average, the trader is +1R per day.

### 8.8.8 Key Takeaways from the Live Session

1. Start building the watchlist by 8:50–9:00 AM Eastern (8:50–9:00 PM Singapore). Use both StockMarketWatch.com and the IB GUNS scanner.
2. Filter to 4–6 names using price ≥ $1.50, gap ≥ 5%, volume ≥ 30,000, low float, and a strong catalyst.
3. Mark the pre-market high on every chart as resistance.
4. Use 1-minute ATR for stop distance when possible.
5. Limit open orders to a maximum of two to keep management feasible.
6. At 9:29 AM, switch all charts to 1-minute candles.
7. If Setup 1 setups do not trigger within 3–5 minutes of the open, cancel and pivot to Setup 4 / Setup 5.
8. Use hot buttons for any post-open entry.
9. Always check the bid-ask spread (≤ 10¢) and Level 2 before clicking buy.
10. Shift stop to entry at +1R. Exit early if a large ask appears on Level 2.
11. End the day if you have a winner — don't give back profits by forcing more trades.

This concludes the GUNS lesson. With the routine mastered, a trader can run GUNS from Monday to Friday, executing 1–4 trades per day with a 2R target and disciplined risk management.

---

## 8.9 Lesson Summary

GUNS is a focused, repeatable day-trading strategy built on five setups:

| Setup | Trigger | Entry | Stop | Target |
| --- | --- | --- | --- | --- |
| **1** | Break of pre-market high at the open | Buy Stop 1¢ above pre-market high | 10–50¢ below (or 1-min ATR) | 2R–2.5R above entry |
| **2** | Break of pre-market pivot at the open | Buy Stop 1¢ above pivot | Below pivot low | Pre-market high or 2R |
| **3** | Break of last pullback candle in pre-market bull flag | Buy Stop 1¢ above pullback high | Below pullback low | 2R–2.5R or pre-market high |
| **4** | Break of first 1-minute pullback after open | Buy Stop 1¢ above pullback high | Below pullback low | 2R–2.5R |
| **5** | Break of first 1-minute candle at 9:31 AM | Buy Stop 1¢ above first candle high | Below first candle low | 2R–2.5R |

**Core principles:**

* Trade only stocks gapping up ≥ 5% on ≥ 30K pre-market volume, ≥ $1.50, with low float and a real news catalyst.
* Mark the pre-market high as the first resistance and ensure ≥ 1R of room before the next resistance.
* Use the 1-minute ATR for accurate stop distances.
* Use hot buttons for any post-open trade; use classic TWS for pre-market orders placed at 9:27–9:29 AM.
* Manage risk: shift stop to break-even at +1R; close early if Level 2 shows a large ask above the trade.
* Watch the spread (≤ 10¢), bid stack (tight, large), and ask stack (no big walls above entry).
* Cancel orders if the open fails to trigger within 3–5 minutes; pivot to Setups 4/5.
* Practice on small size until consistent; scale risk only after proven edge.

GUNS is the instructor's most consistently profitable strategy, traded Monday to Friday, with monthly returns that can be significant when the rules are followed strictly.
