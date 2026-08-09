---
title: "Breakout System"
---

## 2.1 Conceptual Foundation

### 2.1.1 Price Cycles and Consolidation
Prices move in distinct cycles, characterized by uptrends, downtrends, and periods of consolidation. An uptrend is defined by a series of higher highs and higher lows, indicating a bullish market where buying pressure exceeds selling pressure. However, an uptrend cannot continue indefinitely. Similar to a runner who must rest after a prolonged sprint, a strong uptrend is often followed by a period of sideways movement.

During this phase, the price ceases to make higher highs and instead forms a series of same highs at a specific price level. This level is known as resistance—a price zone where selling pressure consistently prevents further upward movement. Simultaneously, the price fails to decline significantly, establishing a level of support below. This sideways movement between defined support and resistance levels is termed consolidation.

### 2.1.2 The Breakout Mechanism
Following a consolidation period, the market must eventually choose a direction. Two outcomes are possible:
1.  **Breakout (Bullish):** Buying pressure eventually overwhelms selling pressure at the resistance level. The price breaks above resistance, signaling the potential start of a new uptrend. Traders seek to enter long positions at this point to capture the renewed bullish momentum.
2.  **Breakdown (Bearish):** Selling pressure overwhelms buying pressure at the support level. The price breaks below support, signaling the potential start of a new downtrend. Traders seek to enter short positions to capture the renewed bearish momentum.

Because future direction cannot be predicted with certainty, this strategy is reactive. Traders wait for the price to confirm a breakout or breakdown before entering. A useful metaphor is a prisoner escaping jail: traders want to enter only when the prisoner has clearly broken through the fence and is running away, not when they are merely testing the bars.

### 2.1.3 Formal Definition
The Breakout System is a swing trading strategy that seeks to:
*   Buy stocks that have broken above the resistance level of a consolidation pattern. When a stock breaks above strong resistance, there is a high probability that bullish momentum will trigger a new uptrend. Generally, the longer the consolidation period, the stronger the subsequent breakout.
*   Sell short stocks that have broken below the support level of a consolidation pattern. When a stock breaks below strong support, there is a high probability that bearish momentum will trigger a new downtrend.

Breakouts are often triggered by news events. However, the strategy focuses exclusively on price action. The appearance of a breakout indicates that buyers have absorbed all available supply at resistance, triggering optimism and attracting additional buyers.

## 2.2 Identifying Valid Consolidation Patterns

A common error among traders is misidentifying consolidation patterns or resistance levels. To ensure objectivity, strict criteria must be applied.

### 2.2.1 Resistance and Support Characteristics
Support and resistance levels are not rigid brick walls; they function more like fences. Prices may briefly pierce these levels before reversing, creating false breakouts. Amateurs often buy these false breakouts and incur losses. This strategy employs specific filters to avoid such scenarios and enter only high-probability breakouts.

### 2.2.2 Drawing Levels: The Line of Best Fit
When drawing support and resistance lines, use the line of best fit—the horizontal line that touches the maximum number of price points. It is not necessary for the line to touch the exact high or low of every candle; touching the shadows or bodies is acceptable. The significance of a level is determined by the frequency of tests.

### 2.2.3 Long Setup Patterns (Breakouts)
For long breakouts, the consolidation pattern must exhibit a flat-top resistance tested at least three times. Two valid scenarios exist:
1.  **Rectangle Pattern:** The price makes same highs and same lows.
2.  **Rising Wedge Pattern:** The price makes same highs but higher lows.

The more times the resistance level is tested without breaking, the stronger the resistance and the more powerful the eventual breakout.

### 2.2.4 Short Setup Patterns (Breakdowns)
For short breakdowns, the consolidation pattern must exhibit a flat-bottom support tested at least three times. Two valid scenarios exist:
1.  **Rectangle Pattern:** The price makes same lows and same highs.
2.  **Falling Wedge Pattern:** The price makes same lows but lower highs.

