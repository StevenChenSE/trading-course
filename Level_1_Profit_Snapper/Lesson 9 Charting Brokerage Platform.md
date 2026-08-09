---
title: "Charting Brokerage Platform"
---

This chapter is a **hands-on software walkthrough**. Its purpose is to make sure your charting platform, your scanner, and your broker are all configured exactly the way the instructor uses them, so the strategies you have learned in earlier lessons can be applied mechanically without second-guessing the software.

You will configure the following four pieces of software:

* **TC2000** (version 12 or 18) — for charting and scanning.
* **Thinkorswim (TOS)** — for charting, drawing, scanning and intra-day analysis.
* **Interactive Brokers Trader Workstation (TWS)** — for placing and managing orders.
* **The IB / Halifax mobile app** — for placing orders away from your desktop.

> *"Set up your charts the way you see it here and you're good to go."*

---

## 12.1 Choosing a Charting Platform

Throughout the course, the instructor uses and recommends two pieces of charting software side-by-side. Each is good at something different.

| Platform | Best For | Notes |
|----------|----------|-------|
| **TC2000** | Precision charting, high-quality scans, fast workflow | Paid (Gold plan ~$30/month). The instructor's preferred charting platform. |
| **Thinkorswim (TOS)** | Free charting, built-in scanner, intra-day (Level 2, hot-button trading) | Free with any funded TD Ameritrade account. Excellent screening built in. |

The two applications cover all the work you do for the strategies in this course — they are **complementary, not competing**:

* Use **TC2000** for clean daily charts, drawing support/resistance, and running custom bounce scans (PCF Easy Scan language).
* Use **TOS** for built-in scanning with thinkorswim script studies, hot-button trading, Level 2 market depth, and watching earnings announcements on the chart.

Both platforms are configured with the **same preferences** (logarithmic scale, candlesticks, bullish/white or green, bearish/red, daily timeframe). Once you have both configured to your taste, you can swap between them without re-learning the interface.

---

## 12.2 TC2000 — Installing and Configuring the Charts

### 12.2.1 Download and Plan Selection

1. Go to **tc2000.com** and download TC2000.
2. Choose a plan:
   * **Gold plan — approximately $30/month** is the most popular and the one the instructor uses.
   * TC2000 also offers a brokerage plan, but you only need it if you want to place trades inside TC2000. You can run the charting and scanner with the charting-only plan.

The instructor uses TC2000 mainly as a **charting and screening** tool — orders are placed separately at Interactive Brokers or Halifax.

### 12.2.2 Two Versions — v12 (Mac) and v18 (PC)

There are two versions of TC2000 still in active use:

* **Version 12** runs on macOS as a native application. The instructor runs this on his Mac.
* **Version 18** is the current PC-only version. There is no Mac build for v18.

> **If you are on a Mac**, you have two options for using v18:
> 1. Run TC2000 v18 inside a virtual PC environment such as **Parallels Desktop** (the same setup the instructor uses on his Mac).
> 2. Stay on v12, which is available today only via the TC2000 web browser interface.

The v18 menu layout is slightly different from v12, but the indicators, scans and templates are the same. The two tutorials below cover both versions side-by-side so you can follow whichever one matches what is installed on your machine.

### 12.2.3 Initial Chart Setup — V12

The first time you open TC2000, your charts may be **all green** or **all black** with no obvious up/down distinction. You need to configure the chart style before doing anything else.

1. Open a new chart (`File` → `New Chart` or click `New`).
2. **Logarithmic scale:** Right-click the chart → `Chart Settings` → check **Log** (Logarithmic scaling) under `Scaling`. TC2000 calls this "Log" charts; you want logarithmic scaling on.
3. **Background:** Under `Properties` → set the chart **background to white**. This is a personal preference — the instructor finds white easier on the eyes for long sessions.
4. **Plot style:** Under `Plot Style`, choose **Candlesticks**, not bars or lines.
5. **Candle colors:**
   * **Color based on:** Open vs Close.
   * **Up bars (bullish): Green** — set the up-candle body color to green.
   * **Down bars (bearish): Red** — set the down-candle body color to red.
   * **Fill based on:** Open vs Close — both up bars and down bars are filled (solid bodies).
6. Click **OK** to apply.

You should now have the clean black/white background with bright **green bullish and red bearish** candlesticks — the same chart you see throughout the course.

### 12.2.4 Initial Chart Setup — V18

V18 uses a slightly different menu hierarchy. To get the same result:

1. **Create the chart:** Click `New` → `Chart`. A blank chart appears. Drag the edges to expand it.
2. **Right-click the chart → `Edit Chart Properties`** (not "Chart Settings" — the wording changed from v12).
3. Under the **Price Style** tab:
   * `Plot Style` → **Candlesticks**.
   * `Color Based On` → **Open vs Close**.
   * Up bars → Green; down bars → Red.
   * Fill based on **Open vs Close**; **up bars filled** and **down bars filled**.
4. Under the **Scaling** tab: select **Logarithmic** scale.
5. Under the **Color/Grid** tab (or `Appearance`, depending on build): set the background to **white**.
6. Click **OK** to apply.

Always select **Daily candles** at the top of the chart and confirm it stays on **Daily**.

### 12.2.5 Drawing Support, Resistance, Trendlines and Fibonacci

For all the strategies in this course, you must be able to draw the following on any chart:

* **Horizontal support and resistance lines.**
* **Trend lines** (connecting at least three swing points).
* **Fibonacci retracements and extensions** (used in Level 2; available in TC2000 anyway).

To draw them, open the **Drawing Tools** panel — either the floating toolbox or the icons along the top of the chart. The basic icons are:

| Icon | Tool |
|------|------|
| Horizontal Line | Draw a horizontal level (support / resistance). |
| Trend Line | Connect at least three price points with a line. |
| Fibonacci Retracement | Click the start of an impulse move, then the end. The 50%, 61.8%, etc. levels appear automatically. |

To draw a horizontal support/resistance line:

1. Click the **horizontal line** tool.
2. Click anywhere on the chart at the desired price.
3. Click again on a second candle to place it (or click and drag).
4. The line is automatically tagged with the **ticker symbol** of the stock in the chart (you can rename it later).
5. **Move / edit:** click and drag a placed line to adjust.
6. **Delete:** right-click the line → `Delete Drawing`. To remove all drawings at once, right-click the chart → `Remove All Drawings`.

> *Tip:* Trend lines must connect **at least three swing points** to be valid. A line drawn between two points is not a trend line.

### 12.2.6 Measuring Price and Percentage Range

Click any candle on the chart and a small data box appears with **O, H, L, C** (Open, High, Low, Close). You can also click and drag to measure distance:

* **Click and drag vertically** across any range of the chart. The box displays the dollar distance and the **percentage change** for that range.
* This is extremely useful for quick sizing calculations — e.g. is the retracement 2% or 12%? The percentage change tells you instantly.

This measurement tool is on both v12 and v18 and works the same way.

### 12.2.7 Timeframe Selection — Daily Candles Only

For Level 1 you will **only use daily candles**. Level 2 introduces 5-minute and 1-minute candles for intra-day trading.

In TC2000, the timeframe selector is the row of buttons or the drop-down at the top of the chart:

* Click **`Daily`** or **`1 D`** to load daily candles.
* You can also click `YTD`, `1 Y`, `5 Y`, etc. to change the **range** — the candle size remains daily.

> Always confirm you are on **Daily** before drawing support/resistance or applying indicators. Intra-day charts look similar but the meaning of every support/resistance level is different.

### 12.2.8 Adding Indicators — Moving Averages

You add every indicator by clicking the **`+`** icon (or `Add Plot` in v18). The instructor's bounce setup uses the following:

#### Bounce Setup (v12 — recommended configuration)

1. Click `+` → type `moving average` → choose **`Simple Moving Average`** → `Add to Chart`. It defaults to a 50-period MA.
2. Click `+` → type `moving average` → choose **`Simple Moving Average`** → `Add to Chart`. Click the new line → `Edit`. Change **Period to 200**, change **color to red**, click `OK`.
3. Click `+` → type `moving average` → choose **Exponential Moving Average**. Change Period to **20 EMA**, set color to red, and under `Line Style` choose **dotted line**. The dotted style visually separates the EMA from the SMAs.

You should now see:

* **20 EMA** — red, dotted.
* **50 SMA** — default color (often blue or yellow).
* **200 SMA** — red, solid.

#### Bounce Setup (v18 — same idea, slightly different layout)

1. Right-click the chart → `Edit Chart Properties` → **`Add Plot`** tab.
2. Search **`Moving Average`** → choose **Exponential** → `Add to Chart`. By default it gives you a 50 EMA. Click `Edit` and set Period = **18**, color = blue, line style = dotted.
3. Add another Exponential MA → set to **50** EMA (color your preference).
4. Add another Exponential MA → set to **100** EMA (color orange).
5. Add another Exponential MA → set to **200** EMA (color red).
6. Add **MACD** with parameters **5, 50, 100** (instead of the default 12-26-9). Change the slow-line plot color to black.
7. Add **Stochastics** with **%K = 5, %D = 3, Exponential**. (v18 build defaults may show 12-3-5 — change to 5-3-3 exponential.)

> *Note:* The instructor on v12 uses 20 / 50 / 200 EMAs. The instructor on v18 also shows an alternative configuration with 18 / 50 / 100 / 200 + MACD (5,50,100) + Stochastics (5,3,3 exp) — both setups work. The exact periods matter less than using *consistent* levels across all your charts.

### 12.2.9 Saving Templates and Switching Setups

Once your indicators look right, save the chart so you do not have to build it again:

1. Right-click the chart → **`Save Template`** (v12) or **`Save Chart`** (v18).
2. Name the template: e.g. **`BounceSetup`**, **`BMR`**, **`IntradayGap`**, etc.

To apply a saved template:

1. Open the template manager from the chart toolbar.
2. Click **`BounceSetup`** (or whichever template you saved).
3. The indicator layout, colors, and candle style all reload.

You can save as many templates as you like — one per strategy you trade. The instructor pre-builds templates for every strategy in the course so that one click switches the whole chart.

### 12.2.10 Custom Watchlists and Columns

You will run all your scans against a **watchlist** (not against the entire universe of US stocks). To set this up:

1. From the left panel, click `New Watchlist` and give it a name (e.g. `High RS`, `Tech`, `BounceCandidates`).
2. Click `Add Symbols` to paste tickers from your momentum source list (Investors.com 85/85, Finviz export, etc.).
3. Build as many watchlists as you need, and use the **positioning icon** to place them side-by-side or stacked.

For each watchlist, configure the **columns** to display the data you actually look at:

| Column | Why You Need It |
|--------|-----------------|
| **Symbol** | Always required. |
| **Price** (Last) | Current price. |
| **Float** (Latest Float) | Shares available for trading. Filters out low-float junk. |
| **Average Volume 60D** | Custom 60-day average volume (created below). Filters illiquid names. |
| **% Change Today** | Useful for momentum scanners. |

The four core swing-trading columns are **Symbol, Price, Latest Float, Avg Volume 60D**. The **60-day average volume** column must be created manually:

1. Add a new **Value Column**.
2. Type the formula **`AVGV60`** (TC2000 PCF language).
3. Click `OK`. The column appears.

> *Note:* TC2000 v12 ships with most of these columns built-in except for `AVGV60`. v18 has them all but you must add them yourself.

### 12.2.11 Multi-Chart Layout

For the bounce strategy you only need **one chart at a time**. When you want to compare two setups side-by-side:

1. `File` → `New Chart`. A new floating chart appears.
2. Right-click it → apply the **`BounceSetup`** template.
3. Use the **positioning icon** (the four-arrow icon) to dock the new chart **on top of, below, to the left of, or to the right of** the existing chart, or to **swap** with it.
4. Repeat for 3- or 4-chart grid layouts.

You can also resize the panes and save the whole window layout under `Workspace`.

