---
title: "Bollinger Mean Reversion"
---

## 5.1 Introduction and Prerequisites

This chapter provides advanced notes on the Bollinger Mean Reversion (BMR) and Capitulation trading systems. It introduces specific filters designed to isolate high-probability setups, thereby improving both the win rate and expected profit of these strategies. 

**Prerequisite:** Before studying this material, you must have a complete understanding of the core BMR and Capitulation strategies covered in the Level 2 course. These advanced notes build directly upon that foundational knowledge.

## 5.2 Strategy Methodology and Performance Metrics

The BMR is a swing trading strategy that operates on a counter-trend, mean reversion basis. The objective is to buy stocks that are oversold at the bottom of a downtrend to capture the reversion to the mean, and to short stocks that are overbought at the top of an uptrend to capture the reversion back to the moving average.

### 5.2.1 Statistical Expectancy and Performance
The average expectancy profile for this strategy ranges from **0.5R to 1.2R per trade**. Performance metrics are as follows:
*   **Average Win Rate:** 50% to 80%, depending on the period of the month.
*   **Average Winning Trade:** +2R.
*   **Average Losing Trade:** -1R.

When analyzing unfiltered BMR trades over a sample of 207 trades across two and a half years, the baseline expectancy is **0.25R per trade**. This means that on average, every trade taken yields 0.25R in profit. Over 100 trades, this results in approximately 25R in total profit, accounting for a mix of 2R winners and -1R losers.

## 5.3 Chart Configuration and Indicator Setup

To execute the BMR strategy effectively, a specific chart configuration is required. The following setup is demonstrated using TC2000 and ThinkOrSwim charting software.

### 5.3.1 Required Indicators
1.  **Bollinger Bands:** Standard default settings (20-period Simple Moving Average, 2 standard deviations).
2.  **50-period Simple Moving Average (SMA):** Displayed as a solid blue line.
3.  **20-period Exponential Moving Average (EMA):** Displayed as a red dotted line.
4.  **MACD:** Settings of 12, 26, 9.
5.  **Full Stochastics:** Settings of 5, 3, 3.
6.  **Relative Strength Index (RSI):** Setting of 10. (Note: Williams %R may also be used for Capitulation setups).
7.  **Optional:** Commodity Channel Index (CCI) may be used as an alternative momentum indicator.

### 5.3.2 TC2000 Setup Instructions
1.  Open a blank chart.
2.  Navigate to **Chart Settings** > **Plot Styles** and select **Candlesticks** (Color based on Open vs. Close: Green for bullish, Red for bearish).
3.  Add **Bollinger Bands** via the App Indicator menu.
4.  Add the **50 SMA** via the Moving Average tool.
5.  Add the **20 EMA** via the Moving Average tool (Edit settings to 20, Red, Dotted).
6.  Add **MACD** (12, 26, 9).
7.  Add **RSI** (Period 10). Remove the moving average overlay on the RSI window if present.
8.  Add **Stochastics** and edit settings to Period 5, %K 3, %D 3.
9.  Resize windows for optimal visibility and save the chart template as "BMR".

## 5.4 Core Long BMR Setup Rules and Execution

### 5.4.1 Candlestick Criteria: The Bullish Pin Bar
A bullish pin bar is a specific reversal candlestick pattern characterized by:
*   A relatively small candle body (or a Doji where open and close are identical).
*   Little to no upper shadow.
*   A long lower shadow that is at least **2/3 the range** of the entire candle (from the highest high to the lowest low).

### 5.4.2 Divergence Criteria
A bullish divergence reversal pattern must be present. This is identified by:
*   Connecting swing lows on the price chart.
*   Connecting corresponding swing lows on at least one indicator (MACD, Stochastics, or RSI).
*   **Condition:** Price makes a **lower low**, while the indicator makes a **higher low**. At least one divergence is required.

### 5.4.3 Market and Stock Conditions
Four specific entry rules must be met precisely:
1.  **Market Trend:** The S&P 500 (or SPY ETF) must be **above the 20 EMA**, and the S&P 500 MACD must be bullish (MACD line above signal line). Long swing trades are only taken when the overall market is bullish.
2.  **Price Action:** The stock price must decline rapidly to a new low, specifically the **lowest low of the last six months**. Highest probability occurs when this coincides with a previous level of support.
3.  **Bollinger Band Position:** A bullish pin bar must pierce or appear outside the **lower Bollinger Band**. It must be positioned far enough away from the 20 EMA to avoid immediate resistance.
4.  **Divergence:** At least one bullish divergence must appear on the MACD, Stochastics, or RSI.

