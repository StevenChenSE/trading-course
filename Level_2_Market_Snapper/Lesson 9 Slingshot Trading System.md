---
title: "Slingshot Trading System"
---

## 9.1 Introduction to the SMR Strategy

The Slingshot Mean Reversion (SMR) is a swing trading strategy designed to capitalize on short-term price reversals at extreme levels. The core objective is to:

- Buy stocks that are oversold on a stochastic basis at strong support levels.
- Short stocks that are overbought on a stochastic basis at strong resistance levels.

Key characteristics:

- Applicable for both trend continuation and counter-trend trades.
- Aims for quick profits over a few days once the price reaches the target.

Basic mechanics:

- Long setup: When a stock declines to a strong support level and is oversold, enter a long position and take profit after a few days when the target price is reached.
- Short setup: When a stock rises to a strong resistance level and is overbought, enter a short position and take profit over the next few days as the price declines.

## 9.2 Chart Setup and Indicator Configuration

The SMR strategy uses a combination of indicators to identify overbought/oversold conditions, trend direction, and support/resistance levels.

### 9.2.1 Full Stochastics

Purpose: Identify overbought and oversold conditions. The overbought and oversold thresholds below are the default setup and do not need to be changed.

Settings:

- Overbought level: 80
- Oversold level: 20
- %K period: 5
- %D period: 3
- Slowing period: 3
- Type: Exponential

Color conventions:

- %K line: Black
- %D line: Red

Interpretation:

- Overbought: Stochastic lines above 80.
- Oversold: Stochastic lines below 20.

### 9.2.2 Bollinger Bands

Purpose: Identify when price moves beyond normal boundaries (overextended).

Settings:

- Length (average): 20
- Standard deviations: 2
- Type: Exponential Moving Average (EMA)

Color conventions:

- Middle band: Gray or white (the instructor generally ignores it visually because he does not like to look at it).
- Upper band: Black.
- Lower band: Black.

Interpretation:

- Price touching or moving outside the lower band suggests oversold conditions.
- Price touching or moving outside the upper band suggests overbought conditions.

### 9.2.3 Moving Averages

Purpose: Identify trend direction and act as dynamic support/resistance levels.

Settings (Simple Moving Averages only):

- 50 SMA: Blue
- 100 SMA: Orange/Gold
- 150 SMA: Green
- 200 SMA: Red

Usage:

- Determine whether the market is in an uptrend or downtrend.
- Serve as potential support or resistance levels when price retraces.

### 9.2.4 Timeframe

- Use daily candlestick charts for all SMR setups.

## 9.3 Identifying Strong Support Levels

For long SMR setups, price must reach a strong support level while being oversold. Four types of support are valid:

### 9.3.1 Moving Average Support

Criteria:

- Price retraces and touches a moving average (50, 100, 150, or 200 SMA).
- The moving average must have been tested at least once recently and acted as strong support.
- Only use moving averages that have demonstrated reliability in recent price action.

### 9.3.2 Horizontal Support

Criteria:

- A clear horizontal price level where price has reversed multiple times.
- The level must have been tested at least three times previously.
- On the fourth test (or subsequent test), if price is oversold, a long entry may be considered.

### 9.3.3 Double Bottom with Stop-Out Pattern

This is a preferred support pattern due to its connection with market maker behavior and stop-loss hunting.

Mechanics:

1. Price forms a first low (Low 1).
2. Price rallies, then drops sharply at approximately a 90-degree angle (parabolic drop).
3. Price forms a second low (Low 2) that is lower than Low 1, triggering retail stop losses.
4. After breaking below Low 1, price must close back above Low 1 within 3–4 candles.
5. Entry is only allowed after price closes back above Low 1.

Key requirements:

- The second leg down must be a fast, parabolic (near 90-degree) drop. Slow, gradual declines (e.g., 45-degree angle) are not considered valid.
- If price fails to close back above Low 1 within 3–4 candles, the setup is invalid. The previous support becomes resistance, and buying is not recommended.
- A bullish candlestick confirmation pattern is required (detailed in Section 9.5).

Rationale:

- Retail traders place stop losses below Low 1.
- Market makers and institutions push price below Low 1 to trigger these stops, acquiring shares at lower prices.
- Once stops are taken out, institutions drive price higher, leaving stopped-out retail traders behind.

