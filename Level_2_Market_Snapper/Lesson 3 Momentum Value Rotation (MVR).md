---
title: "Momentum Value Rotation (MVR)"
---

## 1. Introduction to the MVR System

The Momentum Value Rotation (MVR) swing trading system is a proprietary strategy designed for simplicity, consistency, and profitability. Developed approximately one and a half years prior to this publication, the system has demonstrated strong performance and has been integrated into the *Stock Trading Course Level 2: Market Snapper*. 

The core philosophy of MVR is straightforward: success is achieved through a disciplined routine of entering and exiting stocks based on a fixed set of rules. By eliminating emotional decision-making and focusing on a curated list of high-probability candidates, traders can systematically capture market gains while managing risk.

## 2. Core Market Research and Strategic Concept

### 2.1 Market Performance Distribution
Extensive research into the United States stock market, which comprises approximately 8,000 publicly traded stocks, reveals a critical insight regarding market returns:
*   The top 2,000 stocks (approximately 25% of the total market) account for the majority of gains in major indices.
*   When an index such as the S&P 500 rises, it is primarily driven by this top 25% of performers.
*   The remaining 75% of stocks (approximately 6,000 stocks) collectively generate a total return of roughly zero over any given year, with gains in some stocks offsetting losses in others.

Consequently, the MVR system is built on the principle that traders should focus exclusively on the top 25% of best-performing stocks.

### 2.2 Relative Strength (RS)
To identify the top-performing stocks, the system utilizes **Relative Strength (RS)**. It is important to distinguish RS from the Relative Strength Index (RSI); they are entirely different metrics. 
*   **Definition:** Relative Strength measures a stock’s price performance relative to the S&P 500 index.
*   **Application:** Stocks with the highest RS exhibit the strongest price momentum.
*   **Historical Context:** Relative strength-based momentum strategies have been employed by professional traders for decades. Over the past 50 years, these strategies have consistently demonstrated the largest edge and most reliable outperformance of any tested methodology.

### 2.3 The Problem with Pure Momentum
Trading solely based on high relative strength presents a significant drawback: high beta. High-beta stocks are highly volatile and tend to be overvalued.
*   **Bull Markets:** When the index rises 1%, high-momentum stocks may rise 2%.
*   **Bear Markets/Corrections:** When the index falls 1%, these same stocks may fall 2%.
While pure momentum strategies excel in uptrends, they underperform significantly during market downturns due to their elevated volatility and overvaluation.

### 2.4 The MVR Solution: Combining Momentum and Value
To mitigate the risks of pure momentum trading, the MVR system combines **High Relative Strength** with **High Relative Value** (undervaluation). 
*   **Intersection:** The strategy targets stocks located at the intersection of strong momentum and attractive valuation.
*   **Benefits:** Studies indicate that combining high RS with high relative value yields stocks that:
    *   Sustain upside trends more effectively.
    *   Possess greater upside potential.
    *   Hold their ground better than the broader market during corrections.
    *   Exhibit lower volatility and reduced drawdowns.
Momentum and value combinations have been identified as the most profitable strategies of the last 50 years while simultaneously improving risk-adjusted returns.

## 3. Identifying MVR Stocks: Measurement Criteria

### 3.1 Measuring Relative Strength
Relative Strength is quantified using the **IBD RS Rating System**, developed by Investors Business Daily (IBD).
*   **Scale:** Stocks are ranked from 1 to 100.
*   **Interpretation:** A rating of 100 indicates the strongest relative strength; a rating of 1 indicates the weakest.
*   **MVR Requirement:** Only stocks with an RS Rating of **80 or higher** are considered.

### 3.2 Measuring Relative Value
Value is assessed using the **PEG Ratio** (Price/Earnings-to-Growth) concept. The fundamental rule is that a stock’s Price-to-Earnings (P/E) ratio should align with its earnings growth rate.
*   **Fairly Valued:** P/E Ratio = Earnings Growth Rate.
*   **Overvalued:** P/E Ratio > Earnings Growth Rate.
*   **Undervalued:** P/E Ratio < Earnings Growth Rate.

**MVR Valuation Rule:** To ensure a stock is undervalued, its P/E ratio must be **less than 70% of its earnings growth rate**. 

Traders must evaluate three specific growth metrics. A stock qualifies as undervalued if it meets the P/E < 70% growth criterion for **at least one** of the following:
1.  Five-year earnings growth rate.
2.  Current quarter earnings growth rate.
3.  Last quarter earnings growth rate.

## 4. Screening Process and Criteria

