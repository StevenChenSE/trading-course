---
title: "Trend Retracement"
---

## 1.1 Introduction to the Strategy
The Trend Retracement system is the first strategy in this advanced course and is considered one of the most powerful methodologies available. The core principle is trading with the trend: buying (going long) stocks when the price is in an uptrend and selling (going short) stocks when the price is in a downtrend.

In an uptrend, prices do not rise in a straight line every day; they experience temporary retracements or dips. The optimal time to enter a long position is during one of these dips to capture the continuation of the trend. Similarly, in a downtrend, prices experience temporary rallies. The optimal time to enter a short position is during one of these rallies, just before the downtrend resumes.

### 1.1.1 Comparison to the EME Bounce Strategy
This system shares similarities with the EME Bounce strategy from Level 1 of the basic course but includes three critical differences:
1.  **No Fixed Target Price:** Unlike the EME Bounce, which is a swing trade with a fixed profit target at the end of an impulsive wave, the Trend Retracement system aims to follow the trend as long as it continues. This allows traders to capture significantly larger profits during strong trends. Exits are triggered when the trend ends, which may take much longer.
2.  **Wider Stop Loss:** Stop losses are placed slightly further away to provide additional buffer against price volatility.
3.  **Momentum Indicators:** This strategy introduces momentum indicators to confirm entries when momentum is favorable, strengthening the entry point.

## 1.2 Chart Setup and Indicator Configuration
To implement this strategy, charts must be configured with specific moving averages and indicators. While ThinkOrSwim is used for demonstration, any charting software with standard indicators (e.g., TC2000, Finviz) can be used.

### 1.2.1 Moving Averages
The system utilizes a combination of Exponential Moving Averages (EMAs) for short-term trends and Simple Moving Averages (SMAs) for longer-term support and resistance.
*   **20 EMA:** Red line.
*   **40 EMA:** Blue line.
*   **50 SMA:** Blue line (thicker width, e.g., width 2, to distinguish from the 40 EMA).
*   **100 SMA:** Orange line.
*   **150 SMA:** Green line (thicker width, e.g., width 2).
*   **200 SMA:** Red line (thicker width, e.g., width 2).

### 1.2.2 Momentum Indicators
Three momentum indicators are added to determine bullish or bearish momentum:
1.  **MACD (Moving Average Convergence Divergence):** Use default settings of **12, 26, 9**.
    *   *Color Customization:* MACD line set to black; Signal line set to red.
2.  **Force Index:** Use default **13-day average**.
    *   *Color Customization:* Set to black.
3.  **Parabolic SAR:** Dots set to black.

### 1.2.3 Relative Strength Indicator
Relative Strength is used to compare a stock’s performance against the S&P 500. Note that this is **not** the Relative Strength Index (RSI).
*   **Interpretation:** A blue line above the red baseline indicates the stock is stronger than the market. A blue line below the baseline indicates the stock is weaker than the market.
*   **Usage:** For long trades, seek stocks with relative strength above the baseline and trending upward. For short trades, seek stocks with relative strength below the baseline and trending downward.

## 1.3 Understanding the Momentum Indicators
Before applying the rules, traders must understand how to read the indicators:
*   **Parabolic SAR:** Dots below the candles indicate bullish momentum. Dots above the candles indicate bearish momentum. This indicator is sensitive and can flip quickly within a trend.
*   **MACD:** 
    *   Bullish: Black MACD line crosses above the red signal line; histogram turns green.
    *   Bearish: Black MACD line crosses below the red signal line; histogram turns red.
*   **Force Index:** Measures volume strength.
    *   Bullish: Index is above the red baseline, especially if rising.
    *   Bearish: Index is below the red baseline.

**Entry Requirement:** For any trade, at least **one out of the three** momentum indicators must flash a signal in the direction of the trade.

## 1.4 Long Setup Rules: Buying the Dip in an Uptrend
The following rules must be met sequentially to enter a long position.

### 1.4.1 Market and Trend Conditions
1.  **S&P 500 Condition:** The overall market must be bullish. The S&P 500 should be above its 20 EMA, ideally with the 20 EMA above the 50 SMA.
2.  **Stock Trend:** The specific stock must be in a clear uptrend, making higher highs and higher lows.
3.  **Moving Average Sequence:** One of the following conditions must be met:
    *   The 20 EMA is above the 40 EMA **AND** the 50 SMA is above the 150 SMA.
    *   **OR** The price is above the 200 SMA, and the 200 SMA is sloping upwards.
    *   *Note:* The 20 EMA must always be above the 40 EMA.

