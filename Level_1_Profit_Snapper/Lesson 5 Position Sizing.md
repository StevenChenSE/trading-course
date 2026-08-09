---
title: "Position Sizing"
---

## 5.1 Position Sizing Fundamentals

### 5.1.1 What Is Position Sizing
Position sizing is the part of a trading system that tells you **how many shares to buy or sell per trade**. It is the most critical — and most overlooked — element of a trader's system.

A common rule of thumb cited in the course:
*   **60%** of trading success comes from **psychology**.
*   **30%** comes from **position sizing**.
*   **10%** comes from the actual strategy itself (entry and exit rules).

The instructor goes further and asserts that position sizing is **even more important** than the entry rules and the strategy being used. Research cited in the lesson shows that even if you take **random entries** (e.g., flipping a coin to decide whether to buy or sell), but you get your position sizing correct, you can still make money over time. Conversely, traders who master fundamental and technical analysis often fail to profit consistently because they lack proper position sizing.

### 5.1.2 Why Position Sizing Matters
Position sizing is important because it helps you determine three things:
1.  **How many shares to go long or short** on a particular trade.
2.  **Define your risk per trade**, which must be consistent, and your **overall risk to your portfolio at any one time**.
3.  **Define your expected returns on your portfolio**, so you can roughly calculate what your returns will be and not leave profits to chance.

In essence, position sizing is about calculating **the size of your position** — how big a position to take in any particular trade.

### 5.1.3 Key Definitions
*   **Net Liquidation Value (NLV):** When you open a brokerage account, your account statement shows your **net liquidation** — the total value of your cash plus the value of any shares you are holding. This is the figure your risk percentage is based on.
*   **Risk Per Trade:** The maximum amount of capital you are willing to lose on a single trade if your stop loss is hit. Expressed as a percentage of NLV.
*   **R (Unit of Risk):** The dollar amount risked on a single trade. For example, if your NLV is $10,000 and you risk 1%, then **1R = $100**. Thinking in R-multiples (rather than dollar amounts) is the discipline used by professional traders.
*   **1R:** The distance between the entry price and the stop loss.
*   **2R (or 2:1 Reward-to-Risk):** The profit target placed at **double** the distance of the risk, so the reward is twice the risk.

---

## 5.2 Calculating Position Size

### 5.2.1 The Three-Step Position Sizing Process
Before every trade, follow these three steps:

**Step 1 — Look at Your Capital (Net Liquidation):**
Determine the total value of your account. For example, if you open an account with $10,000 in cash, your net liquidation is $10,000.

**Step 2 — Determine Your Risk Per Trade:**
Your risk per trade is the maximum loss you can take. **The loss from any single trade should never be more than 1% to a maximum of 3% of your capital (NLV) at any one time.**

Rules:
*   **Beginners should always risk 1% per trade.**
*   The risk percentage must be **consistent** — do not risk 1% on one trade and 2% on another. Pick one level and stick with it across every trade, regardless of how confident you feel.
*   When you upgrade to 2%, you must stick with 2% on every trade.

**Step 3 — Calculate the Number of Shares:**
Use the following formula:

$$\text{Number of Shares} = \frac{\text{Risk Per Trade (\%)} \times \text{Net Liquidation Value}}{\text{Risk Per Share}}$$

### 5.2.2 Long Trade Example — Bank of America
Assume:
*   **NLV:** $10,000
*   **Risk Per Trade:** 1% → 1% × $10,000 = **$100** (total risk)
*   **Entry Price:** $8.60 (Bank of America)
*   **Stop Loss:** $7.90
*   **Risk Per Share:** $8.60 − $7.90 = **$0.70**
*   **Profit Target:** $8.60 + (2 × $0.70) = **$10.00** (placed at 2R)

Calculation:

$$\text{Number of Shares} = \frac{\$100}{\$0.70} \approx 143 \text{ shares}$$

Total position size:
$$143 \times \$8.60 = \$1,229.80$$