### 9.3.4 Fibonacci Retracement Support

Applicability:

- Only valid in an uptrend (trend continuation setups).
- Not used for counter-trend trades.

Criteria:

- Identify the start of an up wave (Point A) and the end of that up wave (Point B).
- Measure the retracement from B back toward A.
- Valid support levels: 50% or 61.8% Fibonacci retracement.
- The 61.8% level is considered the strongest and preferred.

Example:

- If price retraces from B to the 61.8% level and is oversold, this is considered strong support.

Summary of Valid Support Levels:

1. Moving average support (recently tested).
2. Horizontal support (tested at least three times).
3. Double bottom with stop-out pattern (parabolic drop, close back above Low 1 within 3–4 candles).
4. Fibonacci retracement at 50% or 61.8% (uptrend only).

## 9.4 Trend Continuation vs. Counter-Trend Long Setups

There are two types of long SMR setups:

### 9.4.1 Trend Continuation Long Setup

Definition:

- Trading in the direction of the prevailing uptrend.
- Buying during a pullback within an uptrend.

Uptrend identification criteria (any of the following):

- Higher highs and higher lows.
- 50 SMA above the 150 SMA, both sloping upward.
- Price above the 200 SMA, with the 200 SMA sloping upward.

Setup:

- During an uptrend, price retraces to a strong support level.
- Price is oversold (per Bollinger Bands and Stochastics).
- Enter long to capture the continuation of the uptrend.

### 9.4.2 Counter-Trend Long Setup

Definition:

- Trading against the prevailing downtrend.
- Buying at the bottom of a downtrend to capture a short-term bounce.

Downtrend identification criteria:

- Lower highs and lower lows.
- 50 SMA below the 150 SMA, both sloping downward.
- Price below the 200 SMA, with the 200 SMA sloping downward.

Setup:

- During a downtrend, price drops to a strong support level.
- Price is oversold.
- Enter long to capture a quick bounce.
- Exit before the downtrend resumes; do not hold expecting a trend reversal.

## 9.5 Entry Rules for Trend Continuation Long SMR Setups

The following rules must all be satisfied for a valid trend continuation long entry.

### 9.5.1 Overall Market Condition (S&P 500)

- Trade SMR long setups in alignment with the broader market for higher win rates.
- Ideal condition: S&P 500 is bullish.
- Bullish S&P 500 criteria:
  - S&P 500 price above the 20 EMA.
  - 20 EMA above the 50 SMA on the S&P 500 chart.

### 9.5.2 Price at Lower Bollinger Band

- Price must hit or move outside the lower Bollinger Band.
- This indicates an overextended downward move and potential oversold condition.

### 9.5.3 Stochastic Oversold and Crossover

- Either the %K or %D line (or both) must drop below 20.
- After going below 20, the lines must rise back above 20.
- The %K line (black) must cross above the %D line (red) as it moves above 20.
- This confirms that the oversold condition is reversing upward.

### 9.5.4 Strong Support Level Hit

Price must be at one of the following validated support levels:

- Recently tested moving average support.
- Horizontal support tested at least three times.
- Double bottom with stop-out pattern (parabolic drop, close back above Low 1 within 3–4 candles).
- Fibonacci retracement at 50% or 61.8% (in an uptrend only).

### 9.5.5 Bullish Confirmation Candle

A valid bullish candlestick pattern must form at support. Acceptable patterns:

1. Full-Body Bullish Candle:
   - Green candle.
   - The body occupies at least two-thirds of the total candle range.
   - No long upper shadow; not a "half-ass" candle.

2. Bullish Pin Bar:
   - Small body with a long lower shadow.
   - Color (red or green) does not matter.

3. "Pin Bar’s Fat Cousin":
   - Similar to a pin bar but with a slightly larger body.
   - Long lower shadow is the key feature.
   - Color does not matter.

4. Bullish Engulfing Pattern:
   - A small red candle followed by a large green candle that completely engulfs the prior candle’s body.
   - Considered a strong confirmation pattern.

Invalid candles:

- Candles with long upper shadows and small bodies.
- Doji candles.
- Any candle where the body does not occupy at least two-thirds of the range (for full-body requirement).

Entry is only taken after a valid bullish confirmation candle closes.

## 9.6 Trade Execution: Entry, Stop Loss, and Profit Target

