---
title: "Capitulation"
---

## 6.1 Introduction & Strategy Overview

The Capitulation strategy is a short-term, counter-trend swing trading methodology designed to identify and capitalize on oversold conditions in stocks and exchange-traded funds (ETFs). This strategy seeks to enter long positions when assets have experienced a severe decline on both short-term and long-term timeframes, creating a high probability of a short-term counter-reaction to the upside.

Key characteristics of the Capitulation strategy include:
*   **Strategy Type:** Short-term counter-trend trading.
*   **Direction:** Long-only.
*   **Market Context:** Must be executed only when the broader market is highly bullish. Specifically, the S&P 500 index must be trading above its 20-day Exponential Moving Average (20 EMA).
*   **Performance Metrics:**
    *   Average Expectancy: 0.5R to 1.2R.
    *   Average Win Rate: 50% to 80% (varies by month).
    *   Average Win: 2R.
    *   Average Loss: -1R.

## 6.2 Conceptual Framework: Understanding Capitulation

The term "capitulation" originates from military terminology, meaning to surrender or give up. In financial markets, capitulation occurs when the selling pressure exhausts itself because all remaining sellers have surrendered their positions.

A market or stock bottoms when there are no sellers left. This occurs when the final holders, who were clinging to the last remnants of hope, finally give up and sell. This phenomenon is often described as "blood in the streets." At this precise moment of maximum pessimism and panic selling, early institutional players and market makers step in to accumulate shares, driving the price upward.

The objective of the Capitulation strategy is to buy when anyone who could be convinced to sell has already sold, leaving only buyers in the market. This effectively shakes out weak holders. However, entry is not based solely on the depth of the decline; traders must wait for specific price action confirming that a reversal is underway.

## 6.3 Chart Setup & Indicators

To execute the Capitulation strategy, charts must be configured with specific moving averages and oscillators. The following setup is demonstrated using the TC2000 platform, though these indicators are available on most charting software.

### 6.3.1 Required Indicators
1.  **20-day Exponential Moving Average (20 EMA):** Used to gauge short-term trend and potential resistance.
2.  **50-day Simple Moving Average (50 SMA):** Used to gauge medium-term trend and primary profit target resistance.
3.  **Williams %R (10-day setting):** Measures short-term oversold conditions.
4.  **Williams %R (260-day setting):** Measures long-term oversold conditions. Note: 260 days represents approximately one year of trading days (260 weekdays).

### 6.3.2 TC2000 Configuration Steps
1.  **Add Moving Averages:**
    *   Click the "+" sign to add an indicator.
    *   Select "Moving Average Exponential." Change the default period to **20**. Set the line style to red and dotted.
    *   Add a second moving average: Select "Moving Average Simple." Set the period to **50**.
2.  **Add Williams %R:**
    *   Click the "+" sign and select "Williams %R."
    *   Edit the default setting (14) to **10**.
    *   Add a second Williams %R indicator. Edit the setting to **260**.
    *   Adjust the window size to accommodate both oscillators.

### 6.3.3 Reading the Williams %R
The Williams %R is an oscillator bounded between 0 and -100.
*   **Upper Boundary:** -20.
*   **Lower Boundary:** -80.
*   **Signal Line:** The plotted line indicating current momentum.
*   **Oversold Condition:** When the signal line drops below -80, the asset is considered oversold.
    *   Williams %R (10) below -80 indicates short-term oversold conditions.
    *   Williams %R (260) below -80 indicates long-term (one-year) oversold conditions.

For a valid Capitulation setup, both Williams %R indicators must be below -80 at the swing low, confirming that both short-term and long-term sellers have exhausted their positions.

## 6.4 The One White Soldier Confirmation Pattern

The Capitulation strategy relies on a specific candlestick pattern known as the **One White Soldier Confirmation**. This pattern consists of two candles: a bearish candle followed immediately by a bullish candle.