### 12.2.12 Adding Sector and Industry Indices

Whenever you trade a stock, also pull up the **sector** and **industry** index charts. In v18:

1. Right-click the chart → `Add Plot` → search `Industries`.
2. Add **`Sector`** as an overlay plot (creates a small panel below the stock chart).
3. Add **`Industry Index`** as another overlay plot.
4. Optionally add a Moving Average to each panel (right-click → `Add Plot` → `Moving Average`, but apply it to the Sector/Industry panel, not the stock).

The main chart (the stock) should always be the **largest pane**. The sector and industry panels should be small reference panels. The instructor's golden rule: **always know the trend of your stock's sector before taking the trade.**

---

## 12.3 TC2000 — Custom Scans (Easy Scan / PCF)

The instructor has authored a full set of **bounce scans** that you can download from the Lesson 9 resources area. There are 12 scans in total:

| Family | Period | Direction | Count |
|--------|--------|-----------|-------|
| Bounce Long (Two-Candle Reversal) | 18 / 50 / 100 / 150 / 200 MA | Long | 5 |
| Bounce Short (Two-Candle Reversal) | 18 / 50 / 100 / 150 / 200 MA | Short | 5 |
| Trade-Through Long | 18 / 50 / 100 MA | Long | 3 |
| Trade-Through Short | 18 / 50 / 100 MA | Short | 3 |

> Levels above 100 are optional. The instructor usually focuses on 18, 50 and 100 when first learning the strategy. 150 and 200 are useful for slower-moving, larger-cap stocks.

For Level 1 the priority is the **18 / 50 / 100** family, both long and short, both two-candle and trade-through — 12 scans in total.

### 12.3.1 Installing a Bounce Scan in v18 (Easy Scan)

1. Open the downloaded bounce file from the resources page. Each scan lives in its own text file (e.g. `18_bounce_long.txt`). Open it with **Notepad** (Windows) or **TextEdit** (Mac).
2. In TC2000 v18, click **`Easy Scan`** in the top toolbar (in v12 this is via the **Library**).
3. Under **List to Scan**, select **`All US Common Stocks`** (or your chosen watchlist).
4. Click **`New Condition`** → **`Write New Formula`**.
5. **Type the name** of the scan (e.g. `18 Bounce Long` — note: the instructor uses `Demo` in the tutorial because his copy is already saved).
6. **Open the formula file**, `Edit` → `Select All` → `Edit` → `Copy`. Close the file.
7. **Back in TC2000**, click inside the formula box → right-click → **`Paste`**. The full PCF formula appears.
8. Verify that the **Timeframe** is set to **Daily** and the **"Is true now"** flag is checked.
9. Click **`Save`**. The scan appears in your Easy Scan dropdown.
10. To run: select it from the dropdown → click the **lightning-bolt "Scan" button** (`Scan in a New Window`). It opens a scan-results window you can dock anywhere.

### 12.3.2 Installing the Same Scans in v12 (Library)

The v12 workflow uses the **Library** instead of Easy Scan:

1. Click the **`Library`** tab.
2. Click **`PCF Formula`** → paste the formula and name it.
3. Save it.
4. To scan: open **Easy Scan** → reference your saved PCF formula.

### 12.3.3 Building the Scan Results Layout (v18)

After running a scan, the results window floats. You need to position it inside your workspace:

1. Click the **move-window** icon (the four-arrow / position icon) on the new scan-results window.
2. Choose to dock it **on top, on the left, on the right, below** the existing watchlist, or **swap**.
3. Save the layout once you are happy with it.

You will run **all 12 scans every day before the market opens** (or after the close) and produce a working list of stocks that meet the structural criteria. You then go to each chart and confirm the **MACD, Stochastics, sector, and entry-rule** filters one by one.

### 12.3.4 Configuring the Watchlist Columns for Scanning

For every scan results window, configure these columns:

| Column | Purpose |
|--------|---------|
| Symbol | Identify ticker. |
| Price (Last) | Current price. |
| Latest Float | Liquidity filter. |
| Average Volume 60D | Custom column (formula `AVGV60`). Liquidity filter. |
| Volume (today) | Intraday volume (only relevant for intra-day in Level 2). |

