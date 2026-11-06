export interface LearningTopic {
  id: string;
  title: string;
  category: string;
  order: number;
  summary: string;
  content: string;
  sections: LearningSection[];
  keyTakeaways: string[];
  examples?: LearningExample[];
  imageUrl?: string;
  author_name?: string;
  is_community?: boolean;
}

export interface LearningSection {
  heading: string;
  points: string[];
}

export interface LearningExample {
  title: string;
  scenario: string;
}

export interface LearningModule {
  id: string;
  title: string;
  category: string;
  order: number;
  lessons: LearningTopic[];
}

export const mockTopics: LearningTopic[] = [
  {
    "id": "1",
    "title": "What is ETRM?",
    "category": "Foundations",
    "order": 1,
    "sections": [
      {
        "heading": "Introduction to ETRM",
        "points": [
          "ETRM stands for Energy Trading and Risk Management.",
          "It is a software system used by energy companies to manage commodity trading activities.",
          "It manages trades, pricing, risk, physical delivery, valuations, invoicing and financial settlements."
        ]
      },
      {
        "heading": "What Does ETRM Manage?",
        "points": [
          "Trade Management – Records purchase and sale transactions.",
          "Position Management – Tracks commodity quantities bought and sold.",
          "Risk Management – Monitors market price risks.",
          "Physical Delivery – Manages commodity delivery and transportation.",
          "Valuation – Calculates trade value and profit or loss.",
          "Settlement – Manages invoices, payments, Accounts Payable (AP) and Accounts Receivable (AR)."
        ]
      }
    ],
    "keyTakeaways": [
      "ETRM stands for Energy Trading and Risk Management.",
      "It manages the complete energy commodity trading lifecycle.",
      "It connects trading, risk management, logistics and finance.",
      "It helps companies track financial exposure and profitability."
    ],
    "examples": [
      {
        "title": "Crude Oil Trading",
        "scenario": "A company purchases 100,000 barrels of crude oil from a supplier and sells them to a refinery. The ETRM system tracks the buyer, seller, agreed price, delivery details, freight costs, profit or loss, invoices and payment status."
      }
    ],
    "summary": "ETRM stands for Energy Trading and Risk Management.",
    "content": "Introduction to ETRM:\nETRM stands for Energy Trading and Risk Management. It is a software system used by energy companies to manage commodity trading activities. It manages trades, pricing, risk, physical delivery, valuations, invoicing and financial settlements.\n\nWhat Does ETRM Manage?:\nTrade Management – Records purchase and sale transactions. Position Management – Tracks commodity quantities bought and sold. Risk Management – Monitors market price risks. Physical Delivery – Manages commodity delivery and transportation. Valuation – Calculates trade value and profit or loss. Settlement – Manages invoices, payments, Accounts Payable (AP) and Accounts Receivable (AR)."
  },
  {
    "id": "2",
    "title": "Upstream, Midstream and Downstream",
    "category": "Foundations",
    "order": 2,
    "sections": [
      {
        "heading": "1. Upstream",
        "points": [
          "Covers exploration and production of crude oil and natural gas.",
          "Exploration involves searching for underground oil and gas reserves.",
          "Production involves extracting these commodities from the ground."
        ]
      },
      {
        "heading": "2. Midstream",
        "points": [
          "Covers transportation, storage and processing of commodities.",
          "Includes pipelines, storage terminals, vessels and LNG liquefaction."
        ]
      },
      {
        "heading": "3. Downstream",
        "points": [
          "Covers refining, distribution and retail sales.",
          "Refining converts crude oil into products such as petrol, diesel and aviation fuel.",
          "Distribution delivers these products to end customers."
        ]
      }
    ],
    "keyTakeaways": [
      "Upstream = Exploration and Production.",
      "Midstream = Transportation, Storage and Processing.",
      "Downstream = Refining, Distribution and Retail Sales.",
      "All three segments work together in the energy supply chain."
    ],
    "examples": [
      {
        "title": "Crude Oil Supply Chain",
        "scenario": "An oil company extracts crude oil (Upstream), transports it through pipelines to a refinery (Midstream), and the refinery converts it into petrol and diesel for customers (Downstream)."
      }
    ],
    "summary": "Covers exploration and production of crude oil and natural gas.",
    "content": "1. Upstream:\nCovers exploration and production of crude oil and natural gas. Exploration involves searching for underground oil and gas reserves. Production involves extracting these commodities from the ground.\n\n2. Midstream:\nCovers transportation, storage and processing of commodities. Includes pipelines, storage terminals, vessels and LNG liquefaction.\n\n3. Downstream:\nCovers refining, distribution and retail sales. Refining converts crude oil into products such as petrol, diesel and aviation fuel. Distribution delivers these products to end customers."
  },
  {
    "id": "3",
    "title": "Front Office, Middle Office and Back Office",
    "category": "Foundations",
    "order": 3,
    "sections": [
      {
        "heading": "1. Front Office (Trading)",
        "points": [
          "Executes commodity trades such as crude oil, natural gas and electricity.",
          "Traders negotiate prices, volumes, delivery dates and contract terms.",
          "Main objective is to generate profit through trading."
        ]
      },
      {
        "heading": "2. Middle Office (Risk Management)",
        "points": [
          "Monitors market risk, credit risk and trading limits.",
          "Calculates Profit and Loss (P&L) and monitors trading positions.",
          "Ensures traders operate within approved risk limits."
        ]
      },
      {
        "heading": "3. Back Office (Operations and Settlement)",
        "points": [
          "Handles post-trade activities such as confirmations and invoicing.",
          "Manages physical delivery, payments and financial settlements.",
          "Ensures contractual obligations are fulfilled."
        ]
      }
    ],
    "keyTakeaways": [
      "Front Office = Executes trades.",
      "Middle Office = Monitors risks and P&L.",
      "Back Office = Handles operations and settlements.",
      "All three departments work together throughout the trade lifecycle."
    ],
    "examples": [
      {
        "title": "Crude Oil Trading Example",
        "scenario": "A trader purchases 10,000 barrels of crude oil at $75 per barrel. Front Office executes the trade, Middle Office monitors its risk and P&L, and Back Office handles delivery, invoicing and payment settlement."
      }
    ],
    "summary": "Executes commodity trades such as crude oil, natural gas and electricity.",
    "content": "1. Front Office (Trading):\nExecutes commodity trades such as crude oil, natural gas and electricity. Traders negotiate prices, volumes, delivery dates and contract terms. Main objective is to generate profit through trading.\n\n2. Middle Office (Risk Management):\nMonitors market risk, credit risk and trading limits. Calculates Profit and Loss (P&L) and monitors trading positions. Ensures traders operate within approved risk limits.\n\n3. Back Office (Operations and Settlement):\nHandles post-trade activities such as confirmations and invoicing. Manages physical delivery, payments and financial settlements. Ensures contractual obligations are fulfilled."
  },
  {
    "id": "4",
    "title": "Physical Trading vs Financial Trading",
    "category": "Foundations",
    "order": 4,
    "sections": [
      {
        "heading": "Physical Trading",
        "points": [
          "Involves the actual buying, selling and delivery of commodities.",
          "The commodity physically moves from seller to buyer.",
          "Examples include gas flowing through pipelines and crude oil transported by tankers."
        ]
      },
      {
        "heading": "Financial Trading",
        "points": [
          "No physical commodity is delivered.",
          "The trade is settled in cash based on a market price index.",
          "Mainly used to hedge against price fluctuations."
        ]
      }
    ],
    "keyTakeaways": [
      "Physical Trading = Actual commodity delivery.",
      "Financial Trading = Cash settlement without physical delivery.",
      "Physical trades involve logistics and delivery obligations.",
      "Financial trades are commonly used to manage price risk."
    ],
    "examples": [
      {
        "title": "Crude Oil Trading",
        "scenario": "A company buys 10,000 barrels of crude oil and receives the actual oil through a tanker. This is physical trading. If another company enters a contract linked to the crude oil price index and only pays or receives the price difference in cash, it is financial trading."
      }
    ],
    "summary": "Involves the actual buying, selling and delivery of commodities.",
    "content": "Physical Trading:\nInvolves the actual buying, selling and delivery of commodities. The commodity physically moves from seller to buyer. Examples include gas flowing through pipelines and crude oil transported by tankers.\n\nFinancial Trading:\nNo physical commodity is delivered. The trade is settled in cash based on a market price index. Mainly used to hedge against price fluctuations."
  },
  {
    "id": "5",
    "title": "OTC Trading vs Exchange Trading",
    "category": "Foundations",
    "order": 5,
    "sections": [
      {
        "heading": "OTC (Over-the-Counter) Trading",
        "points": [
          "Trades are negotiated privately between two counterparties.",
          "Contract terms can be customized based on business requirements.",
          "Governed by a master agreement between the parties.",
          "Both parties are exposed to each other's credit risk."
        ]
      },
      {
        "heading": "Exchange Trading",
        "points": [
          "Trades use standardized contracts on a regulated exchange.",
          "Buyers and sellers are matched through the exchange.",
          "Trades are cleared through a clearinghouse.",
          "Examples include ICE, NYMEX and CME."
        ]
      }
    ],
    "keyTakeaways": [
      "OTC = Private and customizable trading.",
      "Exchange = Standardized and regulated trading.",
      "OTC has direct counterparty credit risk.",
      "Exchange clearing helps reduce counterparty risk."
    ],
    "examples": [
      {
        "title": "Natural Gas Trading",
        "scenario": "A gas company privately negotiates a customized supply contract with another company. This is OTC trading. If a trader buys a standardized natural gas futures contract on NYMEX, it is exchange trading."
      }
    ],
    "summary": "Trades are negotiated privately between two counterparties.",
    "content": "OTC (Over-the-Counter) Trading:\nTrades are negotiated privately between two counterparties. Contract terms can be customized based on business requirements. Governed by a master agreement between the parties. Both parties are exposed to each other's credit risk.\n\nExchange Trading:\nTrades use standardized contracts on a regulated exchange. Buyers and sellers are matched through the exchange. Trades are cleared through a clearinghouse. Examples include ICE, NYMEX and CME."
  },
  {
    "id": "6",
    "title": "Types of Commodity Contracts",
    "category": "Foundations",
    "order": 6,
    "sections": [
      {
        "heading": "Spot Deal",
        "points": [
          "Commodity is delivered immediately or within a short period.",
          "Price is based on the current market price."
        ]
      },
      {
        "heading": "Forward Contract",
        "points": [
          "An OTC agreement between two parties.",
          "Delivery happens on a future date at an agreed price.",
          "Contract terms can be customized."
        ]
      },
      {
        "heading": "Futures Contract",
        "points": [
          "An exchange-traded version of a forward contract.",
          "Uses standardized contract terms.",
          "Cleared through a clearinghouse."
        ]
      },
      {
        "heading": "Option Contract",
        "points": [
          "Gives the buyer the right, but not the obligation, to buy or sell.",
          "The transaction happens at an agreed strike price.",
          "The buyer pays a premium for this right."
        ]
      },
      {
        "heading": "Swap Contract",
        "points": [
          "Exchanges a floating market price for a fixed price, or vice versa.",
          "Usually settled financially over a period.",
          "Commonly used to hedge price risk without physical delivery."
        ]
      }
    ],
    "keyTakeaways": [
      "Spot = Current price and near-immediate delivery.",
      "Forward = Customized OTC future delivery.",
      "Future = Standardized exchange-traded contract.",
      "Option = Right, but not obligation, to buy or sell.",
      "Swap = Exchange fixed and floating price exposure."
    ],
    "examples": [
      {
        "title": "Crude Oil Price Hedging",
        "scenario": "A refinery buys crude oil at today's market price through a spot deal. It agrees to buy crude at $75/bbl after three months through a forward contract. It can also use futures to hedge through an exchange, buy an option to get the right to purchase at $75/bbl, or enter a swap to exchange a floating oil price for a fixed $75/bbl price over six months."
      }
    ],
    "summary": "Commodity is delivered immediately or within a short period.",
    "content": "Spot Deal:\nCommodity is delivered immediately or within a short period. Price is based on the current market price.\n\nForward Contract:\nAn OTC agreement between two parties. Delivery happens on a future date at an agreed price. Contract terms can be customized.\n\nFutures Contract:\nAn exchange-traded version of a forward contract. Uses standardized contract terms. Cleared through a clearinghouse.\n\nOption Contract:\nGives the buyer the right, but not the obligation, to buy or sell. The transaction happens at an agreed strike price. The buyer pays a premium for this right.\n\nSwap Contract:\nExchanges a floating market price for a fixed price, or vice versa. Usually settled financially over a period. Commonly used to hedge price risk without physical delivery."
  },
  {
    "id": "8",
    "title": "Types of Commodities in ETRM",
    "category": "Foundations",
    "order": 8,
    "sections": [
      {
        "heading": "Natural Gas",
        "points": [
          "Traded in MMBtu or Dth.",
          "Delivered continuously through pipelines.",
          "Prices are linked to hub indexes like Henry Hub.",
          "Daily balancing compares scheduled and actual gas quantities."
        ]
      },
      {
        "heading": "Electricity",
        "points": [
          "Traded in MWh (Megawatt-hours).",
          "Cannot be stored easily in large quantities.",
          "Delivered instantly through the power grid.",
          "Prices depend on location and time (Peak/Off-Peak).",
          "Settled against Day-Ahead or Real-Time market prices."
        ]
      },
      {
        "heading": "Crude Oil and Refined Products",
        "points": [
          "Crude oil is traded in barrels (bbl).",
          "Major benchmarks include WTI, Brent and Dubai.",
          "Transported through pipelines, rail and tankers.",
          "Refined products include gasoline, diesel and jet fuel.",
          "Product prices depend on benchmarks, quality and logistics."
        ]
      },
      {
        "heading": "LNG (Liquefied Natural Gas)",
        "points": [
          "Natural gas cooled into liquid form for transportation.",
          "Transported internationally using specialized LNG tankers.",
          "Traded in cargoes rather than continuous pipeline flows.",
          "Major price indexes include JKM and TTF."
        ]
      },
      {
        "heading": "Coal",
        "points": [
          "Traded in metric tonnes.",
          "Price depends on heat content and quality grade.",
          "Transported by rail, barge and vessels."
        ]
      }
    ],
    "keyTakeaways": [
      "Natural Gas = Pipeline delivery, measured in MMBtu or Dth.",
      "Electricity = Grid delivery, measured in MWh.",
      "Crude Oil = Barrel-based trading using benchmarks like WTI and Brent.",
      "LNG = Liquefied gas transported by specialized tankers.",
      "Coal = Traded by weight and quality."
    ],
    "examples": [
      {
        "title": "Commodity Trading Examples",
        "scenario": "A trader buys 10,000 MMBtu of natural gas at Henry Hub, purchases 500 MWh of electricity for peak hours, buys 5,000 barrels of Brent-linked crude oil, and purchases an LNG cargo priced against JKM. Each commodity has different units, pricing benchmarks, delivery methods and settlement requirements."
      }
    ],
    "summary": "Traded in MMBtu or Dth.",
    "content": "Natural Gas:\nTraded in MMBtu or Dth. Delivered continuously through pipelines. Prices are linked to hub indexes like Henry Hub. Daily balancing compares scheduled and actual gas quantities.\n\nElectricity:\nTraded in MWh (Megawatt-hours). Cannot be stored easily in large quantities. Delivered instantly through the power grid. Prices depend on location and time (Peak/Off-Peak). Settled against Day-Ahead or Real-Time market prices.\n\nCrude Oil and Refined Products:\nCrude oil is traded in barrels (bbl). Major benchmarks include WTI, Brent and Dubai. Transported through pipelines, rail and tankers. Refined products include gasoline, diesel and jet fuel. Product prices depend on benchmarks, quality and logistics.\n\nLNG (Liquefied Natural Gas):\nNatural gas cooled into liquid form for transportation. Transported internationally using specialized LNG tankers. Traded in cargoes rather than continuous pipeline flows. Major price indexes include JKM and TTF.\n\nCoal:\nTraded in metric tonnes. Price depends on heat content and quality grade. Transported by rail, barge and vessels."
  },
  {
    "id": "9",
    "title": "Market Participants in ETRM",
    "category": "Foundations",
    "order": 9,
    "sections": [
      {
        "heading": "Producer and Supplier",
        "points": [
          "Producer extracts or generates commodities.",
          "Examples: Oil and gas companies, power generators.",
          "Supplier purchases and resells commodities to end customers."
        ]
      },
      {
        "heading": "Pipeline and Transporter",
        "points": [
          "Own and operate infrastructure for commodity transportation.",
          "Move commodities from one location to another.",
          "Charge transportation tariffs and allocate capacity.",
          "Manage transportation schedules through nominations."
        ]
      },
      {
        "heading": "Storage Operator",
        "points": [
          "Owns and operates commodity storage facilities.",
          "Examples: Underground gas storage, crude oil tanks and LNG tanks.",
          "Stores commodities during low demand and releases them during high demand.",
          "Charges storage capacity, injection and withdrawal fees."
        ]
      },
      {
        "heading": "Trader and Broker",
        "points": [
          "Trader buys and sells commodities to earn profits or hedge risks.",
          "Broker connects buyers and sellers.",
          "Broker earns commission without normally taking market positions."
        ]
      },
      {
        "heading": "Exchange, ISO/RTO and Clearinghouse",
        "points": [
          "Exchange provides a regulated platform for standardized trading (ICE, NYMEX).",
          "ISO/RTO operates the electricity grid and wholesale power markets.",
          "Clearinghouse manages exchange trade clearing and collects margins.",
          "Clearinghouse reduces counterparty default risk."
        ]
      },
      {
        "heading": "Credit Rating Agency",
        "points": [
          "Evaluates the financial strength and creditworthiness of companies.",
          "Assigns credit ratings based on the risk of default.",
          "Helps trading companies assess counterparty credit risk."
        ]
      }
    ],
    "keyTakeaways": [
      "Producer = Produces commodities.",
      "Supplier = Supplies commodities to customers.",
      "Pipeline/Transporter = Moves commodities.",
      "Storage Operator = Stores commodities.",
      "Trader = Buys and sells; Broker = Connects buyers and sellers.",
      "Exchange = Trading platform; ISO/RTO = Grid operator.",
      "Credit Agency = Evaluates financial creditworthiness."
    ],
    "examples": [
      {
        "title": "Natural Gas Supply Chain",
        "scenario": "A gas producer extracts natural gas and sells it to a supplier. A pipeline transports the gas, a storage operator stores excess gas, and a trader manages buying and selling. A broker connects trading parties, while a credit rating agency evaluates their financial strength."
      }
    ],
    "summary": "Producer extracts or generates commodities.",
    "content": "Producer and Supplier:\nProducer extracts or generates commodities. Examples: Oil and gas companies, power generators. Supplier purchases and resells commodities to end customers.\n\nPipeline and Transporter:\nOwn and operate infrastructure for commodity transportation. Move commodities from one location to another. Charge transportation tariffs and allocate capacity. Manage transportation schedules through nominations.\n\nStorage Operator:\nOwns and operates commodity storage facilities. Examples: Underground gas storage, crude oil tanks and LNG tanks. Stores commodities during low demand and releases them during high demand. Charges storage capacity, injection and withdrawal fees.\n\nTrader and Broker:\nTrader buys and sells commodities to earn profits or hedge risks. Broker connects buyers and sellers. Broker earns commission without normally taking market positions.\n\nExchange, ISO/RTO and Clearinghouse:\nExchange provides a regulated platform for standardized trading (ICE, NYMEX). ISO/RTO operates the electricity grid and wholesale power markets. Clearinghouse manages exchange trade clearing and collects margins. Clearinghouse reduces counterparty default risk.\n\nCredit Rating Agency:\nEvaluates the financial strength and creditworthiness of companies. Assigns credit ratings based on the risk of default. Helps trading companies assess counterparty credit risk."
  },
  {
    "id": "10",
    "title": "Open & Closed Position",
    "category": "Foundations",
    "order": 10,
    "sections": [
      {
        "heading": "Open Position",
        "points": [
          "A trade that has not been fully offset by an opposite trade.",
          "Still exposed to market price fluctuations.",
          "Profit or loss can change with market prices."
        ]
      },
      {
        "heading": "Closed Position",
        "points": [
          "A position fully offset by an equal and opposite trade.",
          "No remaining market exposure for that position.",
          "Gain or loss is realized."
        ]
      }
    ],
    "keyTakeaways": [
      "Open Position = Market risk still exists.",
      "Closed Position = Position is fully offset.",
      "Open Position has unrealized P&L.",
      "Closed Position has realized P&L."
    ],
    "examples": [
      {
        "title": "Crude Oil Position",
        "scenario": "A trader buys 1,000 barrels of crude oil at $75/bbl. The position is open because the trader is exposed to price changes. Later, the trader sells 1,000 barrels at $78/bbl. The position is closed, and the realized profit is $3,000."
      }
    ],
    "summary": "A trade that has not been fully offset by an opposite trade.",
    "content": "Open Position:\nA trade that has not been fully offset by an opposite trade. Still exposed to market price fluctuations. Profit or loss can change with market prices.\n\nClosed Position:\nA position fully offset by an equal and opposite trade. No remaining market exposure for that position. Gain or loss is realized."
  },
  {
    "id": "11",
    "title": "Long, Short & Net Position",
    "category": "Foundations",
    "order": 11,
    "sections": [
      {
        "heading": "Long Position",
        "points": [
          "Buying more commodity than selling.",
          "Trader benefits when market prices increase.",
          "Example: Buy 1,000 barrels of crude oil."
        ]
      },
      {
        "heading": "Short Position",
        "points": [
          "Selling more commodity than buying.",
          "Trader benefits when market prices decrease.",
          "Example: Sell 1,000 barrels of crude oil."
        ]
      },
      {
        "heading": "Net Position",
        "points": [
          "Difference between total long and short positions.",
          "Calculated for a specific commodity and delivery period.",
          "Positive net position = Net Long; negative = Net Short."
        ]
      }
    ],
    "keyTakeaways": [
      "Long = Buy more; benefits from price increase.",
      "Short = Sell more; benefits from price decrease.",
      "Net Position = Long Quantity − Short Quantity.",
      "Positive Net = Long; Negative Net = Short."
    ],
    "examples": [
      {
        "title": "Calculating Net Position",
        "scenario": "A trader buys 1,000 barrels and sells 600 barrels of crude oil. Net Position = 1,000 − 600 = +400 barrels. The trader has a net long position of 400 barrels and benefits if prices rise."
      }
    ],
    "summary": "Buying more commodity than selling.",
    "content": "Long Position:\nBuying more commodity than selling. Trader benefits when market prices increase. Example: Buy 1,000 barrels of crude oil.\n\nShort Position:\nSelling more commodity than buying. Trader benefits when market prices decrease. Example: Sell 1,000 barrels of crude oil.\n\nNet Position:\nDifference between total long and short positions. Calculated for a specific commodity and delivery period. Positive net position = Net Long; negative = Net Short."
  },
  {
    "id": "12",
    "title": "Physical & Financial Position",
    "category": "Foundations",
    "order": 12,
    "sections": [
      {
        "heading": "Physical Position",
        "points": [
          "Represents actual commodity delivery obligations.",
          "Trader must physically receive or deliver the commodity.",
          "Involves logistics, transportation and scheduling."
        ]
      },
      {
        "heading": "Financial Position",
        "points": [
          "Represents exposure through financial contracts.",
          "No physical commodity delivery is required.",
          "Includes swaps, futures and options.",
          "Mainly used for hedging or taking market positions."
        ]
      }
    ],
    "keyTakeaways": [
      "Physical Position = Actual commodity delivery obligation.",
      "Financial Position = Derivative-based price exposure.",
      "Physical positions involve logistics and delivery.",
      "Financial positions are generally settled financially."
    ],
    "examples": [
      {
        "title": "Crude Oil Trading",
        "scenario": "A company buys 5,000 barrels of crude oil and must receive the actual oil through a tanker. This creates a physical position. If the company enters an oil swap linked to Brent prices without taking delivery, it creates a financial position."
      }
    ],
    "summary": "Represents actual commodity delivery obligations.",
    "content": "Physical Position:\nRepresents actual commodity delivery obligations. Trader must physically receive or deliver the commodity. Involves logistics, transportation and scheduling.\n\nFinancial Position:\nRepresents exposure through financial contracts. No physical commodity delivery is required. Includes swaps, futures and options. Mainly used for hedging or taking market positions."
  },
  {
    "id": "13",
    "title": "Exposure & Inventory Position",
    "category": "Foundations",
    "order": 13,
    "sections": [
      {
        "heading": "Exposure Position",
        "points": [
          "Represents overall market exposure from physical and financial positions.",
          "Includes both hedged and unhedged positions for risk analysis.",
          "Helps measure potential financial risk due to market price changes."
        ]
      },
      {
        "heading": "Inventory Position",
        "points": [
          "Tracks the actual physical stock available in storage.",
          "Includes commodities held in tanks, warehouses or storage facilities.",
          "Compares physical stock levels with ETRM book records."
        ]
      }
    ],
    "keyTakeaways": [
      "Exposure Position = Overall market risk from trading positions.",
      "Inventory Position = Actual physical stock available.",
      "Exposure includes physical and financial contracts.",
      "Inventory focuses on physical commodity quantities."
    ],
    "examples": [
      {
        "title": "Crude Oil Trading",
        "scenario": "A company holds 10,000 barrels of crude oil in storage and has an additional oil swap contract. Both positions contribute to its overall market exposure. However, its inventory position tracks only the 10,000 physical barrels held in storage."
      }
    ],
    "summary": "Represents overall market exposure from physical and financial positions.",
    "content": "Exposure Position:\nRepresents overall market exposure from physical and financial positions. Includes both hedged and unhedged positions for risk analysis. Helps measure potential financial risk due to market price changes.\n\nInventory Position:\nTracks the actual physical stock available in storage. Includes commodities held in tanks, warehouses or storage facilities. Compares physical stock levels with ETRM book records."
  },
  {
    "id": "14",
    "title": "Daily, Monthly & Forward Position",
    "category": "Foundations",
    "order": 14,
    "sections": [
      {
        "heading": "Daily Position",
        "points": [
          "Tracks commodity positions for the current day.",
          "Helps monitor short-term supply, demand and operational risks.",
          "Used for daily trading and delivery decisions."
        ]
      },
      {
        "heading": "Monthly Position",
        "points": [
          "Tracks positions for a particular delivery month.",
          "Helps monitor monthly supply, demand and settlement obligations.",
          "Used for monthly planning and risk management."
        ]
      },
      {
        "heading": "Forward Position",
        "points": [
          "Tracks open positions for future months or years.",
          "Helps identify future buying and selling commitments.",
          "Used for long-term hedging and risk management."
        ]
      }
    ],
    "keyTakeaways": [
      "Daily Position = Current-day exposure.",
      "Monthly Position = Delivery and exposure for a specific month.",
      "Forward Position = Future months or years.",
      "All three help traders monitor positions across different time horizons."
    ],
    "examples": [
      {
        "title": "Natural Gas Position",
        "scenario": "A gas company tracks today's gas delivery in its daily position, its November supply contracts in its monthly position, and its December-to-March contracts in its forward position. This helps manage short-term operations and future price risk."
      }
    ],
    "summary": "Tracks commodity positions for the current day.",
    "content": "Daily Position:\nTracks commodity positions for the current day. Helps monitor short-term supply, demand and operational risks. Used for daily trading and delivery decisions.\n\nMonthly Position:\nTracks positions for a particular delivery month. Helps monitor monthly supply, demand and settlement obligations. Used for monthly planning and risk management.\n\nForward Position:\nTracks open positions for future months or years. Helps identify future buying and selling commitments. Used for long-term hedging and risk management."
  },
  {
    "id": "15",
    "title": "Position Reports",
    "category": "Foundations",
    "order": 15,
    "sections": [
      {
        "heading": "What are Position Reports?",
        "points": [
          "Reports that show all open trading positions.",
          "Group positions by book, trader, commodity or location.",
          "Help management monitor overall market exposure.",
          "Used by traders and risk teams for decision-making."
        ]
      },
      {
        "heading": "Key Information",
        "points": [
          "Open buy and sell quantities.",
          "Net long and short positions.",
          "Commodity-wise and location-wise exposure.",
          "Delivery periods and position limits."
        ]
      }
    ],
    "keyTakeaways": [
      "Position Reports = Summary of open trading positions.",
      "Positions can be grouped by book, trader, commodity or location.",
      "Help monitor market exposure and trading limits.",
      "Used by Trading and Risk Management teams."
    ],
    "examples": [
      {
        "title": "Crude Oil Position Report",
        "scenario": "A company generates a position report showing Trader A has bought 5,000 barrels and sold 2,000 barrels of crude oil. The report displays a net long position of 3,000 barrels, helping the risk team monitor exposure."
      }
    ],
    "summary": "Reports that show all open trading positions.",
    "content": "What are Position Reports?:\nReports that show all open trading positions. Group positions by book, trader, commodity or location. Help management monitor overall market exposure. Used by traders and risk teams for decision-making.\n\nKey Information:\nOpen buy and sell quantities. Net long and short positions. Commodity-wise and location-wise exposure. Delivery periods and position limits."
  },
  {
    "id": "16",
    "title": "Market Risk & Value at Risk (VaR)",
    "category": "Foundations",
    "order": 16,
    "sections": [
      {
        "heading": "Market Risk",
        "points": [
          "Potential financial loss due to unfavorable market price movements.",
          "Prices of crude oil, natural gas and electricity can fluctuate.",
          "Risk teams monitor market exposure to control potential losses."
        ]
      },
      {
        "heading": "Value at Risk (VaR)",
        "points": [
          "VaR estimates potential portfolio loss over a given time period.",
          "Calculated using a specified confidence level.",
          "Helps companies understand and monitor market risk."
        ]
      }
    ],
    "keyTakeaways": [
      "Market Risk = Potential loss due to price changes.",
      "VaR = Statistical estimate of potential loss.",
      "VaR uses a time horizon and confidence level.",
      "Higher VaR generally indicates higher potential financial risk."
    ],
    "examples": [
      {
        "title": "Crude Oil VaR Example",
        "scenario": "A trading company has a 1-day VaR of $100,000 at a 95% confidence level. Under the VaR model assumptions, the company estimates that its portfolio loss will not exceed $100,000 on approximately 95% of trading days. Losses can exceed this amount on the remaining 5% of days."
      }
    ],
    "summary": "Potential financial loss due to unfavorable market price movements.",
    "content": "Market Risk:\nPotential financial loss due to unfavorable market price movements. Prices of crude oil, natural gas and electricity can fluctuate. Risk teams monitor market exposure to control potential losses.\n\nValue at Risk (VaR):\nVaR estimates potential portfolio loss over a given time period. Calculated using a specified confidence level. Helps companies understand and monitor market risk."
  },
  {
    "id": "17",
    "title": "Credit Risk & Credit Limits",
    "category": "Foundations",
    "order": 17,
    "sections": [
      {
        "heading": "Credit Risk",
        "points": [
          "Potential financial loss if a counterparty fails to meet its obligations.",
          "Can happen when a buyer fails to pay or a seller fails to deliver.",
          "Risk teams monitor the financial strength of counterparties."
        ]
      },
      {
        "heading": "Credit Limits",
        "points": [
          "Maximum exposure a company allows against a counterparty.",
          "Includes current Mark-to-Market (MTM) exposure.",
          "Also considers Potential Future Exposure (PFE).",
          "Helps prevent excessive trading with high-risk counterparties."
        ]
      }
    ],
    "keyTakeaways": [
      "Credit Risk = Risk of counterparty default.",
      "Credit Limit = Maximum allowed counterparty exposure.",
      "MTM = Current market value of outstanding trades.",
      "PFE = Estimated potential future exposure.",
      "Credit limits help control financial losses."
    ],
    "examples": [
      {
        "title": "Counterparty Credit Limit",
        "scenario": "Company A has a credit limit of $1 million for Company B. Its current MTM exposure is $400,000 and PFE is $300,000. Total credit exposure is $700,000, leaving $300,000 of available credit limit."
      }
    ],
    "summary": "Potential financial loss if a counterparty fails to meet its obligations.",
    "content": "Credit Risk:\nPotential financial loss if a counterparty fails to meet its obligations. Can happen when a buyer fails to pay or a seller fails to deliver. Risk teams monitor the financial strength of counterparties.\n\nCredit Limits:\nMaximum exposure a company allows against a counterparty. Includes current Mark-to-Market (MTM) exposure. Also considers Potential Future Exposure (PFE). Helps prevent excessive trading with high-risk counterparties."
  },
  {
    "id": "18",
    "title": "Operational Risk & Liquidity Risk",
    "category": "Foundations",
    "order": 18,
    "sections": [
      {
        "heading": "Operational Risk",
        "points": [
          "Risk of financial loss due to failed processes, systems or human errors.",
          "Examples include incorrect trade entry and missed gas nominations.",
          "Can lead to financial penalties, delivery failures and losses."
        ]
      },
      {
        "heading": "Liquidity Risk",
        "points": [
          "Risk of being unable to sell or exit a position quickly.",
          "A company may face significant losses when selling in an illiquid market.",
          "Also includes difficulty meeting cash payment obligations on time."
        ]
      }
    ],
    "keyTakeaways": [
      "Operational Risk = Process, system or human error.",
      "Liquidity Risk = Difficulty selling positions or arranging cash.",
      "Missed nomination = Operational Risk.",
      "Unable to sell a trade without a major loss = Liquidity Risk."
    ],
    "examples": [
      {
        "title": "ETRM Operational and Liquidity Risk",
        "scenario": "A trader enters 10,000 barrels instead of 1,000 barrels due to a data-entry mistake. This is operational risk. Another company cannot sell its large gas position because there are no available buyers without accepting a much lower price. This is liquidity risk."
      }
    ],
    "summary": "Risk of financial loss due to failed processes, systems or human errors.",
    "content": "Operational Risk:\nRisk of financial loss due to failed processes, systems or human errors. Examples include incorrect trade entry and missed gas nominations. Can lead to financial penalties, delivery failures and losses.\n\nLiquidity Risk:\nRisk of being unable to sell or exit a position quickly. A company may face significant losses when selling in an illiquid market. Also includes difficulty meeting cash payment obligations on time."
  },
  {
    "id": "19",
    "title": "Fixed Pricing & Floating Pricing",
    "category": "Foundations",
    "order": 19,
    "sections": [
      {
        "heading": "Fixed Pricing",
        "points": [
          "Price is agreed and locked for the entire contract period.",
          "Price does not change with market fluctuations.",
          "Provides price certainty to buyers and sellers."
        ]
      },
      {
        "heading": "Floating Pricing",
        "points": [
          "Price changes based on a published market index.",
          "Price is reset periodically during the delivery period.",
          "Final price depends on market movements.",
          "Commonly linked to indexes like Brent, WTI or Henry Hub."
        ]
      }
    ],
    "keyTakeaways": [
      "Fixed Pricing = Same agreed price throughout the contract.",
      "Floating Pricing = Price changes based on a market index.",
      "Fixed Pricing provides price certainty.",
      "Floating Pricing carries market price exposure."
    ],
    "examples": [
      {
        "title": "Natural Gas Pricing",
        "scenario": "A buyer agrees to purchase 10,000 MMBtu of gas at a fixed price of $4/MMBtu. The price remains unchanged. Under floating pricing, the buyer pays the monthly Henry Hub index price, which may change every month."
      }
    ],
    "summary": "Price is agreed and locked for the entire contract period.",
    "content": "Fixed Pricing:\nPrice is agreed and locked for the entire contract period. Price does not change with market fluctuations. Provides price certainty to buyers and sellers.\n\nFloating Pricing:\nPrice changes based on a published market index. Price is reset periodically during the delivery period. Final price depends on market movements. Commonly linked to indexes like Brent, WTI or Henry Hub."
  },
  {
    "id": "20",
    "title": "Index Pricing & Formula Pricing",
    "category": "Foundations",
    "order": 20,
    "sections": [
      {
        "heading": "Index Pricing",
        "points": [
          "Price is directly linked to a published market index.",
          "Final settlement price follows the index value.",
          "Examples include Brent, WTI and Henry Hub."
        ]
      },
      {
        "heading": "Formula Pricing",
        "points": [
          "Price is calculated using an index and mathematical adjustments.",
          "Adjustments may include differential, multiplier, cap or floor.",
          "Final price depends on the agreed pricing formula."
        ]
      }
    ],
    "keyTakeaways": [
      "Index Pricing = Directly linked to a market index.",
      "Formula Pricing = Index + Mathematical adjustments.",
      "Differential = Fixed amount added or subtracted.",
      "Cap = Maximum allowed price; Floor = Minimum allowed price."
    ],
    "examples": [
      {
        "title": "Crude Oil Pricing",
        "scenario": "Under index pricing, crude oil is priced directly at the Brent index of $80/bbl. Under formula pricing, the agreed formula is Brent + $2/bbl. If Brent is $80/bbl, the final price becomes $82/bbl."
      }
    ],
    "summary": "Price is directly linked to a published market index.",
    "content": "Index Pricing:\nPrice is directly linked to a published market index. Final settlement price follows the index value. Examples include Brent, WTI and Henry Hub.\n\nFormula Pricing:\nPrice is calculated using an index and mathematical adjustments. Adjustments may include differential, multiplier, cap or floor. Final price depends on the agreed pricing formula."
  },
  {
    "id": "21",
    "title": "Forward Curve & Settlement Curve",
    "category": "Foundations",
    "order": 21,
    "sections": [
      {
        "heading": "Forward Curve",
        "points": [
          "Shows market-implied prices for future delivery periods.",
          "Used to calculate Mark-to-Market (MTM) value of open positions.",
          "Helps traders evaluate future price movements and manage risk.",
          "Prices can change as market conditions change."
        ]
      },
      {
        "heading": "Settlement Curve",
        "points": [
          "Contains official prices used for final trade settlement.",
          "Used to calculate the final amount payable or receivable.",
          "Applied once the relevant settlement prices become available.",
          "Helps finalize the financial value of completed delivery periods."
        ]
      }
    ],
    "keyTakeaways": [
      "Forward Curve = Market prices for future delivery periods.",
      "Settlement Curve = Official prices used for final settlement.",
      "Forward Curve is used for MTM valuation.",
      "Settlement Curve is used for final financial calculations."
    ],
    "examples": [
      {
        "title": "Natural Gas Pricing",
        "scenario": "A company has a gas contract for December at $4/MMBtu. In October, the forward curve shows December gas at $4.50/MMBtu, which is used to calculate the open trade's MTM value. After December delivery, the official settlement price is published at $4.40/MMBtu and is used for final settlement."
      }
    ],
    "summary": "Shows market-implied prices for future delivery periods.",
    "content": "Forward Curve:\nShows market-implied prices for future delivery periods. Used to calculate Mark-to-Market (MTM) value of open positions. Helps traders evaluate future price movements and manage risk. Prices can change as market conditions change.\n\nSettlement Curve:\nContains official prices used for final trade settlement. Used to calculate the final amount payable or receivable. Applied once the relevant settlement prices become available. Helps finalize the financial value of completed delivery periods."
  },
  {
    "id": "22",
    "title": "Premium, Discount & Differential",
    "category": "Foundations",
    "order": 22,
    "sections": [
      {
        "heading": "Premium",
        "points": [
          "An additional amount added to the reference price.",
          "Used when a commodity has better quality or location advantages."
        ]
      },
      {
        "heading": "Discount",
        "points": [
          "An amount subtracted from the reference price.",
          "Used when a commodity has lower quality or location disadvantages."
        ]
      },
      {
        "heading": "Differential (Basis)",
        "points": [
          "The price difference between two related benchmarks or locations.",
          "Can be positive (premium) or negative (discount)."
        ]
      }
    ],
    "keyTakeaways": [
      "Premium = Added to reference price.",
      "Discount = Subtracted from reference price.",
      "Differential/Basis = Price difference between related markets or benchmarks."
    ],
    "examples": [
      {
        "title": "Crude Oil Pricing Example",
        "scenario": "If Brent crude is $80/bbl and a crude grade has a $2 premium, its price is $82/bbl. If it has a $3 discount, its price is $77/bbl."
      }
    ],
    "summary": "An additional amount added to the reference price.",
    "content": "Premium:\nAn additional amount added to the reference price. Used when a commodity has better quality or location advantages.\n\nDiscount:\nAn amount subtracted from the reference price. Used when a commodity has lower quality or location disadvantages.\n\nDifferential (Basis):\nThe price difference between two related benchmarks or locations. Can be positive (premium) or negative (discount)."
  },
  {
    "id": "23",
    "title": "Freight & Taxes",
    "category": "Foundations",
    "order": 23,
    "sections": [
      {
        "heading": "Freight",
        "points": [
          "Cost of physically transporting a commodity.",
          "Includes pipeline tariffs, tanker charges and shipping costs.",
          "Can be included in the delivered price or billed separately."
        ]
      },
      {
        "heading": "Taxes",
        "points": [
          "Government charges applied to commodity transactions.",
          "Examples include VAT, excise duty and severance tax.",
          "Tax rates depend on the country, state or jurisdiction.",
          "Taxes are calculated and included in invoices where applicable."
        ]
      }
    ],
    "keyTakeaways": [
      "Freight = Cost of commodity transportation.",
      "Taxes = Government charges on transactions.",
      "Freight may be included in the price or billed separately.",
      "Correct tax calculation is important for invoicing and settlement."
    ],
    "examples": [
      {
        "title": "Crude Oil Purchase Example",
        "scenario": "A buyer purchases 10,000 barrels of crude oil at $75/bbl. Freight is $2/bbl and applicable taxes are $1/bbl. The delivered cost is $78/bbl, or $780,000 in total."
      }
    ],
    "summary": "Cost of physically transporting a commodity.",
    "content": "Freight:\nCost of physically transporting a commodity. Includes pipeline tariffs, tanker charges and shipping costs. Can be included in the delivered price or billed separately.\n\nTaxes:\nGovernment charges applied to commodity transactions. Examples include VAT, excise duty and severance tax. Tax rates depend on the country, state or jurisdiction. Taxes are calculated and included in invoices where applicable."
  },
  {
    "id": "24",
    "title": "Nomination & Confirmation",
    "category": "Foundations",
    "order": 24,
    "sections": [
      {
        "heading": "Nomination",
        "points": [
          "A formal request to transport a specific commodity volume on a specific day.",
          "Submitted by a shipper to a pipeline or grid operator.",
          "Specifies the required quantity and delivery schedule."
        ]
      },
      {
        "heading": "Confirmation",
        "points": [
          "The pipeline or grid operator responds to the nomination.",
          "Confirms how much volume can actually be transported.",
          "The confirmed quantity may be lower than requested due to capacity constraints."
        ]
      }
    ],
    "keyTakeaways": [
      "Nomination = Requested quantity.",
      "Confirmation = Approved quantity.",
      "Capacity constraints can reduce the confirmed volume.",
      "Scheduling uses confirmed quantities for operational planning."
    ],
    "examples": [
      {
        "title": "Natural Gas Scheduling Example",
        "scenario": "A shipper nominates 10,000 MMBtu of natural gas for tomorrow. Due to pipeline capacity constraints, the operator confirms only 8,000 MMBtu. The confirmed quantity is used for scheduling."
      }
    ],
    "summary": "A formal request to transport a specific commodity volume on a specific day.",
    "content": "Nomination:\nA formal request to transport a specific commodity volume on a specific day. Submitted by a shipper to a pipeline or grid operator. Specifies the required quantity and delivery schedule.\n\nConfirmation:\nThe pipeline or grid operator responds to the nomination. Confirms how much volume can actually be transported. The confirmed quantity may be lower than requested due to capacity constraints."
  },
  {
    "id": "25",
    "title": "Pipeline Cycle",
    "category": "Foundations",
    "order": 25,
    "sections": [
      {
        "heading": "What is a Pipeline Cycle?",
        "points": [
          "A set of daily deadlines for submitting and revising gas nominations.",
          "Allows shippers to update requested gas quantities before the gas flows.",
          "Standardized across US pipelines through NAESB guidelines."
        ]
      },
      {
        "heading": "Types of Pipeline Cycles",
        "points": [
          "Timely: Main nomination deadline.",
          "Evening: Allows updates after the Timely cycle.",
          "Intraday 1, 2 and 3: Provide additional opportunities to revise nominations during the gas day."
        ]
      }
    ],
    "keyTakeaways": [
      "Pipeline cycles define when nominations can be submitted or revised.",
      "Timely is the main nomination cycle.",
      "Intraday cycles allow schedule changes closer to or during gas flow.",
      "NAESB provides standardized scheduling guidelines in the US."
    ],
    "examples": [
      {
        "title": "Natural Gas Scheduling Example",
        "scenario": "A shipper initially nominates 10,000 MMBtu during the Timely cycle. Later, customer demand changes, so the shipper revises the nomination during an available Intraday cycle, subject to pipeline approval."
      }
    ],
    "summary": "A set of daily deadlines for submitting and revising gas nominations.",
    "content": "What is a Pipeline Cycle?:\nA set of daily deadlines for submitting and revising gas nominations. Allows shippers to update requested gas quantities before the gas flows. Standardized across US pipelines through NAESB guidelines.\n\nTypes of Pipeline Cycles:\nTimely: Main nomination deadline. Evening: Allows updates after the Timely cycle. Intraday 1, 2 and 3: Provide additional opportunities to revise nominations during the gas day."
  },
  {
    "id": "26",
    "title": "Storage Injection & Withdrawal",
    "category": "Foundations",
    "order": 26,
    "sections": [
      {
        "heading": "Injection",
        "points": [
          "Moves commodity into a storage facility.",
          "Usually done during low-demand or low-price periods.",
          "Helps store commodity for future use or sale."
        ]
      },
      {
        "heading": "Withdrawal",
        "points": [
          "Removes commodity from a storage facility.",
          "Usually done during high-demand or high-price periods.",
          "Helps meet demand or take advantage of higher prices."
        ]
      },
      {
        "heading": "Capacity Limits",
        "points": [
          "Injection and withdrawal are scheduled separately.",
          "Both must follow the facility's daily capacity limits."
        ]
      }
    ],
    "keyTakeaways": [
      "Injection = Moving commodity into storage.",
      "Withdrawal = Removing commodity from storage.",
      "Inject during low-price periods and withdraw during high-price periods.",
      "Daily facility capacity limits must be followed."
    ],
    "examples": [
      {
        "title": "Natural Gas Storage Example",
        "scenario": "A trader injects 5,000 MMBtu of gas into storage when prices are low. Later, when demand and prices increase, the trader withdraws 5,000 MMBtu, subject to the facility's withdrawal capacity."
      }
    ],
    "summary": "Moves commodity into a storage facility.",
    "content": "Injection:\nMoves commodity into a storage facility. Usually done during low-demand or low-price periods. Helps store commodity for future use or sale.\n\nWithdrawal:\nRemoves commodity from a storage facility. Usually done during high-demand or high-price periods. Helps meet demand or take advantage of higher prices.\n\nCapacity Limits:\nInjection and withdrawal are scheduled separately. Both must follow the facility's daily capacity limits."
  },
  {
    "id": "27",
    "title": "Transportation",
    "category": "Foundations",
    "order": 27,
    "sections": [
      {
        "heading": "What is Transportation?",
        "points": [
          "The process of moving a commodity from one location to another.",
          "Uses pipelines, railways, trucks or vessels.",
          "Requires a transportation agreement with the transporter."
        ]
      },
      {
        "heading": "Transportation Agreement",
        "points": [
          "Defines the agreed transportation route, capacity and charges.",
          "Is separate from the commodity purchase agreement.",
          "Specifies the terms for moving the commodity."
        ]
      }
    ],
    "keyTakeaways": [
      "Transportation = Physical movement of commodity.",
      "Can happen through pipelines, rail, trucks or vessels.",
      "Transportation requires a separate agreement.",
      "Buying a commodity and transporting it are separate activities."
    ],
    "examples": [
      {
        "title": "Crude Oil Transportation Example",
        "scenario": "A trader purchases 10,000 barrels of crude oil from a producer. A separate transportation agreement is arranged with a shipping company to move the crude by tanker to a refinery."
      }
    ],
    "summary": "The process of moving a commodity from one location to another.",
    "content": "What is Transportation?:\nThe process of moving a commodity from one location to another. Uses pipelines, railways, trucks or vessels. Requires a transportation agreement with the transporter.\n\nTransportation Agreement:\nDefines the agreed transportation route, capacity and charges. Is separate from the commodity purchase agreement. Specifies the terms for moving the commodity."
  },
  {
    "id": "28",
    "title": "Actualization, Allocation and Meter Data",
    "category": "Foundations",
    "order": 28,
    "sections": [
      {
        "heading": "Meter Data",
        "points": [
          "Contains the actual measured commodity volume at a meter point.",
          "Provides raw data for actualization and allocation.",
          "Often reported through pipeline meter statements."
        ]
      },
      {
        "heading": "Actualization",
        "points": [
          "Captures the actual quantity that physically flowed.",
          "Compares actual flow with scheduled or nominated quantities."
        ]
      },
      {
        "heading": "Allocation",
        "points": [
          "Splits the actual metered volume across multiple deals or shippers.",
          "Uses agreed allocation rules, such as nomination ratios.",
          "Ensures each shipper receives its share of the actual flow."
        ]
      }
    ],
    "keyTakeaways": [
      "Meter Data = Raw measured volume.",
      "Actualization = What actually flowed.",
      "Allocation = How actual flow is divided among shippers.",
      "Allocation follows agreed rules and may use nomination ratios."
    ],
    "examples": [
      {
        "title": "Natural Gas Allocation Example",
        "scenario": "A pipeline meter records 10,000 MMBtu of actual gas flow. Shipper A nominated 60% and Shipper B nominated 40%. If nomination ratios are the agreed allocation method, A receives 6,000 MMBtu and B receives 4,000 MMBtu in the allocation records."
      }
    ],
    "summary": "Contains the actual measured commodity volume at a meter point.",
    "content": "Meter Data:\nContains the actual measured commodity volume at a meter point. Provides raw data for actualization and allocation. Often reported through pipeline meter statements.\n\nActualization:\nCaptures the actual quantity that physically flowed. Compares actual flow with scheduled or nominated quantities.\n\nAllocation:\nSplits the actual metered volume across multiple deals or shippers. Uses agreed allocation rules, such as nomination ratios. Ensures each shipper receives its share of the actual flow."
  },
  {
    "id": "29",
    "title": "Tank and Pipeline Inventory",
    "category": "Foundations",
    "order": 29,
    "sections": [
      {
        "heading": "Tank Inventory",
        "points": [
          "Tracks commodity physically stored in terminal storage tanks.",
          "Represents available stock at a storage location.",
          "Used to monitor stock levels and storage capacity."
        ]
      },
      {
        "heading": "Pipeline Inventory (Linefill)",
        "points": [
          "Tracks commodity held inside a pipeline system.",
          "Helps maintain pipeline pressure and support continuous flow.",
          "Is not the same as commodity stored in terminal tanks."
        ]
      }
    ],
    "keyTakeaways": [
      "Tank Inventory = Commodity stored in tanks.",
      "Pipeline Inventory (Linefill) = Commodity held inside pipelines.",
      "Linefill helps maintain pipeline pressure.",
      "Both are important for physical inventory management."
    ],
    "examples": [
      {
        "title": "Crude Oil Inventory Example",
        "scenario": "A terminal has 20,000 barrels of crude oil in storage tanks, while another 5,000 barrels are held inside the pipeline as linefill to maintain pipeline operations."
      }
    ],
    "summary": "Tracks commodity physically stored in terminal storage tanks.",
    "content": "Tank Inventory:\nTracks commodity physically stored in terminal storage tanks. Represents available stock at a storage location. Used to monitor stock levels and storage capacity.\n\nPipeline Inventory (Linefill):\nTracks commodity held inside a pipeline system. Helps maintain pipeline pressure and support continuous flow. Is not the same as commodity stored in terminal tanks."
  },
  {
    "id": "30",
    "title": "Storage Inventory",
    "category": "Foundations",
    "order": 30,
    "sections": [
      {
        "heading": "What is Storage Inventory?",
        "points": [
          "Tracks commodity held at a dedicated storage facility.",
          "Storage can include gas caverns and LNG tanks.",
          "Inventory is managed under a storage contract."
        ]
      },
      {
        "heading": "Storage Capacity and Limits",
        "points": [
          "Working Capacity: Maximum usable storage volume.",
          "Injection Limit: Maximum quantity that can be stored per day.",
          "Withdrawal Limit: Maximum quantity that can be removed per day.",
          "Base Gas: Minimum gas required in a cavern to maintain pressure and support withdrawals."
        ]
      }
    ],
    "keyTakeaways": [
      "Storage Inventory = Commodity held in a dedicated storage facility.",
      "Working Capacity defines usable storage space.",
      "Injection and withdrawal limits control daily movement.",
      "Base gas supports pressure in underground gas storage caverns."
    ],
    "examples": [
      {
        "title": "Natural Gas Storage Example",
        "scenario": "A trader has a storage contract with 100,000 MMBtu working capacity. The facility allows 10,000 MMBtu daily injection and 8,000 MMBtu daily withdrawal. A minimum base gas quantity must remain in the cavern to maintain pressure."
      }
    ],
    "summary": "Tracks commodity held at a dedicated storage facility.",
    "content": "What is Storage Inventory?:\nTracks commodity held at a dedicated storage facility. Storage can include gas caverns and LNG tanks. Inventory is managed under a storage contract.\n\nStorage Capacity and Limits:\nWorking Capacity: Maximum usable storage volume. Injection Limit: Maximum quantity that can be stored per day. Withdrawal Limit: Maximum quantity that can be removed per day. Base Gas: Minimum gas required in a cavern to maintain pressure and support withdrawals."
  },
  {
    "id": "31",
    "title": "Book vs Actual Inventory",
    "category": "Foundations",
    "order": 31,
    "sections": [
      {
        "heading": "Book Inventory",
        "points": [
          "Calculated by the ETRM system using recorded transactions.",
          "Includes purchases, sales and inventory transfers.",
          "Represents the expected inventory balance."
        ]
      },
      {
        "heading": "Actual Inventory",
        "points": [
          "Represents the physically measured commodity quantity.",
          "Measured using tank gauging and meter readings.",
          "May differ from book inventory due to evaporation, measurement errors or timing differences."
        ]
      },
      {
        "heading": "Inventory Reconciliation",
        "points": [
          "Compares book inventory with actual inventory.",
          "Identifies and investigates quantity differences.",
          "Adjustments are recorded after proper verification."
        ]
      }
    ],
    "keyTakeaways": [
      "Book Inventory = Quantity recorded in ETRM.",
      "Actual Inventory = Physically measured quantity.",
      "Differences can occur due to losses, measurement errors or timing delays.",
      "Reconciliation helps identify and correct inventory mismatches."
    ],
    "examples": [
      {
        "title": "Crude Oil Inventory Example",
        "scenario": "ETRM shows 10,000 barrels of crude oil, but physical tank measurement shows 9,950 barrels. The 50-barrel difference must be investigated and reconciled."
      }
    ],
    "summary": "Calculated by the ETRM system using recorded transactions.",
    "content": "Book Inventory:\nCalculated by the ETRM system using recorded transactions. Includes purchases, sales and inventory transfers. Represents the expected inventory balance.\n\nActual Inventory:\nRepresents the physically measured commodity quantity. Measured using tank gauging and meter readings. May differ from book inventory due to evaporation, measurement errors or timing differences.\n\nInventory Reconciliation:\nCompares book inventory with actual inventory. Identifies and investigates quantity differences. Adjustments are recorded after proper verification."
  },
  {
    "id": "32",
    "title": "Inventory Reconciliation",
    "category": "Foundations",
    "order": 32,
    "sections": [
      {
        "heading": "What is Inventory Reconciliation?",
        "points": [
          "Compares book inventory with actual physical inventory.",
          "Identifies and investigates quantity differences.",
          "Ensures ETRM records match physical stock as closely as possible."
        ]
      },
      {
        "heading": "Variance Investigation",
        "points": [
          "Checks differences caused by measurement errors or timing delays.",
          "Investigates possible product loss, leakage or theft.",
          "Records approved adjustments in the ETRM system."
        ]
      }
    ],
    "keyTakeaways": [
      "Inventory Reconciliation = Comparing book and actual inventory.",
      "Variance = Difference between recorded and physical stock.",
      "Variances must be investigated before adjustments.",
      "Approved adjustments keep inventory records accurate."
    ],
    "examples": [
      {
        "title": "Crude Oil Reconciliation Example",
        "scenario": "ETRM shows 10,000 barrels, but physical measurement shows 9,950 barrels. The 50-barrel variance is investigated for measurement errors or product loss. After verification, an approved adjustment is recorded in ETRM."
      }
    ],
    "summary": "Compares book inventory with actual physical inventory.",
    "content": "What is Inventory Reconciliation?:\nCompares book inventory with actual physical inventory. Identifies and investigates quantity differences. Ensures ETRM records match physical stock as closely as possible.\n\nVariance Investigation:\nChecks differences caused by measurement errors or timing delays. Investigates possible product loss, leakage or theft. Records approved adjustments in the ETRM system."
  },
  {
    "id": "33",
    "title": "Invoice, Credit Memo and Debit Memo",
    "category": "Foundations",
    "order": 33,
    "sections": [
      {
        "heading": "Invoice",
        "points": [
          "Bills a counterparty for delivered or received commodity.",
          "Contains commodity quantity, price, taxes, fees and total amount payable."
        ]
      },
      {
        "heading": "Credit Memo",
        "points": [
          "Reduces the amount owed by a counterparty.",
          "Used to correct overcharges or apply discounts."
        ]
      },
      {
        "heading": "Debit Memo",
        "points": [
          "Increases the amount owed by a counterparty.",
          "Used to correct undercharges or bill additional fees."
        ]
      }
    ],
    "keyTakeaways": [
      "Invoice = Original bill for a transaction.",
      "Credit Memo = Reduces the amount owed.",
      "Debit Memo = Increases the amount owed.",
      "All three help maintain accurate settlement records."
    ],
    "examples": [
      {
        "title": "Invoice Correction Example",
        "scenario": "A trader issues an invoice for $10,000. Later, an overcharge of $1,000 is identified, so a credit memo reduces the amount to $9,000. If an additional $500 fee was missed, a debit memo increases the amount owed."
      }
    ],
    "summary": "Bills a counterparty for delivered or received commodity.",
    "content": "Invoice:\nBills a counterparty for delivered or received commodity. Contains commodity quantity, price, taxes, fees and total amount payable.\n\nCredit Memo:\nReduces the amount owed by a counterparty. Used to correct overcharges or apply discounts.\n\nDebit Memo:\nIncreases the amount owed by a counterparty. Used to correct undercharges or bill additional fees."
  },
  {
    "id": "34",
    "title": "Payment and Netting",
    "category": "Foundations",
    "order": 34,
    "sections": [
      {
        "heading": "Payment",
        "points": [
          "The actual transfer of funds to settle an invoice.",
          "Usually processed through bank transfers or wire transfers.",
          "Can be made by the buyer or seller depending on the obligation."
        ]
      },
      {
        "heading": "Netting",
        "points": [
          "Combines multiple invoices or payment obligations between two counterparties.",
          "Only the final net amount is paid.",
          "Reduces payment transactions and counterparty exposure."
        ]
      }
    ],
    "keyTakeaways": [
      "Payment = Actual transfer of money.",
      "Netting = Combining multiple payment obligations.",
      "Only the net amount is paid after netting.",
      "Netting reduces transaction volume and counterparty risk."
    ],
    "examples": [
      {
        "title": "Payment Netting Example",
        "scenario": "Company A owes Company B $100,000, while Company B owes Company A $70,000. After netting, Company A pays only the difference of $30,000 to Company B."
      }
    ],
    "summary": "The actual transfer of funds to settle an invoice.",
    "content": "Payment:\nThe actual transfer of funds to settle an invoice. Usually processed through bank transfers or wire transfers. Can be made by the buyer or seller depending on the obligation.\n\nNetting:\nCombines multiple invoices or payment obligations between two counterparties. Only the final net amount is paid. Reduces payment transactions and counterparty exposure."
  },
  {
    "id": "35",
    "title": "Multi-Currency & Foreign Exchange (FX)",
    "category": "Foundations",
    "order": 35,
    "sections": [
      {
        "heading": "Multi-Currency Transactions",
        "points": [
          "Occurs when counterparties transact using different currencies.",
          "ETRM converts transaction amounts into the required reporting or settlement currency.",
          "Conversion uses an agreed FX rate."
        ]
      },
      {
        "heading": "Foreign Exchange (FX) Rate",
        "points": [
          "Spot Rate: Current exchange rate between two currencies.",
          "Forward Rate: Agreed exchange rate for a future date.",
          "The applicable rate depends on the contract and settlement terms."
        ]
      },
      {
        "heading": "FX Gain and Loss",
        "points": [
          "Currency movements can create additional gains or losses.",
          "FX gain/loss is tracked separately from commodity P&L.",
          "Helps identify the financial impact of exchange-rate changes."
        ]
      }
    ],
    "keyTakeaways": [
      "Multi-Currency = Transactions involving different currencies.",
      "Spot Rate = Current exchange rate.",
      "Forward Rate = Agreed rate for a future date.",
      "FX Gain/Loss = Profit or loss caused by currency movements.",
      "Commodity P&L and FX P&L are tracked separately."
    ],
    "examples": [
      {
        "title": "USD to INR Settlement Example",
        "scenario": "An Indian company owes a US supplier $10,000. At an exchange rate of ₹83 per USD, the payable is ₹8,30,000. If the rate changes to ₹85 before payment, the payable becomes ₹8,50,000, creating an additional FX loss of ₹20,000 for the Indian buyer."
      }
    ],
    "summary": "Occurs when counterparties transact using different currencies.",
    "content": "Multi-Currency Transactions:\nOccurs when counterparties transact using different currencies. ETRM converts transaction amounts into the required reporting or settlement currency. Conversion uses an agreed FX rate.\n\nForeign Exchange (FX) Rate:\nSpot Rate: Current exchange rate between two currencies. Forward Rate: Agreed exchange rate for a future date. The applicable rate depends on the contract and settlement terms.\n\nFX Gain and Loss:\nCurrency movements can create additional gains or losses. FX gain/loss is tracked separately from commodity P&L. Helps identify the financial impact of exchange-rate changes."
  },
  {
    "id": "36",
    "title": "Taxes, Interest and Late Fees",
    "category": "Foundations",
    "order": 36,
    "sections": [
      {
        "heading": "Taxes",
        "points": [
          "Government charges applied to commodity transactions.",
          "Examples include excise duty, severance tax, sales tax and VAT.",
          "Calculated according to the applicable jurisdiction's rules.",
          "Added to invoices where applicable."
        ]
      },
      {
        "heading": "Interest",
        "points": [
          "Additional amount charged when payment is overdue.",
          "Calculated based on the outstanding amount and agreed interest rate.",
          "Terms are defined in the master agreement."
        ]
      },
      {
        "heading": "Late Fees",
        "points": [
          "Charges applied when a counterparty misses the payment deadline.",
          "May be fixed or calculated according to contractual terms.",
          "Encourage counterparties to make payments on time."
        ]
      }
    ],
    "keyTakeaways": [
      "Taxes = Government charges on transactions.",
      "Interest = Cost charged on overdue payments.",
      "Late Fees = Additional charges for delayed payment.",
      "Tax rules depend on jurisdiction.",
      "Interest and late fees depend on the master agreement."
    ],
    "examples": [
      {
        "title": "Invoice Settlement Example",
        "scenario": "A buyer receives an invoice of $10,000 with applicable taxes of $500. The total payable is $10,500. If payment is delayed beyond the agreed due date, additional interest or late fees may apply according to the master agreement."
      }
    ],
    "summary": "Government charges applied to commodity transactions.",
    "content": "Taxes:\nGovernment charges applied to commodity transactions. Examples include excise duty, severance tax, sales tax and VAT. Calculated according to the applicable jurisdiction's rules. Added to invoices where applicable.\n\nInterest:\nAdditional amount charged when payment is overdue. Calculated based on the outstanding amount and agreed interest rate. Terms are defined in the master agreement.\n\nLate Fees:\nCharges applied when a counterparty misses the payment deadline. May be fixed or calculated according to contractual terms. Encourage counterparties to make payments on time."
  },
  {
    "id": "37",
    "title": "Trade Accounting Entries",
    "category": "Foundations",
    "order": 37,
    "sections": [
      {
        "heading": "What are Trade Accounting Entries?",
        "points": [
          "Debit and credit journal entries generated by the ETRM system.",
          "Recorded as a trade moves through its life cycle.",
          "Each entry represents a financial or accounting event."
        ]
      },
      {
        "heading": "When Are Entries Generated?",
        "points": [
          "Trade Execution: Records the trade-related accounting event.",
          "Delivery: Records commodity receipt or delivery.",
          "Invoicing: Records accounts payable or accounts receivable.",
          "Payment: Records cash movement and clears outstanding balances."
        ]
      }
    ],
    "keyTakeaways": [
      "Trade Accounting Entries = Debit and credit journal records.",
      "Entries are generated at different trade life-cycle stages.",
      "Execution, delivery, invoicing and payment create different accounting events.",
      "They maintain accurate financial records and support auditing."
    ],
    "examples": [
      {
        "title": "Crude Oil Purchase Example",
        "scenario": "A company purchases crude oil for $100,000. The ETRM records the relevant trade accounting event, recognizes inventory or commodity cost at delivery, records the payable when invoiced, and records cash payment when the invoice is settled."
      }
    ],
    "summary": "Debit and credit journal entries generated by the ETRM system.",
    "content": "What are Trade Accounting Entries?:\nDebit and credit journal entries generated by the ETRM system. Recorded as a trade moves through its life cycle. Each entry represents a financial or accounting event.\n\nWhen Are Entries Generated?:\nTrade Execution: Records the trade-related accounting event. Delivery: Records commodity receipt or delivery. Invoicing: Records accounts payable or accounts receivable. Payment: Records cash movement and clears outstanding balances."
  },
  {
    "id": "38",
    "title": "Accrual & Deferral",
    "category": "Foundations",
    "order": 38,
    "sections": [
      {
        "heading": "Accrual",
        "points": [
          "Recognizes revenue or expenses when they are earned or incurred.",
          "Cash payment or receipt has not happened yet.",
          "Ensures income and expenses are recorded in the correct accounting period."
        ]
      },
      {
        "heading": "Deferral",
        "points": [
          "Cash is already received or paid.",
          "Revenue or expense recognition is postponed to a future period.",
          "Recognition happens when the revenue is earned or expense is incurred."
        ]
      }
    ],
    "keyTakeaways": [
      "Accrual = Recognize first, cash later.",
      "Deferral = Cash first, recognize later.",
      "Both follow the matching and period-based accounting principles.",
      "They ensure accurate financial reporting."
    ],
    "examples": [
      {
        "title": "Accrual Example",
        "scenario": "A company receives natural gas in November worth $50,000, but the supplier invoice arrives in December. The company records the expense in November because the gas was received in that period."
      },
      {
        "title": "Deferral Example",
        "scenario": "A customer pays $12,000 in advance for a 12-month gas supply service. The company initially records it as deferred revenue and recognizes $1,000 as revenue each month as the service is provided."
      }
    ],
    "summary": "Recognizes revenue or expenses when they are earned or incurred.",
    "content": "Accrual:\nRecognizes revenue or expenses when they are earned or incurred. Cash payment or receipt has not happened yet. Ensures income and expenses are recorded in the correct accounting period.\n\nDeferral:\nCash is already received or paid. Revenue or expense recognition is postponed to a future period. Recognition happens when the revenue is earned or expense is incurred."
  },
  {
    "id": "39",
    "title": "Revenue & Cost Recognition",
    "category": "Foundations",
    "order": 39,
    "sections": [
      {
        "heading": "Revenue Recognition",
        "points": [
          "Determines when revenue from a commodity sale is recorded.",
          "Generally recognized when the commodity is delivered and control transfers to the buyer.",
          "Does not depend only on when payment is received."
        ]
      },
      {
        "heading": "Cost Recognition",
        "points": [
          "Determines when the cost of a commodity purchase is recorded.",
          "Generally recognized when the commodity is received or the obligation is incurred.",
          "Does not depend only on when the supplier is paid."
        ]
      }
    ],
    "keyTakeaways": [
      "Revenue Recognition = When sales revenue is recorded.",
      "Cost Recognition = When purchase cost is recorded.",
      "Delivery and transfer of control are important recognition factors.",
      "Cash receipt or payment can happen in a different accounting period."
    ],
    "examples": [
      {
        "title": "Natural Gas Sale Example",
        "scenario": "A company delivers natural gas worth $50,000 to a customer in November but receives payment in December. Revenue is generally recognized in November when the delivery and applicable recognition criteria are met."
      }
    ],
    "summary": "Determines when revenue from a commodity sale is recorded.",
    "content": "Revenue Recognition:\nDetermines when revenue from a commodity sale is recorded. Generally recognized when the commodity is delivered and control transfers to the buyer. Does not depend only on when payment is received.\n\nCost Recognition:\nDetermines when the cost of a commodity purchase is recorded. Generally recognized when the commodity is received or the obligation is incurred. Does not depend only on when the supplier is paid."
  },
  {
    "id": "40",
    "title": "GL Posting & Sub-Ledger",
    "category": "Foundations",
    "order": 40,
    "sections": [
      {
        "heading": "General Ledger (GL) Posting",
        "points": [
          "Transfers summarized accounting entries from ETRM to the company's General Ledger.",
          "Usually integrated with ERP systems like SAP or Oracle.",
          "Maintains the company's overall financial records."
        ]
      },
      {
        "heading": "Sub-Ledger",
        "points": [
          "Stores detailed accounting transactions at the individual trade level.",
          "Maintains details of each trade, invoice and payment.",
          "Helps trace GL balances back to the original trades."
        ]
      }
    ],
    "keyTakeaways": [
      "GL = Summarized financial records.",
      "Sub-Ledger = Detailed trade-level accounting records.",
      "ETRM sends accounting entries to the GL.",
      "Sub-ledger helps with reconciliation, auditing and tracking."
    ],
    "examples": [
      {
        "title": "Crude Oil Accounting Example",
        "scenario": "An ETRM system records 100 crude oil trades with individual accounting entries in its sub-ledger. It summarizes these entries and posts the total purchase cost of $500,000 to the company's GL in SAP."
      }
    ],
    "summary": "Transfers summarized accounting entries from ETRM to the company's General Ledger.",
    "content": "General Ledger (GL) Posting:\nTransfers summarized accounting entries from ETRM to the company's General Ledger. Usually integrated with ERP systems like SAP or Oracle. Maintains the company's overall financial records.\n\nSub-Ledger:\nStores detailed accounting transactions at the individual trade level. Maintains details of each trade, invoice and payment. Helps trace GL balances back to the original trades."
  },
  {
    "id": "41",
    "title": "Month-End Close",
    "category": "Foundations",
    "order": 41,
    "sections": [
      {
        "heading": "What is Month-End Close?",
        "points": [
          "Process of finalizing financial and accounting records at the end of a month.",
          "Ensures all transactions are recorded in the correct accounting period.",
          "Prepares financial records for reporting and auditing."
        ]
      },
      {
        "heading": "Key Activities",
        "points": [
          "Finalize pending accruals and deferrals.",
          "Reconcile trade positions and physical inventory.",
          "Verify invoices, payments and accounting entries.",
          "Resolve outstanding transactions and discrepancies.",
          "Close and lock the accounting period to prevent further postings."
        ]
      }
    ],
    "keyTakeaways": [
      "Month-End Close = Finalizing monthly financial records.",
      "Accruals and accounting entries must be finalized.",
      "Positions and inventory must be reconciled.",
      "Open issues must be resolved.",
      "Closed periods are locked against normal further postings."
    ],
    "examples": [
      {
        "title": "November Month-End Close Example",
        "scenario": "At the end of November, an energy company finalizes pending gas accruals, reconciles inventory, verifies invoices and payments, and resolves outstanding accounting differences. Once approved, November is closed in the ETRM and further postings are restricted."
      }
    ],
    "summary": "Process of finalizing financial and accounting records at the end of a month.",
    "content": "What is Month-End Close?:\nProcess of finalizing financial and accounting records at the end of a month. Ensures all transactions are recorded in the correct accounting period. Prepares financial records for reporting and auditing.\n\nKey Activities:\nFinalize pending accruals and deferrals. Reconcile trade positions and physical inventory. Verify invoices, payments and accounting entries. Resolve outstanding transactions and discrepancies. Close and lock the accounting period to prevent further postings."
  },
  {
    "id": "42",
    "title": "Position and P&L Reports",
    "category": "Foundations",
    "order": 42,
    "sections": [
      {
        "heading": "Position Report",
        "points": [
          "Shows current open trading positions.",
          "Displays positions by book, commodity and location.",
          "Helps traders monitor buy/sell quantities and market exposure."
        ]
      },
      {
        "heading": "P&L Report",
        "points": [
          "Shows profit and loss generated by trading activities over a period.",
          "Includes Realized P&L from closed or settled positions.",
          "Includes Unrealized P&L from open positions.",
          "Can be divided into price P&L, volume P&L and FX P&L."
        ]
      },
      {
        "heading": "P&L Components",
        "points": [
          "Price P&L: Profit or loss due to commodity price changes.",
          "Volume P&L: Profit or loss due to changes in traded or delivered quantities.",
          "FX P&L: Profit or loss due to currency exchange-rate movements."
        ]
      }
    ],
    "keyTakeaways": [
      "Position Report = What positions are currently open?",
      "P&L Report = How much profit or loss was generated?",
      "Realized P&L = Profit or loss already realized.",
      "Unrealized P&L = Estimated profit or loss on open positions.",
      "P&L can include price, volume and FX components."
    ],
    "examples": [
      {
        "title": "Crude Oil Trading Example",
        "scenario": "A trader buys 1,000 barrels at $75/bbl. The current market price increases to $80/bbl. The position report shows an open long position of 1,000 barrels, while the P&L report shows an unrealized gain of $5,000."
      }
    ],
    "summary": "Shows current open trading positions.",
    "content": "Position Report:\nShows current open trading positions. Displays positions by book, commodity and location. Helps traders monitor buy/sell quantities and market exposure.\n\nP&L Report:\nShows profit and loss generated by trading activities over a period. Includes Realized P&L from closed or settled positions. Includes Unrealized P&L from open positions. Can be divided into price P&L, volume P&L and FX P&L.\n\nP&L Components:\nPrice P&L: Profit or loss due to commodity price changes. Volume P&L: Profit or loss due to changes in traded or delivered quantities. FX P&L: Profit or loss due to currency exchange-rate movements."
  },
  {
    "id": "43",
    "title": "VaR & Exposure Reports",
    "category": "Foundations",
    "order": 43,
    "sections": [
      {
        "heading": "VaR Report",
        "points": [
          "Shows the estimated potential financial loss due to market movements.",
          "Summarizes VaR across trading books, desks or portfolios.",
          "Uses a defined confidence level and time horizon."
        ]
      },
      {
        "heading": "Exposure Report",
        "points": [
          "Shows total market or counterparty exposure.",
          "Compares exposure against approved risk limits.",
          "Highlights limit breaches and remaining available limits."
        ]
      }
    ],
    "keyTakeaways": [
      "VaR Report = Potential financial loss estimate.",
      "Exposure Report = Total risk or financial exposure.",
      "VaR uses a confidence level and time horizon.",
      "Exposure reports help monitor approved risk limits.",
      "Limit breaches require investigation and action."
    ],
    "examples": [
      {
        "title": "Risk Reporting Example",
        "scenario": "A trading desk has a 1-day VaR of $100,000 at 95% confidence. Its counterparty exposure is $900,000 against an approved limit of $1,000,000, leaving $100,000 of available headroom."
      }
    ],
    "summary": "Shows the estimated potential financial loss due to market movements.",
    "content": "VaR Report:\nShows the estimated potential financial loss due to market movements. Summarizes VaR across trading books, desks or portfolios. Uses a defined confidence level and time horizon.\n\nExposure Report:\nShows total market or counterparty exposure. Compares exposure against approved risk limits. Highlights limit breaches and remaining available limits."
  },
  {
    "id": "44",
    "title": "Credit & Settlement Reports",
    "category": "Foundations",
    "order": 44,
    "sections": [
      {
        "heading": "Credit Report",
        "points": [
          "Tracks financial exposure for each counterparty.",
          "Displays credit ratings, approved limits and collateral posted.",
          "Helps identify potential credit risk and limit breaches."
        ]
      },
      {
        "heading": "Settlement Report",
        "points": [
          "Tracks outstanding invoices and payment obligations.",
          "Shows invoice and payment statuses.",
          "Displays aging to identify how long payments have been overdue.",
          "Helps monitor pending receivables and payables."
        ]
      }
    ],
    "keyTakeaways": [
      "Credit Report = Counterparty financial risk.",
      "Settlement Report = Outstanding invoices and payments.",
      "Credit reports monitor limits, ratings and collateral.",
      "Settlement reports track payment status and overdue amounts.",
      "Aging helps identify delayed payments."
    ],
    "examples": [
      {
        "title": "Credit and Settlement Reporting Example",
        "scenario": "Counterparty A has an approved credit limit of $1 million and current exposure of $800,000. The credit report shows $200,000 available headroom. The settlement report shows an outstanding invoice of $50,000 that is 30 days overdue."
      }
    ],
    "summary": "Tracks financial exposure for each counterparty.",
    "content": "Credit Report:\nTracks financial exposure for each counterparty. Displays credit ratings, approved limits and collateral posted. Helps identify potential credit risk and limit breaches.\n\nSettlement Report:\nTracks outstanding invoices and payment obligations. Shows invoice and payment statuses. Displays aging to identify how long payments have been overdue. Helps monitor pending receivables and payables."
  },
  {
    "id": "45",
    "title": "Inventory & Storage Report",
    "category": "Foundations",
    "order": 45,
    "sections": [
      {
        "heading": "What is an Inventory and Storage Report?",
        "points": [
          "Shows physical stock available across tanks and storage facilities.",
          "Tracks storage levels, injection, withdrawal, and remaining capacity.",
          "Compares physical inventory with book inventory to identify differences."
        ]
      },
      {
        "heading": "Key Information",
        "points": [
          "Current stock quantity in each tank or storage facility.",
          "Daily injection and withdrawal quantities.",
          "Available storage capacity and capacity utilization.",
          "Differences between book and actual inventory."
        ]
      }
    ],
    "keyTakeaways": [
      "Tracks actual physical stock across storage locations.",
      "Monitors injection, withdrawal, and available capacity.",
      "Helps identify inventory mismatches.",
      "Supports efficient storage and inventory planning."
    ],
    "examples": [
      {
        "title": "Gas Storage Report",
        "scenario": "A storage facility has a capacity of 100,000 MMBtu and currently holds 70,000 MMBtu. The report shows 10,000 MMBtu injected, 5,000 MMBtu withdrawn, and 30,000 MMBtu of available capacity."
      }
    ],
    "summary": "Shows physical stock available across tanks and storage facilities.",
    "content": "What is an Inventory and Storage Report?:\nShows physical stock available across tanks and storage facilities. Tracks storage levels, injection, withdrawal, and remaining capacity. Compares physical inventory with book inventory to identify differences.\n\nKey Information:\nCurrent stock quantity in each tank or storage facility. Daily injection and withdrawal quantities. Available storage capacity and capacity utilization. Differences between book and actual inventory."
  },
  {
    "id": "46",
    "title": "Cash Flow & Executive Dashboard",
    "category": "Foundations",
    "order": 46,
    "sections": [
      {
        "heading": "Cash Flow Report",
        "points": [
          "Projects expected cash inflows and outflows from upcoming settlements.",
          "Tracks customer receipts, supplier payments, invoices, and due dates.",
          "Helps identify future cash shortages or surplus."
        ]
      },
      {
        "heading": "Executive Dashboard",
        "points": [
          "Provides a high-level summary of business performance.",
          "Displays key KPIs such as P&L, exposure, trading volume, and cash flow.",
          "Helps leadership monitor performance and make business decisions."
        ]
      }
    ],
    "keyTakeaways": [
      "Cash Flow Report = Expected money coming in and going out.",
      "Executive Dashboard = Overall business performance at a glance.",
      "Cash flow helps with financial planning.",
      "Executive dashboards support management decisions."
    ],
    "examples": [
      {
        "title": "Cash Flow and Executive Dashboard",
        "scenario": "An energy company expects to receive $500,000 from customers and pay $300,000 to suppliers next month. Its cash flow report shows an expected net inflow of $200,000. The executive dashboard displays total P&L of $150,000, exposure of $2 million, and trading volume of 50,000 MWh."
      }
    ],
    "summary": "Projects expected cash inflows and outflows from upcoming settlements.",
    "content": "Cash Flow Report:\nProjects expected cash inflows and outflows from upcoming settlements. Tracks customer receipts, supplier payments, invoices, and due dates. Helps identify future cash shortages or surplus.\n\nExecutive Dashboard:\nProvides a high-level summary of business performance. Displays key KPIs such as P&L, exposure, trading volume, and cash flow. Helps leadership monitor performance and make business decisions."
  },
  {
    "id": "47",
    "title": "Counterparty & Book",
    "category": "Master Data",
    "order": 47,
    "sections": [
      {
        "heading": "Counterparty",
        "points": [
          "A counterparty is an entity you buy commodities from or sell commodities to.",
          "Stores company details, credit limits, legal agreements, and payment instructions.",
          "Helps manage trading relationships and credit risk."
        ]
      },
      {
        "heading": "Book",
        "points": [
          "A book is an internal grouping of trades based on strategy, desk, or portfolio.",
          "Used to track positions, exposure, and P&L.",
          "Helps organize and monitor trading activities."
        ]
      }
    ],
    "keyTakeaways": [
      "Counterparty = External trading partner.",
      "Book = Internal grouping of trades.",
      "Counterparty manages trading relationships and credit details.",
      "Book helps track positions and P&L."
    ],
    "examples": [
      {
        "title": "Counterparty and Book Example",
        "scenario": "An energy company buys 10,000 barrels of crude oil from ABC Trading Ltd. ABC Trading Ltd. is the counterparty. The company records the trade in its Crude Oil Trading Book to track its position and P&L."
      }
    ],
    "summary": "A counterparty is an entity you buy commodities from or sell commodities to.",
    "content": "Counterparty:\nA counterparty is an entity you buy commodities from or sell commodities to. Stores company details, credit limits, legal agreements, and payment instructions. Helps manage trading relationships and credit risk.\n\nBook:\nA book is an internal grouping of trades based on strategy, desk, or portfolio. Used to track positions, exposure, and P&L. Helps organize and monitor trading activities."
  },
  {
    "id": "48",
    "title": "Portfolio & Trader",
    "category": "Master Data",
    "order": 48,
    "sections": [
      {
        "heading": "Portfolio",
        "points": [
          "A portfolio groups multiple books for higher-level reporting.",
          "Books can be grouped by region, commodity, or trading strategy.",
          "Helps management monitor overall positions, exposure, and P&L."
        ]
      },
      {
        "heading": "Trader",
        "points": [
          "A trader is an authorized person who executes and books trades.",
          "Trader master stores trader details, assigned books, and approval limits.",
          "Helps control who can execute trades and within which limits."
        ]
      }
    ],
    "keyTakeaways": [
      "Portfolio = Group of books.",
      "Trader = Authorized person who executes and books trades.",
      "Portfolio supports higher-level reporting.",
      "Trader master controls trading permissions and approval limits."
    ],
    "examples": [
      {
        "title": "Portfolio and Trader Example",
        "scenario": "An energy company has Crude Oil and Natural Gas books grouped under the Energy Portfolio. Trader John is authorized to book trades in the Crude Oil Book with an approval limit of $1 million."
      }
    ],
    "summary": "A portfolio groups multiple books for higher-level reporting.",
    "content": "Portfolio:\nA portfolio groups multiple books for higher-level reporting. Books can be grouped by region, commodity, or trading strategy. Helps management monitor overall positions, exposure, and P&L.\n\nTrader:\nA trader is an authorized person who executes and books trades. Trader master stores trader details, assigned books, and approval limits. Helps control who can execute trades and within which limits."
  },
  {
    "id": "49",
    "title": "Commodity & Location",
    "category": "Master Data",
    "order": 49,
    "sections": [
      {
        "heading": "Commodity Master",
        "points": [
          "Defines the products that can be traded, such as crude oil, natural gas, and electricity.",
          "Stores commodity details, default units of measurement, and product specifications.",
          "Ensures consistent commodity information across trades."
        ]
      },
      {
        "heading": "Location Master",
        "points": [
          "Defines delivery points, trading hubs, pipelines, and storage locations.",
          "Stores geographic and delivery-related information.",
          "Used in trading, scheduling, transportation, and location-based pricing."
        ]
      }
    ],
    "keyTakeaways": [
      "Commodity = What we trade.",
      "Location = Where we deliver or receive the commodity.",
      "Commodity master maintains product and unit details.",
      "Location master supports delivery, scheduling, and pricing."
    ],
    "examples": [
      {
        "title": "Commodity and Location Example",
        "scenario": "A company trades 10,000 MMBtu of natural gas. Natural Gas is the commodity, MMBtu is its unit of measurement, and Henry Hub is the delivery or pricing location."
      }
    ],
    "summary": "Defines the products that can be traded, such as crude oil, natural gas, and electricity.",
    "content": "Commodity Master:\nDefines the products that can be traded, such as crude oil, natural gas, and electricity. Stores commodity details, default units of measurement, and product specifications. Ensures consistent commodity information across trades.\n\nLocation Master:\nDefines delivery points, trading hubs, pipelines, and storage locations. Stores geographic and delivery-related information. Used in trading, scheduling, transportation, and location-based pricing."
  },
  {
    "id": "50",
    "title": "Hub, Pipeline and Storage",
    "category": "Master Data",
    "order": 50,
    "sections": [
      {
        "heading": "Hub",
        "points": [
          "Defines physical or virtual points where commodities are traded or priced.",
          "Stores hub details and associated pricing references.",
          "Example: Henry Hub for natural gas pricing."
        ]
      },
      {
        "heading": "Pipeline",
        "points": [
          "Defines transportation assets used to move commodities.",
          "Stores pipeline routes, segments, and transportation capacity.",
          "Used for nominations, scheduling, and transportation planning."
        ]
      },
      {
        "heading": "Storage",
        "points": [
          "Defines facilities where commodities are stored.",
          "Stores working capacity and injection/withdrawal limits.",
          "Helps manage storage availability and inventory movements."
        ]
      }
    ],
    "keyTakeaways": [
      "Hub = Where commodities are traded or priced.",
      "Pipeline = How commodities are transported.",
      "Storage = Where commodities are stored.",
      "Capacity limits control transportation and storage activities."
    ],
    "examples": [
      {
        "title": "Natural Gas Example",
        "scenario": "A company buys natural gas priced at Henry Hub, transports it through a pipeline with a capacity of 50,000 MMBtu per day, and stores it in a facility with a working capacity of 100,000 MMBtu."
      }
    ],
    "summary": "Defines physical or virtual points where commodities are traded or priced.",
    "content": "Hub:\nDefines physical or virtual points where commodities are traded or priced. Stores hub details and associated pricing references. Example: Henry Hub for natural gas pricing.\n\nPipeline:\nDefines transportation assets used to move commodities. Stores pipeline routes, segments, and transportation capacity. Used for nominations, scheduling, and transportation planning.\n\nStorage:\nDefines facilities where commodities are stored. Stores working capacity and injection/withdrawal limits. Helps manage storage availability and inventory movements."
  },
  {
    "id": "51",
    "title": "Currency, Unit, Calendar and Holiday",
    "category": "Master Data",
    "order": 51,
    "sections": [
      {
        "heading": "Currency Master",
        "points": [
          "Defines currencies used in trading and settlement, such as USD, EUR, and INR.",
          "Supports currency conversion and financial reporting.",
          "Helps manage multi-currency transactions."
        ]
      },
      {
        "heading": "Unit of Measure (UOM) Master",
        "points": [
          "Defines standard units used to measure commodities.",
          "Examples: Barrels (bbl), MMBtu, MWh, and metric tonnes.",
          "Supports quantity conversion between different units."
        ]
      },
      {
        "heading": "Calendar and Holiday Master",
        "points": [
          "Defines business days, weekends, and market holidays.",
          "Helps calculate settlement dates, payment due dates, and delivery schedules.",
          "Supports pipeline nomination cycles and market-specific calendars."
        ]
      }
    ],
    "keyTakeaways": [
      "Currency = In which currency we record amounts.",
      "UOM = How we measure commodity quantities.",
      "Calendar = Which days are business or delivery days.",
      "Holiday = Days when markets or financial institutions are closed."
    ],
    "examples": [
      {
        "title": "Natural Gas Trade Example",
        "scenario": "A company trades 10,000 MMBtu of natural gas at $4/MMBtu. The trade amount is $40,000 USD. The calendar identifies the applicable business days and holidays to calculate the invoice payment due date."
      }
    ],
    "summary": "Defines currencies used in trading and settlement, such as USD, EUR, and INR.",
    "content": "Currency Master:\nDefines currencies used in trading and settlement, such as USD, EUR, and INR. Supports currency conversion and financial reporting. Helps manage multi-currency transactions.\n\nUnit of Measure (UOM) Master:\nDefines standard units used to measure commodities. Examples: Barrels (bbl), MMBtu, MWh, and metric tonnes. Supports quantity conversion between different units.\n\nCalendar and Holiday Master:\nDefines business days, weekends, and market holidays. Helps calculate settlement dates, payment due dates, and delivery schedules. Supports pipeline nomination cycles and market-specific calendars."
  },
  {
    "id": "52",
    "title": "Price Curve, Fee and Tax",
    "category": "Master Data",
    "order": 52,
    "sections": [
      {
        "heading": "Price Curve Master",
        "points": [
          "Stores forward and settlement price series for commodities and locations.",
          "Used for trade valuation, Mark-to-Market (MTM), and settlement calculations.",
          "Examples: Brent crude curve, Henry Hub gas curve."
        ]
      },
      {
        "heading": "Fee Master",
        "points": [
          "Defines standard charges associated with trading and commodity movement.",
          "Includes transportation tariffs, pipeline charges, and storage fees.",
          "Helps calculate additional costs during trade settlement."
        ]
      },
      {
        "heading": "Tax Master",
        "points": [
          "Defines applicable tax rates based on jurisdiction and commodity.",
          "Stores tax rules such as VAT, sales tax, and excise duty.",
          "Used to calculate taxes on trades, invoices, and settlements."
        ]
      }
    ],
    "keyTakeaways": [
      "Price Curve = Commodity prices over time.",
      "Fee Master = Standard trading and transportation charges.",
      "Tax Master = Applicable government tax rules and rates.",
      "These masters support accurate valuation and settlement."
    ],
    "examples": [
      {
        "title": "Crude Oil Trade Example",
        "scenario": "A company buys 10,000 barrels of crude oil at $75/bbl. The price curve provides market prices for MTM valuation. The fee master adds $2/bbl transportation charges, and the tax master applies the relevant tax rate to calculate the final invoice amount."
      }
    ],
    "summary": "Stores forward and settlement price series for commodities and locations.",
    "content": "Price Curve Master:\nStores forward and settlement price series for commodities and locations. Used for trade valuation, Mark-to-Market (MTM), and settlement calculations. Examples: Brent crude curve, Henry Hub gas curve.\n\nFee Master:\nDefines standard charges associated with trading and commodity movement. Includes transportation tariffs, pipeline charges, and storage fees. Helps calculate additional costs during trade settlement.\n\nTax Master:\nDefines applicable tax rates based on jurisdiction and commodity. Stores tax rules such as VAT, sales tax, and excise duty. Used to calculate taxes on trades, invoices, and settlements."
  },
  {
    "id": "53",
    "title": "Crude Oil Trade Lifecycle",
    "category": "Oil",
    "order": 53,
    "sections": [
      {
        "heading": "Business Scenario",
        "points": [
          "ABC Energy purchases 50,000 barrels of crude oil from XYZ Oil.",
          "Indicative purchase price: $78 per barrel.",
          "ABC Energy transports the crude oil and sells it to a refinery.",
          "The ETRM system tracks the transaction from execution to final settlement."
        ]
      },
      {
        "heading": "Stage 1: Market Analysis and Pre-Trade Checks",
        "points": [
          "Trader identifies a buying or selling opportunity.",
          "Checks counterparty credit limits, trading authority, and risk limits.",
          "Ensures the company is authorized to execute the trade."
        ]
      },
      {
        "heading": "Stage 2: Trade Execution",
        "points": [
          "Buyer and seller agree on commodity, grade, quantity, and price.",
          "Agree on delivery location, delivery window, and commercial terms.",
          "The transaction becomes a legally binding deal according to the agreed terms."
        ]
      },
      {
        "heading": "Stage 3: Trade Capture",
        "points": [
          "Trader records the transaction in the ETRM system.",
          "System stores Trade ID, counterparty, book, commodity, quantity, and pricing.",
          "Delivery dates, locations, and contract terms are also captured."
        ]
      },
      {
        "heading": "Stage 4: Trade Validation",
        "points": [
          "System checks mandatory fields and reference data.",
          "Validates quantities, pricing tolerances, and credit rules.",
          "Identifies missing or incorrect trade information."
        ]
      },
      {
        "heading": "Stage 5: Confirmation and Contract Matching",
        "points": [
          "Both parties verify the recorded trade terms.",
          "Confirms quantity, price, delivery location, and dates.",
          "Any differences are investigated and resolved."
        ]
      },
      {
        "heading": "Stage 6: Risk and Valuation",
        "points": [
          "Calculates open positions and market exposure.",
          "Performs Mark-to-Market (MTM) valuation.",
          "Tracks realized and unrealized P&L and credit risk.",
          "Risk monitoring continues throughout the trade lifecycle."
        ]
      },
      {
        "heading": "Stage 7: Scheduling and Logistics",
        "points": [
          "Operations arranges crude oil loading and transportation.",
          "Coordinates vessels, terminal slots, and delivery schedules.",
          "Ensures transportation arrangements meet contract requirements."
        ]
      },
      {
        "heading": "Stage 8: Loading and Actualization",
        "points": [
          "Crude oil is physically loaded onto the vessel.",
          "Records actual shipped quantity and relevant dates.",
          "Documents such as Bill of Lading (BOL) may establish contractual pricing or delivery events."
        ]
      },
      {
        "heading": "Stage 9: Final Pricing",
        "points": [
          "Floating prices are finalized when required market observations become available.",
          "Applies contractual premiums, discounts, and other adjustments.",
          "Determines the final price payable for the actual contractual quantity."
        ]
      },
      {
        "heading": "Stage 10: Invoicing",
        "points": [
          "Calculates the final invoice amount using applicable quantity and price.",
          "Includes transportation fees, taxes, and contractual adjustments.",
          "Generates invoices for the relevant buyer or seller."
        ]
      },
      {
        "heading": "Stage 11: Settlement and Payment",
        "points": [
          "Buyer or seller makes payment according to contractual obligations.",
          "Records payment receipts and outgoing payments.",
          "Reconciles invoices against actual payments."
        ]
      },
      {
        "heading": "Stage 12: Accounting and Close-Out",
        "points": [
          "Records accounting entries for the transaction.",
          "Investigates outstanding invoices, payments, and operational issues.",
          "Closes the trade after all required obligations are satisfied."
        ]
      },
      {
        "heading": "Important Lifecycle Note",
        "points": [
          "Not every trade follows all stages in a strict sequence.",
          "Risk monitoring and valuation continue throughout the lifecycle.",
          "Scheduling, documentation, pricing, and other activities may run in parallel."
        ]
      }
    ],
    "keyTakeaways": [
      "Trade Lifecycle = Opportunity to Final Settlement.",
      "Trade Capture records the deal in ETRM.",
      "Trade Validation checks data and business rules.",
      "Scheduling manages physical movement of crude oil.",
      "Actualization records the actual delivered quantity.",
      "Final Pricing determines the final contractual price.",
      "Settlement and Accounting complete the financial process."
    ],
    "examples": [
      {
        "title": "ABC Energy Physical Crude Oil Trade",
        "scenario": "ABC Energy purchases 50,000 barrels from XYZ Oil at an indicative price of $78/bbl. The indicative purchase value is $3,900,000. The trader executes and captures the deal in ETRM. After validation and confirmation, operations arranges vessel loading and transportation. Actual quantities are recorded, final pricing is calculated, and the invoice is generated. ABC Energy then settles its payment, records accounting entries, and closes the trade after all obligations are completed."
      },
      {
        "title": "Purchase and Sales Position",
        "scenario": "ABC Energy purchases 50,000 barrels at $78/bbl and sells the same quantity to a refinery at $82/bbl. Before considering freight, fees, taxes, and other adjustments, the gross trading margin is $4/bbl or $200,000."
      }
    ],
    "summary": "ABC Energy purchases 50,000 barrels of crude oil from XYZ Oil.",
    "content": "Business Scenario:\nABC Energy purchases 50,000 barrels of crude oil from XYZ Oil. Indicative purchase price: $78 per barrel. ABC Energy transports the crude oil and sells it to a refinery. The ETRM system tracks the transaction from execution to final settlement.\n\nStage 1: Market Analysis and Pre-Trade Checks:\nTrader identifies a buying or selling opportunity. Checks counterparty credit limits, trading authority, and risk limits. Ensures the company is authorized to execute the trade.\n\nStage 2: Trade Execution:\nBuyer and seller agree on commodity, grade, quantity, and price. Agree on delivery location, delivery window, and commercial terms. The transaction becomes a legally binding deal according to the agreed terms.\n\nStage 3: Trade Capture:\nTrader records the transaction in the ETRM system. System stores Trade ID, counterparty, book, commodity, quantity, and pricing. Delivery dates, locations, and contract terms are also captured.\n\nStage 4: Trade Validation:\nSystem checks mandatory fields and reference data. Validates quantities, pricing tolerances, and credit rules. Identifies missing or incorrect trade information.\n\nStage 5: Confirmation and Contract Matching:\nBoth parties verify the recorded trade terms. Confirms quantity, price, delivery location, and dates. Any differences are investigated and resolved.\n\nStage 6: Risk and Valuation:\nCalculates open positions and market exposure. Performs Mark-to-Market (MTM) valuation. Tracks realized and unrealized P&L and credit risk. Risk monitoring continues throughout the trade lifecycle.\n\nStage 7: Scheduling and Logistics:\nOperations arranges crude oil loading and transportation. Coordinates vessels, terminal slots, and delivery schedules. Ensures transportation arrangements meet contract requirements.\n\nStage 8: Loading and Actualization:\nCrude oil is physically loaded onto the vessel. Records actual shipped quantity and relevant dates. Documents such as Bill of Lading (BOL) may establish contractual pricing or delivery events.\n\nStage 9: Final Pricing:\nFloating prices are finalized when required market observations become available. Applies contractual premiums, discounts, and other adjustments. Determines the final price payable for the actual contractual quantity.\n\nStage 10: Invoicing:\nCalculates the final invoice amount using applicable quantity and price. Includes transportation fees, taxes, and contractual adjustments. Generates invoices for the relevant buyer or seller.\n\nStage 11: Settlement and Payment:\nBuyer or seller makes payment according to contractual obligations. Records payment receipts and outgoing payments. Reconciles invoices against actual payments.\n\nStage 12: Accounting and Close-Out:\nRecords accounting entries for the transaction. Investigates outstanding invoices, payments, and operational issues. Closes the trade after all required obligations are satisfied.\n\nImportant Lifecycle Note:\nNot every trade follows all stages in a strict sequence. Risk monitoring and valuation continue throughout the lifecycle. Scheduling, documentation, pricing, and other activities may run in parallel."
  },
  {
    "id": "54",
    "title": "Pricing a Crude Oil Trade",
    "category": "Oil",
    "order": 54,
    "sections": [
      {
        "heading": "1. Fixed Price",
        "points": [
          "The buyer and seller agree on a fixed price when executing the trade.",
          "The price does not change with market movements.",
          "The final invoice is calculated using the agreed price and billable quantity."
        ]
      },
      {
        "heading": "Fixed Price Calculation",
        "points": [
          "Quantity = 10,000 barrels.",
          "Agreed price = $75/bbl.",
          "Invoice amount = 10,000 × $75 = $750,000."
        ]
      },
      {
        "heading": "2. Floating Price",
        "points": [
          "The final price depends on a market benchmark observed during an agreed pricing period.",
          "The pricing formula is usually benchmark average plus or minus a contractual differential.",
          "The contract defines the benchmark, averaging dates, and pricing rules."
        ]
      },
      {
        "heading": "Floating Price Calculation",
        "points": [
          "Average benchmark price = $76.50/bbl.",
          "Contractual differential = +$1.20/bbl.",
          "Final price = $76.50 + $1.20 = $77.70/bbl.",
          "Invoice = 10,000 × $77.70 = $777,000."
        ]
      },
      {
        "heading": "3. Benchmark Price and Differential",
        "points": [
          "A benchmark is a market reference price used to calculate crude oil prices.",
          "Common benchmarks include Brent and West Texas Intermediate (WTI).",
          "A differential adjusts the benchmark based on grade, quality, location, and commercial terms.",
          "Positive differential increases the price; negative differential decreases it."
        ]
      },
      {
        "heading": "How ETRM Handles Oil Pricing",
        "points": [
          "Stores pricing type: Fixed or Floating.",
          "Maintains benchmark references and price curves.",
          "Captures pricing periods, averaging dates, and differentials.",
          "Calculates provisional and final prices.",
          "Uses finalized pricing information for invoice generation and settlement."
        ]
      }
    ],
    "keyTakeaways": [
      "Fixed Price = Price agreed upfront.",
      "Floating Price = Price determined by market observations.",
      "Benchmark = Market reference price, such as Brent or WTI.",
      "Differential = Adjustment added to or subtracted from benchmark.",
      "Final Contract Price = Benchmark Price + Differential."
    ],
    "examples": [
      {
        "title": "Fixed Price Crude Oil Purchase",
        "scenario": "ABC Energy purchases 10,000 barrels at a fixed price of $75/bbl. The invoice amount is $750,000, assuming all barrels are billable and no additional charges or adjustments apply."
      },
      {
        "title": "Floating Price Crude Oil Purchase",
        "scenario": "ABC Energy purchases 10,000 barrels using a floating pricing formula. The average Brent benchmark is $76.50/bbl and the contractual differential is +$1.20/bbl. The final price becomes $77.70/bbl and the invoice amount is $777,000, before additional charges or adjustments."
      }
    ],
    "summary": "The buyer and seller agree on a fixed price when executing the trade.",
    "content": "1. Fixed Price:\nThe buyer and seller agree on a fixed price when executing the trade. The price does not change with market movements. The final invoice is calculated using the agreed price and billable quantity.\n\nFixed Price Calculation:\nQuantity = 10,000 barrels. Agreed price = $75/bbl. Invoice amount = 10,000 × $75 = $750,000.\n\n2. Floating Price:\nThe final price depends on a market benchmark observed during an agreed pricing period. The pricing formula is usually benchmark average plus or minus a contractual differential. The contract defines the benchmark, averaging dates, and pricing rules.\n\nFloating Price Calculation:\nAverage benchmark price = $76.50/bbl. Contractual differential = +$1.20/bbl. Final price = $76.50 + $1.20 = $77.70/bbl. Invoice = 10,000 × $77.70 = $777,000.\n\n3. Benchmark Price and Differential:\nA benchmark is a market reference price used to calculate crude oil prices. Common benchmarks include Brent and West Texas Intermediate (WTI). A differential adjusts the benchmark based on grade, quality, location, and commercial terms. Positive differential increases the price; negative differential decreases it.\n\nHow ETRM Handles Oil Pricing:\nStores pricing type: Fixed or Floating. Maintains benchmark references and price curves. Captures pricing periods, averaging dates, and differentials. Calculates provisional and final prices. Uses finalized pricing information for invoice generation and settlement."
  },
  {
    "id": "55",
    "title": "Fees and Charges in Crude Oil Trading",
    "category": "Oil",
    "order": 55,
    "sections": [
      {
        "heading": "What are Fees and Charges?",
        "points": [
          "Fees and charges are additional costs apart from the crude oil purchase price.",
          "They may arise during transportation, loading, storage, inspection, and delivery.",
          "Contract terms determine which party is responsible for each charge."
        ]
      },
      {
        "heading": "Types of Fees and Charges",
        "points": [
          "Freight: Cost of transporting crude oil cargo.",
          "Insurance: Cost of insuring the cargo against specified risks.",
          "Port Charges: Costs for port services and vessel-related activities.",
          "Terminal Charges: Loading, storage, and handling costs.",
          "Demurrage: Compensation when vessel time exceeds agreed laytime.",
          "Inspection Fees: Costs of measuring quantity and checking quality.",
          "Brokerage Fees: Charges payable to brokers for facilitating trades.",
          "Quality Adjustment: Price adjustment for differences in crude oil quality.",
          "Taxes and Duties: Applicable government and customs charges."
        ]
      },
      {
        "heading": "Worked Example: Total Purchase Cost",
        "points": [
          "Crude purchase cost = $750,000.",
          "Freight = $30,000.",
          "Port and handling = $5,000.",
          "Inspection = $2,000.",
          "Total cost = $750,000 + $30,000 + $5,000 + $2,000 = $787,000."
        ]
      },
      {
        "heading": "Gross Trading Margin",
        "points": [
          "ABC Energy sells the crude oil cargo for $820,000.",
          "Total purchase and associated costs = $787,000.",
          "Gross trading margin = $820,000 - $787,000 = $33,000.",
          "Other expenses, financing, hedging, taxes, and accounting adjustments may affect final P&L."
        ]
      },
      {
        "heading": "How ETRM Handles Fees and Charges",
        "points": [
          "Stores standard fee types and applicable rates.",
          "Associates charges with trades, shipments, or contracts.",
          "Calculates applicable fees based on quantity, rates, or agreed terms.",
          "Includes relevant charges in cost calculations and invoices.",
          "Tracks actual costs against estimated costs for P&L analysis."
        ]
      }
    ],
    "keyTakeaways": [
      "Fees and Charges = Additional costs beyond commodity price.",
      "Freight = Transportation cost.",
      "Demurrage = Cost of exceeding agreed vessel laytime.",
      "Inspection = Quantity and quality verification cost.",
      "Total Cost = Commodity Cost + Applicable Charges.",
      "Gross Trading Margin = Sales Revenue - Total Cost."
    ],
    "examples": [
      {
        "title": "ABC Energy Crude Oil Purchase",
        "scenario": "ABC Energy purchases 10,000 barrels for $750,000. It incurs $30,000 freight, $5,000 port and handling charges, and $2,000 inspection fees. Total cost becomes $787,000. ABC Energy sells the cargo for $820,000, resulting in a simplified gross trading margin of $33,000."
      }
    ],
    "summary": "Fees and charges are additional costs apart from the crude oil purchase price.",
    "content": "What are Fees and Charges?:\nFees and charges are additional costs apart from the crude oil purchase price. They may arise during transportation, loading, storage, inspection, and delivery. Contract terms determine which party is responsible for each charge.\n\nTypes of Fees and Charges:\nFreight: Cost of transporting crude oil cargo. Insurance: Cost of insuring the cargo against specified risks. Port Charges: Costs for port services and vessel-related activities. Terminal Charges: Loading, storage, and handling costs. Demurrage: Compensation when vessel time exceeds agreed laytime. Inspection Fees: Costs of measuring quantity and checking quality. Brokerage Fees: Charges payable to brokers for facilitating trades. Quality Adjustment: Price adjustment for differences in crude oil quality. Taxes and Duties: Applicable government and customs charges.\n\nWorked Example: Total Purchase Cost:\nCrude purchase cost = $750,000. Freight = $30,000. Port and handling = $5,000. Inspection = $2,000. Total cost = $750,000 + $30,000 + $5,000 + $2,000 = $787,000.\n\nGross Trading Margin:\nABC Energy sells the crude oil cargo for $820,000. Total purchase and associated costs = $787,000. Gross trading margin = $820,000 - $787,000 = $33,000. Other expenses, financing, hedging, taxes, and accounting adjustments may affect final P&L.\n\nHow ETRM Handles Fees and Charges:\nStores standard fee types and applicable rates. Associates charges with trades, shipments, or contracts. Calculates applicable fees based on quantity, rates, or agreed terms. Includes relevant charges in cost calculations and invoices. Tracks actual costs against estimated costs for P&L analysis."
  },
  {
    "id": "56",
    "title": "What is Crude Oil?",
    "category": "Oil",
    "order": 56,
    "sections": [
      {
        "heading": "What is Crude Oil?",
        "points": [
          "Crude oil is a naturally occurring liquid petroleum extracted from underground reservoirs.",
          "It contains a mixture of hydrocarbons and other substances.",
          "Different crude oils have different chemical properties, which affect their market value and refining process.",
          "Two important characteristics are API Gravity and Sulfur Content."
        ]
      },
      {
        "heading": "1. API Gravity",
        "points": [
          "API gravity measures how light or heavy crude oil is compared with water.",
          "Higher API gravity means lighter crude oil.",
          "Lower API gravity means heavier crude oil.",
          "Formula: API = (141.5 / Specific Gravity at 60°F) - 131.5."
        ]
      },
      {
        "heading": "Crude Oil Classification by API Gravity",
        "points": [
          "Light Crude: Generally above 31.1° API.",
          "Medium Crude: Approximately 22.3°–31.1° API.",
          "Heavy Crude: Below approximately 22.3° API."
        ]
      },
      {
        "heading": "Why API Gravity Matters",
        "points": [
          "Light crude generally produces a higher proportion of lighter petroleum products.",
          "Heavy crude may require more complex refining processes.",
          "API gravity influences crude oil pricing and refinery preferences."
        ]
      },
      {
        "heading": "2. Sweet vs Sour Crude",
        "points": [
          "Sweet crude contains relatively low sulfur content.",
          "Sour crude contains relatively high sulfur content.",
          "Higher sulfur content generally requires additional refining and desulfurization.",
          "Sulfur content affects refining costs and commercial value."
        ]
      },
      {
        "heading": "Commercial Importance in ETRM",
        "points": [
          "Crude grade and quality specifications are captured in trade contracts.",
          "API gravity and sulfur content influence pricing differentials.",
          "Quality adjustments may be applied when actual crude quality differs from contractual specifications.",
          "These characteristics help traders select suitable crude for specific refineries."
        ]
      }
    ],
    "keyTakeaways": [
      "Crude Oil = Naturally occurring liquid petroleum.",
      "API Gravity = Measures how light or heavy crude oil is.",
      "Higher API = Lighter crude; Lower API = Heavier crude.",
      "Sweet = Low sulfur; Sour = High sulfur.",
      "Crude quality directly influences pricing and refining costs."
    ],
    "examples": [
      {
        "title": "Comparing Two Crude Oils",
        "scenario": "Crude A has 38° API and Crude B has 18° API. Crude A is light crude, while Crude B is heavy crude. Crude A generally produces a higher proportion of lighter products, while Crude B may require more complex refining."
      },
      {
        "title": "Sweet vs Sour Crude",
        "scenario": "Crude A contains 0.3% sulfur, while Crude B contains 2.5% sulfur. Crude A is relatively sweet, while Crude B is sour. Crude B generally requires more desulfurization during refining."
      }
    ],
    "summary": "Crude oil is a naturally occurring liquid petroleum extracted from underground reservoirs.",
    "content": "What is Crude Oil?:\nCrude oil is a naturally occurring liquid petroleum extracted from underground reservoirs. It contains a mixture of hydrocarbons and other substances. Different crude oils have different chemical properties, which affect their market value and refining process. Two important characteristics are API Gravity and Sulfur Content.\n\n1. API Gravity:\nAPI gravity measures how light or heavy crude oil is compared with water. Higher API gravity means lighter crude oil. Lower API gravity means heavier crude oil. Formula: API = (141.5 / Specific Gravity at 60°F) - 131.5.\n\nCrude Oil Classification by API Gravity:\nLight Crude: Generally above 31.1° API. Medium Crude: Approximately 22.3°–31.1° API. Heavy Crude: Below approximately 22.3° API.\n\nWhy API Gravity Matters:\nLight crude generally produces a higher proportion of lighter petroleum products. Heavy crude may require more complex refining processes. API gravity influences crude oil pricing and refinery preferences.\n\n2. Sweet vs Sour Crude:\nSweet crude contains relatively low sulfur content. Sour crude contains relatively high sulfur content. Higher sulfur content generally requires additional refining and desulfurization. Sulfur content affects refining costs and commercial value.\n\nCommercial Importance in ETRM:\nCrude grade and quality specifications are captured in trade contracts. API gravity and sulfur content influence pricing differentials. Quality adjustments may be applied when actual crude quality differs from contractual specifications. These characteristics help traders select suitable crude for specific refineries."
  },
  {
    "id": "57",
    "title": "Brent vs WTI vs Dubai",
    "category": "Oil",
    "order": 57,
    "sections": [
      {
        "heading": "What are Crude Oil Benchmarks?",
        "points": [
          "A benchmark is a reference price used to determine crude oil trading prices.",
          "Different regions use different benchmarks based on their oil markets.",
          "The three important benchmarks are Brent, WTI, and Dubai."
        ]
      },
      {
        "heading": "1. Brent Crude",
        "points": [
          "Origin: North Sea region.",
          "Major international crude oil benchmark.",
          "Used for pricing many internationally traded and seaborne crude oil transactions.",
          "Important reference for European, African, and global crude oil markets."
        ]
      },
      {
        "heading": "2. WTI (West Texas Intermediate)",
        "points": [
          "Origin: United States.",
          "Major benchmark for the US crude oil market.",
          "Associated with Cushing, Oklahoma, as the physical delivery location for the benchmark futures contract.",
          "Commonly used in North American crude oil pricing."
        ]
      },
      {
        "heading": "3. Dubai Crude",
        "points": [
          "Associated with Middle Eastern crude oil pricing.",
          "Used as a regional reference for many Middle Eastern crude oil sales to Asia.",
          "Often discussed alongside Oman crude in Asian crude oil pricing.",
          "Important benchmark reference for Asian refiners."
        ]
      },
      {
        "heading": "Comparison of Major Benchmarks",
        "points": [
          "Brent: North Sea origin; major international benchmark.",
          "WTI: US origin; major North American benchmark.",
          "Dubai: Middle Eastern reference; widely used in Asian crude oil pricing."
        ]
      },
      {
        "heading": "Importance in ETRM",
        "points": [
          "Pricing formulas reference benchmarks such as Brent, WTI, and Dubai.",
          "ETRM captures the applicable benchmark and pricing period.",
          "Market price curves are used for trade valuation and MTM.",
          "Contractual differentials adjust benchmark prices for crude quality, location, and commercial terms."
        ]
      }
    ],
    "keyTakeaways": [
      "Brent = Major international crude oil benchmark.",
      "WTI = Major US crude oil benchmark.",
      "Dubai = Important Middle Eastern benchmark for Asian crude pricing.",
      "Benchmark = Reference price, not necessarily the final contractual price.",
      "Final Price = Benchmark + or - Contractual Differential."
    ],
    "examples": [
      {
        "title": "Crude Oil Pricing Using Benchmarks",
        "scenario": "ABC Energy purchases 10,000 barrels of crude oil using a Brent-linked pricing formula. The average Brent price during the agreed pricing period is $80/bbl, and the contractual differential is +$2/bbl. The final price is $82/bbl, resulting in a purchase value of $820,000 before other applicable charges."
      }
    ],
    "summary": "A benchmark is a reference price used to determine crude oil trading prices.",
    "content": "What are Crude Oil Benchmarks?:\nA benchmark is a reference price used to determine crude oil trading prices. Different regions use different benchmarks based on their oil markets. The three important benchmarks are Brent, WTI, and Dubai.\n\n1. Brent Crude:\nOrigin: North Sea region. Major international crude oil benchmark. Used for pricing many internationally traded and seaborne crude oil transactions. Important reference for European, African, and global crude oil markets.\n\n2. WTI (West Texas Intermediate):\nOrigin: United States. Major benchmark for the US crude oil market. Associated with Cushing, Oklahoma, as the physical delivery location for the benchmark futures contract. Commonly used in North American crude oil pricing.\n\n3. Dubai Crude:\nAssociated with Middle Eastern crude oil pricing. Used as a regional reference for many Middle Eastern crude oil sales to Asia. Often discussed alongside Oman crude in Asian crude oil pricing. Important benchmark reference for Asian refiners.\n\nComparison of Major Benchmarks:\nBrent: North Sea origin; major international benchmark. WTI: US origin; major North American benchmark. Dubai: Middle Eastern reference; widely used in Asian crude oil pricing.\n\nImportance in ETRM:\nPricing formulas reference benchmarks such as Brent, WTI, and Dubai. ETRM captures the applicable benchmark and pricing period. Market price curves are used for trade valuation and MTM. Contractual differentials adjust benchmark prices for crude quality, location, and commercial terms."
  },
  {
    "id": "58",
    "title": "Why Do We Need Crude Oil Benchmarks?",
    "category": "Oil",
    "order": 58,
    "sections": [
      {
        "heading": "Why Do We Need Benchmarks?",
        "points": [
          "Buyers and sellers may not agree on a fixed price months before delivery.",
          "A benchmark provides a transparent and widely accepted market reference price.",
          "A contractual differential adjusts the benchmark for the specific crude cargo.",
          "This allows both parties to calculate the final price using agreed pricing rules."
        ]
      },
      {
        "heading": "Benchmark-Based Pricing Formula",
        "points": [
          "Final Price = Average Benchmark Price + Differential.",
          "Benchmark provides the reference price, such as Brent or WTI.",
          "Differential may be positive or negative based on quality, location, and commercial terms.",
          "The contract defines the benchmark and pricing period."
        ]
      },
      {
        "heading": "Practical Price Calculation",
        "points": [
          "Average Brent Price = $78.00/bbl.",
          "Contractual Differential = +$1.50/bbl.",
          "Final Price = $78.00 + $1.50 = $79.50/bbl.",
          "Actual Quantity = 25,000 barrels.",
          "Cargo Value = 25,000 × $79.50 = $1,987,500."
        ]
      },
      {
        "heading": "Importance in ETRM",
        "points": [
          "ETRM stores the benchmark reference and contractual differential.",
          "Retrieves or maintains market prices for the agreed pricing period.",
          "Calculates the final contractual price when pricing observations are available.",
          "Uses the calculated price for trade valuation and invoicing."
        ]
      }
    ],
    "keyTakeaways": [
      "Benchmark = Transparent market reference price.",
      "Differential = Adjustment to the benchmark.",
      "Final Price = Average Benchmark + Differential.",
      "Cargo Value = Final Price × Actual Billable Quantity.",
      "The contract determines the benchmark and pricing period."
    ],
    "examples": [
      {
        "title": "Brent-Linked Crude Oil Purchase",
        "scenario": "ABC Energy purchases 25,000 barrels of crude oil at Average Brent + $1.50/bbl. Average Brent during the agreed pricing period is $78.00/bbl. The final price becomes $79.50/bbl, and the cargo value is $1,987,500 before fees, taxes, and other adjustments."
      }
    ],
    "summary": "Buyers and sellers may not agree on a fixed price months before delivery.",
    "content": "Why Do We Need Benchmarks?:\nBuyers and sellers may not agree on a fixed price months before delivery. A benchmark provides a transparent and widely accepted market reference price. A contractual differential adjusts the benchmark for the specific crude cargo. This allows both parties to calculate the final price using agreed pricing rules.\n\nBenchmark-Based Pricing Formula:\nFinal Price = Average Benchmark Price + Differential. Benchmark provides the reference price, such as Brent or WTI. Differential may be positive or negative based on quality, location, and commercial terms. The contract defines the benchmark and pricing period.\n\nPractical Price Calculation:\nAverage Brent Price = $78.00/bbl. Contractual Differential = +$1.50/bbl. Final Price = $78.00 + $1.50 = $79.50/bbl. Actual Quantity = 25,000 barrels. Cargo Value = 25,000 × $79.50 = $1,987,500.\n\nImportance in ETRM:\nETRM stores the benchmark reference and contractual differential. Retrieves or maintains market prices for the agreed pricing period. Calculates the final contractual price when pricing observations are available. Uses the calculated price for trade valuation and invoicing."
  },
  {
    "id": "59",
    "title": "Physical Trade vs Financial Trade",
    "category": "Oil",
    "order": 59,
    "sections": [
      {
        "heading": "1. Physical Trade",
        "points": [
          "A physical trade involves buying or selling an actual commodity.",
          "The commodity is physically delivered from the seller to the buyer.",
          "It involves quantity, loading, transportation, delivery, and settlement.",
          "Example: ABC Energy purchases 20,000 barrels of crude oil from XYZ Oil and transports it to its refinery."
        ]
      },
      {
        "heading": "2. Financial Trade",
        "points": [
          "A financial trade provides exposure to commodity price movements without requiring physical delivery.",
          "It is commonly used for hedging or speculation.",
          "Profit or loss is generally settled financially based on the contract's settlement rules.",
          "Example: ABC Energy enters into a crude oil futures contract at $75/bbl. If the price rises to $80/bbl, the gain is $50,000."
        ]
      },
      {
        "heading": "3. Key Differences",
        "points": [
          "Physical trade involves actual commodity delivery; financial trade generally does not.",
          "Physical trade includes logistics and delivery obligations; financial trade focuses on price exposure.",
          "Both involve financial settlement, but physical trades also require delivery and quantity reconciliation."
        ]
      }
    ],
    "keyTakeaways": [
      "Physical trade = Actual commodity delivery.",
      "Financial trade = Exposure to commodity price movements.",
      "Physical trades involve loading, transportation, and delivery.",
      "Financial trades are commonly used for hedging and speculation.",
      "Both can create financial gains or losses."
    ],
    "examples": [
      {
        "title": "Physical Trade Example",
        "scenario": "ABC Energy purchases 20,000 barrels of crude oil from XYZ Oil. The oil is transported to ABC Energy's refinery. This is a physical trade because the actual commodity is delivered."
      },
      {
        "title": "Financial Trade Example",
        "scenario": "ABC Energy enters into a futures contract for 10,000 barrels at $75/bbl. The settlement price increases to $80/bbl. The simplified financial gain is (80 - 75) × 10,000 = $50,000, before fees and other contract-specific adjustments."
      }
    ],
    "summary": "A physical trade involves buying or selling an actual commodity.",
    "content": "1. Physical Trade:\nA physical trade involves buying or selling an actual commodity. The commodity is physically delivered from the seller to the buyer. It involves quantity, loading, transportation, delivery, and settlement. Example: ABC Energy purchases 20,000 barrels of crude oil from XYZ Oil and transports it to its refinery.\n\n2. Financial Trade:\nA financial trade provides exposure to commodity price movements without requiring physical delivery. It is commonly used for hedging or speculation. Profit or loss is generally settled financially based on the contract's settlement rules. Example: ABC Energy enters into a crude oil futures contract at $75/bbl. If the price rises to $80/bbl, the gain is $50,000.\n\n3. Key Differences:\nPhysical trade involves actual commodity delivery; financial trade generally does not. Physical trade includes logistics and delivery obligations; financial trade focuses on price exposure. Both involve financial settlement, but physical trades also require delivery and quantity reconciliation."
  },
  {
    "id": "60",
    "title": "Spot Contract vs Term Contract",
    "category": "Oil",
    "order": 60,
    "sections": [
      {
        "heading": "1. Spot Contract",
        "points": [
          "A spot contract is a transaction for relatively prompt delivery of a commodity.",
          "The commodity is purchased or sold for delivery within an agreed prompt delivery window.",
          "The exact delivery period depends on the market and contract terms.",
          "Example: ABC Energy purchases 10,000 barrels of crude oil today for delivery within the agreed prompt window."
        ]
      },
      {
        "heading": "2. Term Contract",
        "points": [
          "A term contract is an agreement to buy or sell a commodity over a longer period.",
          "It usually involves repeated deliveries under one contractual arrangement.",
          "The contract defines duration, quantity, pricing formula, delivery schedule, and payment terms.",
          "Example: ABC Energy signs a 12-month contract to receive 50,000 barrels every month at Average Brent + $1.20/bbl."
        ]
      },
      {
        "heading": "3. Key Differences",
        "points": [
          "Spot contract = Relatively prompt delivery.",
          "Term contract = Repeated deliveries over an agreed period.",
          "Spot contracts generally cover individual transactions, while term contracts establish an ongoing supply arrangement.",
          "Both contracts can use fixed or floating pricing, depending on the agreement."
        ]
      }
    ],
    "keyTakeaways": [
      "Spot = Relatively prompt delivery.",
      "Term = Long-term supply arrangement.",
      "Term contracts usually involve multiple deliveries.",
      "Pricing can be fixed or floating in either contract.",
      "Always check the agreed delivery window and contract terms."
    ],
    "examples": [
      {
        "title": "Spot Contract Example",
        "scenario": "ABC Energy purchases 10,000 barrels of crude oil for delivery within the agreed prompt delivery window. This is a spot contract."
      },
      {
        "title": "Term Contract Example",
        "scenario": "ABC Energy signs a 12-month agreement with XYZ Oil for 50,000 barrels every month, priced at Average Brent + $1.20/bbl. This is a term contract because deliveries repeat over the contract period."
      }
    ],
    "summary": "A spot contract is a transaction for relatively prompt delivery of a commodity.",
    "content": "1. Spot Contract:\nA spot contract is a transaction for relatively prompt delivery of a commodity. The commodity is purchased or sold for delivery within an agreed prompt delivery window. The exact delivery period depends on the market and contract terms. Example: ABC Energy purchases 10,000 barrels of crude oil today for delivery within the agreed prompt window.\n\n2. Term Contract:\nA term contract is an agreement to buy or sell a commodity over a longer period. It usually involves repeated deliveries under one contractual arrangement. The contract defines duration, quantity, pricing formula, delivery schedule, and payment terms. Example: ABC Energy signs a 12-month contract to receive 50,000 barrels every month at Average Brent + $1.20/bbl.\n\n3. Key Differences:\nSpot contract = Relatively prompt delivery. Term contract = Repeated deliveries over an agreed period. Spot contracts generally cover individual transactions, while term contracts establish an ongoing supply arrangement. Both contracts can use fixed or floating pricing, depending on the agreement."
  },
  {
    "id": "61",
    "title": "Buy-side vs Sell-side Trades",
    "category": "Oil",
    "order": 61,
    "sections": [
      {
        "heading": "1. Buy-side Trade",
        "points": [
          "A buy-side trade means the company purchases a commodity from a supplier.",
          "The company acts as the buyer and records a purchase.",
          "It generally creates an Accounts Payable (AP) obligation.",
          "Example: ABC Energy purchases crude oil from XYZ Oil. ABC Energy is the buyer and XYZ Oil is the seller."
        ]
      },
      {
        "heading": "2. Sell-side Trade",
        "points": [
          "A sell-side trade means the company sells a commodity to a customer.",
          "The company acts as the seller and records a sale.",
          "It generally creates an Accounts Receivable (AR) obligation.",
          "Example: ABC Energy sells crude oil to a refinery. ABC Energy is the seller and the refinery is the buyer."
        ]
      },
      {
        "heading": "3. Key Differences",
        "points": [
          "Buy-side = Company purchases a commodity.",
          "Sell-side = Company sells a commodity.",
          "Buy-side generally creates AP because the company needs to pay the supplier.",
          "Sell-side generally creates AR because the customer needs to pay the company."
        ]
      }
    ],
    "keyTakeaways": [
      "Buy-side = Purchase = Buyer = Accounts Payable.",
      "Sell-side = Sale = Seller = Accounts Receivable.",
      "AP means money the company owes to suppliers.",
      "AR means money customers owe to the company.",
      "The same company can execute both buy-side and sell-side trades."
    ],
    "examples": [
      {
        "title": "Buy-side Trade Example",
        "scenario": "ABC Energy purchases 20,000 barrels of crude oil from XYZ Oil for $75/bbl. ABC Energy records a purchase worth $1,500,000 and generally has an AP obligation to XYZ Oil."
      },
      {
        "title": "Sell-side Trade Example",
        "scenario": "ABC Energy sells 20,000 barrels of crude oil to a refinery for $80/bbl. ABC Energy records a sale worth $1,600,000 and generally has an AR obligation from the refinery."
      }
    ],
    "summary": "A buy-side trade means the company purchases a commodity from a supplier.",
    "content": "1. Buy-side Trade:\nA buy-side trade means the company purchases a commodity from a supplier. The company acts as the buyer and records a purchase. It generally creates an Accounts Payable (AP) obligation. Example: ABC Energy purchases crude oil from XYZ Oil. ABC Energy is the buyer and XYZ Oil is the seller.\n\n2. Sell-side Trade:\nA sell-side trade means the company sells a commodity to a customer. The company acts as the seller and records a sale. It generally creates an Accounts Receivable (AR) obligation. Example: ABC Energy sells crude oil to a refinery. ABC Energy is the seller and the refinery is the buyer.\n\n3. Key Differences:\nBuy-side = Company purchases a commodity. Sell-side = Company sells a commodity. Buy-side generally creates AP because the company needs to pay the supplier. Sell-side generally creates AR because the customer needs to pay the company."
  },
  {
    "id": "62",
    "title": "Incoterms — FOB vs CIF",
    "category": "Oil",
    "order": 62,
    "sections": [
      {
        "heading": "1. What are Incoterms?",
        "points": [
          "Incoterms are internationally recognized trade rules published by the International Chamber of Commerce (ICC).",
          "They define responsibilities, costs, delivery obligations, and risk transfer between buyers and sellers.",
          "FOB and CIF are commonly used in international commodity trading."
        ]
      },
      {
        "heading": "2. FOB — Free On Board",
        "points": [
          "Seller delivers the goods on board the vessel nominated by the buyer at the agreed shipment port.",
          "Seller handles export clearance where required.",
          "Buyer generally arranges and pays for main sea transportation and insurance.",
          "Risk transfers from seller to buyer when the goods are on board the vessel at the shipment port."
        ]
      },
      {
        "heading": "3. CIF — Cost, Insurance and Freight",
        "points": [
          "Seller arranges and pays for freight to the agreed destination port.",
          "Seller also obtains the required cargo insurance.",
          "Risk transfers to the buyer when the goods are loaded on board the vessel at the shipment port, not when they arrive at destination.",
          "Buyer generally handles import clearance and destination-side obligations."
        ]
      },
      {
        "heading": "4. Key Differences",
        "points": [
          "FOB: Buyer arranges main sea freight and insurance.",
          "CIF: Seller arranges and pays for main sea freight and insurance.",
          "Under both FOB and CIF, risk generally transfers when goods are loaded on board at the shipment port.",
          "CIF seller pays more transportation-related costs, but this does not mean the seller carries the transit risk until destination."
        ]
      }
    ],
    "keyTakeaways": [
      "Incoterms define buyer and seller responsibilities, costs, and risk transfer.",
      "FOB = Buyer arranges main freight and insurance.",
      "CIF = Seller arranges and pays freight and insurance.",
      "Under both FOB and CIF, risk transfers when goods are loaded on board at the shipment port.",
      "Cost responsibility and risk transfer are two different concepts."
    ],
    "examples": [
      {
        "title": "FOB Example",
        "scenario": "ABC Energy purchases crude oil from XYZ Oil on FOB terms. XYZ Oil loads the crude onto ABC Energy's nominated vessel. ABC Energy arranges the main sea transportation and insurance. Risk transfers when the crude is loaded on board."
      },
      {
        "title": "CIF Example",
        "scenario": "ABC Energy purchases crude oil from XYZ Oil on CIF terms. XYZ Oil arranges and pays for freight and cargo insurance to the agreed destination port. However, risk transfers to ABC Energy when the crude is loaded on board at the shipment port."
      }
    ],
    "summary": "Incoterms are internationally recognized trade rules published by the International Chamber of Commerce (ICC).",
    "content": "1. What are Incoterms?:\nIncoterms are internationally recognized trade rules published by the International Chamber of Commerce (ICC). They define responsibilities, costs, delivery obligations, and risk transfer between buyers and sellers. FOB and CIF are commonly used in international commodity trading.\n\n2. FOB — Free On Board:\nSeller delivers the goods on board the vessel nominated by the buyer at the agreed shipment port. Seller handles export clearance where required. Buyer generally arranges and pays for main sea transportation and insurance. Risk transfers from seller to buyer when the goods are on board the vessel at the shipment port.\n\n3. CIF — Cost, Insurance and Freight:\nSeller arranges and pays for freight to the agreed destination port. Seller also obtains the required cargo insurance. Risk transfers to the buyer when the goods are loaded on board the vessel at the shipment port, not when they arrive at destination. Buyer generally handles import clearance and destination-side obligations.\n\n4. Key Differences:\nFOB: Buyer arranges main sea freight and insurance. CIF: Seller arranges and pays for main sea freight and insurance. Under both FOB and CIF, risk generally transfers when goods are loaded on board at the shipment port. CIF seller pays more transportation-related costs, but this does not mean the seller carries the transit risk until destination."
  },
  {
    "id": "63",
    "title": "Pricing Dates and Pricing Periods",
    "category": "Oil",
    "order": 63,
    "sections": [
      {
        "heading": "1. What is a Pricing Period?",
        "points": [
          "A pricing period is the agreed date range used to calculate the commodity price.",
          "For floating-price trades, the system collects benchmark prices during this period.",
          "The final price is calculated when the required market price observations become available.",
          "Example: Average Brent from 10 October to 15 October + $1.50/bbl."
        ]
      },
      {
        "heading": "2. Important Trade Dates",
        "points": [
          "Trade Date: Date when the trade is executed.",
          "Contract Date: Date associated with the contractual agreement.",
          "Loading Date: Date when the cargo is loaded.",
          "Bill of Lading (B/L) Date: Date recorded on the Bill of Lading.",
          "Pricing Date: Date used to determine the relevant market price.",
          "Delivery Date: Date the commodity is delivered.",
          "Invoice Date: Date the invoice is issued.",
          "Due Date: Date payment is contractually due."
        ]
      },
      {
        "heading": "3. Floating Pricing Example",
        "points": [
          "ABC Energy purchases 10,000 barrels of crude oil.",
          "Contract formula: Average Brent from 10 October to 12 October + $1.00/bbl.",
          "Benchmark observations: 10 October = $75, 11 October = $77, 12 October = $78.",
          "Average Brent = ($75 + $77 + $78) / 3 = $76.67/bbl.",
          "Final price = $76.67 + $1.00 = $77.67/bbl.",
          "Invoice amount = 10,000 × $77.67 = $776,700."
        ]
      },
      {
        "heading": "4. How ETRM Handles Pricing",
        "points": [
          "Trade capture stores the pricing formula, benchmark, differential, and pricing period.",
          "The system tracks the required price observations.",
          "Once observations are available, it calculates the average benchmark and final price.",
          "The final price is then used for valuation and invoicing, subject to contract terms."
        ]
      }
    ],
    "keyTakeaways": [
      "Pricing period = Agreed date range used to calculate the price.",
      "Pricing date = Date used to determine a market price observation.",
      "Trade date and pricing dates can be different.",
      "Floating prices may not be final on the trade date.",
      "Final price = Average benchmark price + Differential.",
      "ETRM tracks pricing periods and calculates the final price when observations are available."
    ],
    "examples": [
      {
        "title": "Floating Price Calculation",
        "scenario": "ABC Energy purchases 10,000 barrels. The contract says Average Brent from 10–12 October + $1/bbl. Brent prices are $75, $77, and $78. Average = $76.67/bbl. Final price = $77.67/bbl. Invoice amount = 10,000 × $77.67 = $776,700."
      }
    ],
    "summary": "A pricing period is the agreed date range used to calculate the commodity price.",
    "content": "1. What is a Pricing Period?:\nA pricing period is the agreed date range used to calculate the commodity price. For floating-price trades, the system collects benchmark prices during this period. The final price is calculated when the required market price observations become available. Example: Average Brent from 10 October to 15 October + $1.50/bbl.\n\n2. Important Trade Dates:\nTrade Date: Date when the trade is executed. Contract Date: Date associated with the contractual agreement. Loading Date: Date when the cargo is loaded. Bill of Lading (B/L) Date: Date recorded on the Bill of Lading. Pricing Date: Date used to determine the relevant market price. Delivery Date: Date the commodity is delivered. Invoice Date: Date the invoice is issued. Due Date: Date payment is contractually due.\n\n3. Floating Pricing Example:\nABC Energy purchases 10,000 barrels of crude oil. Contract formula: Average Brent from 10 October to 12 October + $1.00/bbl. Benchmark observations: 10 October = $75, 11 October = $77, 12 October = $78. Average Brent = ($75 + $77 + $78) / 3 = $76.67/bbl. Final price = $76.67 + $1.00 = $77.67/bbl. Invoice amount = 10,000 × $77.67 = $776,700.\n\n4. How ETRM Handles Pricing:\nTrade capture stores the pricing formula, benchmark, differential, and pricing period. The system tracks the required price observations. Once observations are available, it calculates the average benchmark and final price. The final price is then used for valuation and invoicing, subject to contract terms."
  },
  {
    "id": "64",
    "title": "What Is Trade Capture?",
    "category": "Oil",
    "order": 64,
    "sections": [
      {
        "heading": "1. What Is Trade Capture?",
        "points": [
          "Trade capture means recording an executed commercial transaction in the ETRM system.",
          "After the trader agrees on deal terms with the counterparty, the trade is entered into ETRM.",
          "It creates the official system record used by risk, operations, settlement, and accounting teams."
        ]
      },
      {
        "heading": "2. Trade Capture Example",
        "points": [
          "Trade ID: TRD-50001",
          "Trade Type: Physical",
          "Counterparty: XYZ Oil",
          "Commodity: Crude Oil",
          "Buy/Sell: Buy",
          "Book: Oil Trading",
          "Quantity: 50,000 BBL",
          "Currency: USD",
          "Price Formula: Brent + $1/bbl",
          "Incoterm: FOB",
          "Delivery Window: 10–15 November"
        ]
      },
      {
        "heading": "3. Important Trade Capture Fields",
        "points": [
          "Trade ID: Unique identifier for the transaction.",
          "Counterparty: Company on the other side of the trade.",
          "Book: Internal trading portfolio where the trade is recorded.",
          "Commodity: Product being traded, such as crude oil.",
          "Buy/Sell: Transaction direction.",
          "Quantity and UOM: Contracted volume and unit of measurement, such as 50,000 BBL.",
          "Price: Fixed price or floating pricing formula.",
          "Currency: Currency used for the transaction.",
          "Delivery Location: Location where the commodity must be delivered.",
          "Incoterm: Defines agreed delivery responsibilities, costs, and risk transfer.",
          "Trade Date and Delivery Date: Date of execution and agreed delivery date or window.",
          "Payment Terms: Defines when payment is due."
        ]
      },
      {
        "heading": "4. Why Is Trade Capture Important?",
        "points": [
          "Creates a central record of the executed deal.",
          "Provides trade information to risk management and valuation.",
          "Supports scheduling, logistics, invoicing, and settlement.",
          "Incorrect trade details can cause pricing, delivery, and financial errors."
        ]
      }
    ],
    "keyTakeaways": [
      "Trade capture = Recording an executed deal in ETRM.",
      "Trade ID uniquely identifies each transaction.",
      "Counterparty = Other company involved in the trade.",
      "Book = Internal trading portfolio.",
      "Quantity, price, currency, and delivery terms are essential fields.",
      "Accurate trade capture supports the entire trade lifecycle."
    ],
    "examples": [
      {
        "title": "Crude Oil Trade Capture Example",
        "scenario": "ABC Energy purchases 50,000 barrels of crude oil from XYZ Oil. The trader records the physical buy trade in ETRM with Trade ID TRD-50001, price formula Brent + $1/bbl, FOB terms, and delivery window 10–15 November. This record is used by other teams to manage risk, delivery, pricing, and settlement."
      }
    ],
    "summary": "Trade capture means recording an executed commercial transaction in the ETRM system.",
    "content": "1. What Is Trade Capture?:\nTrade capture means recording an executed commercial transaction in the ETRM system. After the trader agrees on deal terms with the counterparty, the trade is entered into ETRM. It creates the official system record used by risk, operations, settlement, and accounting teams.\n\n2. Trade Capture Example:\nTrade ID: TRD-50001 Trade Type: Physical Counterparty: XYZ Oil Commodity: Crude Oil Buy/Sell: Buy Book: Oil Trading Quantity: 50,000 BBL Currency: USD Price Formula: Brent + $1/bbl Incoterm: FOB Delivery Window: 10–15 November\n\n3. Important Trade Capture Fields:\nTrade ID: Unique identifier for the transaction. Counterparty: Company on the other side of the trade. Book: Internal trading portfolio where the trade is recorded. Commodity: Product being traded, such as crude oil. Buy/Sell: Transaction direction. Quantity and UOM: Contracted volume and unit of measurement, such as 50,000 BBL. Price: Fixed price or floating pricing formula. Currency: Currency used for the transaction. Delivery Location: Location where the commodity must be delivered. Incoterm: Defines agreed delivery responsibilities, costs, and risk transfer. Trade Date and Delivery Date: Date of execution and agreed delivery date or window. Payment Terms: Defines when payment is due.\n\n4. Why Is Trade Capture Important?:\nCreates a central record of the executed deal. Provides trade information to risk management and valuation. Supports scheduling, logistics, invoicing, and settlement. Incorrect trade details can cause pricing, delivery, and financial errors."
  },
  {
    "id": "65",
    "title": "What Is a Book in ETRM?",
    "category": "Oil",
    "order": 65,
    "sections": [
      {
        "heading": "1. What Is a Book?",
        "points": [
          "A Book is an internal grouping of trading transactions in an ETRM system.",
          "It helps organize trades based on commodity, business activity, trading strategy, or portfolio.",
          "A trader may manage multiple books depending on the company's configuration."
        ]
      },
      {
        "heading": "2. Examples of Books",
        "points": [
          "Crude Oil Trading Book: Contains crude oil trades.",
          "Refined Products Book: Contains gasoline, diesel, and other refined product trades.",
          "Gas Trading Book: Contains natural gas trades.",
          "Power Trading Book: Contains electricity trades."
        ]
      },
      {
        "heading": "3. Why Are Books Important?",
        "points": [
          "Organize trading transactions.",
          "Track positions and commodity exposure.",
          "Monitor trading risk.",
          "Calculate and report P&L for different trading portfolios."
        ]
      },
      {
        "heading": "4. Book Example",
        "points": [
          "ABC Energy has a Crude Oil Trading Book and a Gas Trading Book.",
          "A purchase of 50,000 barrels of crude oil is assigned to the Crude Oil Trading Book.",
          "The ETRM system uses the book assignment to organize the trade and include it in relevant position, risk, and P&L reports."
        ]
      }
    ],
    "keyTakeaways": [
      "Book = Internal grouping of trading transactions.",
      "Books help organize trades by commodity or trading activity.",
      "Books are used for position, risk, and P&L reporting.",
      "A trader can manage multiple books.",
      "Every trade is assigned to a book based on company configuration."
    ],
    "examples": [
      {
        "title": "Crude Oil Book Example",
        "scenario": "ABC Energy records a purchase of 50,000 barrels of crude oil in its Crude Oil Trading Book. The trade is grouped with other crude oil transactions for position tracking, risk monitoring, and P&L reporting."
      }
    ],
    "summary": "A Book is an internal grouping of trading transactions in an ETRM system.",
    "content": "1. What Is a Book?:\nA Book is an internal grouping of trading transactions in an ETRM system. It helps organize trades based on commodity, business activity, trading strategy, or portfolio. A trader may manage multiple books depending on the company's configuration.\n\n2. Examples of Books:\nCrude Oil Trading Book: Contains crude oil trades. Refined Products Book: Contains gasoline, diesel, and other refined product trades. Gas Trading Book: Contains natural gas trades. Power Trading Book: Contains electricity trades.\n\n3. Why Are Books Important?:\nOrganize trading transactions. Track positions and commodity exposure. Monitor trading risk. Calculate and report P&L for different trading portfolios.\n\n4. Book Example:\nABC Energy has a Crude Oil Trading Book and a Gas Trading Book. A purchase of 50,000 barrels of crude oil is assigned to the Crude Oil Trading Book. The ETRM system uses the book assignment to organize the trade and include it in relevant position, risk, and P&L reports."
  },
  {
    "id": "66",
    "title": "What Is a Contract?",
    "category": "Oil",
    "order": 66,
    "sections": [
      {
        "heading": "1. What Is a Contract?",
        "points": [
          "A contract is a legally binding commercial agreement between two parties.",
          "It defines the terms and conditions under which commodities will be purchased or sold.",
          "It specifies quantity, pricing, delivery, payment terms, and quality requirements."
        ]
      },
      {
        "heading": "2. Contract Example",
        "points": [
          "Seller: XYZ Oil",
          "Buyer: ABC Energy",
          "Commodity: Crude Oil",
          "Quantity: 50,000 barrels",
          "Price: Brent + $1/bbl",
          "Delivery: FOB",
          "Delivery Period: 10–15 November",
          "Payment Terms: 30 days",
          "Quality: Agreed crude oil specifications."
        ]
      },
      {
        "heading": "3. Contract vs Trade vs Delivery vs Invoice",
        "points": [
          "Contract: Commercial agreement defining the terms between two parties.",
          "Trade: Executed commercial transaction recorded in ETRM.",
          "Delivery: Physical movement of the commodity or fulfilment of a delivery obligation.",
          "Invoice: Financial document requesting payment for goods or services."
        ]
      },
      {
        "heading": "4. Relationship Between Contract, Trade, and Invoice",
        "points": [
          "One contract can support multiple trades or deliveries, depending on the agreement and system configuration.",
          "A single trade can generate multiple invoices.",
          "For example, provisional and final invoices may be issued for the same trade.",
          "The ETRM system links contracts, trades, deliveries, and invoices for tracking and reconciliation."
        ]
      }
    ],
    "keyTakeaways": [
      "Contract = Legally binding commercial agreement.",
      "Trade = Executed commercial transaction.",
      "Delivery = Commodity movement or fulfilment of delivery obligation.",
      "Invoice = Request for payment.",
      "One contract can support multiple trades or deliveries.",
      "One trade can generate multiple invoices depending on business requirements."
    ],
    "examples": [
      {
        "title": "Contract and Trade Example",
        "scenario": "XYZ Oil signs a 12-month contract to supply ABC Energy with crude oil at Brent + $1/bbl. Under this contract, monthly trades and deliveries are recorded in ETRM. Each delivery may generate a provisional or final invoice depending on the agreed billing process."
      }
    ],
    "summary": "A contract is a legally binding commercial agreement between two parties.",
    "content": "1. What Is a Contract?:\nA contract is a legally binding commercial agreement between two parties. It defines the terms and conditions under which commodities will be purchased or sold. It specifies quantity, pricing, delivery, payment terms, and quality requirements.\n\n2. Contract Example:\nSeller: XYZ Oil Buyer: ABC Energy Commodity: Crude Oil Quantity: 50,000 barrels Price: Brent + $1/bbl Delivery: FOB Delivery Period: 10–15 November Payment Terms: 30 days Quality: Agreed crude oil specifications.\n\n3. Contract vs Trade vs Delivery vs Invoice:\nContract: Commercial agreement defining the terms between two parties. Trade: Executed commercial transaction recorded in ETRM. Delivery: Physical movement of the commodity or fulfilment of a delivery obligation. Invoice: Financial document requesting payment for goods or services.\n\n4. Relationship Between Contract, Trade, and Invoice:\nOne contract can support multiple trades or deliveries, depending on the agreement and system configuration. A single trade can generate multiple invoices. For example, provisional and final invoices may be issued for the same trade. The ETRM system links contracts, trades, deliveries, and invoices for tracking and reconciliation."
  },
  {
    "id": "67",
    "title": "What Is Trade Confirmation?",
    "category": "Oil",
    "order": 67,
    "sections": [
      {
        "heading": "1. What Is Trade Confirmation?",
        "points": [
          "Trade confirmation is the process of verifying that both parties agree on the executed trade details.",
          "It happens after trade execution and capture.",
          "Both parties check important terms such as quantity, price, commodity, delivery, and payment terms.",
          "The purpose is to identify and resolve differences before proceeding with further operations."
        ]
      },
      {
        "heading": "2. Trade Confirmation Example",
        "points": [
          "ABC Energy records: Quantity = 50,000 barrels, Price = Brent + $1/bbl, Delivery = FOB.",
          "XYZ Oil sends confirmation: Quantity = 50,000 barrels, Price = Brent + $1.50/bbl, Delivery = FOB.",
          "The pricing terms do not match.",
          "ABC Energy investigates the discrepancy and contacts XYZ Oil to resolve it."
        ]
      },
      {
        "heading": "3. What Happens When Details Do Not Match?",
        "points": [
          "The difference is identified as a trade confirmation discrepancy.",
          "The trading or operations team checks the original deal agreement and supporting documents.",
          "Both parties communicate to resolve the incorrect or disputed terms.",
          "The agreed details are corrected or formally acknowledged in the system, following company procedures."
        ]
      },
      {
        "heading": "4. Why Is Trade Confirmation Important?",
        "points": [
          "Ensures both parties agree on commercial terms.",
          "Prevents pricing, quantity, and delivery disputes.",
          "Reduces settlement and invoicing errors.",
          "Creates a reliable record of the agreed transaction."
        ]
      }
    ],
    "keyTakeaways": [
      "Trade confirmation = Verification of trade terms by both parties.",
      "It takes place after trade execution and capture.",
      "Quantity, price, delivery, and payment terms must be checked.",
      "Differences are called confirmation discrepancies.",
      "Discrepancies should be investigated and resolved before treating the terms as agreed."
    ],
    "examples": [
      {
        "title": "Pricing Discrepancy Example",
        "scenario": "ABC Energy captures a purchase of 50,000 barrels at Brent + $1/bbl. XYZ Oil confirms Brent + $1.50/bbl. The $0.50/bbl difference is a confirmation discrepancy. Both parties must investigate and agree on the correct pricing term."
      }
    ],
    "summary": "Trade confirmation is the process of verifying that both parties agree on the executed trade details.",
    "content": "1. What Is Trade Confirmation?:\nTrade confirmation is the process of verifying that both parties agree on the executed trade details. It happens after trade execution and capture. Both parties check important terms such as quantity, price, commodity, delivery, and payment terms. The purpose is to identify and resolve differences before proceeding with further operations.\n\n2. Trade Confirmation Example:\nABC Energy records: Quantity = 50,000 barrels, Price = Brent + $1/bbl, Delivery = FOB. XYZ Oil sends confirmation: Quantity = 50,000 barrels, Price = Brent + $1.50/bbl, Delivery = FOB. The pricing terms do not match. ABC Energy investigates the discrepancy and contacts XYZ Oil to resolve it.\n\n3. What Happens When Details Do Not Match?:\nThe difference is identified as a trade confirmation discrepancy. The trading or operations team checks the original deal agreement and supporting documents. Both parties communicate to resolve the incorrect or disputed terms. The agreed details are corrected or formally acknowledged in the system, following company procedures.\n\n4. Why Is Trade Confirmation Important?:\nEnsures both parties agree on commercial terms. Prevents pricing, quantity, and delivery disputes. Reduces settlement and invoicing errors. Creates a reliable record of the agreed transaction."
  },
  {
    "id": "68",
    "title": "What Is a Trade Amendment?",
    "category": "Oil",
    "order": 68,
    "sections": [
      {
        "heading": "1. What Is a Trade Amendment?",
        "points": [
          "A trade amendment means changing an existing trade after its initial capture.",
          "Changes are generally made when both parties agree to modify the original commercial terms.",
          "The updated trade details must be recorded in the ETRM system."
        ]
      },
      {
        "heading": "2. Common Trade Amendments",
        "points": [
          "Quantity: Change from 50,000 to 48,000 barrels.",
          "Price: Change differential from +$1 to +$1.20/bbl.",
          "Delivery Window: Change the agreed delivery dates.",
          "Discharge Location: Change the destination port.",
          "Payment Terms: Change the payment period.",
          "Incoterm: Change from FOB to CIF, subject to agreement."
        ]
      },
      {
        "heading": "3. Trade Amendment Example",
        "points": [
          "Original trade quantity = 50,000 barrels.",
          "Both parties agree to reduce the quantity to 48,000 barrels.",
          "The trader updates the existing trade in ETRM.",
          "The system should preserve the original details and record the amendment."
        ]
      },
      {
        "heading": "4. Why Is Audit History Important?",
        "points": [
          "Previous Value: Original value before amendment.",
          "New Value: Updated value after amendment.",
          "Modified By: User who made the change.",
          "Date and Time: When the change occurred.",
          "Reason: Business reason for the amendment.",
          "Approval: Required approval details, where applicable.",
          "Audit history supports compliance, traceability, and financial control."
        ]
      }
    ],
    "keyTakeaways": [
      "Trade amendment = Modification of an existing trade.",
      "Changes can include quantity, price, delivery, location, and payment terms.",
      "Amendments should follow company approval procedures.",
      "Audit history must preserve previous and updated values.",
      "Audit trail records who changed what, when, and why."
    ],
    "examples": [
      {
        "title": "Quantity Amendment Example",
        "scenario": "ABC Energy originally purchases 50,000 barrels of crude oil. Both parties later agree to reduce the quantity to 48,000 barrels. The trader amends the existing trade in ETRM. The system records the old quantity, new quantity, user, timestamp, reason, and approval details where required."
      }
    ],
    "summary": "A trade amendment means changing an existing trade after its initial capture.",
    "content": "1. What Is a Trade Amendment?:\nA trade amendment means changing an existing trade after its initial capture. Changes are generally made when both parties agree to modify the original commercial terms. The updated trade details must be recorded in the ETRM system.\n\n2. Common Trade Amendments:\nQuantity: Change from 50,000 to 48,000 barrels. Price: Change differential from +$1 to +$1.20/bbl. Delivery Window: Change the agreed delivery dates. Discharge Location: Change the destination port. Payment Terms: Change the payment period. Incoterm: Change from FOB to CIF, subject to agreement.\n\n3. Trade Amendment Example:\nOriginal trade quantity = 50,000 barrels. Both parties agree to reduce the quantity to 48,000 barrels. The trader updates the existing trade in ETRM. The system should preserve the original details and record the amendment.\n\n4. Why Is Audit History Important?:\nPrevious Value: Original value before amendment. New Value: Updated value after amendment. Modified By: User who made the change. Date and Time: When the change occurred. Reason: Business reason for the amendment. Approval: Required approval details, where applicable. Audit history supports compliance, traceability, and financial control."
  },
  {
    "id": "69",
    "title": "What Is Trade Cancellation?",
    "category": "Oil",
    "order": 69,
    "sections": [
      {
        "heading": "1. What Is Trade Cancellation?",
        "points": [
          "Trade cancellation means terminating or reversing an existing trade according to company procedures.",
          "It may happen when both parties agree to cancel the transaction or when cancellation is permitted under the contract.",
          "The ETRM system must handle the cancellation and its downstream impacts."
        ]
      },
      {
        "heading": "2. Trade Cancellation Example",
        "points": [
          "ABC Energy agrees to purchase 50,000 barrels of crude oil from XYZ Oil.",
          "Later, both parties agree to cancel the transaction.",
          "The trade is cancelled in ETRM following the required approval process.",
          "The system updates the trade status and processes relevant downstream adjustments."
        ]
      },
      {
        "heading": "3. Downstream Impacts of Cancellation",
        "points": [
          "Position Recalculation: Removes the cancelled trade's quantity from the relevant position.",
          "Risk Recalculation: Updates exposure and risk calculations.",
          "P&L Adjustment: Reverses or adjusts the trade's financial impact.",
          "Scheduling Cancellation: Cancels related nominations or delivery arrangements.",
          "Invoice Adjustment: Cancels invoices or creates credit notes, where applicable.",
          "Accounting Adjustment: Reverses or adjusts related accounting entries."
        ]
      },
      {
        "heading": "4. Why Is Cancellation Handling Important?",
        "points": [
          "Prevents cancelled trades from remaining in active positions.",
          "Keeps risk and P&L reports accurate.",
          "Avoids incorrect deliveries and payments.",
          "Maintains an audit trail of the cancellation and its approvals."
        ]
      }
    ],
    "keyTakeaways": [
      "Trade cancellation = Terminating or reversing an existing trade.",
      "Cancellation must follow commercial and company procedures.",
      "Positions, risk, and P&L may need recalculation.",
      "Scheduling, invoices, and accounting may require adjustments.",
      "The system should preserve cancellation history and approvals."
    ],
    "examples": [
      {
        "title": "Crude Oil Trade Cancellation Example",
        "scenario": "ABC Energy agrees to purchase 50,000 barrels from XYZ Oil. Both parties later agree to cancel the deal. The trade is cancelled in ETRM, its position and risk impacts are recalculated, and any related scheduling, invoicing, or accounting records are adjusted as required."
      }
    ],
    "summary": "Trade cancellation means terminating or reversing an existing trade according to company procedures.",
    "content": "1. What Is Trade Cancellation?:\nTrade cancellation means terminating or reversing an existing trade according to company procedures. It may happen when both parties agree to cancel the transaction or when cancellation is permitted under the contract. The ETRM system must handle the cancellation and its downstream impacts.\n\n2. Trade Cancellation Example:\nABC Energy agrees to purchase 50,000 barrels of crude oil from XYZ Oil. Later, both parties agree to cancel the transaction. The trade is cancelled in ETRM following the required approval process. The system updates the trade status and processes relevant downstream adjustments.\n\n3. Downstream Impacts of Cancellation:\nPosition Recalculation: Removes the cancelled trade's quantity from the relevant position. Risk Recalculation: Updates exposure and risk calculations. P&L Adjustment: Reverses or adjusts the trade's financial impact. Scheduling Cancellation: Cancels related nominations or delivery arrangements. Invoice Adjustment: Cancels invoices or creates credit notes, where applicable. Accounting Adjustment: Reverses or adjusts related accounting entries.\n\n4. Why Is Cancellation Handling Important?:\nPrevents cancelled trades from remaining in active positions. Keeps risk and P&L reports accurate. Avoids incorrect deliveries and payments. Maintains an audit trail of the cancellation and its approvals."
  },
  {
    "id": "70",
    "title": "What Is Scheduling in Oil Trading?",
    "category": "Oil",
    "order": 70,
    "sections": [
      {
        "heading": "1. What Is Scheduling?",
        "points": [
          "Scheduling is the process of planning and coordinating the physical movement of crude oil.",
          "It takes place after a physical trade is captured and commercial terms are agreed.",
          "The operations team coordinates vessels, suppliers, terminals, and loading activities.",
          "The goal is to ensure the commodity is delivered within the agreed contractual window."
        ]
      },
      {
        "heading": "2. Scheduling Example",
        "points": [
          "Buyer: ABC Energy",
          "Supplier: XYZ Oil",
          "Quantity: 50,000 barrels",
          "Delivery Terms: FOB",
          "Loading Window: 10–15 November",
          "Vessel Arrangement: ABC Energy is responsible for arranging the vessel.",
          "The operations team coordinates vessel arrival and cargo loading with XYZ Oil and the terminal."
        ]
      },
      {
        "heading": "3. Important Scheduling Activities",
        "points": [
          "Check Delivery Window: Verify the contractual loading or delivery dates.",
          "Coordinate with Supplier: Agree on operational arrangements.",
          "Arrange Vessel: Confirm vessel availability and nomination.",
          "Check Terminal Capacity: Confirm loading availability and capacity.",
          "Coordinate Loading: Finalize loading dates and operational slots.",
          "Track Cargo Movement: Monitor vessel and shipment progress.",
          "Update ETRM: Record vessel, terminal, schedule, and loading information."
        ]
      },
      {
        "heading": "4. Why Is Scheduling Important?",
        "points": [
          "Ensures physical delivery obligations are fulfilled.",
          "Helps avoid delays and operational conflicts.",
          "Supports coordination between trading, operations, suppliers, and terminals.",
          "Provides updated delivery information for actualization and invoicing."
        ]
      }
    ],
    "keyTakeaways": [
      "Scheduling = Planning and coordinating physical commodity movement.",
      "The operations team usually manages scheduling activities.",
      "Vessel, terminal, supplier, and loading dates must be coordinated.",
      "FOB terms generally make the buyer responsible for arranging the main vessel.",
      "Scheduling information is recorded and tracked in ETRM."
    ],
    "examples": [
      {
        "title": "Crude Oil Vessel Scheduling Example",
        "scenario": "ABC Energy purchases 50,000 barrels of crude oil from XYZ Oil under FOB terms, with a loading window of 10–15 November. ABC Energy arranges the vessel. Its operations team coordinates vessel nomination, terminal capacity, and loading dates with XYZ Oil, then updates the schedule in ETRM."
      }
    ],
    "summary": "Scheduling is the process of planning and coordinating the physical movement of crude oil.",
    "content": "1. What Is Scheduling?:\nScheduling is the process of planning and coordinating the physical movement of crude oil. It takes place after a physical trade is captured and commercial terms are agreed. The operations team coordinates vessels, suppliers, terminals, and loading activities. The goal is to ensure the commodity is delivered within the agreed contractual window.\n\n2. Scheduling Example:\nBuyer: ABC Energy Supplier: XYZ Oil Quantity: 50,000 barrels Delivery Terms: FOB Loading Window: 10–15 November Vessel Arrangement: ABC Energy is responsible for arranging the vessel. The operations team coordinates vessel arrival and cargo loading with XYZ Oil and the terminal.\n\n3. Important Scheduling Activities:\nCheck Delivery Window: Verify the contractual loading or delivery dates. Coordinate with Supplier: Agree on operational arrangements. Arrange Vessel: Confirm vessel availability and nomination. Check Terminal Capacity: Confirm loading availability and capacity. Coordinate Loading: Finalize loading dates and operational slots. Track Cargo Movement: Monitor vessel and shipment progress. Update ETRM: Record vessel, terminal, schedule, and loading information.\n\n4. Why Is Scheduling Important?:\nEnsures physical delivery obligations are fulfilled. Helps avoid delays and operational conflicts. Supports coordination between trading, operations, suppliers, and terminals. Provides updated delivery information for actualization and invoicing."
  },
  {
    "id": "71",
    "title": "What Is Vessel Nomination?",
    "category": "Trade Capture",
    "order": 71,
    "sections": [
      {
        "heading": "1. What Is Vessel Nomination?",
        "points": [
          "Vessel nomination means formally informing the relevant parties about the vessel selected for cargo transportation.",
          "It is performed according to contractual terms and terminal requirements.",
          "The supplier and terminal may need to review and accept the nominated vessel before loading."
        ]
      },
      {
        "heading": "2. Vessel Nomination Example",
        "points": [
          "Vessel Name: Ocean Star",
          "Cargo: Crude Oil",
          "Quantity: 50,000 BBL",
          "Loading Port: Agreed export terminal",
          "Loading Window: 10–15 November",
          "Destination: Indian refinery",
          "ABC Energy submits these details to XYZ Oil and the terminal for acceptance."
        ]
      },
      {
        "heading": "3. Why Can Vessel Nomination Be Rejected?",
        "points": [
          "Vessel does not meet terminal requirements.",
          "Vessel size or draft is unsuitable.",
          "Vessel is unavailable during the agreed loading window.",
          "Required documentation is incomplete.",
          "Vessel fails safety, security, or compliance checks."
        ]
      },
      {
        "heading": "4. What Happens If Nomination Is Rejected?",
        "points": [
          "The operations team investigates the rejection reason.",
          "The team coordinates with the supplier and terminal.",
          "Another suitable vessel may be nominated.",
          "The updated vessel details and acceptance status are recorded in ETRM."
        ]
      }
    ],
    "keyTakeaways": [
      "Vessel nomination = Formally proposing a vessel for cargo movement.",
      "Nomination includes vessel name, cargo, quantity, loading port, and loading window.",
      "Supplier and terminal acceptance may be required.",
      "Safety, vessel size, availability, and documentation can affect acceptance.",
      "If rejected, the operations team may nominate another vessel."
    ],
    "examples": [
      {
        "title": "Vessel Nomination Example",
        "scenario": "ABC Energy nominates the vessel Ocean Star to transport 50,000 barrels of crude oil from an agreed export terminal during 10–15 November. The supplier and terminal review the vessel details. If the vessel fails terminal safety requirements, ABC Energy may need to nominate another vessel."
      }
    ],
    "summary": "Vessel nomination means formally informing the relevant parties about the vessel selected for cargo transportation.",
    "content": "1. What Is Vessel Nomination?:\nVessel nomination means formally informing the relevant parties about the vessel selected for cargo transportation. It is performed according to contractual terms and terminal requirements. The supplier and terminal may need to review and accept the nominated vessel before loading.\n\n2. Vessel Nomination Example:\nVessel Name: Ocean Star Cargo: Crude Oil Quantity: 50,000 BBL Loading Port: Agreed export terminal Loading Window: 10–15 November Destination: Indian refinery ABC Energy submits these details to XYZ Oil and the terminal for acceptance.\n\n3. Why Can Vessel Nomination Be Rejected?:\nVessel does not meet terminal requirements. Vessel size or draft is unsuitable. Vessel is unavailable during the agreed loading window. Required documentation is incomplete. Vessel fails safety, security, or compliance checks.\n\n4. What Happens If Nomination Is Rejected?:\nThe operations team investigates the rejection reason. The team coordinates with the supplier and terminal. Another suitable vessel may be nominated. The updated vessel details and acceptance status are recorded in ETRM."
  },
  {
    "id": "73",
    "title": "Nomination vs Scheduling",
    "category": "Oil",
    "order": 73,
    "sections": [
      {
        "heading": "1. What Is Nomination?",
        "points": [
          "Nomination is a formal request or notification of intended commodity movement.",
          "It includes proposed vessel, quantity, loading location, and movement period.",
          "It may require acceptance from the supplier, terminal, or transporter.",
          "Example: ABC Energy nominates the vessel Ocean Star to load 50,000 barrels of crude oil."
        ]
      },
      {
        "heading": "2. What Is Scheduling?",
        "points": [
          "Scheduling is the broader process of planning and coordinating physical commodity movement.",
          "It includes loading dates, delivery timelines, vessel availability, and operational coordination.",
          "It ensures the movement is organized according to contractual and operational requirements.",
          "Example: The operations team coordinates Ocean Star's arrival, terminal availability, and cargo loading."
        ]
      },
      {
        "heading": "3. Key Differences",
        "points": [
          "Nomination = Formal submission of intended movement details.",
          "Scheduling = Planning and coordinating the operational movement.",
          "Nomination may require approval or acceptance.",
          "Scheduling covers broader logistics activities and execution planning.",
          "The exact distinction depends on the company's operating model."
        ]
      },
      {
        "heading": "4. Nomination in Different Transportation Methods",
        "points": [
          "Crude Oil by Vessel: Nomination commonly includes vessel, cargo quantity, and loading window.",
          "Pipeline Transportation: Nomination may include proposed pipeline quantities and movement periods.",
          "The transporter or terminal reviews nominations according to its operational rules."
        ]
      }
    ],
    "keyTakeaways": [
      "Nomination = Formal request or notification of intended movement.",
      "Scheduling = Planning and coordinating the physical movement.",
      "Nomination may require acceptance.",
      "Scheduling is a broader operational activity.",
      "Nominations can apply to vessels and pipeline transportation."
    ],
    "examples": [
      {
        "title": "Crude Oil Vessel Example",
        "scenario": "ABC Energy nominates Ocean Star to load 50,000 barrels of crude oil between 10–15 November. This is nomination. The operations team then coordinates vessel arrival, terminal availability, and loading dates. This is scheduling."
      }
    ],
    "summary": "Nomination is a formal request or notification of intended commodity movement.",
    "content": "1. What Is Nomination?:\nNomination is a formal request or notification of intended commodity movement. It includes proposed vessel, quantity, loading location, and movement period. It may require acceptance from the supplier, terminal, or transporter. Example: ABC Energy nominates the vessel Ocean Star to load 50,000 barrels of crude oil.\n\n2. What Is Scheduling?:\nScheduling is the broader process of planning and coordinating physical commodity movement. It includes loading dates, delivery timelines, vessel availability, and operational coordination. It ensures the movement is organized according to contractual and operational requirements. Example: The operations team coordinates Ocean Star's arrival, terminal availability, and cargo loading.\n\n3. Key Differences:\nNomination = Formal submission of intended movement details. Scheduling = Planning and coordinating the operational movement. Nomination may require approval or acceptance. Scheduling covers broader logistics activities and execution planning. The exact distinction depends on the company's operating model.\n\n4. Nomination in Different Transportation Methods:\nCrude Oil by Vessel: Nomination commonly includes vessel, cargo quantity, and loading window. Pipeline Transportation: Nomination may include proposed pipeline quantities and movement periods. The transporter or terminal reviews nominations according to its operational rules."
  },
  {
    "id": "74",
    "title": "What Happens During Loading?",
    "category": "Oil",
    "order": 74,
    "sections": [
      {
        "heading": "1. What Is Loading?",
        "points": [
          "Loading is the process of transferring crude oil from the supplier's terminal or storage facility onto the nominated vessel.",
          "It generally takes place after vessel nomination is accepted.",
          "The operations team monitors the loading process and records actual cargo details."
        ]
      },
      {
        "heading": "2. Important Loading Activities",
        "points": [
          "Loading Start Time: When cargo loading begins.",
          "Loading Completion Time: When loading is completed.",
          "Loaded Quantity: Actual quantity loaded onto the vessel.",
          "Crude Quality: Quality specifications of the loaded crude.",
          "Temperature and Density: Measurements used for quantity and quality calculations.",
          "Terminal Documentation: Loading records and supporting documents.",
          "Operational Delays: Any delays or interruptions during loading."
        ]
      },
      {
        "heading": "3. Contract Quantity vs Actual Quantity",
        "points": [
          "Contract Quantity: 50,000 barrels.",
          "Actual Loaded Quantity: 49,850 barrels.",
          "Difference: 150 barrels less than the contracted quantity.",
          "The difference must be recorded and checked against the contractual quantity tolerance."
        ]
      },
      {
        "heading": "4. What Is Quantity Tolerance?",
        "points": [
          "Quantity tolerance is the permitted variation between contractual and actual quantity.",
          "Example: Contract quantity = 50,000 barrels.",
          "Contractual tolerance = ±2%, which equals 1,000 barrels.",
          "Permitted quantity range = 49,000 to 51,000 barrels.",
          "Actual loaded quantity = 49,850 barrels, which is within the permitted range.",
          "Being within tolerance does not automatically approve invoicing; contractual pricing, quantity, and settlement clauses must still be checked."
        ]
      },
      {
        "heading": "5. Why Is Loading Information Important in ETRM?",
        "points": [
          "Records actual loaded quantity instead of relying only on contracted quantity.",
          "Supports quantity reconciliation and contractual tolerance checks.",
          "Provides information for final pricing and invoicing.",
          "Helps identify loading delays and operational discrepancies."
        ]
      }
    ],
    "keyTakeaways": [
      "Loading = Transferring crude oil onto the nominated vessel.",
      "The operations team monitors quantity, quality, timing, and documentation.",
      "Contract quantity and actual loaded quantity may differ.",
      "Quantity tolerance defines the permitted variation.",
      "Being within tolerance does not automatically approve final invoicing."
    ],
    "examples": [
      {
        "title": "Quantity Tolerance Example",
        "scenario": "ABC Energy contracts 50,000 barrels with a ±2% tolerance. The permitted range is 49,000–51,000 barrels. The actual loaded quantity is 49,850 barrels, so it is within tolerance. The actual quantity and supporting documents must still be checked against the contract before final invoicing."
      }
    ],
    "summary": "Loading is the process of transferring crude oil from the supplier's terminal or storage facility onto the nominated vessel.",
    "content": "1. What Is Loading?:\nLoading is the process of transferring crude oil from the supplier's terminal or storage facility onto the nominated vessel. It generally takes place after vessel nomination is accepted. The operations team monitors the loading process and records actual cargo details.\n\n2. Important Loading Activities:\nLoading Start Time: When cargo loading begins. Loading Completion Time: When loading is completed. Loaded Quantity: Actual quantity loaded onto the vessel. Crude Quality: Quality specifications of the loaded crude. Temperature and Density: Measurements used for quantity and quality calculations. Terminal Documentation: Loading records and supporting documents. Operational Delays: Any delays or interruptions during loading.\n\n3. Contract Quantity vs Actual Quantity:\nContract Quantity: 50,000 barrels. Actual Loaded Quantity: 49,850 barrels. Difference: 150 barrels less than the contracted quantity. The difference must be recorded and checked against the contractual quantity tolerance.\n\n4. What Is Quantity Tolerance?:\nQuantity tolerance is the permitted variation between contractual and actual quantity. Example: Contract quantity = 50,000 barrels. Contractual tolerance = ±2%, which equals 1,000 barrels. Permitted quantity range = 49,000 to 51,000 barrels. Actual loaded quantity = 49,850 barrels, which is within the permitted range. Being within tolerance does not automatically approve invoicing; contractual pricing, quantity, and settlement clauses must still be checked.\n\n5. Why Is Loading Information Important in ETRM?:\nRecords actual loaded quantity instead of relying only on contracted quantity. Supports quantity reconciliation and contractual tolerance checks. Provides information for final pricing and invoicing. Helps identify loading delays and operational discrepancies."
  },
  {
    "id": "75",
    "title": "What Is Discharge?",
    "category": "Oil",
    "order": 75,
    "sections": [
      {
        "heading": "What Is Discharge?",
        "points": [
          "Discharge is the process of unloading crude oil from a vessel at the destination terminal.",
          "The terminal measures the actual discharged quantity and records quality and quantity documents.",
          "The ETRM system is updated with the actual discharge details."
        ]
      },
      {
        "heading": "Discharge Process",
        "points": [
          "Vessel arrives at the destination terminal.",
          "Terminal confirms readiness for unloading.",
          "Crude oil is unloaded from the vessel.",
          "Actual discharged quantity and quality are measured.",
          "Documents are recorded and operational completion is updated in ETRM."
        ]
      },
      {
        "heading": "Loading Quantity vs Discharge Quantity",
        "points": [
          "Loaded quantity and discharged quantity may differ.",
          "Differences can occur due to measurement methods, temperature correction, operational losses, or contractual loss allowances.",
          "Commercial treatment depends on the contract and agreed measurement basis."
        ]
      }
    ],
    "keyTakeaways": [
      "Discharge means unloading crude oil at the destination terminal.",
      "Loaded quantity is measured at the loading terminal; discharged quantity is measured at the destination.",
      "Quantity differences must be reconciled according to contract terms.",
      "ETRM records actual discharge details for reconciliation and settlement."
    ],
    "examples": [
      {
        "title": "Loading vs Discharge Quantity",
        "scenario": "Contract quantity: 50,000 BBL. Loaded quantity: 49,850 BBL. Discharged quantity: 49,800 BBL. The difference between loaded and discharged quantity is 50 BBL and must be reviewed against the agreed measurement basis and contractual loss allowances."
      }
    ],
    "summary": "Discharge is the process of unloading crude oil from a vessel at the destination terminal.",
    "content": "What Is Discharge?:\nDischarge is the process of unloading crude oil from a vessel at the destination terminal. The terminal measures the actual discharged quantity and records quality and quantity documents. The ETRM system is updated with the actual discharge details.\n\nDischarge Process:\nVessel arrives at the destination terminal. Terminal confirms readiness for unloading. Crude oil is unloaded from the vessel. Actual discharged quantity and quality are measured. Documents are recorded and operational completion is updated in ETRM.\n\nLoading Quantity vs Discharge Quantity:\nLoaded quantity and discharged quantity may differ. Differences can occur due to measurement methods, temperature correction, operational losses, or contractual loss allowances. Commercial treatment depends on the contract and agreed measurement basis."
  },
  {
    "id": "76",
    "title": "What Is Bill of Lading (B/L)?",
    "category": "Oil",
    "order": 76,
    "sections": [
      {
        "heading": "What Is Bill of Lading?",
        "points": [
          "A Bill of Lading (B/L) is an important shipping document issued by or on behalf of the carrier.",
          "It acts as evidence that goods were received or loaded for shipment.",
          "It provides evidence of the contract of carriage.",
          "In applicable forms, it also acts as a document of title."
        ]
      },
      {
        "heading": "Important B/L Details",
        "points": [
          "B/L Number: Unique document reference.",
          "Vessel: Name of the carrying vessel.",
          "Loading Date: Date recorded on the B/L.",
          "Commodity and Quantity: Cargo details.",
          "Loading Port and Consignee: Shipment and receiving-party details."
        ]
      },
      {
        "heading": "Why Is B/L Important in ETRM?",
        "points": [
          "Provides documentary evidence of shipment.",
          "The B/L date may determine the pricing period if specified in the contract.",
          "Supports delivery reconciliation and invoice calculation.",
          "Can support ownership or title-related contractual events and documentary compliance.",
          "The actual commercial treatment depends on the contract terms."
        ]
      }
    ],
    "keyTakeaways": [
      "B/L stands for Bill of Lading.",
      "It provides evidence of receipt or loading and the contract of carriage.",
      "Some forms of B/L also function as documents of title.",
      "The B/L date can be an important pricing input.",
      "Always check the contract to confirm whether pricing is based on the B/L date."
    ],
    "examples": [
      {
        "title": "Crude Oil Bill of Lading",
        "scenario": "ABC Energy purchases 50,000 BBL of crude oil. The cargo is loaded on 12 November. B/L Number: BL-10025, Vessel: Ocean Star, Loading Date: 12 November, Actual Quantity: 49,850 BBL, Loading Port: Agreed export terminal."
      },
      {
        "title": "B/L Date and Pricing",
        "scenario": "The contract states: Price = Average Brent for five quotation days following the Bill of Lading date + $1. If the B/L date is 12 November, the agreed pricing clause determines which five quotation days are used to calculate the final price."
      }
    ],
    "summary": "A Bill of Lading (B/L) is an important shipping document issued by or on behalf of the carrier.",
    "content": "What Is Bill of Lading?:\nA Bill of Lading (B/L) is an important shipping document issued by or on behalf of the carrier. It acts as evidence that goods were received or loaded for shipment. It provides evidence of the contract of carriage. In applicable forms, it also acts as a document of title.\n\nImportant B/L Details:\nB/L Number: Unique document reference. Vessel: Name of the carrying vessel. Loading Date: Date recorded on the B/L. Commodity and Quantity: Cargo details. Loading Port and Consignee: Shipment and receiving-party details.\n\nWhy Is B/L Important in ETRM?:\nProvides documentary evidence of shipment. The B/L date may determine the pricing period if specified in the contract. Supports delivery reconciliation and invoice calculation. Can support ownership or title-related contractual events and documentary compliance. The actual commercial treatment depends on the contract terms."
  },
  {
    "id": "77",
    "title": "What Is Actualization?",
    "category": "Oil",
    "order": 77,
    "sections": [
      {
        "heading": "What Is Actualization?",
        "points": [
          "Actualization means updating ETRM with quantities and events that actually occurred during physical operations.",
          "It replaces planned values with measured operational values where applicable.",
          "It helps operations, risk, settlement, and accounting use accurate information."
        ]
      },
      {
        "heading": "Three Important Quantity Types",
        "points": [
          "Contract Quantity: Quantity agreed in the contract.",
          "Scheduled Quantity: Quantity planned for physical movement.",
          "Actual Quantity: Quantity actually measured during loading or discharge."
        ]
      },
      {
        "heading": "How Does Actualization Affect Invoicing?",
        "points": [
          "The billable quantity depends on the contract's invoicing and measurement clauses.",
          "If billing is based on actual loaded quantity, ETRM must use that quantity for invoice calculation.",
          "Using the wrong quantity can cause financial differences and incorrect invoices."
        ]
      }
    ],
    "keyTakeaways": [
      "Contract quantity is agreed; scheduled quantity is planned; actual quantity is measured.",
      "Actualization updates ETRM with real operational quantities.",
      "Actual quantity may differ from contract and scheduled quantities.",
      "Invoice quantity must follow the contractual billing rules.",
      "Incorrect quantity selection can cause financial errors."
    ],
    "examples": [
      {
        "title": "Actualization and Invoice Calculation",
        "scenario": "Contract quantity = 50,000 BBL. Scheduled quantity = 50,000 BBL. Actual loaded quantity = 49,850 BBL. Final price = $76/BBL. If the contract requires billing on actual loaded quantity, invoice value = 49,850 × $76 = $3,788,600. Using 50,000 BBL would produce $3,800,000, an overstatement of $11,400."
      }
    ],
    "summary": "Actualization means updating ETRM with quantities and events that actually occurred during physical operations.",
    "content": "What Is Actualization?:\nActualization means updating ETRM with quantities and events that actually occurred during physical operations. It replaces planned values with measured operational values where applicable. It helps operations, risk, settlement, and accounting use accurate information.\n\nThree Important Quantity Types:\nContract Quantity: Quantity agreed in the contract. Scheduled Quantity: Quantity planned for physical movement. Actual Quantity: Quantity actually measured during loading or discharge.\n\nHow Does Actualization Affect Invoicing?:\nThe billable quantity depends on the contract's invoicing and measurement clauses. If billing is based on actual loaded quantity, ETRM must use that quantity for invoice calculation. Using the wrong quantity can cause financial differences and incorrect invoices."
  },
  {
    "id": "78",
    "title": "What Is Price Fixation?",
    "category": "Oil",
    "order": 78,
    "sections": [
      {
        "heading": "What Is Price Fixation?",
        "points": [
          "In floating-price trades, the final price may not be known when the trade is captured.",
          "Price fixation is the process of calculating the final contractual price using agreed market prices and the contract pricing formula.",
          "The pricing dates, benchmark, and differential are defined in the contract."
        ]
      },
      {
        "heading": "Price Fixation Process",
        "points": [
          "Identify the agreed benchmark, such as Brent.",
          "Identify the contractual pricing dates.",
          "Collect the benchmark prices for those dates.",
          "Calculate the average according to the contract.",
          "Apply the agreed differential to determine the final price.",
          "Update the fixed price in ETRM for valuation and settlement."
        ]
      },
      {
        "heading": "Why Is Price Fixation Important in ETRM?",
        "points": [
          "Converts a floating price into a determined contractual price for the relevant quantity.",
          "Supports final invoice calculation and settlement.",
          "Helps track which pricing dates have been fixed and which remain open.",
          "Ensures pricing follows the agreed contractual formula."
        ]
      }
    ],
    "keyTakeaways": [
      "Price fixation determines the final price of a floating-price trade.",
      "The benchmark and pricing dates come from the contract.",
      "The differential is added or subtracted as agreed.",
      "The fixed price is used for valuation and settlement.",
      "Always follow the contractual pricing formula."
    ],
    "examples": [
      {
        "title": "Brent Price Fixation",
        "scenario": "ABC Energy buys 49,850 BBL. Contract formula: Average Brent for three agreed pricing days + $1/BBL. Brent observations are $75, $77, and $76. Average Brent = ($75 + $77 + $76) / 3 = $76. Final price = $76 + $1 = $77/BBL. Commodity value = 49,850 × $77 = $3,838,450."
      }
    ],
    "summary": "In floating-price trades, the final price may not be known when the trade is captured.",
    "content": "What Is Price Fixation?:\nIn floating-price trades, the final price may not be known when the trade is captured. Price fixation is the process of calculating the final contractual price using agreed market prices and the contract pricing formula. The pricing dates, benchmark, and differential are defined in the contract.\n\nPrice Fixation Process:\nIdentify the agreed benchmark, such as Brent. Identify the contractual pricing dates. Collect the benchmark prices for those dates. Calculate the average according to the contract. Apply the agreed differential to determine the final price. Update the fixed price in ETRM for valuation and settlement.\n\nWhy Is Price Fixation Important in ETRM?:\nConverts a floating price into a determined contractual price for the relevant quantity. Supports final invoice calculation and settlement. Helps track which pricing dates have been fixed and which remain open. Ensures pricing follows the agreed contractual formula."
  },
  {
    "id": "79",
    "title": "What Is Invoicing in ETRM?",
    "category": "Oil",
    "order": 79,
    "sections": [
      {
        "heading": "What Is Invoicing?",
        "points": [
          "An invoice is a financial document that requests payment for a transaction.",
          "In ETRM, invoicing generally happens after the relevant delivery, quantity actualization, and pricing processes.",
          "The invoice amount is calculated using the contractually agreed billable quantity, final price, fees, taxes, and other applicable charges."
        ]
      },
      {
        "heading": "Purchase Invoice — Accounts Payable (AP)",
        "points": [
          "AP represents money the company owes to its suppliers.",
          "When a company purchases crude oil, it receives an invoice from the seller.",
          "The purchasing company must pay the supplier."
        ]
      },
      {
        "heading": "Sales Invoice — Accounts Receivable (AR)",
        "points": [
          "AR represents money customers owe to the company.",
          "When a company sells crude oil, it generates an invoice for the buyer.",
          "The customer must pay the selling company."
        ]
      },
      {
        "heading": "Why Is Invoicing Important in ETRM?",
        "points": [
          "Converts physical or financial trade obligations into financial amounts.",
          "Supports supplier payments and customer collections.",
          "Provides financial information for accounting and settlement.",
          "Helps track outstanding amounts and invoice status."
        ]
      }
    ],
    "keyTakeaways": [
      "An invoice is a request for payment.",
      "AP = Accounts Payable = Money the company owes suppliers.",
      "AR = Accounts Receivable = Money customers owe the company.",
      "Purchase transactions generally create AP obligations.",
      "Sales transactions generally create AR obligations."
    ],
    "examples": [
      {
        "title": "Purchase Invoice — AP",
        "scenario": "ABC Energy purchases 49,850 BBL of crude oil from XYZ Oil. XYZ Oil sends an invoice to ABC Energy. ABC Energy must pay XYZ Oil, so this is an Accounts Payable transaction."
      },
      {
        "title": "Sales Invoice — AR",
        "scenario": "ABC Energy sells crude oil to an Indian refinery and generates an invoice. The refinery must pay ABC Energy, so this is an Accounts Receivable transaction."
      }
    ],
    "summary": "An invoice is a financial document that requests payment for a transaction.",
    "content": "What Is Invoicing?:\nAn invoice is a financial document that requests payment for a transaction. In ETRM, invoicing generally happens after the relevant delivery, quantity actualization, and pricing processes. The invoice amount is calculated using the contractually agreed billable quantity, final price, fees, taxes, and other applicable charges.\n\nPurchase Invoice — Accounts Payable (AP):\nAP represents money the company owes to its suppliers. When a company purchases crude oil, it receives an invoice from the seller. The purchasing company must pay the supplier.\n\nSales Invoice — Accounts Receivable (AR):\nAR represents money customers owe to the company. When a company sells crude oil, it generates an invoice for the buyer. The customer must pay the selling company.\n\nWhy Is Invoicing Important in ETRM?:\nConverts physical or financial trade obligations into financial amounts. Supports supplier payments and customer collections. Provides financial information for accounting and settlement. Helps track outstanding amounts and invoice status."
  },
  {
    "id": "80",
    "title": "What Does an Invoice Contain?",
    "category": "Oil",
    "order": 80,
    "sections": [
      {
        "heading": "Important Invoice Fields",
        "points": [
          "Invoice Number: Unique invoice identifier.",
          "Trade ID: Related ETRM trade reference.",
          "Counterparty: Supplier or customer.",
          "Invoice Date and Due Date: Issue date and payment deadline.",
          "Commodity and Quantity: Product and billable quantity.",
          "Price: Final or provisional price per unit.",
          "Gross Amount: Commodity value before additional charges and applicable taxes.",
          "Fees and Taxes: Freight, inspection, and applicable taxes.",
          "Net Amount: Total amount payable or receivable.",
          "Currency and Invoice Status: Payment currency and current processing state."
        ]
      },
      {
        "heading": "Invoice Amount Calculation",
        "points": [
          "Commodity Amount = Billable Quantity × Price.",
          "Add applicable fees and charges, such as freight and inspection.",
          "Apply taxes according to the relevant tax rules.",
          "The final invoice amount depends on the contract and applicable tax treatment."
        ]
      },
      {
        "heading": "Why Are Invoice Fields Important in ETRM?",
        "points": [
          "Connects the financial document to its original trade.",
          "Supports payment processing and customer collections.",
          "Helps reconcile quantities, prices, fees, and taxes.",
          "Allows teams to track invoice processing and payment status."
        ]
      }
    ],
    "keyTakeaways": [
      "Every invoice should have a unique invoice number and related trade ID.",
      "Billable quantity and price determine the commodity amount.",
      "Freight, inspection, and other applicable fees affect the invoice total.",
      "Taxes must be calculated according to applicable rules.",
      "Invoice status shows the current processing stage."
    ],
    "examples": [
      {
        "title": "Crude Oil Purchase Invoice",
        "scenario": "ABC Energy purchases 49,850 BBL at $77/BBL. Commodity amount = $3,838,450. Freight = $12,000. Inspection = $2,000. Total before taxes = $3,838,450 + $12,000 + $2,000 = $3,852,450. Assume these charges are separately payable and not already included in the crude price."
      }
    ],
    "summary": "Invoice Number: Unique invoice identifier.",
    "content": "Important Invoice Fields:\nInvoice Number: Unique invoice identifier. Trade ID: Related ETRM trade reference. Counterparty: Supplier or customer. Invoice Date and Due Date: Issue date and payment deadline. Commodity and Quantity: Product and billable quantity. Price: Final or provisional price per unit. Gross Amount: Commodity value before additional charges and applicable taxes. Fees and Taxes: Freight, inspection, and applicable taxes. Net Amount: Total amount payable or receivable. Currency and Invoice Status: Payment currency and current processing state.\n\nInvoice Amount Calculation:\nCommodity Amount = Billable Quantity × Price. Add applicable fees and charges, such as freight and inspection. Apply taxes according to the relevant tax rules. The final invoice amount depends on the contract and applicable tax treatment.\n\nWhy Are Invoice Fields Important in ETRM?:\nConnects the financial document to its original trade. Supports payment processing and customer collections. Helps reconcile quantities, prices, fees, and taxes. Allows teams to track invoice processing and payment status."
  },
  {
    "id": "81",
    "title": "Invoice Statuses",
    "category": "Oil",
    "order": 81,
    "sections": [
      {
        "heading": "What Are Invoice Statuses?",
        "points": [
          "Invoice status indicates the current stage of an invoice in its financial workflow.",
          "It helps teams track approval, accounting, submission, payment, and closure.",
          "Status names and transitions can vary between ETRM systems."
        ]
      },
      {
        "heading": "Typical Invoice Workflow",
        "points": [
          "Draft: Invoice is created but not finalized or submitted.",
          "Pending Approval: Waiting for authorization.",
          "Approved: Invoice has passed the approval process.",
          "Posted: Invoice has been recorded in the accounting or ledger workflow.",
          "Sent / Submitted: Invoice has been issued to the counterparty.",
          "Partially Paid: Only part of the amount has been paid or received.",
          "Paid: The full amount has been paid or received.",
          "Closed: Financial processing and reconciliation requirements are complete."
        ]
      },
      {
        "heading": "Invoice Exception Statuses",
        "points": [
          "Rejected: Invoice did not pass approval.",
          "Disputed: Counterparty challenges the invoice amount or terms.",
          "On Hold: Invoice processing is temporarily stopped.",
          "Cancelled / Void: Invoice is invalidated through an authorized process.",
          "Overdue: Payment due date has passed without full settlement."
        ]
      },
      {
        "heading": "Why Are Invoice Statuses Important in ETRM?",
        "points": [
          "Help AP teams track supplier payments.",
          "Help AR teams track customer collections.",
          "Identify delayed approvals, disputes, and overdue invoices.",
          "Support financial reconciliation and reporting."
        ]
      }
    ],
    "keyTakeaways": [
      "Invoice status tells us where an invoice is in its financial lifecycle.",
      "Draft → Pending Approval → Approved → Posted → Sent is a common processing sequence, but actual order varies by system.",
      "Partially Paid means some amount is settled; Paid means the full amount is settled.",
      "Disputed, Rejected, On Hold, Cancelled, and Overdue are important exception states.",
      "Closed generally means the invoice workflow and reconciliation are complete."
    ],
    "examples": [
      {
        "title": "Invoice Status Lifecycle",
        "scenario": "ABC Energy receives a $3,852,450 supplier invoice. It is created as Draft, submitted for approval, Approved, Posted, and Sent. ABC pays $2,000,000 first, so the invoice becomes Partially Paid. After paying the remaining $1,852,450 and completing reconciliation, it becomes Paid and then Closed, depending on the system workflow."
      },
      {
        "title": "Disputed Invoice",
        "scenario": "XYZ Oil sends ABC Energy an invoice for 50,000 BBL, but ABC's actual billable quantity is 49,850 BBL under the contract. ABC raises a dispute, and the invoice is marked Disputed while the quantity difference is investigated."
      }
    ],
    "summary": "Invoice status indicates the current stage of an invoice in its financial workflow.",
    "content": "What Are Invoice Statuses?:\nInvoice status indicates the current stage of an invoice in its financial workflow. It helps teams track approval, accounting, submission, payment, and closure. Status names and transitions can vary between ETRM systems.\n\nTypical Invoice Workflow:\nDraft: Invoice is created but not finalized or submitted. Pending Approval: Waiting for authorization. Approved: Invoice has passed the approval process. Posted: Invoice has been recorded in the accounting or ledger workflow. Sent / Submitted: Invoice has been issued to the counterparty. Partially Paid: Only part of the amount has been paid or received. Paid: The full amount has been paid or received. Closed: Financial processing and reconciliation requirements are complete.\n\nInvoice Exception Statuses:\nRejected: Invoice did not pass approval. Disputed: Counterparty challenges the invoice amount or terms. On Hold: Invoice processing is temporarily stopped. Cancelled / Void: Invoice is invalidated through an authorized process. Overdue: Payment due date has passed without full settlement.\n\nWhy Are Invoice Statuses Important in ETRM?:\nHelp AP teams track supplier payments. Help AR teams track customer collections. Identify delayed approvals, disputes, and overdue invoices. Support financial reconciliation and reporting."
  },
  {
    "id": "82",
    "title": "What Is Settlement?",
    "category": "Oil",
    "order": 82,
    "sections": [
      {
        "heading": "What Is Settlement?",
        "points": [
          "Settlement is the process of fulfilling the financial obligations resulting from a trade.",
          "The buyer makes payment to the seller, and the seller receives the money.",
          "Payment is reconciled against the relevant invoice and outstanding amount."
        ]
      },
      {
        "heading": "What Is Partial Payment?",
        "points": [
          "Partial payment means paying only a portion of the total invoice amount.",
          "The unpaid balance remains outstanding.",
          "The invoice may move to Partially Paid until the remaining amount is settled."
        ]
      },
      {
        "heading": "What Is Payment Reconciliation?",
        "points": [
          "Reconciliation means matching a recorded bank or financial-system payment against the relevant invoice.",
          "Important matching details include payment amount, currency, invoice reference, and counterparty.",
          "If the received amount differs from the invoice, the difference must be investigated.",
          "Possible reasons include bank charges, withholding tax, commercial deductions, partial payment, or currency conversion differences."
        ]
      },
      {
        "heading": "Why Is Settlement Important in ETRM?",
        "points": [
          "Tracks supplier payments and customer receipts.",
          "Updates outstanding financial obligations.",
          "Helps AP and AR teams monitor payment status.",
          "Supports financial reconciliation and accurate reporting."
        ]
      }
    ],
    "keyTakeaways": [
      "Settlement means fulfilling the financial obligation of a trade.",
      "Partial payment means only part of the invoice has been paid.",
      "Outstanding Amount = Invoice Amount - Amount Paid.",
      "Payment reconciliation matches bank payments with invoices.",
      "Payment differences must be investigated before final closure."
    ],
    "examples": [
      {
        "title": "Partial Payment",
        "scenario": "Invoice amount = $100,000. First payment = $60,000. Outstanding amount = $100,000 - $60,000 = $40,000. The invoice may become Partially Paid. After the remaining $40,000 is paid and reconciled, it may become Paid or Closed."
      },
      {
        "title": "Payment Reconciliation",
        "scenario": "ETRM invoice = $100,000, bank payment = $98,000, currency = USD, invoice reference = INV-1001. The $2,000 difference must be investigated. Possible reasons include bank charges, withholding tax, deductions, or an incorrect payment."
      }
    ],
    "summary": "Settlement is the process of fulfilling the financial obligations resulting from a trade.",
    "content": "What Is Settlement?:\nSettlement is the process of fulfilling the financial obligations resulting from a trade. The buyer makes payment to the seller, and the seller receives the money. Payment is reconciled against the relevant invoice and outstanding amount.\n\nWhat Is Partial Payment?:\nPartial payment means paying only a portion of the total invoice amount. The unpaid balance remains outstanding. The invoice may move to Partially Paid until the remaining amount is settled.\n\nWhat Is Payment Reconciliation?:\nReconciliation means matching a recorded bank or financial-system payment against the relevant invoice. Important matching details include payment amount, currency, invoice reference, and counterparty. If the received amount differs from the invoice, the difference must be investigated. Possible reasons include bank charges, withholding tax, commercial deductions, partial payment, or currency conversion differences.\n\nWhy Is Settlement Important in ETRM?:\nTracks supplier payments and customer receipts. Updates outstanding financial obligations. Helps AP and AR teams monitor payment status. Supports financial reconciliation and accurate reporting."
  },
  {
    "id": "83",
    "title": "What Is Netting in ETRM?",
    "category": "Oil",
    "order": 83,
    "sections": [
      {
        "heading": "What Is Netting?",
        "points": [
          "Netting means offsetting mutual financial obligations between two parties.",
          "Instead of making multiple payments, the parties settle only the net amount.",
          "Netting is generally subject to contractual agreements and applicable business rules."
        ]
      },
      {
        "heading": "How Does Netting Work?",
        "points": [
          "Identify outstanding AP and AR invoices between the same counterparties.",
          "Verify that the invoices are eligible for netting.",
          "Calculate the difference between amounts payable and receivable.",
          "Settle only the remaining net amount.",
          "Update the relevant invoice and settlement records in ETRM."
        ]
      },
      {
        "heading": "Why Is Netting Important in ETRM?",
        "points": [
          "Reduces the number of separate payments.",
          "Reduces transaction and bank processing costs.",
          "Simplifies payment reconciliation.",
          "Helps manage outstanding AP and AR balances."
        ]
      }
    ],
    "keyTakeaways": [
      "Netting means offsetting mutual financial obligations.",
      "AP represents what we owe; AR represents what we are owed.",
      "Net Amount = Payable Amount - Receivable Amount, when payable is higher.",
      "Netting requires eligible obligations and appropriate agreement or authorization.",
      "Currency, counterparty, due date, and contractual restrictions must be checked."
    ],
    "examples": [
      {
        "title": "Netting Between ABC Energy and XYZ Oil",
        "scenario": "ABC Energy has a purchase invoice of $100,000, meaning ABC owes XYZ Oil. ABC also has a sales invoice of $70,000, meaning XYZ owes ABC. If both obligations are eligible for netting, the net amount is $100,000 - $70,000 = $30,000. ABC Energy pays XYZ Oil only $30,000 instead of making two separate payments."
      }
    ],
    "summary": "Netting means offsetting mutual financial obligations between two parties.",
    "content": "What Is Netting?:\nNetting means offsetting mutual financial obligations between two parties. Instead of making multiple payments, the parties settle only the net amount. Netting is generally subject to contractual agreements and applicable business rules.\n\nHow Does Netting Work?:\nIdentify outstanding AP and AR invoices between the same counterparties. Verify that the invoices are eligible for netting. Calculate the difference between amounts payable and receivable. Settle only the remaining net amount. Update the relevant invoice and settlement records in ETRM.\n\nWhy Is Netting Important in ETRM?:\nReduces the number of separate payments. Reduces transaction and bank processing costs. Simplifies payment reconciliation. Helps manage outstanding AP and AR balances."
  },
  {
    "id": "84",
    "title": "When Is a Trade Considered Closed?",
    "category": "Oil",
    "order": 84,
    "sections": [
      {
        "heading": "What Is Trade Closure?",
        "points": [
          "A trade is considered closed when its required operational, financial, and accounting obligations are completed.",
          "Physical delivery alone does not mean the entire trade lifecycle is complete.",
          "A trade may remain financially open even after the commodity has been delivered."
        ]
      },
      {
        "heading": "Trade Close-Out Checklist",
        "points": [
          "Trade Captured: Commercial transaction is recorded in ETRM.",
          "Trade Confirmation: Terms are matched with the counterparty, as required.",
          "Delivery Completed: Physical delivery is completed for physical trades.",
          "Quantity Actualized: Actual operational quantities are recorded.",
          "Pricing Finalized: Floating price is fixed, where applicable.",
          "Invoice Processed: Required invoices are generated and approved.",
          "Payment Settled: Outstanding amounts are paid or received.",
          "Reconciliation Completed: Quantities and financial amounts are reconciled.",
          "Accounting Completed: Required accounting postings are completed."
        ]
      },
      {
        "heading": "Different Trade Completion Statuses",
        "points": [
          "Physical Completion: Commodity delivery obligations are completed.",
          "Financial Settlement: Required financial obligations are settled.",
          "Trade Closure: Required operational, financial, and accounting activities are completed according to company rules.",
          "ETRM systems may maintain separate statuses for each stage."
        ]
      },
      {
        "heading": "Why Is Trade Closure Important?",
        "points": [
          "Prevents outstanding obligations from being overlooked.",
          "Ensures physical and financial records are reconciled.",
          "Supports accurate accounting and reporting.",
          "Helps identify trades that still require operational or financial action."
        ]
      }
    ],
    "keyTakeaways": [
      "Physical delivery does not automatically mean a trade is closed.",
      "Final pricing, invoicing, payment, and reconciliation may still be pending.",
      "Physical completion and financial settlement are different stages.",
      "Trade closure depends on company workflow and contractual obligations.",
      "Always check outstanding activities before closing a trade."
    ],
    "examples": [
      {
        "title": "Delivered but Financially Open Trade",
        "scenario": "ABC Energy receives 49,850 BBL of crude oil. Physical delivery is complete, but the final Brent pricing period is still open. The invoice cannot yet be finalized. Therefore, the trade is physically complete but financially open."
      }
    ],
    "summary": "A trade is considered closed when its required operational, financial, and accounting obligations are completed.",
    "content": "What Is Trade Closure?:\nA trade is considered closed when its required operational, financial, and accounting obligations are completed. Physical delivery alone does not mean the entire trade lifecycle is complete. A trade may remain financially open even after the commodity has been delivered.\n\nTrade Close-Out Checklist:\nTrade Captured: Commercial transaction is recorded in ETRM. Trade Confirmation: Terms are matched with the counterparty, as required. Delivery Completed: Physical delivery is completed for physical trades. Quantity Actualized: Actual operational quantities are recorded. Pricing Finalized: Floating price is fixed, where applicable. Invoice Processed: Required invoices are generated and approved. Payment Settled: Outstanding amounts are paid or received. Reconciliation Completed: Quantities and financial amounts are reconciled. Accounting Completed: Required accounting postings are completed.\n\nDifferent Trade Completion Statuses:\nPhysical Completion: Commodity delivery obligations are completed. Financial Settlement: Required financial obligations are settled. Trade Closure: Required operational, financial, and accounting activities are completed according to company rules. ETRM systems may maintain separate statuses for each stage.\n\nWhy Is Trade Closure Important?:\nPrevents outstanding obligations from being overlooked. Ensures physical and financial records are reconciled. Supports accurate accounting and reporting. Helps identify trades that still require operational or financial action."
  },
  {
    "id": "85",
    "title": "What Is Oil Pricing?",
    "category": "Oil",
    "order": 85,
    "sections": [
      {
        "heading": "What Is Oil Pricing?",
        "points": [
          "Oil pricing means determining the price at which crude oil is bought or sold.",
          "Crude oil prices are commonly expressed in USD per barrel ($/BBL) or USD per metric tonne ($/MT).",
          "The final price may depend on the market benchmark, quality, location, and contractual pricing formula."
        ]
      },
      {
        "heading": "How Is Oil Value Calculated?",
        "points": [
          "Commodity Value = Quantity × Price per Unit.",
          "Make sure the quantity and price use compatible units.",
          "The calculated commodity value may exclude additional fees, freight, and applicable taxes."
        ]
      }
    ],
    "keyTakeaways": [
      "Oil pricing determines the buying or selling price of crude oil.",
      "Common units are USD/BBL and USD/MT.",
      "Commodity Value = Quantity × Price.",
      "The final price can depend on benchmarks and contractual pricing terms."
    ],
    "examples": [
      {
        "title": "Crude Oil Purchase",
        "scenario": "ABC Energy purchases 10,000 BBL of crude oil at $75/BBL. Commodity value = 10,000 × $75 = $750,000, excluding any additional fees and taxes."
      }
    ],
    "summary": "Oil pricing means determining the price at which crude oil is bought or sold.",
    "content": "What Is Oil Pricing?:\nOil pricing means determining the price at which crude oil is bought or sold. Crude oil prices are commonly expressed in USD per barrel ($/BBL) or USD per metric tonne ($/MT). The final price may depend on the market benchmark, quality, location, and contractual pricing formula.\n\nHow Is Oil Value Calculated?:\nCommodity Value = Quantity × Price per Unit. Make sure the quantity and price use compatible units. The calculated commodity value may exclude additional fees, freight, and applicable taxes."
  },
  {
    "id": "86",
    "title": "Fixed Price vs Floating Price",
    "category": "Oil",
    "order": 86,
    "sections": [
      {
        "heading": "A. Fixed Price",
        "points": [
          "Fixed price is agreed when the trade is executed.",
          "The contractual price remains unchanged even if market prices increase or decrease.",
          "The buyer and seller know the agreed price from the beginning."
        ]
      },
      {
        "heading": "B. Floating Price",
        "points": [
          "Floating price depends on a market benchmark, such as Brent.",
          "The final price is calculated using benchmark prices during an agreed pricing period.",
          "A differential is added or subtracted according to the contract.",
          "The final price may not be known at trade capture; it is determined through price fixation."
        ]
      },
      {
        "heading": "Key Differences",
        "points": [
          "Fixed Price: Contractual price is already known.",
          "Floating Price: Final price depends on future or agreed market observations.",
          "Fixed Price: Market movements do not change the agreed contractual price.",
          "Floating Price: Market movements during the pricing period affect the final price."
        ]
      },
      {
        "heading": "How Does ETRM Handle These Prices?",
        "points": [
          "For fixed-price trades, ETRM stores the agreed price.",
          "For floating-price trades, ETRM stores the benchmark, pricing formula, pricing period, and differential.",
          "After the pricing observations are available, ETRM calculates or records the fixed price."
        ]
      }
    ],
    "keyTakeaways": [
      "Fixed Price = Price agreed at trade execution.",
      "Floating Price = Benchmark price + or - contractual differential.",
      "Floating-price trades require price fixation.",
      "Brent is a commonly used crude oil pricing benchmark.",
      "ETRM handles fixed and floating prices differently."
    ],
    "examples": [
      {
        "title": "Fixed Price Example",
        "scenario": "ABC buys 10,000 BBL at $75/BBL. Even if Brent increases to $80 or decreases to $70, the contractual price remains $75/BBL. Total commodity value = 10,000 × $75 = $750,000."
      },
      {
        "title": "Floating Price Example",
        "scenario": "ABC buys 10,000 BBL at Average Brent + $2/BBL. Five Brent observations are $75, $76, $77, $78, and $79. Average Brent = $77. Final price = $77 + $2 = $79/BBL. Total commodity value = 10,000 × $79 = $790,000."
      }
    ],
    "summary": "Fixed price is agreed when the trade is executed.",
    "content": "A. Fixed Price:\nFixed price is agreed when the trade is executed. The contractual price remains unchanged even if market prices increase or decrease. The buyer and seller know the agreed price from the beginning.\n\nB. Floating Price:\nFloating price depends on a market benchmark, such as Brent. The final price is calculated using benchmark prices during an agreed pricing period. A differential is added or subtracted according to the contract. The final price may not be known at trade capture; it is determined through price fixation.\n\nKey Differences:\nFixed Price: Contractual price is already known. Floating Price: Final price depends on future or agreed market observations. Fixed Price: Market movements do not change the agreed contractual price. Floating Price: Market movements during the pricing period affect the final price.\n\nHow Does ETRM Handle These Prices?:\nFor fixed-price trades, ETRM stores the agreed price. For floating-price trades, ETRM stores the benchmark, pricing formula, pricing period, and differential. After the pricing observations are available, ETRM calculates or records the fixed price."
  },
  {
    "id": "87",
    "title": "What Is a Differential?",
    "category": "Oil",
    "order": 87,
    "sections": [
      {
        "heading": "What Is a Differential?",
        "points": [
          "A differential is a premium or discount added to a crude oil benchmark price.",
          "A positive differential increases the benchmark price.",
          "A negative differential decreases the benchmark price.",
          "The differential is usually expressed in USD per barrel ($/BBL)."
        ]
      },
      {
        "heading": "Why Does a Differential Exist?",
        "points": [
          "API Gravity: Light and heavy crude oils have different market values.",
          "Sulphur Content: Sweet and sour crude oils may receive different pricing.",
          "Location: Transportation costs and regional market conditions affect value.",
          "Quality and Refinery Demand: Crude oil suitability for a refinery affects its premium or discount.",
          "Delivery Terms: Freight, delivery conditions, and commercial arrangements can influence the differential."
        ]
      },
      {
        "heading": "How Is Differential Used in ETRM?",
        "points": [
          "The differential is captured as part of the trade pricing formula.",
          "ETRM combines the benchmark price and differential to calculate the contractual price.",
          "The differential may be positive or negative depending on the agreed commercial terms."
        ]
      }
    ],
    "keyTakeaways": [
      "Differential = Premium or Discount over a benchmark.",
      "Positive differential increases the final price.",
      "Negative differential decreases the final price.",
      "Crude quality, location, and market demand influence differentials.",
      "Differentials are important inputs in floating-price contracts."
    ],
    "examples": [
      {
        "title": "Positive Differential",
        "scenario": "Brent benchmark = $80/BBL. Differential = +$3/BBL. Final price = $80 + $3 = $83/BBL."
      },
      {
        "title": "Negative Differential",
        "scenario": "Brent benchmark = $80/BBL. Differential = -$2/BBL. Final price = $80 - $2 = $78/BBL."
      }
    ],
    "summary": "A differential is a premium or discount added to a crude oil benchmark price.",
    "content": "What Is a Differential?:\nA differential is a premium or discount added to a crude oil benchmark price. A positive differential increases the benchmark price. A negative differential decreases the benchmark price. The differential is usually expressed in USD per barrel ($/BBL).\n\nWhy Does a Differential Exist?:\nAPI Gravity: Light and heavy crude oils have different market values. Sulphur Content: Sweet and sour crude oils may receive different pricing. Location: Transportation costs and regional market conditions affect value. Quality and Refinery Demand: Crude oil suitability for a refinery affects its premium or discount. Delivery Terms: Freight, delivery conditions, and commercial arrangements can influence the differential.\n\nHow Is Differential Used in ETRM?:\nThe differential is captured as part of the trade pricing formula. ETRM combines the benchmark price and differential to calculate the contractual price. The differential may be positive or negative depending on the agreed commercial terms."
  },
  {
    "id": "88",
    "title": "What Is a Pricing Period?",
    "category": "Oil",
    "order": 88,
    "sections": [
      {
        "heading": "Meaning of Pricing Period",
        "points": [
          "A pricing period is the agreed period during which benchmark prices are collected to calculate the final trade price.",
          "It defines which publication dates and benchmark observations are used.",
          "The exact dates depend on the contract terms."
        ]
      },
      {
        "heading": "Example",
        "points": [
          "Contract: Average Brent during the 5 applicable days after the Bill of Lading date + $1.50/BBL.",
          "If the B/L date is 10 October, the contract determines which five publication dates are included.",
          "The average of those Brent prices is calculated, then the $1.50 differential is added."
        ]
      },
      {
        "heading": "How ETRM Handles Pricing Periods",
        "points": [
          "Identifies the date that starts the pricing period, such as the B/L date.",
          "Selects the benchmark and applicable publication dates.",
          "Retrieves the correct price assessments and handles missing observations according to contract rules.",
          "Tracks whether pricing is pending or fully fixed."
        ]
      }
    ],
    "keyTakeaways": [
      "Pricing period determines which benchmark prices are used.",
      "The B/L date can be the starting point, depending on the contract.",
      "Contract rules determine applicable dates and missing-price handling.",
      "Once all required observations are available and pricing is calculated, the price can be fixed."
    ],
    "examples": [
      {
        "title": "Brent Pricing Example",
        "scenario": "Five Brent observations are $78, $79, $80, $81 and $82/BBL. Average = $80/BBL. Add a $1.50 differential: Final Price = $81.50/BBL."
      }
    ],
    "summary": "A pricing period is the agreed period during which benchmark prices are collected to calculate the final trade price.",
    "content": "Meaning of Pricing Period:\nA pricing period is the agreed period during which benchmark prices are collected to calculate the final trade price. It defines which publication dates and benchmark observations are used. The exact dates depend on the contract terms.\n\nExample:\nContract: Average Brent during the 5 applicable days after the Bill of Lading date + $1.50/BBL. If the B/L date is 10 October, the contract determines which five publication dates are included. The average of those Brent prices is calculated, then the $1.50 differential is added.\n\nHow ETRM Handles Pricing Periods:\nIdentifies the date that starts the pricing period, such as the B/L date. Selects the benchmark and applicable publication dates. Retrieves the correct price assessments and handles missing observations according to contract rules. Tracks whether pricing is pending or fully fixed."
  },
  {
    "id": "89",
    "title": "What Is Price Fixation?",
    "category": "Oil",
    "order": 89,
    "sections": [
      {
        "heading": "Meaning of Price Fixation",
        "points": [
          "Price fixation means determining and confirming the final price of a floating-price trade using agreed contractual pricing rules.",
          "It uses benchmark prices, the pricing period and the agreed differential.",
          "Before fixation, the trade may have a provisional price. After fixation, the final price is established, subject to contractual adjustments or corrections."
        ]
      },
      {
        "heading": "How Price Fixation Works",
        "points": [
          "Identify the agreed benchmark and pricing period.",
          "Collect the required benchmark price observations.",
          "Calculate the benchmark average and add the differential.",
          "Confirm and record the final price in ETRM."
        ]
      },
      {
        "heading": "Final Trade Value",
        "points": [
          "Final Trade Value = Quantity × Final Price.",
          "ETRM uses the fixed price to calculate the trade value and support invoicing."
        ]
      }
    ],
    "keyTakeaways": [
      "Price fixation establishes the final price of a floating-price trade.",
      "It follows the pricing rules agreed in the contract.",
      "Before fixation, the price may be provisional.",
      "After fixation, the final price is recorded in ETRM.",
      "Final trade value = Quantity × Final Price."
    ],
    "examples": [
      {
        "title": "Crude Oil Price Fixation",
        "scenario": "Quantity = 20,000 BBL, Average Brent = $78/BBL and Differential = +$2/BBL. Final Price = $80/BBL. Final Trade Value = 20,000 × $80 = $1,600,000."
      }
    ],
    "summary": "Price fixation means determining and confirming the final price of a floating-price trade using agreed contractual pricing rules.",
    "content": "Meaning of Price Fixation:\nPrice fixation means determining and confirming the final price of a floating-price trade using agreed contractual pricing rules. It uses benchmark prices, the pricing period and the agreed differential. Before fixation, the trade may have a provisional price. After fixation, the final price is established, subject to contractual adjustments or corrections.\n\nHow Price Fixation Works:\nIdentify the agreed benchmark and pricing period. Collect the required benchmark price observations. Calculate the benchmark average and add the differential. Confirm and record the final price in ETRM.\n\nFinal Trade Value:\nFinal Trade Value = Quantity × Final Price. ETRM uses the fixed price to calculate the trade value and support invoicing."
  },
  {
    "id": "90",
    "title": "What Is a Price Curve?",
    "category": "Oil",
    "order": 90,
    "sections": [
      {
        "heading": "Meaning of Price Curve",
        "points": [
          "A price curve represents market prices for a commodity across different future delivery dates or periods.",
          "It shows how the market currently values a commodity for future months.",
          "Traders use it to understand future market prices and evaluate trading opportunities."
        ]
      },
      {
        "heading": "Example of a Brent Forward Price Curve",
        "points": [
          "November: $78/BBL",
          "December: $79/BBL",
          "January: $80/BBL",
          "February: $82/BBL",
          "The prices show the market's current valuation for each future delivery month."
        ]
      },
      {
        "heading": "How ETRM Uses Price Curves",
        "points": [
          "Stores or receives market prices for different future periods.",
          "Uses curves for trade valuation and mark-to-market calculations.",
          "Helps traders and risk teams analyze future price movements and market exposure."
        ]
      }
    ],
    "keyTakeaways": [
      "A price curve shows commodity prices across future dates or periods.",
      "Each delivery month can have a different market price.",
      "Traders use price curves to evaluate future market conditions.",
      "ETRM uses price curves for valuation, risk analysis and mark-to-market."
    ],
    "examples": [
      {
        "title": "Brent Forward Curve",
        "scenario": "The Brent curve shows November at $78, December at $79, January at $80 and February at $82/BBL. A trader can use these prices to value trades for the corresponding future periods."
      }
    ],
    "summary": "A price curve represents market prices for a commodity across different future delivery dates or periods.",
    "content": "Meaning of Price Curve:\nA price curve represents market prices for a commodity across different future delivery dates or periods. It shows how the market currently values a commodity for future months. Traders use it to understand future market prices and evaluate trading opportunities.\n\nExample of a Brent Forward Price Curve:\nNovember: $78/BBL December: $79/BBL January: $80/BBL February: $82/BBL The prices show the market's current valuation for each future delivery month.\n\nHow ETRM Uses Price Curves:\nStores or receives market prices for different future periods. Uses curves for trade valuation and mark-to-market calculations. Helps traders and risk teams analyze future price movements and market exposure."
  },
  {
    "id": "91",
    "title": "What Is a Forward Curve?",
    "category": "Oil",
    "order": 91,
    "sections": [
      {
        "heading": "Meaning of Forward Curve",
        "points": [
          "A forward curve is a collection of market prices for a commodity across different future dates or delivery periods.",
          "It shows the current market value expected for future delivery periods.",
          "Traders use it to estimate the value of future purchases and sales."
        ]
      },
      {
        "heading": "Example",
        "points": [
          "An oil trader plans to buy crude oil for delivery in January.",
          "The trader checks the January forward price to estimate the market value of that future delivery.",
          "The forward price helps with planning, valuation and trading decisions."
        ]
      },
      {
        "heading": "Why Forward Curves Are Important in ETRM",
        "points": [
          "Value open trades using current forward market prices.",
          "Calculate Mark-to-Market (MTM) and unrealized Profit and Loss (P&L).",
          "Support hedging decisions and evaluate future buying or selling opportunities."
        ]
      }
    ],
    "keyTakeaways": [
      "A forward curve contains prices for different future delivery periods.",
      "It helps traders estimate the current market value of future deliveries.",
      "ETRM uses forward curves for trade valuation and MTM.",
      "Forward curves help calculate unrealized P&L.",
      "They support hedging and trading decisions."
    ],
    "examples": [
      {
        "title": "January Crude Oil Purchase",
        "scenario": "A trader plans to buy 10,000 BBL of crude oil for January delivery. If the January forward price is $80/BBL, the estimated market value is $800,000."
      }
    ],
    "summary": "A forward curve is a collection of market prices for a commodity across different future dates or delivery periods.",
    "content": "Meaning of Forward Curve:\nA forward curve is a collection of market prices for a commodity across different future dates or delivery periods. It shows the current market value expected for future delivery periods. Traders use it to estimate the value of future purchases and sales.\n\nExample:\nAn oil trader plans to buy crude oil for delivery in January. The trader checks the January forward price to estimate the market value of that future delivery. The forward price helps with planning, valuation and trading decisions.\n\nWhy Forward Curves Are Important in ETRM:\nValue open trades using current forward market prices. Calculate Mark-to-Market (MTM) and unrealized Profit and Loss (P&L). Support hedging decisions and evaluate future buying or selling opportunities."
  },
  {
    "id": "92",
    "title": "Contango vs Backwardation",
    "category": "Oil",
    "order": 92,
    "sections": [
      {
        "heading": "What Is Contango?",
        "points": [
          "Contango occurs when future prices are higher than the current spot price.",
          "The forward curve generally slopes upward.",
          "It can occur due to storage costs, financing costs and expectations of future supply and demand."
        ]
      },
      {
        "heading": "Contango Example",
        "points": [
          "Spot Price = $75/BBL.",
          "Future Price = $80/BBL.",
          "Future price is higher, so the market is in contango."
        ]
      },
      {
        "heading": "What Is Backwardation?",
        "points": [
          "Backwardation occurs when future prices are lower than the current spot price.",
          "The forward curve generally slopes downward.",
          "It can occur when immediate supply is tight or current demand is strong."
        ]
      },
      {
        "heading": "Backwardation Example",
        "points": [
          "Spot Price = $80/BBL.",
          "Future Price = $75/BBL.",
          "Future price is lower, so the market is in backwardation."
        ]
      },
      {
        "heading": "Importance in ETRM",
        "points": [
          "Helps traders understand market conditions across delivery periods.",
          "Supports MTM valuation and forward trade analysis.",
          "Helps risk teams evaluate inventory, storage and hedging strategies."
        ]
      }
    ],
    "keyTakeaways": [
      "Contango: Future price is higher than spot price.",
      "Backwardation: Future price is lower than spot price.",
      "Contango generally has an upward-sloping forward curve.",
      "Backwardation generally has a downward-sloping forward curve.",
      "Both conditions help traders analyze commodity market conditions."
    ],
    "examples": [
      {
        "title": "Contango",
        "scenario": "Spot price is $75/BBL and future price is $80/BBL. Since the future price is higher, the market is in contango."
      },
      {
        "title": "Backwardation",
        "scenario": "Spot price is $80/BBL and future price is $75/BBL. Since the future price is lower, the market is in backwardation."
      }
    ],
    "summary": "Contango occurs when future prices are higher than the current spot price.",
    "content": "What Is Contango?:\nContango occurs when future prices are higher than the current spot price. The forward curve generally slopes upward. It can occur due to storage costs, financing costs and expectations of future supply and demand.\n\nContango Example:\nSpot Price = $75/BBL. Future Price = $80/BBL. Future price is higher, so the market is in contango.\n\nWhat Is Backwardation?:\nBackwardation occurs when future prices are lower than the current spot price. The forward curve generally slopes downward. It can occur when immediate supply is tight or current demand is strong.\n\nBackwardation Example:\nSpot Price = $80/BBL. Future Price = $75/BBL. Future price is lower, so the market is in backwardation.\n\nImportance in ETRM:\nHelps traders understand market conditions across delivery periods. Supports MTM valuation and forward trade analysis. Helps risk teams evaluate inventory, storage and hedging strategies."
  },
  {
    "id": "93",
    "title": "MTM Formula for Buy and Sell Trades",
    "category": "Oil",
    "order": 93,
    "sections": [
      {
        "heading": "MTM for Buy / Long Position",
        "points": [
          "A buy trade makes a profit when the market price increases above the trade price.",
          "Formula: (Market Price - Trade Price) × Quantity.",
          "A positive result indicates an unrealized gain; a negative result indicates an unrealized loss."
        ]
      },
      {
        "heading": "MTM for Sell / Short Position",
        "points": [
          "A sell trade makes a profit when the market price decreases below the trade price.",
          "Formula: (Trade Price - Market Price) × Quantity.",
          "A positive result indicates an unrealized gain; a negative result indicates an unrealized loss."
        ]
      },
      {
        "heading": "Important ETRM Considerations",
        "points": [
          "These are simplified calculations assuming the same quantity, pricing basis and delivery period.",
          "Real ETRM valuation may use forward curves, differentials, FX, discounting, timing, fees and other valuation adjustments.",
          "MTM represents the estimated current value of an open position, not necessarily realized profit or cash received."
        ]
      }
    ],
    "keyTakeaways": [
      "Buy / Long MTM = (Market Price - Trade Price) × Quantity.",
      "Sell / Short MTM = (Trade Price - Market Price) × Quantity.",
      "Buy positions benefit when market prices increase.",
      "Sell positions benefit when market prices decrease.",
      "MTM is generally an unrealized gain or loss for open positions."
    ],
    "examples": [
      {
        "title": "Buy Trade MTM",
        "scenario": "Buy 5,000 BBL at $70/BBL. Market price = $75/BBL. MTM = ($75 - $70) × 5,000 = +$25,000 unrealized gain."
      },
      {
        "title": "Sell Trade MTM",
        "scenario": "Sell 5,000 BBL at $70/BBL. Market price = $75/BBL. MTM = ($70 - $75) × 5,000 = -$25,000 unrealized loss."
      }
    ],
    "summary": "A buy trade makes a profit when the market price increases above the trade price.",
    "content": "MTM for Buy / Long Position:\nA buy trade makes a profit when the market price increases above the trade price. Formula: (Market Price - Trade Price) × Quantity. A positive result indicates an unrealized gain; a negative result indicates an unrealized loss.\n\nMTM for Sell / Short Position:\nA sell trade makes a profit when the market price decreases below the trade price. Formula: (Trade Price - Market Price) × Quantity. A positive result indicates an unrealized gain; a negative result indicates an unrealized loss.\n\nImportant ETRM Considerations:\nThese are simplified calculations assuming the same quantity, pricing basis and delivery period. Real ETRM valuation may use forward curves, differentials, FX, discounting, timing, fees and other valuation adjustments. MTM represents the estimated current value of an open position, not necessarily realized profit or cash received."
  },
  {
    "id": "94",
    "title": "What Is P&L (Profit and Loss)?",
    "category": "Oil",
    "order": 94,
    "sections": [
      {
        "heading": "Meaning of P&L",
        "points": [
          "P&L stands for Profit and Loss.",
          "It tells a company whether its trading activities are generating profits or losses.",
          "In ETRM, P&L helps traders and risk teams monitor trading performance."
        ]
      },
      {
        "heading": "Realized P&L",
        "points": [
          "Realized P&L is the profit or loss from a position that has been closed or economically realized.",
          "It is calculated using the actual economic result of the transaction.",
          "A positive value means profit; a negative value means loss."
        ]
      },
      {
        "heading": "Unrealized P&L",
        "points": [
          "Unrealized P&L is the estimated profit or loss on an open position based on current market prices.",
          "It can change as market prices move.",
          "It is not yet a realized profit or loss."
        ]
      },
      {
        "heading": "Importance in ETRM",
        "points": [
          "Tracks realized and unrealized trading performance.",
          "Helps traders understand the financial impact of open positions.",
          "Supports risk monitoring and management reporting."
        ]
      }
    ],
    "keyTakeaways": [
      "P&L means Profit and Loss.",
      "Realized P&L relates to economically realized positions.",
      "Unrealized P&L relates to open positions valued at current market prices.",
      "Unrealized P&L can change when market prices move.",
      "MTM is commonly used to calculate the unrealized value of open positions."
    ],
    "examples": [
      {
        "title": "Realized P&L",
        "scenario": "ABC buys 10,000 BBL at $70 and later sells them at $75. Realized P&L = ($75 - $70) × 10,000 = +$50,000 profit."
      },
      {
        "title": "Unrealized P&L",
        "scenario": "ABC buys 10,000 BBL at $70 and still holds the oil. Current market price = $75. Unrealized P&L = ($75 - $70) × 10,000 = +$50,000 estimated gain."
      }
    ],
    "summary": "P&L stands for Profit and Loss.",
    "content": "Meaning of P&L:\nP&L stands for Profit and Loss. It tells a company whether its trading activities are generating profits or losses. In ETRM, P&L helps traders and risk teams monitor trading performance.\n\nRealized P&L:\nRealized P&L is the profit or loss from a position that has been closed or economically realized. It is calculated using the actual economic result of the transaction. A positive value means profit; a negative value means loss.\n\nUnrealized P&L:\nUnrealized P&L is the estimated profit or loss on an open position based on current market prices. It can change as market prices move. It is not yet a realized profit or loss.\n\nImportance in ETRM:\nTracks realized and unrealized trading performance. Helps traders understand the financial impact of open positions. Supports risk monitoring and management reporting."
  },
  {
    "id": "95",
    "title": "What Is Accounts Payable (AP)?",
    "category": "Oil",
    "order": 95,
    "sections": [
      {
        "heading": "Meaning of Accounts Payable",
        "points": [
          "Accounts Payable (AP) is money that a company owes to its suppliers or vendors.",
          "It is recorded as a liability because the company has an obligation to make payment.",
          "In ETRM, AP is commonly created when a company purchases commodities and receives a supplier invoice."
        ]
      },
      {
        "heading": "Example",
        "points": [
          "ABC Energy purchases crude oil from XYZ Oil.",
          "Quantity = 10,000 BBL.",
          "Price = $80/BBL.",
          "Invoice amount = $800,000.",
          "ABC Energy must pay XYZ Oil $800,000, so this amount is recorded as Accounts Payable."
        ]
      },
      {
        "heading": "Importance of AP in ETRM",
        "points": [
          "Records amounts owed to commodity suppliers.",
          "Tracks supplier invoices and payment due dates.",
          "Helps finance teams monitor outstanding payments and settle invoices."
        ]
      }
    ],
    "keyTakeaways": [
      "AP means Accounts Payable.",
      "AP is money our company owes to suppliers or vendors.",
      "AP is recorded as a liability.",
      "Purchase invoices generally create AP.",
      "AP is settled when the company makes the required payment."
    ],
    "examples": [
      {
        "title": "Crude Oil Purchase",
        "scenario": "ABC Energy purchases 10,000 BBL from XYZ Oil at $80/BBL. Invoice = 10,000 × $80 = $800,000. ABC Energy records $800,000 as Accounts Payable."
      }
    ],
    "summary": "Accounts Payable (AP) is money that a company owes to its suppliers or vendors.",
    "content": "Meaning of Accounts Payable:\nAccounts Payable (AP) is money that a company owes to its suppliers or vendors. It is recorded as a liability because the company has an obligation to make payment. In ETRM, AP is commonly created when a company purchases commodities and receives a supplier invoice.\n\nExample:\nABC Energy purchases crude oil from XYZ Oil. Quantity = 10,000 BBL. Price = $80/BBL. Invoice amount = $800,000. ABC Energy must pay XYZ Oil $800,000, so this amount is recorded as Accounts Payable.\n\nImportance of AP in ETRM:\nRecords amounts owed to commodity suppliers. Tracks supplier invoices and payment due dates. Helps finance teams monitor outstanding payments and settle invoices."
  },
  {
    "id": "96",
    "title": "What Is Accounts Receivable (AR)?",
    "category": "Oil",
    "order": 96,
    "sections": [
      {
        "heading": "Meaning of Accounts Receivable",
        "points": [
          "Accounts Receivable (AR) is money that customers owe to our company.",
          "It is recorded as an asset because the company expects to receive payment.",
          "In ETRM, AR is commonly created when a company sells commodities and issues a customer invoice."
        ]
      },
      {
        "heading": "Example",
        "points": [
          "ABC Energy sells crude oil to DEF Refinery.",
          "Quantity = 10,000 BBL.",
          "Selling Price = $85/BBL.",
          "Invoice Amount = $850,000.",
          "DEF Refinery must pay ABC Energy $850,000, so ABC Energy records this amount as Accounts Receivable."
        ]
      },
      {
        "heading": "Importance of AR in ETRM",
        "points": [
          "Records amounts customers owe to the company.",
          "Tracks customer invoices and payment due dates.",
          "Helps finance teams monitor outstanding receivables and incoming payments."
        ]
      }
    ],
    "keyTakeaways": [
      "AR means Accounts Receivable.",
      "AR is money customers owe to our company.",
      "AR is recorded as an asset.",
      "Sales invoices generally create AR.",
      "AR is reduced when the company receives customer payments."
    ],
    "examples": [
      {
        "title": "Crude Oil Sales",
        "scenario": "ABC Energy sells 10,000 BBL to DEF Refinery at $85/BBL. Invoice = 10,000 × $85 = $850,000. ABC Energy records $850,000 as Accounts Receivable."
      }
    ],
    "summary": "Accounts Receivable (AR) is money that customers owe to our company.",
    "content": "Meaning of Accounts Receivable:\nAccounts Receivable (AR) is money that customers owe to our company. It is recorded as an asset because the company expects to receive payment. In ETRM, AR is commonly created when a company sells commodities and issues a customer invoice.\n\nExample:\nABC Energy sells crude oil to DEF Refinery. Quantity = 10,000 BBL. Selling Price = $85/BBL. Invoice Amount = $850,000. DEF Refinery must pay ABC Energy $850,000, so ABC Energy records this amount as Accounts Receivable.\n\nImportance of AR in ETRM:\nRecords amounts customers owe to the company. Tracks customer invoices and payment due dates. Helps finance teams monitor outstanding receivables and incoming payments."
  },
  {
    "id": "97",
    "title": "What Is an Invoice?",
    "category": "Oil",
    "order": 97,
    "sections": [
      {
        "heading": "Meaning of an Invoice",
        "points": [
          "An invoice is a commercial document that specifies the amount payable or receivable for a transaction.",
          "A purchase invoice generally creates Accounts Payable (AP).",
          "A sales invoice generally creates Accounts Receivable (AR)."
        ]
      },
      {
        "heading": "Important Fields in an Oil Invoice",
        "points": [
          "Invoice Number: Unique invoice identification, e.g. INV1001.",
          "Trade ID: Related trade reference, e.g. TRD1001.",
          "Counterparty: Supplier or customer name.",
          "Commodity: Crude Oil, Natural Gas or Power.",
          "Quantity and Price: Example: 10,000 BBL at $80/BBL.",
          "Commodity Value: Quantity × Price = $800,000.",
          "Freight: Additional charge, e.g. $10,000.",
          "Total Amount: $810,000, assuming freight is added separately.",
          "Currency, Due Date and Payment Terms: Define the payment currency, deadline and conditions."
        ]
      },
      {
        "heading": "How ETRM Uses Invoices",
        "points": [
          "Generates purchase or sales invoices based on trade details and contractual terms.",
          "Links invoices to trades and counterparties.",
          "Tracks invoice amounts, due dates, approvals and payment status.",
          "Supports AP, AR and financial settlement processes."
        ]
      }
    ],
    "keyTakeaways": [
      "An invoice is a document showing how much money must be paid or received.",
      "Purchase invoice generally creates AP.",
      "Sales invoice generally creates AR.",
      "Commodity value = Quantity × Price.",
      "Freight and other charges may be added according to contract terms."
    ],
    "examples": [
      {
        "title": "Crude Oil Purchase Invoice",
        "scenario": "Invoice INV1001 is linked to trade TRD1001. ABC Energy purchases 10,000 BBL from XYZ Oil at $80/BBL. Commodity Value = $800,000. Freight = $10,000. Total Invoice = $810,000 USD. Payment terms = Net 30, with a due date of 30 November."
      }
    ],
    "summary": "An invoice is a commercial document that specifies the amount payable or receivable for a transaction.",
    "content": "Meaning of an Invoice:\nAn invoice is a commercial document that specifies the amount payable or receivable for a transaction. A purchase invoice generally creates Accounts Payable (AP). A sales invoice generally creates Accounts Receivable (AR).\n\nImportant Fields in an Oil Invoice:\nInvoice Number: Unique invoice identification, e.g. INV1001. Trade ID: Related trade reference, e.g. TRD1001. Counterparty: Supplier or customer name. Commodity: Crude Oil, Natural Gas or Power. Quantity and Price: Example: 10,000 BBL at $80/BBL. Commodity Value: Quantity × Price = $800,000. Freight: Additional charge, e.g. $10,000. Total Amount: $810,000, assuming freight is added separately. Currency, Due Date and Payment Terms: Define the payment currency, deadline and conditions.\n\nHow ETRM Uses Invoices:\nGenerates purchase or sales invoices based on trade details and contractual terms. Links invoices to trades and counterparties. Tracks invoice amounts, due dates, approvals and payment status. Supports AP, AR and financial settlement processes."
  },
  {
    "id": "98",
    "title": "How Is an Invoice Generated?",
    "category": "Oil",
    "order": 98,
    "sections": [
      {
        "heading": "Scenario A: Supplier Invoice",
        "points": [
          "Our company purchases a commodity from a supplier.",
          "The supplier sends an invoice to our company.",
          "We validate the invoice against the purchase trade, contract and supporting documents.",
          "After validation and approval, the invoice is processed for payment.",
          "This generally creates Accounts Payable (AP)."
        ]
      },
      {
        "heading": "Scenario B: Customer Invoice",
        "points": [
          "Our company sells a commodity to a customer.",
          "Our company generates an invoice and sends it to the customer.",
          "The invoice contains the agreed quantity, price, fees and other applicable charges.",
          "The customer is expected to make payment according to the agreed terms.",
          "This generally creates Accounts Receivable (AR)."
        ]
      },
      {
        "heading": "How ETRM Generates Invoices",
        "points": [
          "Uses contractual pricing and agreed billing rules.",
          "Uses actual or contractually applicable quantities.",
          "Includes applicable fees, freight, taxes and other charges.",
          "Calculates the invoice amount and links it to the relevant trade.",
          "Routes the invoice for validation, approval and financial processing."
        ]
      }
    ],
    "keyTakeaways": [
      "Supplier invoice: Supplier sends an invoice to our company.",
      "Customer invoice: Our company generates and sends an invoice to the customer.",
      "Purchase invoices generally create AP.",
      "Sales invoices generally create AR.",
      "ETRM uses pricing, quantities, fees and contractual billing rules to calculate invoices."
    ],
    "examples": [
      {
        "title": "Supplier Invoice",
        "scenario": "ABC Energy purchases 10,000 BBL from XYZ Oil. XYZ Oil sends an invoice for $800,000. ABC Energy validates it against the purchase trade and supporting documents before processing payment."
      },
      {
        "title": "Customer Invoice",
        "scenario": "ABC Energy sells 10,000 BBL to DEF Refinery at $85/BBL. ABC Energy generates an invoice for $850,000 and sends it to DEF Refinery for payment."
      }
    ],
    "summary": "Our company purchases a commodity from a supplier.",
    "content": "Scenario A: Supplier Invoice:\nOur company purchases a commodity from a supplier. The supplier sends an invoice to our company. We validate the invoice against the purchase trade, contract and supporting documents. After validation and approval, the invoice is processed for payment. This generally creates Accounts Payable (AP).\n\nScenario B: Customer Invoice:\nOur company sells a commodity to a customer. Our company generates an invoice and sends it to the customer. The invoice contains the agreed quantity, price, fees and other applicable charges. The customer is expected to make payment according to the agreed terms. This generally creates Accounts Receivable (AR).\n\nHow ETRM Generates Invoices:\nUses contractual pricing and agreed billing rules. Uses actual or contractually applicable quantities. Includes applicable fees, freight, taxes and other charges. Calculates the invoice amount and links it to the relevant trade. Routes the invoice for validation, approval and financial processing."
  },
  {
    "id": "99",
    "title": "What Is a Debit Note?",
    "category": "Oil",
    "order": 99,
    "sections": [
      {
        "heading": "Meaning of Debit Note",
        "points": [
          "A debit note is a document used to communicate or record an additional amount being claimed from another party.",
          "It may be used when an invoice needs an upward adjustment.",
          "Its accounting impact depends on the transaction and which party issues it."
        ]
      },
      {
        "heading": "When Is a Debit Note Used?",
        "points": [
          "When additional charges are identified.",
          "When the original invoice amount is lower than the contractually correct amount.",
          "When quantity, price, freight or other contractual adjustments increase the amount payable or receivable."
        ]
      },
      {
        "heading": "Importance in ETRM",
        "points": [
          "Records invoice adjustments without losing the original invoice history.",
          "Links adjustments to the relevant trade and invoice.",
          "Helps maintain accurate AP and AR balances."
        ]
      }
    ],
    "keyTakeaways": [
      "A debit note communicates or records an additional amount being claimed.",
      "It may increase the amount payable or receivable.",
      "The accounting impact depends on who issues the debit note.",
      "It can be used for price, quantity, freight and other contractual adjustments.",
      "ETRM maintains the adjustment and its link to the original transaction."
    ],
    "examples": [
      {
        "title": "Additional Supplier Payment",
        "scenario": "ABC Energy receives a supplier invoice for $100,000. After reviewing the contract, ABC identifies an additional $5,000 payable. ABC may issue a debit note to XYZ Oil to communicate or claim this adjustment, according to their agreed process."
      }
    ],
    "summary": "A debit note is a document used to communicate or record an additional amount being claimed from another party.",
    "content": "Meaning of Debit Note:\nA debit note is a document used to communicate or record an additional amount being claimed from another party. It may be used when an invoice needs an upward adjustment. Its accounting impact depends on the transaction and which party issues it.\n\nWhen Is a Debit Note Used?:\nWhen additional charges are identified. When the original invoice amount is lower than the contractually correct amount. When quantity, price, freight or other contractual adjustments increase the amount payable or receivable.\n\nImportance in ETRM:\nRecords invoice adjustments without losing the original invoice history. Links adjustments to the relevant trade and invoice. Helps maintain accurate AP and AR balances."
  },
  {
    "id": "100",
    "title": "What Is a Credit Note?",
    "category": "Oil",
    "order": 100,
    "sections": [
      {
        "heading": "Meaning of Credit Note",
        "points": [
          "A credit note is a document used to reduce the amount of an existing invoice.",
          "It is issued when the original invoice contains an overcharge, incorrect quantity, incorrect price or other adjustment.",
          "It reduces the amount payable or receivable, depending on the transaction."
        ]
      },
      {
        "heading": "When Is a Credit Note Used?",
        "points": [
          "When a supplier overcharges our company.",
          "When the invoiced quantity is higher than the correct quantity.",
          "When a price correction or discount reduces the invoice amount.",
          "When contractual adjustments require a reduction."
        ]
      },
      {
        "heading": "Importance in ETRM",
        "points": [
          "Records invoice reductions while maintaining the original invoice history.",
          "Links the credit note to the original invoice and trade.",
          "Updates the relevant AP or AR balance."
        ]
      }
    ],
    "keyTakeaways": [
      "A credit note reduces an existing invoice amount.",
      "It can correct overcharges, quantity errors and pricing errors.",
      "It reduces AP when received from a supplier.",
      "It reduces AR when issued to a customer.",
      "ETRM maintains the credit note against the original invoice."
    ],
    "examples": [
      {
        "title": "Supplier Overcharge Correction",
        "scenario": "XYZ Oil sends ABC Energy an invoice for $100,000. ABC identifies an overcharge of $5,000. XYZ Oil issues a credit note for $5,000. Revised payable amount = $100,000 - $5,000 = $95,000."
      }
    ],
    "summary": "A credit note is a document used to reduce the amount of an existing invoice.",
    "content": "Meaning of Credit Note:\nA credit note is a document used to reduce the amount of an existing invoice. It is issued when the original invoice contains an overcharge, incorrect quantity, incorrect price or other adjustment. It reduces the amount payable or receivable, depending on the transaction.\n\nWhen Is a Credit Note Used?:\nWhen a supplier overcharges our company. When the invoiced quantity is higher than the correct quantity. When a price correction or discount reduces the invoice amount. When contractual adjustments require a reduction.\n\nImportance in ETRM:\nRecords invoice reductions while maintaining the original invoice history. Links the credit note to the original invoice and trade. Updates the relevant AP or AR balance."
  },
  {
    "id": "101",
    "title": "What Is Reconciliation in ETRM?",
    "category": "Invoice Management",
    "order": 101,
    "sections": [
      {
        "heading": "Meaning of Reconciliation",
        "points": [
          "Reconciliation means comparing records across systems to verify that financial and operational information agrees.",
          "In ETRM, it commonly involves comparing trade, invoice and payment information with ERP records.",
          "Any mismatch must be investigated and corrected."
        ]
      },
      {
        "heading": "ETRM vs ERP Reconciliation",
        "points": [
          "Trade ID in ETRM is compared with the accounting reference in ERP.",
          "Invoice amount is compared with the posted payable or receivable.",
          "Counterparty is compared with the vendor or customer account.",
          "Currency is compared with the accounting currency, considering any conversion.",
          "Payment status is compared with the payment document status."
        ]
      },
      {
        "heading": "How Reconciliation Works",
        "points": [
          "ETRM generates an invoice and sends the financial information to ERP.",
          "ERP records the corresponding accounting transaction.",
          "The finance or integration team compares the records.",
          "Matching records are considered reconciled.",
          "Mismatches are investigated, corrected and reconciled again."
        ]
      },
      {
        "heading": "Common Reconciliation Issues",
        "points": [
          "Different invoice amounts between ETRM and ERP.",
          "Incorrect vendor or customer mapping.",
          "Currency conversion differences.",
          "Duplicate or missing invoice records.",
          "Payment status not updated correctly."
        ]
      }
    ],
    "keyTakeaways": [
      "Reconciliation verifies whether records match across systems.",
      "ETRM manages commodity trades and related invoices.",
      "ERP manages accounting and financial postings.",
      "Invoice amount, counterparty, currency and payment status are common reconciliation fields.",
      "Every mismatch must be investigated before reconciliation is completed."
    ],
    "examples": [
      {
        "title": "ETRM vs ERP Invoice Reconciliation",
        "scenario": "ETRM invoice = $250,000 and ERP invoice = $250,000. The amounts match. If ERP shows $245,000 instead, there is a $5,000 difference that the integration or accounting team must investigate."
      }
    ],
    "summary": "Reconciliation means comparing records across systems to verify that financial and operational information agrees.",
    "content": "Meaning of Reconciliation:\nReconciliation means comparing records across systems to verify that financial and operational information agrees. In ETRM, it commonly involves comparing trade, invoice and payment information with ERP records. Any mismatch must be investigated and corrected.\n\nETRM vs ERP Reconciliation:\nTrade ID in ETRM is compared with the accounting reference in ERP. Invoice amount is compared with the posted payable or receivable. Counterparty is compared with the vendor or customer account. Currency is compared with the accounting currency, considering any conversion. Payment status is compared with the payment document status.\n\nHow Reconciliation Works:\nETRM generates an invoice and sends the financial information to ERP. ERP records the corresponding accounting transaction. The finance or integration team compares the records. Matching records are considered reconciled. Mismatches are investigated, corrected and reconciled again.\n\nCommon Reconciliation Issues:\nDifferent invoice amounts between ETRM and ERP. Incorrect vendor or customer mapping. Currency conversion differences. Duplicate or missing invoice records. Payment status not updated correctly."
  },
  {
    "id": "102",
    "title": "Energy Commodities Overview",
    "category": "Foundations",
    "order": 103,
    "summary": "Understanding the core energy products: Crude Oil, Natural Gas, Electricity, and Renewables.",
    "content": "The energy market consists of diverse commodities, each with unique trading characteristics. From the global influence of OPEC on Crude Oil to the localized, real-time nature of Electricity markets, understanding these differences is fundamental to ETRM.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "The energy market consists of diverse commodities, each with unique trading characteristics. From the global influence of OPEC on Crude Oil to the localized, real-time nature of Electricity markets, understanding these differences is fundamental to ETRM."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Crude Oil: Traded globally via benchmarks like Brent and WTI; influenced heavily by geopolitics.",
          "Natural Gas & LNG: Priced at hubs (like Henry Hub); involves complex storage and pipeline logistics.",
          "Electricity: Unique because it cannot be easily stored; traded in Day-Ahead and Real-Time markets.",
          "Renewables & Carbon: Rapidly growing sector involving wind, solar, and regulatory carbon offsets."
        ]
      }
    ],
    "keyTakeaways": [
      "Crude Oil: Traded globally via benchmarks like Brent and WTI; influenced heavily by geopolitics.",
      "Natural Gas & LNG: Priced at hubs (like Henry Hub); involves complex storage and pipeline logistics.",
      "Electricity: Unique because it cannot be easily stored; traded in Day-Ahead and Real-Time markets.",
      "Renewables & Carbon: Rapidly growing sector involving wind, solar, and regulatory carbon offsets."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Trading WTI futures on NYMEX to hedge against rising gasoline prices."
      },
      {
        "title": "Practical Application 2",
        "scenario": "A Power Plant bidding into an ISO (Independent System Operator) to provide \"Ancillary Services\" for grid stability."
      },
      {
        "title": "Practical Application 3",
        "scenario": "An LNG exporter managing \"Boil-off\" gas during a 20-day ocean voyage to Asia."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "104",
    "title": "Spot vs Forward vs Futures",
    "category": "Foundations",
    "order": 105,
    "summary": "The three primary ways energy is bought and sold: Immediate, OTC, or Exchange-traded.",
    "content": "Energy trades are categorized by when the commodity is delivered and where the trade happens. Choosing between Spot, Forward, or Futures depends on whether a company needs immediate supply or wants to lock in prices for the future.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Energy trades are categorized by when the commodity is delivered and where the trade happens. Choosing between Spot, Forward, or Futures depends on whether a company needs immediate supply or wants to lock in prices for the future."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Spot Market: Immediate delivery (usually within 2 days). Used for balancing sudden demand spikes.",
          "Forward Contracts: Custom Over-the-Counter (OTC) agreements between two private parties for future delivery.",
          "Futures Contracts: Standardized contracts traded on public exchanges (like ICE or NYMEX) with guaranteed clearing.",
          "Hedging: Using Futures or Forwards to protect against future price volatility."
        ]
      }
    ],
    "keyTakeaways": [
      "Spot Market: Immediate delivery (usually within 2 days). Used for balancing sudden demand spikes.",
      "Forward Contracts: Custom Over-the-Counter (OTC) agreements between two private parties for future delivery.",
      "Futures Contracts: Standardized contracts traded on public exchanges (like ICE or NYMEX) with guaranteed clearing.",
      "Hedging: Using Futures or Forwards to protect against future price volatility."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A Trucking company buying diesel on the Spot market when their local tank runs low."
      },
      {
        "title": "Practical Application 2",
        "scenario": "An Airline signing a 1-year Forward contract with a fuel supplier to fix their jet fuel costs."
      },
      {
        "title": "Practical Application 3",
        "scenario": "A Speculative trader selling 100 contracts of Crude Oil Futures on NYMEX, betting that prices will drop by December."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1611974714658-66d2c13ee0a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "106",
    "title": "Types of Energy Trades",
    "category": "Foundations",
    "order": 107,
    "summary": "Exploring Physical trades, Financial swaps, and complex Structured deals.",
    "content": "Trading in ETRM goes beyond simple buying and selling. It involves a mix of physical movements (actual molecules) and financial instruments (paper trades) used to manage price risk and optimize portfolios.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Trading in ETRM goes beyond simple buying and selling. It involves a mix of physical movements (actual molecules) and financial instruments (paper trades) used to manage price risk and optimize portfolios."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Physical Trades: Actual delivery of oil, gas, or power at a specific location.",
          "Financial Trades: Cash-settled instruments used for hedging without moving physical product.",
          "Swaps: Exchanging a floating price for a fixed price over a set period.",
          "Options: The right (but not obligation) to buy or sell at a specific price.",
          "Structured Deals: Complex, multi-leg contracts often involving storage or transportation rights."
        ]
      }
    ],
    "keyTakeaways": [
      "Physical Trades: Actual delivery of oil, gas, or power at a specific location.",
      "Financial Trades: Cash-settled instruments used for hedging without moving physical product.",
      "Swaps: Exchanging a floating price for a fixed price over a set period.",
      "Options: The right (but not obligation) to buy or sell at a specific price.",
      "Structured Deals: Complex, multi-leg contracts often involving storage or transportation rights."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Executing a \"Location Swap\" - exchanging gas at Henry Hub for gas at Chicago Citygate."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Buying a \"Call Option\" to protect against a spike in winter heating oil prices."
      },
      {
        "title": "Practical Application 3",
        "scenario": "A \"Spark Spread\" trade - simultaneously buying gas and selling electricity to lock in power plant margins."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "108",
    "title": "Deal Lifecycle - What happens to a deal after it’s booked",
    "category": "Foundations",
    "order": 109,
    "summary": "Closer Look at the Stages a Deal Goes Through in ETRM",
    "content": "An ETRM system tracks a trade through several critical stages to ensure accuracy, risk management, and financial integrity. From the moment a trader enters a deal to its final closure, every step is logged and validated.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "An ETRM system tracks a trade through several critical stages to ensure accuracy, risk management, and financial integrity. From the moment a trader enters a deal to its final closure, every step is logged and validated."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "1. Deal Creation: The trade is entered into the system with all key details like commodity type, quantity, price, counterparty, and delivery date.",
          "2. Validation & Confirmation: Both sides of the trade validate and confirm the deal to ensure accuracy and legal binding.",
          "3. Risk & Credit Management: The trade is assessed for market and credit risks to mitigate financial exposure.",
          "4. Scheduling & Nomination: For physical trades, the delivery or receipt of the commodity is scheduled and logistics are managed.",
          "5. Settlement & Invoicing: Once the delivery date is reached, financial settlement takes place and invoices are generated.",
          "6. Accounting & Reporting: The trade is recorded for accurate profit and loss (PnL) tracking and regulatory compliance.",
          "7. Amendments & Modifications: Any required changes to price or delivery are tracked as amendments to the original deal.",
          "8. Deal Closure: After all obligations are fulfilled, the trade is formally closed or matured in the system."
        ]
      }
    ],
    "keyTakeaways": [
      "1. Deal Creation: The trade is entered into the system with all key details like commodity type, quantity, price, counterparty, and delivery date.",
      "2. Validation & Confirmation: Both sides of the trade validate and confirm the deal to ensure accuracy and legal binding.",
      "3. Risk & Credit Management: The trade is assessed for market and credit risks to mitigate financial exposure.",
      "4. Scheduling & Nomination: For physical trades, the delivery or receipt of the commodity is scheduled and logistics are managed.",
      "5. Settlement & Invoicing: Once the delivery date is reached, financial settlement takes place and invoices are generated."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Creation Example: A trader agrees to buy 1,000 barrels of crude oil for delivery next month at $70/barrel."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Risk Example: The system analyzes potential risks of oil price volatility and the creditworthiness of the counterparty."
      },
      {
        "title": "Practical Application 3",
        "scenario": "Closure Example: After the oil is delivered, the invoice is paid, and the deal is settled, it is formally closed in the system."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1454165833767-027eeef1593e?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "110",
    "title": "Pricing Mechanisms",
    "category": "Foundations",
    "order": 111,
    "summary": "How prices are set using Fixed, Floating, and Index-based referencing.",
    "content": "Energy contracts rarely use just a simple dollar amount. They often reference \"Indices\" published by agencies like Platts or Argus, allowing prices to move with the global market.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Energy contracts rarely use just a simple dollar amount. They often reference \"Indices\" published by agencies like Platts or Argus, allowing prices to move with the global market."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Fixed Pricing: A set price (e.g., $75/bbl) that never changes regardless of the market.",
          "Floating/Index Pricing: Price is tied to a benchmark (e.g., \"Brent + $1.50\").",
          "Platts/Argus: Independent agencies that publish daily \"Assessments\" used as the industry standard.",
          "Differential/Basis: The price difference between two different locations or grades of oil."
        ]
      }
    ],
    "keyTakeaways": [
      "Fixed Pricing: A set price (e.g., $75/bbl) that never changes regardless of the market.",
      "Floating/Index Pricing: Price is tied to a benchmark (e.g., \"Brent + $1.50\").",
      "Platts/Argus: Independent agencies that publish daily \"Assessments\" used as the industry standard.",
      "Differential/Basis: The price difference between two different locations or grades of oil."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A contract for fuel oil priced at the \"Average of Platts Singapore\" for the month of July."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Selling gas at \"Henry Hub Index minus $0.20\" to account for transportation costs from the wellhead."
      },
      {
        "title": "Practical Application 3",
        "scenario": "A power deal where the price is \"Fixed\" at $40/MWh for 5 years to provide revenue certainty for a new solar farm."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "7",
    "title": "Risk Types in Energy",
    "category": "Risk,Valuations & PnL",
    "order": 112,
    "summary": "The five major threats to a trading firm: Market, Credit, Operational, Liquidity, and Regulatory.",
    "content": "Risk management is the \"RM\" in ETRM. Because energy prices are so volatile, companies must constantly monitor multiple fronts to prevent bankruptcy.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Risk management is the \"RM\" in ETRM. Because energy prices are so volatile, companies must constantly monitor multiple fronts to prevent bankruptcy."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Market Risk: The danger that prices will move against your position (e.g., you are \"Long\" and prices crash).",
          "Credit Risk: The danger that your counterparty will go bankrupt and not pay you.",
          "Operational Risk: Human error, system failure, or pipeline explosions.",
          "Liquidity Risk: Not being able to sell your position because no one is buying.",
          "Regulatory Risk: Changes in government laws or carbon taxes."
        ]
      }
    ],
    "keyTakeaways": [
      "Market Risk: The danger that prices will move against your position (e.g., you are \"Long\" and prices crash).",
      "Credit Risk: The danger that your counterparty will go bankrupt and not pay you.",
      "Operational Risk: Human error, system failure, or pipeline explosions.",
      "Liquidity Risk: Not being able to sell your position because no one is buying.",
      "Regulatory Risk: Changes in government laws or carbon taxes."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A trader forgetting to hedge a 1 million barrel shipment before a weekend where a war breaks out (Market Risk)."
      },
      {
        "title": "Practical Application 2",
        "scenario": "A major utility defaulting on its payments during a \"Polar Vortex\" energy crisis (Credit Risk)."
      },
      {
        "title": "Practical Application 3",
        "scenario": "A typing error in the ETRM entering 1,000,000 instead of 100,000 (Operational Risk)."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1533073356960-7ea0728bb266?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "113",
    "title": "Risk Metrics (VaR & Greeks)",
    "category": "Risk,Valuations & PnL",
    "order": 114,
    "summary": "Statistical tools like Value-at-Risk (VaR) and \"The Greeks\" used to quantify danger.",
    "content": "To manage risk, you must first measure it. ETRM systems use complex math to tell a CEO: \"There is a 95% chance we won't lose more than $X million tomorrow.\"",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "To manage risk, you must first measure it. ETRM systems use complex math to tell a CEO: \"There is a 95% chance we won't lose more than $X million tomorrow.\""
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Value-at-Risk (VaR): The maximum expected loss over a set time at a certain confidence level.",
          "Delta: How much your P&L changes if the commodity price moves by $1.",
          "Gamma: How fast your Delta changes (the \"acceleration\" of risk).",
          "Stress Testing: Simulating \"Black Swan\" events like the 2008 crash or COVID-19 to see if the firm survives."
        ]
      }
    ],
    "keyTakeaways": [
      "Value-at-Risk (VaR): The maximum expected loss over a set time at a certain confidence level.",
      "Delta: How much your P&L changes if the commodity price moves by $1.",
      "Gamma: How fast your Delta changes (the \"acceleration\" of risk).",
      "Stress Testing: Simulating \"Black Swan\" events like the 2008 crash or COVID-19 to see if the firm survives."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A Risk Manager reporting a 99% 1-Day VaR of $500,000 for the natural gas desk."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Using \"Delta\" to calculate exactly how many futures contracts are needed to perfectly hedge a physical oil cargo."
      },
      {
        "title": "Practical Application 3",
        "scenario": "Running a \"What-if\" scenario in the ETRM to see what happens if the price of power goes to $2,000/MWh."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "115",
    "title": "P&L Explained",
    "category": "Risk,Valuations & PnL",
    "order": 116,
    "summary": "Understanding Realized vs. Unrealized Profit and Mark-to-Market accounting.",
    "content": "In trading, you don't wait until you sell something to know if you are making money. ETRM systems \"Mark\" your trades to the current market price every single day.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "In trading, you don't wait until you sell something to know if you are making money. ETRM systems \"Mark\" your trades to the current market price every single day."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Mark-to-Market (MtM): Valuing your current positions based on today's closing market prices.",
          "Unrealized P&L: The \"Paper profit\" on trades that are still open.",
          "Realized P&L: The actual cash profit made after a trade is closed and delivered.",
          "Accrual Accounting: Recording revenue when it is earned, not just when cash is received."
        ]
      }
    ],
    "keyTakeaways": [
      "Mark-to-Market (MtM): Valuing your current positions based on today's closing market prices.",
      "Unrealized P&L: The \"Paper profit\" on trades that are still open.",
      "Realized P&L: The actual cash profit made after a trade is closed and delivered.",
      "Accrual Accounting: Recording revenue when it is earned, not just when cash is received."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "You bought oil at $70. Today it is $75. You have an \"Unrealized P&L\" of $5/bbl."
      },
      {
        "title": "Practical Application 2",
        "scenario": "The market drops to $65. Your ETRM shows a negative MtM, requiring a \"Margin Call\" payment to the exchange."
      },
      {
        "title": "Practical Application 3",
        "scenario": "At the end of the month, the physical gas is delivered, the invoice is paid, and the profit becomes \"Realized\"."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "117",
    "title": "Position Management",
    "category": "Risk,Valuations & PnL",
    "order": 118,
    "summary": "Managing \"Long\" and \"Short\" exposures and optimizing hedge ratios.",
    "content": "Position management is about knowing your \"Net Exposure\". If you have 10,000 barrels in a tank but have sold 8,000 barrels via futures, your net position is 2,000 barrels \"Long\".",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Position management is about knowing your \"Net Exposure\". If you have 10,000 barrels in a tank but have sold 8,000 barrels via futures, your net position is 2,000 barrels \"Long\"."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Long Position: You own the commodity; you benefit if prices go UP.",
          "Short Position: You owe the commodity; you benefit if prices go DOWN.",
          "Net Exposure: The total sum of all physical and financial positions.",
          "Hedge Ratio: The percentage of your physical supply that is protected by financial trades."
        ]
      }
    ],
    "keyTakeaways": [
      "Long Position: You own the commodity; you benefit if prices go UP.",
      "Short Position: You owe the commodity; you benefit if prices go DOWN.",
      "Net Exposure: The total sum of all physical and financial positions.",
      "Hedge Ratio: The percentage of your physical supply that is protected by financial trades."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "An oil producer is \"Naturally Long\" because they have oil in the ground. They \"Go Short\" in the futures market to hedge."
      },
      {
        "title": "Practical Application 2",
        "scenario": "A \"Flat Position\" - where a trader has exactly matched their buys and sells, resulting in zero market risk."
      },
      {
        "title": "Practical Application 3",
        "scenario": "Discovering a \"Bust Trade\" where a position was entered incorrectly, leaving the firm accidentally exposed to millions in risk."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "119",
    "title": "Logistics & Scheduling",
    "category": "Operations",
    "order": 120,
    "summary": "The physical side of ETRM: Nominations, Actualization, and Pipeline/Grid management.",
    "content": "In energy trading, a deal is only complete when the commodity actually moves. Logistics and Scheduling involve the complex process of \"Nominating\" volumes on pipelines or power grids and then \"Actualizing\" those volumes based on what really flowed.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "In energy trading, a deal is only complete when the commodity actually moves. Logistics and Scheduling involve the complex process of \"Nominating\" volumes on pipelines or power grids and then \"Actualizing\" those volumes based on what really flowed."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Nominations: Formally requesting a pipeline or grid operator to move a specific volume.",
          "Actualization: Updating the ETRM with the real meter readings vs. the planned volumes.",
          "Imbalance Management: Handling the difference between what was bought and what was actually used.",
          "Transport/Transmission: Managing the costs and constraints of moving energy through infrastructure."
        ]
      }
    ],
    "keyTakeaways": [
      "Nominations: Formally requesting a pipeline or grid operator to move a specific volume.",
      "Actualization: Updating the ETRM with the real meter readings vs. the planned volumes.",
      "Imbalance Management: Handling the difference between what was bought and what was actually used.",
      "Transport/Transmission: Managing the costs and constraints of moving energy through infrastructure."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A Gas Scheduler nominating 50,000 MMBtu on the Tennessee Gas Pipeline before the \"Timely Cycle\" deadline."
      },
      {
        "title": "Practical Application 2",
        "scenario": "A Power Dispatcher adjusting generation levels in real-time to match sudden drops in wind energy output."
      },
      {
        "title": "Practical Application 3",
        "scenario": "Paying \"Imbalance Penalties\" because a cold snap caused customers to use more gas than the firm had scheduled."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "121",
    "title": "Credit Risk & Collateral",
    "category": "Risk,Valuations & PnL",
    "order": 122,
    "summary": "Managing counterparty defaults and the \"Potential Future Exposure\" (PFE).",
    "content": "Credit risk is the risk that a trading partner won't pay their bill. In ETRM, we use Credit Limits and Collateral (Cash or Letters of Credit) to protect the firm from losing millions if a partner goes bust.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Credit risk is the risk that a trading partner won't pay their bill. In ETRM, we use Credit Limits and Collateral (Cash or Letters of Credit) to protect the firm from losing millions if a partner goes bust."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "PFE (Potential Future Exposure): Estimating how much a counterparty might owe us in the future if prices move.",
          "Credit Limits: The maximum dollar amount of risk allowed with a single company.",
          "Collateral Management: Holding cash or \"Letters of Credit\" (LC) as a security deposit.",
          "Netting Agreements: Reducing risk by subtracting what we owe a partner from what they owe us."
        ]
      }
    ],
    "keyTakeaways": [
      "PFE (Potential Future Exposure): Estimating how much a counterparty might owe us in the future if prices move.",
      "Credit Limits: The maximum dollar amount of risk allowed with a single company.",
      "Collateral Management: Holding cash or \"Letters of Credit\" (LC) as a security deposit.",
      "Netting Agreements: Reducing risk by subtracting what we owe a partner from what they owe us."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Refusing to sell more oil to a small retailer because they have reached their $5 Million credit limit."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Demanding a \"Margin Call\" of $1M from a trading partner after gas prices spiked, increasing our exposure to them."
      },
      {
        "title": "Practical Application 3",
        "scenario": "Executing a Master Netting Agreement to turn $100M of gross risk into only $5M of net risk."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1550565118-3d1428df7301?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "123",
    "title": "Regulatory Compliance",
    "category": "Compliance",
    "order": 124,
    "summary": "Navigating the rules of REMIT, Dodd-Frank, and FERC reporting.",
    "content": "The energy market is strictly regulated to prevent market manipulation. ETRM systems must provide \"Audit Trails\" and automated reporting to agencies like FERC (USA) or ACER (Europe).",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "The energy market is strictly regulated to prevent market manipulation. ETRM systems must provide \"Audit Trails\" and automated reporting to agencies like FERC (USA) or ACER (Europe)."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Dodd-Frank / EMIR: Laws requiring transparency and central clearing for financial swaps.",
          "REMIT: European regulation focused on preventing \"Insider Trading\" in electricity and gas.",
          "Audit Trail: A permanent record of who entered every trade and every change made to it.",
          "Know Your Customer (KYC): Verifying the identity and legitimacy of all trading partners."
        ]
      }
    ],
    "keyTakeaways": [
      "Dodd-Frank / EMIR: Laws requiring transparency and central clearing for financial swaps.",
      "REMIT: European regulation focused on preventing \"Insider Trading\" in electricity and gas.",
      "Audit Trail: A permanent record of who entered every trade and every change made to it.",
      "Know Your Customer (KYC): Verifying the identity and legitimacy of all trading partners."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Automatically reporting all \"Over-the-Counter\" (OTC) swaps to a trade repository within 24 hours."
      },
      {
        "title": "Practical Application 2",
        "scenario": "A Compliance Officer flagging a \"Wash Trade\" where two traders sell the same volume back and forth to create fake volume."
      },
      {
        "title": "Practical Application 3",
        "scenario": "Providing a full \"History of Changes\" to a government auditor during a routine market inspection."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "125",
    "title": "The Back Office: Settlements",
    "category": "Operations",
    "order": 126,
    "summary": "How the money moves: Invoicing, Netting, and Cash Management.",
    "content": "The \"Back Office\" ensures that every trade is paid for. They reconcile the ETRM data with the counterparties and generate the final invoices that keep the company in business.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "The \"Back Office\" ensures that every trade is paid for. They reconcile the ETRM data with the counterparties and generate the final invoices that keep the company in business."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Invoicing: Generating bills for physical delivery or financial settlement.",
          "Payment Netting: Combining multiple invoices into a single cash payment to save on bank fees.",
          "Dispute Management: Resolving cases where the buyer and seller disagree on the volume or price.",
          "Vouchering: Approving an invoice for payment in the company's ERP system (like SAP)."
        ]
      }
    ],
    "keyTakeaways": [
      "Invoicing: Generating bills for physical delivery or financial settlement.",
      "Payment Netting: Combining multiple invoices into a single cash payment to save on bank fees.",
      "Dispute Management: Resolving cases where the buyer and seller disagree on the volume or price.",
      "Vouchering: Approving an invoice for payment in the company's ERP system (like SAP)."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A settlement clerk netting 50 different gas trades into one single payment of $4.2 Million."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Identifying that a meter at a pipeline interconnect was broken, leading to a \"Prior Period Adjustment\" (PPA)."
      },
      {
        "title": "Practical Application 3",
        "scenario": "Matching a \"Broker Statement\" with the ETRM to ensure the firm isn't being overcharged for trade fees."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "127",
    "title": "Understanding Party Setup - Who participates in a trade - counterparties, brokers, banks, clearing entities",
    "category": "Foundations",
    "order": 128,
    "summary": "What is Party setup in ETRM?",
    "content": "What is Party setup in ETRM?\n\nIn ETRM (Energy Trading and Risk Management) systems, the Party setup refers to the configuration of all entities involved in the business - from internal business units to external counterparties.\nThink of it as the master data that powers every deal, settlement, and report.\n\nWhat is a \"Party\"?\nA Party is any legal or functional entity involved in a trade. This includes:\n\nCounterparties - external organizations you buy from or sell to (e.g., Shell, BP etc.)\nLegal Entities - internal trading companies (ex., subsidiary companies)\nBusiness Units - departments or desks within the org (e.g., Power Desk, Crude Desk)\nExchanges - for trading futures or options (ex., ICE, CME)\nClearing Brokers - for handling cleared trades\nInternal Parties - for intercompany trades\n\nEach party setup has attributes like:\nCredit limits\nLegal identifiers (e.g., LEI)\nDefault currency & payment terms\nAssociated Master Agreements\nContacts and locations",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "What is Party setup in ETRM?\n\nIn ETRM (Energy Trading and Risk Management) systems, the Party setup refers to the configuration of all entities involved in the business - from internal business units to external counterparties.\nThink of it as the master data that powers every deal, settlement, and report.\n\nWhat is a \"Party\"?\nA Party is any legal or functional entity involved in a trade. This includes:\n\nCounterparties - external organizations you buy from or sell to (e.g., Shell, BP etc.)\nLegal Entities - internal trading companies (ex., subsidiary companies)\nBusiness Units - departments or desks within the org (e.g., Power Desk, Crude Desk)\nExchanges - for trading futures or options (ex., ICE, CME)\nClearing Brokers - for handling cleared trades\nInternal Parties - for intercompany trades\n\nEach party setup has attributes like:\nCredit limits\nLegal identifiers (e.g., LEI)\nDefault currency & payment terms\nAssociated Master Agreements\nContacts and locations"
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Credit Risk - ensure you're trading within approved limits",
          "Settlement - determine payment instructions and invoicing rules",
          "Reporting - drive exposure, PnL, and compliance tracking",
          "Validation - prevent trades from being booked with unapproved entities",
          "Contractual Logic - link trades to appropriate master / legal agreements"
        ]
      }
    ],
    "keyTakeaways": [
      "Credit Risk - ensure you're trading within approved limits",
      "Settlement - determine payment instructions and invoicing rules",
      "Reporting - drive exposure, PnL, and compliance tracking",
      "Validation - prevent trades from being booked with unapproved entities",
      "Contractual Logic - link trades to appropriate master / legal agreements"
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Correct Party setup requires proper coordination with Legal, Finance & Risk to capture accurate details."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Hierarchical structure (e.g., Group -> Legal Entity / Business Unit)"
      },
      {
        "title": "Practical Application 3",
        "scenario": "A broken party setup can lead to failed settlements, incorrect reporting, and compliance breaches."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "129",
    "title": "How many Parties are actually involved in an ETRM Trade? Why a trade is rarely just between a buyer and a seller",
    "category": "Foundations",
    "order": 130,
    "summary": "Did you know: How many parties are actually involved in an ETRM trade?",
    "content": "Did you know: How many parties are actually involved in an ETRM trade?\n\nAs ETRM analysts, we often hear: A trade is just between us and the counterparty, right?\n\nNot really.\n\nIn real-world ETRM systems, a single trade can involve multiple parties, especially once you move beyond simple financial deals.\n\nBare minimum number of parties: Every trade starts with 2 mandatory parties.\nInternal Legal Entity (that’s you)\nCounterparty (buyer/seller)",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Did you know: How many parties are actually involved in an ETRM trade?\n\nAs ETRM analysts, we often hear: A trade is just between us and the counterparty, right?\n\nNot really.\n\nIn real-world ETRM systems, a single trade can involve multiple parties, especially once you move beyond simple financial deals.\n\nBare minimum number of parties: Every trade starts with 2 mandatory parties.\nInternal Legal Entity (that’s you)\nCounterparty (buyer/seller)"
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Common Add-ons: Depending on execution, other parties gets involved in a trade at diff stages.",
          "Broker",
          "Clearing House - ICE, CME (for cleared/exchange trades)",
          "Even a simple financial trade can quickly become 3-4 parties."
        ]
      }
    ],
    "keyTakeaways": [
      "Common Add-ons: Depending on execution, other parties gets involved in a trade at diff stages.",
      "Broker",
      "Clearing House - ICE, CME (for cleared/exchange trades)",
      "Even a simple financial trade can quickly become 3-4 parties."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Physical Trades: where it gets more interesting, Physical energy trades further adds more parties."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Terminal / Pipeline / Storage Operator"
      },
      {
        "title": "Practical Application 3",
        "scenario": "Transport Provider (pipeline, vessel, rail, truck)"
      },
      {
        "title": "Practical Application 4",
        "scenario": "Inventory Owner (often different during transit)"
      },
      {
        "title": "Practical Application 5",
        "scenario": "Settlement / Paying Agent"
      },
      {
        "title": "Practical Application 6",
        "scenario": "For gas, power, LNG, or storage-linked trades, 5–10+ parties is not unusual."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1521791136064-7986c2959443?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "131",
    "title": "Legal Entity vs Business Unit - ownership vs trading responsibility - a common source of confusion",
    "category": "Foundations",
    "order": 132,
    "summary": "Legal Entity vs. Business Unit: What’s the Difference?",
    "content": "Legal Entity vs. Business Unit: What’s the Difference?\n\nWhen it comes to trading and managing risk, especially in the energy sector, two important terms pop up: Legal Entity and Business Unit.\nThese might sound similar, but they have very different roles!\n\nLet’s break it down in simple terms.\n\nLegal Entity: The Company’s Legal Face\nA Legal Entity is the company or organization recognized by law. It can sign contracts, own property, and is responsible for taxes and legal obligations. It’s like the official nameplate of a company.\nA single company can have multiple legal entities in different regions or for various lines of business.\n\nExample:\nImagine Company A has branches in two countries - Company A (UK) and Company A (US). Each branch is a separate legal entity, with its own financial reports, taxes, and contracts.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Legal Entity vs. Business Unit: What’s the Difference?\n\nWhen it comes to trading and managing risk, especially in the energy sector, two important terms pop up: Legal Entity and Business Unit.\nThese might sound similar, but they have very different roles!\n\nLet’s break it down in simple terms.\n\nLegal Entity: The Company’s Legal Face\nA Legal Entity is the company or organization recognized by law. It can sign contracts, own property, and is responsible for taxes and legal obligations. It’s like the official nameplate of a company.\nA single company can have multiple legal entities in different regions or for various lines of business.\n\nExample:\nImagine Company A has branches in two countries - Company A (UK) and Company A (US). Each branch is a separate legal entity, with its own financial reports, taxes, and contracts."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Business Unit: The Company’s Operations Team",
          "A Business Unit is a sub-division of a company that focuses on specific markets, products, or activities.",
          "It’s like the team responsible for a certain part of the business. A business unit does not have its own legal standing; it operates as part of a legal entity.",
          "Business units can have their own profit & loss (PnL) management, strategies, and targets, but they ultimately roll up to the legal entity's financial reporting."
        ]
      }
    ],
    "keyTakeaways": [
      "Business Unit: The Company’s Operations Team",
      "A Business Unit is a sub-division of a company that focuses on specific markets, products, or activities.",
      "It’s like the team responsible for a certain part of the business. A business unit does not have its own legal standing; it operates as part of a legal entity.",
      "Business units can have their own profit & loss (PnL) management, strategies, and targets, but they ultimately roll up to the legal entity's financial reporting."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Example: Within Company A (US), there might be different business units, like one for natural gas trading and another for electricity trading. These business units have their own strategies and goals but are still part of Company A (US)."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Difference: Legal Entity = The company recognized by law (e.g., Company A (UK) and Company A (US)). Business Unit = The teams within the company focusing on different products or markets (e.g., gas trading, electricity trading)."
      },
      {
        "title": "Practical Application 3",
        "scenario": "In short, a Legal Entity is the official company, while Business Units are the teams or divisions running different parts of the business."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "133",
    "title": "Account vs Settlement Instructions - Where money is held vs how payments are executed",
    "category": "Foundations",
    "order": 134,
    "summary": "Understanding the Difference between Account and Settlement Instructions (SI)",
    "content": "In the world of energy and commodity trading, two terms that often get confused are Account and Settlement Instruction. While they are both important for managing trades, they serve very different purposes. An Account is like a financial ledger or position tracker, while a Settlement Instruction is the roadmap for completing a trade.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "In the world of energy and commodity trading, two terms that often get confused are Account and Settlement Instruction. While they are both important for managing trades, they serve very different purposes. An Account is like a financial ledger or position tracker, while a Settlement Instruction is the roadmap for completing a trade."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Account: Used to manage and track cashflows, commodity holdings, or profit and loss (PnL).",
          "Account tracks balances: Whether it is your USD cash balance or your oil position, the account keeps track.",
          "Settlement Instruction (SI): Specifies how and where payments should be made or how physical deliveries should happen.",
          "SI covers everything from payment methods to delivery locations and bank account details."
        ]
      }
    ],
    "keyTakeaways": [
      "Account: Used to manage and track cashflows, commodity holdings, or profit and loss (PnL).",
      "Account tracks balances: Whether it is your USD cash balance or your oil position, the account keeps track.",
      "Settlement Instruction (SI): Specifies how and where payments should be made or how physical deliveries should happen.",
      "SI covers everything from payment methods to delivery locations and bank account details."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Account Example: You have a USD account where all trades done in US dollars are recorded, showing what you have or owe."
      },
      {
        "title": "Practical Application 2",
        "scenario": "SI Example: After selling crude oil, your SI might say to send $1 million to Bank ABC, Account 123456, within 3 business days."
      },
      {
        "title": "Practical Application 3",
        "scenario": "Key Difference: Account is your view of what you have/owe (balances); SI is the instructions for how the payment or delivery actually happens."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "135",
    "title": "Trade vs Instrument - Difference between the deal you book and the template behind it",
    "category": "Foundations",
    "order": 136,
    "summary": "Understanding the Difference between Trade and Instrument",
    "content": "Even people working in the ETRM industry sometimes get confused between trade and instrument. However, they sound similar but they have very different roles in energy trading.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Even people working in the ETRM industry sometimes get confused between trade and instrument. However, they sound similar but they have very different roles in energy trading."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Instrument: What You’re Trading. An instrument is basically the product or contract being traded. Think of it like the item on a store shelf that you can buy or sell.",
          "In energy trading, the instrument could be oil, gas, electricity, or financial contracts like futures, options, or swaps.",
          "Trade: The Actual Transaction. A trade is the action of buying or selling that instrument. It is like when you actually purchase the product from the store.",
          "Trading involves agreeing on the price, quantity, and delivery date of the instrument."
        ]
      }
    ],
    "keyTakeaways": [
      "Instrument: What You’re Trading. An instrument is basically the product or contract being traded. Think of it like the item on a store shelf that you can buy or sell.",
      "In energy trading, the instrument could be oil, gas, electricity, or financial contracts like futures, options, or swaps.",
      "Trade: The Actual Transaction. A trade is the action of buying or selling that instrument. It is like when you actually purchase the product from the store.",
      "Trading involves agreeing on the price, quantity, and delivery date of the instrument."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Instrument Example: Imagine you buy an oil futures contract (the instrument) providing 1,000 barrels of oil at a fixed price in the future."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Trade Example: You decide to buy 1,000 barrels of oil for $60 per barrel. The details (price, quantity, etc.) make up the trade."
      },
      {
        "title": "Practical Application 3",
        "scenario": "Simple Difference: Instrument is the product being traded; Trade is the transaction where you buy or sell it."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "137",
    "title": "Concept of Deal Legs in ETRM",
    "category": "Foundations",
    "order": 138,
    "summary": "Understanding how complex trades are broken into manageable parts",
    "content": "In the world of Energy Trading and Risk Management (ETRM), the term deal leg often comes up. Think of a deal leg as an individual piece of a larger trade. Each leg represents a specific action or condition in a trade, such as buying, selling, delivering, or hedging energy commodities like oil, gas, or electricity.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "In the world of Energy Trading and Risk Management (ETRM), the term deal leg often comes up. Think of a deal leg as an individual piece of a larger trade. Each leg represents a specific action or condition in a trade, such as buying, selling, delivering, or hedging energy commodities like oil, gas, or electricity."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Parts of a single Trade: A trade can be broken into several legs, each representing different terms or stages of the deal.",
          "Buy vs. Sell Legs: Some deals have both buy and sell legs. For example, a company might buy energy in one leg and sell it at a different price or location in another leg.",
          "Physical vs. Financial Legs: Trades can include both physical delivery legs (like delivering electricity) and financial legs (like hedging with a derivative or swap).",
          "Tracking and Reporting: Each leg of a deal has its own terms, pricing, and risk profile, which is tracked separately in the ETRM system."
        ]
      }
    ],
    "keyTakeaways": [
      "Parts of a single Trade: A trade can be broken into several legs, each representing different terms or stages of the deal.",
      "Buy vs. Sell Legs: Some deals have both buy and sell legs. For example, a company might buy energy in one leg and sell it at a different price or location in another leg.",
      "Physical vs. Financial Legs: Trades can include both physical delivery legs (like delivering electricity) and financial legs (like hedging with a derivative or swap).",
      "Tracking and Reporting: Each leg of a deal has its own terms, pricing, and risk profile, which is tracked separately in the ETRM system."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Real-World Example: Delivering 100 barrels in January at $70/barrel (Leg 1) and another 100 barrels in February at $75/barrel (Leg 2)."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Swap Example: In a commodity swap, one leg could be paying a fixed price, while the other leg might involve receiving a floating price."
      },
      {
        "title": "Practical Application 3",
        "scenario": "Benefit: Deal legs allow you to manage each delivery separately, with unique pricing and risk attached to each one."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "139",
    "title": "Power Blocks - Why a day in power trading isn’t always just 24 hours",
    "category": "Physical Markets",
    "order": 140,
    "summary": "Understanding how electricity trading days are classified into Peak, Off-Peak, and Shoulder blocks.",
    "content": "In electricity trading, not all hours of the day are equal. ETRM systems classify each day into blocks based on how electricity is used and priced during those times. These blocks are essential for building power contracts, price forecasting, and trading strategies.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "In electricity trading, not all hours of the day are equal. ETRM systems classify each day into blocks based on how electricity is used and priced during those times. These blocks are essential for building power contracts, price forecasting, and trading strategies."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "On-Peak (Peak): Typically Mon-Fri, 07:00 to 19:00. High-demand hours when industries are fully running; usually the most expensive period.",
          "Off-Peak: Nights (19:00 to 07:00) and all weekend hours. Lower demand and generally lower prices.",
          "Shoulder (Mid-Peak): Early mornings and evenings. Transition hours when demand is ramping up or down with moderate prices.",
          "Super-Peak: Extreme demand hours (e.g., hot summer afternoons) that often see significant price spikes due to grid stress.",
          "Product Codes (e.g., 5x16): Shorthand for time blocks. 5x16 means 5 weekdays times 16 peak hours per day."
        ]
      }
    ],
    "keyTakeaways": [
      "On-Peak (Peak): Typically Mon-Fri, 07:00 to 19:00. High-demand hours when industries are fully running; usually the most expensive period.",
      "Off-Peak: Nights (19:00 to 07:00) and all weekend hours. Lower demand and generally lower prices.",
      "Shoulder (Mid-Peak): Early mornings and evenings. Transition hours when demand is ramping up or down with moderate prices.",
      "Super-Peak: Extreme demand hours (e.g., hot summer afternoons) that often see significant price spikes due to grid stress.",
      "Product Codes (e.g., 5x16): Shorthand for time blocks. 5x16 means 5 weekdays times 16 peak hours per day."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "5x16 Block: Represents the on-peak block during working days (typically 07:00 to 23:00)."
      },
      {
        "title": "Practical Application 2",
        "scenario": "2x16 Block: Weekend on-peak hours (Sat-Sun, 07:00 to 23:00)."
      },
      {
        "title": "Practical Application 3",
        "scenario": "7x24 Block: A constant flow of power across all 7 days and 24 hours (Base Load)."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "141",
    "title": "Executions - When trades turn into physical flow",
    "category": "Physical Markets",
    "order": 142,
    "summary": "Understanding the actual physical delivery of energy against a deal.",
    "content": "In physical power markets or PPA management, an Execution refers to the actual physical delivery of electricity against a long-term deal. A deal is not complete in the physical world until the power is actually delivered and recorded in the ETRM system.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "In physical power markets or PPA management, an Execution refers to the actual physical delivery of electricity against a long-term deal. A deal is not complete in the physical world until the power is actually delivered and recorded in the ETRM system."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Capturing Flow: Recording delivery events based on metered generation data or scheduled nominations.",
          "Settlement Impact: Executions are used for final invoicing based on what was actually delivered vs. what was contracted.",
          "PnL Calculation: Calculating realized Profit and Loss by comparing actual delivery volumes against forecast or index prices.",
          "Compliance: Ensuring the delivery matches contract terms and managing penalties for under-delivery."
        ]
      }
    ],
    "keyTakeaways": [
      "Capturing Flow: Recording delivery events based on metered generation data or scheduled nominations.",
      "Settlement Impact: Executions are used for final invoicing based on what was actually delivered vs. what was contracted.",
      "PnL Calculation: Calculating realized Profit and Loss by comparing actual delivery volumes against forecast or index prices.",
      "Compliance: Ensuring the delivery matches contract terms and managing penalties for under-delivery."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "PPA Execution: Purchasing 10 MW/hour of solar power; each day the actual metered generation is recorded as an execution."
      },
      {
        "title": "Practical Application 2",
        "scenario": "TSO Reconciliation: Using settlement statements from Transmission System Operators to validate delivery data."
      },
      {
        "title": "Practical Application 3",
        "scenario": "Imbalance Resolution: Reconciling mismatches between scheduled nominations and actual physical flow."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1558444479-c8482933074e?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "143",
    "title": "Virtual vs Physical Hubs - Invisible Geography of Energy Markets",
    "category": "Physical Markets",
    "order": 144,
    "summary": "The difference between real pipeline intersections and virtual balancing zones.",
    "content": "In energy trading, gas hubs are not all created equal. Some exist as physical infrastructure on a map, while others exist only as logical balancing zones in code and regulation.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "In energy trading, gas hubs are not all created equal. Some exist as physical infrastructure on a map, while others exist only as logical balancing zones in code and regulation."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Physical Hubs: Real pipeline intersections (e.g., Henry Hub in Louisiana) where gas physically flows, pressure is measured, and custody changes hands.",
          "Virtual Hubs: Network-wide marketplaces (e.g., TTF in Netherlands or NBP in UK) representing balancing zones rather than a single point on a map.",
          "Infrastructure vs. Regulation: Physical hubs tie to logistics and nominations; virtual hubs define trading books and pricing zones.",
          "Balancing Positions: Virtual hubs allow trades to be balanced across an entire grid network."
        ]
      }
    ],
    "keyTakeaways": [
      "Physical Hubs: Real pipeline intersections (e.g., Henry Hub in Louisiana) where gas physically flows, pressure is measured, and custody changes hands.",
      "Virtual Hubs: Network-wide marketplaces (e.g., TTF in Netherlands or NBP in UK) representing balancing zones rather than a single point on a map.",
      "Infrastructure vs. Regulation: Physical hubs tie to logistics and nominations; virtual hubs define trading books and pricing zones.",
      "Balancing Positions: Virtual hubs allow trades to be balanced across an entire grid network."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Henry Hub (USA): Anchors NYMEX gas futures and underpins real-world physical delivery obligations."
      },
      {
        "title": "Practical Application 2",
        "scenario": "TTF (Netherlands): A virtual marketplace where gas is traded and balanced within the entire Dutch grid."
      },
      {
        "title": "Practical Application 3",
        "scenario": "Trading Books: Using virtual hubs to define pricing zones without needing to track specific pipe junctions."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "145",
    "title": "LNG Bunkering - Refueling the Decarbonized Marine World",
    "category": "Physical Markets",
    "order": 146,
    "summary": "Supplying Liquefied Natural Gas (LNG) as a marine fuel and its operational complexities in ETRM systems.",
    "content": "Traditionally, bunkering referred to supplying ships with fuel oil or marine diesel. In today’s decarbonizing world, LNG Bunkering refers to supplying LNG as marine fuel. This introduces small-scale, frequent, and operationally complex LNG movements that ETRM systems must model carefully.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Traditionally, bunkering referred to supplying ships with fuel oil or marine diesel. In today’s decarbonizing world, LNG Bunkering refers to supplying LNG as marine fuel. This introduces small-scale, frequent, and operationally complex LNG movements that ETRM systems must model carefully."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Truck-to-Ship (TTS): LNG trucks refuel vessels at the port.",
          "Ship-to-Ship (STS): An LNG bunker vessel refuels another vessel.",
          "Terminal-to-Ship: Direct pipeline refueling from an LNG terminal.",
          "Deal Type: Usually a small physical LNG sale (COMM-PHYS) tracked in MMBtu.",
          "Operational Complexity: Tracking inventory, scheduling STS/TTS operations, and managing PnL margins."
        ]
      }
    ],
    "keyTakeaways": [
      "Truck-to-Ship (TTS): LNG trucks refuel vessels at the port.",
      "Ship-to-Ship (STS): An LNG bunker vessel refuels another vessel.",
      "Terminal-to-Ship: Direct pipeline refueling from an LNG terminal.",
      "Deal Type: Usually a small physical LNG sale (COMM-PHYS) tracked in MMBtu.",
      "Operational Complexity: Tracking inventory, scheduling STS/TTS operations, and managing PnL margins."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A bunker vessel in Singapore buys an LNG cargo and breaks it into 200-800 ton deliveries for LNG-powered ships."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Pricing often linked to JKM, TTF, or DES spot premiums at ports like Rotterdam and Zeebrugge."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "147",
    "title": "Gas Sales Agreement (GSA) - The Foundation of Natural Gas Trading",
    "category": "Physical Markets",
    "order": 148,
    "summary": "A legally binding contract between a gas producer and a buyer defining the terms of sale.",
    "content": "A Gas Sales Agreement (GSA) is a contract between a seller (usually a gas producer or marketer) and a buyer (like a utility, industrial consumer, or trader) for the sale and purchase of natural gas under predefined terms.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "A Gas Sales Agreement (GSA) is a contract between a seller (usually a gas producer or marketer) and a buyer (like a utility, industrial consumer, or trader) for the sale and purchase of natural gas under predefined terms."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Volume: Total quantity of gas to be delivered (daily, monthly, or yearly).",
          "Pricing: Fixed or indexed (e.g., Henry Hub + $0.50/MMBtu).",
          "Term: The duration of the contract (e.g., 5-10 years).",
          "Take-or-Pay Clause: A requirement where the buyer must pay for a minimum volume even if they do not take it.",
          "Nominations: The process of scheduling daily gas quantities for delivery at a specific pipeline hub."
        ]
      }
    ],
    "keyTakeaways": [
      "Volume: Total quantity of gas to be delivered (daily, monthly, or yearly).",
      "Pricing: Fixed or indexed (e.g., Henry Hub + $0.50/MMBtu).",
      "Term: The duration of the contract (e.g., 5-10 years).",
      "Take-or-Pay Clause: A requirement where the buyer must pay for a minimum volume even if they do not take it.",
      "Nominations: The process of scheduling daily gas quantities for delivery at a specific pipeline hub."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A power plant signs a GSA to receive 20,000 MMBtu/day at Henry Hub prices."
      },
      {
        "title": "Practical Application 2",
        "scenario": "If the plant takes only 15,000 MMBtu, they still owe for 18,000 MMBtu due to a 90% Take-or-Pay clause."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "149",
    "title": "MTM vs PnL",
    "category": "Risk,Valuations & PnL",
    "order": 150,
    "summary": "MTM vs. PnL: Clearing the Confusion!",
    "content": "In the world of ETRM, the terms Mark-to-Market (MTM) and Profit and Loss (PnL) often gets mixed up — but they’re not the same! \n\n Let’s break down the key differences and why it’s important to understand both. \n\n Mark-to-Market (MTM): \n MTM is real-time valuation of your open trading positions. It shows how much your current trades are worth if they were settled at today’s market price.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "In the world of ETRM, the terms Mark-to-Market (MTM) and Profit and Loss (PnL) often gets mixed up — but they’re not the same! \n\n Let’s break down the key differences and why it’s important to understand both. \n\n Mark-to-Market (MTM): \n MTM is real-time valuation of your open trading positions. It shows how much your current trades are worth if they were settled at today’s market price."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "MTM gives you the current value of your open trades based on market prices.",
          "It reflects your unrealized gains or losses — potential profit or loss from open positions that hasn’t been realized yet.",
          "Your MTM value fluctuates as market prices change!"
        ]
      }
    ],
    "keyTakeaways": [
      "MTM gives you the current value of your open trades based on market prices.",
      "It reflects your unrealized gains or losses — potential profit or loss from open positions that hasn’t been realized yet.",
      "Your MTM value fluctuates as market prices change!"
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Example: You bought 1,000 barrels of oil at $60 per barrel, and the current market price is $65. Your MTM value shows an unrealized profit of $5,000 — but this isn’t locked in until you sell!"
      },
      {
        "title": "Practical Application 2",
        "scenario": "Profit and Loss (PnL): Tells you about the financial outcome of your trades."
      },
      {
        "title": "Practical Application 3",
        "scenario": "Realized PnL: The profit or loss from closed positions — it’s final and locked in!"
      },
      {
        "title": "Practical Application 4",
        "scenario": "Unrealized PnL: The potential profit or loss from open positions, which changes as market prices move (this is where MTM comes into play!)."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "151",
    "title": "Positions vs PnL",
    "category": "Risk,Valuations & PnL",
    "order": 152,
    "summary": "Positions vs. PnL",
    "content": "Ever found yourself wondering what the difference is between Positions and PnL (Profit & Loss) in trading? You’re not alone! Many get confused between these two key concepts, but they play very distinct roles. \n\n Let’s break it down! \n\n Positions: Your Market Exposure \n A Position is the amount of an asset you hold or owe in the market. It shows your current exposure in a specific trade:",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Ever found yourself wondering what the difference is between Positions and PnL (Profit & Loss) in trading? You’re not alone! Many get confused between these two key concepts, but they play very distinct roles. \n\n Let’s break it down! \n\n Positions: Your Market Exposure \n A Position is the amount of an asset you hold or owe in the market. It shows your current exposure in a specific trade:"
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Long Position: You’ve bought an asset expecting its price to rise.",
          "Short Position: You’ve sold an asset hoping its price will fall.",
          "Think of a position as the trade you’ve entered, whether it’s still open or closed. It tells you what you own or owe in the market at any given moment!"
        ]
      }
    ],
    "keyTakeaways": [
      "Long Position: You’ve bought an asset expecting its price to rise.",
      "Short Position: You’ve sold an asset hoping its price will fall.",
      "Think of a position as the trade you’ve entered, whether it’s still open or closed. It tells you what you own or owe in the market at any given moment!"
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "PnL (Profit & Loss): Your Financial Result. PnL shows how much you’ve earned or lost on your trades:"
      },
      {
        "title": "Practical Application 2",
        "scenario": "Realized PnL: Profit or loss from trades you’ve closed. The deal is done, and your profit (or loss) is locked in!"
      },
      {
        "title": "Practical Application 3",
        "scenario": "Unrealized PnL: Potential profit or loss from your open positions. It changes as the market price fluctuates."
      },
      {
        "title": "Practical Application 4",
        "scenario": "Example: If you buy 1,000 barrels of oil at $60 per barrel, that’s your long position. If the market price rises to $65, you now have an Unrealized PnL of $5,000."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "153",
    "title": "Projection Index explained",
    "category": "Risk,Valuations & PnL",
    "order": 154,
    "summary": "Projection Index in ETRM",
    "content": "In energy markets, many trades span well beyond the horizon of liquid exchange prices like a multi-year PPA or an illiquid gas supply contract often contains delivery buckets for which there is no \"live\" market quote. - This gap can leave valuation, hedging, and risk assessments blind. \n\n What is a Projection Index? \n A Projection Index is a modeled or forecasted price series loaded into the ETRM system to fill blank delivery periods where no market quotes exist.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "In energy markets, many trades span well beyond the horizon of liquid exchange prices like a multi-year PPA or an illiquid gas supply contract often contains delivery buckets for which there is no \"live\" market quote. - This gap can leave valuation, hedging, and risk assessments blind. \n\n What is a Projection Index? \n A Projection Index is a modeled or forecasted price series loaded into the ETRM system to fill blank delivery periods where no market quotes exist."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "It behaves just like any other price curve in the ETRM system - used for MTM, PnL, exposure, and VaR, except its values come from forecast logic instead of live market quotes.",
          "When a deal leg extends beyond the liquid zone, its valuation logic references the Projection Index for those future buckets, ensuring the deal’s entire timeline can be priced consistently.",
          "Integrating Projection Indexes into Deals:"
        ]
      }
    ],
    "keyTakeaways": [
      "It behaves just like any other price curve in the ETRM system - used for MTM, PnL, exposure, and VaR, except its values come from forecast logic instead of live market quotes.",
      "When a deal leg extends beyond the liquid zone, its valuation logic references the Projection Index for those future buckets, ensuring the deal’s entire timeline can be priced consistently.",
      "Integrating Projection Indexes into Deals:"
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Deal Leg Configuration: In ETRM, each leg references a price curve. For buckets beyond the liquid horizon, the curve pulls from the Projection Index."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Daily MTM Process: The system fetches updated projection values thereby updating unrealized PnL and exposures automatically."
      },
      {
        "title": "Practical Application 3",
        "scenario": "Roll and Replace: As new market quotes appear, the Projection Index values for those buckets are replaced by real quotes."
      },
      {
        "title": "Practical Application 4",
        "scenario": "Scenario Analysis: Use projection curves in stress tests or scenario runs to assess how changes in long-term affect portfolio risk."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "155",
    "title": "Discounting Index vs Projection Index",
    "category": "Risk,Valuations & PnL",
    "order": 156,
    "summary": "Distinguishing between price forecasting and the time value of money in ETRM.",
    "content": "If you are new to Energy Trading & Risk Management (ETRM), you have probably come across these two terms and thought: Aren’t both just price curves? Well, not quite. While both are critical for valuation, they serve very different purposes in a trading system.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "If you are new to Energy Trading & Risk Management (ETRM), you have probably come across these two terms and thought: Aren’t both just price curves? Well, not quite. While both are critical for valuation, they serve very different purposes in a trading system."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Projection Index: \"What price do I expect to sell or buy the commodity for in the future?\"",
          "It helps you value the deal, especially for future periods where market prices are not yet available.",
          "Used in: Forward valuation and Unrealized P&L calculation.",
          "Discounting Index: \"What is the value of cash today for something I will receive or pay later?\"",
          "It helps you bring future cashflows to present value using interest rates.",
          "Used in: Discounting cashflows and valuation of long-term trades (NPV)."
        ]
      }
    ],
    "keyTakeaways": [
      "Projection Index: \"What price do I expect to sell or buy the commodity for in the future?\"",
      "It helps you value the deal, especially for future periods where market prices are not yet available.",
      "Used in: Forward valuation and Unrealized P&L calculation.",
      "Discounting Index: \"What is the value of cash today for something I will receive or pay later?\"",
      "It helps you bring future cashflows to present value using interest rates."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Projection Example: Buying power for Jan 2026 with no market price yet; use a Projection Index to estimate it based on models."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Discounting Example: If getting €1,000 in Jan 2026, use a Discounting Index (e.g., interest rate) to calculate its worth today (e.g., €920)."
      },
      {
        "title": "Practical Application 3",
        "scenario": "Combined Effect: These indexes ensure both price assumptions and time-value effects are properly captured for accurate valuation."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "157",
    "title": "Phantom Inventory explained",
    "category": "Risk,Valuations & PnL",
    "order": 158,
    "summary": "Understanding system anomalies where ETRM inventory reports do not match physical reality.",
    "content": "Phantom inventory refers to inventory that appears in the ETRM system but does not actually exist in the physical world. It is a system anomaly caused by missing or mis-booked deals, especially around transit, storage, or delivery events.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Phantom inventory refers to inventory that appears in the ETRM system but does not actually exist in the physical world. It is a system anomaly caused by missing or mis-booked deals, especially around transit, storage, or delivery events."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Missing Transit Deal: Booking a cargo load but forgetting the transit trade results in double-counted stock at different locations.",
          "Incorrect Actualization: Mismatches between scheduled nominations and actual flow can leave leftover system stock.",
          "PnL Impact: Overstated stock values distort Mark-to-Market (MTM) and profit reporting.",
          "Risk Impact: Distorted position reports show exposures that do not really exist.",
          "Operational Impact: Creates reconciliation nightmares with terminals, shippers, and accounting departments."
        ]
      }
    ],
    "keyTakeaways": [
      "Missing Transit Deal: Booking a cargo load but forgetting the transit trade results in double-counted stock at different locations.",
      "Incorrect Actualization: Mismatches between scheduled nominations and actual flow can leave leftover system stock.",
      "PnL Impact: Overstated stock values distort Mark-to-Market (MTM) and profit reporting.",
      "Risk Impact: Distorted position reports show exposures that do not really exist.",
      "Operational Impact: Creates reconciliation nightmares with terminals, shippers, and accounting departments."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Cargo Example: Trader buys 100,000 barrels at Houston. Cargo sails to Rotterdam. If no transit trade is booked, the system shows 100,000 in Houston AND 100,000 in Rotterdam (200,000 total) while only one cargo exists."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Result: The system reports 200,000 barrels (phantom inventory) distorts the actual market stance."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "159",
    "title": "Credit Limit Checks vs Risk Limit Checks",
    "category": "Credit,Risk Limits",
    "order": 160,
    "summary": "Distinguishing between counterparty trust and internal risk capacity in ETRM.",
    "content": "While they sound similar, Credit and Risk Limit checks serve very different purposes in ETRM. Credit checks are about trusting the counterparty, while Risk checks are about trusting our own capacity to handle market movements.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "While they sound similar, Credit and Risk Limit checks serve very different purposes in ETRM. Credit checks are about trusting the counterparty, while Risk checks are about trusting our own capacity to handle market movements."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Credit Limit Checks: Focus on whether the counterparty can afford to trade with us.",
          "Based on counterparty exposure vs approved credit limit (current + potential exposure).",
          "Prevents losses due to counterparty default; managed by credit risk teams.",
          "Risk Limit Checks: Focus on whether our firm can afford to take on the trade.",
          "Based on VaR, position limits, stress tests, and internal risk thresholds.",
          "Prevents losses due to market volatility or overexposure; managed by market risk teams."
        ]
      }
    ],
    "keyTakeaways": [
      "Credit Limit Checks: Focus on whether the counterparty can afford to trade with us.",
      "Based on counterparty exposure vs approved credit limit (current + potential exposure).",
      "Prevents losses due to counterparty default; managed by credit risk teams.",
      "Risk Limit Checks: Focus on whether our firm can afford to take on the trade.",
      "Based on VaR, position limits, stress tests, and internal risk thresholds."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Credit Example: Booking a large LNG deal with a partner who is already at their $20M limit fails the credit check."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Risk Example: Booking a new crude position that spikes the desk VaR beyond approved levels fails the risk check."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "161",
    "title": "Risk Limit Breached - Trade Blocked",
    "category": "Credit,Risk Limits",
    "order": 162,
    "summary": "Understanding real-time guardrails that prevent overexposure to market risk.",
    "content": "In Energy Trading, Risk Limit Checks are real-time controls that ensure trading activities stay within predefined risk boundaries. They act as guardrails to ensure that no trader or desk takes on more risk than they are allowed to.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "In Energy Trading, Risk Limit Checks are real-time controls that ensure trading activities stay within predefined risk boundaries. They act as guardrails to ensure that no trader or desk takes on more risk than they are allowed to."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Predefined Limits: Includes VaR (Value at Risk), Position limits by product, Exposure by region, and Stress test scenarios.",
          "Option Limits: For derivatives, these include \"Greeks\" like Delta and Gamma.",
          "Real-time Math: The ETRM system calculates if a new trade will push the desk over its limit before booking.",
          "Actions: If a limit is breached, the trade is blocked, flagged for escalation, or requires risk officer approval.",
          "When it Runs: Checks occur before booking, during real-time market moves, and in end-of-day reports."
        ]
      }
    ],
    "keyTakeaways": [
      "Predefined Limits: Includes VaR (Value at Risk), Position limits by product, Exposure by region, and Stress test scenarios.",
      "Option Limits: For derivatives, these include \"Greeks\" like Delta and Gamma.",
      "Real-time Math: The ETRM system calculates if a new trade will push the desk over its limit before booking.",
      "Actions: If a limit is breached, the trade is blocked, flagged for escalation, or requires risk officer approval.",
      "When it Runs: Checks occur before booking, during real-time market moves, and in end-of-day reports."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Scenario: A desk has a $5M VaR limit and is currently at $4.7M. A new trade would push it to $5.4M."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Result: The system intercepts the trade with a message: \"You need risk approval to proceed.\""
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1533073356960-7ea0728bb266?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "163",
    "title": "Credit Limit Breached - Trade Blocked",
    "category": "Credit,Risk Limits",
    "order": 164,
    "summary": "How ETRM systems manage counterparty default risk through real-time exposure monitoring.",
    "content": "Trading is not just about market moves; it is about trust. Credit Limit Checks ensure that a firm is not overexposed if a counterparty defaults, as demanded by risk policies and regulatory frameworks.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Trading is not just about market moves; it is about trust. Credit Limit Checks ensure that a firm is not overexposed if a counterparty defaults, as demanded by risk policies and regulatory frameworks."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Real-time Exposure: Calculated using Mark-to-Market PnL, Potential Future Exposure (PFE), and Settlement exposure.",
          "Limit Setup: Each counterparty is assigned a limit (e.g., $10M) based on their financial strength.",
          "Soft vs Hard Limits: Systems can either issue a warning (soft) or completely block the trade (hard).",
          "Automation: The system removes the burden from traders by doing the credit math automatically during deal entry.",
          "Check Points: Occurs before trade booking, during deal confirmation, and in end-of-day exposure runs."
        ]
      }
    ],
    "keyTakeaways": [
      "Real-time Exposure: Calculated using Mark-to-Market PnL, Potential Future Exposure (PFE), and Settlement exposure.",
      "Limit Setup: Each counterparty is assigned a limit (e.g., $10M) based on their financial strength.",
      "Soft vs Hard Limits: Systems can either issue a warning (soft) or completely block the trade (hard).",
      "Automation: The system removes the burden from traders by doing the credit math automatically during deal entry.",
      "Check Points: Occurs before trade booking, during deal confirmation, and in end-of-day exposure runs."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Scenario: You are booking a $5M power deal, but the counterparty already has $7M exposure against a $10M limit."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Result: The system throws a red flag and blocks the trade unless a risk officer intervenes."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1550565118-3d1428df7301?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "165",
    "title": "Actualized vs Invoiced vs Settled Deals",
    "category": "Post Trade & Settlement",
    "order": 166,
    "summary": "Understanding the key stages of a deal after it has been planned and nominated.",
    "content": "For newcomers to ETRM, terms like Actualized, Invoiced, and Settled can be confusing. They represent distinct stages in a deal’s lifecycle after the initial delivery has been planned.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "For newcomers to ETRM, terms like Actualized, Invoiced, and Settled can be confusing. They represent distinct stages in a deal’s lifecycle after the initial delivery has been planned."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Scheduled: The deal is booked and delivery is planned, but not yet confirmed.",
          "Nominated: The delivery instruction has been formally submitted to the pipeline or grid operator.",
          "Actualized: Delivery has been confirmed and the actual volumes are recorded for the relevant deal legs.",
          "Invoiced: The invoice document has been generated and the delivery has been billed to the counterparty.",
          "Settled: The payment has been completed or posted, marking the financial closure of the deal."
        ]
      }
    ],
    "keyTakeaways": [
      "Scheduled: The deal is booked and delivery is planned, but not yet confirmed.",
      "Nominated: The delivery instruction has been formally submitted to the pipeline or grid operator.",
      "Actualized: Delivery has been confirmed and the actual volumes are recorded for the relevant deal legs.",
      "Invoiced: The invoice document has been generated and the delivery has been billed to the counterparty.",
      "Settled: The payment has been completed or posted, marking the financial closure of the deal."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A gas deal is \"Actualized\" when the final meter readings are confirmed."
      },
      {
        "title": "Practical Application 2",
        "scenario": "It becomes \"Invoiced\" when the bill is sent, and finally \"Settled\" when the cash is in the bank."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "167",
    "title": "ROBO (Reporting on Behalf Of)",
    "category": "Post Trade & Settlement",
    "order": 168,
    "summary": "How trade reporting obligations are delegated under regulations like REMIT and EMIR.",
    "content": "In regulatory reporting under frameworks like REMIT or EMIR, ROBO stands for \"Reporting on Behalf Of.\" It refers to a situation where one party delegates its trade reporting duty to another party, such as a broker or counterparty.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "In regulatory reporting under frameworks like REMIT or EMIR, ROBO stands for \"Reporting on Behalf Of.\" It refers to a situation where one party delegates its trade reporting duty to another party, such as a broker or counterparty."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "How it Works: Instead of reporting trades to a regulator (like ACER) yourself, you authorize a broker or reporting service to do it for you.",
          "Reduces Compliance Burden: Simplifies the process and avoids duplicate reporting from both sides of a trade.",
          "Ensures Consistency: Centralizes reporting and clarifies who holds the regulatory obligation.",
          "System Configuration: The ETRM system must store and identify the ROBO relationship to ensure reports show the correct \"Reporting Entity\"."
        ]
      }
    ],
    "keyTakeaways": [
      "How it Works: Instead of reporting trades to a regulator (like ACER) yourself, you authorize a broker or reporting service to do it for you.",
      "Reduces Compliance Burden: Simplifies the process and avoids duplicate reporting from both sides of a trade.",
      "Ensures Consistency: Centralizes reporting and clarifies who holds the regulatory obligation.",
      "System Configuration: The ETRM system must store and identify the ROBO relationship to ensure reports show the correct \"Reporting Entity\"."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A utility might delegate its REMIT reporting to the exchange where it trades power futures."
      },
      {
        "title": "Practical Application 2",
        "scenario": "The ROBO relationship must be formally agreed upon, either contractually or in the system configuration."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "169",
    "title": "Understanding Master Agreements",
    "category": "Post Trade & Settlement",
    "order": 170,
    "summary": "The legal frameworks (ISDA, EFET, NAESB) that govern all transactions between two counterparties.",
    "content": "A Master Agreement is a legal framework signed between two counterparties that governs all future transactions between them. Instead of renegotiating basic legal terms with every new trade, it sets standard terms that apply across all deals.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "A Master Agreement is a legal framework signed between two counterparties that governs all future transactions between them. Instead of renegotiating basic legal terms with every new trade, it sets standard terms that apply across all deals."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Standard Terms: Defines rights, obligations, payment terms, netting logic, and credit support mechanisms.",
          "Default and Disputes: Specifies events of default, remedies, and dispute resolution mechanisms.",
          "Common Types: ISDA (for OTC derivatives), EFET (for European physical power/gas), and NAESB (for North American physical power/gas).",
          "Efficiency: Speeds up trade execution, reduces legal risk, and ensures consistency across hundreds of daily deals.",
          "ETRM Integration: Each trade in the system references a Master Agreement, ensuring legal and operational consistency."
        ]
      }
    ],
    "keyTakeaways": [
      "Standard Terms: Defines rights, obligations, payment terms, netting logic, and credit support mechanisms.",
      "Default and Disputes: Specifies events of default, remedies, and dispute resolution mechanisms.",
      "Common Types: ISDA (for OTC derivatives), EFET (for European physical power/gas), and NAESB (for North American physical power/gas).",
      "Efficiency: Speeds up trade execution, reduces legal risk, and ensures consistency across hundreds of daily deals.",
      "ETRM Integration: Each trade in the system references a Master Agreement, ensuring legal and operational consistency."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A bank and an energy company sign an ISDA to govern all their future financial swap transactions."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Two utilities use an EFET agreement to standardize the terms for all their cross-border power trades in Europe."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "oil-1",
    "title": "Crude Oil Fundamentals: API & Sulfur",
    "category": "Oil",
    "order": 171,
    "summary": "Understanding crude oil composition, API gravity density, and sweet vs. sour specifications.",
    "content": "Crude oil is a naturally occurring liquid petroleum hydrocarbon extracted from geologic formations and refined into consumer fuels. It is classified primarily by its density (API Gravity) and its sulfur content, which directly determine its market value and refinery processing economics.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Crude oil is a naturally occurring liquid petroleum hydrocarbon extracted from geologic formations and refined into consumer fuels. It is classified primarily by its density (API Gravity) and its sulfur content, which directly determine its market value and refinery processing economics."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Crude Oil: Raw unrefined liquid hydrocarbon mixture composed of hydrogen and carbon molecules.",
          "API Gravity: American Petroleum Institute gravity measures density relative to water. Higher API (>31.1°) = lighter crude (yields more valuable gasoline and diesel); lower API (<22.3°) = heavier crude.",
          "Sweet Crude: Low sulfur content (generally <0.5% sulfur by weight, e.g., Brent, WTI). Easier, cleaner, and cheaper to refine.",
          "Sour Crude: High sulfur content (>0.5% sulfur by weight, e.g., Dubai, Urals, Maya). Requires costly desulfurization and hydrotreating refinery units.",
          "Why Sulfur Matters: Sulfur corrodes equipment, poisons refinery catalysts, and produces sulfur dioxide (SOx) air emissions regulated under strict environmental mandates (such as IMO 2020)."
        ]
      }
    ],
    "keyTakeaways": [
      "Crude Oil: Raw unrefined liquid hydrocarbon mixture composed of hydrogen and carbon molecules.",
      "API Gravity: American Petroleum Institute gravity measures density relative to water. Higher API (>31.1°) = lighter crude (yields more valuable gasoline and diesel); lower API (<22.3°) = heavier crude.",
      "Sweet Crude: Low sulfur content (generally <0.5% sulfur by weight, e.g., Brent, WTI). Easier, cleaner, and cheaper to refine.",
      "Sour Crude: High sulfur content (>0.5% sulfur by weight, e.g., Dubai, Urals, Maya). Requires costly desulfurization and hydrotreating refinery units.",
      "Why Sulfur Matters: Sulfur corrodes equipment, poisons refinery catalysts, and produces sulfur dioxide (SOx) air emissions regulated under strict environmental mandates (such as IMO 2020)."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "WTI (API ~40°, Sulfur ~0.24%) is a light sweet crude demanding a market premium over Maya (API ~22°, Sulfur ~3.3%) which is heavy sour."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Complex refineries invest billions in coker and hydrocracker units specifically to process cheaper sour crude into premium transport fuels."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "oil-2",
    "title": "Crude Benchmarks, Hubs & Differentials",
    "category": "Oil",
    "order": 172,
    "summary": "How Brent, WTI, and Cushing set global prices, and how quality/location differentials work.",
    "content": "Because thousands of different crude grades are extracted globally, the market relies on transparent benchmark crudes to establish base pricing. Every other physical crude trade is priced as a differential (premium or discount) relative to a key benchmark.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Because thousands of different crude grades are extracted globally, the market relies on transparent benchmark crudes to establish base pricing. Every other physical crude trade is priced as a differential (premium or discount) relative to a key benchmark."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Brent: The premier international benchmark crude based on light sweet North Sea grades (Brent, Forties, Oseberg, Ekofisk, Troll, and WTI Midland). Prices ~70% of global seaborne crude.",
          "WTI (West Texas Intermediate): The primary US light sweet benchmark traded on NYMEX, physically delivered in Cushing, Oklahoma.",
          "Cushing, Oklahoma: The critical pipeline nexus, tank storage hub, and official delivery point for NYMEX WTI crude futures.",
          "Price Differentials: A monetary adjustment (+/- $/bbl) to a benchmark reflecting specific quality (API, sulfur) and logistical freight differences.",
          "Why Use Benchmark Pricing: Provides transparent, liquid price discovery; parties negotiate only the local differential rather than an outright flat price."
        ]
      }
    ],
    "keyTakeaways": [
      "Brent: The premier international benchmark crude based on light sweet North Sea grades (Brent, Forties, Oseberg, Ekofisk, Troll, and WTI Midland). Prices ~70% of global seaborne crude.",
      "WTI (West Texas Intermediate): The primary US light sweet benchmark traded on NYMEX, physically delivered in Cushing, Oklahoma.",
      "Cushing, Oklahoma: The critical pipeline nexus, tank storage hub, and official delivery point for NYMEX WTI crude futures.",
      "Price Differentials: A monetary adjustment (+/- $/bbl) to a benchmark reflecting specific quality (API, sulfur) and logistical freight differences.",
      "Why Use Benchmark Pricing: Provides transparent, liquid price discovery; parties negotiate only the local differential rather than an outright flat price."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A cargo of Nigerian Bonny Light is sold at \"Dated Brent + $1.50/bbl FOB\", reflecting its low sulfur and high naphtha yield."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Permian Basin crude trading at \"WTI Cushing - $2.00/bbl\" when pipeline takeaway capacity out of Midland is congested."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "oil-3",
    "title": "Refining Operations & The 3-2-1 Crack Spread",
    "category": "Oil",
    "order": 173,
    "summary": "From crude distillation to refined products, and calculating refinery gross margins with the crack spread.",
    "content": "Refineries purchase crude oil as feedstock and crack its molecular chains into refined petroleum products like gasoline, diesel, and jet fuel. Traders and refiners track the \"Crack Spread\" to gauge refining profitability and hedge processing margins.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Refineries purchase crude oil as feedstock and crack its molecular chains into refined petroleum products like gasoline, diesel, and jet fuel. Traders and refiners track the \"Crack Spread\" to gauge refining profitability and hedge processing margins."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Refinery Outputs: Gasoline (motor fuel), Ultra-Low Sulfur Diesel (ULSD), Jet Fuel (kerosene), Naphtha (petrochemicals), and Residual Fuel Oil.",
          "Crack Spread: The theoretical gross margin earned by a refiner from converting a barrel of crude into refined products.",
          "The 3-2-1 Crack Spread: A standard industry formula assuming a refinery yields 2 barrels of gasoline and 1 barrel of distillate (diesel) from 3 barrels of crude.",
          "Formula: Margin per Barrel = [(2 * Gasoline Price) + (1 * Distillate Price) - (3 * Crude Price)] / 3.",
          "Hedging Refiner Margins: Refiners buy crude futures and simultaneously sell gasoline and heating oil futures to lock in their crack spread margin."
        ]
      }
    ],
    "keyTakeaways": [
      "Refinery Outputs: Gasoline (motor fuel), Ultra-Low Sulfur Diesel (ULSD), Jet Fuel (kerosene), Naphtha (petrochemicals), and Residual Fuel Oil.",
      "Crack Spread: The theoretical gross margin earned by a refiner from converting a barrel of crude into refined products.",
      "The 3-2-1 Crack Spread: A standard industry formula assuming a refinery yields 2 barrels of gasoline and 1 barrel of distillate (diesel) from 3 barrels of crude.",
      "Formula: Margin per Barrel = [(2 * Gasoline Price) + (1 * Distillate Price) - (3 * Crude Price)] / 3.",
      "Hedging Refiner Margins: Refiners buy crude futures and simultaneously sell gasoline and heating oil futures to lock in their crack spread margin."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Crude = $80/bbl, Gasoline = $105/bbl ($2.50/gal * 42), Diesel = $110/bbl ($2.62/gal * 42). 3-2-1 Crack = [(2*105) + (1*110) - (3*80)] / 3 = [210 + 110 - 240] / 3 = $80 / 3 = $26.67/bbl gross margin."
      },
      {
        "title": "Practical Application 2",
        "scenario": "When driving season begins, surging gasoline demand widens crack spreads, boosting refinery earnings."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "oil-4",
    "title": "Oil Trading: Physical vs Paper & Spreads",
    "category": "Oil",
    "order": 174,
    "summary": "Differentiating physical cargo delivery from paper hedges, calendar time spreads, and price risks.",
    "content": "Energy trading desks manage both physical barrels moving through infrastructure and financial paper contracts traded on exchanges or OTC. Balancing flat-price risk against spread risk is central to trading desk profitability.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Energy trading desks manage both physical barrels moving through infrastructure and financial paper contracts traded on exchanges or OTC. Balancing flat-price risk against spread risk is central to trading desk profitability."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Physical Trading: Buying and selling actual molecular barrels requiring logistics, nominations, loading, and delivery.",
          "Financial / Paper Trading: Cash-settled derivatives (futures, swaps, options) where no physical barrels ever move; used for speculation and risk hedging.",
          "Calendar Spread: Simultaneously buying one delivery month and selling another (e.g., Buy Dec 2026, Sell Jan 2027) to trade market structure changes.",
          "Flat-Price Risk vs. Spread Risk: Flat-price risk is exposure to the overall rise/fall of crude prices; spread risk is exposure to the changing price difference between two months or locations.",
          "Delta: The rate of change of an option or derivative price relative to changes in the underlying crude oil price."
        ]
      }
    ],
    "keyTakeaways": [
      "Physical Trading: Buying and selling actual molecular barrels requiring logistics, nominations, loading, and delivery.",
      "Financial / Paper Trading: Cash-settled derivatives (futures, swaps, options) where no physical barrels ever move; used for speculation and risk hedging.",
      "Calendar Spread: Simultaneously buying one delivery month and selling another (e.g., Buy Dec 2026, Sell Jan 2027) to trade market structure changes.",
      "Flat-Price Risk vs. Spread Risk: Flat-price risk is exposure to the overall rise/fall of crude prices; spread risk is exposure to the changing price difference between two months or locations.",
      "Delta: The rate of change of an option or derivative price relative to changes in the underlying crude oil price."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "An oil producer fears falling crude prices and sells WTI Futures contracts to lock in an $85/bbl price (hedging flat-price risk)."
      },
      {
        "title": "Practical Application 2",
        "scenario": "A hedge fund trades a May/June calendar spread, anticipating that unexpected refinery maintenance will depress prompt May prices."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1611974714658-66d2c13ee0a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "oil-5",
    "title": "Tank Storage Economics: Contango & Backwardation",
    "category": "Oil",
    "order": 175,
    "summary": "Understanding forward curve market structures, carrying costs, and storage arbitrage.",
    "content": "Crude oil forward curves reflect the balance between immediate spot availability and future expectations. Traders exploit these price relationships through tank storage cash-and-carry strategies.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Crude oil forward curves reflect the balance between immediate spot availability and future expectations. Traders exploit these price relationships through tank storage cash-and-carry strategies."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Contango: Market structure where future prices are higher than prompt spot prices (Upward-sloping curve). Signals oversupply or high immediate inventory.",
          "Backwardation: Market structure where prompt spot prices are higher than future prices (Downward-sloping curve). Signals immediate supply shortages or high prompt demand.",
          "Cost of Carry: The total cost to store oil, comprising tank rental fees, insurance, evaporation/quality loss, and capital financing (interest).",
          "Storage Arbitrage: In deep contango, if the forward spread exceeds the full cost of carry, traders buy spot crude, put it in tanks, and sell forward futures to lock in risk-free profit.",
          "Tank Constraints: When storage tanks reach maximum operational capacity, prompt prices can collapse dramatically (as seen in April 2020)."
        ]
      }
    ],
    "keyTakeaways": [
      "Contango: Market structure where future prices are higher than prompt spot prices (Upward-sloping curve). Signals oversupply or high immediate inventory.",
      "Backwardation: Market structure where prompt spot prices are higher than future prices (Downward-sloping curve). Signals immediate supply shortages or high prompt demand.",
      "Cost of Carry: The total cost to store oil, comprising tank rental fees, insurance, evaporation/quality loss, and capital financing (interest).",
      "Storage Arbitrage: In deep contango, if the forward spread exceeds the full cost of carry, traders buy spot crude, put it in tanks, and sell forward futures to lock in risk-free profit.",
      "Tank Constraints: When storage tanks reach maximum operational capacity, prompt prices can collapse dramatically (as seen in April 2020)."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Spot WTI is $70, 6-month future is $76 (Contango = +$6.00). If 6-month storage + financing costs $3.50/bbl, a trader pockets $2.50/bbl net arbitrage."
      },
      {
        "title": "Practical Application 2",
        "scenario": "In backwardation, holding inventory incurs a negative roll yield, incentivizing traders to drain tanks and sell barrels immediately."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "oil-6",
    "title": "Maritime Logistics, Tankers & Incoterms",
    "category": "Oil",
    "order": 176,
    "summary": "Vessel classes, FOB vs CIF terms, Laycan delivery windows, and Demurrage demurrage claims.",
    "content": "Global physical oil trade relies on maritime transport across international waters. Contracts are strictly governed by International Commercial Terms (Incoterms), charterparties, and operational delivery windows.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Global physical oil trade relies on maritime transport across international waters. Contracts are strictly governed by International Commercial Terms (Incoterms), charterparties, and operational delivery windows."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Tanker Classes: VLCC (Very Large Crude Carrier: ~2 million barrels), Suezmax (~1 million bbls), Aframax (~750,000 bbls, ideal for regional/shorter voyages).",
          "FOB (Free on Board): Buyer arranges vessel transport; risk and title transfer from seller to buyer as oil passes the ship’s manifold flange at the loading port.",
          "CIF / CFR (Cost, Insurance, Freight): Seller arranges and pays for shipping to the destination discharge port.",
          "Laycan (Laydays and Cancelling): The agreed contractual date range (e.g., Nov 12-14) during which the vessel must arrive at the terminal and tender Notice of Readiness (NOR).",
          "Demurrage: Liquidated financial damages paid by the charterer/cargo owner to the shipowner if loading or discharging operations exceed agreed allowable laytime."
        ]
      }
    ],
    "keyTakeaways": [
      "Tanker Classes: VLCC (Very Large Crude Carrier: ~2 million barrels), Suezmax (~1 million bbls), Aframax (~750,000 bbls, ideal for regional/shorter voyages).",
      "FOB (Free on Board): Buyer arranges vessel transport; risk and title transfer from seller to buyer as oil passes the ship’s manifold flange at the loading port.",
      "CIF / CFR (Cost, Insurance, Freight): Seller arranges and pays for shipping to the destination discharge port.",
      "Laycan (Laydays and Cancelling): The agreed contractual date range (e.g., Nov 12-14) during which the vessel must arrive at the terminal and tender Notice of Readiness (NOR).",
      "Demurrage: Liquidated financial damages paid by the charterer/cargo owner to the shipowner if loading or discharging operations exceed agreed allowable laytime."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A tanker tenders NOR on Nov 13 (within Laycan) but terminal congestion delays loading by 4 days past allowable laytime. The charterer pays $40,000/day in demurrage."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Under FOB Ras Tanura, the buyer hires a VLCC to transport Saudi crude to Singapore and assumes all in-transit voyage risks."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "oil-7",
    "title": "Oil Deal Lifecycle, Price Fixing & Troubleshooting",
    "category": "Oil",
    "order": 177,
    "summary": "Managing Bill of Lading actualization, pricing windows, MTM valuation, and resolving trading disputes.",
    "content": "After an oil trade is executed, operations and middle-office teams guide the deal through scheduling, loading documentation, price fixing, and settlement reconciliation. Identifying discrepancies early prevents millions in operational losses.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "After an oil trade is executed, operations and middle-office teams guide the deal through scheduling, loading documentation, price fixing, and settlement reconciliation. Identifying discrepancies early prevents millions in operational losses."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Bill of Lading (BOL): The master legal document issued by the carrier serving as a receipt of cargo, evidence of contract of carriage, and document of title transfer.",
          "Actualization: Updating the ETRM system with confirmed physical volumes (from BOL, shore tank meters, or independent outturn inspectors) instead of original estimates.",
          "Price Fixing: The contractual mechanism of calculating the final purchase price by averaging daily benchmark index assessments (Platts, Argus) across an agreed pricing window.",
          "Mark-to-Market (MTM) & P&L: MTM is the current market valuation of open positions. Unrealized P&L represents paper fluctuations before settlement; Realized P&L is recognized once physical delivery and financial settlement take place.",
          "Troubleshooting Checklist: When P&L or quantities mismatch, trace trade deal ticket -> nomination -> BOL vs outturn inspection -> pricing period index dates -> FX conversions -> demurrage and secondary costs."
        ]
      }
    ],
    "keyTakeaways": [
      "Bill of Lading (BOL): The master legal document issued by the carrier serving as a receipt of cargo, evidence of contract of carriage, and document of title transfer.",
      "Actualization: Updating the ETRM system with confirmed physical volumes (from BOL, shore tank meters, or independent outturn inspectors) instead of original estimates.",
      "Price Fixing: The contractual mechanism of calculating the final purchase price by averaging daily benchmark index assessments (Platts, Argus) across an agreed pricing window.",
      "Mark-to-Market (MTM) & P&L: MTM is the current market valuation of open positions. Unrealized P&L represents paper fluctuations before settlement; Realized P&L is recognized once physical delivery and financial settlement take place.",
      "Troubleshooting Checklist: When P&L or quantities mismatch, trace trade deal ticket -> nomination -> BOL vs outturn inspection -> pricing period index dates -> FX conversions -> demurrage and secondary costs."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A contract specifies \"Dated Brent average over 5 days around Bill of Lading date\". As daily Platts quotes are published, the ETRM automatically fixes the final cargo invoice price."
      },
      {
        "title": "Practical Application 2",
        "scenario": "An outturn discrepancy occurs when the discharge port reports 495,000 bbls received while the BOL shows 500,000 bbls loaded. An independent surveyor investigates voyage transit loss and tank measurement calibration."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "ng-1",
    "title": "Natural Gas Fundamentals: Methane, Pipelines & Energy Units",
    "category": "Natural Gas",
    "order": 178,
    "summary": "Why gas is distinct from oil, understanding MMBtu energy pricing vs Mcf volume, and pipeline physics.",
    "content": "Natural gas is a gaseous hydrocarbon fuel consisting primarily of methane (CH4). Unlike crude oil, which can be stored in atmospheric barrels or floating tankers, natural gas requires high-pressure pressurized pipeline networks, cryogenic LNG cooling, or deep underground geologic caverns, making transport capacity and real-time balancing vital.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Natural gas is a gaseous hydrocarbon fuel consisting primarily of methane (CH4). Unlike crude oil, which can be stored in atmospheric barrels or floating tankers, natural gas requires high-pressure pressurized pipeline networks, cryogenic LNG cooling, or deep underground geologic caverns, making transport capacity and real-time balancing vital."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Composition: Primarily methane (CH4) with small amounts of ethane, propane, butane, and inert gases (nitrogen, CO2).",
          "Why Gas is Different from Oil: Cannot be easily stored on the surface; depends completely on interconnected pressurized pipelines, nomination cycles, and hourly line-pack balance.",
          "Volume Units: Mcf (thousand cubic feet), MMcf (million cubic feet), Bcf (billion cubic feet), Tcf (trillion cubic feet).",
          "Energy Unit (MMBtu): Million British Thermal Units. One MMBtu is the quantity of heat required to raise the temperature of one million pounds of water by 1°F (~1.055 gigajoules).",
          "Why Price in $/MMBtu: Natural gas composition varies between fields (dry gas vs rich/wet gas). Pricing per MMBtu prices actual heating energy delivered rather than mere gas volume."
        ]
      }
    ],
    "keyTakeaways": [
      "Composition: Primarily methane (CH4) with small amounts of ethane, propane, butane, and inert gases (nitrogen, CO2).",
      "Why Gas is Different from Oil: Cannot be easily stored on the surface; depends completely on interconnected pressurized pipelines, nomination cycles, and hourly line-pack balance.",
      "Volume Units: Mcf (thousand cubic feet), MMcf (million cubic feet), Bcf (billion cubic feet), Tcf (trillion cubic feet).",
      "Energy Unit (MMBtu): Million British Thermal Units. One MMBtu is the quantity of heat required to raise the temperature of one million pounds of water by 1°F (~1.055 gigajoules).",
      "Why Price in $/MMBtu: Natural gas composition varies between fields (dry gas vs rich/wet gas). Pricing per MMBtu prices actual heating energy delivered rather than mere gas volume."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "1 Mcf of natural gas typically contains approximately 1.02 to 1.05 MMBtu of heating content depending on the presence of natural gas liquids (NGLs)."
      },
      {
        "title": "Practical Application 2",
        "scenario": "A pipeline operator burns 1.5% of transported gas as \"compressor fuel\" to keep pipeline pressure elevated between stations."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "ng-2",
    "title": "Henry Hub, Basis Trading & Location Spreads",
    "category": "Natural Gas",
    "order": 179,
    "summary": "The Henry Hub benchmark, calculating gas basis, and distinguishing flat-price risk from basis risk.",
    "content": "Because natural gas is bound to pipeline infrastructure, prices vary widely across geographic locations. Henry Hub serves as the centralized pricing benchmark, and local market prices are expressed through gas basis.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Because natural gas is bound to pipeline infrastructure, prices vary widely across geographic locations. Henry Hub serves as the centralized pricing benchmark, and local market prices are expressed through gas basis."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Henry Hub: Located in Erath, Vermilion Parish, Louisiana. Connects to 16 major pipeline systems and serves as the official physical delivery point for NYMEX natural gas futures.",
          "Gas Hub: Any pipeline interconnection, compressor station, or receipt/delivery pooling point where gas is actively bought, sold, or transferred.",
          "Gas Basis Formula: Basis = Local Hub Price - Henry Hub Price. Basis can be positive (premium) or negative (discount).",
          "Why Basis Exists: Physical pipeline capacity constraints, local production gluts (e.g., Permian Waha negative prices), and regional peak weather demand (e.g., New York City winter freezes).",
          "Flat-Price Risk vs. Basis Risk: Flat-price risk is the exposure to movements in NYMEX Henry Hub; basis risk is the risk that local hub prices diverge from Henry Hub due to local pipeline bottlenecks."
        ]
      }
    ],
    "keyTakeaways": [
      "Henry Hub: Located in Erath, Vermilion Parish, Louisiana. Connects to 16 major pipeline systems and serves as the official physical delivery point for NYMEX natural gas futures.",
      "Gas Hub: Any pipeline interconnection, compressor station, or receipt/delivery pooling point where gas is actively bought, sold, or transferred.",
      "Gas Basis Formula: Basis = Local Hub Price - Henry Hub Price. Basis can be positive (premium) or negative (discount).",
      "Why Basis Exists: Physical pipeline capacity constraints, local production gluts (e.g., Permian Waha negative prices), and regional peak weather demand (e.g., New York City winter freezes).",
      "Flat-Price Risk vs. Basis Risk: Flat-price risk is the exposure to movements in NYMEX Henry Hub; basis risk is the risk that local hub prices diverge from Henry Hub due to local pipeline bottlenecks."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "If Henry Hub is $3.00/MMBtu and Transco Zone 6 NY is $8.50/MMBtu during a polar vortex, the Transco basis is +$5.50/MMBtu."
      },
      {
        "title": "Practical Application 2",
        "scenario": "In the Permian Basin, oil producers produce associated gas with nowhere to send it, causing Waha Hub basis to trade at -$2.50/MMBtu (negative prices where producers pay shippers to take gas)."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "ng-3",
    "title": "Pipeline Capacity: Firm vs Interruptible Transportation",
    "category": "Natural Gas",
    "order": 180,
    "summary": "Pipeline operational tariffs, reservation demand charges, and scheduling priorities.",
    "content": "Interstate pipelines operate as regulated open-access common carriers under tariffs approved by regulatory bodies (such as FERC in the US). Shippers contract for transportation capacity under different service tiers.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Interstate pipelines operate as regulated open-access common carriers under tariffs approved by regulatory bodies (such as FERC in the US). Shippers contract for transportation capacity under different service tiers."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Pipeline Capacity: The maximum volume of gas a pipeline can physically transport under given pressure, temperature, and compressor conditions.",
          "Firm Transportation (FT): Highest priority capacity right. The shipper pays a fixed monthly reservation demand charge ($/Dth) whether gas flows or not, in exchange for guaranteed capacity assurance.",
          "Interruptible Transportation (IT): Lower priority service. The shipper pays only a volumetric fee for gas actually transported, but the pipeline can curtail or shut off flow if firm shippers need the capacity.",
          "Capacity Release: Shippers holding unneeded Firm Transportation capacity can release or re-sell it to other market participants on pipeline electronic bulletin boards (EBBs).",
          "Bottleneck Implications: When a pipeline is fully subscribed with firm shippers, interruptible shippers are curtailed, causing local spot prices at the delivery end to spike."
        ]
      }
    ],
    "keyTakeaways": [
      "Pipeline Capacity: The maximum volume of gas a pipeline can physically transport under given pressure, temperature, and compressor conditions.",
      "Firm Transportation (FT): Highest priority capacity right. The shipper pays a fixed monthly reservation demand charge ($/Dth) whether gas flows or not, in exchange for guaranteed capacity assurance.",
      "Interruptible Transportation (IT): Lower priority service. The shipper pays only a volumetric fee for gas actually transported, but the pipeline can curtail or shut off flow if firm shippers need the capacity.",
      "Capacity Release: Shippers holding unneeded Firm Transportation capacity can release or re-sell it to other market participants on pipeline electronic bulletin boards (EBBs).",
      "Bottleneck Implications: When a pipeline is fully subscribed with firm shippers, interruptible shippers are curtailed, causing local spot prices at the delivery end to spike."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A gas utility holding 50,000 MMBtu/day of FT rights pays $0.40/MMBtu/month reservation fee to ensure heat reaches residential customers during winter storms."
      },
      {
        "title": "Practical Application 2",
        "scenario": "An industrial factory holding cheap IT transportation gets curtailed when temperatures drop to -10°F and has to switch temporarily to backup fuel."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "ng-4",
    "title": "The Gas Day, Nominations & Scheduling Lifecycle",
    "category": "Natural Gas",
    "order": 181,
    "summary": "Understanding the standard Gas Day, NAESB nomination cycles, and actual vs scheduled quantities.",
    "content": "Operating a natural gas pipeline requires precise synchronization across producers, pipelines, utilities, and traders. In North America, the North American Energy Standards Board (NAESB) standardizes the daily operational scheduling timeline.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Operating a natural gas pipeline requires precise synchronization across producers, pipelines, utilities, and traders. In North America, the North American Energy Standards Board (NAESB) standardizes the daily operational scheduling timeline."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "The Gas Day: The standard 24-hour pipeline operational cycle running from 9:00 AM to 9:00 AM Central Clock Time (CCT) the following day.",
          "Nomination: An electronic operational request submitted by a shipper specifying the receipt point (where gas enters), delivery point (where gas leaves), transportation contract, and volume.",
          "Nomination vs Actual Flow: A nomination is an advance request/plan. Actual flow is the physical volume that meters record entering or leaving the pipeline.",
          "NAESB Nomination Cycles: Five standard daily windows: Timely (day before flow at 1:00 PM CCT), Evening (6:00 PM CCT), Intraday 1 (10:00 AM Gas Day), Intraday 2 (2:30 PM), and Intraday 3 (7:00 PM).",
          "Scheduled Quantity: The quantity confirmed by both upstream and downstream interconnecting parties and approved by the pipeline for movement."
        ]
      }
    ],
    "keyTakeaways": [
      "The Gas Day: The standard 24-hour pipeline operational cycle running from 9:00 AM to 9:00 AM Central Clock Time (CCT) the following day.",
      "Nomination: An electronic operational request submitted by a shipper specifying the receipt point (where gas enters), delivery point (where gas leaves), transportation contract, and volume.",
      "Nomination vs Actual Flow: A nomination is an advance request/plan. Actual flow is the physical volume that meters record entering or leaving the pipeline.",
      "NAESB Nomination Cycles: Five standard daily windows: Timely (day before flow at 1:00 PM CCT), Evening (6:00 PM CCT), Intraday 1 (10:00 AM Gas Day), Intraday 2 (2:30 PM), and Intraday 3 (7:00 PM).",
      "Scheduled Quantity: The quantity confirmed by both upstream and downstream interconnecting parties and approved by the pipeline for movement."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "At 12:30 PM on Monday, a gas scheduler submits a Timely nomination of 20,000 MMBtu for Tuesday’s Gas Day from receipt meter DRN #1042 to delivery meter DRN #5821."
      },
      {
        "title": "Practical Application 2",
        "scenario": "If an unexpected heat wave strikes on Tuesday afternoon, the scheduler submits an Intraday 2 nomination to boost gas delivery to a gas-fired power generator."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "ng-5",
    "title": "Pipeline Balancing, Imbalances & Cash-Outs",
    "category": "Natural Gas",
    "order": 182,
    "summary": "Preserving pipeline pressure, tracking operational imbalances, and financial penalties.",
    "content": "Because natural gas pipelines are closed pressurized systems, the total quantity of gas injected must equal the total quantity withdrawn. Any physical mismatch threatens pipeline integrity, resulting in strict imbalance rules and penalties.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Because natural gas pipelines are closed pressurized systems, the total quantity of gas injected must equal the total quantity withdrawn. Any physical mismatch threatens pipeline integrity, resulting in strict imbalance rules and penalties."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Gas Imbalance: The difference between the scheduled/nominated quantity and the actual metered physical quantity over a Gas Day or billing month.",
          "Linepack: The total volume of gas physically residing inside the pipeline network. Pack increases when pressure rises; draft occurs when withdrawals exceed injections.",
          "Operational Balancing Agreements (OBAs): Contracts between pipelines and interconnect operators to manage small daily operational discrepancies at physical meter points.",
          "Cash-Out Mechanism: Monthly financial settlement where pipeline operators penalize shippers who are out of balance using tiered punitive pricing (e.g., 110% to 150% of peak market price).",
          "Critical Notices & OFOs: Operational Flow Orders issued during emergencies requiring shippers to balance inputs and outputs within a tight tolerance (e.g., +/- 2%) or face severe fines."
        ]
      }
    ],
    "keyTakeaways": [
      "Gas Imbalance: The difference between the scheduled/nominated quantity and the actual metered physical quantity over a Gas Day or billing month.",
      "Linepack: The total volume of gas physically residing inside the pipeline network. Pack increases when pressure rises; draft occurs when withdrawals exceed injections.",
      "Operational Balancing Agreements (OBAs): Contracts between pipelines and interconnect operators to manage small daily operational discrepancies at physical meter points.",
      "Cash-Out Mechanism: Monthly financial settlement where pipeline operators penalize shippers who are out of balance using tiered punitive pricing (e.g., 110% to 150% of peak market price).",
      "Critical Notices & OFOs: Operational Flow Orders issued during emergencies requiring shippers to balance inputs and outputs within a tight tolerance (e.g., +/- 2%) or face severe fines."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A shipper nominates and schedules 10,000 MMBtu but their customer consumes 12,000 MMBtu. The shipper is in a negative imbalance of 2,000 MMBtu and must replace the gas or get cashed out."
      },
      {
        "title": "Practical Application 2",
        "scenario": "During Winter Storm Uri, pipelines issued emergency OFOs with $500/MMBtu unauthorized overrun penalties to keep pressures from collapsing."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "ng-6",
    "title": "Underground Gas Storage & Seasonal Spreads",
    "category": "Natural Gas",
    "order": 183,
    "summary": "Depleted fields vs salt caverns, injection/withdrawal cycles, and storage economics.",
    "content": "Natural gas demand is heavily seasonal, driven by winter heating and summer power generation. Large underground geologic storage facilities absorb excess production during shoulder months and supply peak demand during extreme weather.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Natural gas demand is heavily seasonal, driven by winter heating and summer power generation. Large underground geologic storage facilities absorb excess production during shoulder months and supply peak demand during extreme weather."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Storage Types: Depleted Oil/Gas Reservoirs (high capacity, slower cycling), Aquifers (geologic water traps), and Salt Caverns (high deliverability, rapid injection/withdrawal, 5-10 day cycle).",
          "Injection Season: Typically April 1 to October 31. Low heating demand allows producers and utilities to inject surplus gas into underground storage.",
          "Withdrawal Season: Typically November 1 to March 31. Cold winter weather triggers massive gas withdrawals to supply furnaces and heating plants.",
          "Storage Economics: Traders evaluate the Summer-Winter seasonal price spread (Contango). If Winter futures exceed Summer spot plus storage costs, the trade is profitable.",
          "Why Contango Does Not Guarantee Profit: Physical storage involves injection fees, withdrawal charges, pipeline fuel retention (gas burned by compressors), and inventory carrying financing costs."
        ]
      }
    ],
    "keyTakeaways": [
      "Storage Types: Depleted Oil/Gas Reservoirs (high capacity, slower cycling), Aquifers (geologic water traps), and Salt Caverns (high deliverability, rapid injection/withdrawal, 5-10 day cycle).",
      "Injection Season: Typically April 1 to October 31. Low heating demand allows producers and utilities to inject surplus gas into underground storage.",
      "Withdrawal Season: Typically November 1 to March 31. Cold winter weather triggers massive gas withdrawals to supply furnaces and heating plants.",
      "Storage Economics: Traders evaluate the Summer-Winter seasonal price spread (Contango). If Winter futures exceed Summer spot plus storage costs, the trade is profitable.",
      "Why Contango Does Not Guarantee Profit: Physical storage involves injection fees, withdrawal charges, pipeline fuel retention (gas burned by compressors), and inventory carrying financing costs."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A trader buys gas in July at $2.80/MMBtu, injects it into a salt cavern, and sells January futures at $3.90/MMBtu (+$1.10 spread). Total storage, variable injection, and financing costs are $0.45/MMBtu, yielding $0.65/MMBtu net profit."
      },
      {
        "title": "Practical Application 2",
        "scenario": "EIA Weekly Storage Report: Released every Thursday at 10:30 AM Eastern; shifts in storage inventory against market consensus trigger sharp price moves."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "ng-7",
    "title": "Gas-to-Power Linkage & Weather Dynamics",
    "category": "Natural Gas",
    "order": 184,
    "summary": "Combined-cycle gas turbines, the spark spread, and temperature-driven demand volatility.",
    "content": "Natural gas is the primary fuel for electricity generation across the modern grid. Consequently, electric power demand, renewable wind/solar intermittency, and weather fluctuations directly drive gas market volatility.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Natural gas is the primary fuel for electricity generation across the modern grid. Consequently, electric power demand, renewable wind/solar intermittency, and weather fluctuations directly drive gas market volatility."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Combined-Cycle Gas Turbines (CCGT): Efficient power generation plants burning natural gas to drive gas turbines and recovering exhaust heat to drive steam turbines.",
          "Peaker Plants: Simple-cycle gas turbines that fire up within minutes to meet sudden grid power spikes or compensate for sudden drops in wind/solar output.",
          "Spark Spread: The theoretical gross margin of a gas-fired power plant: Spark Spread = Power Price - (Gas Price * Heat Rate). Heat rate measures plant efficiency (MMBtu/MWh).",
          "Weather Impacts: Sub-freezing winter weather causes massive space heating consumption and field freeze-offs (wellhead freeze-ups shutting off gas production); scorching summer heat drives air conditioning power demand (power burn).",
          "Storage Buffer: The power sector relies on pipeline linepack and salt caverns to manage massive intra-day generation ramps."
        ]
      }
    ],
    "keyTakeaways": [
      "Combined-Cycle Gas Turbines (CCGT): Efficient power generation plants burning natural gas to drive gas turbines and recovering exhaust heat to drive steam turbines.",
      "Peaker Plants: Simple-cycle gas turbines that fire up within minutes to meet sudden grid power spikes or compensate for sudden drops in wind/solar output.",
      "Spark Spread: The theoretical gross margin of a gas-fired power plant: Spark Spread = Power Price - (Gas Price * Heat Rate). Heat rate measures plant efficiency (MMBtu/MWh).",
      "Weather Impacts: Sub-freezing winter weather causes massive space heating consumption and field freeze-offs (wellhead freeze-ups shutting off gas production); scorching summer heat drives air conditioning power demand (power burn).",
      "Storage Buffer: The power sector relies on pipeline linepack and salt caverns to manage massive intra-day generation ramps."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Power is $60/MWh, Natural Gas is $4.00/MMBtu, and the plant heat rate is 7.5 MMBtu/MWh. Fuel cost = 4.00 * 7.5 = $30/MWh. Spark Spread = $60 - $30 = $30/MWh gross profit."
      },
      {
        "title": "Practical Application 2",
        "scenario": "A sudden summer heatwave in Texas elevates ERCOT power demand, driving Henry Hub cash prices up by 25% due to record utility power burn."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "ng-8",
    "title": "Gas Trading, Valuation & Operational Troubleshooting",
    "category": "Natural Gas",
    "order": 185,
    "summary": "Derivatives, hedging, index price fixing, MTM valuation, and resolving operational failures.",
    "content": "Gas trading desks manage complex positions across cash, basis, and financial markets. In the back and middle office, professionals must understand valuation mechanics and rapidly troubleshoot P&L, quantity, and nomination discrepancies.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Gas trading desks manage complex positions across cash, basis, and financial markets. In the back and middle office, professionals must understand valuation mechanics and rapidly troubleshoot P&L, quantity, and nomination discrepancies."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Gas Financial Contracts: NYMEX Henry Hub Futures (standardized 10,000 MMBtu/month contracts), Basis Swaps, and Forward OTC contracts.",
          "Why Henry Hub Hedges Leave Basis Risk: If you sell Henry Hub futures to hedge local production in Pennsylvania, any change in the local basis spread directly affects your net realized revenue.",
          "Price Fixing: Contract pricing determined by market price indexes: Daily Gas Daily midpoint prices or Monthly Inside FERC Gas Market Report index.",
          "Mark-to-Market (MTM) & P&L: Valuation of all open positions against forward curves. P&L can swing even when Henry Hub is flat due to basis shifts, pipeline tariff adjustments, storage carry, or physical imbalance cash-outs.",
          "Troubleshooting Failed Nominations: Check NAESB cycle submission deadlines, Gas Day alignment, valid pipeline DRN/PIN meter codes, contracted firm vs interruptible rights, upstream counterparty confirmation, and pipeline EDI error response logs.",
          "Troubleshooting Quantity & P&L Mismatches: Trace trade ticket deal details -> submitted nomination -> scheduled volume -> pipeline operational meter statement -> actualized allocation in ETRM -> monthly invoice."
        ]
      }
    ],
    "keyTakeaways": [
      "Gas Financial Contracts: NYMEX Henry Hub Futures (standardized 10,000 MMBtu/month contracts), Basis Swaps, and Forward OTC contracts.",
      "Why Henry Hub Hedges Leave Basis Risk: If you sell Henry Hub futures to hedge local production in Pennsylvania, any change in the local basis spread directly affects your net realized revenue.",
      "Price Fixing: Contract pricing determined by market price indexes: Daily Gas Daily midpoint prices or Monthly Inside FERC Gas Market Report index.",
      "Mark-to-Market (MTM) & P&L: Valuation of all open positions against forward curves. P&L can swing even when Henry Hub is flat due to basis shifts, pipeline tariff adjustments, storage carry, or physical imbalance cash-outs.",
      "Troubleshooting Failed Nominations: Check NAESB cycle submission deadlines, Gas Day alignment, valid pipeline DRN/PIN meter codes, contracted firm vs interruptible rights, upstream counterparty confirmation, and pipeline EDI error response logs."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A nomination fails at the Intraday 1 cycle with error \"Upstream Shipper Did Not Confirm\". The scheduler contacts the producer trading desk to ensure their delivery nomination matches."
      },
      {
        "title": "Practical Application 2",
        "scenario": "A middle-office analyst finds a $150,000 P&L variance on a flat market day and discovers the pipeline increased its fuel retention tariff from 1.2% to 2.8%, increasing transportation costs."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "lng-1",
    "title": "LNG Fundamentals: Liquefaction, Cryogenics & Volume",
    "category": "LNG",
    "order": 186,
    "summary": "What is LNG, the ~600:1 volume shrinkage, cryogenic cooling to -162°C, and liquefaction trains.",
    "content": "Liquefied Natural Gas (LNG) is natural gas (predominantly methane) that has been purified and cooled down to approximately −162°C (−260°F) at standard atmospheric pressure. Cooling converts the gas into an odorless, non-toxic, non-corrosive liquid that occupies 1/600th of its gaseous volume, allowing vast quantities of energy to be stored and transported across oceans.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Liquefied Natural Gas (LNG) is natural gas (predominantly methane) that has been purified and cooled down to approximately −162°C (−260°F) at standard atmospheric pressure. Cooling converts the gas into an odorless, non-toxic, non-corrosive liquid that occupies 1/600th of its gaseous volume, allowing vast quantities of energy to be stored and transported across oceans."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "What LNG Stands For: Liquefied Natural Gas, composed primarily of methane (CH4).",
          "Cryogenic Liquefaction: Natural gas is treated to remove impurities (water, CO2, sulfur, heavy hydrocarbons) and chilled to ~−162°C.",
          "The 600:1 Ratio: Liquefaction reduces volume roughly 600 times; 1 cargo of LNG (~160,000 m³) converts into ~96 million standard cubic meters (~3.4 Bcf) of gaseous pipeline gas.",
          "LNG Train: An independent modular processing and liquefaction unit within an onshore export terminal containing gas pre-treatment, refrigeration compressors, and cryogenic heat exchangers.",
          "Regasification: The process at import terminals or Floating Storage Regasification Units (FSRUs) that warms liquid LNG back into pipeline-quality natural gas."
        ]
      }
    ],
    "keyTakeaways": [
      "What LNG Stands For: Liquefied Natural Gas, composed primarily of methane (CH4).",
      "Cryogenic Liquefaction: Natural gas is treated to remove impurities (water, CO2, sulfur, heavy hydrocarbons) and chilled to ~−162°C.",
      "The 600:1 Ratio: Liquefaction reduces volume roughly 600 times; 1 cargo of LNG (~160,000 m³) converts into ~96 million standard cubic meters (~3.4 Bcf) of gaseous pipeline gas.",
      "LNG Train: An independent modular processing and liquefaction unit within an onshore export terminal containing gas pre-treatment, refrigeration compressors, and cryogenic heat exchangers.",
      "Regasification: The process at import terminals or Floating Storage Regasification Units (FSRUs) that warms liquid LNG back into pipeline-quality natural gas."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Sabine Pass LNG in Louisiana operates 6 liquefaction trains, each capable of producing ~5 million metric tons per annum (MTPA)."
      },
      {
        "title": "Practical Application 2",
        "scenario": "An FSRU moored offshore warming LNG using ambient seawater heat exchangers and injecting gas directly into a nation’s domestic power grid."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "lng-2",
    "title": "LNG Carriers, Boil-Off Gas (BOG) & Shipping Logistics",
    "category": "LNG",
    "order": 187,
    "summary": "Cryogenic containment systems, boil-off gas mechanics, and vessel operations (ETA/ETD/Laycan).",
    "content": "Transporting liquid at −162°C across global oceans requires highly sophisticated naval engineering. LNG carriers feature insulated membrane or spherical Moss containment tanks, and managing heat ingress (boil-off gas) is central to voyage economics.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Transporting liquid at −162°C across global oceans requires highly sophisticated naval engineering. LNG carriers feature insulated membrane or spherical Moss containment tanks, and managing heat ingress (boil-off gas) is central to voyage economics."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "LNG Carrier: Specialized double-hulled vessels equipped with heavily insulated tanks (typical capacity: 140,000 to 180,000 m³, and Q-Max vessels up to 266,000 m³).",
          "Boil-Off Gas (BOG): Despite insulation, ambient heat ingress causes 0.10% to 0.15% of the liquid cargo to vaporize daily during transit.",
          "BOG Utilization: Modern dual-fuel engines (DFDE / ME-GA / X-DF) burn boil-off gas as clean propulsion fuel, or reliquefy it back into cargo tanks using onboard subcoolers.",
          "Laycan & Arrival Notices: Laycan is the agreed window for vessel arrival. ETA (Estimated Time of Arrival) and ETD (Estimated Time of Departure) guide strict berth scheduling to avoid demurrage.",
          "Heel Management: A small quantity of LNG (\"heel\") is deliberately kept inside tanks on the ballast (return) voyage to keep containment systems cryogenic (-160°C)."
        ]
      }
    ],
    "keyTakeaways": [
      "LNG Carrier: Specialized double-hulled vessels equipped with heavily insulated tanks (typical capacity: 140,000 to 180,000 m³, and Q-Max vessels up to 266,000 m³).",
      "Boil-Off Gas (BOG): Despite insulation, ambient heat ingress causes 0.10% to 0.15% of the liquid cargo to vaporize daily during transit.",
      "BOG Utilization: Modern dual-fuel engines (DFDE / ME-GA / X-DF) burn boil-off gas as clean propulsion fuel, or reliquefy it back into cargo tanks using onboard subcoolers.",
      "Laycan & Arrival Notices: Laycan is the agreed window for vessel arrival. ETA (Estimated Time of Arrival) and ETD (Estimated Time of Departure) guide strict berth scheduling to avoid demurrage.",
      "Heel Management: A small quantity of LNG (\"heel\") is deliberately kept inside tanks on the ballast (return) voyage to keep containment systems cryogenic (-160°C)."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A 20-day voyage from the US Gulf Coast to Asia causes ~2.5% of the cargo to naturally vaporize into BOG, which is routed into the ship’s engines to propel the vessel."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Missing a tight 48-hour loading Laycan at Ras Laffan can trigger contractual default, berth forfeiture, and hundreds of thousands of dollars in carrier idle fees."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "lng-3",
    "title": "Commercial Contracts: FOB vs. DES & Cargo Diversion",
    "category": "LNG",
    "order": 188,
    "summary": "Free on Board vs. Delivered Ex-Ship terms, shipping risk allocation, and diversion flexibility.",
    "content": "LNG trading structures are governed by whether the buyer or seller controls maritime transportation. The choice between FOB and DES contracts dictates who bears freight volatility, boil-off risk, and cargo diversion opportunities.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "LNG trading structures are governed by whether the buyer or seller controls maritime transportation. The choice between FOB and DES contracts dictates who bears freight volatility, boil-off risk, and cargo diversion opportunities."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "FOB (Free on Board): The buyer takes legal title and risk as LNG passes the terminal loading flange. The buyer charters the carrier, pays for shipping, and absorbs transit boil-off.",
          "DES (Delivered Ex-Ship): The seller is responsible for shipping and delivers LNG directly to the buyer’s import terminal flange, bearing all voyage and maritime risks.",
          "Key Differences: FOB provides destination flexibility to the buyer; DES keeps shipping and routing control with the seller.",
          "Cargo Diversion: Contractual mechanism allowing the cargo owner to redirect a laden vessel in transit to an alternate, more lucrative destination terminal.",
          "Profit Sharing & Operational Clearances: Destination-free US FOB contracts allow full diversion freedom, whereas legacy contracts often require seller approval or margin sharing."
        ]
      }
    ],
    "keyTakeaways": [
      "FOB (Free on Board): The buyer takes legal title and risk as LNG passes the terminal loading flange. The buyer charters the carrier, pays for shipping, and absorbs transit boil-off.",
      "DES (Delivered Ex-Ship): The seller is responsible for shipping and delivers LNG directly to the buyer’s import terminal flange, bearing all voyage and maritime risks.",
      "Key Differences: FOB provides destination flexibility to the buyer; DES keeps shipping and routing control with the seller.",
      "Cargo Diversion: Contractual mechanism allowing the cargo owner to redirect a laden vessel in transit to an alternate, more lucrative destination terminal.",
      "Profit Sharing & Operational Clearances: Destination-free US FOB contracts allow full diversion freedom, whereas legacy contracts often require seller approval or margin sharing."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "An FOB buyer loads a cargo at Corpus Christi initially bound for Northwest Europe. When an Asian cold snap causes JKM prices to spike, the buyer diverts the carrier around Africa to Tokyo, capturing an extra $4M margin."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Under a DES contract to Zeebrugge, the seller is liable if stormy weather delays vessel arrival beyond the scheduled discharge window."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "lng-4",
    "title": "Global Pricing Benchmarks: Henry Hub, TTF & JKM",
    "category": "LNG",
    "order": 189,
    "summary": "The three regional pricing poles: US Henry Hub feedgas, European TTF, and Asian JKM.",
    "content": "Global LNG operates across three interconnected pricing basins: North America (Henry Hub), Europe (Title Transfer Facility - TTF), and Asia (Japan Korea Marker - JKM). Understanding the linkage between these benchmarks is essential for global energy trading.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Global LNG operates across three interconnected pricing basins: North America (Henry Hub), Europe (Title Transfer Facility - TTF), and Asia (Japan Korea Marker - JKM). Understanding the linkage between these benchmarks is essential for global energy trading."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Henry Hub (HH): US domestic pipeline price. US LNG export contracts link feedgas purchase prices directly to Henry Hub: Price = 115% HH + Liquefaction Tolling Fee ($2.50–$3.50/MMBtu).",
          "TTF (Title Transfer Facility): The Dutch virtual trading hub that sets the benchmark price for pipeline gas and delivered LNG in Continental Europe.",
          "JKM (Japan Korea Marker): Published by S&P Global Platts, the premier spot price assessment for physical LNG cargos delivered into Northeast Asia (Japan, South Korea, China, Taiwan).",
          "Oil-Linked Pricing (Oil Indexation): Legacy Asian long-term Sales and Purchase Agreements (SPAs) link LNG prices to crude oil (e.g., Price = 12% to 14.5% of Brent + Constant).",
          "Global Price Parity: When European or Asian prices exceed US Henry Hub plus liquefaction and freight costs, US export terminals run at 100% capacity."
        ]
      }
    ],
    "keyTakeaways": [
      "Henry Hub (HH): US domestic pipeline price. US LNG export contracts link feedgas purchase prices directly to Henry Hub: Price = 115% HH + Liquefaction Tolling Fee ($2.50–$3.50/MMBtu).",
      "TTF (Title Transfer Facility): The Dutch virtual trading hub that sets the benchmark price for pipeline gas and delivered LNG in Continental Europe.",
      "JKM (Japan Korea Marker): Published by S&P Global Platts, the premier spot price assessment for physical LNG cargos delivered into Northeast Asia (Japan, South Korea, China, Taiwan).",
      "Oil-Linked Pricing (Oil Indexation): Legacy Asian long-term Sales and Purchase Agreements (SPAs) link LNG prices to crude oil (e.g., Price = 12% to 14.5% of Brent + Constant).",
      "Global Price Parity: When European or Asian prices exceed US Henry Hub plus liquefaction and freight costs, US export terminals run at 100% capacity."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A contract priced at 115% * $3.00 (HH) + $3.00 liquefaction fee = $6.45/MMBtu FOB Gulf Coast. With shipping to Europe costing $1.50/MMBtu, the landed cost is $7.95/MMBtu."
      },
      {
        "title": "Practical Application 2",
        "scenario": "If TTF trades at $12.00/MMBtu and JKM trades at $14.50/MMBtu, traders calculate whether the higher JKM net-back outweighs the additional shipping time to Asia."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1611974714658-66d2c13ee0a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "lng-5",
    "title": "LNG Arbitrage, Portfolio Optimization & Voyage Economics",
    "category": "LNG",
    "order": 190,
    "summary": "Net-back calculations, freight sensitivity, canal tolls, and multi-asset portfolio scheduling.",
    "content": "LNG trading desks maximize profitability through global arbitrage and fleet optimization. Because shipping costs represent a massive proportion of total cargo value, minor route changes or delays dramatically impact portfolio P&L.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "LNG trading desks maximize profitability through global arbitrage and fleet optimization. Because shipping costs represent a massive proportion of total cargo value, minor route changes or delays dramatically impact portfolio P&L."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "LNG Arbitrage: Profiting from price differentials between geographic markets: Arbitrage Margin = Delivered Destination Price - Source Cost - Freight - Canal Tolls - BOG - Port Fees.",
          "Freight & Shipping Economics: Daily spot vessel charter rates fluctuate wildly ($30,000/day during slumps to over $300,000/day during vessel shortages), heavily shifting landed cargo margins.",
          "Chokepoints & Canals: Transit through the Panama Canal or Suez Canal saves 10-15 sailing days vs routing around the Cape of Good Hope, but incurs substantial reservation and toll fees.",
          "Portfolio Optimization: Dynamically balancing multi-origin supply contracts (e.g., US Gulf, Qatar, Australia) against variable global delivery commitments and charter commitments.",
          "Timing Exposure: Cargo pricing windows are tied to specific calendar months. A voyage delayed by 5 days can shift pricing into the next month, completely altering realized revenue."
        ]
      }
    ],
    "keyTakeaways": [
      "LNG Arbitrage: Profiting from price differentials between geographic markets: Arbitrage Margin = Delivered Destination Price - Source Cost - Freight - Canal Tolls - BOG - Port Fees.",
      "Freight & Shipping Economics: Daily spot vessel charter rates fluctuate wildly ($30,000/day during slumps to over $300,000/day during vessel shortages), heavily shifting landed cargo margins.",
      "Chokepoints & Canals: Transit through the Panama Canal or Suez Canal saves 10-15 sailing days vs routing around the Cape of Good Hope, but incurs substantial reservation and toll fees.",
      "Portfolio Optimization: Dynamically balancing multi-origin supply contracts (e.g., US Gulf, Qatar, Australia) against variable global delivery commitments and charter commitments.",
      "Timing Exposure: Cargo pricing windows are tied to specific calendar months. A voyage delayed by 5 days can shift pricing into the next month, completely altering realized revenue."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "Panama Canal drought delays force an LNG carrier to sail around South America (Cape Horn), adding 18 days of vessel charter costs ($2.7M) and consuming an extra 1,500 tons of boil-off fuel."
      },
      {
        "title": "Practical Application 2",
        "scenario": "An energy major optimizes its global fleet by swapping a US cargo bound for Asia with an Australian cargo bound for Europe, saving millions in combined maritime freight."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "lng-6",
    "title": "Risk Management: Freight, Basis, Volume & Price Fixing",
    "category": "LNG",
    "order": 191,
    "summary": "Managing market exposures, index divergence, cargo volume changes, and MTM valuation.",
    "content": "LNG trading books carry unique risk profiles spanning commodity prices, shipping rates, and physical volume changes. Trading desks employ specialized hedging strategies to safeguard against market volatility.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "LNG trading books carry unique risk profiles spanning commodity prices, shipping rates, and physical volume changes. Trading desks employ specialized hedging strategies to safeguard against market volatility."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Freight Risk: Volatility in carrier charter rates and bunker fuel costs affecting the net landed margin of open positions.",
          "Basis & Index Risk: Occurs when a physical cargo priced against one benchmark (e.g., JKM) is hedged using a different financial contract (e.g., Henry Hub or Brent futures), and the price spread widens.",
          "Volume Risk: The risk that delivered energy differs from contracted energy due to transit boil-off (BOG), heel left in tanks, or density/calorific value variations.",
          "Price Fixing: Determining the final invoice price by averaging daily benchmark quotes across the contractually agreed quotation period (e.g., 5 days around Bill of Lading or discharge date).",
          "Mark-to-Market (MTM): Calculating the current economic replacement value of all open physical and shipping commitments using forward price curves and freight rate assessments."
        ]
      }
    ],
    "keyTakeaways": [
      "Freight Risk: Volatility in carrier charter rates and bunker fuel costs affecting the net landed margin of open positions.",
      "Basis & Index Risk: Occurs when a physical cargo priced against one benchmark (e.g., JKM) is hedged using a different financial contract (e.g., Henry Hub or Brent futures), and the price spread widens.",
      "Volume Risk: The risk that delivered energy differs from contracted energy due to transit boil-off (BOG), heel left in tanks, or density/calorific value variations.",
      "Price Fixing: Determining the final invoice price by averaging daily benchmark quotes across the contractually agreed quotation period (e.g., 5 days around Bill of Lading or discharge date).",
      "Mark-to-Market (MTM): Calculating the current economic replacement value of all open physical and shipping commitments using forward price curves and freight rate assessments."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A trader sells a cargo at JKM floating price and hedges by shorting Henry Hub futures. When Asian spot demand weakens relative to the US, the JKM-HH spread collapses, creating unexpected basis losses."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Contract specifies pricing as the monthly average of Platts JKM for the delivery month. As daily pricing quotes print, the ETRM fixes the cargo valuation leg-by-leg."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "lng-7",
    "title": "ETRM Lifecycle & Troubleshooting LNG P&L",
    "category": "LNG",
    "order": 192,
    "summary": "End-to-end deal lifecycle, custody transfer reconciliations, and systematic P&L diagnostics.",
    "content": "Managing LNG in an ETRM system requires tracking physical and financial events from trade booking through voyage execution and final settlement. When P&L or volume variances occur, operations and middle office teams follow a rigorous diagnostic workflow.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Managing LNG in an ETRM system requires tracking physical and financial events from trade booking through voyage execution and final settlement. When P&L or volume variances occur, operations and middle office teams follow a rigorous diagnostic workflow."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Lifecycle Workflow: Trade Booking -> Cargo Scheduling -> Vessel Charter Nomination -> Berth Loading -> Voyage Tracking (BOG & Bunker Log) -> Destination Discharge -> Actualization -> Price Fixing -> Invoice Settlement.",
          "Custody Transfer Survey: Independent marine surveyors measure liquid tank level, pressure, and temperature before and after loading/unloading to generate the Certificate of Quantity and Quality.",
          "Volume Reconciliation: Converting gross cubic meters of liquid into metric tons and net MMBtu energy content using laboratory gas chromatography.",
          "P&L Troubleshooting Sequence: Trace trade -> cargo allocation -> schedule -> vessel charter details -> loading BOL -> voyage log -> discharge outturn -> actual quantity -> pricing formula -> market data curves -> valuation model -> accounting ledger.",
          "Common Root Causes: Incorrect charter hire day count, missing canal toll accruals, stale forward curve market data, delayed boil-off fuel actuals, or mismatched price fixing quotation dates."
        ]
      }
    ],
    "keyTakeaways": [
      "Lifecycle Workflow: Trade Booking -> Cargo Scheduling -> Vessel Charter Nomination -> Berth Loading -> Voyage Tracking (BOG & Bunker Log) -> Destination Discharge -> Actualization -> Price Fixing -> Invoice Settlement.",
      "Custody Transfer Survey: Independent marine surveyors measure liquid tank level, pressure, and temperature before and after loading/unloading to generate the Certificate of Quantity and Quality.",
      "Volume Reconciliation: Converting gross cubic meters of liquid into metric tons and net MMBtu energy content using laboratory gas chromatography.",
      "P&L Troubleshooting Sequence: Trace trade -> cargo allocation -> schedule -> vessel charter details -> loading BOL -> voyage log -> discharge outturn -> actual quantity -> pricing formula -> market data curves -> valuation model -> accounting ledger.",
      "Common Root Causes: Incorrect charter hire day count, missing canal toll accruals, stale forward curve market data, delayed boil-off fuel actuals, or mismatched price fixing quotation dates."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A $450,000 P&L drop is traced to an unrecorded 3-day vessel delay at the Suez Canal that triggered an additional charter day accrual and demurrage charge."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Discharge outturn in Tokyo shows 3,100,000 MMBtu delivered versus 3,150,000 MMBtu loaded in Texas; the middle office verifies whether the 50,000 MMBtu difference matches expected boil-off fuel consumption."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "pw-1",
    "title": "Power Fundamentals: MW vs MWh & Continuous Balancing",
    "category": "Power",
    "order": 193,
    "summary": "Why electricity cannot be stored easily, understanding capacity (MW) vs energy (MWh), and the grid balance imperative.",
    "content": "Electricity is fundamentally different from other energy commodities like crude oil or coal. Because electricity travels near the speed of light and cannot be stored economically on a massive grid scale without significant capital expense, supply must match consumer demand instantaneously every second to maintain system frequency (50/60 Hz).",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Electricity is fundamentally different from other energy commodities like crude oil or coal. Because electricity travels near the speed of light and cannot be stored economically on a massive grid scale without significant capital expense, supply must match consumer demand instantaneously every second to maintain system frequency (50/60 Hz)."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Power vs. Energy: Megawatt (MW) represents instantaneous power or capacity; Megawatt-hour (MWh) represents accumulated energy delivered over time.",
          "Energy Formula: Energy (MWh) = Power (MW) × Time (Hours). E.g., 100 MW running for 5 hours delivers 500 MWh.",
          "The Balancing Imperative: If generation exceeds demand, system frequency rises; if demand exceeds generation, frequency drops, risking catastrophic blackouts and equipment damage.",
          "Physical vs. Financial Trading: Physical power involves scheduling generation or consumption onto transmission lines; financial power settles in cash against regional exchange or ISO reference prices."
        ]
      }
    ],
    "keyTakeaways": [
      "Power vs. Energy: Megawatt (MW) represents instantaneous power or capacity; Megawatt-hour (MWh) represents accumulated energy delivered over time.",
      "Energy Formula: Energy (MWh) = Power (MW) × Time (Hours). E.g., 100 MW running for 5 hours delivers 500 MWh.",
      "The Balancing Imperative: If generation exceeds demand, system frequency rises; if demand exceeds generation, frequency drops, risking catastrophic blackouts and equipment damage.",
      "Physical vs. Financial Trading: Physical power involves scheduling generation or consumption onto transmission lines; financial power settles in cash against regional exchange or ISO reference prices."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A 500 MW gas turbine plant running at full capacity for 24 hours produces 12,000 MWh of wholesale electrical energy."
      },
      {
        "title": "Practical Application 2",
        "scenario": "Grid operators dispatch fast-ramping batteries or hydro turbines within seconds to absorb sudden solar drops when cloud cover passes over solar fields."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "pw-2",
    "title": "Power Delivery Profiles: Baseload, Peakload & Off-Peak",
    "category": "Power",
    "order": 194,
    "summary": "Standardized temporal delivery blocks, 5x16 peak hours, and 24x7 baseload generation.",
    "content": "Power markets trade standardized blocks of time to match diurnal human consumption patterns. Because electricity demand surges during daytime commercial hours and plummets late at night, power contracts are structured into discrete hourly profiles.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Power markets trade standardized blocks of time to match diurnal human consumption patterns. Because electricity demand surges during daytime commercial hours and plummets late at night, power contracts are structured into discrete hourly profiles."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Baseload (7x24 / Around-the-Clock): Continuous flat power delivery covering all 24 hours of every day, typically supplied by low-marginal-cost nuclear, run-of-river hydro, or thermal plants.",
          "Peakload (Peak / 5x16): Power delivered during high-demand daytime and evening hours (typically Monday through Friday, 7:00 AM to 11:00 PM, 16 hours/day).",
          "Off-Peak (Wrap / 7x8 + Weekends): Electricity delivered during low-demand nighttime hours, weekends, and holidays when wholesale power prices are substantially lower.",
          "Super-Peak: Narrow ultra-high-demand delivery blocks (e.g., 2:00 PM to 6:00 PM in hot summer climates) capturing extreme air-conditioning cooling surges.",
          "Block Contracts: Standard traded contracts bundle these hours together, allowing market participants to hedge predictable daily consumption shapes."
        ]
      }
    ],
    "keyTakeaways": [
      "Baseload (7x24 / Around-the-Clock): Continuous flat power delivery covering all 24 hours of every day, typically supplied by low-marginal-cost nuclear, run-of-river hydro, or thermal plants.",
      "Peakload (Peak / 5x16): Power delivered during high-demand daytime and evening hours (typically Monday through Friday, 7:00 AM to 11:00 PM, 16 hours/day).",
      "Off-Peak (Wrap / 7x8 + Weekends): Electricity delivered during low-demand nighttime hours, weekends, and holidays when wholesale power prices are substantially lower.",
      "Super-Peak: Narrow ultra-high-demand delivery blocks (e.g., 2:00 PM to 6:00 PM in hot summer climates) capturing extreme air-conditioning cooling surges.",
      "Block Contracts: Standard traded contracts bundle these hours together, allowing market participants to hedge predictable daily consumption shapes."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A steel mill agrees to buy a 50 MW 5x16 Peak contract to cover its manufacturing shift, while purchasing cheaper Off-Peak power for overnight furnace warming."
      },
      {
        "title": "Practical Application 2",
        "scenario": "During winter nights, off-peak power prices often crater, occasionally turning negative in areas with high nocturnal wind output."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "pw-3",
    "title": "Market Timelines: Day-Ahead, Intraday & Real-Time Balancing",
    "category": "Power",
    "order": 195,
    "summary": "How electricity is scheduled from day-ahead forward auctions down to real-time 5-minute dispatch.",
    "content": "Trading electricity follows a sequential cascade of clearing markets. Power moves from long-term forward hedging down to the day-ahead auction, then into intraday adjustments, and finally into real-time physical balancing by the transmission system operator.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Trading electricity follows a sequential cascade of clearing markets. Power moves from long-term forward hedging down to the day-ahead auction, then into intraday adjustments, and finally into real-time physical balancing by the transmission system operator."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Day-Ahead Market (DAM): Blind-auction market where participants submit hourly buy/sell bids by midday (e.g., 10:00 AM or 12:00 PM) for all 24 hours of the following operating day.",
          "Intraday Market: Continuous bilateral or discrete auction trading that allows market participants to fine-tune schedules closer to delivery (up to 15–30 minutes before flow).",
          "Real-Time / Balancing Market (RTM): Grid operators (ISOs/RTOs or TSOs) clear 5-minute dispatch intervals to balance remaining physical deviations between generation and load.",
          "Ancillary Services: Reserves (spinning, non-spinning, regulation) procured by grid operators to rapidly compensate for sudden line trips or plant failures."
        ]
      }
    ],
    "keyTakeaways": [
      "Day-Ahead Market (DAM): Blind-auction market where participants submit hourly buy/sell bids by midday (e.g., 10:00 AM or 12:00 PM) for all 24 hours of the following operating day.",
      "Intraday Market: Continuous bilateral or discrete auction trading that allows market participants to fine-tune schedules closer to delivery (up to 15–30 minutes before flow).",
      "Real-Time / Balancing Market (RTM): Grid operators (ISOs/RTOs or TSOs) clear 5-minute dispatch intervals to balance remaining physical deviations between generation and load.",
      "Ancillary Services: Reserves (spinning, non-spinning, regulation) procured by grid operators to rapidly compensate for sudden line trips or plant failures."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A utility buys 200 MW in the Day-Ahead market at $45/MWh based on weather forecasts. On the delivery morning, temperatures spike 5°F higher; the utility buys an extra 30 MW in the Intraday market to avoid punitive balancing penalty charges."
      },
      {
        "title": "Practical Application 2",
        "scenario": "In ERCOT or PJM, Day-Ahead prices clear simultaneously across thousands of network buses using security-constrained unit commitment (SCUC)."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "pw-4",
    "title": "Operations: Scheduling, Nominations, Meter Actuals & Imbalances",
    "category": "Power",
    "order": 196,
    "summary": "Submitting schedules to the ISO, recording meter actuals, and settling balancing imbalances.",
    "content": "Power operations bridge the gap between commercial trading contracts and physical electron flow across the transmission grid. Middle and back office teams monitor nominations, reconcile meter statements, and settle imbalance exposure.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Power operations bridge the gap between commercial trading contracts and physical electron flow across the transmission grid. Middle and back office teams monitor nominations, reconcile meter statements, and settle imbalance exposure."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Scheduling: Generating and submitting planned MW injection/withdrawal profiles by time block and grid location to the system operator.",
          "Nomination: The formal notification to the ISO/TSO specifying inter-zone flows, plant dispatch, or bilateral contract schedules.",
          "Actualization: Ingesting revenue-quality meter data (from substations and settlement meters) into the ETRM system to replace planned schedules with true physical flow.",
          "Power Imbalance: The delta between scheduled energy and actual metered energy: Imbalance = Actual MWh - Scheduled MWh.",
          "Balancing Settlement: Imbalances are financially settled against real-time balancing prices; short positions (under-generation or over-consumption) must purchase shortfall power at real-time cash prices."
        ]
      }
    ],
    "keyTakeaways": [
      "Scheduling: Generating and submitting planned MW injection/withdrawal profiles by time block and grid location to the system operator.",
      "Nomination: The formal notification to the ISO/TSO specifying inter-zone flows, plant dispatch, or bilateral contract schedules.",
      "Actualization: Ingesting revenue-quality meter data (from substations and settlement meters) into the ETRM system to replace planned schedules with true physical flow.",
      "Power Imbalance: The delta between scheduled energy and actual metered energy: Imbalance = Actual MWh - Scheduled MWh.",
      "Balancing Settlement: Imbalances are financially settled against real-time balancing prices; short positions (under-generation or over-consumption) must purchase shortfall power at real-time cash prices."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A wind developer schedules 80 MWh for Hour-Ending 14:00, but wind slows down and the farm generates only 65 MWh. The 15 MWh negative imbalance is automatically cashed out at the ISO’s real-time balancing price."
      },
      {
        "title": "Practical Application 2",
        "scenario": "An industrial customer curtails operations during high-price hours, creating a positive imbalance that earns lucrative revenue by selling power back to the grid."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "pw-5",
    "title": "Locational Marginal Pricing (LMP) & Grid Congestion",
    "category": "Power",
    "order": 197,
    "summary": "Why geography matters: energy, congestion, line losses, and transmission bottlenecks.",
    "content": "Because electricity obeys Kirchhoff’s laws and transmission lines have physical thermal and voltage ratings, power prices vary across geographic nodes. Locational Marginal Pricing (LMP) decomposes the cost of serving the next increment of load at every specific substation.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Because electricity obeys Kirchhoff’s laws and transmission lines have physical thermal and voltage ratings, power prices vary across geographic nodes. Locational Marginal Pricing (LMP) decomposes the cost of serving the next increment of load at every specific substation."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Transmission Congestion: When transmission lines reach physical capacity, preventing cheap power from remote wind/nuclear plants from reaching metropolitan demand centers.",
          "LMP Decomposition: LMP = Marginal Energy Component + Marginal Congestion Component + Marginal Loss Component.",
          "Why Location Matters: A node behind a congested transmission corridor can trade at negative prices (-$20/MWh) while a load center 50 miles away trades at $250/MWh.",
          "Financial Transmission Rights (FTRs / CRRs): Financial instruments used by traders and utilities to hedge against nodal congestion price spreads.",
          "Basis Risk: The risk that the local nodal price where power is physically delivered diverges from the liquid regional trading hub (e.g., PJM West Hub, ERCOT North)."
        ]
      }
    ],
    "keyTakeaways": [
      "Transmission Congestion: When transmission lines reach physical capacity, preventing cheap power from remote wind/nuclear plants from reaching metropolitan demand centers.",
      "LMP Decomposition: LMP = Marginal Energy Component + Marginal Congestion Component + Marginal Loss Component.",
      "Why Location Matters: A node behind a congested transmission corridor can trade at negative prices (-$20/MWh) while a load center 50 miles away trades at $250/MWh.",
      "Financial Transmission Rights (FTRs / CRRs): Financial instruments used by traders and utilities to hedge against nodal congestion price spreads.",
      "Basis Risk: The risk that the local nodal price where power is physically delivered diverges from the liquid regional trading hub (e.g., PJM West Hub, ERCOT North)."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "In West Texas, excessive wind generation exceeds local transmission line takeaway capacity, causing ERCOT Panhandle nodes to trade at -$15/MWh while Dallas-Fort Worth trades at +$85/MWh."
      },
      {
        "title": "Practical Application 2",
        "scenario": "A power generator hedges output with a hub forward contract; when a local transformer fails, local basis collapses, creating unexpected trading losses."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "pw-6",
    "title": "Renewables, Intermittency & PPAs vs Tolling",
    "category": "Power",
    "order": 198,
    "summary": "Weather-driven volatility, Power Purchase Agreements, and gas tolling contracts.",
    "content": "The rapid transition to renewable wind and solar energy introduces dramatic supply volatility into wholesale power grids. Commercial contracts such as long-term PPAs and gas-fired tolling agreements are used to manage generation risk and stabilize revenue.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "The rapid transition to renewable wind and solar energy introduces dramatic supply volatility into wholesale power grids. Commercial contracts such as long-term PPAs and gas-fired tolling agreements are used to manage generation risk and stabilize revenue."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Renewable Intermittency: Non-dispatchable generation fluctuating rapidly with wind speeds, cloud cover, and solar zenith angles (the famous \"Duck Curve\").",
          "Power Purchase Agreement (PPA): Long-term bilateral contracts (10–20 years) where an offtaker (utility, corporate tech giant) agrees to purchase electricity and renewable attributes (RECs) from a clean energy project.",
          "Tolling Agreement: An arrangement where a power marketer/toller provides fuel (gas) to a generator and retains the exclusive right to dispatch the plant and receive the electricity, paying a capacity tolling fee.",
          "The Spark Spread Option: A tolling agreement functions economically as a strip of physical spark spread call options on power prices.",
          "Weather Drivers: Extreme heat waves drive air-conditioning load spikes; winter freezes cause heating spikes and freeze gas infrastructure; calm overcast days induce renewable generation droughts (\"Dunkelflaute\")."
        ]
      }
    ],
    "keyTakeaways": [
      "Renewable Intermittency: Non-dispatchable generation fluctuating rapidly with wind speeds, cloud cover, and solar zenith angles (the famous \"Duck Curve\").",
      "Power Purchase Agreement (PPA): Long-term bilateral contracts (10–20 years) where an offtaker (utility, corporate tech giant) agrees to purchase electricity and renewable attributes (RECs) from a clean energy project.",
      "Tolling Agreement: An arrangement where a power marketer/toller provides fuel (gas) to a generator and retains the exclusive right to dispatch the plant and receive the electricity, paying a capacity tolling fee.",
      "The Spark Spread Option: A tolling agreement functions economically as a strip of physical spark spread call options on power prices.",
      "Weather Drivers: Extreme heat waves drive air-conditioning load spikes; winter freezes cause heating spikes and freeze gas infrastructure; calm overcast days induce renewable generation droughts (\"Dunkelflaute\")."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A cloud provider signs a 15-year virtual PPA with a 200 MW solar facility to match its data center energy consumption with certified clean power."
      },
      {
        "title": "Practical Application 2",
        "scenario": "An energy trader holding a tolling contract on a CCGT plant chooses to fire up the turbine only when Day-Ahead power prices ($95/MWh) exceed fuel heat costs ($45/MWh)."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=400&auto=format&fit=crop"
  },
  {
    "id": "pw-7",
    "title": "Power Risk Management: Shape, Volume, Forward Curves & P&L",
    "category": "Power",
    "order": 199,
    "summary": "Forward curve construction, shape and volume risks, MTM valuation, and P&L troubleshooting.",
    "content": "Power trading desks manage multi-dimensional portfolios exposed to price, profile shape, volume, and location risks. Middle and front office professionals rely on forward curves and systematic diagnostic workflows to ensure accurate valuation and risk control.",
    "sections": [
      {
        "heading": "Overview & Principles",
        "points": [
          "Power trading desks manage multi-dimensional portfolios exposed to price, profile shape, volume, and location risks. Middle and front office professionals rely on forward curves and systematic diagnostic workflows to ensure accurate valuation and risk control."
        ]
      },
      {
        "heading": "Key Mechanisms & Operational Points",
        "points": [
          "Shape Risk: The risk that an asset’s actual generation or load profile across 24 hourly intervals mismatches standard flat traded block hedges (e.g., solar peaking at noon while hedges are flat 5x16).",
          "Volume Risk: Uncertainty regarding how many total MWh will actually be produced or consumed due to weather, industrial downtime, or forced plant outages.",
          "Power Forward Curves: Granular forward pricing curves built by blending exchange futures, OTC broker quotes, and hourly shaping algorithms across delivery tenors.",
          "Mark-to-Market (MTM): Valuing all open hourly positions against forward curves to reflect true economic portfolio value and track unrealized P&L.",
          "P&L Troubleshooting Sequence: When power P&L is unexpected, systematically trace deal tickets -> delivery shape profile -> nodal/zonal location -> forward curve inputs -> meter actuals -> ISO balancing/congestion invoices -> valuation models."
        ]
      }
    ],
    "keyTakeaways": [
      "Shape Risk: The risk that an asset’s actual generation or load profile across 24 hourly intervals mismatches standard flat traded block hedges (e.g., solar peaking at noon while hedges are flat 5x16).",
      "Volume Risk: Uncertainty regarding how many total MWh will actually be produced or consumed due to weather, industrial downtime, or forced plant outages.",
      "Power Forward Curves: Granular forward pricing curves built by blending exchange futures, OTC broker quotes, and hourly shaping algorithms across delivery tenors.",
      "Mark-to-Market (MTM): Valuing all open hourly positions against forward curves to reflect true economic portfolio value and track unrealized P&L.",
      "P&L Troubleshooting Sequence: When power P&L is unexpected, systematically trace deal tickets -> delivery shape profile -> nodal/zonal location -> forward curve inputs -> meter actuals -> ISO balancing/congestion invoices -> valuation models."
    ],
    "examples": [
      {
        "title": "Practical Application 1",
        "scenario": "A retail supplier hedges expected summer customer load with flat 5x16 contracts; during a record heat wave, customer air-conditioning demand doubles during 4:00 PM–7:00 PM, forcing the supplier to buy expensive real-time power at $2,000/MWh (shape risk)."
      },
      {
        "title": "Practical Application 2",
        "scenario": "A trading desk investigates a $200,000 P&L mismatch and discovers that the ETRM used an off-peak price curve to value a 5x16 on-peak contract."
      }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
  }
];

import { communityService, convertConceptToTopic } from './communityService';

export const learningService = {
  getTopics: async (): Promise<LearningTopic[]> => {
    try {
      const communityList = await communityService.getConcepts();
      const communityTopics = communityList.map(convertConceptToTopic);
      // Put community topics and hardcoded topics together
      return [...communityTopics, ...mockTopics].sort((a, b) => a.order - b.order);
    } catch (e) {
      return [...mockTopics].sort((a, b) => a.order - b.order);
    }
  },

  getTopicDetail: async (id: string): Promise<LearningTopic | undefined> => {
    if (id.startsWith('comm_')) {
      const communityList = await communityService.getLocalConcepts();
      const found = communityList.find(c => `comm_${c.id}` === id);
      if (found) {
        return convertConceptToTopic(found);
      }
    }
    return mockTopics.find((topic) => topic.id === id);
  },

  getTopicsByCategory: async (category: string): Promise<LearningTopic[]> => {
    if (category === 'All') {
      return [...mockTopics].sort((a, b) => a.order - b.order);
    }
    return mockTopics
      .filter((topic) => topic.category === category)
      .sort((a, b) => a.order - b.order);
  },

  getCategories: async (): Promise<string[]> => {
    return [
      'All',
      'Foundations',
      'Oil',
      'Natural Gas',
      'LNG',
      'Power',
      'Master Data',
      'Risk,Valuations & PnL',
      'Physical Markets',
      'Credit,Risk Limits',
      'Post Trade & Settlement',
      'Operations',
      'Compliance'
    ];
  }
};