### 5.4.4 Order Placement and Position Sizing Rules
*   **Entry Order:** Place a **Buy Stop Limit** order above the high of the bullish pin bar. The offset depends on the stock price:
    *   Stock < $5: Entry 1 cent above high.
    *   Stock $5 – $10: Entry 2 cents above high.
    *   Stock $10 – $50: Entry 3 cents above high.
    *   Stock $50 – $100: Entry 5 cents above high.
    *   Stock > $100: Entry 10 cents above high.
    *   *Limit Price:* Set the limit price the same number of cents above the stop price to prevent excessive gap-up fills.
*   **Stop Loss Order:** Place a **Sell Stop** order the same number of cents below the low of the bullish pin bar. The distance between entry and stop loss is **1R**.
*   **Profit Target:** Place a **Sell Limit** order at **2R** above the entry price.
*   **Spatial Requirements:**
    *   There must be at least **1R of distance** between the entry price and the 20 EMA. This allows the trade to reach 1R profit so the stop can be moved to breakeven before hitting resistance.
    *   There must be at least **2R of distance** between the entry price and the 50 SMA. The 50 SMA acts as strong resistance; profits must be taken before the price hits this level.

### 5.4.5 Trade Management
Once the trade is triggered:
1.  If the price moves **1R in your favor**, shift the stop loss to the entry price (breakeven).
2.  Allow the trade to run until it hits either the profit target (2R) or the stop loss (-1R).
3.  **Possible Outcomes:** +2R win, -1R loss, or 0R breakeven.

### 5.4.6 Long Trade Examples
*   **Electronic Arts (EA):** Price declined to a 6-month low. Bullish pin pierced lower Bollinger Band. Bullish divergence present on MACD and RSI. Entry placed above pin high, stop below pin low. Spatial rules met relative to 20 EMA and 50 SMA.
*   **Adobe:** Price declined to new low. Bullish pin outside lower Bollinger Band. Bullish divergence confirmed. Entry placed above pin high. Stop loss below pin low. Target set at 2R before 50 SMA.
*   **Digital Realty Trust (DLR):** Clear downtrend with oversold conditions. Bullish pin pierced lower Bollinger Band. Bullish divergence on MACD (price lower lows, MACD higher lows). Stock price ~$90; entry placed 5 cents above pin high, limit 5 cents above stop. Stop loss 5 cents below pin low. Trade hit 2R target in three days.
*   **Steel Dynamics (STLD):** Price hit new low. Bullish pin outside lower Bollinger Band. Bullish divergence on Stochastics. Stock price ~$23; entry placed 3 cents above pin high. Stop loss 3 cents below pin low. Trade hit 2R target in five days.
*   **Abercrombie & Fitch (ANF/AWR context):** Price declined rapidly to new low. Bullish pin at lower Bollinger Band. Bullish divergence on Stochastics. Small candle resulted in small 1R distance. Trade hit 2R target within two to three days.
*   **Goldman Sachs (GS):** Price declined to new low. Bullish pin at lower Bollinger Band. Bullish divergence on MACD. Stock price ~$180; entry placed 10 cents above pin high, limit 10 cents above stop. Stop loss 10 cents below pin low. Trade hit 2R target in approximately 12–13 days.

## 5.5 Core Short BMR Setup Rules and Execution

### 5.5.1 Candlestick Criteria: The Bearish Pin Bar
A bearish pin bar is a reversal pattern characterized by:
*   A small candle body (or Doji).
*   Little to no lower shadow.
*   A long upper shadow that is at least **2/3 the range** of the entire candle.

### 5.5.2 Divergence Criteria
A bearish divergence reversal pattern must be present:
*   Connect swing highs on the price chart.
*   Connect corresponding swing highs on at least one indicator.
*   **Condition:** Price makes a **higher high**, while the indicator makes a **lower high**.