## 2.3 Chart Configuration and Indicator Setup

The following chart setup is optimized for the Breakout System. While demonstrated on the Thinkorswim platform, these indicators are available on all major charting software (TradingView, TC2000, etc.).

### 2.3.1 Moving Averages
Moving averages are used to determine trend direction across different timeframes.
*   **Short-Term Trend:** 20-period Exponential Moving Average (EMA) and 40-period EMA.
    *   *Color/Style:* 20 EMA (Red, thin), 40 EMA (Blue, thin).
*   **Medium-Term Trend:** 50-period Simple Moving Average (SMA), 150-period SMA, and 200-period SMA.
    *   *Color/Style:* 50 SMA (Blue, thick), 150 SMA (Green, thick), 200 SMA (Red, thick).

### 2.3.2 Momentum Indicators
Three momentum indicators are used to confirm the strength of the move.
1.  **Force Index:** Default setting of 13.
2.  **Moving Average Convergence Divergence (MACD):** Default settings of 12, 26, and 9.
    *   *Color/Style:* MACD line (Black), Signal line (Red).
3.  **Parabolic SAR:** Default settings.
    *   *Color/Style:* Dots (Black).

### 2.3.3 Interpreting the Indicators
*   **Force Index:** Measures the strength of volume behind price changes.
    *   Bullish: Line is above the zero line and rising.
    *   Bearish: Line is below the zero line and falling.
*   **MACD:** Measures momentum convergence and divergence.
    *   Bullish: Black MACD line is above the red signal line (green histogram bars).
    *   Bearish: Black MACD line is below the red signal line (red histogram bars).
*   **Parabolic SAR:** Tracks trend direction.
    *   Bullish: Dots are positioned below the price candles.
    *   Bearish: Dots are positioned above the price candles.

### 2.3.4 Indicator Confluence Rule
Traders do not require all three indicators to be bullish (for longs) or bearish (for shorts). Waiting for full confluence often results in entering too late after the price has already moved significantly. The rule is:
*   **Long Entry:** At least one out of the three indicators must be bullish.
*   **Short Entry:** At least one out of the three indicators must be bearish.

### 2.3.5 Moving Average Alignment
*   **Long Trend Confirmation:**
    *   Short-term: 20 EMA above 40 EMA.
    *   Medium-term: 50 SMA above 150 SMA and above 200 SMA. Alternatively, the price must be above the 200 SMA, and the 200 SMA must be sloping upward.
*   **Short Trend Confirmation:**
    *   Short-term: 20 EMA below 40 EMA.
    *   Medium-term: 50 SMA below 150 SMA and below 200 SMA. Alternatively, the price must be below the 200 SMA, and the 200 SMA must be sloping downward.

## 2.4 Volatility Measurement: Average True Range (ATR)

The Average True Range (ATR) measures the average daily volatility of a stock, indicating how much the price typically moves in a single trading day. This metric is critical for placing stop losses at a distance that avoids being triggered by normal market noise.

### 2.4.1 Calculating ATR
1.  Add the ATR indicator to the chart (default 14-period).
2.  Adjust the chart timeframe to display the last three months.
3.  Identify the highest ATR value and the lowest ATR value over this three-month period.
4.  Calculate the average: (Highest ATR + Lowest ATR) ÷ 2.
5.  This average represents the stock's typical daily movement.

*Alternative Method:* The current ATR value can be viewed on financial websites such as Finviz. However, using the three-month average is preferred for stability.

### 2.4.2 Application in Risk Management
Stop losses must be placed at least one ATR away from the relevant support or resistance level. Placing a stop loss closer than one ATR increases the risk of being stopped out by routine daily volatility.

## 2.5 Long Entry Rules (Breakout Above Resistance)

To enter a long position on a breakout, all of the following criteria must be met:

1.  **Market Condition:** The overall market (S&P 500, tracked via SPY or SPX) must be in a clear uptrend.
    *   20 EMA above 50 SMA.
    *   S&P 500 price above the 20 EMA.
2.  **Sector Condition:** The stock must belong to a sector that is also in an uptrend. Verify sector trends using sector charts on Finviz.
3.  **Pattern Condition:** The stock must be in a valid consolidation pattern with same highs and resistance tested at least three times.
4.  **Trend Confirmation:** Upon breakout, moving averages must confirm an uptrend:
    *   20 EMA above 40 EMA.
    *   50 SMA above 150 SMA, OR price above the 200 SMA with the 200 SMA sloping upward.
5.  **Momentum Confirmation:** At least one of the three momentum indicators (Force Index, MACD, Parabolic SAR) must be bullish.
6.  **Breakout Candle Criteria:**
    *   A valid breakout candle must have its entire body open and close above the resistance level. This is referred to as a "breakout handle."
    *   The lower shadow may dip below resistance, but the body must be fully above.
    *   The breakout candle must be near or touching the 20 EMA. If the candle is too far from the 20 EMA, the move is considered overextended and prone to snapping back.
7.  **Timing:** Trades are based on daily candles. Wait for the market close to confirm the breakout candle. Do not enter while the candle is forming.
8.  **Order Execution:** Place a Buy Stop Limit order a few cents above the high of the breakout candle.
    *   *Cent Increment Guidelines:*
        *   Stock price < $5: Add 1 cent.
        *   Stock price $5–$10: Add 2 cents.
        *   Stock price $10–$50: Add 3 cents.
        *   Stock price $50–$100: Add 5 cents.
        *   Stock price > $100: Add 10 cents.
    *   *Limit Price:* Set the limit price slightly above the stop price to ensure execution, but no more than 0.1 ATR above the stop price.
9.  **Stop Loss Placement:** Place the stop loss one ATR below the broken resistance level (which now acts as support).
10. **Exit Strategy:** Choose one of the following:
    *   Fixed profit target of 2R or 2.5R above the entry price.
    *   Trail the position until the short-term trend reverses, defined by the 20 EMA crossing below the 40 EMA.

## 2.6 Long Trade Examples and Analysis

### 2.6.1 POOL
A recent trade in POOL demonstrated a classic breakout. The stock consolidated with a strong resistance level tested multiple times. At the breakout:
*   The 20 EMA was above the 40 EMA.
*   The 50 SMA was above the 150 SMA and 200 SMA.
*   All three indicators were bullish: Parabolic SAR dots below candles, Force Index above zero, and MACD bullish.
*   The breakout candle was near the 20 EMA.
This alignment of all criteria resulted in a high-probability trade that captured the subsequent uptrend.

### 2.6.2 LMT (Lockheed Martin)
*   **Pattern:** Resistance tested four times with higher lows (rising wedge).
*   **Invalid Breakouts:** Initial attempts failed because the candles were either bearish or only partially above resistance.
*   **Valid Breakout:** A full bullish candle body formed above resistance.
*   **Confirmation:** 20 EMA > 40 EMA; 50 SMA > 150 SMA. All three indicators were bullish.
*   **Execution:**
    *   Breakout candle high: $326.90.
    *   Buy Stop Limit Order: $327.00 (high + 10 cents).
    *   Limit Price: $327.10 (buffer within 0.1 ATR).
    *   Support Level (broken resistance): $322.31.
    *   ATR (3-month average): $3.30.
    *   Stop Loss: $319.01 ($322.31 - $3.30).
    *   Risk (1R): $7.99 ($327.00 - $319.01).
    *   Target (2R): $342.98 ($327.00 + $15.98).
*   **Outcome:** The trade triggered the next day, pulled back slightly without hitting the stop, and reached the profit target.

