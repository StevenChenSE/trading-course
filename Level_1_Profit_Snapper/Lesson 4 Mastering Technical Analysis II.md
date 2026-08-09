---
title: "Mastering Technical Analysis II"
---

## 4.1 Technical Indicators

### 4.1.1 Introduction to Technical Indicators
Technical indicators are mathematical calculations plotted on charts to assist traders in identifying potential entry and exit points. While charting software offers hundreds of indicators, it is unnecessary to master all of them. Fundamentally, all technical indicators are **lagging indicators**, meaning they are calculated based on historical price data. No indicator can predict future price movements with certainty; instead, they provide probabilities to anticipate price action based on past data.

Indicators are categorized into two primary types:
1.  **Trend-Following Indicators:** These measure the strength and direction of a trend. For example, they help determine how bullish an uptrend is or how bearish a downtrend is.
2.  **Oscillators:** These measure whether a price is temporarily overbought or oversold. Oscillators operate on the assumption that price oscillates around a mean. When price moves too far in one direction, it tends to revert toward the average.

**Critical Rule:** Indicators must never be used in isolation. They must always be applied within the correct context of the prevailing trend and in combination with other technical tools. Specific indicators are paired with specific trading strategies, which will be detailed in subsequent strategy lessons.

### 4.1.2 Moving Average Convergence Divergence (MACD)
The MACD is the most commonly used trend-following indicator among traders. It measures the strength of a trend and identifies bullish or bearish momentum.

**Calculation:**
*   The MACD is calculated using two Exponential Moving Averages (EMAs), typically the **12 EMA** and the **26 EMA**.
*   **MACD Line:** Calculated by subtracting the 26 EMA from the 12 EMA.
*   **Signal Line:** Calculated by taking a **9-day EMA** of the MACD line and plotting it over the MACD line.

**Interpretation:**
*   **Bullish Momentum:** Occurs when the MACD line crosses **above** the signal line. This indicates upward momentum and is an ideal condition for long positions.
*   **Bearish Momentum:** Occurs when the MACD line crosses **below** the signal line. This indicates downward momentum and is an ideal condition for short positions.
*   **Histogram:** The histogram visually represents the distance between the MACD line and the signal line.
    *   A bullish (often black or green) histogram appears when the MACD line is above the signal line.
    *   A bearish (often red) histogram appears when the MACD line is below the signal line.
    *   Both the line crossovers and the histogram convey the same momentum information.

The MACD is particularly useful in trend-following strategies, such as the EMA Bounce strategy, to confirm trend strength.

### 4.1.3 Stochastic Oscillator
The Stochastic Oscillator is a primary oscillator used to identify overbought and oversold conditions. It operates on the principle that price acts like a pendulum, oscillating around a mean. When price moves too fast in one direction, it becomes overstretched and tends to revert.

**Calculation:**
The indicator consists of the Fast %K line, Slow %K line, and %D line, calculated using specific formulas. While the mathematical derivation is available for intellectual reference, practical trading requires only the ability to read the line movements.

**Key Levels and Interpretation:**
*   The oscillator is bounded between **0 and 100**, with critical levels at **80** and **20**.
*   **Overbought:** When the %K and %D lines rise **above 80**, the price is considered overstretched to the upside and likely to pull back.
*   **Oversold:** When the %K and %D lines fall **below 20**, the price is considered overstretched to the downside and likely to bounce back up.

**Application in Trend Context:**
The Stochastic Oscillator must be used in alignment with the overall trend.

*   **Long Entry in an Uptrend:**
    *   *Example (Apple - AAPL):* In a clear uptrend (price above the 50 SMA, 50 SMA sloping up, and 50 SMA above the 100 SMA), prices make higher highs and higher lows but experience retracements.
    *   When price retraces to a support level (such as the 50 SMA), traders wait for confirmation that the retracement is complete.
    *   A high-probability long entry occurs when price hits the moving average support **and** the Stochastic Oscillator drops **below 20**, indicating an oversold condition within the uptrend.
    *   If price retraces to the moving average but Stochastics remains above 20, the move is not sufficiently oversold, and the entry signal is weaker.

