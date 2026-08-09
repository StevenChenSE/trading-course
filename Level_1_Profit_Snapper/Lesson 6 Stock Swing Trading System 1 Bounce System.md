---
title: "Stock Swing Trading System 1 Bounce System"
---

## 6.1 Conceptual Framework

The Bounce Strategy is a short-term swing trading system designed to identify high-probability entries by capitalizing on temporary corrections within established trends. This system integrates moving averages, support and resistance, position sizing, and specific candlestick patterns into a cohesive methodology.

### 6.1.1 Core Concept
The strategy operates on the principle that trends do not move in straight lines. Instead, they progress in wave patterns:
*   **Impulsive Waves:** The dominant direction of the trend (up in an uptrend, down in a downtrend).
*   **Retracements/Corrections:** Temporary pullbacks against the trend.

During these retracements, price frequently tests key moving averages before resuming the dominant trend. The Bounce Strategy seeks to enter trades during these corrective phases, anticipating trend continuation.

*   **Long Bounce Strategy:** Buys high-momentum stocks as they bounce off key moving averages during temporary corrections in a confirmed uptrend.
*   **Short Bounce Strategy:** Sells short weak-momentum stocks as they bounce off key moving averages during temporary rallies in a confirmed downtrend.

The objective is to capture a favorable risk-to-reward ratio of at least 1:2, exiting the trade before the next corrective pullback.

## 6.2 Candlestick Reversal Patterns (Long Setups)

Reliable entries depend on identifying specific price action patterns that confirm a bounce is occurring. Long setups utilize two primary categories: Two-Candle Reversal Patterns and Single-Candle Reversal Patterns.

### 6.2.1 Two-Candle Reversal Patterns
This pattern involves two candles:
*   **Candle 1:** The candle preceding the reversal.
*   **Candle 2 (Reversal Candle):** The candle that bounces off the moving average support.

#### Original Two-Candle Reversal Pattern
For this pattern to be valid, three criteria must be met:
1.  The body of the reversal candle must be above the moving average support.
2.  The lower shadow of the reversal candle must extend below the moving average support.
3.  The lower shadow of the reversal candle must cut below the low of the previous candle (Candle 1).

*Note: The color of these two candles does not matter.*

#### Inside Bar Two-Candle Reversal Pattern
In this variation, the reversal candle is an inside bar (its range is fully contained within the range of the previous "mother" candle).
*   **Criteria:** Both lower shadows (of the reversal candle and the previous candle) must cut the moving average support.

#### Trade-Through Two-Candle Reversal Pattern
In this variation, the moving average cuts through the bodies of the candles.
*   **Criteria:** Color is critical. It must be a bearish candle followed by a bullish candle.
    *   First candle: Opens above the moving average and closes below it.
    *   Second candle: Opens below the moving average and closes above it, indicating a reversal in sentiment.

### 6.2.2 Confirmation Candle Rules
Regardless of the two-candle pattern variation, a valid setup requires a **Confirmation Candle** following the reversal candle.
*   Must be a bullish candle.
*   Must make a higher low than the low of the reversal candle.
*   Must close higher than the high of the reversal candle.

### 6.2.3 Single-Candle Reversal Patterns
This pattern consists of a single **Bullish Pin Bar**.
*   **Criteria:**
    1.  The body of the candle must be above the moving average.
    2.  The lower shadow must extend below the moving average.
    3.  The candle must have a small body and a long lower shadow (constituting a bullish pin bar).
*   **Color:** The color of the reversal candle does not matter (red or green is valid).
*   **Confirmation:** Must be followed by a bullish confirmation candle that makes a higher low than the reversal candle and closes above the high of the reversal candle.

### 6.2.4 Long Setup Chart Examples
*   **Trade-Through Example:** Price retraces to the 50 MA. A bearish candle opens above and closes below the MA, followed by a bullish candle opening below and closing above. A confirmation candle follows with a higher low and close above the reversal high.
*   **Nano (Original Pattern):** Price retraces to the 50 MA. The reversal candle body is above the MA, lower shadow cuts the MA and the previous candle's low. Confirmation candle validates the setup. Entry placed above the confirmation high; stop loss below the reversal low.
*   **GEN (Single Candle):** Price retraces to the 50 MA. A bullish pin bar forms (body above MA, shadow below). Confirmation candle follows. Entry placed above the confirmation high.
*   **MTD (Single Candle):** Price retraces to the 100 MA. A bullish pin bar forms. Confirmation candle validates. Entry placed above the confirmation high.