The **total risk remains $100**, not the $1,229.80 position size. **Position size is not the same as risk** — you cannot lose $1,229.80; you can only lose $100 because the stop loss defines the maximum loss.

### 5.2.3 Short Trade Example — JC Penney
Assume:
*   **NLV:** $10,000
*   **Risk Per Trade:** 1% → $100 (total risk)
*   **Entry Price:** $16.50 (short sell)
*   **Stop Loss:** $18.60 (always above entry for shorts)
*   **Risk Per Share:** $18.60 − $16.50 = **$2.10**
*   **Profit Target:** $16.50 − (2 × $2.10) = **$12.30**

Calculation:

$$\text{Number of Shares} = \frac{\$100}{\$2.10} \approx 48 \text{ shares (sell short)}$$

Total short position: 48 × $16.50 = **$792**.

Notice that the Bank of America long position was larger ($1,229.80) than the JC Penney short position ($792), but the **risk is the same ($100) on both** — because risk depends on stop-loss distance, not dollar value of the position.

### 5.2.4 Compounding via Net Liquidation
Your risk is always based on **net liquidation**, not on remaining cash balance.

*   If you buy Bank of America and it rises to your profit target, your $10,000 grows to roughly $10,200. Your next trade risks 1% of $10,200.
*   If Bank of America falls and hits your stop loss, your $10,000 shrinks to $9,900. Your next trade risks 1% of $9,900, automatically reducing your position size.

This compounds gains upward and automatically cuts position size on drawdowns — a key benefit of risk-percentage-based sizing.

### 5.2.5 Position Sizing Calculator
The course provides a downloadable Excel-based **Position Sizing Calculator** in the resource section of the website. Usage:
*   Only key inputs into the **white boxes** (NLV, risk per trade, entry price, stop loss, target price).
*   The **red boxes** contain pre-built formulas and should not be edited.

For the Bank of America example, the calculator displays:
*   **Risk-Reward Ratio:** 2 (risking 1 to make 2)
*   **Risk Per Share:** $0.70
*   **Potential Profit Per Share:** $1.40
*   **Number of Shares to Buy:** 143

For the JC Penney example, the calculator displays a result of approximately **−47.62** (or rounded up to **48**), where the negative sign indicates "sell."

---

## 5.3 Portfolio Risk Management

### 5.3.1 How Many Concurrent Positions
The number of concurrent positions depends on **how much cash you have left** in your account. Every long position uses up cash equal to the position size; every short position uses up roughly **50% of the position value as collateral** with most brokers.

Worked example starting with $10,000 cash:

| # | Position | Approx. Cash Used | Running Cash Remaining |
|---|----------|-------------------|------------------------|
| 1 | Long BAC | $1,200 | $8,800 |
| 2 | Short JC Penney (~$800) | $400 (collateral) | $8,400 |
| 3 | Long McDonald's | $2,300 | $6,100 |
| 4 | Long Apple | $2,006 | ~$4,094 |
| 5 | Fifth position | ~$2,000 | ~$2,094 |

After about **4 to 5 positions** in a typical cash account, you run out of cash.

### 5.3.2 Maximum Number of Positions
The number of positions you hold at one time is constrained by your **maximum portfolio risk exposure**, which should **never exceed 10% of your capital at any one time**.

| Risk Per Trade | Maximum Concurrent Positions | Total Maximum Portfolio Risk |
|----------------|------------------------------|------------------------------|
| 1%             | 10 positions                 | 10%                          |
| 2%             | 5 positions                  | 10%                          |
| 3%             | 3 positions                  | ~9% (≈10%)                   |

### 5.3.3 Why Cap Portfolio Risk at 10%
If you hold 10 open positions and a market shock hits (e.g., a political tweet, a geopolitical event, or sudden overnight gap), all stops can be triggered simultaneously because stocks are correlated during panic sell-offs. The result:
*   **10 simultaneous losses** in one night.
*   **Capital drawdown of 10%** instantly.