### 6.4.1 Pattern Structure
1.  **Swing Low Candle (Candle 1):** A bearish candle that marks the lowest low of the selloff.
2.  **Confirmation Candle (Candle 2):** A bullish candle that immediately follows the swing low candle.

### 6.4.2 Rules for the One White Soldier Pattern
For the pattern to be valid, the following conditions must be met:
1.  **Open and Higher Low:** The bullish confirmation candle must open above the close of the bearish swing low candle and must make a higher low than the swing low candle.
2.  **Close Above High:** The bullish confirmation candle must close above both the open and the high of the bearish swing low candle.

When these conditions are satisfied, the One White Soldier pattern is complete, signaling a potential reversal.

## 6.5 Entry Criteria & Rules

Traders must adhere to the following strict criteria before entering a Capitulation trade:

1.  **Market Trend:** The S&P 500 must be trading above its 20 EMA. The overall market environment must be bullish.
2.  **Price Action:** The stock must exhibit a rapid, steep decline (ideally parabolic or near 90-degree drop). Gradual declines are avoided because they do not induce the panic selling necessary for capitulation.
3.  **New Low:** The decline must result in a new low, specifically the lowest low in the last six months.
4.  **Oversold Confirmation:** At the swing low, both the Williams %R (10) and Williams %R (260) must be below -80.
5.  **Pattern Confirmation:** Immediately following the swing low, a valid One White Soldier pattern must form, adhering to the rules outlined in Section 6.4.

## 6.6 Order Execution & Risk Management

### 6.6.1 Entry Order
*   **Order Type:** Buy Stop Limit Order.
*   **Placement:** A few cents above the high of the confirmation candle.
*   **Cent Rule of Thumb:**
    *   Stock price < $5: Place entry 1 cent above confirmation high.
    *   Stock price $5 – $10: Place entry 2 cents above confirmation high.
    *   Stock price $10 – $50: Place entry 3 cents above confirmation high.
    *   Stock price $50 – $100: Place entry 5 cents above confirmation high.
    *   Stock price > $100: Place entry 10 cents above confirmation high.

### 6.6.2 Stop Loss Order
*   **Order Type:** Sell Stop Order.
*   **Placement:** A few cents below the low of the swing low candle (the bearish candle).
*   **1R Distance:** The distance between the entry price and the stop loss price defines the risk per share (1R).

### 6.6.3 Resistance and Reward-to-Risk Validation
Before entering, traders must verify that the setup offers sufficient room for profit relative to resistance levels:
1.  **20 EMA Clearance:** The entry must be far enough from the 20 EMA to allow for at least 1R of profit before the price hits the 20 EMA. The 20 EMA often acts as resistance during counter-trend moves.
2.  **50 SMA Clearance:** The setup must allow for at least 2R of profit before the price hits the 50 SMA.
3.  **Profit Target:** Place a Sell Limit Order at 2R above the entry price. This target should ideally sit below the 50 SMA.

### 6.6.4 Special Rule for Large Confirmation Candles
If the confirmation candle is exceptionally long or gaps up significantly, placing the stop loss below the swing low may result in a 1R distance that is too large.
*   **Threshold:** If 1R exceeds 1.5 times the Average True Range (ATR) of the stock, the risk is considered too high.
*   **Adjustment:** In such cases, place the stop loss below the low of the confirmation candle instead of the swing low candle, provided the confirmation candle is long enough to offer adequate protection.

## 6.7 Trade Management Rules

1.  **Trailing Stop:** Once the price moves 1R in your favor, move the stop loss to the entry price. This locks in a break-even position.
2.  **Exit Scenarios:**
    *   **Profit:** Price hits the 2R target (Sell Limit Order).
    *   **Break-Even:** Price reverses after the stop is moved to entry.
    *   **Loss:** Price hits the initial stop loss before reaching 1R (-1R loss).