Once all entry criteria are met and a valid confirmation candle closes:

### 9.6.1 Entry

- Place a buy stop-limit order a few cents above the high of the bullish confirmation candle.

### 9.6.2 Stop Loss

- Place the stop loss a few cents below the most recent swing low.
- This distance from entry to stop loss is defined as the "1R" distance (1R = risk).

### 9.6.3 Profit Target

- Set the profit target at 2R above the entry price.
- Example:
  - If 1R = $2, then 2R = $4.
  - Place a sell-limit order $4 above the entry price.

## 9.7 Example: EGOV Trend Continuation Long Setup

Ticker: EGOV

Trend context:

- Uptrend confirmed:
  - 50 SMA (blue) above 150 SMA (green).
  - Price above 200 SMA (red), with the 200 SMA sloping upward.

Setup development:

1. Price retraces downward during the uptrend.
2. Price hits and moves outside the lower Bollinger Band.
3. Stochastics:
   - Both %K and %D drop below 20 (oversold).
   - Both lines rise back above 20.
   - %K crosses above %D.
4. Support:
   - Fibonacci retracement from Point A (start of impulse) to Point B (end of impulse) to Point C.
   - Point C aligns with the 61.8% Fibonacci level (strong support).
5. Confirmation candle:
   - Initial candle near support resembles a "pin bar’s fat cousin," but entry is delayed for stronger confirmation.
   - Next candle forms a full-body green candle, closing above the 50 SMA.
   - This full-body candle is taken as the bullish confirmation.

Trade execution:

- Entry: Buy stop-limit order placed a few cents above the high of the full-body confirmation candle.
- Stop loss: Placed a few cents below the recent swing low.
- Profit target: Set at 2R above entry.

Outcome:

- The next day, price moves above the confirmation candle’s high, triggering the buy order.
- Approximately 15 days later, price reaches the 2R profit target, and the trade is closed.

# Lesson 9: The Slingshot Mean Reversion (SMR) Swing Trading System
## Part 2: Advanced Examples and Counter-Trend Setups

### 9.1 Trend Continuation Examples

The following examples illustrate the application of the Slingshot Mean Reversion (SMR) system within established uptrends. These setups are classified as trend continuation trades.

#### Example 1: APO (Trend Continuation Long Setup)

**Market Context and Trend Identification**
*   **Trend Status:** Direct (clear) uptrend.
*   **Moving Average Alignment:** The 50-period moving average is positioned above the 150-period moving average, confirming the bullish trend structure.

**Setup Criteria and Validation**
1.  **Price Action:** Price declines and impacts the lower Bollinger Band.
2.  **Stochastic Oscillator:** The Stochastic indicator drops below the 20 level, signaling oversold conditions.
3.  **Support Level:** A double bottom pattern is formed.
    *   Price creates a first bottom.
    *   Price creates a second bottom.
    *   This structure provides a defined support level for stop-loss placement.
4.  **Rapid Drop:** The decline is characterized as a rapid drop in price.
5.  **Recovery Validation:**
    *   Price closes back above the previous low line immediately within the first candle.
    *   **Rule:** The close above the low line must occur within three to four candles to validate the trade.
6.  **Bullish Candlestick Pattern:** A bullish candlestick pattern is present.
    *   **Pattern Type:** Identified as a "Pin Bar's Fat Cousin."
7.  **Moving Average Bonus:** The confirmation candle closes back above the 50-period moving average.
    *   **Note:** Closing above the 50-period moving average is not a mandatory requirement but is considered a bonus.
    *   **Selection Criteria:** When choosing between two potential trades, preference is given to the setup where price is above the 50-period moving average, as this indicates a more bullish environment.

**Trade Execution Parameters**
*   **Entry Order:** Buy stop order placed above the high of the confirmation candle.
*   **Stop Loss:** Placed below the low of the swing low (which coincides with the low of the confirmation candle).
*   **Risk Distance (1R):** Approximately $3.00 (based on the distance between entry and stop loss).
*   **Profit Target (2R):** Approximately $6.00 above the entry price.
*   **Target Price Level:** Approximately $54.00.

**Trade Outcome**
*   The price moved above the high of the confirmation candle the following day, triggering the buy order.
*   The position reached the profit target within 17 days.

#### Example 2: AUDI (FL) (Trend Continuation Long Setup)