This destroys capital psychologically and mathematically. A 50-position book could face a 50% drawdown overnight — a hole that is extremely difficult to climb out of.

### 5.3.4 Drawdowns and Recovery
Always **minimize drawdowns**. The mathematics of recovery are unforgiving:

| Drawdown | Required Gain to Break Even |
|----------|-----------------------------|
| 10%      | 11.11%                      |
| 50%      | 100%                        |
| 90%      | 900%                        |
| 100%     | Game over                   |

> "Trading is about preserving your capital, preserving your ammunition, and staying in the game. Once you lose your money, you can't play anymore."

### 5.3.5 Diversification Rule
When taking 5–10 concurrent positions, ensure they are **not all from the same sector or industry**. Stocks in the same sector tend to move together, so correlated stops can fire simultaneously. **Cap exposure to a maximum of two stocks from the same industry** at any time.

### 5.3.6 Cash Account vs. Margin Account
| Account Type | Buying Power | Notes |
|--------------|--------------|-------|
| Cash Account | Equal to deposited cash (e.g., $10,000 deposit → $10,000 buying power) | Allows ~4–5 positions max with 1% risk per trade. |
| Margin Account | Typically up to 2× deposited cash (e.g., $10,000 deposit → ~$20,000 buying power) | Broker lends the difference. Minimum deposit typically ~$3,000. Margin interest rates vary: Interactive Brokers ~3.5%/yr; TD Ameritrade / Charles Schwab ~8–9%/yr, calculated daily. |

**Critical Rule:** Even with margin, always risk 1% (or your chosen fixed percentage) of your **original net liquidation value**, **never** of your **buying power**. Buying power includes broker money, which is not yours.

Example account shown in the lesson:
*   Net Liquidation Value: **$671,000**
*   Buying Power: **$1.9 million** (broker lends an extra $1.2 million)
*   Risk per trade must still be **1% of $671,000** — never 1% of $1.9 million.

> "Reckoning 1% or 2% of borrowed money is suicidal. Friends of mine have done that and gone bankrupt overnight."

### 5.3.7 Contracts for Difference (CFDs)
CFDs allow more positions by reducing capital commitment per trade. With CFDs you only need to put up roughly **10% of the position size as margin** (vs. 100% for the underlying stock). The broker charges financing interest of approximately **3–4% per year**, calculated daily.

Example comparison with $10,000 NLV:

| Position | Stock (Cash Account) | CFD |
|----------|----------------------|-----|
| 1st (BAC, ~$2,500 size) | $2,500 cash used | ~$250 margin used |
| 4th cumulative | $10,000 cash used, no more positions possible | ~$1,000 margin used, still ~$9,000 cash free |
| 10th cumulative | Not possible without borrowing | ~$2,500 margin used, total risk 10% |

**CFD Advantages:**
*   **High leverage:** Only 10% margin required.
*   **Easy short selling:** No need to physically borrow shares.
*   **More positions within 10% total risk cap.**

**CFD Disadvantages / Risks:**
*   **Over-the-counter derivative** — not exchange-listed; positions can only be closed with the issuing broker.
*   **Financing charges** of ~3–4% per year on margin.
*   **You never own the underlying shares** — not suitable for medium- to long-term investing.
*   **Possible losses exceeding your deposit** if used irresponsibly. Buying $100,000 of stock with only $10,000 of capital means a 20% adverse move wipes your account and leaves you owing the broker an additional $10,000.
*   **Market-maker CFD brokers** set their own prices (often with a spread); **DMA (Direct Market Access) CFD brokers** (e.g., Interactive Brokers, Halifax) mirror actual exchange prices with little or no spread. DMA is preferred.

---

## 5.4 Expected Profit Calculation

### 5.4.1 The Expectancy Formula
The expectancy formula tells you whether a strategy has a **statistical edge**. It is computed as:

$$\text{Expected Profit Per Trade} = (\text{Win Rate} \times \text{Avg Win}) - (\text{Loss Rate} \times \text{Avg Loss})$$

Where:
*   **Win Rate** = % of trades that are winners
*   **Loss Rate** = 100% − Win Rate
*   **Avg Win** = average dollar (or R-multiple) gain on a winning trade
*   **Avg Loss** = average dollar (or R-multiple) loss on a losing trade

### 5.4.2 Example With Realistic Numbers
Assume a $10,000 account, 1% risk per trade ($100), and a 1:2 reward-to-risk ratio ($200 win per win):
*   Win Rate = 55%, Loss Rate = 45%
*   Avg Win = $200, Avg Loss = $100

$$\text{Expected Profit Per Trade} = (0.55 \times \$200) - (0.45 \times \$100) = \$110 - \$45 = \$65$$

This **positive expectancy** of **$65 per trade** means that, on average, every trade that follows the system rules makes $65. Over **100 trades per year** (~9–10 per month):

$$100 \times \$65 = \$6,500$$

That's a **65% return per year** on the initial $10,000 capital — roughly **5% per month**.

### 5.4.3 Thinking in R-Multiples
Successful traders think in **R-multiples**, not in dollar amounts. Thinking in dollars causes emotional reactions ("I lost $300 — that's a TV!"). Thinking in R keeps the process statistical.

Examples of R-thinking:
*   Losing trade → "I lost **1R**." (Not "I lost $100.")
*   Winning trade → "I made **2R**." (Not "I made $200.")

Re-running the expectancy with R-multiples, using a 50% win rate and 1:2 reward-to-risk:

$$\text{Expected Profit Per Trade} = (0.50 \times 2R) - (0.50 \times 1R) = 1R - 0.5R = 0.5R$$

So every trade should net **+0.5R on average**. Over 100 trades per year:

$$100 \times 0.5R = 50R \text{ per year}$$

The dollar interpretation of 50R depends on the size of 1R:
*   Risk 1% per trade → 1R = 1% of capital → 50R = **50% annual return** ($10,000 → $15,000).
*   Risk 2% per trade → 1R = 2% of capital → 50R = **100% annual return** ($10,000 → $20,000).
*   Risk 3% per trade → 1R = 3% of capital → 50R = **150% annual return**.

### 5.4.4 Risk vs. Volatility Trade-off
Higher per-trade risk produces higher returns but also **greater volatility and larger drawdowns**. For example, 10 consecutive losses at 3% risk per trade creates a 30% drawdown — psychologically devastating for most traders. Beginners or those with a weak stomach should stick with **1% per trade** for lower volatility and steadier (though smaller) returns.

> "It always goes back to: you want higher returns, you have to take higher volatility. Low volatility, you still get pretty good returns, but not insane returns — it's up to you what you're comfortable with."

---

## 5.5 Trade Simulator and Drawdowns

### 5.5.1 The Excel Trade Simulator
The course provides a downloadable **Excel Trade Simulator** that randomizes outcomes over 100 trades. It uses Excel's random number generator to produce a realistic sequence of wins and losses.

**Inputs (white cells — user controls these):**
*   **Win Rate** (e.g., 55%)
*   **Losing R-Multiple Range** (e.g., min 1R, max 1.1R to account for slippage)
*   **Winning R-Multiple Range** (e.g., min 2R, max 2R for limit-order exits)
*   **Risk Per Trade** (e.g., 1%)
*   **Starting Capital** (e.g., $10,000)

**Outputs (yellow/red cells — formulas):**
*   **Simulated Win Rate** (typically different from input due to random sampling)
*   **Final Capital** after 100 trades
*   **Compounded Return %**
*   **Maximum Drawdown** (in R and in %)

### 5.5.2 Simulator Scenarios