## 6.3 Candlestick Reversal Patterns (Short Setups)

Short setups are the inverse of long setups, executed when price rallies to moving average resistance in a downtrend.

### 6.3.1 Two-Candle Reversal Patterns (Short)
*   **Original Pattern:**
    1.  Body of the reversal candle is below the moving average resistance.
    2.  Upper shadow extends above the moving average.
    3.  Upper shadow cuts above the high of the previous candle.
    *Color of the two candles does not matter.*
*   **Inside Bar Pattern:** Reversal candle is an inside bar. Both upper shadows must cut the moving average.
*   **Trade-Through Pattern:** Color is critical. Must be a bullish candle followed by a bearish candle.
    *   First candle: Opens below MA, closes above.
    *   Second candle: Opens above MA, closes below.

### 6.3.2 Confirmation Candle Rules (Short)
*   Must be a bearish candle.
*   Must make a lower high than the high of the reversal candle.
*   Must close lower than the low of the reversal candle.

### 6.3.3 Single-Candle Reversal Patterns (Short)
Consists of a single **Bearish Pin Bar**.
*   **Criteria:**
    1.  Body below the moving average.
    2.  Upper shadow extends above the moving average.
    3.  Small body with a long upper shadow.
*   **Confirmation:** Bearish candle making a lower high than the reversal candle and closing below the reversal candle's low.

### 6.3.4 Short Setup Chart Examples
*   **JCP (Single Candle):** Price rallies to the 50 MA. Bearish pin bar forms. Confirmation candle validates. Sell order placed below the confirmation low.
*   **DHI (Two Candle):** Price rallies to the 50 MA. Two-candle reversal pattern forms (not a pin bar). Stochastics overbought. MACD bullish but crossed bullish exactly 5 candles ago (acceptable). Confirmation candle validates. Sell order placed below confirmation low.

## 6.4 Entry Criteria and Indicator Rules (Long)

To execute a Long Bounce trade, all the following criteria must be met:

1.  **Trend Confirmation:** The price must be in a confirmed uptrend, indicated by the Moving Average Fan Sequence:
    *   18 EMA > 50 EMA > 100 EMA > 200 EMA.
2.  **Bounce Location:** Price must bounce off a key moving average (50, 100, or 200). *Note: Bouncing off the 18 EMA is a special case covered in Section 6.6.*
3.  **Pattern:** The bounce must form a valid Two-Candle or Single-Candle Reversal Pattern with a Confirmation Candle.
4.  **Stochastics:** At the reversal candle, Stochastics must be oversold (ideally below 30) and must have just crossed bullish (Percentage K crosses above Percentage D).
5.  **MACD (5, 10, 9 Setting):**
    *   Ideally bullish (MACD line above signal line).
    *   If bearish, it is acceptable only if it crossed bearish more than 5 candles ago. If it crossed bearish within the last 5 candles, the trade is invalid.

### 6.4.1 Order Placement and Risk Management (Long)
*   **Entry:** Buy Stop Limit Order placed a few cents above the high of the confirmation candle.
    *   *Cent Rule of Thumb:*
        *   Stock < $5: 1 cent above high.
        *   Stock $5–$10: 2 cents above high.
        *   Stock $10–$50: 3 cents above high.
        *   Stock $50–$100: 5 cents above high.
        *   Stock > $100: 10 cents above high.
    *   *Limit Price:* Set 3 cents (or appropriate increment) above the stop price to prevent slippage.
*   **Stop Loss:** Sell Stop Order placed below the confirmation candle or below the reversal candle.
    *   *ATR Rule:* The risk distance (1R) should be greater than 1 ATR (Average True Range) but less than 1.5 ATR.
    *   If the confirmation candle is large, place the stop below it to keep 1R tight. If small, the stop may be placed below the reversal candle.
*   **Target Price:** Sell Limit Order placed at 2.5R above the entry price.