### 1.4.2 Retracement and Support Validation
4.  **Retracement:** Wait for the price to dip and find support at one of the SMAs: **50, 100, 150, or 200**.
5.  **Prior Test:** The moving average acting as support must have been **recently tested** and proven strong. Do not enter if the MA has not been tested previously.

### 1.4.3 Entry Trigger
6.  **Pivot Point:** Identify a pivot point, defined as a V-shape low made of three candles where the middle candle’s low is lower than the previous and next lows.
7.  **Bullish Candle:** Wait for the first **bullish candle** to appear immediately after the pivot point.
    *   *Bonus:* A bullish candlestick pattern (e.g., bullish pin bar or bullish engulfing) is a bonus but not required.
8.  **Momentum Confirmation:** At least one of the three momentum indicators (Parabolic SAR, MACD, or Force Index) must show a bullish signal at the time of entry.

### 1.4.4 Order Placement
*   **Buy Stop Limit Order:** Place the order **1 to 10 cents above the high** of the confirming bullish candle.
    *   *Price Offset Guide:*
        *   Stock price < $5: 1 cent above high.
        *   Stock price $5–$10: 2 cents above high.
        *   Stock price $10–$50: 3 cents above high.
        *   Stock price $50–$100: 5 cents above high.
        *   Stock price > $100: 10 cents or more above high.
*   **Exception for Large Candles:** If the bullish candle is exceptionally large, entering at the high may be too far from the moving average. In this case, either skip the trade or use a **Buy Limit Order** at a 50% retracement of the long candle to enter at a lower price. This is permissible because momentum indicators have already confirmed bullishness.

### 1.4.5 Stop Loss Placement
*   Place the stop loss **1 ATR (Average True Range) below the moving average support**.
*   **Alternative:** Place the stop loss below the recent swing low.
*   **Rule:** Use whichever level is **lower** (1 ATR below MA or below recent swing low).
*   **ATR Calculation:** 
    *   *Method 1:* Add the ATR indicator (14-day default). View the last 3 months of daily candles and estimate the average center of the ATR range.
    *   *Method 2:* Check Finviz for the stock’s ATR value.
*   The distance from the buy entry to the stop loss is defined as **1R** (Risk per share).

### 1.4.6 Profit Targets and Exits
Traders may choose one of the following exit strategies:
1.  **Fixed Target:** Set a profit target at **2R** (double the risk distance).
2.  **Trend Following:** Do not set a fixed target. Stay in the trade until the trend ends, signaled by the **20 EMA crossing below the 40 EMA**.
3.  **Hybrid Approach:** Take profit on half the position at 2R and let the remaining half run until the 20 EMA crosses below the 40 EMA.

### 1.4.7 Trade Management (Protecting Profits)
*   **Risk-Free Trade:** Once the price moves **1R in your favor**, move the stop loss to the entry price.
*   **Trailing Stop:** As the trend continues, raise the stop loss to below subsequent pivot points (swing lows) to lock in profits.

### 1.4.8 Long Setup Examples
*   **Adobe (ADBE):** 
    *   *Setup:* Clear uptrend (20 EMA > 40 EMA, 50 SMA > 150 SMA). Price dipped to the 50 SMA, which had been tested previously.
    *   *Entry:* A pivot point formed at the 50 SMA. The first bullish candle was a bullish engulfing pattern. Momentum confirmation occurred when the Force Index and MACD turned bullish.
    *   *Execution:* Buy order placed above the high of the bullish candle. Stop loss placed 1 ATR below the 50 SMA.
*   **SodaStream (SODA):** 
    *   *Setup:* Strong uptrend. Entry at 50 SMA bounce.
    *   *Result:* By using the trend-following exit (20 EMA crossing below 40 EMA), the trade yielded a profit of $26.98 on a risk of $3.50, resulting in a **7.8R win**. This demonstrates the advantage of not using a fixed target during strong trends.
*   **Data (DATA):** 
    *   *ATR Calculation Example:* Price bouncing off 50 SMA at ~$118.90. ATR estimated at ~$5. Stop loss placed at $118.90 - $5 = **$113.90**.

## 1.5 Stock Selection Criteria
Not all stocks are tradable. To ensure high win rates, apply the following filters:
1.  **Relative Strength:** For longs, the stock must have strong relative strength (above baseline, trending up).
2.  **Volume:** Average volume must be at least **150,000 shares per day**.
3.  **Moving Average Respect:** The stock must clearly respect its moving averages (bouncing off them consistently). Avoid choppy, erratic stocks or those with excessive price gaps.
4.  **Pattern Clarity:** Look for predictable, repeatable price patterns (clear higher highs/lows for longs, lower highs/lows for shorts).