For pure swing trading you only need the first four. Add a fifth column (today's volume) only when you move to intra-day setups in Level 2.

To create the **`Average Volume 60D`** column:

1. In the scan-results header right-click → **`Add Value Column`**.
2. Type the column name: `AVGV60`.
3. Click `OK`.

### 12.3.5 Sorting and Filtering Scan Results

After running a scan, click any column header to **sort** the rows by that column. Useful sorts:

* `Volume` — highest to lowest (most heavily traded names rise to the top).
* `Price` — highest to lowest (largest caps first).
* `Avg Volume 60D` — most liquid first.

After sorting, manually click through each chart to apply the **remaining strategy rules** (MACD bullishness, Stochastics ≤30, sector confirmation, MA tested before, etc.). The scan is a **mechanical filter**, not a complete entry signal.

---

## 12.4 Thinkorswim (TOS) — Charting Setup

Thinkorswim is the charting platform you get for free with a TD Ameritrade (now Charles Schwab) account. It has best-in-class scanning built in, plus deeper features for the trader who wants more than TC2000 offers.

### 12.4.1 Account Setup

1. Open an account at **TD Ameritrade / Charles Schwab**.
2. Download and install the **thinkorswim** desktop application.
3. Log in. If you are not yet ready to fund, you can use the **paperMoney** paper-trading account — it has the **exact same charting, scanning and order-entry features** as the live account.

### 12.4.2 General Chart Settings

Open **Charts** → click the **gear icon** to open `Chart Settings`. Configure in this order:

#### Time / General

| Setting | Value |
|---------|-------|
| Time Zone | Your local time zone (instructor uses Singapore). |
| Data Box | **Off** — instructor prefers open/high/low/close shown along the top of the price axis instead. |
| Show Volume | On (default). |
| Volume Bars | On (default). |
| Expansion Area | **5 bars to the right** — leaves space on the right edge of the chart for the most recent price action. |

#### Price Axis

* **Lock Scale** — choose **Lock scale in a log / linear fashion as appropriate**. This keeps the chart from re-scaling wildly when you flip tickers.

#### Time Axis

* Timeframe for swing trading: **Daily candles**.
* Look-back for swing trading: **6-month to 5-year** daily charts. Add your favorite ranges to the **quick timeframes** list:

  ```
  5Y Daily
  3Y Daily
  2Y Daily
  1Y Daily
  6M Daily
  2D 5-min (for intra-day)
  2D 2-min (for intra-day)
  1D 2-min (for intra-day)
  2D 1-min (for intra-day)
  ```

* Check **Auto-Expand to Fit Corporate Actions** so dividends and splits don't leave visual gaps.

#### Appearance

* **Candlesticks** — only candlesticks; no bars or lines.
* **Show Wicks:** Yes.
* **Bearish candle color:** Red.
* **Bullish candle color:** White (instructor's preference; green is also acceptable).
* **Fill Down Candles** — leave default.
* **Cursor:** Cross (so when you hover you see horizontal + vertical crosshairs).

#### Equities

* Show **Volume**.
* Show **Earnings** icons (the green/red markers) on the chart — they let you see when a company reported.
* **Extended-hours trading session** — *Off for swing trading*. Turn *On* only if you are intra-day scalping.

### 12.4.3 Reading a Candle on thinkorswim

Hovering any candle shows the OHLC details in a data bar at the top of the chart:

* **O** — Open
* **H** — High
* **L** — Low
* **C** — Close
* **R** — Range (H − L)
* **Y** — Y-axis price (where your cursor is vertically)

This is essential when entering trades: you need the exact high and low of a candle to set your entry stop and your entry buy stop correctly.

### 12.4.4 Drawing Tools

Open `Drawings` → `Drawing Tools`. The tools used in this course:

| Tool | Icon | Use |
|------|------|-----|
| Pointer | Arrow | Default cursor for clicking around. |
| Horizontal Line | — | Support / resistance. |
| Trend Line | — | Connect ≥ 3 points to draw a valid trendline. |
| Text Note | T | Annotate the chart (e.g. "Earnings hit here"). |
| Fibonacci Retracement | Fib | For Level 2 — retracement / extension levels. |

To erase:

* Single line: hover it → right-click → **Remove Drawing**.
* All lines on chart: right-click → **Remove All Drawings**.

> *Reminder:* A trend line must connect **at least three swing points**. Two points make a line but not a trendline.

### 12.4.5 Built-in Corporate Action Icons

Below the price axis, icons like green `$` and red `⚡` mark **dividends** and **earnings** events. Hovering each icon tells you:

* **Dividend amount** (e.g. $0.77/share quarterly).
* **Earnings surprise** (e.g. reported $1.28 vs $1.20 expected).

Price tends to **gap** on earnings. The bounce strategy explicitly avoids entering new positions into earnings. Use these icons to confirm earnings are at least 5 trading days behind or ahead of any entry.

### 12.4.6 Adding Studies (Indicators)

Open `Studies` → `Edit Studies` (or click the **+** icon on the studies panel). Common setups the instructor saves:

* **`BounceSetup`** — 20 EMA (red dotted), 50 SMA (blue), 200 SMA (red), MACD (12-26-9 default).
* **`BMR` (Bollinger Mean Reversion)** — same 20-50-200 EMAs + Bollinger Bands.
* **`Capitulation`** — RSI + Bollinger Band width + a custom thinkScript.
* **`IntradayGap`** — pre-market high/low plotted.
* **`MarketTrend`** — Sector + Industry with EMA on each.

To build the **`BounceSetup`** study set:

1. `+` → search `moving average` → select **`SimpleMovingAverage`**. Set period = **50**, color blue → OK.
2. `+` → search `moving average` → select **ExpMovingAverage** (Exponential MA). Set period = **20**, color red, line style = **dotted** → OK.
3. `+` → search `moving average` → select **SimpleMovingAverage** → edit again → period = **200**, color red → OK.
4. `+` → **`MACD`** with default 12-26-9 (used for confirmation only, not the source of entry signals) → OK.
5. Click **Save Study Set** → name it `BounceSetup`.

To load a saved set later: `Studies` → `Load Study` → pick it from the dropdown.

### 12.4.7 Timeframe Buttons at the Bottom

Below the chart is a row of quick-timeframe buttons. Customize these in `Chart Settings` → `Time Axis` → `Quick Timeframes`. The instructor's five swing-trading timeframes are at the top: **5Y, 3Y, 2Y, 1Y, 6M daily**. The intra-day scalping timeframes (2D-5min, etc.) are below.

### 12.4.8 Hot Buttons (One-Click Action Bar)

When you hover the **blue bar** at the bottom of the chart, a popup appears with **favorite hot buttons**. You can configure this bar with up to several of your most-used actions:

1. Right-click the bar → **Configure Buttons**.
2. Add buttons:
   * **Drawing Tool → Trendline**
   * **Drawing Tool → Horizontal Line**
   * **Drawing Tool → Pointer**
   * **Study Set → Capitulation** (loads that strategy with one click)
   * **Study Set → BMR**
   * **Study Set → DayTrend**
   * **Study Set → WA Classic**
   * **Study Set → BounceSetup**
   * **Style → Candlestick**
   * **Timeframe → 1Y Daily**
3. Remove unwanted buttons by selecting them and clicking **Delete**.
4. Click **Done**.

You now have a **one-click action bar** at the bottom of every chart for instant switching between setups.

### 12.4.9 Multi-Chart Grid (Grid Layout)

To view four charts at once:

1. Above the price scale, click the **grid icon** (`4` for 4 panes, `2` for 2 panes, etc.).
2. Click the `C` for **Chart** in each empty pane.
3. Type a ticker into the new panes.
4. Save the grid layout with the **disk icon** (e.g. name it `4-Up Swing`).

This is mostly useful for **intra-day scalping in Level 2**. For Level 1 swing trading, you can stay on a single chart.

### 12.4.10 Live News, Level 2 and Time & Sales

On the right side of the chart, tabs include:

* **Live News** — only relevant for intra-day.
* **Level 2 (Market Depth)** — shows buyers and sellers queued up at each price. Only relevant for intra-day.
* **Time & Sales** — print-by-print trades.

For swing trading you can ignore all three. For intra-day scalping in Level 2 they are essential.

### 12.4.11 Mobile vs Desktop

Charts and studies work the same on the **thinkorswim mobile app** as on the desktop, **but the scan/Stock Hacker interface is desktop-only**. Always create and save your scans on the desktop, then run them on the desktop.

---

## 12.5 Thinkorswim — Scanning with thinkScript (Stock Hacker)

> For setup of the Stock Hacker window and installing custom scans, the workflow below applies to thinkorswim. If you prefer TC2000, see Section 12.3 — both platforms give you the same 12 bounce scans via separate but parallel setups.

### 12.5.1 What Comes With This Lesson (Resources)

The instructor distributes **12 thinkScript files** from the Lesson 9 resources page. The naming is:

```
18 bounce long.thinkScript
50 bounce long.thinkScript
100 bounce long.thinkScript
150 bounce long.thinkScript
200 bounce long.thinkScript
18 bounce short.thinkScript
50 bounce short.thinkScript
100 bounce short.thinkScript
150 bounce short.thinkScript
200 bounce short.thinkScript
18 tradetrue long.thinkScript
50 tradetrue long.thinkScript
100 tradetrue long.thinkScript
18 tradetrue short.thinkScript
50 tradetrue short.thinkScript
100 tradetrue short.thinkScript
```

(where "tradetrue" = "trade-through" — the second family of two-candle reversal patterns learned in Lesson 6.)

### 12.5.2 Installing One Scan

1. Open the downloaded `.thinkScript` file from the Lesson 9 resources page in a text editor (Notepad).
2. In thinkorswim, go to **`Scan`** → **`Stock Hacker`**.
3. Click **`Add Study Filter`** (top-left of the Stock Hacker toolbar) → a new empty study row appears.
4. Click on the new row → **`Custom`** → select **`thinkScript Editor`** at the bottom.
5. The default **ADX crossover** appears — click `Delete` to remove it.
6. **Copy** the contents of the thinkScript file, **`paste`** into the editor box.
7. Click **`OK`**. The script appears as one filter in the Stock Hacker.
8. Click **`Save Scan`** (floppy icon) → name it e.g. `18 EMA Bounce Long` → click `Save`.
9. The scan is now in **Load Scan → Personal**.

### 12.5.3 Add Filters — Volume and Price

A bounce scan by itself doesn't filter for liquidity or share price. The standard setup adds three filters on top of every bounce scan:

| Filter | Setting |
|--------|---------|
| **Average Volume** | `Average Volume (60D)` **>** **150,000** (filters out illiquid names). |
| **Last Price (for Long setups)** | **>** **$2** (instructor's minimum; you may want **$5+** for shortable liquidity). |
| **Last Price (for Short setups)** | **>** **$10** (instructor's minimum; shorts require more expensive names to borrow). |

To add filters in Stock Hacker:

1. **`Add Study Filter`** → **`Add Filter`** → select the column (e.g. `Average Volume, 60 day`).
2. Set the operator to `>` and the value to `150000`.
3. Repeat for **Last** (price) with the minimum threshold above.

### 12.5.4 Saving as Personal Scans

Always **Save Scan** after configuring the filters so you can re-load it tomorrow without redoing the work:

```
Save Scan → name (e.g. "18_EMA_Bounce_Long") → Save
```

To load it tomorrow:

**`Load Scan → Personal → <your scan name>`**.

### 12.5.5 Repeat for All 12 Scans

Repeat the above process for every script in the resources folder. At the end of installation you should have **12 saved scans** in your **Personal** folder. Order does not matter — the instructor suggests naming them consistently with `18/50/100 + Direction + Type` (`18_Bounce_Long`, `50_Bounce_Short`, `18_TradeTrue_Long`, etc.).

### 12.5.6 Daily Screening Workflow

1. **Market context first.** Check the S&P 500 / SPX daily chart. Is it bullish (longs allowed) or bearish (shorts allowed)?
2. **Pick the scan family.** Long-only in bullish markets; short-only in bearish markets.
3. **Run all relevant scans** (e.g. `18_Bounce_Long`, `50_Bounce_Long`, `100_Bounce_Long`) one after another.
4. **Sort each result** by clicking column headers (Volume high-to-low; or Price high-to-low).
5. **Click each chart** to apply the full strategy rules (Lesson 6):
   * MA tested before? Yes = +confluence.
   * MACD bullish (no bearish cross within 5 candles)?
   * Stochastics ≤30 (longs) or ≥70 (shorts)?
   * Sector/industry in trend?
   * Horizontal support / 50% Fibonacci nearby? +confluence.
   * 2-candle or trade-through pattern visible?
   * Confirmation candle present?
6. **Confirm with TC2000.** Many instructors confirm the setup in TC2000 (which has a cleaner chart) before placing the order.
7. **Take only the highest-confluence setups** — typically **1 to 2** per day, or zero on a quiet day.

### 12.5.7 Worked Example — Scanning Demonstration

In the screening tutorial, the instructor walked through running the **`50 Bounce Long`** scan on a particular day:

| Stock | Pattern | Result |
|-------|---------|--------|
| AGIO | Two-candle reversal + confirmation | Skipped — bounced too far from the 50 MA (no high-probability entry zone). |
| CAE | Two-candle reversal + confirmation | MacD just crossed bearish → disqualified (entry rule). |
| SCGE | Single candle + confirmation | MacD bearish cross → disqualified. |
| WCG | Two-candle reversal + confirmation | Watchlist candidate — passes filters. |

He then ran the **50 Trade-Through Long** scan:

| Stock | Pattern | Result |
|-------|---------|--------|
| CNC | Two candles, MACD-cross-condition satisfied | Looks great except MACD bearish-cross within 5 candles → disqualified. |
| EMN | Same pattern, similar disqualifier | Disqualified. |
| KTFF | Trade-through setup | Watch for next signal. |

> *Lesson:* The scan is the **first filter**, not the final signal. Always apply the full strategy checklist before taking the trade.

---

## 12.6 Placing Orders — Interactive Brokers Trader Workstation (TWS)

### 12.6.1 Platform Choices

The instructor uses the **Trader Workstation (TWS)** for order entry. It has two layouts:

| Layout | Description |
|--------|-------------|
| **Classic TWS** (the instructor's preference) | Traditional tabbed layout, all panels visible. |
| **Mosaic** | Modern grid layout. |

Both layouts accept the **exact same order types**. You can switch with **`Display → Classic TWS / Mosaic`** in the title bar.

You can also use the **mobile IB or Halifax app** for placing orders away from the desktop. The mobile workflow is covered in Section 12.8.

### 12.6.2 Walkthrough — Long Trade on ACIW (Stock Version)

The instructor demonstrates a real long entry on ticker **`ACIW`**. The setup is a two-candle reversal bouncing off the 50 MA, with a confirmation candle. The full order plan is:

| Parameter | Value | Rationale |
|-----------|-------|-----------|
| Symbol | ACIW | Confluence setup. |
| Confirmation candle high | $22.65 | Trigger reference. |
| **Buy Stop price (entry trigger)** | **$22.68** | 3¢ above the confirmation candle high. |
| **Buy Limit price (max you will pay)** | **$22.71** | 3¢ above the stop price — caps slippage. |
| Confirmation candle low | $21.87 | Stop reference. |
| **Stop Loss (sell stop)** | **$21.84** | 3¢ below the confirmation candle low. |
| Risk per share (1R) | **$0.84** | 22.68 − 21.84. |
| **Target (take profit)** | **$24.78** | 22.68 + 2.5R = 22.68 + 2.10 = 24.78. |
| Order type | **Buy Stop Limit** (entry) | Stops out only when price crosses the trigger. |
| Stop Loss type | **Sell Stop** | Closes the position at market if the stop is hit. |
| Target type | **Sell Limit** | Closes the position at the limit price or better. |
| Time-in-Force | **GTC (Good Till Cancelled)** | Both stop loss and target. |

Order entry steps in Classic TWS:

1. In the order-entry row, **type the ticker `ACIW`** → press Enter.
2. Click **`BUY`** (on the order-entry row).
3. **Quantity:** Use the **Position Sizing Calculator** to determine the share count. Example: with $10,000 capital and 1% risk, that is $100 risk. $100 / $0.84 ≈ **119 shares** (or 100 if you prefer round numbers).
4. **Order type:** **`STP LMT`** (Stop Limit).
5. **Stop price:** **`22.68`** (your intended entry).
6. **Limit price:** **`22.71`** (your maximum acceptance).
7. Click **Preview** → **Transmit**.
8. **Attach the bracket:** Right-click the row → **`Attach → Bracket Order`**.
9. Two more rows appear:
   * **Sell Limit (target)** at `24.78` → GTC.
   * **Sell Stop (stop loss)** at `21.84` → GTC.
10. Make sure both bracket legs are **GTC (Good Till Cancelled)**, not Day orders.
11. Click **`Update`** (or **Transmit** if it didn't go through yet).

The order is now **working in the market**. When price hits $22.68, the entry triggers at the best available price up to $22.71. Once filled, the bracket becomes active — whichever of stop-loss or take-profit hits first cancels the other.

> *Always set both stop-loss and target legs to **GTC** so they remain active across multiple sessions.*

### 12.6.3 Walkthrough — Short Trade on Twitter

For shorts the rule "limit is below stop" applies (the inverse of a long). Example — shorting Twitter at $18.08:

| Parameter | Value |
|-----------|-------|
| Symbol | TWTR |
| Action | **Sell Short** |
| Quantity | 200 (round number for the example) |
| Order type | **STP LMT** (stop limit) |
| Stop price (entry trigger) | **$18.00** (below current price — short triggers when price drops) |
| Limit price (worst fill) | **$17.97** (3¢ below the stop — for shorts, the limit must be below the stop) |
| Stop Loss (buy stop) | e.g. **$18.50** (above entry) |
| Target (buy limit) | e.g. **$17.00** (below entry) |
| Time-in-Force | **GTC** for both legs |

Order entry:

1. Type `TWTR` → Enter.
2. Click **`SELL`** (Sell Short).
3. Quantity 200.
4. Order type `STP LMT`.
5. Stop `18.00`, Limit `17.97`.
6. Transmit.
7. Right-click → **Attach → Bracket Order**.
8. Fill the **Buy Stop (loss)** at `18.50` and the **Buy Limit (profit)** at `17.00`. Both GTC.
9. **Transmit**.

> *Key rule for shorts:*
> * **Long:** limit price **>** stop price.
> * **Short:** limit price **<** stop price.

### 12.6.4 Bracket Order — Definition Recap

A **bracket order** is a single submission that contains three child orders:

1. **Entry** — the trigger that opens the position.
2. **Stop Loss** — closes the position at the market if price goes against you.
3. **Take Profit** — closes the position at a limit price when price reaches your target.

Because they are submitted together as one combined order, you cannot enter the trade and forget to attach your protective stop. This is the **only** order type the instructor uses.

### 12.6.5 Cancelling Orders

Any working entry order can be cancelled by selecting the row → clicking **`Cancel`**. Cancelling the entry automatically cancels the attached bracket (in some broker builds the bracket remains — verify with your broker and cancel manually if needed).

---

## 12.7 Adding Brackets to an Already-Open Position (OCA Groups)

Sometimes you forget to attach a bracket when you entered the trade, or you manually closed the bracket and want to put it back. Interactive Brokers lets you **add a stop-loss and take-profit to an existing position** by creating two separate sell orders and linking them with an **OCA (One-Cancels-All) group**.

### 12.7.1 Workflow

1. Open **Classic TWS** → click the **`+`** → create a new panel → name it `Orders` → click `OK`.
2. In the new **Orders** panel, type the symbol of the open position (e.g. `SPY`).
3. You see your open position. Example: **65 long SPY** with no bracket attached.
4. **Right-click the same row → Create a second order.** You now have two side-by-side sell orders in the same panel.
5. Label them mentally:
   * **Order A:** Take-profit (sell limit)
   * **Order B:** Stop-loss (sell stop)
6. Configure each order:
   * **Order A (Take-profit):** Action = `SELL`; Order type = `LMT`; Price = `340`; Quantity = `65`; Time in force = **`GTC`**.
   * **Order B (Stop-loss):** Action = `SELL`; Order type = `STP`; Stop price = `310`; Quantity = `65`; Time in force = **`GTC`**.
7. **The OCA column is not visible by default.** Make it visible:
   * Click the small **`configure`** tab (or gear icon) inside the panel.
   * Click **`All Columns`** → search `OCA` → add **`OCA Group`** → drag it to the top → click **`Apply`** → **`OK`**.
   * The OCA Group column now appears.
8. Under OCA Group, **type the same code in both orders** (e.g. `SPY123`). Pick any alphanumeric string — but use it **once only**. Once a code is used it is locked to this bracket.
9. Click **`Transmit`** for both orders. Both are now active.
10. Whichever order fills first **cancels the other automatically** via the OCA group.

### 12.7.2 When to Use OCA Brackets

| Situation | Use |
|-----------|-----|
| You placed a market order this morning and forgot to attach a bracket. | Add an OCA bracket now. |
| Your bracket got accidentally deleted by mistake. | Re-create with OCA. |
| You want to manually tighten or move your stop / target on a working bracket. | Cancel the old bracket, replace with new OCA orders. |
| You normally use the bracket-attached approach. | Use OCA only as a backup. |

> *Why OCA matters:* Once your position is open without a protective stop, the next market event could wipe the trade. OCA brackets close that risk in seconds.

### 12.7.3 OCA Group Code Rules

* Each OCA code can be used **exactly once per account**. After both legs of a bracket fire, the code is **never re-used**, even if you re-create the same bracket later.
* If you cancel the bracket, the code is freed up again.
* Most brokers limit the number of distinct OCA codes in flight at once.

---

## 12.8 Placing Orders — IB / Halifax Mobile App

The mobile app can place the **same bracket orders** as the desktop. The interface differs but the order logic is identical because IB and Halifax both run on the same underlying platform.

### 12.8.1 Walkthrough — Long ACIW on Mobile

1. Open the IBKR or Halifax app.
2. Tap **`More`** → **`Order Ticket`**.
3. Type the ticker (e.g. `ACIW`). Choose `STOCK`.
4. Tap **`BUY`**.
5. Quantity: tap `300` (round number for example).
6. Time-in-Force: **`GTC`** (not Day).
7. Order type: **`STP LMT`** (stop limit).
8. **Stop price** = `22.68` (your intended entry).
9. **Limit price** = `22.71` (your maximum fill).
10. Tap **`Attach bracket order`** — a popup appears with two more orders:
    * **Profit taker (target)** = `24.78`.
    * **Stop loss** = `21.84`.
11. Both must be **`GTC`**. If they default to "Day", change them.
12. Slide **`Buy`** to confirm. Order is working.

### 12.8.2 Walkthrough — Short Twitter on Mobile

1. `More` → `Order Ticket` → `TWTR`.
2. Choose `CFD` (if you have a CFD account; same flow works on Stock).
3. Tap **`SELL`** (sell short).
4. Quantity: tap `500`.
5. Time-in-Force: `GTC`.
6. Order type: `STP LMT`.
7. Stop = `18.00`; Limit = `17.97` (3¢ below the stop).
8. Tap `Attach bracket order`.
9. Stop-loss (Buy Stop) = `18.50`; Take-profit (Buy Limit) = `17.00`; both GTC.
10. Slide `Sell` to confirm.

### 12.8.3 Managing Orders and Positions on Mobile

* **View working orders:** `More` → `Orders and Trades`. Each pending entry is listed; tap it to **modify** or **cancel**.
* **View open positions:** `Portfolio`. Each position shows current P&L.
* **View account value:** `More` → `Account` → look at **`Net Liquidation Value`** (this is your position-sizing capital base).
* **Cancelling:** Tap any working order → `Cancel`. Modifications let you change the entry, stop or target without canceling and re-creating the whole bracket.

### 12.8.4 When to Use the Mobile App

* **Overnight entries before the open.** The instructor often places orders between home and the desk using the mobile app.
* **Quick cancels during lunch.** If you want to cancel a working order while you are away, mobile is faster than booting TWS.
* **Crisis management.** If an order fills unexpectedly, mobile is the fastest way to attach an OCA bracket in real time.

Do **not** use the mobile app to do detailed chart analysis — the screens are too small. Use it for **order management only**.

---

## 12.9 Daily Routine — Putting It All Together

Here is the precise sequence to run every trading day. The whole routine should take **30 to 45 minutes** before the market opens.

### 12.9.1 Before the Market Opens

1. **Open your broker account** (TWS or mobile) and check your **Net Liquidation Value** (your risk base).
2. **Open TC2000.** Run the day's market context:
   * S&P 500 daily chart: bullish or bearish?
   * VIX: high or low?
3. **Run the bounce scans** (12 of them — or at least the 6 primary ones: 18 / 50 / 100 × Long / Short). You can run them in TC2000 or in TOS Stock Hacker. Sort results by volume.
4. **Open TC2000 (or TOS) daily charts** for each candidate. Apply the full strategy checklist for each (MACD, Stochastics, MA-tested-before, sector/industry confirmation, Fibonacci / horizontal confluence).
5. **Pick 1 to 2 setups.** Anything lower confluence — skip.
6. For each setup, calculate **1R** (entry − stop) and **shares** via the **Position Sizing Calculator**.
7. Place orders in **TWS** (or mobile):
   * Entry order: buy/sell **STP LMT**.
   * Bracket with **stop loss** + **take profit** at 2R (or 2.5R).
   * All three legs **GTC**.
8. **Cancel yesterday's unfilled orders** if appropriate.

### 12.9.2 During the Trading Day

1. **Do not stare at the screen.** The orders are working; let them execute.
2. **If you must intervene** (e.g. an earnings surprise, news event), use the mobile app to cancel or modify orders.
3. **Trailing stops** — only advanced traders should consider this; the instructor uses fixed stops + fixed targets (a "fire and forget" approach).

### 12.9.3 After the Market Closes

1. Record every trade (filled or unfilled) in the **Trading Journal** (Chapter 10).
2. Review the day's scans: which setups would have triggered? Anything you missed?
3. **Tighten your watchlists** — delete setups that no longer qualify, add new high-RS names.

### 12.9.4 Weekly / Monthly Tasks

| Task | Frequency |
|------|-----------|
| Update **Investors.com 85/85 list** (or your equivalent high-RS source). | Weekly |
| Refresh your **Watchlists** with new high-momentum tickers. | Weekly |
| Recompute your **Net Liquidation** baseline. | Weekly |
| Backtest the **bounce scan parameters** against recent price action. | Monthly |
| Refresh the **TC2000 Easy Scan / TOS scripts** if the instructor releases updates. | As released |

---

## 12.10 Common Mistakes to Avoid

The following are mistakes the instructor has personally seen students make when they first set up the platforms. Avoid them.

### 12.10.1 Chart Setup Mistakes

* **Using linear charts instead of logarithmic.** Linear charts exaggerate small moves at high prices. Always use **log scale** for swing trading.
* **Wrong candle colors.** If your bullish candles are red and bearish are green, every cross-referenced lesson will be confusing. Match the instructor's setup exactly (bullish = green or white; bearish = red).
* **Wrong timeframe (intra-day candles instead of daily).** For Level 1, only daily charts.

### 12.10.2 Indicator Mistakes

* **Mixing study sets across charts.** Use the same template on every chart so that your eye reads them identically.
* **Adding too many indicators** until the chart is unreadable. For bounce setups, 3 moving averages + MACD + Stochastics is enough.
* **Re-saving the template accidentally** over the wrong one — keep a master `BounceSetup` and never overwrite the master.

### 12.10.3 Scanning Mistakes

* **Forgetting to set the timeframe** in the scan to daily — by default some scanners use intra-day.
* **Sorting the wrong column** and missing the highest-quality setups. Always sort by **Average Volume (60D)** or **Volume Today**.
* **Forgetting the price filter** — many bouncing stocks under $2 are illiquid and not borrowable for shorts. Apply the minimum-price filter on every scan.
* **Setting Average Volume filter too low** — keep at least 150,000; the instructor often uses 200,000.

### 12.10.4 Order Entry Mistakes

* **Using a market order** instead of stop-limit. A market order on the open can gap 50¢ against you. Always use **stop-limit** to cap slippage.
* **Forgetting to attach the bracket.** Always check both the working entry and the working bracket are transmitted. If the entry fills without the bracket, use the OCA workaround (Section 12.7) immediately.
* **Wrong stop distance.** Stop must always be just outside the candle pattern. If your 1R is too large (>3% of price), the setup is too risky — skip it.
* **Wrong target distance.** Use the **2R minimum** standard. If your target is <2R, the expectancy math doesn't justify the trade.

### 12.10.5 Platform-Specific Mistakes

* **TC2000 v18 on Mac** without a virtual PC. The application simply does not run natively on macOS.
* **TC2000 v12 using the wrong scan location.** In v12 you install scans via the **Library**; in v18 you use **Easy Scan** directly.
* **TOS scans saved as "Day" instead of "GTC".** Scans don't really have a time-in-force, but studies and orders do — be careful which one you are editing.
* **Forgetting the OCA group** when manually linking two orders — without OCA, both orders can fill, leaving you double-closed or with an unwanted position.

---

## 12.11 Quick Reference — Setup Checklist

Print this and tick it off once when you first configure the platforms.

### TC2000

- [ ] Gold plan or higher installed.
- [ ] Daily candles, log scale, white background.
- [ ] Candlesticks colored green-up / red-down.
- [ ] Bounce template saved with 20-EMA, 50-SMA, 200-SMA (or 18/50/100/200 EMAs per your preference).
- [ ] 6 bounce scans installed via Easy Scan.
- [ ] 6 trade-through scans installed via Easy Scan.
- [ ] Watchlists created: at least one for the 85/85 momentum list.
- [ ] Columns configured: Symbol, Price, Latest Float, AVGV60.

### Thinkorswim

- [ ] Charts: candlesticks, bullish white (or green), bearish red, daily candles.
- [ ] Expansion 5 bars; lock scale; cross cursor.
- [ ] Bounce study set saved (or BMR, or whichever you use most).
- [ ] Hot buttons configured for instant strategy switching.
- [ ] Stock Hacker: 12 bounce scans installed with volume and price filters.

### Interactive Brokers TWS

- [ ] Classic TWS layout active (not Mosaic).
- [ ] Order-entry row ready (default settings fine).
- [ ] Verify you can place a **STP LMT** with a **bracket**.
- [ ] Verify you can create an **OCA group** manually (Section 12.7).

### Mobile App

- [ ] Login works (IB or Halifax).
- [ ] Order Ticket accessible.
- [ ] Order type **STP LMT** can be selected.
- [ ] **Attach bracket order** visible.

### Daily

- [ ] S&P 500 daily checked (bull / bear / neutral).
- [ ] Scans run, sorted, filtered.
- [ ] Charts reviewed, full strategy checklist applied.
- [ ] Position size from calculator.
- [ ] Orders placed as stop-limit + bracket (GTC).

---

> *"This concludes this lesson on charting software. Go questions, do send us an email at support@piranaprofits.com — we'll be happy to help you set up your charts for your trading, and I'll see you soon."*