*   **Short Entry in a Downtrend:**
    *   In a clear downtrend (moving averages sloping down in a bearish fan: 20 EMA < 50 SMA < 100 SMA < 150 SMA), price makes lower highs and lower lows.
    *   When price rallies to a resistance level (such as the 50 SMA), traders look for confirmation of exhaustion.
    *   A high-probability short entry occurs when price hits the moving average resistance **and** the Stochastic Oscillator rises **above 80**, indicating an overbought condition within the downtrend.
    *   This confluence of trend direction, resistance, and overbought oscillator readings provides a strong signal to short.

### 4.1.4 Bollinger Bands
Bollinger Bands are used to identify overbought/oversold conditions and dynamic support/resistance levels. They can be used independently or in conjunction with the Stochastic Oscillator.

**Settings:**
*   Default setting: **20-period Simple Moving Average (SMA)** with **2 standard deviations**.

**Interpretation:**
*   The bands consist of an upper envelope and a lower envelope surrounding the price action.
*   **Support and Resistance:** The upper band acts as dynamic resistance, and the lower band acts as dynamic support. Price frequently bounces off these boundaries.
*   **Overbought/Oversold:** When price moves **outside** the bands, it is outside its normal statistical range.
    *   Price outside the **upper band** indicates overbought conditions; price tends to revert back inside the bands.
    *   Price outside the **lower band** indicates oversold conditions; price tends to snap back inside the bands.

**Counter-Trend Trading Examples:**
*   *Example (Copper - COP):* In a sideways market, Bollinger Bands clearly define the range. Price respects the upper band as resistance and the lower band as support.
*   *Short Setup:* In counter-trend trading, a short entry is considered when price moves outside the upper Bollinger Band, confirming overbought conditions. This signal is strengthened when combined with bearish candlestick patterns (e.g., a Bearish Pin Bar forming outside the upper band). The trade targets a quick profit as price reverts toward the moving average.
*   *Long Setup:* Conversely, when price moves outside the lower Bollinger Band, it is oversold. A long entry is considered, especially if accompanied by a bullish candlestick pattern (e.g., a Bullish Pin Bar), anticipating a reversion to the center of the bands.

---

## 4.2 Candlestick Patterns

### 4.2.1 Fundamentals of Candlestick Charts
Candlestick charts, invented in Japan over 400 years ago, are the standard method for professional price analysis. Each candlestick represents a specific timeframe (e.g., daily, 5-minute, 1-minute) and displays four critical data points:
1.  **Opening Price**
2.  **Closing Price**
3.  **High Price**
4.  **Low Price**

**Reading Candlesticks:**
*   **Bullish Candle:** Represented by white or green. The **open** is at the base of the body, and the **close** is at the top of the body. The upper shadow indicates the high, and the lower shadow indicates the low.
*   **Bearish Candle:** Represented by red or black. The **open** is at the top of the body, and the **close** is at the base of the body. The upper shadow indicates the high, and the lower shadow indicates the low.
*   **Timeframes:** Swing and short-term traders typically use daily candles. Intraday traders use shorter timeframes (e.g., 5-minute or 1-minute). A single daily candle is composed of all the smaller timeframe candles within that day.

### 4.2.2 Pin Bar Patterns
Pin Bars are reversal patterns characterized by a small body and a long shadow, resembling a pin.

**Bullish Pin Bar:**
*   **Characteristics:**
    1.  Small candle body (color is irrelevant).
    2.  Little to no upper shadow.
    3.  Long lower shadow comprising at least **2/3 of the total candle range**.