### 6.4.2 Long Trade Example: RGN (April)
*   **Setup:** Price retraces to 50 MA. Single candle reversal (bullish pin bar) followed by confirmation.
*   **Indicators:** Stochastics oversold (<30) and crossed bullish. MACD (5,10,9) bullish.
*   **Execution:**
    *   Confirmation High: $34.35.
    *   Entry (Buy Stop): $34.38 (3 cents above). Limit: $34.41.
    *   ATR Analysis: 60-period ATR approx $0.95. Max 1.5R = $1.42.
    *   Stop Loss Options: Below confirmation ($33.37) or below reversal ($32.70).
    *   Selected Stop: $33.37. Distance = $1.01 (approx 1.06 ATR). This is valid.
    *   1R = $1.02. Target (2.5R) = $2.55 above entry.
    *   Target Price: $36.93.
*   **Outcome:** Order triggered next day. Price hit target at $36.93.

### 6.4.3 Additional Long Examples
*   **SNPS:** Retraces to 50 MA. Two-candle reversal. MACD bearish but crossed bearish on May 28th (6 days prior), satisfying the >5 candle rule. Stochastics <30. Entry above confirmation high. Target hit in 6 days.
*   **KMX:** Retraces to 50 MA. Bullish pin bar. MACD bearish but crossed bearish on Jan 20th (10 days prior). Valid. Stop placed below confirmation candle to maintain proper ATR distance. Target hit.

## 6.5 Entry Criteria and Indicator Rules (Short)

To execute a Short Bounce trade, all the following criteria must be met:

1.  **Trend Confirmation:** Confirmed downtrend sequence:
    *   18 EMA < 50 EMA < 100 EMA < 200 EMA.
2.  **Bounce Location:** Price rallies to bounce off 50, 100, or 200 MA.
3.  **Pattern:** Valid Two-Candle or Single-Candle Reversal Pattern with Confirmation.
4.  **Stochastics:** Overbought (>70) at the reversal candle.
5.  **MACD (5, 10, 9 Setting):**
    *   Ideally bearish.
    *   If bullish, acceptable only if it crossed bullish more than 5 candles ago.

### 6.5.1 Order Placement and Risk Management (Short)
*   **Entry:** Sell Stop Limit Order placed a few cents below the low of the confirmation candle.
    *   *Limit Price:* Set below the stop price (e.g., 3 cents lower).
*   **Stop Loss:** Buy Stop Order placed above the confirmation candle or above the reversal candle.
    *   Must adhere to the 1 ATR to 1.5 ATR distance rule.
*   **Target Price:** Buy Limit Order placed at 2.5R below the entry price.

### 6.5.2 Short Trade Examples
*   **LPT:** Clear downtrend. Rallies to 50 MA. Bearish pin bar. Stochastics >70. MACD bearish. Confirmation candle validates. Sell stop 3 cents below confirmation low. Stop loss 3 cents above confirmation high. Target 2.5R below. Trade successful.
*   **JCP:** Downtrend. Rallies to 50 MA. Bearish pin bar. Stochastics >70. MACD bearish. Confirmation candle validates. Sell limit 2 cents below low. Stop 2 cents above reversal high. Order triggered after an inside bar delay. Trade successful.
*   **DHI:** Downtrend. Rallies to 50 MA. Two-candle reversal. Stochastics >70. MACD bullish but crossed bullish exactly 5 candles ago (acceptable). Confirmation validates. Sell stop 3 cents below low. Stop above swing high. Trade successful.

## 6.6 Special Case: The 18 EMA Bounce

The 18 EMA is weaker support/resistance than the 50, 100, or 200 MAs. Trades bouncing off the 18 EMA are only taken under strict momentum conditions.

### 6.6.1 Long 18 EMA Criteria
1.  **Dual MACD Requirement:**
    *   MACD (5, 10, 9) must be bullish (lines above zero).
    *   MACD (18, 50, 9) must also be bullish (lines above zero).
2.  **Stochastics:** Must be oversold (<30) at the bounce.
3.  **Pattern:** Valid reversal pattern with confirmation.