**Market Context and Trend Identification**
*   **Trend Status:** Uptrend continuation (a clear uptrend).
*   **Moving Average Alignment:**
    *   50-period moving average is above the 150-period moving average.
    *   Price is trading above the 200-period moving average.
*   **Price Structure:** Clearly forming higher highs and higher lows.

**Setup Criteria and Validation**
1.  **Price Action:** Price declines and hits the lower Bollinger Band, indicating oversold conditions.
2.  **Stochastic Oscillator:**
    *   Drops below 20.
    *   Crosses back above 20.
3.  **Support Levels:** Two distinct support levels are present:
    *   **Moving Average Support:** Price hits the 50-period moving average (blue line). This level was recently tested and confirmed as strong support.
    *   **Double Bottom Pattern:**
        *   First low is established.
        *   Second low is established, taking out the stop losses of the first low.
        *   Price closes back above the line connecting the lows.
4.  **Bullish Candlestick Pattern and Confirmation:**
    *   **Initial Candles:**
        *   The first potential candle is rejected as a confirmation candle because it is not full-bodied; it has a long upper shadow and a small body, making it unconvincing.
        *   The subsequent candle is rejected because it is a bearish candle.
    *   **Confirmation Candle:** A full-bodied bullish candle is required and eventually forms.
5.  **Moving Average Bonus:** The confirmation candle closes above the 50-period moving average.

**Trade Execution Parameters**
*   **Entry Order:** Buy order placed a few cents above the high of the confirmation candle.
*   **Stop Loss:** Placed below the swing low (which coincides with the low of the confirmation candle).
*   **Risk Distance (1R):** Approximately $4.00 to $5.00.
*   **Profit Target (2R):** Approximately $8.00 above the entry price.
*   **Target Price Level:** Approximately $192.60.

**Trade Outcome**
*   The price moved up the following day, triggering the order.
*   The price moved sideways for a period before eventually hitting the profit target within two to three weeks.

---

### 9.2 Counter-Trend Setup Mechanics

The counter-trend setup involves trading against the prevailing trend, specifically buying during a downtrend at the bottom of the trend or at a temporary bottom. This approach carries higher risk than trend continuation setups because the trend is not in the trader's favor.

#### 9.2.1 Market Environment Requirements

*   **S&P 500 Condition:** The S&P 500 index must be bullish.
    *   **Rationale:** "Rising tides lift all boats." When the broader market is bullish, individual long trades are more likely to move upward.

#### 9.2.2 The Necessity of a Parabolic Drop

Unlike trend continuation setups, a parabolic drop is a critical requirement for counter-trend trades.

*   **Angle of Decline:** A 90-degree plunge in price is required.
*   **Rationale (The Rubber Ball Analogy):**
    *   Think of the stock price as a rubber ball. The harder the ball is thrown down, the harder it bounces back up.
    *   A 45-degree decline is less likely to result in a strong bounce; the price may bounce slightly and then resume the downtrend.
*   **Market Mechanics of Bottoming:**
    *   A stock can only bottom when there are no more sellers left.
    *   If sellers remain, the price can continue to drop.
    *   The bottom occurs at the point of maximum panic and maximum pessimism, when the last holder panics and sells.
    *   This clears retail traders from the market.
    *   Panic is induced by a rapid, 90-degree price drop.
    *   If the price drops slowly, holders do not panic and continue to hold, preventing a definitive bottom.

#### 9.2.3 Entry Rules for Counter-Trend Setups

The entry rules are similar to trend continuation setups but with specific modifications regarding support and momentum.

1.  **Price Action:**
    *   Price must exhibit a panic drop/parabolic decline.
    *   Price must hit the lower Bollinger Band (oversold condition).
2.  **Stochastic Oscillator:**
    *   Must go below 20 (oversold).
    *   Ideally, crosses back above 20 with the %K line rising above the %D line.
    *   **Exception:** If the Stochastic has not yet crossed back above 20, the trade may still be taken if the %K line (black line) crosses above the %D line (red line).
3.  **Support Levels:**
    *   Only two types of support are valid for counter-trend setups:
        1.  **Horizontal Support:** Must be tested at least three times.
        2.  **Double Bottom:** Must include a stop-out pattern (second low takes out stops of the first low).
    *   **Prohibited Support Types:**
        *   **Fibonacci Retracements:** Do not work in downtrends.
        *   **Moving Averages:** Cannot be used as support in a downtrend because moving averages are positioned above the price.