*   **Context:** Must appear after a series of bearish candles. Ideally forms at a support level in an uptrend (trend trade) or at the bottom of a downtrend during oversold conditions (counter-trend trade).
*   **Psychology:** Bears push price down, but bulls aggressively buy back, closing near the open. This indicates bull control and a high probability of upward reversal.
*   **Trade Execution:** Place a buy order a few cents above the high of the Pin Bar. Place a stop loss a few cents below the low.
*   *Example (Zebra Technologies - ZBRA):* In a clear uptrend (50 SMA > 150 SMA), price retraced down to the 50 SMA support. A Bullish Pin Bar formed with a small body and long lower shadow. This confluence of support and pattern triggered a long entry, resulting in a profitable trend-following trade.
*   *Counter-Trend Example:* At the bottom of a downtrend, a Bullish Pin Bar forms after a plunge. Confirmation is required via oversold indicators (Stochastics < 20 or price outside lower Bollinger Band) to validate the bounce.

**Bearish Pin Bar:**
*   **Characteristics:**
    1.  Small candle body.
    2.  Little to no lower shadow.
    3.  Long upper shadow comprising at least **2/3 of the total candle range**.
*   **Context:** Must appear after a series of bullish candles. Ideally forms at resistance in a downtrend (trend trade) or at the top of an uptrend during overbought conditions (counter-trend trade).
*   **Psychology:** Bulls push price up, but bears aggressively sell, closing near the open. This indicates bear control and a high probability of downward reversal.
*   **Trade Execution:** Place a sell/short order a few cents below the low of the Pin Bar. Place a stop loss a few cents above the high.
*   *Example:* In a downtrend, price rallies to the 50 SMA resistance. A Bearish Pin Bar forms, rejecting the resistance. This signals a short entry to continue the downtrend.
*   *Counter-Trend Example:* At the top of an uptrend, a Bearish Pin Bar forms with overbought confirmation (Stochastics > 80 or price piercing upper Bollinger Band), signaling a short entry for a quick reversal trade.

### 4.2.3 One White Soldier and One Black Crow
These are two-candle reversal patterns.

**One White Soldier (Bullish Reversal):**
*   **Structure:** A bearish candle followed immediately by a bullish candle.
*   **Rules:**
    1.  The bullish candle must **open above the close** of the preceding bearish candle.
    2.  The bullish candle must make a **higher low** than the low of the bearish candle.
    3.  The bullish candle must **close above the high** of the bearish candle.
*   **Context:** Appears after a series of bearish candles at support (uptrend dip) or oversold levels (downtrend bottom).
*   **Psychology:** Short sellers who entered on the bearish candle wake up to a higher open, triggering panic buying to cover positions. This buying pressure propels the price above the previous high, trapping remaining shorts and fueling the reversal.
*   **Trade Execution:** Buy order above the high of the bullish candle; stop loss below the low of the bearish candle.
*   *Example:* In an uptrend, price sells off to the moving average support. A One White Soldier pattern forms meeting all three criteria. This confirms a long entry.
*   *Invalid Example:* If the bullish candle makes a lower low than the bearish candle, Rule 2 is broken, and the pattern is invalid.

**One Black Crow (Bearish Reversal):**
*   **Structure:** A bullish candle followed immediately by a bearish candle.
*   **Rules:**
    1.  The bearish candle must **open below the close** of the preceding bullish candle.
    2.  The bearish candle must make a **lower high** than the high of the bullish candle.
    3.  The bearish candle must **close below the low** of the bullish candle.
*   **Context:** Appears after a series of bullish candles at resistance (downtrend rally) or overbought levels (uptrend top).
*   **Psychology:** Long buyers who entered on the bullish candle wake up to a lower open, triggering panic selling. This selling pressure drives the price below the previous low, trapping longs and accelerating the decline.
*   **Trade Execution:** Sell/short order below the low of the bearish candle; stop loss above the high of the bullish candle.
*   *Example:* In a downtrend, price rallies to the 50 SMA resistance. A One Black Crow pattern forms, confirming a short entry.
*   *Counter-Trend Example:* At the top of an uptrend with overbought confirmation, a One Black Crow signals a short entry.