| Scenario | Win Rate | Risk/Trade | Outcome (illustrative) |
|----------|----------|------------|------------------------|
| Baseline | 55% | 1% | $10,000 → ~$17,000 over 100 trades (~70–75% return) |
| Lower win rate | 50% (simulated 46%) | 1% | ~41% return in ~5 months |
| Higher win rate | 60% | 1% | Much larger compounded return |
| Higher risk | 55% | 2% | Larger return, larger volatility / drawdown |
| Higher risk | 55% | 3% | Largest return, biggest drawdowns |

### 5.5.3 The Random Walk of Outcomes
Even with a 55% win-rate edge, short-term samples can be brutal or brilliant. Examples highlighted in the lesson:
*   A new trader's first 10 trades could be **2 wins and 8 losses** → they conclude the strategy "doesn't work" and quit.
*   A new trader's first 10 trades could be **13 wins in a row** → they feel like a genius and risk 10% per trade, then lose everything when the inevitable losing streak arrives.

The lesson emphasizes:
> "Wins and losses are distributed in such a way that you never know when you're going to get a win or a loss. When you get a series of winning trades, don't be too happy. If you get a series of losing trades, don't be upset. **Think statistically.** When you even out over the large number of trades, you always make money. **It is impossible to lose money if you keep following this system** and detach emotionally."

### 5.5.4 Typical Strategy Profile
The strategies taught in this course are expected to generate **~20 trades per month**, meaning **100 trades every ~5 months**. With consistent 1% risk, 2R profit target, and ~55% win rate, the goal is a positive expectancy that compounds capital steadily.

---

## 5.6 Order Types

### 5.6.1 Why Pre-Plan Orders
The instructor trades **exclusively** in this manner:
*   All research and order placement happens **before the market opens**.
*   The moment the market opens, **all trades execute automatically** through the broker.
*   The instructor does **not watch** the market while it is open — and explicitly discourages it.

Watching the market intraday is **counterproductive** because:
*   You cannot make the price go up or down.
*   Day-to-day fluctuations provoke emotional reactions (good when price rises against you, bad when it falls in your favor).
*   Emotional reactions cause you to **intervene** — moving your stop loss lower for "more buffer" or removing your target profit. This destroys the system's positive expectancy.

> "By screwing around with your target price and your stop loss, you will no longer have a positive expectancy in your trading system."

A disciplined swing trader's daily workflow is **less than an hour of pre-market work**: find setups, place orders, then close the laptop and live your life. The next day, look at the closed market and decide what to do next.

### 5.6.2 Market Orders
A **market order** is an order to buy or sell at the **current market price**.
*   **Guaranteed to be filled** — you will definitely get the shares.
*   **Price not guaranteed** — by the time the order reaches the exchange, the price may have moved (especially in fast markets).

The instructor **never uses market orders** because orders are placed before the market opens.

### 5.6.3 Limit Orders
A **limit order** is an order to buy or sell **at a specific price or better**.
*   **Price is guaranteed** — you specify the price you want.
*   **Fill not guaranteed** — the order only executes if price reaches the specified level.

**Buy Limit Order:**
*   Placed at a price **at or below** the current market.
*   Example: stock is at $10, place buy limit at $9.80 → fills at $9.80 or lower (you always want the cheapest price when buying).

**Sell Limit Order:**
*   Placed at a price **at or above** the current market.
*   Example: stock is at $10, place sell limit at $12 → fills at $12 or higher (you always want the highest price when selling).

**As a swing trader, you never use limit orders to enter** because you want to buy on upward momentum (catching the move), not on the way down. You **do use sell limit orders to take profit** once in a trade.

### 5.6.4 Stop Orders
A **stop order** is an order to buy or sell at the **market price only when a specified stop price is hit**.
*   Becomes a market order once the stop price is reached.
*   Used primarily to **cut losses** on open positions.

**Sell Stop Order (for longs):** Triggers a market sell when price falls to the stop price. Example: in a long at $10, sell stop at $9 → if price hits $9, you exit at the next available market price (you might get $8.99, but most fills are near $9).