4.  **Confirmation Candle:**
    *   A bullish confirmation candle is required before entry.
    *   **Valid Bullish Confirmation Patterns:**
        *   **Full-Bodied Bullish Candle:** A green or white candle where the body is at least 2/3 of the total range of the candle.
        *   **Bullish Pin Bar:** Small body with a long lower shadow.
        *   **Pin Bar's Fat Cousin:** Similar to a Pin Bar but with a fatter body.
        *   **Bullish Engulfing Pattern.**

---

### 9.3 Counter-Trend Examples

#### Example 3: RGLD (Counter-Trend Long Setup)

**Market Context and Trend Identification**
*   **Trend Status:** Clear downtrend.
*   **Moving Average Alignment:**
    *   50-period moving average is below the 150-period moving average.
    *   Price is below the 200-period moving average.

**Setup Criteria and Validation**
1.  **Price Action:**
    *   Price drops in a 90-degree fashion (panic selling/parabolic drop).
    *   Price drops below the lower Bollinger Band (oversold).
2.  **Stochastic Oscillator:** Drops below 20 (oversold conditions on both indicators).
3.  **Support Level:** Double bottom pattern.
    *   Price makes a first low.
    *   Price rallies and then drops again.
    *   Price breaks below the first low (taking out stop losses) and forms a Pin Bar-like structure.
4.  **Confirmation Process:**
    *   **Initial Pin Bar:** The trade cannot be taken immediately after the initial Pin Bar because it closes below the line connecting the lows.
    *   **Rule:** Price must close back above the line within three to four candles.
    *   **Confirmation Candle:** A bullish candle forms that closes back above the line, providing the necessary confirmation.

**Trade Execution Parameters**
*   **Entry Order:** Buy stop limit order placed a few cents above the high of the confirmation candle.
*   **Stop Loss:** Placed below the low of the confirmation candle.
*   **Risk Distance (1R):** Approximately $3.50.
*   **Profit Target (2R):** Approximately $7.00 above the entry price.
*   **Target Price Level:** Approximately $50.35.

**Trade Outcome**
*   The price moved up, triggered the order, and resulted in a profit target hit.

#### Example 4: FIX (Counter-Trend Long Setup)

**Market Context and Trend Identification**
*   **Trend Status:** Downtrend.
*   **Moving Average Alignment:** Moving averages are in a downtrend sequence.

**Setup Criteria and Validation**
1.  **Price Action:** Price hits the lower Bollinger Band (oversold).
2.  **Stochastic Oscillator:**
    *   Drops below 20 (oversold).
    *   Comes back above 20 with %K above %D.
3.  **Support Level:** Double bottom pattern.
    *   First bottom is established.
    *   Second bottom is established, picking out stops on the first bottom.
    *   Price closes back above the "A line" (line connecting the lows).
4.  **Bullish Candlestick Pattern:**
    *   **Pattern Type:** Pin Bar's Fat Cousin.
    *   **Characteristics:** Long lower shadow with a slightly bigger body.

**Trade Execution Parameters**
*   **Entry Order:** Buy order placed above the high of the confirmation candle at approximately $29.80.
*   **Stop Loss:** Placed below the low of the candle at $27.49.
*   **Risk Distance (1R):** Approximately $2.50.
*   **Profit Target (2R):** Approximately $5.00 above the entry price.
*   **Target Price Level:** Approximately $34.41.

**Trade Outcome**
*   The price moved up the next day, triggering the order.
*   The profit target was hit in approximately 2 days.

#### Example 5: LIVN (Counter-Trend Long Setup)

**Market Context and Trend Identification**
*   **Trend Status:** Downtrend.
*   **Moving Average Alignment:** Moving averages are in a downtrend sequence.

**Setup Criteria and Validation**
1.  **Price Action:**
    *   Parabolic drop (90-degree drop) indicating panic selling.
    *   **Rule:** Panic selling is very important; if there is no panic selling, the trade is not taken.
    *   Price goes below the lower Bollinger Band (oversold).