### 4.2.4 Morning Star and Evening Star
These are three-candle reversal patterns.

**Morning Star (Bullish Reversal):**
*   **Structure:**
    1.  Long bearish candle (end of a selloff).
    2.  Small candle (ideally a Doji, indicating indecision) gapping down.
    3.  Bullish candle gapping up, closing **above the 50% level** of the first bearish candle's body.
*   **Context:** Bottom of a downtrend or retracement at support.
*   **Psychology:** Selling exhausts, indecision emerges, and bulls take control with a strong close.
*   **Trade Execution:** Buy order above the bullish candle; stop loss below the Doji or bullish candle.
*   *Example:* In an uptrend retracement, price hits moving average support. A Morning Star forms with Stochastics oversold (< 20) and price touching the lower Bollinger Band. This confluence triggers a long entry.

**Evening Star (Bearish Reversal):**
*   **Structure:**
    1.  Long bullish candle (end of a rally).
    2.  Small candle gapping up.
    3.  Bearish candle gapping down, closing **below the 50% level** of the first bullish candle's body.
*   **Context:** Top of an uptrend or rally at resistance.
*   **Psychology:** Buying exhausts, indecision emerges, and bears take control.
*   **Trade Execution:** Sell/short order below the bearish candle; stop loss above the small candle or bearish candle.
*   *Example:* At the top of an uptrend, price pierces the upper Bollinger Band with Stochastics > 80. An Evening Star forms, triggering a short entry as price reverses.

### 4.2.5 Engulfing Patterns
**Bullish Engulfing:**
*   **Structure:** A small bearish candle followed by a large bullish candle whose body completely engulfs (swallows) the body of the bearish candle.
*   **Context:** End of a downtrend or retracement at support.
*   **Trade Execution:** Buy above the high; stop loss below the low.
*   *Example:* Price retraces to the 50 SMA support. A Bullish Engulfing pattern forms, triggering a long entry. Patterns appearing without support confluence are less reliable.

**Bearish Engulfing:**
*   **Structure:** A small bullish candle followed by a large bearish candle whose body completely engulfs the bullish candle's body.
*   **Context:** Top of an uptrend or rally.
*   **Trade Execution:** Sell/short below the low; stop loss above the high.

### 4.2.6 Summary of Candlestick Application
Candlestick patterns must never be traded in isolation. They require confluence with:
*   **Trend Direction:** Bullish patterns at uptrend support (trend trade) or downtrend oversold bottoms (counter-trend trade). Bearish patterns at downtrend resistance (trend trade) or uptrend overbought tops (counter-trend trade).
*   **Support/Resistance:** Moving averages, trendlines, or horizontal levels.
*   **Indicators:** Confirmation from Stochastics, Bollinger Bands, or MACD.

---

## 4.3 Market and Sector Analysis

### 4.3.1 The Importance of Market Context
Stocks do not move in isolation. Approximately **70% of a stock's short-term direction** is influenced by the overall market and its specific sector/industry trend. Fundamental company performance is secondary to market sentiment in the short term.

*   **Market Correlation:** In the U.S. market, the **S&P 500 Index (SPX)** is the primary driver. When the SPX rises, the majority of stocks rise. When the SPX falls, the majority of stocks fall.
*   **Sector Rotation:** Money flows into and out of sectors. When money flows into a sector (e.g., Technology), most stocks in that sector rise. When money exits, they fall regardless of individual company quality.
*   **Trading Bias:**
    *   When the market and sector are bullish, focus on **long setups**.
    *   When the market and sector are bearish, focus on **short setups**.
    *   Highest probability trades occur when the Index, Sector, and Individual Stock are aligned.