### 2.6.3 OKSB
*   **Pattern:** Consolidation with same highs and same lows.
*   **Confirmation:** 20 EMA > 40 EMA. Although the 50 SMA was below the 150 SMA, the price was above the 200 SMA, which was sloping upward, validating the trend. All three indicators were bullish.
*   **Execution:**
    *   Breakout candle high: $26.56.
    *   Buy Stop Limit Order: $26.59 (high + 3 cents).
    *   Support Level: $26.56.
    *   ATR: $0.45.
    *   Stop Loss: $26.11 ($26.56 - $0.45).
*   **Outcome:** Valid entry with appropriate risk management.

### 2.6.4 BOOT and Overextension
In the BOOT example, the breakout candle formed significantly far from the 20 EMA. This indicated an overextended move. As predicted, the price snapped back toward the moving average. This illustrates the rule: if the breakout candle is too far from the 20 EMA, do not enter on the first breakout. If the stop loss would be placed above the 20 EMA, the entry is too high.

### 2.6.5 Buy Point 2: The Retest Strategy
When a breakout candle is overextended, traders should wait for Buy Point 2.
*   **Process:** Wait for the price to retrace and retest the broken resistance level (now support).
*   **Entry Trigger:** Look for a bullish candlestick pattern (e.g., bullish pin bar with a small body and long lower shadow, or bullish engulfing pattern) forming at the support level near the 20 EMA.
*   **Execution:** Place a Buy Stop Limit order a few cents above the high of the bullish reversal candle.
*   **Stop Loss:** One ATR below the support/resistance level.
*   **Advantage:** Avoids many false breakouts and overextended entries.
*   **Disadvantage:** May miss trades where the price breaks out and continues upward without retracing.

### 2.6.6 IDCC, LMT (Retest), and ODFL
*   **IDCC:** Strong resistance tested four times. Initial breakout was overextended. Price retraced to support and formed a bullish pin bar near the 20 EMA.
    *   Entry: Buy stop limit at $43.00 (high $42.97 + 3 cents).
    *   Support: $42.35. ATR: $0.85.
    *   Stop Loss: $41.50 ($42.35 - $0.85).
*   **LMT (Second Example):** Initial breakout was a false breakout (bearish candle, gap up, far from moving average). Price retraced, formed a bullish pin bar at support, and provided a valid Buy Point 2 entry.
*   **ODFL:** Consolidation with three resistance tests. Valid breakout candle allowed for Buy Point 1 entry. Alternatively, waiting for the retest provided a valid Buy Point 2 entry. Both entries were successful.

## 2.7 Short Entry Rules (Breakdown Below Support)

Short selling breakdowns follows the inverse rules of long breakouts.

1.  **Market Condition:** The S&P 500 must be in a downtrend.
    *   20 EMA below 50 SMA.
    *   S&P 500 price below the 20 EMA.
2.  **Sector Condition:** The stock must belong to a sector in a downtrend.
3.  **Pattern Condition:** The stock must be in a valid consolidation pattern with same lows and support tested at least three times.
4.  **Trend Confirmation:** Moving averages must confirm a downtrend:
    *   20 EMA below 40 EMA.
    *   50 SMA below 150 SMA, OR price below the 200 SMA with the 200 SMA sloping downward.
5.  **Momentum Confirmation:** At least one of the three momentum indicators must be bearish.
6.  **Breakdown Candle Criteria:**
    *   A valid breakdown candle must have its entire body open and close below the support level.
    *   The candle must be near or touching the 20 EMA to avoid overextension.
7.  **Order Execution:** Place a Sell Stop Limit order a few cents below the low of the breakdown candle, using the same cent increment guidelines as long entries.
8.  **Stop Loss Placement:** Place the stop loss one ATR above the broken support level (which now acts as resistance).
9.  **Exit Strategy:**
    *   Fixed profit target of 2R below the entry price.
    *   Trail the position until the trend reverses, defined by the 20 EMA crossing above the 40 EMA.