2.  **Stochastic Oscillator:** Drops below 20 (oversold).
3.  **Support Level:** Both horizontal support and double bottom pattern are present.
    *   **Horizontal Support:** Tested multiple times (once, twice, three times, four times), establishing strong support.
    *   **Double Bottom:**
        *   First bottom established.
        *   Second bottom established lower than the first, taking out stops.
        *   Price closes back above the "A line."
4.  **Confirmation Candle:**
    *   **Initial Opportunity:** A bullish Pin Bar formed.
        *   **Rule:** For a bullish Pin Bar, the color can be red as long as the body is small and there is a long lower shadow.
        *   **Note:** The instructor missed this initial setup.
    *   **Actual Entry:** A subsequent bullish candle formed. The trade was taken after this candle.
    *   **Pattern Distinction:**
        *   **Pin Bar:** Can be red (small body, long lower shadow).
        *   **Pin Bar's Fat Cousin:** Must be a white or green candle.

**Trade Execution Parameters**
*   **Entry Order:** Buy order placed a few cents above the high of the confirmation candle.
*   **Stop Loss:** Placed below the low of the swing low.
*   **Risk Distance (1R):** Approximately $3.00.
*   **Profit Target (2R):** Approximately $6.00 above the entry price.
*   **Target Price Level:** Approximately $53.28.

**Clarification on Moving Average Bonus**
*   **Question:** Is it better if the price is above the 50-period moving average as a bonus?
*   **Answer:** Yes, for trend continuation setups. However, for counter-trend setups (like LIVN), the price is definitely below all moving averages because the trade is taken against the downtrend.

# Lesson 9: The Slingshot Mean Reversion (SMR) Swing Trading System
## Part 3: The Short Setup

### 1. Overview of the Short Setup
The short setup for the Slingshot Mean Reversion (SMR) strategy involves selling short when specific confluence criteria are met. A valid short setup requires the following conditions to occur simultaneously:
*   The price is overbought on the Bollinger Bands.
*   The price is overbought on the Stochastic Oscillator.
*   The price is facing a strong level of resistance.

Execution is performed using a sell stop limit order.

### 2. Identifying Strong Levels of Resistance
A strong level of resistance is the inverse of support. For a resistance level to be considered reliable and valid for a short setup, it must fall into one of the following categories:

#### 2.1 Moving Average Resistance
In a downtrend, moving averages act as resistance. When price rallies upward and strikes a moving average, it may reverse downward.
*   **Valid Moving Averages:** The 50, 100, 150, or 200-period moving averages.
*   **Reliability Criterion:** The moving average must have been recently tested and proven as resistance prior to the current setup.
*   **Example:** If price rallies to the 100-period moving average, and historical price action shows that this same moving average recently caused a reversal downward, it is confirmed as a reliable resistance level.

#### 2.2 Horizontal Resistance Levels
A horizontal resistance level is a price zone where price has previously failed to break through.
*   **Reliability Criterion:** The level must be tested at least three times.
*   **Pattern:** Price rallies to the level, reverses down, rallies again, reverses down, and rallies a third time, reversing down.
*   **Precision:** Resistance does not require exact precision at a single price point. Price may briefly breach the level (wicking above) before closing back below it.
*   **Execution:** If price rallies to a confirmed horizontal resistance level (tested 3+ times) and forms a bearish candlestick pattern, a short trade can be initiated.

#### 2.3 Double Top Take-Out Stops
The double top pattern functions as a resistance level and a "take-out stops" mechanism.
*   **Mechanism:**
    1.  Price rallies to form a first high (Point A).
    2.  Price pulls back.
    3.  Price rallies again, breaching the first high to form a second, higher top.
*   **Market Mechanics:** This breach is often engineered by market makers to trigger stop-loss orders placed by retail traders above the first high.
    *   Retail traders who shorted at the first high place stop-losses above it.
    *   When price breaches the high, these stops are triggered, forcing retail traders to buy to cover their short positions.
    *   Market makers/institutions sell into this buying pressure.
    *   Once the stops are cleared, institutions push the price back down.
*   **Validity Criteria:**
    1.  The second top must be higher than the first top.
    2.  Price must close back below the level of the first high (the "A line") within three to four candles.
    3.  The closing candle below the A line must be bearish (red).
*   **Invalid Setup:** If price breaches the first high but fails to close back below the A line within four candles, the setup is invalid. The resistance may convert to support, making a short trade dangerous.
*   **Ideal Price Action:** A 90-degree rise (parabolic move) to the second top is preferred. This indicates "panic buying," which typically precedes a sharp reversal.