### 4.1 Screening Tool and Frequency
The MVR system requires a sophisticated screening platform capable of applying proprietary IBD metrics. The recommended tool is **MarketSmith**, a subscription service owned by IBD. 
*   **Frequency:** Screening is conducted monthly, typically at the end of the previous month or the beginning of the current month.
*   **Output:** The process generates a watchlist of stocks meeting strict momentum and value criteria.

### 4.2 Preset Screeners: List A and List B
The system utilizes two preset screeners within MarketSmith: **MVRA** and **MVRB**.

#### 4.2.1 MVRA Criteria (Primary List)
The A List identifies stocks with strong fundamentals, momentum, and sector alignment. The specific criteria are:
*   **Earnings Per Share Rating:** ≥ 80
*   **RS Rating:** ≥ 80
*   **Earnings Percentage Growth (5 Years):** ≥ 25%
*   **Earnings Growth (1 Year):** ≥ 1%
*   **Timeliness Rating:** A or B (A proprietary IBD/MarketSmith rating indicating a high tendency to outperform over the next 12 months based on earnings and price performance).
*   **Stock Price:** ≥ $5.00
*   **Composite Rating:** ≥ 80 (IBD’s overall rating based on multiple criteria).
*   **Industry Group Strength Rank:** A or B
*   **Industry Group Rank:** ≥ 50 (Ensures the stock belongs to a top-ranked industry sector).
*   **Valuation Check:** P/E Ratio < 70% of (5-year growth OR current quarter growth OR last quarter growth).
*   **Chart Check:** Price must be trading above the 50-day Simple Moving Average (SMA).

#### 4.2.2 MVRB Criteria (Secondary List)
The B List applies stricter earnings acceleration requirements. Key differentiating criteria include:
*   **EPS Growth (Last Quarter):** > 70%
*   **EPS Growth (Quarter a Year Ago):** > 70%
Due to its strictness, the B List often yields zero stocks in a given month. However, any qualifying stocks are combined with the A List for final selection.

### 4.3 Final Watchlist Selection
1.  Combine all stocks from the MVRA and MVRB lists.
2.  Sort the combined list by RS Rating from highest to lowest.
3.  Select the **top 12 stocks** maximum.
4.  If fewer than 12 stocks qualify (e.g., 5, 8, or 10), trade only the available qualified stocks.

## 5. Chart Setup and Indicator Configuration

A dedicated chart template is required for the MVR strategy. The template must include specific moving averages and custom indicator configurations.

### 5.1 Standard Moving Averages
*   20-period Exponential Moving Average (EMA)
*   50-period Simple Moving Average (SMA)
*   100-period Simple Moving Average (SMA)
*   150-period Simple Moving Average (SMA)
*   200-period Simple Moving Average (SMA)

### 5.2 Required Indicators
1.  **Relative Strength (RS) with 20 EMA:**
    *   Add the "Relative Strength vs S&P 500" indicator.
    *   Apply a 20-period EMA directly to the RS line (not the stock price).
    *   *Configuration:* RS line in black; 20 EMA on RS in red.
2.  **On Balance Volume (OBV) with 20 EMA:**
    *   Add the "On Balance Volume" indicator.
    *   Apply a 20-period EMA directly to the OBV line.
    *   *Configuration:* OBV line in black; 20 EMA on OBV in red.
3.  **Average True Range (ATR):**
    *   Add the ATR indicator.
    *   Set period to **60**.
    *   *Purpose:* Used to validate stop loss distance.

### 5.3 Thinkorswim Setup Instructions
For traders using Thinkorswim, custom scripts are required to apply EMAs to the RS and OBV lines.
1.  Download the MVR Focus Scripts from the course resources.
2.  Open the ThinkScript Editor (Create → ThinkScript Editor).
3.  **OBV Script:** Delete default code, paste the OBV script, name it "OBV with 20 EMA," and save.
4.  **RS Script:** Create a new study, paste the RS script, name it "RS with 20 EMA," and save.
5.  Add the standard moving averages and a 60-period ATR.
6.  Adjust colors for clarity (e.g., black for primary lines, red for EMAs).
7.  Save the configuration as the "MVR" template.

## 6. Entry Rules and Order Execution

Traders must review the top 12 watchlist stocks daily before the market opens to identify entry signals.