10. **Sell Point 2:** If the breakdown candle is overextended, wait for a retest of the support-turned-resistance level. Enter a Sell Stop Limit order below the low of the first bearish candlestick pattern (e.g., bearish pin bar) that forms at the resistance level.

## 2.8 Short Trade Examples and Analysis

### 2.8.1 ECT
*   **Pattern:** Support tested four times with same lows and lower highs.
*   **Confirmation:** 20 EMA < 40 EMA; 50 SMA < 150 SMA. All three indicators were bearish (Force Index < 0, MACD bearish, Parabolic SAR dots above candles).
*   **Execution (Sell Point 1):**
    *   Breakdown candle low: $15.70.
    *   Sell Stop Limit Order: A few cents below $15.70.
    *   Support Level: $18.50.
    *   Stop Loss: One ATR above $18.50.
*   **Execution (Sell Point 2):** Price retraced to resistance and formed a bearish pin bar at $15.10.
    *   Sell Stop Limit Order: A few cents below $15.10.
    *   Stop Loss: Same level as Sell Point 1.
*   **Outcome:** Both entry methods would have resulted in winning trades as the price continued downward.

### 2.8.2 SAFM
*   **Pattern:** Support tested three times.
*   **Invalid Breakdown:** The first breakdown candle was half-in/half-out. The next candle was a doji/bullish candle, lacking conviction.
*   **Valid Entry:** The price was overextended initially and snapped back. Traders should have waited for the retest near the 20 EMA and entered on a confirmed bearish candle. All moving averages were in a down sequence, and indicators were bearish.

## 2.9 Common Mistakes and Pitfalls

### 2.9.1 Confusing Uptrends with Consolidation
A critical error is attempting to trade a breakout on a pattern that is actually an uptrend.
*   **Consolidation:** Must exhibit same highs.
*   **Uptrend:** Exhibits higher highs.
Buying at the high of an uptrend is incorrect; in an uptrend, traders should buy the dip. Entering a "breakout" on higher highs often results in buying the top before a pullback.

### 2.9.2 Overextended Entries
Entering when the breakout candle is too far from the 20 EMA increases the risk of a snap-back move that triggers the stop loss. Always verify that the entry price is near the 20 EMA and that the stop loss is placed below the 20 EMA for longs (or above for shorts).

## 2.10 Scanning for Breakout Setups

Identifying potential setups daily requires systematic scanning. Four primary methods are recommended:

### 2.10.1 Finviz Channel Scanner
This is the primary tool, generating over 90% of setups.
*   Access the Channel Screener on Finviz.com.
*   Review all pages daily for stocks breaking out of channels or consolidations.
*   Manually verify each candidate against all entry criteria (MA alignment, indicator confluence, breakout candle validity, proximity to 20 EMA).

### 2.10.2 Finviz Horizontal Support & Resistance Scanner
*   Access the Horizontal Support & Resistance screener on Finviz.com.
*   Identify stocks approaching or breaking horizontal levels.
*   Monitor these stocks closely; if a valid breakout occurs, verify all criteria before entering.

### 2.10.3 TC2000 PCF Screener
For advanced users, TC2000 ($350/year subscription) allows custom Personal Criteria Formula (PCF) scans.
*   **Step 1:** Go to Library > Conditions > New Condition Formula.
*   **Step 2:** Copy and paste the provided breakout PCF script. Name it "Breakout" and click OK.
*   **Step 3:** Create an Easy Scan. Select "Scan All US Stocks."
*   **Step 4:** Add the "Breakout" condition. Save the scan.
*   **Note:** Automated screeners cannot perfectly replicate all visual criteria. Every result must be manually verified on the chart.

### 2.10.4 Daily Routine and Discipline
*   Scan daily for setups.
*   Accept that some days will yield no valid setups.
*   Never force a trade. Wait patiently for high-probability setups that meet all defined criteria.
*   Consistent practice and experience are essential for recognizing valid patterns and avoiding low-probability traps.