### 6.6.2 Short 18 EMA Criteria
1.  **Dual MACD Requirement:**
    *   MACD (5, 10, 9) must be bearish (lines below zero).
    *   MACD (18, 50, 9) must also be bearish (lines below zero).
2.  **Stochastics:** Must be overbought (>70) at the bounce.
3.  **Pattern:** Valid reversal pattern with confirmation.

### 6.6.3 Examples
*   **DPZ (Long):** Gaps up, pulls back to 18 EMA. Two-candle reversal. Both MACDs bullish above zero. Stochastics <30. Valid.
*   **BIO (Long):** Bounces off 18 EMA. Both MACDs bullish. Stochastics <30. Valid.
*   **YPF (Short):** Rallies to 18 EMA. Trade-through pattern. Both MACDs bearish below zero. Stochastics >70. Confirmation candle closes below reversal low. Valid.

## 6.7 High Probability Trades: Confluence Points

To maximize expectancy, trades should exhibit at least **two out of three** confluence points at the bounce location.

### 6.7.1 Confluence Factors
1.  **Previously Tested MA:** The moving average being bounced off has been tested and held as support/resistance recently.
2.  **Fibonacci Level:** The bounce occurs at the 50% or 61.8% Fibonacci retracement level of the preceding impulsive wave (A to B to C).
3.  **Horizontal Support/Resistance:** The bounce aligns with a prior horizontal price level (resistance turned support, or support turned resistance).

### 6.7.2 Statistical Performance (205 Trades Analysis)
*   **0 Confluence Points:** 35 trades. Win Rate: 32%.
*   **1 Confluence Point:** 94 trades. Win Rate: 46%.
*   **2 Confluence Points:** Win Rate: 56%. Expectancy: 0.54R per trade.
    *   *Implication:* Taking 100 trades with 2 confluence points at 1% risk per trade yields approximately 54% return on capital.

### 6.7.3 High Probability Examples
*   **AWR (Long):** Bounces off 100 MA (tested before) + 50% Fibonacci level. (2 Confluence).
*   **EGD (Long):** Bounces off 50 MA (tested before) + 61.8% Fibonacci level. (2 Confluence).
*   **CSII (Long):** Bounces off 18 EMA (tested before) + Horizontal Support + 61.8% Fibonacci. (3 Confluence). Highly profitable.
*   **NOW (Long):** Bounces off 50 MA (tested before) + Horizontal Support + 61.8% Fibonacci. (3 Confluence).
*   **CDAY (Long):** Bounces off 100 MA (tested before) + Horizontal Support. (2 Confluence).
*   **FRPT (Long):** Bounces off 50 MA (tested before) + Horizontal Support/Resistance. (2 Confluence).
*   **BRC (Long):** 50 MA not tested, but aligns with 50% Fibonacci + Horizontal Support. (2 Confluence).
*   **BAND (Long):** MA tested before + 61.8% Fibonacci. (2 Confluence).
*   **ABCB (Short):** Bounces off 50 MA (tested before) + 50% Fibonacci retracement of the down move. (2 Confluence).

## 6.8 Target Price Setting and Trade Management

### 6.8.1 Standard Management Protocol
1.  **Fixed Target:** Set Take Profit (TP) at 2R or 2.5R above entry. Alternatively, set TP at the next resistance level if it is at least 2R away.
2.  **Breakeven Rule:** Once price moves +1R in favor, move the stop loss to the entry price. This creates a risk-free trade.
3.  **Fire and Forget:** Do not intervene. Allow the trade to hit TP or the adjusted stop loss. Avoid emotional adjustments.
4.  **Earnings Warning:** Always exit trades prior to earnings announcements to avoid gap risk.

### 6.8.2 Alternative Target Strategies (Position Splitting)
Traders may split positions to balance win rate and reward.
*   **Option 1:** Fixed 2.5R.
*   **Option 2:** Fixed 2R.
*   **Option 3:** Half position at 2R, half at 2.5R.
*   **Option 4:** Half position at 1.5R, half at 2.5R.
*   **Option 5:** Half position at 1R, half at 2R.

*Management for Split Positions:* When price hits +1R, move the stop loss for the remaining position to breakeven.