3.  **Discipline:** Do not hold positions beyond the 2R target. Capitulation trades are counter-trend; exiting promptly prevents losses if the downtrend resumes.

## 6.8 Trade Examples

The following examples illustrate valid Capitulation setups and their execution:

*   **CAFD:** Exhibited a steep selloff with consecutive bearish candles. The swing low candle showed both Williams %R indicators below -80. The subsequent confirmation candle opened above the swing low close, made a higher low, and closed above the swing low high, completing the One White Soldier pattern. Entry placed above confirmation high; stop below swing low.
*   **YRCW:** Experienced panic selling and a steep decline. Swing low candle confirmed oversold conditions (Williams %R < -80). One White Soldier pattern formed. Entry triggered the next day. Position exited after approximately six days at the 2R profit target.
*   **EIS:** Steep selloff followed by a swing low with Williams %R oversold on both timeframes. One White Soldier pattern confirmed. Entry and stop placed accordingly. Position exited in 5–6 days at 2R profit.
*   **BXP:** Sharp decline pushed the stock into oversold territory. Swing low and confirmation candle formed a valid One White Soldier. Setup was far enough from the 20 EMA and 50 SMA to allow for 1R and 2R targets. Triggered the next day and exited in six days at 2R.
*   **SHLD (Circuit City Holdings):** Steep selloff with oversold Williams %R readings. The confirmation candle gapped up and was relatively long. Placing the stop below the swing low would have created a 1R distance exceeding 1.5 ATR. Therefore, the stop loss was placed below the confirmation candle low. Entry triggered the next day; exited in four days at 2R profit.
*   **ATGN:** Steep selloff, oversold Williams %R, valid swing low and confirmation candle. One White Soldier pattern confirmed. Entry triggered; position exited successfully.
*   **DDC:** Steep selloff with both Williams %R indicators oversold. Swing low and confirmation candle formed a valid One White Soldier. Entry triggered; position exited at 2R profit.

## 6.9 High-Probability Filters

While the core rules identify valid setups, two additional conditions significantly increase the probability of success. Traders should prioritize setups that meet either or both of these criteria.

### 6.9.1 Condition A: The Stop Run (Takeout) Pattern
This pattern exploits market maker behavior regarding retail stop losses.
1.  **Previous Low:** Price declines and forms a low point. Traders who buy the bounce typically place stop losses just below this level.
2.  **Stop Hunt:** Price rises slightly, then declines again, breaking below the previous low to trigger these stop losses. This forces retail traders to sell, allowing institutions to buy at lower prices.
3.  **Capitulation Setup:** The new low (swing low) must be lower than the previous low.
4.  **Confirmation:** A One White Soldier pattern forms at this new low. Crucially, the bullish confirmation candle must close **above the previous low**.
5.  **Execution:** Entry is placed above the confirmation candle high; stop loss below the swing low.

*Example: WUBA*
Price formed a previous low, rallied, then declined to make a new low (swing low), triggering stops. Williams %R was oversold. A One White Soldier pattern formed, and the confirmation candle closed above the previous low. Entry triggered the next day, and the trade hit the profit target.

### 6.9.2 Condition B: The Five Red Candles Pattern
This pattern identifies extreme short-term selling pressure.
1.  **Consecutive Decline:** Five or more consecutive bearish (red) candles appear in a row.
2.  **Structure:** These candles must make lower highs and lower lows.
3.  **Reversal:** The bullish confirmation candle must be the first candle to make a new high, completing the One White Soldier pattern.
4.  **Execution:** Standard entry and stop loss rules apply.

*Examples:*
*   **BBBY:** Five consecutive red candles making lower highs, followed by a confirmation candle. Williams %R oversold. Trade triggered and hit 2R target.
*   **SHLD:** Five red candles in a row. Confirmation candle was large, so stop loss was placed below the confirmation low. Trade hit 2R.
*   **Unnamed Example:** Six red candles in a row making lower highs/lows. Confirmation candle triggered entry; trade hit 2R.
*   **SUPV:** Seven consecutive red candles. More red candles indicate stronger capitulation. Trade triggered and hit target in 2–3 days.
*   **XEC:** Five red candles in a row followed by a confirmation candle. Trade hit 2R target.