#### 2.4 Fibonacci Retracement Levels
Fibonacci levels act as resistance specifically during downtrends.
*   **Trend Structure:** In a downtrend, the wave pattern is: Wave Down (A to B) → Wave Up (B to C) → Wave Down.
*   **Application:** The Wave Up (B to C) is a retracement. This retracement should coincide with the 50% or, preferably, the 61.8% Fibonacci retracement level.
*   **Execution:** When the retracement hits the 61.8% level (acting as resistance), a short trade is initiated to capture the next wave down.

### 3. Short Setup Structures
There are two structural contexts for short setups: Trend Continuation and Counter-Trend.

#### 3.1 Trend Continuation Short Setup
*   **Definition:** Shorting in the direction of the prevailing downtrend.
*   **Downtrend Definition:**
    *   The 50-period moving average is below the 150-period moving average; OR
    *   The price is below the 200-period moving average, and the 200-period moving average is sloping downward.
*   **Setup:** During a clear downtrend, price experiences a temporary rally (wave up), hits a strong resistance level, and becomes overbought. This is the entry point for a short trade.

#### 3.2 Counter-Trend Short Setup
*   **Definition:** Shorting against the prevailing uptrend at the top of the trend.
*   **Uptrend Definition:**
    *   The 50-period moving average is above the 150-period moving average; OR
    *   The price is above the 200-period moving average, and the 200-period moving average is sloping upward.
*   **Setup:** At the top of an uptrend, price hits a strong resistance level and becomes overbought. A short trade is initiated against the trend.
*   **Critical Requirement:** Counter-trend short setups require a parabolic, 90-degree price rise (panic buying) to validate the exhaustion of the move. Slow, 45-degree rallies are less likely to result in a sharp reversal.

### 4. Entry Rules: Trend Continuation Short Setup

#### 4.1 Market Context (S&P 500)
*   The S&P 500 index must be bearish to maximize probability.
*   **Ideal Condition:** The S&P 500 is below its 20-period EMA, and the 20-period EMA is below the 50-period moving average.

#### 4.2 Stock-Specific Criteria
1.  **Bollinger Bands:** Price rallies and hits or exceeds the upper Bollinger Band (overbought).
2.  **Stochastic Oscillator:**
    *   Stochastics must be overbought (above the 80 level).
    *   Ideally, the %K line (black) crosses below the %D line (red) while falling back below 80.
    *   *Note:* If price does not close below 80, but %K crosses below %D, the trade may still be taken.
3.  **Resistance:** Price must encounter a strong resistance level (Moving Average, Horizontal Resistance, Double Top, or Fibonacci Retracement).
4.  **Confirmation Candle:** A bearish confirmation candle is required before entry. Valid patterns include:
    *   **Red Full-Body Candle:** The body must comprise at least two-thirds of the total candle range. Long upper or lower shadows indicate indecision or bullishness and are not preferred.
    *   **Bearish Pin Bar:** Small body with a long upper shadow. Color is irrelevant (red, white, or green).
    *   **Pin Bar's "Fat Cousin":** Similar to a pin bar but with a slightly larger body. For this pattern, the body must be red. Both require a long upper shadow.
    *   **Bearish Engulfing Pattern:** A small bullish candle (green/white) is followed by a large bearish candle (red) that completely engulfs the body of the previous candle.

### 5. Trade Examples: Trend Continuation Short Setup

#### 5.1 Example: JBL
*   **Context:** Trend continuation. Downtrend confirmed (50 MA below 150 MA; price below 200 MA).
*   **Setup:**
    *   Price retraces upward, hitting the upper Bollinger Band (overbought).
    *   Stochastics: %K line exceeds 80 and crosses downward below 80.
    *   Resistance: Price hits the 50-period moving average, which had recently acted as strong resistance.
    *   Confirmation: A bearish pin bar forms (small body, long upper shadow).
*   **Execution:**
    *   **Entry:** Sell stop limit order placed a few cents below the low of the confirmation candle.
    *   **Stop Loss:** Placed a few cents above the recent swing high (which is also the high of the confirmation candle).
    *   **Risk/Reward:** Distance from entry to stop loss = 1R (approx. $0.70). Target = 2R ($1.40 below entry).
    *   **Target Price:** Approximately $26.46.