### 6.8.3 Performance Statistics (64 High Probability Trades, Jan–Sept 2018)
*   **Fixed 2.5R Target:**
    *   23 trades hit 2.5R.
    *   25 trades hit stop loss (-1R).
    *   16 trades hit breakeven (reached +1R, stop moved, then reversed).
    *   Win Rate: 36%.
    *   Total R: 32.5R.
    *   Expectancy: 0.51R per trade.
*   **Fixed 2R Target:** Win Rate increases to 47%.
*   **Split TP (1R / 2R):** Win Rate increases to 61%, but Total R drops to 24R (Expectancy 0.3R).
*   **Conclusion:** Higher targets increase total R and expectancy but lower win rate. Traders should choose based on psychological comfort with win rates versus reward multiples.

## 6.9 Daily Screening Process and Tools

### 6.9.1 Market Context Check
Before scanning, analyze the S&P 500 (SPX):
*   Check trend via moving averages and Bollinger Bands.
*   Check Stochastics for overbought/oversold conditions.
*   *Rule:* Only look for long trades in a bullish market; only look for short trades in a bearish market.

### 6.9.2 Scanning Software
*   **TC2000:** Preferred for precision. Requires subscription. Scripts available in Lesson 9 Resources.
*   **ThinkOrSwim:** Free alternative. Scripts available in Lesson 9 Resources.

### 6.9.3 TC2000 Scan Setup
1.  Download bounce scripts from Lesson 9 Resources.
2.  Open Easy Scan > New Condition > Write New Formula.
3.  Paste the script (e.g., "18 Bounce Long") into the formula box.
4.  Save the scan. Repeat for 50, 100, 150, 200 bounces (Long and Short).
5.  Run scans daily.

### 6.9.4 ThinkOrSwim Scan Setup
1.  Open Stock Hacker.
2.  Add Study Filter > Custom > ThinkScript Editor.
3.  Paste the downloaded script (e.g., "18 Bounce Long").
4.  Add additional filters (e.g., Average Volume > 150,000; Price > $5).
5.  Save the scan template.

### 6.9.5 Daily Screening Walkthrough (Example: December 13)
*   **Market:** SPX in clear uptrend. Focus on Longs.
*   **50 Bounce Long Scan Results:**
    *   **EV:** Valid pattern. MACD bearish but crossed >5 candles ago. Stochastics <30. MA tested before. *Failed:* Not at Fibonacci level, no horizontal support. Low probability. Skip.
    *   **CMTL:** Valid pattern. MA tested before. 50% Fibonacci. Horizontal support. (3 Confluence). *Failed:* MACD crossed bearish within 5 candles. Invalid per rules.
    *   **JBLU:** *Failed:* MACD just crossed bearish. Stochastics not below 30.
    *   **CE:** *Failed:* Stochastics not below 30.
*   **100 Bounce Long Scan Results:**
    *   **ZNGA:** *Failed:* Stochastics not below 30.
    *   **EXP:** *Failed:* Stochastics not below 30.
*   **Conclusion:** No valid trades taken. Patience is required; do not force trades.

## 6.10 Filtering for High Momentum Stocks

To ensure high probability, bounce setups should only be taken in stocks with strong relative strength and sector alignment.

### 6.10.1 Momentum Criteria
1.  **Relative Strength (RS):** RS Rating > 80 (via IBD app) or RS line rising above the rate line on charts.
2.  **Sector/Industry Trend:** The stock's sector and industry must be in an uptrend (check via Finviz or TC2000 sector charts).
3.  **Volume:** Average daily volume > 150,000–200,000 shares.

### 6.10.2 Efficient Screening Workflow
Instead of scanning the entire universe, create watchlists of high-momentum stocks:
1.  **Source Lists:**
    *   Investors.com "85/85" list (RS > 85, Earnings Rank > 85).
    *   Custom list sorted by highest Relative Strength and EPS Rank.
2.  **Export:** Download lists to Excel weekly.
3.  **Create Watchlists:**
    *   **TC2000:** New Personal Watchlist > Paste symbols from Excel.
    *   **ThinkOrSwim:** Create New Watchlist > Import symbols from clipboard.
4.  **Scan Watchlists:** Run bounce scans exclusively against these watchlists. This ensures every setup identified is already a high-momentum candidate, saving analysis time and increasing win probability.