### 4.3.2 Beta: Measuring Market Correlation
Beta measures a stock's volatility relative to the index.
*   **Apple (AAPL):** Beta of **1.23**. If SPX moves 1%, AAPL tends to move 1.23% in the same direction.
*   **McDonald's (MCD):** Beta of **0.46**. If SPX moves 1%, MCD tends to move 0.46% in the same direction (less volatile).
*   **Positive Beta:** Moves with the index (most stocks).
*   **Negative Beta:** Moves opposite the index (rare).

### 4.3.3 Analyzing the S&P 500 Trend
Traders should analyze the SPX daily chart every day to determine trading bias.

**Chart Setup Template:**
*   **Symbol:** SPX
*   **Timeframe:** Daily (6-month to 1-year view)
*   **Moving Averages:**
    *   Short-term: **20 EMA** and **40 EMA**.
    *   Medium-term: **50 SMA** and **150 SMA**.
    *   Long-term: **200 SMA**.
*   **Indicators:**
    *   **Bollinger Bands:** 20-period, 2 standard deviations, Exponential.
    *   **Stochastic Oscillator:** Overbought 80, Oversold 20, K period 5, D period 3, Slowing 3, Exponential.
*   Save this configuration as a "Market Trend" template.

**Defining Market Conditions:**
1.  **Bullish Market:**
    *   20 EMA > 40 EMA (Short-term uptrend) AND 50 SMA > 150 SMA (Medium-term uptrend).
    *   OR: Price bouncing off strong moving average support while 50 SMA > 150 SMA > 200 SMA.
    *   *Action:* Focus on long trade setups.
2.  **Overbought Caution:**
    *   Price hits upper Bollinger Band AND Stochastics > 80.
    *   *Action:* Avoid new long entries. Wait for Stochastics to turn down below 80 before considering shorts.
3.  **Bearish Market:**
    *   20 EMA < 40 EMA (Short-term downtrend) AND 50 SMA < 150 SMA (Medium-term downtrend).
    *   OR: Price bouncing off resistance while 50 SMA < 150 SMA < 200 SMA.
    *   *Action:* Focus on short trade setups.
4.  **Oversold Caution:**
    *   Price hits lower Bollinger Band AND Stochastics < 20.
    *   *Action:* Avoid new short entries; consider long setups.
5.  **Choppy/Neutral Market:**
    *   Conflicting signals (e.g., 20 EMA < 40 EMA but 50 SMA > 150 SMA).
    *   *Action:* Do not trade. Successful traders wait for clear direction; amateurs trade in choppy markets and incur losses.

**Market Phases:** Markets alternate between trending phases (high win rates) and choppy/turbulent phases (e.g., mid-late 2018 to early 2019). During trending phases, avoid increasing risk. During choppy phases, avoid giving up; maintain discipline until the trend resumes.

### 4.3.4 Sector and Industry Analysis
Before trading a stock, verify its sector and industry trend using tools like Finviz.
*   **Method:** Identify the stock's sector and industry. Check the sector/industry index charts for trend direction.
*   **Example (Microsoft - MSFT):**
    *   Sector: Technology (Uptrend).
    *   Industry: Application Software (Uptrend).
    *   *Conclusion:* Favorable for long positions if the individual stock setup aligns.
*   **Analogy:** Dating a person from a "Mafia family" (bearish sector) is risky regardless of their individual qualities. Align with bullish sectors for longs and bearish sectors for shorts.

---

## 4.4 Relative Strength

### 4.4.1 Definition and Importance
**Relative Strength** measures a stock's price performance relative to the S&P 500. This is distinct from the Relative Strength Index (RSI).
*   **Rationale:** Historically, the top 20% of stocks generate 80% of the market's gains. Traders should focus on the strongest stocks for longs and the weakest for shorts.
*   **Analogy:** A student scoring 80% on an easy test where everyone scored 100% has weak relative strength. A student scoring 60% on a difficult test where everyone failed has strong relative strength.