### 6.1 Entry Criteria
All of the following conditions must be met:
1.  **RS Indicator:** The Relative Strength line must be above its 20 EMA.
2.  **OBV Indicator:** The OBV line must be above its 20 EMA.
3.  **Price Trend:** The stock price must be above the 50 SMA.
4.  **Price Structure:** The price must be making higher lows.
5.  **Candlestick Pattern:** The most recent candle must be a bullish candle or a bullish pin bar.
6.  **Earnings Check:** No earnings announcement is scheduled within the next 7 days.

*Note:* If all criteria are met except the last candle is not bullish, wait for the next day. If a bullish candle forms and all other criteria remain valid, the entry signal is confirmed.

### 6.2 Order Placement
*   **Order Type:** Buy Stop Limit Order.
*   **Entry Price:** Placed a few cents above the high of the last confirmed bullish candle.
    *   *Example:* For a $20 stock, place the order ~$0.03 above the high. For a $180 stock, place the order ~$0.10 above the high.
*   **Stop Loss Placement:** Placed a few cents below the most recent swing low.
    *   *Swing Low Definition:* A low point that is higher than the preceding low, confirming the higher-low structure.
    *   *Gap Consideration:* Price gaps often act as strong support/resistance levels. Placing the stop loss below a gap/swing low is recommended.
*   **Risk Distance Validation (1R):** The distance between the entry price and stop loss (1R) must be:
    *   Greater than 1x the 60-period ATR.
    *   Less than 3x the 60-period ATR.
    *   *Adjustment:* If the distance is less than 1 ATR, move the stop loss further away. If it exceeds 3 ATR, move it closer.

## 7. Exit Rules and Trade Management

### 7.1 Primary Exit Signal
*   **Condition:** Both the Relative Strength line AND the OBV line must cross below their respective 20 EMAs.
*   **Execution:** Exit the position immediately at the **opening price** of the next trading day.
*   **Rule Evolution:** Initially, exiting on a single indicator cross was used. However, this resulted in premature exits and leaving profits on the table. Requiring both indicators to cross below has proven more profitable.

### 7.2 Earnings Exit Rule
Regardless of indicator signals, always exit the position before the stock’s earnings announcement date to avoid unpredictable volatility.

### 7.3 Trade Management
*   **Profit Target:** There is no fixed profit target. The position is held to ride the trend until the exit signal occurs or earnings are announced.
*   **Stop Loss Adjustment (Risk-Free Trade):** Once the price moves 1R in your favor, move the stop loss to the entry price.
*   **Trailing Stop (Optional):** Traders may optionally trail the stop loss upward below subsequent swing lows to lock in profits. 
    *   *Instructor Note:* While this method was used previously, it is no longer routinely applied. The indicator-based exit signal is preferred for simplicity and effectiveness.

## 8. Risk Management Guidelines

Strict risk management is essential for long-term success with the MVR system.

*   **Position Sizing:** Use a position sizing calculator to determine share quantity.
*   **Risk Per Trade:** Limit risk to **1% to a maximum of 3%** of your net liquidation value per trade.
*   **Total Portfolio Risk:** Do not expose the account to more than **10% combined risk** at any time.
    *   *Example:* If risking 1% per trade, maintain a maximum of 10 open positions simultaneously.
*   **Loss Expectations:** Losing trades do not always result in a full 1R loss. Frequently, the indicator exit signal triggers before the stop loss is hit, resulting in losses of less than 1R.

## 9. Detailed Trade Examples and Case Studies

The following examples illustrate the application of MVR rules, including specific prices, dates, and risk calculations.

### 9.1 AUDC (November List)
*   **Screening Date:** October 31.
*   **Chart Review Date:** November 1.
*   **Signal Confirmation:** RS and OBV above 20 EMAs; price above 50 SMA; bullish candle present.
*   **Entry:** Buy stop limit placed ~$0.03 above the high of the bullish candle at **$21.64**.
*   **Stop Loss:** Placed below the recent swing low/gap at **$19.89**.
*   **Risk Calculation:** 
    *   1R Distance: $21.64 - $19.89 = **$1.75**.
    *   ATR Check: 60-period ATR was $0.90. 
    *   Validation: $1.75 > 1 ATR ($0.90) and < 3 ATR ($2.70). Valid setup.
*   **Execution:** Order triggered on November 1 at approximately **$21.63**.
*   **Status:** Position remained open as of December 27. RS and OBV stayed above 20 EMAs. At a hypothetical exit price of $25.31, the trade would represent approximately 2R.