**Buy Stop Order (for shorts):** Triggers a market buy when price rises to the stop price. Example: in a short at $10, buy stop at $11 → if price hits $11, you exit at the next available market price.

> "We use buy stop orders to cut losses for short positions and sell stop orders to cut losses for long positions."

### 5.6.5 Stop-Limit Orders
A **stop-limit order** combines a stop order and a limit order. It is an order to buy or sell at a **limit price or better, only when a stop price is hit**.

Used to **enter trades** (long or short), typically the day after setup is identified, with these characteristics:
*   The **stop price** = your intended entry price.
*   The **limit price** = a small buffer beyond the stop price to prevent paying an excessive gap price.

**Long Entry Example:**
*   Stock closed yesterday at $50. You want to enter long at $51 (slightly higher to confirm upward direction).
*   Place a **buy stop-limit** with stop price = $51, limit price = $51.10 (10¢ buffer).
*   If price hits $51, the order triggers and buys at market, but no higher than $51.10.

**Short Entry Example:**
*   Stock closed yesterday at $50. You want to enter short at $49 (below close to confirm downward direction).
*   Place a **sell stop-limit** with stop price = $49, limit price = $48.90 (10¢ buffer).
*   If price hits $49, the order triggers and sells at market, but no lower than $48.90.

As a swing trader, **always buy slightly higher than the previous day's close** (to confirm upward direction) and **always short slightly lower than the previous day's close** (to confirm downward direction). This ensures you catch momentum, not a falling knife.

### 5.6.6 Time-in-Force: Day vs. GTC
When placing any order, you must specify the **time in force**:

| Type | Behavior |
|------|----------|
| **Day Order** | Active only for the current trading session. Automatically cancelled at end of day if not filled. |
| **Good-Till-Cancelled (GTC)** | Remains active until filled or you manually cancel it. May stay for days/weeks/months. |

The instructor uses **GTC orders** for entry orders so that if today's price doesn't trigger, the order is still there tomorrow. Orders are reviewed and cancelled manually the next morning if no longer valid.

---

## 5.7 Placing Trade Orders — Bracket Orders

### 5.7.1 The Bracket (OCO) Order Concept
Every trade the instructor takes uses a **bracket order**, also known as a **One-Cancels-the-Other (OCO)** order. A bracket consists of **three orders placed simultaneously**:

1.  **Entry order** — to open the position.
2.  **Stop Loss order** — to cut losses.
3.  **Take Profit order** — to lock in gains.

**Behavior:**
*   The stop loss and take profit orders are **conditional** — they are only activated after the entry order fills.
*   If the stop loss is hit → the take profit order is **automatically cancelled**.
*   If the take profit is hit → the stop loss order is **automatically cancelled**.

This protects positive expectancy because it enforces discipline: you can never "move" or "remove" your stops and targets mid-trade.

### 5.7.2 Required Order-Type Combinations

| Leg of Trade | Order Type | Time-in-Force | Why |
|--------------|-----------|---------------|-----|
| Entry (long) | **Buy stop-limit** (with small buffer above stop price) | Day or GTC | Confirms upward direction; limits gap-fill cost. |
| Entry (short) | **Sell stop-limit** (with small buffer below stop price) | Day or GTC | Confirms downward direction; limits gap-fill cost. |
| Stop Loss (long) | **Sell stop** at stop-loss price | **GTC** | Guarantees the order stays active until triggered or position is closed. |
| Stop Loss (short) | **Buy stop** at stop-loss price | **GTC** | Same as above. |
| Take Profit (long) | **Sell limit** at 2R above entry | **GTC** | Guarantees the exit price (no slippage). |
| Take Profit (short) | **Buy limit** at 2R below entry | **GTC** | Same as above. |

### 5.7.3 Worked Example — Long Trade on SHLD
Using Interactive Brokers (IBKR) or Halifax mobile app:

| Parameter | Value |
|-----------|-------|
| Symbol | SHLD |
| Quantity | 800 shares (from position sizing calculator) |
| Time-in-Force | GTC |
| Order Type | Stop-Limit |
| Stop Price (Entry) | $9.03 |
| Limit Price | $9.06 (3¢ buffer above stop for cheap stock) |
| Take Profit (attached as bracket) | $10.53 (2R above entry) — **Sell Limit** |
| Stop Loss (attached as bracket) | $8.28 — **Sell Stop** |

Risk per share = $9.03 − $8.28 = $0.75. Profit target = 2 × $0.75 = $1.50 → target price = $9.03 + $1.50 = $10.53. Reward-to-risk = 2:1.

### 5.7.4 Worked Example — Long Trade on Apple (AAPL)
| Parameter | Value |
|-----------|-------|
| Symbol | AAPL |
| Quantity | 60 shares (from calculator) |
| Time-in-Force | GTC |
| Order Type | Stop-Limit |
| Stop Price (Entry) | $117.50 |
| Limit Price | $117.70 (20¢ buffer above stop for higher-priced stock) |
| Take Profit (attached bracket) | $127.50 (2R above entry) — **Sell Limit** |
| Stop Loss (attached bracket) | $112.50 — **Sell Stop** |

Risk per share = $117.50 − $112.50 = $5.00. Reward = 2 × $5.00 = $10.00 → target = $117.50 + $10.00 = $127.50.

### 5.7.5 Worked Example — Short Trade on Twitter
| Parameter | Value |
|-----------|-------|
| Symbol | TWTR (Twitter) |
| Quantity | 570 shares (from calculator) |
| Time-in-Force | GTC |
| Order Type | Stop-Limit |
| Stop Price (Entry) | $17.60 |
| Limit Price | $17.55 (5¢ buffer below stop for $17 stock) |
| Take Profit (attached bracket) | $15.60 (2R below entry) — **Buy Limit** |
| Stop Loss (attached bracket) | $18.60 — **Buy Stop** |

Risk per share = $18.60 − $17.60 = $1.00. Reward = 2 × $1.00 = $2.00 → target = $17.60 − $2.00 = $15.60.

### 5.7.6 Practical Notes on Placing Orders
*   When typing the ticker, the broker may ask whether you want to buy **stock**, **options**, **futures**, or **CFDs**. Choose **CFD** if available (lower capital commitment) or **stock** if not.
*   Different brokers may phrase the inputs slightly differently, but the **underlying logic is identical**: enter quantity, time-in-force, stop price, limit price, then attach a bracket with stop-loss and take-profit prices.
*   Once submitted, the bracket order sits pending. When the market opens, if price reaches the stop price, the entry is triggered, and the bracket's stop-loss and take-profit legs activate.

---

## 5.8 Summary and Key Takeaways

*   **Position sizing is more important than the entry strategy.** Without it, even skilled chartists fail; with it, random entries can still be profitable.
*   **Risk 1% of net liquidation per trade, consistently.** Never mix risk levels. Never risk borrowed money (buying power). Always risk your original capital's net liquidation.
*   **Profit target = 2R** (twice the distance between entry and stop loss).
*   **Maximum 10% total portfolio risk** at any time → 1% risk per trade = max 10 positions; 2% risk = max 5 positions; 3% risk = max 3 positions.
*   **Limit positions to two per industry** to avoid correlated stops.
*   **Minimize drawdowns** — a 50% loss requires a 100% gain to recover.
*   **Think in R-multiples**, not dollars, to stay emotionally detached.
*   **Place all orders before the market opens** using **bracket (OCO) orders** that combine an entry stop-limit with a stop-loss stop order and a take-profit limit order.
*   **CFDs** are useful for short sellers and for capital efficiency, but only with disciplined 1% risk rules. Without discipline, leverage products can wipe out an account and create debts to the broker.

> "Trading is a game. Calculate your expected profit before you play. Position sizing is how you do that."