## 1.6 Screening for Long Setups
Traders can scan for setups daily using three methods. Scripts for these scans are available for download from the course website.

### 1.6.1 ThinkOrSwim Stock Hacker
1.  Open ThinkOrSwim live account. Go to **Scan > Stock Hacker**.
2.  Create four separate scans for longs: **Dip on Uptrend 50, 100, 150, and 200**.
3.  For each scan:
    *   Add **Study Filter > Custom**. Paste the corresponding script from the website.
    *   Add **Stock Filter**: Closing price > $2.
    *   Add **Study Filter > Volume**: Average volume > 150,000.
    *   Save the scan.
4.  Run the scan on **All Stocks**. Save results to a watchlist (e.g., "20th Jan Dip Uptrend 50").
5.  Review charts manually to confirm MA respect, prior tests, and momentum signals.

### 1.6.2 Finviz
1.  Go to Finviz.com and select the **Channel Up** custom screener.
2.  Review charts for stocks currently at the support level of the uptrend channel.
3.  Verify setups using moving averages and indicators on your primary charting platform.

### 1.6.3 TC2000 Easy Scan
1.  Go to **Easy Scan > New Condition > Write New Formula**.
2.  Paste the combined **Uptrend Long Combined Script** from the website.
3.  Name it "Dip on Uptrend" and save.
4.  Run the scan on **All US Stocks**. Review results manually.

## 1.7 Short Setup Rules: Selling the Rally in a Downtrend
The short setup is the inverse of the long setup.

### 1.7.1 Market and Trend Conditions
1.  **S&P 500 Condition:** The market must be bearish. S&P 500 below its 20 EMA, ideally with the 20 EMA below the 50 SMA.
2.  **Stock Trend:** Clear downtrend with lower highs and lower lows.
3.  **Moving Average Sequence:** One of the following must be met:
    *   The 20 EMA is below the 40 EMA **AND** the 50 SMA is below the 150 SMA.
    *   **OR** The price is below the 200 SMA, and the 200 SMA is sloping downwards.
    *   *Note:* The 20 EMA must always be below the 40 EMA.

### 1.7.2 Rally and Resistance Validation
4.  **Rally:** Wait for the price to rally and find resistance at one of the SMAs: **50, 100, 150, or 200**.
5.  **Prior Test:** The moving average acting as resistance must have been **recently tested** and proven strong.

### 1.7.3 Entry Trigger
6.  **Pivot Point:** Identify a pivot point, defined as an inverted V-shape high where the middle candle’s high is higher than the previous and next highs.
7.  **Bearish Candle:** Wait for the first **bearish candle** to appear immediately after the pivot point.
    *   *Bonus:* A bearish pin bar or bearish engulfing pattern is a bonus.
8.  **Momentum Confirmation:** At least one of the three momentum indicators must show a bearish signal.

### 1.7.4 Order Placement
*   **Sell Stop Limit Order:** Place the order **1 to 10 cents below the low** of the confirming bearish candle (using the same price offset guide as longs).
*   **Exception:** If the bearish candle is too large, use a **Sell Limit Order** slightly higher (closer to the MA) to avoid entering too far from resistance.

### 1.7.5 Stop Loss Placement
*   Place the stop loss **1 ATR above the moving average resistance**.
*   **Alternative:** Place the stop loss above the recent swing high.
*   **Rule:** Use whichever level is **higher** (1 ATR above MA or above recent swing high).

### 1.7.6 Profit Targets and Exits
1.  **Fixed Target:** Set a profit target at **2R**.
2.  **Trend Following:** Exit when the **20 EMA crosses back above the 40 EMA**.
3.  **Hybrid Approach:** Take half profits at 2R; let the rest run until the 20 EMA crosses above the 40 EMA.

### 1.7.7 Trade Management (Protecting Profits)
*   **Risk-Free Trade:** Once the price moves **1R in your favor**, move the stop loss to the entry price.
*   **Trailing Stop:** Lower the stop loss to above subsequent pivot points (swing highs) as the downtrend continues.

### 1.7.8 Short Setup Examples
*   **Southern Copper (SCCO):** 
    *   *Setup:* Clear downtrend (20 EMA < 40 EMA, 50 SMA < 150 SMA). Price rallied to the 50 SMA, which had been tested previously.
    *   *Entry:* A pivot point formed at the 50 SMA. The first bearish candle appeared, and the Force Index turned bearish, confirming the setup.
    *   *Execution:* Sell order placed below the low of the bearish candle (~$42.49). Stop loss placed 1 ATR above the 50 SMA (~$45.14). Risk (1R) = $2.65. Target at 2R = $37.18.