### 4.4.2 Measuring Relative Strength
1.  **Thinkorswim Chart:**
    *   Apply the "Relative Strength" indicator vs. SPX.
    *   **Strong:** Blue line above the red zero line and trending up. (Ideal for longs).
    *   **Weak:** Blue line below the red zero line and trending down. (Ideal for shorts).
2.  **Investors Business Daily (IBD) App:**
    *   Provides a Relative Strength rating from 1 to 100.
    *   **Long Candidates:** Rating **above 80**.
    *   **Short Candidates:** Rating **below 50**.

---

## 4.5 Fibonacci Retracement and Extensions

### 4.5.1 Fibonacci Theory and History
Markets move in waves: **Impulsive waves** (with the trend) and **Corrective waves** (against the trend). Corrections rarely retrace randomly; they often respect Fibonacci ratios.

**Mathematical Foundation:**
*   **Fibonacci Sequence:** 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233... (Each number is the sum of the two preceding numbers).
*   **Golden Ratio:** Dividing any number in the sequence by the previous number yields approximately **1.618**. The inverse is **0.618 (61.8%)**.
*   **Secondary Ratio:** 1 - 0.618 = **0.382 (38.2%)**.
*   **Natural Occurrence:** These ratios appear in tree branching, nautilus shells, human DNA (21/34 Angstroms = 0.618), and human proportions (belly button to foot / height = 0.618).

### 4.5.2 Applying Fibonacci to Uptrends
In an uptrend, an impulsive wave moves from point **A** to **B** (100% move). The subsequent correction from **B** to **C** typically retraces specific percentages before the next impulsive wave begins.

**Key Retracement Levels:**
*   **38.2%:** Shallow correction.
*   **50%:** Moderate correction.
*   **61.8%:** Deep correction (maximum healthy retracement before trend invalidation).

**Trading Strategy:**
*   Traders prefer entering at the **50% or 61.8%** levels for higher probability reversals.
*   **Confluence:** Reliability increases significantly when a Fibonacci level aligns with a moving average or support level.
*   *Example (SPX):* Historical charts show corrections halting precisely at 38.2%, 50%, or 61.8% levels. A major correction halted at the 61.8% level, which coincided with the 150 SMA, creating a high-confidence buy zone.
*   *Example (Microsoft - MSFT):* Multiple ABC wave patterns respected 38.2% and 61.8% retracements. For a current setup, a buy order would be placed near **$142**, corresponding to the 61.8% retracement level aligning with the 50 SMA support.
*   *Trade Example (YP - Yellow Pages):*
    *   Context: Uptrend retracement.
    *   Confluence: Price hit 61.8% Fibonacci level + 50 SMA support.
    *   Indicators: Stochastics oversold (< 30 for individual stocks), MACD bullish crossover, Relative Strength crossing above zero.
    *   Result: High-probability long trade.
*   *Trade Example (CG - Coterra Energy):*
    *   Context: Uptrend retracement.
    *   Confluence: Price hit 61.8% Fibonacci level + 50 SMA support + Bullish Pin Bar.
    *   Indicators: Stochastics < 30, MACD bullish, Relative Strength strong.
    *   Result: High-probability long trade.

### 4.5.3 Applying Fibonacci to Downtrends
In a downtrend, the impulsive wave moves down from **A** to **B**. The corrective rally from **B** to **C** retraces upward.

**Trading Strategy:**
*   Short entries are ideal at the **50% or 61.8%** retracement levels, especially when aligned with moving average resistance.
*   *Example (IRG - Iridium Communications):* In a clear downtrend, corrective rallies halted precisely at the 61.8% and 50% Fibonacci levels, confirming the continuation of the downtrend.

### 4.5.4 Conclusion
Fibonacci retracements provide a mathematical framework for anticipating the end of corrections. When combined with moving averages, technical indicators, and candlestick patterns, they form a robust system for identifying high-probability trade setups. These elements will be integrated into specific trading strategies, such as the EMA Bounce strategy, in subsequent lessons.