*   **Outcome:** The next day, price opened lower, triggered the sell stop limit order, and hit the profit target on the second day.

#### 5.2 Example: OMC
*   **Context:** Trend continuation. Downtrend confirmed.
*   **Setup:**
    *   Price rallies, exceeding the upper Bollinger Band (overbought).
    *   Stochastics above 80 (overbought).
    *   Resistance: Double Top pattern. Price made a high, pulled back, rallied to breach the high (taking out stops), and closed back below the first high within two candles.
*   **Execution:**
    *   **Entry:** Sell stop limit order placed a few cents below the confirmation candle.
    *   **Stop Loss:** Placed a few cents above the high of the confirmation candle.
    *   **Risk/Reward:** 1R distance calculated; Target set at 2R below entry (approx. $45.41).
*   **Outcome:** The setup was valid, but the sell stop limit order was not triggered because price gapped down the next day without filling the order. No trade was taken, but the setup would have been profitable if filled.

### 6. Entry Rules: Counter-Trend Short Setup

#### 6.1 Market Context (S&P 500)
*   The S&P 500 should ideally be bearish.
*   **Critical Price Action:** A parabolic, 90-degree rise ("panic buying") is required. Slow, 45-degree rallies are insufficient for counter-trend shorts.

#### 6.2 Stock-Specific Criteria
1.  **Bollinger Bands:** Price shoots up and exceeds the upper Bollinger Band (overbought).
2.  **Stochastic Oscillator:** Stochastics above 80 (overbought), then falling below 80 with %K below %D.
3.  **Resistance:** Only two resistance types are valid for counter-trend shorts:
    *   Horizontal resistance tested at least three times.
    *   Double Top pattern.
    *   *Note:* Moving averages are not valid resistance in an uptrend (they are below price). Fibonacci retracements are not used for counter-trend setups.
4.  **Confirmation Candle:** A bearish confirmation candle is required:
    *   Red full-body candle.
    *   Bearish pin bar (small body, long upper shadow; color irrelevant).
    *   Pin bar's "fat cousin" (larger body, must be red, long upper shadow).
    *   Bearish engulfing pattern.

### 7. Trade Examples: Counter-Trend Short Setup

#### 7.1 Example: DLR
*   **Context:** Counter-trend. The chart is an uptrend even though the 50 MA is still below the 150 MA: price is above the 200 MA, the 200 MA is sloping upward, and price is making higher highs and higher lows. This illustrates that price action and the 200-MA structure can identify the uptrend before the 50-MA/150-MA crossover.
*   **Setup:**
    *   Price action: Parabolic 90-degree rise (panic buying).
    *   Indicators: Price exceeds upper Bollinger Band; Stochastics well above 80.
    *   Resistance: Double Top pattern. Price breached the first high, took out stops, and closed back below the high with a full-bodied red candle.
*   **Execution:**
    *   **Entry:** Sell stop limit order placed just below the low of the confirmation candle.
    *   **Stop Loss:** Placed a few cents above the swing high.
    *   **Risk/Reward:** 1R distance = $4.00. Target = 2R ($8.00 below entry).
    *   **Target Price:** Approximately $126.55.
*   **Outcome:** The next day, price opened lower, triggered the sell order, and hit the profit target within three days.

#### 7.2 Example: VIP
*   **Context:** Counter-trend.
*   **Setup:**
    *   Indicators: Price above upper Bollinger Band; Stochastics above 80.
    *   Resistance: Double Top pattern with a bearish engulfing candle closing below the first high.
    *   Price Action: Clear 90-degree parabolic rise preceding the reversal.
*   **Execution:**
    *   **Entry:** Sell stop limit order placed just below the low of the confirmation candle.
    *   **Stop Loss:** Placed just above the high of the confirmation candle.
    *   **Risk/Reward:** 1R distance = $1.00. Target = 2R ($2.00 below entry).
    *   **Target Price:** Approximately $15.26.
*   **Outcome:** The next day, price dropped, triggered the sell order, fluctuated slightly, and hit the profit target within approximately one week.

### 8. Conclusion
This concludes the Slingshot Mean Reversion (SMR) Swing Trading System. Mastery of both long and short setups, strict adherence to entry rules, and proper risk management are essential for success.