## 6.10 Screening Process & Manual Selection

### 6.10.1 Setting Up the Screener (TC2000)
1.  **Create PCF Script:**
    *   Go to Library > Library Conditions > New Condition Formula.
    *   Name the condition "Capitulation."
    *   Paste the provided script designed to identify One White Soldier patterns at Williams %R oversold levels.
2.  **Create EZ Scan:**
    *   Go to EZ Scan > Create New EZ Scan List.
    *   Add Condition > Type "Capitulation."
    *   Save the scan as "Capitulation."

### 6.10.2 Daily Routine
1.  Verify the S&P 500 is above its 20 EMA.
2.  Run the "Capitulation" EZ Scan.
3.  Manually review results to filter for high-probability setups based on the core rules and high-probability filters.

### 6.10.3 Manual Filtering Walkthrough
The following examples demonstrate how to evaluate scan results:

*   **AKAM:** Valid One White Soldier and oversold Williams %R. However, the confirmation candle closed only 1 cent above the swing low high (weak momentum). Additionally, the decline was a gradual "stair-step" rather than a steep drop, creating potential resistance. **Decision:** Added to KIV (Keep In View) list; low confidence.
*   **MENH:** Confirmation candle was too long. Entry would be too close to the 20 EMA, preventing a 1R buffer. Furthermore, there was insufficient room to reach 2R before hitting the 50 SMA. **Decision:** Rejected.
*   **VRTV:** Prior price structure created potential resistance above the entry. **Decision:** Rejected.
*   **Unnamed Setup:** The bearish candle in the One White Soldier pattern was not the lowest low of the selloff. **Decision:** Invalid; rejected.
*   **ZEUS:** Price was too close to both the 20 EMA and 50 SMA, offering no room for 1R or 2R targets. **Decision:** Rejected.
*   **Unnamed Setup (Previous Day):** A gap existed above the entry level, creating resistance. The setup could not achieve a 1R cushion before hitting the gap. **Decision:** Rejected.
*   **XO:** Steep selloff, oversold Williams %R, valid One White Soldier with the bearish candle as the swing low.
    *   **Price:** $1.95 range.
    *   **Entry:** $1.97 (1 cent above $1.96 confirmation high).
    *   **Stop Loss Adjustment:** Initial stop below swing low ($1.54) created a 1R too close to the 20 EMA. Stop moved below confirmation low ($1.65) to $1.64.
    *   **Risk Calculation:** 1R = $1.97 - $1.64 = $0.33.
    *   **Target:** 2R = $0.66. Target Price = $1.97 + $0.66 = $2.63.
    *   **Order Setup:** Bracket order entered before market open. Buy Stop Limit at $1.97 (Limit $1.98). Sell Stop at $1.64. Sell Limit at $2.63.
    *   **Decision:** Accepted as a high-probability setup.
*   **NOR:** Confirmation candle too large; entry would hit the 20 EMA too quickly. **Decision:** Rejected.
*   **Sub-$1 Stocks:** Stocks trading below $1 are ignored. **Decision:** Rejected.

## 6.11 Conclusion

The Capitulation strategy is a straightforward, high-probability counter-trend approach that capitalizes on panic selling and institutional accumulation. Success depends on strict adherence to entry rules, proper risk management (1R risk for 2R reward), and the ability to filter scan results for setups with steep declines, clear oversold conditions, and favorable resistance spacing. By focusing on the One White Soldier confirmation pattern and utilizing high-probability filters such as stop runs and consecutive red candles, traders can effectively navigate oversold markets. Detailed order entry procedures will be covered in Lesson 9: Trading Routine.