### 5.5.3 Market and Stock Conditions
Four specific entry rules must be met precisely:
1.  **Market Trend:** The S&P 500 (or SPY ETF) must be **below the 20 EMA**, and the S&P 500 MACD must be bearish. Short trades are only taken when the overall market is bearish.
2.  **Price Action:** The stock price must rise rapidly to a new high, specifically the **highest high of the last six months**. Highest probability occurs when this coincides with a previous resistance level.
3.  **Bollinger Band Position:** A bearish pin bar must pierce or appear outside the **upper Bollinger Band**. It must be positioned far enough away from the 20 EMA.
4.  **Divergence:** At least one bearish divergence must appear on the MACD, Stochastics, or RSI.

### 5.5.4 Order Placement and Position Sizing Rules
*   **Entry Order:** Place a **Sell Stop Limit** order below the low of the bearish pin bar using the same cent-offset rules as long trades (1–10 cents based on price). Limit price is set the same number of cents below the stop price.
*   **Stop Loss Order:** Place a **Buy Stop** order the same number of cents above the high of the bearish pin bar. Distance is **1R**.
*   **Profit Target:** Place a **Buy Limit** order at **2R** below the entry price.
*   **Spatial Requirements:**
    *   At least **1R distance** to the 20 EMA.
    *   At least **2R distance** to the 50 SMA (which acts as strong support).

### 5.5.5 Short Trade Examples
*   **Visa (V):** Price rose to a 6-month high. Bearish pin outside upper Bollinger Band. Bearish divergence on Stochastics (price higher highs, indicator lower highs). Entry 5 cents below pin low, stop 5 cents above pin high. Trade hit target profit.
*   **CyrusOne (CONE/CRUS context):** Price rose to new high, overextended outside upper Bollinger Band. Bearish divergence on MACD. Entry 5 cents below pin low, stop 5 cents above pin high. Trade hit target before 50 SMA support.
*   **Cognizant (COG):** Price rose to new high. Bearish pin bar present. Bearish divergence confirmed (price higher high, indicator lower high). Entry below pin low, stop above pin high. Trade moved down to target.
*   **Terp (TERP):** Short setup in September. Bearish pin penetrated upper Bollinger Band. Bearish divergence on MACD. No double top pattern, but valid Fibonacci extension (see Section 5.7). Shorted below pin bar; price reversed down significantly.

## 5.6 Advanced Filter 1: Taking Out Stops

This filter identifies setups where market makers manipulate price to trigger stop losses before reversing, significantly increasing probability.

### 5.6.1 Concept and Mechanics
*   **Long Setups:** Previous traders who bought at a prior low place stop losses just below that low. Market makers push price below this level to trigger stops, collecting shares at a low price before pushing price up.
*   **Short Setups:** Previous short sellers place stop losses just above a prior high. Market makers push price above this level to trigger cover orders, selling shares into the liquidity before pushing price down.

### 5.6.2 Long Setup: Double Bottom Pattern
*   **Pattern:** Price makes a first low, rallies, then declines to make a second low that forms a bullish pin bar.
*   **Requirement:** The bullish pin bar's wick must pierce **below the previous low** (taking out stops).
*   **Critical Rule:** The bullish pin bar **must close back above the previous low**. If it closes below, the previous support becomes resistance, making the trade high-risk.
*   **Entry:** Buy stop limit above the high of the bullish pin bar (which is above the previous low line).
*   **Examples:**
    *   **SENS:** Bullish pin formed a double bottom, taking out stops below the first low, and closed above the dotted line. Bullish divergence on MACD confirmed.
    *   **3M (MMM):** Price made first low, second low with bullish pin took out stops, closed above previous low. Bullish divergence on MACD present.
    *   **Capitulation Example:** Williams %R below -80 with a One White Soldier pattern. The pattern took out the previous low and formed a bullish confirmation candle. Entry placed above the previous low line.

### 5.6.3 Short Setup: Double Top Pattern
*   **Pattern:** Price makes a first high, retraces, then rallies to make a second high that forms a bearish pin bar.
*   **Requirement:** The bearish pin bar's wick must pierce **above the previous high** (taking out stops).
*   **Critical Rule:** The bearish pin bar **must close back below the previous high**. If it closes above, previous resistance becomes support, making the trade high-risk.
*   **Entry:** Sell stop limit below the low of the bearish pin bar (which is below the previous high line).
*   **Examples:**
    *   **CMC:** Price made first high, second high with bearish pin took out stops above previous high, closed below dotted line. Bearish divergence present. Shorted below pin low.
    *   **General Pattern:** Price makes high, retraces, makes new high with bearish pin. Pin takes out stops above previous high. Entry below resistance line.