### 9.2 KLV (Late November/Early December 2019)
*   **Entry Setup:** RS and OBV above 20 EMAs; price above 50 SMA; higher lows confirmed.
*   **Entry:** Buy stop limit above the high of the bullish candle at **$20.30**.
*   **Stop Loss:** Below the swing low, establishing a 1R distance of **$1.40** (validated against ATR).
*   **Execution:** Triggered on December 2.
*   **Exit 1:** RS and OBV crossed below 20 EMAs. Sold at the next day’s open at **$26.50**.
    *   Profit: $6.20 per share.
    *   R-Multiple: 4.4R.
*   **Re-entry:** The following day, the stock closed bullish and indicators returned above the 20 EMAs.
    *   New Entry: Buy stop above high at **$27.85**.
    *   New Stop: Below swing low (1R = $1.41).
    *   Result: Order triggered, and the trend was ridden again.

### 9.3 High-Price Stock Example (~$180)
*   **Entry:** Buy stop limit ~$0.10 above the high at **$183.37**.
*   **Stop Loss Placement:** 
    *   Initial swing low was too close (less than 1 ATR).
    *   60-period ATR was $8.30.
    *   Stop loss was moved down to achieve a minimum 1R distance of $8.30.
*   **Execution:** Triggered the next day.
*   **Management:** Stop loss was trailed below a new swing low.
*   **Exit:** Stop loss hit at **$204.26**.
    *   Profit: $20.89 per share.
    *   R-Multiple: 2.5R.
    *   *Note:* The trade would have exited via indicator cross regardless.

### 9.4 Break-Even Example
*   **Setup:** All entry criteria met. Buy stop placed above bullish candle high; stop below swing low.
*   **Execution:** Triggered, price rose, then declined.
*   **Exit:** RS and OBV crossed below 20 EMAs. Sold at next day’s open at **$18.20**.
*   **Result:** Break-even trade.

### 9.5 UCTT (Loss Followed by Win in Same Month)
*   **Trade 1 (Loss):**
    *   Entry: Above high at **$24.59**.
    *   Stop: Below swing low. 1R Distance: **$2.73**.
    *   Execution: Triggered, price declined. Indicators crossed below 20 EMAs.
    *   Exit: Next day’s open at **$23.00**.
    *   Result: Loss of 0.57R (less than full risk due to indicator exit).
*   **Trade 2 (Win):**
    *   Signal: Stock closed bullish; indicators returned above 20 EMAs.
    *   Entry: Above high at **$23.39**.
    *   Stop: Below new swing low at **$21.92**. 1R Distance: **$1.47**.
    *   Execution: Triggered. Price dipped (RS dropped below 20 EMA, but OBV remained above, so position was held).
    *   Trend: Stock rallied significantly.
    *   Exit: Sold at **$33.00** prior to earnings announcement.
    *   Profit: $9.61 per share.
    *   R-Multiple: 6.5R.
    *   *Net Result:* Despite the initial loss, the month concluded with a substantial profit.

## 10. Historical Performance Review (2019)

As of December 27, 2019, the MVR system demonstrated the following performance metrics based on a trading journal:

*   **Total Realized R:** 25.75R.
    *   At 1% risk per trade: 25.75% annual return.
    *   At 2% risk per trade: 50% annual return.
*   **Open Positions:** Multiple open positions were highly profitable. Upon closure, the total annual R was projected to reach 30R–35R, outperforming the S&P 500.
*   **Monthly Performance Breakdown:**
    *   January: 14R
    *   February: 5R
    *   March: -2R
    *   April: -2R
    *   May: -3R (Only 5 stocks qualified on the list)
    *   June: 1.4R
    *   July: Break-even
    *   August: 5R
    *   September: 4.79R
    *   October: ~0R (Break-even)
    *   November: 3R (closed trades), plus multiple open profitable positions.
    *   December: 2 closed trades (1 loss, 1 break-even), 4 open positions.

## 11. Summary

The Momentum Value Rotation (MVR) system is a disciplined swing trading strategy that focuses on the top 25% of market performers by combining high relative strength with undervaluation. Key takeaways include:
*   **Simplicity:** Trade a maximum of 12 stocks per month.
*   **Rules-Based:** Entries and exits are dictated by specific indicator crossovers (RS and OBV relative to their 20 EMAs) and price structure.
*   **Risk Control:** Losses are frequently less than 1R due to early indicator exits. Strict position sizing limits total portfolio risk to 10%.
*   **Trend Following:** No fixed profit targets are used; positions are held until the trend reverses or earnings are announced.

By adhering to the screening criteria, chart setups, and execution rules outlined in this chapter, traders can systematically participate in market momentum while mitigating the volatility risks associated with pure momentum strategies.