*   **IGT:** 
    *   *Setup:* Downtrend with rally to 50 SMA. Price briefly broke above but closed back below.
    *   *Entry:* Waited for a bearish candle after the pivot point and confirmation from the Force Index turning bearish.
*   **AGIO:** 
    *   *Screening Example:* Clear downtrend, resistance at 50 SMA (tested previously). Relative strength weak and trending down.
    *   *ATR Calculation:* ATR estimated at ~$4. Resistance at $56.84. Stop loss placed at $56.84 + $4 = **$60.84**.
    *   *Note:* Avoid trading if earnings are imminent.

## 1.8 Screening for Short Setups
### 1.8.1 ThinkOrSwim Stock Hacker
1.  Create four scans: **Rally on Downtrend 50, 100, 150, and 200**.
2.  For each scan:
    *   Add **Study Filter > Custom**. Paste the corresponding short script.
    *   Add **Stock Filter**: Closing price > $10 (to avoid low-priced risk).
    *   Add **Study Filter > Volume**: Average volume > 150,000.
    *   Save the scan.
3.  Run on **All Stocks**. Review charts for clear downtrends and resistance tests.

### 1.8.2 Finviz
1.  Select the **Channel Down** custom screener.
2.  Look for stocks at resistance levels of the downtrend channel. Avoid stocks with excessive gaps or choppy patterns.

### 1.8.3 TC2000 Easy Scan
1.  Create a new formula with the **Downtrend Short Combined Script**.
2.  Name it "Rally on Downtrend" and save.
3.  Run on **All US Common Stocks**. Review results manually.

## 1.9 Advanced Screening: High and Low Momentum Lists
To increase win probability, scan only high-momentum stocks for longs and low-momentum stocks for shorts.

### 1.9.1 Generating Lists (Investors.com)
1.  **High Momentum List (For Longs):**
    *   Go to Investors.com eTables.
    *   Select the **IBD 85-85 List** (Top 15% of stocks by Relative Strength and Earnings).
    *   Export to Excel.
2.  **Low Momentum List (For Shorts):**
    *   Go to StockTables.
    *   Sort by **Relative Strength** ascending (lowest first).
    *   Secondary sort by **EPS (Earnings Per Share)** ascending.
    *   Export the lowest-ranked stocks to Excel.

### 1.9.2 Implementing Lists in Scanners
1.  **TC2000:**
    *   Create two watchlists: "High RS High EPS" and "Low RS Low EPS".
    *   Paste the tickers from the Excel files into the respective watchlists.
    *   Run the "Dip on Uptrend" scan on the High RS list.
    *   Run the "Rally on Downtrend" scan on the Low RS list.
2.  **ThinkOrSwim:**
    *   Create watchlists for High and Low momentum stocks via **Watchlist > Create Watchlist > Import Symbols**.
    *   In Stock Hacker, change "Scan in" from "All Stocks" to the specific watchlist.
    *   Run the respective scans.

### 1.9.3 Advanced Screening Examples
*   **EXPD (Long Candidate):** 
    *   Found on High RS list. Retraced to 50 SMA (tested previously). Two momentum indicators bullish.
    *   *Fibonacci Check:* Retracement was only **38.2%**. The instructor prefers deeper retracements (50% or 61.8%). 
    *   *Gap Rule:* If a gap exists, the Fibonacci impulsive wave (A-B-C) must start from the beginning of the gap.
*   **TLRY (Short Candidate):** 
    *   Found on Low RS list. Clear downtrend but broke above the 50 SMA, invalidating the resistance. No trade.
*   **OILDK (Short Candidate):** 
    *   Found on Low RS list. Downtrend with rally to 50 SMA (tested previously). Bearish candle appeared.
    *   *Note:* Stock had gaps, which can disrupt technical patterns. Indicators were still bullish at the time of screening, requiring wait for bearish confirmation.

## 1.10 Risk Management and Trading Psychology
1.  **Position Limits:** 
    *   Do not take more than **two trades per day**.
    *   Do not have more than **10 open positions** at any time (assuming 1% risk per trade, this caps total risk at 10%).
2.  **Earnings Avoidance:** Never enter a trade immediately before an earnings announcement. Exit any open positions before earnings are released.
3.  **Patience:** If no compelling setup is found, do not force a trade. "Doing nothing is doing something." Wait for all criteria to align.
4.  **Community Validation:** Share potential trades in the course community for validation before market open.