## 5.7 Advanced Filter 2: Fibonacci Extensions

Using Fibonacci extensions (projections) further increases expectancy. Normal BMR expectancy is 0.25R. Adding filters improves this:
*   **Fibonacci Projection ≥ 38.2%:** Expectancy increases to **0.38R**.
*   **Taking Out Stops:** Expectancy increases to **0.41R**.
*   **Both Conditions Met:** Expectancy increases to **0.51R**. (Note: This is rare; only 39 trades met both conditions over 2.5 years, but they yield the highest profit per trade).

### 5.7.1 Identifying ABC Patterns and Retracement Levels
1.  Identify an **ABC pattern** preceding the pin bar.
    *   **Long:** A to B is impulsive down, B to C is corrective up.
    *   **Short:** A to B is impulsive up, B to C is corrective down.
2.  Use the **Fibonacci Retracement Tool** from A to B.
3.  **Requirement:** Point C must retrace to a valid Fibonacci level: **38.2%, 50%, or 61.8%**. If C does not align with these levels, the projection tool cannot be used.

### 5.7.2 Applying the Projection Tool
1.  Once C is confirmed at a retracement level, use the **Fibonacci Extension/Projection Tool**.
2.  Plot from A to B, then drag the extension line to C.
3.  **Requirement:** The pin bar must align with a Fibonacci extension level: **38.2%, 50%, 61.8%, or 100%**.
4.  Alignment indicates a high probability of reversal.

### 5.7.3 Chart Examples
*   **SENS (Long):** ABC pattern identified. C retraced to 50%. Projection tool showed pin bar aligning with the **61.8% extension level**. High probability reversal occurred.
*   **3M (MMM) on ThinkOrSwim:** Bullish pin outside lower Bollinger Band with divergence. ABC pattern identified. C retraced to 50%. Projection tool confirmed pin bar at **61.8% extension level**. Double bottom taking out stops also present.
*   **Kellogg (K) (Long):** Bullish pin outside lower Bollinger Band with MACD divergence. Double bottom taking out stops present. ABC pattern identified. C retraced to 50%. Projection tool confirmed pin bar support at **61.8% extension level**. Profit taken at 50 SMA.
*   **EQM (Long):** Bullish pin with slight Stochastics divergence. ABC pattern identified. C retraced to 50% (or 61.0% depending on swing selection). Projection tool confirmed pin bar support at **100% extension level**. Strong reversal followed.
*   **TERP (Short):** Bearish pin outside upper Bollinger Band with MACD divergence. No double top. ABC pattern identified (A to B up, B to C down). C retraced to **38.2%**. Projection tool confirmed pin bar at **100% extension level**. Powerful short setup.

## 5.8 Screening, Scanning, and Daily Routine

### 5.8.1 TC2000 PCF Script and EasyScan Setup
To find setups efficiently, use PCF scripts and EasyScans.
1.  **Create PCF Scripts:**
    *   Go to **Library** > **Conditions** > **New Condition Formula**.
    *   Name: "BMR Long". Paste the provided BMR Long script. Click OK.
    *   Name: "BMR Short". Paste the provided BMR Short script. Click OK.
2.  **Create EasyScans:**
    *   Go to **EasyScan** > **Create New**.
    *   Select **All US Stocks**.
    *   Add Condition: "BMR Long" is True. Save as "BMR Long".
    *   Repeat for "BMR Short".

### 5.8.2 Daily Screening Workflow
1.  **Check Market Trend:** Open S&P 500/SPY chart.
    *   If above 20 EMA and MACD bullish: Screen for **Long** setups only.
    *   If below 20 EMA and MACD bearish: Screen for **Short** setups only.
2.  **Run Scan:** Execute the appropriate EasyScan. Review results one by one.
3.  **Evaluate Setups:** Check for pin bars, divergence, spatial rules (1R to 20 EMA, 2R to 50 SMA), and advanced filters.
4.  **Limit Trades:** Take no more than **two setups per day**.

### 5.8.3 Screening Example Analysis
*   **UPS:** Bullish pin, double divergence, 6-month low. However, pin bar was too long, making 1R distance too large. Could not reach 2R target before hitting moving averages. **Rejected.**
*   **ROSDK:** Bullish pin outside lower Bollinger Band. Bullish divergence on Stochastics.
    *   High: 31.65. Entry: 31.68 (3 cents above). Limit: 31.71.
    *   Low: 30.68. Stop Loss: 30.65 (3 cents below).
    *   Risk (1R): $1.03. Target (2R): 33.74.
    *   Spatial rules met. **Accepted.**
*   **MLI:** Lowest low in 6 months. Double bullish divergence (RSI and MACD). Spatial rules met. **Accepted.**
*   **ECHO:** Double divergence present. However, too close to 20 EMA and 50 SMA. Risk of hitting resistance before target. **Rejected.**
*   **RTRX:** Bullish pin and divergence present. Too close to moving averages; cannot reach 2R before 50 SMA. **Rejected.**
*   **ABC:** Bullish pin too long; 1R distance too large to reach 2R safely. **Rejected.**
*   **NYCB:** Price declined steadily rather than sharply (90-degree drop preferred). Teamwave pattern reduces reversal probability. **Rejected.**
*   **General Rejections:** Setups too close to 20 EMA resistance, 1R distance too large, or stocks below $1.

## 5.9 Advanced Trade Management via Price Action

An alternative to the binary 2R/-1R exit system is managing trades based on price action to optimize expectancy.

### 5.9.1 Price Action Exit Rules
*   **Long Trades:**
    *   Move stop loss a few cents below the **first bearish candle**.
    *   Move stop loss below the **first bearish reversal pattern** (e.g., bearish pin bar).
    *   Move stop loss below the **first candle that hits resistance** (20 EMA or 50 SMA).
*   **Short Trades:**
    *   Move stop loss a few cents above the **first bullish candle**.
    *   Move stop loss above the **first bullish reversal pattern**.
    *   Move stop loss above the **first candle that hits support** (20 EMA or 50 SMA).

### 5.9.2 Performance Impact
This approach creates non-binary outcomes:
*   **Average Winners:** Reduces from 2R to approximately **1.6R – 1.7R**.
*   **Average Losers:** Reduces from -1R to approximately **-0.6R**.
*   **Result:** Maintains positive statistical expectancy while protecting profits and limiting losses.

### 5.9.3 Management Examples
*   **FRAC:** Entered long. Price hit 20 EMA resistance. Stop moved below resistance candle. Next day bearish candle appeared; stop moved below it. Price reversed down, hitting stop. Result: Small profit (~0.25R–0.3R) instead of -1R loss.
*   **AMBR:** Entered long. Price hit moving average resistance. Stop moved below resistance candle. Next day stop hit. Result: Profit of ~0.4R–0.5R.
*   **SCW (Short):** Entered short. Series of bearish candles followed by first bullish candle. Stop moved above bullish candle high. Next day stop triggered. Result: Small profit (~0.3R).
*   **YELP (Short):** Entered short. Bullish candle appeared; stop moved above it. Price continued down to 2R target. Result: Full 2R win.

## 5.10 Risk Management and Trade Selection Guidelines

Strict adherence to these rules is required to preserve capital and maintain system integrity.

1.  **Earnings Announcements:**
    *   Avoid entering trades if earnings are announced within the next **10 days**.
    *   Identify earnings dates via the dollar sign ($) on ThinkOrSwim charts or via Google Finance.
    *   Exit existing trades before earnings announcements to avoid gap risk.
2.  **Volume Requirements:**
    *   Avoid stocks with less than **150,000 average daily volume**. Low volume stocks are filtered out in the screening script.
3.  **Shorting Restrictions:**
    *   Avoid shorting stocks priced **below $10**.
    *   Avoid shorting stocks with a market cap **below $1 billion**.
    *   Avoid shorting stocks in the **Biotechnology or Pharmaceutical** industries.
4.  **Longing Restrictions:**
    *   Avoid stocks priced **below $1**.
    *   Stocks between $1 and $10 are acceptable for long trades.
5.  **Trade Frequency:**
    *   Limit trading to a maximum of **two setups per day**. If no high-probability setups exist, do not trade.

By combining the core BMR rules with the "Taking Out Stops" and Fibonacci Extension filters, and adhering to strict risk management and screening protocols, traders can achieve a robust, positive expectancy swing trading system.