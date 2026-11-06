import AsyncStorage from '@react-native-async-storage/async-storage';

export interface QuizQuestion {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const QUIZ_CATEGORY_ORDER = [
  'Foundations',
  'Oil',
  'Natural Gas',
  'LNG',
  'Power',
  'Physical Markets',
  'Risk,Valuations & PnL',
  'Credit,Risk Limits',
  'Post Trade & Settlement',
  'Operations',
  'Compliance'
];

const STORAGE_KEY_PREFIX = '@quiz_score_';

export const quizQuestions: QuizQuestion[] = [
  // --- FOUNDATIONS (10 Questions) ---
  {
    id: 'f1',
    category: 'Foundations',
    question: "What does ETRM stand for?",
    options: ["Energy Trade Reporting Management", "Energy Trading & Risk Management", "Electronic Trade Risk Monitoring", "Energy Transaction & Revenue Management"],
    correctAnswer: 1,
    explanation: "ETRM is Energy Trading & Risk Management."
  },
  {
    id: 'f2',
    category: 'Foundations',
    question: "Which of these is NOT a primary energy commodity?",
    options: ["Crude Oil", "Natural Gas", "Electricity", "Gold"],
    correctAnswer: 3,
    explanation: "Gold is a precious metal, not an energy commodity."
  },
  {
    id: 'f3',
    category: 'Foundations',
    question: "What is a 'Spot' market?",
    options: ["Delivery in 10 years", "Immediate or near-immediate delivery", "Exchange-only trading", "Trading based on weather spots"],
    correctAnswer: 1,
    explanation: "Spot markets involve immediate or near-term delivery (usually within 2 days)."
  },
  {
    id: 'f4',
    category: 'Foundations',
    question: "What is the difference between a Forward and a Future?",
    options: ["Forwards are on exchanges, Futures are OTC", "Futures are standardized on exchanges, Forwards are custom OTC", "There is no difference", "Forwards are only for oil"],
    correctAnswer: 1,
    explanation: "Futures are standardized exchange contracts; Forwards are custom OTC agreements."
  },
  {
    id: 'f5',
    category: 'Foundations',
    question: "What is a 'Legal Entity' in ETRM?",
    options: ["A trading desk", "A company recognized by law that can sign contracts", "A software license", "A government regulator"],
    correctAnswer: 1,
    explanation: "A Legal Entity is the official company nameplate that holds legal and tax obligations."
  },
  {
    id: 'f6',
    category: 'Foundations',
    question: "What is a 'Business Unit'?",
    options: ["A separate company", "A sub-division/desk within a company (e.g., Power Desk)", "A type of gas pipeline", "A legal identifier"],
    correctAnswer: 1,
    explanation: "Business Units are operational desks or departments within a Legal Entity."
  },
  {
    id: 'f7',
    category: 'Foundations',
    question: "In ETRM, what is an 'Instrument'?",
    options: ["A musical device", "The template or product definition (e.g., Brent Crude)", "The actual deal booked", "A type of meter"],
    correctAnswer: 1,
    explanation: "An Instrument is the template/product definition; the Trade is the actual transaction."
  },
  {
    id: 'f8',
    category: 'Foundations',
    question: "What is 'Basis' in energy trading?",
    options: ["The total volume", "The price difference between two locations", "The starting price", "The base load of power"],
    correctAnswer: 1,
    explanation: "Basis is the price difference between two locations (e.g., Houston vs. New York)."
  },
  {
    id: 'f9',
    category: 'Foundations',
    question: "What is 'Contango'?",
    options: ["Future prices are higher than today", "Future prices are lower than today", "Prices are flat", "A type of energy dance"],
    correctAnswer: 0,
    explanation: "Contango occurs when future prices are higher than current prices, encouraging storage."
  },
  {
    id: 'f10',
    category: 'Foundations',
    question: "What is 'Backwardation'?",
    options: ["Future prices are higher", "Future prices are lower than today", "Trading in reverse", "Price recovery"],
    correctAnswer: 1,
    explanation: "Backwardation is when future prices are lower than today, encouraging immediate sale."
  },

  // --- OIL (46 Questions) ---
  {
    id: 'oil1',
    category: 'Oil',
    question: "What is crude oil?",
    options: [
      "A refined petroleum fuel used directly in high-compression engines",
      "A naturally occurring liquid hydrocarbon traded as a raw material and refined into petroleum products",
      "A synthetic chemical solvent extracted from natural gas liquids",
      "A standard bio-fuel blend regulated under renewable fuel mandates"
    ],
    correctAnswer: 1,
    explanation: "Crude oil is a naturally occurring liquid hydrocarbon mixture found in underground rock formations. It is extracted, traded as a primary raw material, and refined into petroleum fuels (gasoline, diesel, jet fuel) and petrochemical feedstocks."
  },
  {
    id: 'oil2',
    category: 'Oil',
    question: "What is API gravity?",
    options: [
      "An electronic API data protocol used for trade confirmations",
      "A density measure; higher API generally indicates lighter crude",
      "A measure of oil viscosity under high pipeline pressures",
      "The total concentration of sulfur and heavy metal contaminants"
    ],
    correctAnswer: 1,
    explanation: "American Petroleum Institute (API) gravity measures crude oil density relative to water. Light crudes have high API gravity (>31.1° API) and float on water, yielding more high-value transportation fuels during refining."
  },
  {
    id: 'oil3',
    category: 'Oil',
    question: "What is sweet crude?",
    options: [
      "Crude oil with relatively high sugar and organic carbon content",
      "Crude with relatively low sulfur content (typically <0.5%)",
      "Crude oil that has undergone initial desulfurization processing",
      "Crude blended specifically for residential heating systems"
    ],
    correctAnswer: 1,
    explanation: "Sweet crude contains small amounts of sulfur (typically <0.5% by weight). Because low sulfur is less corrosive and easier to refine into low-emission fuels, sweet crudes command a premium over sour crudes."
  },
  {
    id: 'oil4',
    category: 'Oil',
    question: "What is sour crude?",
    options: [
      "Crude oil that has deteriorated after prolonged storage in tanks",
      "Crude with relatively high sulfur content (typically >0.5%)",
      "Crude oil contaminated with biological bacteria and water emulsifiers",
      "Heavy crude oil extracted exclusively from pre-salt deepwater reservoirs"
    ],
    correctAnswer: 1,
    explanation: "Sour crude contains significant levels of sulfur (>0.5%, often >1.5%). It requires specialized refinery equipment (hydrotreaters, sulfur recovery plants) to avoid equipment corrosion and meet strict environmental fuel regulations."
  },
  {
    id: 'oil5',
    category: 'Oil',
    question: "Why does sulfur matter in crude oil trading and refining?",
    options: [
      "It determines whether crude oil can freeze during marine transportation",
      "It affects refinery processing requirements, equipment corrosion, and economics",
      "It alters the volumetric expansion coefficient of crude oil in storage",
      "It regulates the speed at which tanker vessels are permitted to sail"
    ],
    correctAnswer: 1,
    explanation: "Sulfur content directly impacts refinery operational costs, equipment corrosion, and environmental emissions compliance (such as IMO 2020 marine caps). Sour crudes trade at a price discount to sweet crudes to offset the extra refining cost."
  },
  {
    id: 'oil6',
    category: 'Oil',
    question: "What is Brent?",
    options: [
      "A major international crude pricing benchmark based on North Sea grades",
      "A pipeline gathering terminal located in the Permian basin in Texas",
      "A financial clearinghouse specializing in European natural gas futures",
      "A crude oil tanker size classification for vessels under 500,000 barrels"
    ],
    correctAnswer: 0,
    explanation: "Brent Crude is the leading international benchmark for crude oil pricing. Originally from the North Sea (BFOETM: Brent, Forties, Oseberg, Ekofisk, Troll, and WTI Midland), it prices approximately two-thirds of the world's physical crude supplies."
  },
  {
    id: 'oil7',
    category: 'Oil',
    question: "What is WTI?",
    options: [
      "World Trade Index, tracking international seaborne petroleum flows",
      "A major US crude pricing benchmark (West Texas Intermediate)",
      "Weighted Total Intake, measuring refinery utilization percentages",
      "Western Transport Infrastructure, an interstate pipeline operator"
    ],
    correctAnswer: 1,
    explanation: "West Texas Intermediate (WTI) is the primary benchmark for light, sweet crude oil produced in North America. Traded on NYMEX/CME, it is one of the most liquid financial energy futures contracts in the world."
  },
  {
    id: 'oil8',
    category: 'Oil',
    question: "What is Cushing, Oklahoma in energy trading?",
    options: [
      "The primary deepwater export terminal on the US Gulf Coast",
      "A major US crude hub closely associated with WTI physical delivery",
      "The headquarters of the US Federal Energy Regulatory Commission",
      "The location of the largest refinery complex in North America"
    ],
    correctAnswer: 1,
    explanation: "Cushing is a massive crude storage and pipeline hub with tens of millions of barrels of tank capacity. It serves as the physical delivery mechanism and price discovery center for the NYMEX WTI futures contract."
  },
  {
    id: 'oil9',
    category: 'Oil',
    question: "What is a differential in physical oil pricing?",
    options: [
      "The mechanical variance between load-port and discharge-port meters",
      "A premium or discount to a benchmark",
      "The interest rate margin charged by banks on trade letters of credit",
      "The difference in crude volume resulting from temperature expansion"
    ],
    correctAnswer: 1,
    explanation: "Physical oil trades are typically priced as a benchmark plus or minus a differential (e.g., Brent +$1.25/bbl or WTI -$0.75/bbl) reflecting differences in grade quality (API/sulfur), location, and logistics costs."
  },
  {
    id: 'oil10',
    category: 'Oil',
    question: "Why use benchmark pricing for crude oil contracts?",
    options: [
      "It eliminates the need for buyers and sellers to negotiate delivery dates",
      "It provides transparent market-referenced pricing for bilateral contracts",
      "It guarantees that neither trading party can experience a financial default",
      "It legally prevents commodity prices from fluctuating with market changes"
    ],
    correctAnswer: 1,
    explanation: "Benchmark pricing anchors physical contracts to highly liquid, transparent public exchange or index prices. This allows parties to manage price risk through financial hedging and ensures prices reflect true market conditions."
  },
  {
    id: 'oil11',
    category: 'Oil',
    question: "What is a physical trade?",
    options: [
      "A contract that always settles exclusively in cash without logistics",
      "A trade involving delivery/receipt of the commodity",
      "A deal negotiated verbally in-person on an exchange floor",
      "An automated algorithmic order executed on high-frequency servers"
    ],
    correctAnswer: 1,
    explanation: "A physical trade involves the actual contractual obligation to produce, transport, deliver, or receive physical barrels of crude oil or refined products through pipelines, ships, rail, or storage terminals."
  },
  {
    id: 'oil12',
    category: 'Oil',
    question: "What is a financial trade?",
    options: [
      "A trade funded directly by a government economic development bank",
      "A trade primarily creating financial price exposure without physical delivery",
      "A trade requiring mandatory physical barrel inspection by banking auditors",
      "A retail transaction between a fuel distributor and consumer"
    ],
    correctAnswer: 1,
    explanation: "Financial trades (such as futures, options, and cash-settled swaps) allow traders to manage price risk, speculate, or hedge without having to take custody of physical barrels."
  },
  {
    id: 'oil13',
    category: 'Oil',
    question: "What is paper trading in commodity markets?",
    options: [
      "Recording trades on physical paper blotters rather than digital ETRM systems",
      "Commodity-market shorthand for financial instruments/exposure",
      "Trading pulp, timber, and forest product futures contracts",
      "Submitting official paper documentation to maritime customs inspectors"
    ],
    correctAnswer: 1,
    explanation: "In commodity trading jargon, the 'paper market' refers to derivative contracts (futures, swaps, options) that transfer financial price risk, distinct from the 'wet' or 'physical' market of actual oil."
  },
  {
    id: 'oil14',
    category: 'Oil',
    question: "What does it mean to be 'long' in commodity trading?",
    options: [
      "Holding an oil purchase contract that expires in more than three years",
      "Positive exposure to price increases (benefiting when prices rise)",
      "Chartering a vessel that exceeds 300 meters in length",
      "Executing oil trades only during extended overnight electronic trading"
    ],
    correctAnswer: 1,
    explanation: "Being long means you own physical inventory or hold buy contracts. If market prices rise, your position gains value and you make a profit."
  },
  {
    id: 'oil15',
    category: 'Oil',
    question: "What does it mean to be 'short' in commodity trading?",
    options: [
      "Negative exposure to price increases (benefiting when prices fall)",
      "Trading small volumes of less than 1,000 barrels",
      "Experiencing a cash deficit during end-of-day clearinghouse settlement",
      "Executing day trades that are opened and closed within one hour"
    ],
    correctAnswer: 0,
    explanation: "Being short means you have committed to sell commodity or hold short derivative positions. If market prices decline, you can buy back the commitment at a lower cost, generating profit."
  },
  {
    id: 'oil16',
    category: 'Oil',
    question: "What is contango?",
    options: [
      "Future prices above near-term prices",
      "Near-term prices trading higher than future contract delivery months",
      "A trade agreement convention unique to South American crude blends",
      "A market condition where pipeline tariffs exceed ocean shipping rates"
    ],
    correctAnswer: 0,
    explanation: "Contango occurs when forward/future prices are higher than prompt spot prices, reflecting the cost of storage, insurance, and financing (cost of carry). Widely spaced contango incentivizes placing oil into storage."
  },
  {
    id: 'oil17',
    category: 'Oil',
    question: "What is backwardation?",
    options: [
      "Future prices trading at a consistent premium to spot cash prices",
      "Near-term prices above future prices",
      "An accounting reversal of uncollected accounts receivable entries",
      "A physical pipeline operational constraint requiring reverse pumping"
    ],
    correctAnswer: 1,
    explanation: "Backwardation is a market condition where prompt (spot) prices are higher than future delivery prices, indicating tight immediate supply or strong current demand. This discourages storage holding."
  },
  {
    id: 'oil18',
    category: 'Oil',
    question: "What is a time spread?",
    options: [
      "The duration in days required for a vessel to sail from load port to discharge",
      "Price relationship between delivery months",
      "The time zone difference between London ICE and New York NYMEX trading desks",
      "The contractual period allowed between trade booking and risk approval"
    ],
    correctAnswer: 1,
    explanation: "A time spread (calendar spread) is the price difference between two different contract months (e.g., June vs. July). It reflects market expectations regarding supply balance and curve shape (contango vs. backwardation)."
  },
  {
    id: 'oil19',
    category: 'Oil',
    question: "What is a location spread?",
    options: [
      "The physical nautical distance between an offshore platform and a refinery",
      "Price relationship between locations",
      "The GPS coordinates specified for a vessel lightering zone",
      "The tariff spread between interstate rail transport and local trucking"
    ],
    correctAnswer: 1,
    explanation: "A location spread (e.g., Brent vs. WTI or Cushing vs. Houston) represents the price difference between delivery points, driven by transportation costs, local refinery demand, and pipeline capacity."
  },
  {
    id: 'oil20',
    category: 'Oil',
    question: "What is basis risk?",
    options: [
      "Risk from changes in a local/physical price relationship to its benchmark",
      "The risk that a bank counterparty defaults on an issued letter of credit",
      "The risk that a physical crude sample fails laboratory sulfur test specifications",
      "The operational risk of pipeline rupture during high-volume transfers"
    ],
    correctAnswer: 0,
    explanation: "Basis risk arises when a physical asset is hedged using a futures contract that does not perfectly correlate with the local physical price (e.g., hedging physical Louisiana crude with NYMEX WTI Cushing futures)."
  },
  {
    id: 'oil21',
    category: 'Oil',
    question: "What is a crack spread?",
    options: [
      "Physical structural fatigue detected on refinery catalytic cracking pipes",
      "Price relationship between crude and refined products",
      "The chemical variance in boiling points between naphtha and gasoline",
      "The spread between Brent crude futures and European natural gas swaps"
    ],
    correctAnswer: 1,
    explanation: "A crack spread measures the difference between the price of crude oil and the refined petroleum products derived from it (like gasoline and diesel), representing theoretical refinery margins."
  },
  {
    id: 'oil22',
    category: 'Oil',
    question: "What is the 3-2-1 crack spread?",
    options: [
      "A safety countdown procedure executed before initiating tanker loading",
      "A market convention approximating three crude barrels against two gasoline and one distillate barrels",
      "A hedging formula using three futures contracts for every two forward swaps",
      "An emissions standard regulating sulfur limits across three fuel classes"
    ],
    correctAnswer: 1,
    explanation: "The 3-2-1 crack spread is an industry benchmark representing the economics of refining 3 barrels of crude oil into 2 barrels of gasoline and 1 barrel of distillate fuel (diesel/heating oil)."
  },
  {
    id: 'oil23',
    category: 'Oil',
    question: "What is an oil terminal?",
    options: [
      "The computer terminal software used by desk traders to execute orders",
      "A facility for receiving, storing and transferring commodities",
      "The final trading hour prior to physical futures contract expiration",
      "An oil wellhead located at the perimeter of an exploration concession"
    ],
    correctAnswer: 1,
    explanation: "An oil terminal (tank farm) is an industrial logistics hub with bulk storage tanks, manifold piping, and loading racks designed to receive, store, blend, and transfer crude or products between pipelines, ships, rail, and trucks."
  },
  {
    id: 'oil24',
    category: 'Oil',
    question: "What is a vessel in crude oil logistics?",
    options: [
      "A pressurized distillation column inside a petroleum refinery",
      "A ship used to transport crude/products",
      "A legal holding company established for offshore asset management",
      "An underground geological salt cavern used for strategic petroleum storage"
    ],
    correctAnswer: 1,
    explanation: "In maritime energy logistics, a vessel is an ocean-going tanker ship (such as Aframax, Suezmax, or VLCC) engineered to transport bulk liquid hydrocarbons across international maritime routes."
  },
  {
    id: 'oil25',
    category: 'Oil',
    question: "What is a laycan?",
    options: [
      "The maximum permissible sulfur emission limit for marine fuel in port",
      "Agreed vessel arrival/readiness window",
      "A canal transit booking fee paid to maritime canal authorities",
      "A cargo inspection certificate issued by independent marine surveyors"
    ],
    correctAnswer: 1,
    explanation: "Laycan (Laydays and Cancelling date) is the contractually specified window of dates during which the shipowner must present the vessel at the loading port ready to load cargo."
  },
  {
    id: 'oil27',
    category: 'Oil',
    question: "What is demurrage?",
    options: [
      "A customs import tax assessed on foreign crude oil shipments",
      "Contractual charge associated with excess vessel time",
      "Volumetric evaporation loss that occurs during ocean voyages",
      "A financing fee charged by banks on standby letters of credit"
    ],
    correctAnswer: 1,
    explanation: "Demurrage is compensation paid by the charterer to the shipowner for delays in loading or discharging cargo that exceed the agreed laytime allowed in the charter party agreement."
  },
  {
    id: 'oil28',
    category: 'Oil',
    question: "What does FOB (Free on Board) mean in crude oil trading?",
    options: [
      "A delivery term involving seller delivery/loading onto the vessel at the agreed point",
      "Seller pays all freight and insurance costs through to the discharge port",
      "The trade is settled purely financially without any physical obligations",
      "Buyer takes title to oil while it is stored in the seller's inland storage tanks"
    ],
    correctAnswer: 0,
    explanation: "Under FOB (Free on Board), the seller delivers and loads the cargo onto the vessel nominated by the buyer at the agreed port. Risk and costs transfer to the buyer once the cargo is loaded."
  },
  {
    id: 'oil29',
    category: 'Oil',
    question: "What does CFR (Cost and Freight) mean in energy contracts?",
    options: [
      "Buyer pays for all shipping, freight, and cargo marine insurance",
      "Cost and Freight delivery term: seller pays freight to destination port, but marine risk transfers upon loading",
      "A pricing structure based on European pipeline transit fee indices",
      "A financing arrangement where crude cargo acts as loan collateral"
    ],
    correctAnswer: 1,
    explanation: "Under CFR (Cost and Freight), the seller pays the ocean freight costs to transport the cargo to the named destination port. However, risk of cargo loss or damage transfers to the buyer once loaded at the origin port."
  },
  {
    id: 'oil30',
    category: 'Oil',
    question: "What does CIF (Cost, Insurance and Freight) mean?",
    options: [
      "Cost, Insurance and Freight delivery term: seller covers goods, ocean freight, and marine cargo insurance",
      "Buyer covers marine cargo insurance while seller pays local customs duties",
      "A contract where payment is contingent upon crude refining yields exceeding 90%",
      "A delivery term applied strictly to truck and rail pipeline border transfers"
    ],
    correctAnswer: 0,
    explanation: "Under CIF (Cost, Insurance and Freight), the seller pays for the commodity, ocean freight shipping to the destination port, and procures marine cargo insurance protecting the buyer against risk of transit damage."
  },
  {
    id: 'oil31',
    category: 'Oil',
    question: "What is actualization in an ETRM system?",
    options: [
      "Recalculating real-time Mark-to-Market P&L using live exchange feeds",
      "Recording actual physical performance against planned/contractual quantities and events",
      "The formal legal signing of master agreements by authorized officers",
      "Converting financial exchange futures into physical delivery warrants"
    ],
    correctAnswer: 1,
    explanation: "Actualization is the process of updating planned trade and logistics schedules with real-world operational results (e.g., actual metered volume, bill of lading date, verified quality), which enables accurate accruals and invoicing."
  },
  {
    id: 'oil32',
    category: 'Oil',
    question: "Why can actual delivered quantities differ from contractual trade quantities?",
    options: [
      "Traders deliberately change quantities to manipulate benchmark prices",
      "Measurement, losses, tolerances, loading/discharge differences and adjustments",
      "Database floating point rounding issues within ETRM core engines",
      "Foreign exchange rate fluctuations between booking and delivery dates"
    ],
    correctAnswer: 1,
    explanation: "Differences arise naturally due to thermal expansion/contraction (adjusted via API gravity/temperature tables), pipeline/tank measurement tolerances, minor transit evaporation, and contractual loading tolerances (+/- 5% or 10%)."
  },
  {
    id: 'oil33',
    category: 'Oil',
    question: "What is price fixing in physical commodity contracts?",
    options: [
      "Illegal price collusion among competing oil distribution firms",
      "Determining final price using contractual pricing rules and market observations",
      "Locking a fixed currency exchange rate prior to trade confirmation",
      "Restoring historical benchmark prices within an ETRM database"
    ],
    correctAnswer: 1,
    explanation: "Price fixing (or pricing) is the operational calculation of the final contract price by averaging published index prices (e.g., Platts or Argus) during the agreed contractual pricing window."
  },
  {
    id: 'oil34',
    category: 'Oil',
    question: "What is MTM (Mark-to-Market)?",
    options: [
      "Total metric tonnage of petroleum moved by pipeline systems",
      "Mark-to-Market valuation using current market data",
      "A regulatory compliance protocol requiring senior risk approval",
      "The initial performance margin deposited with clearing brokers"
    ],
    correctAnswer: 1,
    explanation: "Mark-to-Market (MTM) values open positions and forward contracts at current replacement market prices, providing an up-to-date assessment of portfolio value and financial risk exposure."
  },
  {
    id: 'oil35',
    category: 'Oil',
    question: "What is unrealized P&L in energy trading?",
    options: [
      "Profit or loss on completed deals that was excluded from tax filings",
      "P&L on an open position based on current valuation",
      "Interest income accrued on surplus capital held at clearinghouses",
      "Operating losses caused by vessel demurrage and terminal delay fees"
    ],
    correctAnswer: 1,
    explanation: "Unrealized P&L represents the theoretical gain or loss on open positions revalued against current forward market curves. It fluctuates with market prices until the position is closed or physically settled."
  },
  {
    id: 'oil36',
    category: 'Oil',
    question: "What is realized P&L?",
    options: [
      "Projected earnings forecasted across the upcoming five-year business plan",
      "P&L recognized when the relevant transaction/position is realized under applicable accounting treatment",
      "The net difference between unrealized P&L and corporate interest expenses",
      "Profits derived exclusively from exchange-traded financial options"
    ],
    correctAnswer: 1,
    explanation: "Realized P&L occurs when a trade is physically delivered, invoiced, and settled, or when a financial position is closed. It converts paper gains/losses into actual recognized accounting profit or loss."
  },
  {
    id: 'oil37',
    category: 'Oil',
    question: "What is hedging in commodity risk management?",
    options: [
      "Borrowing debt to amplify speculative returns on energy contracts",
      "Taking an offsetting position to reduce unwanted risk",
      "Holding physical crude inventory in tanks hoping for higher future prices",
      "Buying marine insurance to protect against piracy and weather damage"
    ],
    correctAnswer: 1,
    explanation: "Hedging involves taking an equal and opposite position in derivatives (futures, swaps, options) to protect cash flows from adverse price fluctuations in physical commodities."
  },
  {
    id: 'oil38',
    category: 'Oil',
    question: "Does hedging remove all risk from an oil trading portfolio?",
    options: [
      "Yes; mathematical hedges eliminate 100% of portfolio risk",
      "No; basis, timing, location, liquidity and other risks can remain",
      "Yes, provided exchange futures are traded instead of bilateral swaps",
      "No, hedging only eliminates operational marine risks like demurrage"
    ],
    correctAnswer: 1,
    explanation: "Hedging addresses outright flat price risk, but leaves residual risks such as basis risk (differential changes), timing mismatches, location spreads, counterparty credit risk, and liquidity risk."
  },
  {
    id: 'oil39',
    category: 'Oil',
    question: "Why can an oil portfolio's P&L change even if Brent benchmark prices are completely flat?",
    options: [
      "It cannot; portfolio P&L is tied strictly and exclusively to Brent prices",
      "Differentials, location/time spreads, FX, fees, actuals or other inputs can change",
      "Because exchange rules require automatic daily arbitrary risk markdowns",
      "Because stored crude oil undergoes continuous chemical decomposition"
    ],
    correctAnswer: 1,
    explanation: "Energy portfolios have multiple price components: grade differentials, forward curve shape shifts (contango/backwardation), freight rates, foreign currency exchange rates, secondary cost adjustments, and operational actualization adjustments."
  },
  {
    id: 'oil40',
    category: 'Oil',
    question: "How does physical scheduling affect trade settlement?",
    options: [
      "It has zero impact; settlements are fixed by initial contract booking dates",
      "Actual physical results can determine settlement quantity, dates and adjustments",
      "It only updates the scheduling logbook without affecting invoices or payments",
      "Scheduling selects the futures clearinghouse used for derivative margining"
    ],
    correctAnswer: 1,
    explanation: "Physical scheduling produces actual event dates (like Bill of Lading date) that define the contractual pricing window and invoice due date, while physical meter tickets establish the final billed settlement quantity."
  },
  {
    id: 'oil41',
    category: 'Oil',
    question: "How should an analyst investigate an unexpected or incorrect P&L figure?",
    options: [
      "Immediately rewrite the ETRM backend database calculation queries",
      "Compare trade, market, operational and valuation inputs before investigating code",
      "Cancel and rebook all trade transactions from the current monthly period",
      "File an official complaint with the futures exchange pricing department"
    ],
    correctAnswer: 1,
    explanation: "The vast majority of P&L errors are data-driven. Best practice is to inspect trade terms, pricing formulas, market curve inputs, differentials, and operational actualizations before suspecting software bugs."
  },
  {
    id: 'oil42',
    category: 'Oil',
    question: "How would you investigate an incorrect invoice price in an ETRM?",
    options: [
      "Instruct accounting to cancel the trade and notify regulatory authorities",
      "Verify pricing formula, benchmark, dates, differential, fixing and adjustments",
      "Re-run overnight batch settlement jobs without reviewing input parameters",
      "Alter the invoice quantity so that total payment matches expectations"
    ],
    correctAnswer: 1,
    explanation: "Verify the contract pricing rules: check that the correct benchmark index was applied, the pricing dates match the Bill of Lading window, the differential is accurate, and quality/escalator adjustments were applied."
  },
  {
    id: 'oil43',
    category: 'Oil',
    question: "How would you investigate an incorrect invoice quantity?",
    options: [
      "Instruct accounts payable to pay the original estimated contract amount",
      "Trace trade through schedule, shipment, actualization and settlement quantity",
      "Change the unit of measure from barrels to metric tons in configuration",
      "Submit an insurance claim for full cargo loss without inspecting port reports"
    ],
    correctAnswer: 1,
    explanation: "Trace the operational chain: inspect nomination quantities, pipeline run-tickets or vessel bill of lading, surveyor Certificates of Quantity, temperature correction factors (VCF), and discharge receipts."
  },
  {
    id: 'oil44',
    category: 'Oil',
    question: "What market data affects oil valuation in an ETRM system?",
    options: [
      "Consumer retail pump prices and weekly municipal weather forecasts",
      "Applicable benchmark/forward curves, differentials, FX and other relevant market inputs",
      "Equity stock indices and cryptocurrency spot transaction data",
      "Uncalibrated raw telemetric pressure readings from exploration wells"
    ],
    correctAnswer: 1,
    explanation: "Accurate valuation requires forward benchmark curves (Brent, WTI), physical grade differentials (Platts/Argus assessments), foreign currency exchange forward curves, and freight assessment curves."
  },
  {
    id: 'oil45',
    category: 'Oil',
    question: "Why does geographical location matter so significantly in crude oil pricing?",
    options: [
      "International maritime laws mandate pricing based on distance from the equator",
      "Transportation and local supply-demand create price differences",
      "Crude oil loses energy content and density when transported across state lines",
      "Refineries are prohibited by law from buying crude produced outside their country"
    ],
    correctAnswer: 1,
    explanation: "Crude oil is costly to transport. Logistical bottlenecks, pipeline tariffs, tanker charter rates, and local refinery demand create significant regional price differences between production basins and export hubs."
  },
  {
    id: 'oil46',
    category: 'Oil',
    question: "Why does physical storage capacity matter in energy trading?",
    options: [
      "Holding crude in tanks permanently exempts companies from fuel taxes",
      "It creates timing flexibility but incurs carrying costs and operational risk",
      "Stored crude oil naturally increases in API gravity and value over time",
      "Storage eliminates all working capital financing and hedging requirements"
    ],
    correctAnswer: 1,
    explanation: "Storage capacity gives traders temporal flexibility to buy low during oversupply and sell forward in contango. However, it requires working capital, financing costs, tank rental fees, and carries operational and environmental risk."
  },
  {
    id: 'oil47',
    category: 'Oil',
    question: "What is arbitrage in commodity trading?",
    options: [
      "Entering high-frequency automated orders to manipulate order book spreads",
      "Exploiting a price difference after considering costs and risks",
      "Taking directional unhedged speculative positions on long-term oil prices",
      "Applying random differentials to bilateral customer sales agreements"
    ],
    correctAnswer: 1,
    explanation: "Arbitrage involves capitalizing on price dislocations between markets (spatial arbitrage) or delivery time periods (temporal arbitrage) to capture a profit after deducting transportation, storage, financing, and transaction costs."
  },

  // --- NATURAL GAS (48 Questions) ---
  {
    id: 'ng1',
    category: 'Natural Gas',
    question: "What is natural gas?",
    options: [
      "A synthetic coal-derived gas used exclusively for regional electricity generation",
      "A hydrocarbon commodity composed primarily of methane and traded physically and financially",
      "A liquefied petroleum product bottled in consumer propane canisters",
      "An uncombustible noble gas used in scientific refrigeration systems"
    ],
    correctAnswer: 1,
    explanation: "Natural gas is a naturally occurring gaseous fossil fuel composed predominantly of methane (CH4), along with minor natural gas liquids (ethane, propane) and inert gases. It is traded globally across physical pipeline networks, LNG vessels, and financial derivative markets."
  },
  {
    id: 'ng2',
    category: 'Natural Gas',
    question: "Why is natural gas fundamentally different from oil in logistics and trading?",
    options: [
      "Natural gas cannot be traded using exchange-cleared futures contracts",
      "Gas is more dependent on pipeline infrastructure, transportation capacity, nominations and balancing",
      "Natural gas is immune to seasonal temperature fluctuations",
      "Crude oil moves only by rail while gas moves exclusively by ocean tankers"
    ],
    correctAnswer: 1,
    explanation: "Unlike oil, which can be stored in atmospheric tanks or moved in barrels, natural gas is a compressible fluid that must flow continuously through pressurized pipeline grids or be cryogenically liquefied as LNG (-162°C). This creates strict operational nomination deadlines and balancing requirements."
  },
  {
    id: 'ng3',
    category: 'Natural Gas',
    question: "What is MMBtu?",
    options: [
      "One million metric barrels of pipeline transit capacity",
      "A million British thermal units, an energy measure commonly used for gas pricing",
      "Maximum Monthly Baseline transport utility rate",
      "Mid-Month Benchmark Transmission unit"
    ],
    correctAnswer: 1,
    explanation: "MMBtu stands for one million British Thermal Units (1,000,000 Btu). A Btu is the energy needed to raise 1 pound of water by 1°F. Natural gas contracts trade in $/MMBtu to price the actual heat energy delivered rather than mere volume."
  },
  {
    id: 'ng4',
    category: 'Natural Gas',
    question: "What is Mcf?",
    options: [
      "One million cubic feet of natural gas",
      "One thousand cubic feet of natural gas",
      "Maximum compressed flow rate per hour",
      "Metric cubic feet under standard atmospheric pressure"
    ],
    correctAnswer: 1,
    explanation: "Mcf is a volumetric measurement where 'M' represents one thousand (Roman numeral). 1 Mcf = 1,000 cubic feet of natural gas. Typically, 1 Mcf contains approximately 1.02 to 1.04 MMBtu of heat energy depending on gas composition."
  },
  {
    id: 'ng5',
    category: 'Natural Gas',
    question: "What is MMcf?",
    options: [
      "One million cubic feet of natural gas",
      "One hundred thousand cubic feet of natural gas",
      "Minimum monthly contracted flow rate",
      "Metered manifold compressed fuel units"
    ],
    correctAnswer: 0,
    explanation: "MMcf denotes one million cubic feet (1,000 Mcf). It is the standard volumetric unit used by exploration and production (E&P) companies to measure daily wellhead output and pipeline intake."
  },
  {
    id: 'ng6',
    category: 'Natural Gas',
    question: "What is Bcf?",
    options: [
      "One hundred million cubic feet of gas",
      "One billion cubic feet of natural gas",
      "Baseline contracted flow across interstate pipes",
      "British cubic feet under freezing temperatures"
    ],
    correctAnswer: 1,
    explanation: "1 Bcf = 1,000,000,000 cubic feet (or 1,000 MMcf). It is the standard industry metric for regional pipeline throughput, total underground storage capacity, and national consumption and storage inventory statistics (e.g., EIA storage reports)."
  },
  {
    id: 'ng7',
    category: 'Natural Gas',
    question: "Why is natural gas priced in $/MMBtu rather than purely by volume?",
    options: [
      "Pipeline meters cannot mechanically record volumetric throughput",
      "It prices energy content and accounts for varying gas composition better than volume alone",
      "Federal tax laws forbid volumetric invoicing for all gaseous fuels",
      "It prevents pipeline systems from incurring mechanical friction losses"
    ],
    correctAnswer: 1,
    explanation: "Gas composition varies by source: 'rich' gas containing natural gas liquids (ethane, propane, butane) has higher energy density (~1,100+ Btu/cf) than 'dry' lean gas (~1,000 Btu/cf). Pricing in $/MMBtu ensures buyers pay for actual heating value delivered."
  },
  {
    id: 'ng8',
    category: 'Natural Gas',
    question: "What is Henry Hub?",
    options: [
      "An underground salt dome storage facility located in Alberta, Canada",
      "A major US gas pricing hub and NYMEX Henry Hub futures delivery point",
      "The national headquarters of the Federal Energy Regulatory Commission",
      "A European pipeline junction linking Norway with continental Germany"
    ],
    correctAnswer: 1,
    explanation: "Located in Erath, Louisiana, Henry Hub interconnects with over a dozen interstate and intrastate pipeline systems. Due to its strategic connectivity, it was chosen in 1990 as the physical delivery mechanism for NYMEX Natural Gas futures, establishing it as the North American benchmark."
  },
  {
    id: 'ng9',
    category: 'Natural Gas',
    question: "What is a natural gas hub?",
    options: [
      "A compressor station designed exclusively to elevate line-pack pressure",
      "A location where gas is traded, transferred or priced",
      "A regional distribution office collecting residential utility bills",
      "An odorization facility adding mercaptan to local city mains"
    ],
    correctAnswer: 1,
    explanation: "A gas hub is a physical or commercial pooling point (e.g., Henry Hub, Waha Hub, Chicago Citygate, TTF) where multiple transmission pipelines intersect, enabling market participants to buy, sell, exchange title, and price natural gas."
  },
  {
    id: 'ng10',
    category: 'Natural Gas',
    question: "What is gas basis?",
    options: [
      "The minimum line-pack pressure required to keep pipelines operational",
      "Local gas price relative to a benchmark such as Henry Hub",
      "The percentage of methane present in a chromatographic gas sample",
      "The standard monthly connection fee charged by gas utilities"
    ],
    correctAnswer: 1,
    explanation: "Gas basis is the difference between the local physical cash market price and the benchmark price (Henry Hub). It reflects local supply and demand balances plus the cost of pipeline transportation capacity to move gas between locations."
  },
  {
    id: 'ng11',
    category: 'Natural Gas',
    question: "What is the simple basis formula?",
    options: [
      "Henry Hub Price divided by Pipeline Fuel Tariff",
      "Local Hub Price minus Henry Hub Price",
      "Local Hub Price multiplied by Storage Injection Cost",
      "Local Hub Price plus Electric Spark Spread"
    ],
    correctAnswer: 1,
    explanation: "Basis = Local Hub Price - Henry Hub Price. For example, if gas at Chicago Citygate is $3.40 and Henry Hub is $3.00, the Chicago basis is +$0.40/MMBtu. If Permian Waha is $1.20 and Henry Hub is $3.00, Waha basis is -$1.80/MMBtu."
  },
  {
    id: 'ng12',
    category: 'Natural Gas',
    question: "What is basis risk?",
    options: [
      "The physical risk of pipeline rupture during high-pressure transfers",
      "Risk that the local-to-benchmark price relationship changes",
      "The risk that a commercial counterparty defaults on a bank letter of credit",
      "The risk that natural gas liquefies prematurely inside transport pipelines"
    ],
    correctAnswer: 1,
    explanation: "Basis risk occurs when a physical position is hedged with a benchmark contract (e.g. Henry Hub futures) but the local basis differential moves unexpectedly due to local pipeline bottlenecks, weather, or regional outages, causing the hedge to diverge from the physical asset."
  },
  {
    id: 'ng13',
    category: 'Natural Gas',
    question: "What is flat-price risk in natural gas trading?",
    options: [
      "Risk associated with pipelines traversing flat geographic terrain",
      "Exposure to movement in the outright benchmark price",
      "The risk that market prices remain completely static for over a month",
      "The operational risk of pipeline meter failure during freezing weather"
    ],
    correctAnswer: 1,
    explanation: "Flat-price risk (outright price risk) is the exposure to movements in the absolute benchmark market price itself (e.g., Henry Hub rising from $2.50 to $4.50 or falling to $1.80), regardless of local location differentials."
  },
  {
    id: 'ng14',
    category: 'Natural Gas',
    question: "Why does natural gas basis exist between different geographic regions?",
    options: [
      "Federal tariffs mandate that gas prices vary by state borders",
      "Physical constraints and local supply-demand create location-specific price differences",
      "Because methane travels at slower speeds through northern pipelines",
      "Different states mandate incompatible chemical odorant blends"
    ],
    correctAnswer: 1,
    explanation: "Gas must be transported through physical pipes with finite capacity. In producing basins with takeaway bottlenecks (e.g. Permian or Appalachia), excess gas depresses local prices (-basis). In consumer demand centers with constrained pipeline capacity (e.g. New York/Boston in winter), basis trades at a massive premium (+basis)."
  },
  {
    id: 'ng15',
    category: 'Natural Gas',
    question: "What is pipeline capacity?",
    options: [
      "The total volume of cushion gas permanently trapped in pipeline pipe walls",
      "The amount of gas that can be transported under applicable operating and contractual conditions",
      "The maximum financial trading limit assigned to an approved pipeline shipper",
      "The volume of fuel consumed by compressor turbine engines per hour"
    ],
    correctAnswer: 1,
    explanation: "Pipeline capacity is the maximum throughput a pipeline can physically and contractually transport over a given period, determined by pipe diameter, operating pressure (MAOP), compressor station horsepower, and system hydraulics."
  },
  {
    id: 'ng16',
    category: 'Natural Gas',
    question: "Why does pipeline capacity matter in gas markets and trading?",
    options: [
      "It determines the interest rate charged by clearinghouses on margin deposits",
      "Insufficient capacity can prevent planned movements and create local price dislocations",
      "It regulates whether natural gas can be legally categorized as an energy commodity",
      "It limits the number of trading counterparties a firm can execute deals with"
    ],
    correctAnswer: 1,
    explanation: "Natural gas cannot flow without available pipeline capacity. When pipelines reach 100% capacity, gas cannot move to market, trapping supply, shutting in production, or forcing cash prices down to zero or even negative levels."
  },
  {
    id: 'ng17',
    category: 'Natural Gas',
    question: "What is firm transportation (FT)?",
    options: [
      "Transportation service provided exclusively by ocean-going LNG vessels",
      "Contractual transportation rights providing greater capacity assurance under the applicable tariff",
      "A variable transport contract where shippers pay only when gas physically flows",
      "Emergency backup capacity provided only during electrical grid blackouts"
    ],
    correctAnswer: 1,
    explanation: "Firm Transportation (FT) gives the shipper guaranteed priority rights to pipeline capacity. Shippers pay a monthly reservation fee (demand charge) whether they use the capacity or not, ensuring their gas moves even when the pipeline is constrained."
  },
  {
    id: 'ng18',
    category: 'Natural Gas',
    question: "What is interruptible transportation (IT)?",
    options: [
      "Transportation capacity reserved for scheduled pipeline maintenance periods",
      "Transportation subject to available capacity and system conditions and therefore less certain",
      "A contract allowing shippers to stop gas flows without pipeline notification",
      "Emergency service reserved exclusively for critical hospital heating systems"
    ],
    correctAnswer: 1,
    explanation: "Interruptible Transportation (IT) is a lower-priority service. Shippers pay a volumetric commodity charge only when they flow gas, but if firm shippers utilize the pipe's capacity, interruptible nominations are cut (interrupted) first."
  },
  {
    id: 'ng19',
    category: 'Natural Gas',
    question: "What is a pipeline nomination?",
    options: [
      "Voting for representative members of the national gas standards committee",
      "An operational request to a pipeline specifying intended gas movement",
      "A credit review document submitted to credit agencies before trading",
      "An analyst's recommendation to select a specific forward pricing index"
    ],
    correctAnswer: 1,
    explanation: "A nomination is a formal electronic request submitted by a shipper to a pipeline operator specifying the volume (MMBtu), receipt point, delivery point, contract number, and Gas Day for planned gas movement."
  },
  {
    id: 'ng20',
    category: 'Natural Gas',
    question: "What is a 'Gas Day' in pipeline operations?",
    options: [
      "The specific day of the week when weekly national storage reports are published",
      "The pipeline-defined operational day used for nomination, scheduling and balancing",
      "An annual holiday where physical trading exchanges are officially closed",
      "The final trading day prior to expiration of prompt-month futures contracts"
    ],
    correctAnswer: 1,
    explanation: "The Gas Day is the standard 24-hour operational cycle used across the gas industry. Under NAESB standards in North America, the Gas Day runs from 9:00 AM Central Clock Time (CCT) to 9:00 AM CCT the following day."
  },
  {
    id: 'ng21',
    category: 'Natural Gas',
    question: "Is a pipeline nomination the same as actual gas flow?",
    options: [
      "Yes; once a nomination is confirmed, physical meters automatically match it",
      "No. Nomination is planned/requested movement; actual flow is what physically occurred",
      "Yes; automated pipeline SCADA control loops eliminate all volumetric variances",
      "No; nominations represent paper futures while actuals represent tax filings"
    ],
    correctAnswer: 1,
    explanation: "A nomination is what the shipper plans and requests to move. Actual flow is the physical volume that passed through meters, which frequently deviates due to weather, wellhead freeze-offs, plant outages, or demand swings."
  },
  {
    id: 'ng22',
    category: 'Natural Gas',
    question: "What is scheduled quantity in gas logistics?",
    options: [
      "The initial trade estimate captured by front-office traders",
      "The quantity accepted or confirmed for movement",
      "The total volume of gas remaining in underground storage reservoirs",
      "The volume delivered to residential utility retail customers"
    ],
    correctAnswer: 1,
    explanation: "After a shipper submits a nomination, the pipeline verifies capacity and confirms with upstream and downstream interconnecting parties. The confirmed volume authorized to flow is the 'Scheduled Quantity'."
  },
  {
    id: 'ng23',
    category: 'Natural Gas',
    question: "What is actual quantity in natural gas operations?",
    options: [
      "The calculated quantity derived by dividing invoice cash by the index price",
      "The measured or accepted quantity that physically moved",
      "The theoretical nameplate engineering capacity of the steel pipe",
      "The volume pledged under long-term take-or-pay master purchase agreements"
    ],
    correctAnswer: 1,
    explanation: "Actual quantity is the true physical volume of gas that flowed, measured by electronic flow measurement (EFM) meters at receipt and delivery interconnects and allocated to the shipper's contract."
  },
  {
    id: 'ng24',
    category: 'Natural Gas',
    question: "What is actualization in natural gas ETRM systems?",
    options: [
      "Running Monte Carlo Value-at-Risk simulations on gas trading portfolios",
      "Recording actual physical performance against planned or contractual movement",
      "The legal execution of physical delivery confirmation letters by attorneys",
      "Rolling forward-month contracts into prompt delivery status"
    ],
    correctAnswer: 1,
    explanation: "Actualization is the critical ETRM lifecycle step where planned/scheduled nominations are replaced with finalized meter allocation data, allowing the system to calculate pipeline imbalances, accruals, and final invoices."
  },
  {
    id: 'ng25',
    category: 'Natural Gas',
    question: "What is a natural gas pipeline imbalance?",
    options: [
      "A molecular imbalance between methane and natural gas liquid hydrocarbons",
      "A difference between scheduled/planned quantity and actual physical quantity under applicable rules",
      "An unequal division of profits between upstream producers and gas marketers",
      "A discrepancy between ICE and NYMEX exchange clearing fees"
    ],
    correctAnswer: 1,
    explanation: "An imbalance occurs when a shipper delivers more or less gas into a pipeline than they take out. For instance, scheduling 10,000 MMBtu but consuming only 8,500 MMBtu leaves a 1,500 MMBtu positive imbalance on the pipe."
  },
  {
    id: 'ng26',
    category: 'Natural Gas',
    question: "Why is pipeline balancing so important?",
    options: [
      "It ensures that exchange futures contracts settle precisely at zero",
      "Pipeline systems must maintain physical balance and differences can have financial consequences",
      "Pipelines that are unbalanced automatically forfeit their operating permits",
      "Balancing is performed exclusively for state environmental emissions compliance"
    ],
    correctAnswer: 1,
    explanation: "Pipelines must maintain line pack (internal gas pressure) within safe operational tolerances. Excessive imbalances compromise pressure, threaten system integrity, and trigger Operational Flow Orders (OFOs) with costly penalty cashouts."
  },
  {
    id: 'ng27',
    category: 'Natural Gas',
    question: "What is underground natural gas storage?",
    options: [
      "Pressurized steel storage cylinders buried along highway right-of-ways",
      "Underground storage used to hold gas for later withdrawal",
      "Cryogenic LNG tanker hulls moored permanently at coastal import harbors",
      "Sealed pipeline transmission segments taken out of service during summer"
    ],
    correctAnswer: 1,
    explanation: "Natural gas is stored underground in depleted oil/gas reservoirs, aquifers, or salt caverns. It allows the industry to store excess production during low-demand periods and withdraw it during winter peak-demand spikes."
  },
  {
    id: 'ng28',
    category: 'Natural Gas',
    question: "What is 'injection' in gas storage operations?",
    options: [
      "Adding odorant (mercaptan) to utility gas lines for leak detection",
      "Moving gas into storage",
      "Entering limit orders into exchange electronic trading systems",
      "Injecting water into shale formations during hydraulic fracturing"
    ],
    correctAnswer: 1,
    explanation: "Injection is the process of compressing natural gas from transmission pipelines and pumping it into underground storage formations (typically occurring during the summer injection season, April to October)."
  },
  {
    id: 'ng29',
    category: 'Natural Gas',
    question: "What is 'withdrawal' in gas storage operations?",
    options: [
      "Cancelling a trade contract before trade confirmation documents are signed",
      "Moving gas out of storage",
      "Revoking a trading counterparty's credit approval limits",
      "Diverting gas supply to LNG export terminals without pipeline approval"
    ],
    correctAnswer: 1,
    explanation: "Withdrawal is extracting gas from underground storage, removing moisture and impurities, and injecting it back into commercial transmission pipelines (typically during the winter withdrawal season, November to March)."
  },
  {
    id: 'ng30',
    category: 'Natural Gas',
    question: "Why is natural gas storage economically valuable?",
    options: [
      "It permanently exempts trading firms from pipeline transportation tariffs",
      "It provides seasonal and operational flexibility and can support time-spread strategies",
      "Stored gas increases in MMBtu heating value and quality the longer it stays underground",
      "Storage eliminates all working capital financing and inventory carrying costs"
    ],
    correctAnswer: 1,
    explanation: "Storage provides operational insurance against freeze-offs and polar vortex demand surges, while enabling commercial desks to execute seasonal calendar spread arbitrage (e.g., buying cheap summer gas and selling high winter forward contracts)."
  },
  {
    id: 'ng31',
    category: 'Natural Gas',
    question: "What is contango in natural gas forward curves?",
    options: [
      "A market structure where future prices are above near-term prices",
      "A market where prompt cash prices trade higher than any forward delivery contract",
      "A condition where pipeline transportation tariffs drop to negative values",
      "An operational balancing cashout penalty charged by pipeline operators"
    ],
    correctAnswer: 0,
    explanation: "Contango occurs when forward/future contract prices trade higher than prompt near-term prices. In natural gas, summer-to-winter contango reflects the seasonal cost of storage and seasonal demand premium."
  },
  {
    id: 'ng32',
    category: 'Natural Gas',
    question: "What is backwardation in natural gas forward curves?",
    options: [
      "Forward contract prices trading at an upward sloping premium into the future",
      "A market structure where near-term prices are above future prices",
      "A pipeline control malfunction causing gas to flow in reverse direction",
      "An accounting reversal of unearned demand reservation charges"
    ],
    correctAnswer: 1,
    explanation: "Backwardation is when prompt near-term prices trade higher than future contracts. This occurs during supply shortages, intense winter storms, or pipeline disruptions when buyers pay a premium for immediate physical delivery."
  },
  {
    id: 'ng33',
    category: 'Natural Gas',
    question: "Does contango guarantee a profit on natural gas storage?",
    options: [
      "Yes; contango is a legally riskless arbitrage with guaranteed profit",
      "No. Carrying and operating costs may exceed the forward spread",
      "Yes, provided the gas is stored in salt caverns rather than depleted fields",
      "No, because the Federal Energy Regulatory Commission caps storage earnings at 2%"
    ],
    correctAnswer: 1,
    explanation: "Contango only yields profit if the price spread between summer injection and winter withdrawal exceeds total storage leasing fees, injection/withdrawal fuel retention, compressor power costs, and financing interest on the tied-up capital."
  },
  {
    id: 'ng34',
    category: 'Natural Gas',
    question: "Why does weather have such a massive impact on natural gas demand and pricing?",
    options: [
      "Rainfall alters the chemical density of methane gas inside transmission pipes",
      "Cold weather increases heating demand and hot weather can increase power-sector gas demand",
      "Wind patterns dictate whether pipeline compressor stations are permitted to run",
      "Freezing temperatures increase the mechanical friction of steel pipelines"
    ],
    correctAnswer: 1,
    explanation: "Natural gas is the primary fuel for residential/commercial space heating (driving winter demand peaks) and electric power generation (driving summer cooling air-conditioning peaks), making weather the primary volatility driver."
  },
  {
    id: 'ng35',
    category: 'Natural Gas',
    question: "How does natural gas relate directly to the electric power market?",
    options: [
      "Electric power utilities are legally required to purchase all excess pipeline gas",
      "Gas-fired generators consume gas, so electricity demand and generation can affect gas demand",
      "Natural gas pipelines are powered entirely by off-grid solar energy systems",
      "There is no operational or financial relationship between natural gas and electricity"
    ],
    correctAnswer: 1,
    explanation: "Gas-fired combined-cycle and peaker turbines generate a large portion of electricity. When power demand surges, generators burn more gas, tightening pipeline supply and directly linking power spark spreads with gas prices."
  },
  {
    id: 'ng36',
    category: 'Natural Gas',
    question: "What is a natural gas forward contract?",
    options: [
      "A standardized exchange-traded contract cleared exclusively on NYMEX",
      "A future-period gas transaction agreed today",
      "An operational directive from a pipeline ordering a shipper to increase flow",
      "A retail utility supply contract between a homeowner and their local provider"
    ],
    correctAnswer: 1,
    explanation: "A gas forward is a customized over-the-counter (OTC) agreement between two parties to buy or sell a specified volume of gas at a predetermined price for delivery during a future period at a specific pipeline hub."
  },
  {
    id: 'ng37',
    category: 'Natural Gas',
    question: "What is a natural gas futures contract?",
    options: [
      "A bilateral pipeline interconnection agreement negotiated privately",
      "A standardized financial contract for a future delivery/settlement period, with Henry Hub futures a major US example",
      "An informal price forecast published by pipeline scheduling personnel",
      "An emergency fuel allocation program administered by the Department of Energy"
    ],
    correctAnswer: 1,
    explanation: "A gas futures contract is a standardized agreement traded on a regulated exchange (like NYMEX Henry Hub NG, 10,000 MMBtu) with fixed contract terms, daily clearinghouse mark-to-market margining, and third-party credit guarantee."
  },
  {
    id: 'ng38',
    category: 'Natural Gas',
    question: "What is a natural gas swap?",
    options: [
      "The physical exchange of gas between two pipelines at a physical header",
      "A financial contract whose cash flows depend on an agreed gas price or index relationship",
      "Replacing an old gas compressor with a new electric motor drive",
      "Switching from natural gas to fuel oil in residential heating furnaces"
    ],
    correctAnswer: 1,
    explanation: "A gas swap is a financial derivative (typically fixed-for-floating) where parties exchange payments based on the difference between a fixed agreed price and a floating settlement index (e.g., Platts Inside FERC or NYMEX settlement)."
  },
  {
    id: 'ng39',
    category: 'Natural Gas',
    question: "What is hedging in natural gas trading?",
    options: [
      "Taking highly leveraged speculative bets to maximize short-term trading revenue",
      "Taking an offsetting position to reduce unwanted price exposure",
      "Delaying pipeline nominations to take advantage of intraday price swings",
      "Acquiring commercial property located adjacent to pipeline compressor stations"
    ],
    correctAnswer: 1,
    explanation: "Hedging uses derivatives (futures, swaps, options) or physical deals to neutralize price risk. A gas producer hedges by selling futures to protect against price drops; a consumer hedges by buying futures to cap heating costs."
  },
  {
    id: 'ng40',
    category: 'Natural Gas',
    question: "Does a Henry Hub futures hedge completely remove regional basis risk?",
    options: [
      "Yes; a Henry Hub futures position provides 100% complete price protection anywhere",
      "No. Local basis can still move",
      "Yes, provided the shipper holds Firm Transportation capacity on interstate pipes",
      "No, hedging only eliminates pipeline operational imbalance penalties"
    ],
    correctAnswer: 1,
    explanation: "A Henry Hub futures hedge only protects against national flat-price movement. If local pipeline constraints cause your local hub basis to crash from -$0.50 to -$2.50, your physical revenue drops by $2.00 even with a flat-price hedge in place."
  },
  {
    id: 'ng41',
    category: 'Natural Gas',
    question: "What is price fixing in natural gas contract settlement?",
    options: [
      "Unlawful market price collusion investigated by antitrust authorities",
      "Determining the final contract price using the specified pricing formula and market observations",
      "Freezing pipeline transportation tariffs across a multi-year regulatory period",
      "Fixing a foreign currency exchange rate prior to submitting electronic nominations"
    ],
    correctAnswer: 1,
    explanation: "In contracts priced against an index (e.g., first-of-the-month Inside FERC or Platts Gas Daily daily average), price fixing is the settlement process of recording these published market quotes to calculate the final invoice price."
  },
  {
    id: 'ng42',
    category: 'Natural Gas',
    question: "What is MTM (Mark-to-Market) in natural gas risk management?",
    options: [
      "The total metered throughput capacity of an interstate pipeline grid",
      "Current market valuation of a position or future cash flows",
      "The minimum transportation margin required by local distribution companies",
      "A safety engineering standard governing pipeline operating pressures"
    ],
    correctAnswer: 1,
    explanation: "Mark-to-Market (MTM) revalues all open physical gas contracts and financial derivatives against current forward market curves, reflecting the portfolio's liquidation value and day-over-day economic profit or loss."
  },
  {
    id: 'ng43',
    category: 'Natural Gas',
    question: "What is unrealized P&L in natural gas trading?",
    options: [
      "Historical profits earned on closed deals that were omitted from quarterly filings",
      "P&L associated with changes in value of an open position",
      "The financial carrying cost associated with cushion gas in underground storage",
      "Cash penalties paid to pipelines for operational flow order violations"
    ],
    correctAnswer: 1,
    explanation: "Unrealized P&L is the theoretical 'paper' gain or loss on open contracts for future delivery periods based on current forward curve prices. It fluctuates until the position is physically delivered or cash-settled."
  },
  {
    id: 'ng44',
    category: 'Natural Gas',
    question: "What is realized P&L?",
    options: [
      "Forecasted corporate profits projected across the upcoming ten-year budget",
      "P&L recognized when the relevant economic exposure is realized under applicable treatment",
      "The net difference between unrealized P&L and pipeline reservation demand fees",
      "Profits generated exclusively from trading exchange-cleared options contracts"
    ],
    correctAnswer: 1,
    explanation: "Realized P&L is the actual financial gain or loss recognized when a gas deal has reached execution—e.g., physical gas has flowed and been invoiced, or a financial swap has reached maturity and settled in cash."
  },
  {
    id: 'ng45',
    category: 'Natural Gas',
    question: "Why can natural gas portfolio P&L change even when Henry Hub benchmark prices are flat?",
    options: [
      "It cannot; gas portfolio valuations are mathematically locked to Henry Hub",
      "Basis, curve shape, quantity, actualization, fees, transportation, storage, imbalance or FX may change",
      "Because pipeline compressors alter the molecular structure of gas in transit",
      "Because exchange clearinghouses assess arbitrary daily valuation penalties"
    ],
    correctAnswer: 1,
    explanation: "Gas portfolios have many non-flat-price risk drivers: local basis differentials can move, forward curves can flatten or steepen, actualized meter volumes can differ from scheduled estimates, or transportation fuel rates and fees can change."
  },
  {
    id: 'ng46',
    category: 'Natural Gas',
    question: "How do you troubleshoot an unexpected natural gas P&L discrepancy in an ETRM?",
    options: [
      "Immediately rewrite the ETRM calculation database stored procedures",
      "Decompose P&L and compare trade, market, location/basis, quantity, operational, pricing and valuation inputs",
      "Delete and re-enter all trade tickets entered during the previous billing cycle",
      "Notify exchange officials that national benchmark price quotes were incorrect"
    ],
    correctAnswer: 1,
    explanation: "Deconstruct the P&L variance by isolating components: check if flat price, basis curves, or curve shape changed; verify if actualization changed volumes; review transportation/fuel fees; and inspect pricing formula rules."
  },
  {
    id: 'ng47',
    category: 'Natural Gas',
    question: "How do you troubleshoot an incorrect natural gas quantity in an ETRM system?",
    options: [
      "Pay the original estimated contract quantity and write off differences as bad debt",
      "Identify which lifecycle quantity is wrong and trace trade → nomination → schedule → actual → settlement",
      "Convert the unit of measure from MMBtu to barrels of oil equivalent",
      "File an insurance claim for full pipeline volumetric loss without verification"
    ],
    correctAnswer: 1,
    explanation: "Auditing quantity requires tracing through the operational lifecycle stages: (1) Trade Volume -> (2) Nominated Volume -> (3) Pipeline Confirmed/Scheduled Volume -> (4) Meter Allocated Actual Volume -> (5) Invoiced Settlement Quantity."
  },
  {
    id: 'ng48',
    category: 'Natural Gas',
    question: "How do you troubleshoot a failed natural gas pipeline nomination?",
    options: [
      "Resubmit the exact same nomination repeatedly until the pipeline accepts it",
      "Check deadlines, gas day, locations, quantity, transportation rights/capacity, master data, pipeline response and interface/configuration",
      "Contact the local electric grid operator and request an emergency power curtailment",
      "Alter the contract price in the ETRM system to give the nomination higher priority"
    ],
    correctAnswer: 1,
    explanation: "A failed nomination requires checking: Did you miss the NAESB cycle deadline? Is the Gas Day correct? Are receipt/delivery location PINs/DRNs valid? Was capacity cut due to maintenance? Did the counterparty confirm? What EDI error code was returned?"
  },

  // --- LNG (30 Questions) ---
  {
    id: 'lng1',
    category: 'LNG',
    question: "What does LNG stand for?",
    options: [
      "Liquid Natural Gasoline",
      "Liquefied Natural Gas",
      "Low-Nitrogen Gas",
      "Logistical Natural Grid"
    ],
    correctAnswer: 1,
    explanation: "LNG stands for Liquefied Natural Gas, which is natural gas cooled into a liquid state."
  },
  {
    id: 'lng2',
    category: 'LNG',
    question: "At approximately what temperature does natural gas become LNG?",
    options: [
      "Approximately 0°C",
      "Approximately −50°C",
      "Approximately −162°C at atmospheric pressure",
      "Approximately −273°C (absolute zero)"
    ],
    correctAnswer: 2,
    explanation: "Natural gas liquefies at approximately −162°C (−260°F) at standard atmospheric pressure."
  },
  {
    id: 'lng3',
    category: 'LNG',
    question: "Why liquefy natural gas?",
    options: [
      "To change its chemical formula from methane to octane",
      "To reduce volume substantially (~600 times) and enable efficient storage and marine transportation",
      "To eliminate all greenhouse gas emissions during combustion",
      "To increase pipeline transport pressure above 10,000 PSI"
    ],
    correctAnswer: 1,
    explanation: "Liquefaction shrinks natural gas volume by roughly 600 times, making it economical to transport across oceans in specialized carriers."
  },
  {
    id: 'lng4',
    category: 'LNG',
    question: "What is liquefaction?",
    options: [
      "Compressing natural gas into pressurized gas cylinders",
      "Cooling treated natural gas until it becomes liquid LNG",
      "Burning natural gas to produce liquid petrochemicals",
      "Injecting natural gas into underground salt caverns"
    ],
    correctAnswer: 1,
    explanation: "Liquefaction is the cryogenic refrigeration process of cooling pre-treated natural gas down to ~−162°C until it condenses into liquid."
  },
  {
    id: 'lng5',
    category: 'LNG',
    question: "What is regasification?",
    options: [
      "Converting LNG back into gaseous natural gas",
      "Recycling boil-off gas back into the ship's fuel engine",
      "Purifying raw natural gas from the wellhead",
      "Cooling gaseous gas into liquid nitrogen"
    ],
    correctAnswer: 0,
    explanation: "Regasification is the process of warming cryogenic liquid LNG back into its gaseous state at import terminals or FSRUs."
  },
  {
    id: 'lng6',
    category: 'LNG',
    question: "What is an LNG train?",
    options: [
      "A freight railroad system dedicated to transporting LNG ISO containers",
      "An individual processing/liquefaction unit within an LNG plant",
      "A convoy of LNG carrier vessels sailing together",
      "A pipeline manifold connecting multiple gas wells"
    ],
    correctAnswer: 1,
    explanation: "An LNG train is an independent liquefaction production unit comprising gas pre-treatment, refrigeration cycles, and liquefaction."
  },
  {
    id: 'lng7',
    category: 'LNG',
    question: "What is an LNG cargo?",
    options: [
      "The cryogenic fuel burned in the ship's engines",
      "A defined quantity of LNG associated with a physical movement from loading to destination",
      "The total annual contractual production of an export facility",
      "The pipeline linepack capacity of an import terminal"
    ],
    correctAnswer: 1,
    explanation: "An LNG cargo is a specific physical batch or shipment of LNG loaded onto a vessel for transit to an agreed destination."
  },
  {
    id: 'lng8',
    category: 'LNG',
    question: "What is an LNG carrier?",
    options: [
      "A specialized double-hulled vessel for transporting LNG at cryogenic temperatures",
      "An interstate pipeline company with federal common carrier status",
      "A financial clearing broker specializing in gas futures",
      "A truck designed for transporting pressurized CNG cylinders"
    ],
    correctAnswer: 0,
    explanation: "An LNG carrier is a custom-built cryogenic tanker equipped with insulated containment tanks (membrane or Moss spherical) to maintain LNG at −162°C."
  },
  {
    id: 'lng9',
    category: 'LNG',
    question: "What is boil-off gas (BOG)?",
    options: [
      "The fuel consumed during onshore liquefaction pre-heating",
      "LNG that vaporizes because of heat ingress during storage or transportation",
      "Gas burned in flares during emergency terminal shutdowns",
      "The nitrogen purge gas used during vessel cooldown"
    ],
    correctAnswer: 1,
    explanation: "Boil-off gas (BOG) is the natural vaporization of LNG caused by ambient heat entering insulated storage tanks or carrier cargo holds."
  },
  {
    id: 'lng10',
    category: 'LNG',
    question: "What is JKM?",
    options: [
      "Japan Korea Marker, an important LNG spot benchmark for Northeast Asia",
      "Joint Kinetic Measurement, a standard for cryogenic flow meters",
      "Java Kuwaiti Maritime, an LNG shipping charter consortium",
      "Joule Kilowatt Metric, an energy conversion factor"
    ],
    correctAnswer: 0,
    explanation: "JKM (Japan Korea Marker), published by S&P Global Platts, is the primary benchmark price for spot physical LNG delivered into Northeast Asia."
  },
  {
    id: 'lng11',
    category: 'LNG',
    question: "What is Henry Hub in the context of global LNG?",
    options: [
      "An import regasification terminal in Tokyo Bay",
      "A major US gas benchmark and NYMEX Henry Hub futures delivery point linked to US LNG export feedgas",
      "A European pipeline virtual trading hub in the Netherlands",
      "The international maritime authority overseeing tanker safety"
    ],
    correctAnswer: 1,
    explanation: "Henry Hub is the US pipeline benchmark in Louisiana; US LNG export contracts are typically priced as a formula based on Henry Hub (e.g., 115% HH + liquefaction fee)."
  },
  {
    id: 'lng12',
    category: 'LNG',
    question: "What is TTF?",
    options: [
      "Title Transfer Facility, a major European natural gas pricing benchmark based in the Netherlands",
      "Trans-Texas Feeder, a pipeline connecting gas fields to Sabine Pass",
      "Tanker Time Fraction, a maritime chartering rate metric",
      "Thermal Transfer Factor, the rate of boil-off in cryogenic tanks"
    ],
    correctAnswer: 0,
    explanation: "TTF (Title Transfer Facility) is the primary European natural gas benchmark hub, critical for pricing delivered LNG cargos into Europe."
  },
  {
    id: 'lng13',
    category: 'LNG',
    question: "What is FOB in LNG commercial terms?",
    options: [
      "A commercial structure where the seller delivers gas to the buyer's onshore regas terminal",
      "A commercial structure where, in simplified terms, the buyer takes responsibility after loading, including shipping according to the contract",
      "Freight On Board, where shipping costs are paid by the pipeline operator",
      "Fixed Origin Benchmark, where price is locked at the wellhead"
    ],
    correctAnswer: 1,
    explanation: "Under FOB (Free on Board), the buyer provides the LNG carrier, takes title/risk at the loading flange, and controls cargo destination and shipping."
  },
  {
    id: 'lng14',
    category: 'LNG',
    question: "What is DES in LNG commercial contracts?",
    options: [
      "Delivered Ex-Ship: A commercial structure where the seller is responsible for shipping and delivering the cargo to the agreed destination terminal",
      "Dual Energy Source, a hybrid propulsion engine for LNG carriers",
      "Direct Export Subsidy, a government rebate for gas liquefaction",
      "Daily Electronic Schedule, a nomination system for LNG berths"
    ],
    correctAnswer: 0,
    explanation: "Under DES (Delivered Ex-Ship), the seller manages shipping and delivers the cargo to the buyer's import terminal flange, bearing voyage and shipping risks."
  },
  {
    id: 'lng15',
    category: 'LNG',
    question: "What is the primary difference between FOB and DES contracts in LNG?",
    options: [
      "FOB is priced in Euros while DES is priced in US Dollars",
      "They differ mainly in allocation of delivery, shipping responsibility, cost and risk",
      "FOB applies only to pipeline gas while DES applies only to LNG tankers",
      "FOB allows no boil-off gas while DES guarantees zero vessel emissions"
    ],
    correctAnswer: 1,
    explanation: "In FOB, the buyer arranges shipping and absorbs voyage risk/costs; in DES, the seller provides shipping and bears transit risk until arrival at destination."
  },
  {
    id: 'lng16',
    category: 'LNG',
    question: "What is LNG diversion?",
    options: [
      "Venting boil-off gas to prevent tank over-pressurization",
      "Redirecting an LNG cargo in transit to another permitted destination to capture higher market prices",
      "Diverting feed gas from liquefaction to domestic pipeline grids",
      "Switching an LNG carrier from diesel fuel to heavy fuel oil"
    ],
    correctAnswer: 1,
    explanation: "LNG cargo diversion allows a cargo owner (subject to contractual destination flexibility clauses) to redirect a voyage to a more profitable regional market."
  },
  {
    id: 'lng17',
    category: 'LNG',
    question: "What is laycan in LNG operations?",
    options: [
      "The agreed vessel loading or arrival window specified in the contract",
      "The maximum rate of cargo cooldown during berthing",
      "The legal liability period for off-spec gas",
      "The chemical additive used to prevent hydrate formation"
    ],
    correctAnswer: 0,
    explanation: "Laycan (Laydays and Cancelling) defines the contractual date range during which the vessel must arrive at the terminal and tender Notice of Readiness (NOR)."
  },
  {
    id: 'lng18',
    category: 'LNG',
    question: "What does ETA stand for in LNG shipping?",
    options: [
      "Estimated Time of Arrival",
      "Energy Transmission Allocation",
      "Export Terminal Authorization",
      "Electronic Trade Agreement"
    ],
    correctAnswer: 0,
    explanation: "ETA stands for Estimated Time of Arrival, crucial for berth scheduling and terminal coordination."
  },
  {
    id: 'lng19',
    category: 'LNG',
    question: "What does ETD stand for in LNG shipping?",
    options: [
      "Estimated Time of Departure",
      "Energy Transfer Differential",
      "Electronic Title Document",
      "Ex-Terminal Delivery"
    ],
    correctAnswer: 0,
    explanation: "ETD stands for Estimated Time of Departure, indicating when a carrier is expected to unmoor and begin its voyage."
  },
  {
    id: 'lng20',
    category: 'LNG',
    question: "What is LNG arbitrage?",
    options: [
      "Borrowing gas from pipeline linepack to sell on the spot market",
      "Capturing market price differences between geographic regions after considering all freight, fuel, canal, and transaction costs",
      "Exchanging US Henry Hub futures for European carbon allowances",
      "Converting liquid LNG into compressed CNG to bypass maritime tariffs"
    ],
    correctAnswer: 1,
    explanation: "LNG arbitrage involves exploiting price spreads between destination markets (e.g., JKM vs TTF vs Henry Hub) after deducting charter rates, boil-off, canal fees, and port charges."
  },
  {
    id: 'lng21',
    category: 'LNG',
    question: "What is portfolio optimization in LNG trading?",
    options: [
      "Investing 100% of trading capital into exchange-traded index funds",
      "Selecting supply, destination, shipping routes, and timing decisions to maximize total portfolio value within physical and contractual constraints",
      "Automating the calculation of daily exchange margin calls",
      "Splitting trading books evenly across fixed and floating price contracts"
    ],
    correctAnswer: 1,
    explanation: "LNG portfolio optimization involves managing flexible supply contracts, shipping fleet schedules, and global destination options to maximize overall profit and manage risk."
  },
  {
    id: 'lng22',
    category: 'LNG',
    question: "What is LNG price fixing?",
    options: [
      "Determining the final contract price from the agreed pricing formula and market observations over the pricing window",
      "An illegal conspiracy between exporters to manipulate international gas prices",
      "Setting a permanent non-negotiable government price cap on LNG imports",
      "Fixing the conversion rate between metric tons and cubic meters"
    ],
    correctAnswer: 0,
    explanation: "Price fixing is the contractually defined process of calculating the final cargo invoice price using published benchmark indices (e.g., Platts JKM or ICIS TTF) over specified quotation days."
  },
  {
    id: 'lng23',
    category: 'LNG',
    question: "Why can an LNG contract price be linked to Henry Hub?",
    options: [
      "Because Henry Hub is the physical delivery port for LNG carriers arriving in Asia",
      "US LNG export feed gas economics are directly connected to US natural gas markets, so contracts often use Henry Hub as an index",
      "Federal US law mandates that all international maritime trade use Louisiana benchmarks",
      "Henry Hub reflects the global price of bunker shipping fuel"
    ],
    correctAnswer: 1,
    explanation: "US liquefaction plants procure feed gas directly from the domestic US pipeline grid priced at Henry Hub, leading export contracts to link prices to Henry Hub plus liquefaction/tolling fees."
  },
  {
    id: 'lng24',
    category: 'LNG',
    question: "Why can an LNG contract price be linked to JKM?",
    options: [
      "JKM reflects an important delivered LNG spot market in Northeast Asia, the world's largest LNG consuming region",
      "Because Japan and South Korea own all global liquefaction patents",
      "JKM is a fixed currency exchange rate between Yen and Won",
      "JKM represents the pipeline transportation tariff across the Sea of Japan"
    ],
    correctAnswer: 0,
    explanation: "JKM represents spot physical delivered prices in Japan, South Korea, China, and Taiwan; linking to JKM aligns prices with destination market fundamentals."
  },
  {
    id: 'lng25',
    category: 'LNG',
    question: "What is freight risk in LNG trading?",
    options: [
      "Risk of pirate attacks in the Strait of Malacca",
      "Risk that shipping charter rates, vessel availability, or voyage economics change unfavorably",
      "Risk that an LNG carrier experiences engine failure during loading",
      "Risk of regulatory fines for vessel exhaust emissions"
    ],
    correctAnswer: 1,
    explanation: "Freight risk is the financial exposure to fluctuating spot charter rates (which can swing from $30k/day to over $300k/day), bunker fuel costs, and voyage duration changes."
  },
  {
    id: 'lng26',
    category: 'LNG',
    question: "What is basis/index risk in an LNG portfolio?",
    options: [
      "Risk that the vessel drafts deeper than the Panama Canal locks allow",
      "Risk that the relationship between the physical cargo price and the hedging benchmark/index changes",
      "Risk that the contract changes from English law to New York law",
      "Risk of currency devaluation between the US Dollar and British Pound"
    ],
    correctAnswer: 1,
    explanation: "Basis/index risk arises when a physical cargo priced against one benchmark (e.g., JKM or European hub) is hedged with a different benchmark (e.g., Henry Hub or Brent oil), and their spread diverges."
  },
  {
    id: 'lng27',
    category: 'LNG',
    question: "What is LNG volume risk?",
    options: [
      "Risk that the sound volume of the ship's foghorn violates port regulations",
      "Risk that actual delivered quantity differs from expected or contracted quantity due to boil-off, heel retention, or measurement differences",
      "Risk that the importer orders twice as many cargos as their storage terminal can hold",
      "Risk that the pipeline downstream of the regas terminal operates at low pressure"
    ],
    correctAnswer: 1,
    explanation: "Volume risk occurs because cryogenic LNG changes volume continuously through boil-off gas (BOG) during transit, heel retained for cooldown, and density variations at loading vs discharge."
  },
  {
    id: 'lng28',
    category: 'LNG',
    question: "Why is shipping so critical to LNG P&L?",
    options: [
      "Vessel crews receive a direct percentage of the cargo's gross trading margin",
      "Freight costs, canal tolls, voyage duration, and boil-off fuel consumption can materially change the net net-back value of a cargo",
      "Shipping is the only tax-deductible expense in energy commodity accounting",
      "LNG carriers must be bought outright by the trading desk before executing trades"
    ],
    correctAnswer: 1,
    explanation: "Shipping costs and voyage length (e.g., routing via Cape of Good Hope vs Panama or Suez Canal) can represent 20–40% of the landed cost, directly dictating whether a cargo makes or loses money."
  },
  {
    id: 'lng29',
    category: 'LNG',
    question: "Why is timing critical in LNG trading?",
    options: [
      "Trading platforms only accept orders during London business hours",
      "Loading dates, voyage speed, and discharge timing determine the pricing quotation window, seasonal price capture, and market exposure",
      "Cryogenic LNG completely decomposes if kept in containment tanks for more than 14 days",
      "Vessel captains must tender Notice of Readiness at exactly 12:00 midnight"
    ],
    correctAnswer: 1,
    explanation: "Timing dictates market exposure: a 5-day delay can push cargo pricing into a different calendar month, flip price fixing averages, cause missed laycans, or miss peak seasonal winter pricing."
  },
  {
    id: 'lng30',
    category: 'LNG',
    question: "How do you troubleshoot a wrong or unexpected LNG P&L in an ETRM system?",
    options: [
      "Instantly modify the accounting ledger code and delete previous trade tickets",
      "Trace trade → cargo → schedule → vessel → loading → voyage → discharge → actual quantity → pricing → market data → valuation → P&L, isolating each component",
      "Assume the bank executed the wrong foreign exchange hedge and request a trade cancellation",
      "Re-run the night batch without investigating underlying input data"
    ],
    correctAnswer: 1,
    explanation: "Troubleshooting LNG P&L requires systematic lifecycle tracing: verify deal parameters, cargo allocation, charter rates, canal fees, BOG/fuel actuals, discharge outturn volumes, price fixing indices, forward curve market data, and valuation model logic before touching any system code."
  },

  // --- POWER (29 Questions) ---
  {
    id: 'pw1',
    category: 'Power',
    question: "What is power trading?",
    options: [
      "Buying and selling electricity for defined locations and delivery periods",
      "Generating electricity using private backup generators",
      "Selling electrical transmission towers to utility companies",
      "Trading high-voltage electrical copper cabling on commodities exchanges"
    ],
    correctAnswer: 0,
    explanation: "Power trading is the commercial buying and selling of electrical energy across wholesale markets, specified by physical delivery locations (nodes/zones) and precise time blocks."
  },
  {
    id: 'pw2',
    category: 'Power',
    question: "Why is electricity fundamentally different from commodities like oil?",
    options: [
      "Electricity has limited large-scale economic storage and requires continuous instantaneous grid balancing",
      "Electricity is not subject to financial derivatives or market speculation",
      "Electricity can only be produced by government-owned utilities",
      "Electricity prices are legally fixed and cannot fluctuate"
    ],
    correctAnswer: 0,
    explanation: "Unlike oil or coal which can be stockpiled in tanks or yards, electrical generation must instantaneously match customer demand at every second across the transmission grid, as large-scale storage is limited."
  },
  {
    id: 'pw3',
    category: 'Power',
    question: "What does MW (Megawatt) represent in power markets?",
    options: [
      "Total accumulated electrical energy consumed over a month",
      "A unit representing power or instantaneous generation/consumption capacity",
      "The voltage rating of a high-tension substation",
      "The total financial market capitalization of a power utility"
    ],
    correctAnswer: 1,
    explanation: "A Megawatt (MW) is a unit of instantaneous power equal to 1,000,000 watts. It measures generation capacity or instantaneous demand rate."
  },
  {
    id: 'pw4',
    category: 'Power',
    question: "What does MWh (Megawatt-hour) represent?",
    options: [
      "The instantaneous rate of electrical current flowing through a line",
      "A unit representing total electrical energy delivered or consumed over a period of time",
      "The maximum temperature of a steam turbine generator",
      "The number of hours a power plant is in scheduled maintenance"
    ],
    correctAnswer: 1,
    explanation: "Megawatt-hour (MWh) is the standard commercial unit of electrical energy, representing 1 MW of power delivered or consumed continuously for 1 hour."
  },
  {
    id: 'pw5',
    category: 'Power',
    question: "If a generator delivers 100 MW steadily for 5 hours, how much total energy is produced?",
    options: [
      "20 MWh",
      "100 MWh",
      "500 MWh",
      "2,500 MWh"
    ],
    correctAnswer: 2,
    explanation: "Energy (MWh) = Power (MW) × Time (Hours). 100 MW × 5 hours = 500 MWh."
  },
  {
    id: 'pw6',
    category: 'Power',
    question: "What is a 'baseload' power delivery profile?",
    options: [
      "Power supplied only between 2:00 PM and 6:00 PM on hot summer afternoons",
      "A broadly continuous delivery profile of constant electricity around the clock (24x7)",
      "Emergency backup power activated only during blackouts",
      "Solar generation produced exclusively during peak daylight hours"
    ],
    correctAnswer: 1,
    explanation: "Baseload refers to a steady, continuous power output or demand profile delivered 24 hours a day, 7 days a week (typically provided by nuclear, hydro, or thermal plants)."
  },
  {
    id: 'pw7',
    category: 'Power',
    question: "What is a 'peakload' (or peak) power delivery profile?",
    options: [
      "Electricity generated exclusively at night when transmission lines are cold",
      "A delivery profile covering specified high-demand daytime and evening hours",
      "The minimum operational load of a nuclear reactor",
      "A delivery profile restricted to weekends and federal holidays"
    ],
    correctAnswer: 1,
    explanation: "Peakload covers the hours of highest consumer and industrial electricity consumption (e.g., in North America, standard peak is 5x16: 7:00 AM to 11:00 PM on weekdays)."
  },
  {
    id: 'pw8',
    category: 'Power',
    question: "What is an 'off-peak' power delivery profile?",
    options: [
      "A delivery profile covering lower-demand hours such as nights, weekends, and holidays",
      "Power generated when wind turbines are curtailed",
      "A penalty rate charged to industrial consumers for over-consumption",
      "Electricity delivered during solar noon"
    ],
    correctAnswer: 0,
    explanation: "Off-peak refers to periods of lowest overall grid electricity demand, typically overnight hours, weekends, and holidays, when power prices are generally lower."
  },
  {
    id: 'pw9',
    category: 'Power',
    question: "What is the primary difference between physical and financial power trading?",
    options: [
      "Physical involves actual electricity delivery; financial is settled in cash against a reference price",
      "Physical trading only happens on public exchanges; financial trading is strictly illegal",
      "Physical power trades never have monetary settlement; they are bartered",
      "Physical power is traded in barrels while financial power is traded in Megawatts"
    ],
    correctAnswer: 0,
    explanation: "Physical power trades require scheduling and physical delivery to the transmission grid; financial power trades (like futures and swaps) are purely cash-settled without moving electricity."
  },
  {
    id: 'pw10',
    category: 'Power',
    question: "What is the Day-Ahead power market?",
    options: [
      "A long-term 20-year bilateral contracting auction",
      "Trading and scheduling power for following-day delivery across 24 hourly periods",
      "Real-time balancing that occurs 5 minutes before power delivery",
      "A government subsidy program for residential rooftop solar panels"
    ],
    correctAnswer: 1,
    explanation: "The Day-Ahead market allows generators, utilities, and traders to lock in hourly delivery schedules and clearing prices for the next operating day."
  },
  {
    id: 'pw11',
    category: 'Power',
    question: "What is the Intraday power market?",
    options: [
      "Trading that adjusts positions and balances unexpected fluctuations closer to real-time delivery",
      "The annual capacity auction run by grid operators",
      "A market where electricity futures expire 10 years in advance",
      "An overnight auction for off-peak coal generation"
    ],
    correctAnswer: 0,
    explanation: "Intraday markets operate continuously throughout the operating day, allowing traders to adjust schedules as weather, wind, solar output, or plant outages change close to physical delivery."
  },
  {
    id: 'pw12',
    category: 'Power',
    question: "What is power scheduling?",
    options: [
      "Setting employee shift schedules in an energy trading back office",
      "Planning expected generation, consumption or delivery by time and location",
      "Calculating the annual depreciation schedule of a combined-cycle power plant",
      "The automated calendar reminder for filing federal tax returns"
    ],
    correctAnswer: 1,
    explanation: "Power scheduling is the formal operational plan submitted to the Independent System Operator (ISO/TSO) detailing planned MW injections and withdrawals for every settlement interval."
  },
  {
    id: 'pw13',
    category: 'Power',
    question: "What is a power nomination?",
    options: [
      "Voting for board members of an electric utility cooperative",
      "Communicating the expected physical schedule or quantity to the relevant grid operator",
      "Assigning a unique ticker symbol to a renewable energy certificate",
      "Requesting an increase in a counterparty's credit limit"
    ],
    correctAnswer: 1,
    explanation: "A nomination is the official operational submission to the grid operator (ISO/RTO or TSO) notifying intended power flows across specific grid nodes or interconnections."
  },
  {
    id: 'pw14',
    category: 'Power',
    question: "What is actualization in power systems?",
    options: [
      "Recording actual generation, consumption or metered delivery against scheduled amounts",
      "Updating trader bonus projections based on current gross margin",
      "Converting simulated Monte Carlo price paths into real historical quotes",
      "Canceling unconfirmed trades at the end of the trading week"
    ],
    correctAnswer: 0,
    explanation: "Actualization reconciles planned/scheduled positions with revenue-quality meter data from the grid operator to establish final quantities for billing and imbalance calculation."
  },
  {
    id: 'pw15',
    category: 'Power',
    question: "What is a power imbalance?",
    options: [
      "A financial discrepancy between credit limits and collateral posted",
      "The difference between scheduled/nominated position and actual physical metered quantity",
      "A mechanical imbalance in the rotating shaft of a wind turbine",
      "When a trading desk has more buy deals than sell deals"
    ],
    correctAnswer: 1,
    explanation: "An imbalance occurs when an asset generates or consumes more or less power than what was officially scheduled with the grid operator for that time interval."
  },
  {
    id: 'pw16',
    category: 'Power',
    question: "What is power grid balancing?",
    options: [
      "Maintaining equal cash reserves in all trading accounts",
      "Managing differences between expected and actual system positions through the applicable grid mechanism",
      "Balancing paper swaps with underlying physical oil barrels",
      "Splitting energy portfolios evenly between fossil fuels and nuclear power"
    ],
    correctAnswer: 1,
    explanation: "Balancing is managed by grid operators (ISOs/TSOs) who dispatch balancing reserves (ancillary services) in real time to match exact supply and demand and preserve grid stability."
  },
  {
    id: 'pw17',
    category: 'Power',
    question: "What is transmission congestion in an electric grid?",
    options: [
      "A temporary freeze in electronic trade matching algorithms",
      "A transmission constraint limiting electricity movement between locations due to physical line limits",
      "Too many electric vehicles charging at a single highway rest stop",
      "Excess inventory accumulating in utility warehouse storage"
    ],
    correctAnswer: 1,
    explanation: "Transmission congestion occurs when transmission lines reach thermal, voltage, or stability limits, preventing power from flowing from low-cost generation to load centers, causing localized price spikes."
  },
  {
    id: 'pw18',
    category: 'Power',
    question: "Why does geographic location matter significantly in power pricing?",
    options: [
      "Federal tax rates vary by latitude and longitude",
      "Prices vary because of generation mix, local demand, and transmission constraints (congestion)",
      "Electricity travels at different speeds across different state borders",
      "Trading desks are legally required to discount power sold near coastal waters"
    ],
    correctAnswer: 1,
    explanation: "Because electricity flows according to physics across transmission lines with finite capacities, locational marginal prices (LMP) vary by node reflecting local energy, congestion, and marginal losses."
  },
  {
    id: 'pw19',
    category: 'Power',
    question: "What is basis risk in power trading?",
    options: [
      "Risk that an electric generator suffers physical boiler failure",
      "Risk that related locations or benchmark indices move differently",
      "Risk of interest rate hikes by central banks",
      "Risk that transmission line voltage drops during a lightning storm"
    ],
    correctAnswer: 1,
    explanation: "Basis risk is the danger that the price spread between a local generation node/zone and the liquid trading hub (e.g., PJM Western Hub vs. local node) diverges unexpectedly."
  },
  {
    id: 'pw20',
    category: 'Power',
    question: "What is shape risk in power portfolios?",
    options: [
      "Risk arising from differences in time profiles between hourly consumption/generation and flat block hedges",
      "Risk related to the aerodynamic shape of wind turbine blades",
      "Risk that a company's organizational chart changes after a merger",
      "Risk of changes in the geometric shape of underground storage caverns"
    ],
    correctAnswer: 0,
    explanation: "Shape risk occurs when an asset (like a solar farm producing only mid-day peak) is hedged with standard flat 5x16 or 7x24 blocks, exposing the trader to hourly price shape mismatches."
  },
  {
    id: 'pw21',
    category: 'Power',
    question: "What is volume risk in power contracts?",
    options: [
      "Risk that actual delivered or consumed quantity differs from expected or contracted quantity",
      "Risk that telephone volume on the trading desk causes missed orders",
      "Risk of excessive trade confirmations flooding the back office",
      "Risk of electrical line noise distorting SCADA telemetry signals"
    ],
    correctAnswer: 0,
    explanation: "Volume risk is the uncertainty around how many MWh will actually be produced or consumed, heavily influenced by consumer behavior, plant trips, or weather conditions."
  },
  {
    id: 'pw22',
    category: 'Power',
    question: "What is renewable intermittency?",
    options: [
      "Periodic shutdowns of coal plants for annual maintenance",
      "Variability of renewable output due to weather and natural conditions",
      "Intermittent internet connectivity affecting electronic trading systems",
      "Fluctuations in the supply of carbon offset credits"
    ],
    correctAnswer: 1,
    explanation: "Renewable intermittency refers to the non-dispatchable, weather-dependent nature of wind and solar output, which can fluctuate wildly and unpredictably within minutes."
  },
  {
    id: 'pw23',
    category: 'Power',
    question: "What is a power forward curve?",
    options: [
      "A graphical display of transmission line physical sag under high electrical load",
      "Market prices or implied values for electricity across future delivery periods",
      "The historical efficiency degradation curve of a photovoltaic solar panel",
      "The mathematical curve representing customer late payment probabilities"
    ],
    correctAnswer: 1,
    explanation: "The forward curve reflects today's market consensus of future electricity prices across distinct delivery periods (months, quarters, years, peak/off-peak), critical for MTM valuation and deal pricing."
  },
  {
    id: 'pw24',
    category: 'Power',
    question: "What is Mark-to-Market (MTM) in power risk management?",
    options: [
      "Current market valuation of an open position or portfolio based on current forward curves",
      "Painting power transformers to indicate their operational voltage level",
      "The daily marketing budget spent advertising clean power tariffs to retail consumers",
      "The total historical construction cost of a power generation facility"
    ],
    correctAnswer: 0,
    explanation: "MTM calculates the present economic replacement value of all open power trades against prevailing market forward curves, generating unrealized profit and loss."
  },
  {
    id: 'pw25',
    category: 'Power',
    question: "What does PPA stand for in energy markets?",
    options: [
      "Public Power Administration",
      "Power Purchase Agreement",
      "Peak Power Allocation",
      "Private Pipeline Authorization"
    ],
    correctAnswer: 1,
    explanation: "A Power Purchase Agreement (PPA) is a long-term commercial contract (often 10–20 years) between an electricity generator (e.g., a wind/solar developer) and an offtaker (utility or corporation)."
  },
  {
    id: 'pw26',
    category: 'Power',
    question: "What is a tolling agreement in power generation?",
    options: [
      "Paying highway tolls for transporting electrical replacement parts",
      "An arrangement involving rights to generation capacity under agreed fuel and output terms",
      "An automated penalty charged by the ISO for unauthorized power curtailment",
      "The tariff paid to cross international border interconnections"
    ],
    correctAnswer: 1,
    explanation: "In a tolling agreement, the 'toller' owns the economic rights to a plant's capacity, supplies the natural gas feedstock, and receives the generated electricity, essentially owning a physical Spark Spread option."
  },
  {
    id: 'pw27',
    category: 'Power',
    question: "What causes extreme power price volatility?",
    options: [
      "Supply, demand, plant outages, fuel costs, weather, renewables intermittency and grid transmission constraints",
      "Changes in the federal minimum wage of power plant operators",
      "Fluctuations in the international price of copper transmission lines",
      "Seasonal daylight saving time changes"
    ],
    correctAnswer: 0,
    explanation: "Because electricity cannot be cheaply stored at grid scale and demand is relatively inelastic in real time, sudden heat waves, polar vortexes, or generation trips can cause prices to spike from $30/MWh to over $5,000/MWh within minutes."
  },
  {
    id: 'pw28',
    category: 'Power',
    question: "How does weather affect power markets?",
    options: [
      "Weather only affects outdoor construction of new transmission towers",
      "It affects customer demand and renewable generation, directly changing supply-demand balance and prices",
      "Weather impacts the speed of electrical current flowing through power cables",
      "Rain cleans transmission lines, reducing wholesale electricity taxes"
    ],
    correctAnswer: 1,
    explanation: "Weather is the supreme driver of power markets: hot temperatures drive air conditioning load, freezing temperatures drive electric heating, and sunshine/wind speed determine renewable generation."
  },
  {
    id: 'pw29',
    category: 'Power',
    question: "How do you troubleshoot a wrong or unexpected Power P&L in an ETRM system?",
    options: [
      "Delete the deal tickets that produced a loss and re-import them next week",
      "Trace trade, profile, location, forward curve, meter actuals, imbalance charges and valuation inputs",
      "Assume the ISO's electronic settlement statement is wrong and disregard the variance",
      "Manually overwrite the general ledger balance without investigating input parameters"
    ],
    correctAnswer: 1,
    explanation: "Troubleshooting Power P&L requires checking: Did trade volume match? Was the hourly shape (5x16 vs 7x24) correctly assigned? Was the right nodal curve used? Were meter actuals updated? Were ISO balancing/congestion charges captured?"
  },

  // --- PHYSICAL MARKETS (10 Questions) ---
  {
    id: 'p1',
    category: 'Physical Markets',
    question: "What is a '5x16' power block?",
    options: ["5 hours for 16 days", "5 weekdays times 16 peak hours", "5 MW for 16 hours", "Weekend peak hours"],
    correctAnswer: 1,
    explanation: "5x16 represents the 16 peak hours during the 5 working weekdays."
  },
  {
    id: 'p2',
    category: 'Physical Markets',
    question: "What is 'LNG Bunkering'?",
    options: ["Storing LNG in bunkers", "Refueling ships with LNG", "Building LNG terminals", "Trading LNG futures"],
    correctAnswer: 1,
    explanation: "LNG Bunkering is the process of refueling ships with liquefied natural gas."
  },
  {
    id: 'p3',
    category: 'Physical Markets',
    question: "What is a 'Virtual Hub'?",
    options: ["A real pipeline junction", "A network-wide balancing zone (e.g., TTF)", "An online trading platform", "A weather station"],
    correctAnswer: 1,
    explanation: "Virtual hubs like TTF represent logical balancing zones rather than a physical point."
  },
  {
    id: 'p4',
    category: 'Physical Markets',
    question: "What does 'TTS' stand for in LNG Bunkering?",
    options: ["Time to Settlement", "Truck-to-Ship", "Terminal-to-Storage", "Trade to Sale"],
    correctAnswer: 1,
    explanation: "TTS stands for Truck-to-Ship refueling."
  },
  {
    id: 'p5',
    category: 'Physical Markets',
    question: "What is a 'GSA'?",
    options: ["General Service Agreement", "Gas Sales Agreement", "Grid Supply Authority", "Global Storage Asset"],
    correctAnswer: 1,
    explanation: "A GSA is a Gas Sales Agreement, a core contract for physical gas."
  },
  {
    id: 'p6',
    category: 'Physical Markets',
    question: "In a GSA, what is 'Take-or-Pay'?",
    options: ["Pay only if you take", "Buyer must pay for minimum volume even if not taken", "Seller must pay if they don't deliver", "Immediate cash payment"],
    correctAnswer: 1,
    explanation: "Take-or-Pay requires the buyer to pay for a minimum volume regardless of physical take."
  },
  {
    id: 'p7',
    category: 'Physical Markets',
    question: "What is 'Base Load' power?",
    options: ["Power for peak hours", "Constant flow of power (7x24)", "Minimum voltage", "Power from batteries"],
    correctAnswer: 1,
    explanation: "Base Load is the constant, minimum level of electricity demand over 24 hours."
  },
  {
    id: 'p8',
    category: 'Physical Markets',
    question: "What is a 'Physical Hub'?",
    options: ["A logical zone", "A real pipeline intersection (e.g., Henry Hub)", "A trading floor", "A cloud server"],
    correctAnswer: 1,
    explanation: "Physical Hubs are actual infrastructure points like Henry Hub in Louisiana."
  },
  {
    id: 'p9',
    category: 'Physical Markets',
    question: "What is an 'Execution' in physical power?",
    options: ["Deleting a trade", "The actual physical delivery against a deal", "A legal penalty", "Closing the system"],
    correctAnswer: 1,
    explanation: "Execution refers to the real physical flow/delivery of electricity against a contract."
  },
  {
    id: 'p10',
    category: 'Physical Markets',
    question: "What is 'STS' in LNG?",
    options: ["Storage to Ship", "Ship-to-Ship", "Standard Trade System", "Settlement Time Slot"],
    correctAnswer: 1,
    explanation: "STS stands for Ship-to-Ship transfer or refueling."
  },

  // --- RISK, VALUATIONS & PNL (10 Questions) ---
  {
    id: 'rv1',
    category: 'Risk,Valuations & PnL',
    question: "What is Mark-to-Market (MTM)?",
    options: ["Valuing positions at historical cost", "Valuing open positions at current market prices", "Setting the price for tomorrow", "Reporting total volume"],
    correctAnswer: 1,
    explanation: "MTM values open trades based on current market prices."
  },
  {
    id: 'rv2',
    category: 'Risk,Valuations & PnL',
    question: "What is 'Unrealized PnL'?",
    options: ["Cash in the bank", "Potential profit/loss on open trades", "Losses from bad deals", "Historical earnings"],
    correctAnswer: 1,
    explanation: "Unrealized PnL is the 'paper' profit or loss on trades that are still open."
  },
  {
    id: 'rv3',
    category: 'Risk,Valuations & PnL',
    question: "What is 'Realized PnL'?",
    options: ["Forecasted profit", "Profit/loss locked in from closed trades", "Market value", "Total exposure"],
    correctAnswer: 1,
    explanation: "Realized PnL is final profit or loss from closed/settled trades."
  },
  {
    id: 'rv4',
    category: 'Risk,Valuations & PnL',
    question: "What is a 'Projection Index'?",
    options: ["Historical prices", "Forecasted price series for illiquid periods", "A list of trades", "A technical indicator"],
    correctAnswer: 1,
    explanation: "Projection Indexes fill price gaps where live market quotes don't exist."
  },
  {
    id: 'rv5',
    category: 'Risk,Valuations & PnL',
    question: "What is 'Phantom Inventory'?",
    options: ["Secret stock", "System stock that doesn't physically exist", "Inventory in transit", "Stolen goods"],
    correctAnswer: 1,
    explanation: "Phantom inventory is a system anomaly showing stock that isn't physically there."
  },
  {
    id: 'rv6',
    category: 'Risk,Valuations & PnL',
    question: "What is 'Discounting Index'?",
    options: ["Price forecast", "Interest rates to bring future cash to present value", "A sale price", "Volume reduction"],
    correctAnswer: 1,
    explanation: "Discounting Indexes handle the time-value of money (NPV)."
  },
  {
    id: 'rv7',
    category: 'Risk,Valuations & PnL',
    question: "What is 'VaR'?",
    options: ["Value at Risk", "Volume and Revenue", "Variable Rate", "Valuation and Risk"],
    correctAnswer: 0,
    explanation: "VaR (Value at Risk) is a statistical measure of potential portfolio loss."
  },
  {
    id: 'rv8',
    category: 'Risk,Valuations & PnL',
    question: "What is a 'Long' position?",
    options: ["A trade that lasts a year", "You own the asset; benefit if prices rise", "You owe the asset", "A high volume deal"],
    correctAnswer: 1,
    explanation: "A Long position means you own the commodity and profit if prices increase."
  },
  {
    id: 'rv9',
    category: 'Risk,Valuations & PnL',
    question: "What is a 'Short' position?",
    options: ["A quick trade", "You benefit if prices fall", "Small volume", "A loss-making deal"],
    correctAnswer: 1,
    explanation: "A Short position means you owe/have sold the commodity and profit if prices drop."
  },
  {
    id: 'rv10',
    category: 'Risk,Valuations & PnL',
    question: "What is 'Accrual Accounting'?",
    options: ["Cash-only tracking", "Recording revenue when earned, not just when paid", "Calculating risk", "System updates"],
    correctAnswer: 1,
    explanation: "Accrual accounting records financial events when they occur, regardless of cash flow."
  },

  // --- CREDIT, RISK LIMITS (10 Questions) ---
  {
    id: 'cr1',
    category: 'Credit,Risk Limits',
    question: "What is the focus of a 'Credit Limit' check?",
    options: ["Market volatility", "Counterparty's ability to pay", "Trader's skill", "System speed"],
    correctAnswer: 1,
    explanation: "Credit checks assess the risk of counterparty default."
  },
  {
    id: 'cr2',
    category: 'Credit,Risk Limits',
    question: "What is the focus of a 'Risk Limit' check?",
    options: ["Counterparty trust", "Internal capacity to handle market loss", "Legal terms", "Bank balances"],
    correctAnswer: 1,
    explanation: "Risk limits (like VaR) ensure the firm doesn't take on more market risk than it can handle."
  },
  {
    id: 'cr3',
    category: 'Credit,Risk Limits',
    question: "What is 'PFE'?",
    options: ["Potential Future Exposure", "Price Forecast Engine", "Primary Financial Entry", "Post-Funding Equity"],
    correctAnswer: 0,
    explanation: "PFE stands for Potential Future Exposure, a key credit risk metric."
  },
  {
    id: 'cr4',
    category: 'Credit,Risk Limits',
    question: "What happens when a 'Hard Limit' is breached?",
    options: ["A warning appears", "The trade is blocked by the system", "The trader is fired", "Prices are updated"],
    correctAnswer: 1,
    explanation: "A Hard Limit breach typically results in the system blocking the transaction."
  },
  {
    id: 'cr5',
    category: 'Credit,Risk Limits',
    question: "Which team usually manages VaR limits?",
    options: ["Credit Risk", "Market Risk", "Back Office", "IT"],
    correctAnswer: 1,
    explanation: "Market Risk teams are responsible for monitoring VaR and position limits."
  },
  {
    id: 'cr6',
    category: 'Credit,Risk Limits',
    question: "What are 'Greek' limits for options?",
    options: ["Trading in Greece", "Delta, Gamma, Vega, etc.", "Alpha and Beta", "Currency limits"],
    correctAnswer: 1,
    explanation: "Greeks (Delta, Gamma, etc.) are risk sensitivities for option portfolios."
  },
  {
    id: 'cr7',
    category: 'Credit,Risk Limits',
    question: "What is 'Collateral'?",
    options: ["A legal contract", "Assets/Cash held as security for credit risk", "Trading fees", "System hardware"],
    correctAnswer: 1,
    explanation: "Collateral (like cash or letters of credit) mitigates credit risk."
  },
  {
    id: 'cr8',
    category: 'Credit,Risk Limits',
    question: "What is a 'Master Netting Agreement'?",
    options: ["A tool for catching fish", "Combining multiple debts/credits into one net amount", "A pricing list", "A system update"],
    correctAnswer: 1,
    explanation: "Netting reduces gross exposure by offsetting what you owe and what is owed to you."
  },
  {
    id: 'cr9',
    category: 'Credit,Risk Limits',
    question: "What is 'KYC'?",
    options: ["Know Your Customer", "Key Yield Calculation", "Keep Your Capital", "Know Your Commodity"],
    correctAnswer: 0,
    explanation: "KYC (Know Your Customer) is the process of verifying a partner's identity."
  },
  {
    id: 'cr10',
    category: 'Credit,Risk Limits',
    question: "What is a 'Soft Limit'?",
    options: ["A limit that never breaks", "A threshold that issues a warning but allows the trade", "A limit for renewable energy", "A temporary price"],
    correctAnswer: 1,
    explanation: "Soft Limits issue warnings/notifications but don't strictly block the trade."
  },

  // --- POST TRADE & SETTLEMENT (10 Questions) ---
  {
    id: 'ps1',
    category: 'Post Trade & Settlement',
    question: "What does it mean if a deal is 'Actualized'?",
    options: ["It was planned", "Physical delivery volumes are confirmed", "The bill is paid", "The trade is deleted"],
    correctAnswer: 1,
    explanation: "Actualized means the real metered/delivered volumes are recorded."
  },
  {
    id: 'ps2',
    category: 'Post Trade & Settlement',
    question: "What is 'Settlement'?",
    options: ["Booking a trade", "Final financial closure and payment", "Nominating gas", "A legal dispute"],
    correctAnswer: 1,
    explanation: "Settlement is the final process of invoicing and payment."
  },
  {
    id: 'ps3',
    category: 'Post Trade & Settlement',
    question: "What is 'ROBO'?",
    options: ["Reporting on Behalf Of", "A trading robot", "Revenue on Business Ops", "Risk Offset Booking"],
    correctAnswer: 0,
    explanation: "ROBO is Reporting on Behalf Of, delegating regulatory reporting."
  },
  {
    id: 'ps4',
    category: 'Post Trade & Settlement',
    question: "What is an 'ISDA' agreement?",
    options: ["A type of oil", "Master Agreement for OTC derivatives", "A power grid", "A pricing agency"],
    correctAnswer: 1,
    explanation: "ISDA is the standard Master Agreement for financial derivatives."
  },
  {
    id: 'ps5',
    category: 'Post Trade & Settlement',
    question: "What is 'EFET' used for?",
    options: ["American gas trades", "European physical power and gas trades", "Global oil futures", "Renewable credits"],
    correctAnswer: 1,
    explanation: "EFET is the standard agreement for European physical energy markets."
  },
  {
    id: 'ps6',
    category: 'Post Trade & Settlement',
    question: "What is 'Nomination'?",
    options: ["Winning an award", "Formally requesting a pipeline/grid to move volume", "Paying a bill", "Entering a trade"],
    correctAnswer: 1,
    explanation: "Nomination is the formal request to transport energy via infrastructure."
  },
  {
    id: 'ps7',
    category: 'Post Trade & Settlement',
    question: "What is an 'Invoice'?",
    options: ["A trade confirmation", "The final bill generated for delivery", "A risk report", "A price forecast"],
    correctAnswer: 1,
    explanation: "An Invoice is the document used to bill the counterparty for delivery."
  },
  {
    id: 'ps8',
    category: 'Post Trade & Settlement',
    question: "What is 'Payment Netting'?",
    options: ["Catching cash", "Combining multiple invoices into one cash movement", "Reducing prices", "Speeding up systems"],
    correctAnswer: 1,
    explanation: "Payment Netting saves bank fees by combining multiple payments into one."
  },
  {
    id: 'ps9',
    category: 'Post Trade & Settlement',
    question: "What is 'Vouchering'?",
    options: ["Giving out coupons", "Approving an invoice for payment in the ERP", "Booking a deal", "Checking risk"],
    correctAnswer: 1,
    explanation: "Vouchering is the final approval step before the bank sends the money."
  },
  {
    id: 'ps10',
    category: 'Post Trade & Settlement',
    question: "What is 'REMIT'?",
    options: ["A type of trade", "European regulation for market transparency", "A payment method", "A risk limit"],
    correctAnswer: 1,
    explanation: "REMIT is a major European regulation for reporting energy trades."
  },

  // --- OPERATIONS (10 Questions) ---
  {
    id: 'op1',
    category: 'Operations',
    question: "What is 'Scheduling'?",
    options: ["Setting trade times", "Planning and managing physical delivery logistics", "Calculating PnL", "Hiring staff"],
    correctAnswer: 1,
    explanation: "Operations/Scheduling involves the physical logistics of energy movement."
  },
  {
    id: 'op2',
    category: 'Operations',
    question: "What is a 'Meter Reading' used for?",
    options: ["Setting market prices", "Confirming actual delivery volumes", "Calculating risk", "Testing software"],
    correctAnswer: 1,
    explanation: "Meter readings are the source of truth for actualization."
  },
  {
    id: 'op3',
    category: 'Operations',
    question: "What is an 'Imbalance'?",
    options: ["Falling over", "The difference between planned and actual delivery", "A market crash", "A coding error"],
    correctAnswer: 1,
    explanation: "Imbalance occurs when actual flow differs from scheduled nominations."
  },
  {
    id: 'op4',
    category: 'Operations',
    question: "What is 'Inventory Management'?",
    options: ["Counting office chairs", "Tracking commodity stock in tanks or storage", "Managing people", "Listing trades"],
    correctAnswer: 1,
    explanation: "Inventory management tracks physical stock levels at various locations."
  },
  {
    id: 'op5',
    category: 'Operations',
    question: "What is 'Loss & Gain' in logistics?",
    options: ["Financial profit", "Difference in volume due to evaporation/temp change", "Winning a trade", "System bugs"],
    correctAnswer: 1,
    explanation: "Physical commodities can change volume during transit (shrinkage/expansion)."
  },
  {
    id: 'op6',
    category: 'Operations',
    question: "What is a 'Vessel Nomination'?",
    options: ["Naming a ship", "Assigning a specific ship to a cargo deal", "Buying a boat", "Sailing a ship"],
    correctAnswer: 1,
    explanation: "Vessel nomination is the process of linking a ship to a specific physical trade."
  },
  {
    id: 'op7',
    category: 'Operations',
    question: "What is 'Actualization'?",
    options: ["Making it real", "Replacing planned data with actual metered data", "Closing a deal", "Paying tax"],
    correctAnswer: 1,
    explanation: "Actualization is the process of updating the ETRM with real-world results."
  },
  {
    id: 'op8',
    category: 'Operations',
    question: "What is 'Demurrage'?",
    options: ["A type of fuel", "Fees for delaying a vessel beyond agreed time", "A trading fee", "A price discount"],
    correctAnswer: 1,
    explanation: "Demurrage is a penalty fee paid when a ship takes too long to load/unload."
  },
  {
    id: 'op9',
    category: 'Operations',
    question: "What is 'Transmission' in power?",
    options: ["A car part", "Moving electricity over high-voltage lines", "A radio signal", "Data transfer"],
    correctAnswer: 1,
    explanation: "Transmission is the bulk movement of electricity from plants to substations."
  },
  {
    id: 'op10',
    category: 'Operations',
    question: "What is 'Throughput'?",
    options: ["A calculation", "The volume moving through a pipeline/terminal", "A trade result", "A system test"],
    correctAnswer: 1,
    explanation: "Throughput is the total volume handled by a physical asset over a period."
  },

  // --- COMPLIANCE (10 Questions) ---
  {
    id: 'co1',
    category: 'Compliance',
    question: "What is 'Dodd-Frank'?",
    options: ["A famous trader", "US regulation for transparency in swaps", "A bank name", "A price index"],
    correctAnswer: 1,
    explanation: "Dodd-Frank is a major US law regulating financial derivative markets."
  },
  {
    id: 'co2',
    category: 'Compliance',
    question: "What is 'EMIR'?",
    options: ["An oil index", "European Market Infrastructure Regulation", "A trading company", "A risk metric"],
    correctAnswer: 1,
    explanation: "EMIR is the European equivalent of Dodd-Frank for derivatives."
  },
  {
    id: 'co3',
    category: 'Compliance',
    question: "What is a 'Wash Trade'?",
    options: ["Cleaning a ship", "Illegal trading with yourself to create fake volume", "A low-profit deal", "Trading water"],
    correctAnswer: 1,
    explanation: "Wash trades are a form of market manipulation and are strictly illegal."
  },
  {
    id: 'co4',
    category: 'Compliance',
    question: "What is an 'Audit Trail'?",
    options: ["A path in the woods", "Permanent record of every system change/action", "A list of employees", "A marketing plan"],
    correctAnswer: 1,
    explanation: "Audit trails allow regulators to see exactly who did what in the system."
  },
  {
    id: 'co5',
    category: 'Compliance',
    question: "What is 'Insider Trading'?",
    options: ["Trading in the office", "Trading based on non-public material information", "Working at an exchange", "Buying company stock"],
    correctAnswer: 1,
    explanation: "Insider trading is illegal and involves using secret info to profit."
  },
  {
    id: 'co6',
    category: 'Compliance',
    question: "What is 'ACER'?",
    options: ["A computer brand", "Agency for the Cooperation of Energy Regulators", "A peak price", "A risk limit"],
    correctAnswer: 1,
    explanation: "ACER is the primary energy regulatory body in the European Union."
  },
  {
    id: 'co7',
    category: 'Compliance',
    question: "What is 'FERC'?",
    options: ["Federal Energy Regulatory Commission (USA)", "Financial Entry Risk Code", "Fast Energy Report Center", "Future Energy Risk Calculation"],
    correctAnswer: 0,
    explanation: "FERC regulates the interstate transmission of electricity, gas, and oil in the US."
  },
  {
    id: 'co8',
    category: 'Compliance',
    question: "What is 'Trade Surveillance'?",
    options: ["Watching the news", "Automated monitoring for market manipulation", "Hiring security guards", "Checking bank accounts"],
    correctAnswer: 1,
    explanation: "Surveillance systems flag suspicious patterns like 'Spoofing' or 'Layering'."
  },
  {
    id: 'co9',
    category: 'Compliance',
    question: "What is an 'LEI'?",
    options: ["Legal Entity Identifier", "Low Energy Index", "List of Every Item", "Legal Entry Invoice"],
    correctAnswer: 0,
    explanation: "LEI is a unique global ID for companies participating in financial markets."
  },
  {
    id: 'co10',
    category: 'Compliance',
    question: "What is 'Position Reporting'?",
    options: ["Writing a resume", "Mandatory disclosure of large positions to regulators", "Internal PnL tracking", "A list of trades"],
    correctAnswer: 1,
    explanation: "Regulators require firms to report large positions to prevent market cornering."
  }
,
  {
  "id": "f11",
  "category": "Foundations",
  "question": "Which department in a commodity trading firm is primarily responsible for calculating daily MTM P&L and enforcing risk limits?",
  "options": [
    "Front Office",
    "Middle Office (Risk)",
    "Back Office (Settlements)",
    "Human Resources"
  ],
  "correctAnswer": 1,
  "explanation": "The Middle Office monitors risk, calculates daily Mark-to-Market (MTM) P&L, and ensures traders operate strictly within approved limits."
},
  {
  "id": "f12",
  "category": "Foundations",
  "question": "In ETRM terminology, what is a \"Book\" (or Trading Portfolio)?",
  "options": [
    "A printed paper manual for desk traders",
    "A logical container used to group and monitor positions, trades, and P&L by desk or strategy",
    "A directory of registered energy pipelines",
    "A legal document registered with corporate regulators"
  ],
  "correctAnswer": 1,
  "explanation": "A Book is a logical grouping in an ETRM system that aggregates deals, physical flows, and derivatives for a specific trader, desk, or strategy."
},
  {
  "id": "f13",
  "category": "Foundations",
  "question": "What is the fundamental difference between Fixed Price and Index Price contracts?",
  "options": [
    "Fixed price changes every hour while index price remains flat",
    "Fixed price specifies an exact dollar value, while index price floats against a published benchmark",
    "Fixed price applies only to power while index applies to oil",
    "There is no difference in commodity trading"
  ],
  "correctAnswer": 1,
  "explanation": "A fixed price contract agrees on a specific rate (e.g. .00/bbl), whereas an index price floats against an external benchmark like Brent, WTI, or Henry Hub."
},
  {
  "id": "f14",
  "category": "Foundations",
  "question": "What is a Forward Curve in commodity trading?",
  "options": [
    "A visual map of curved pipeline bends",
    "A curve showing market prices for delivery across future contract months",
    "A graph of historical oil production over 50 years",
    "The rate of vessel acceleration at sea"
  ],
  "correctAnswer": 1,
  "explanation": "A Forward Curve plots market prices for a commodity across a sequence of future settlement/delivery tenors, essential for Mark-to-Market valuation."
},
  {
  "id": "f15",
  "category": "Foundations",
  "question": "What is Mark-to-Market (MTM)?",
  "options": [
    "Physical inspection of cargo meters at discharge",
    "Valuing open contracts against current market replacement prices to calculate unrealized gain/loss",
    "Marking tanker hulls with regulatory safety symbols",
    "Printing official exchange transaction receipts"
  ],
  "correctAnswer": 1,
  "explanation": "MTM revalues all open trading positions using prevailing forward curves, measuring true economic exposure and unrealized profit or loss."
},
  {
  "id": "f16",
  "category": "Foundations",
  "question": "What does \"Basis Risk\" mean in commodity hedging?",
  "options": [
    "The risk that software database indexes crash",
    "The risk that local physical cash prices move differently than the futures contract used for hedging",
    "The risk that currency exchange rates fluctuate",
    "The risk that pipeline pressure drops below atmospheric levels"
  ],
  "correctAnswer": 1,
  "explanation": "Basis risk arises when the correlation between the physical commodity price at a specific delivery location and the benchmark futures contract changes unexpectedly."
},
  {
  "id": "f17",
  "category": "Foundations",
  "question": "Which of the following describes an \"Open Position\"?",
  "options": [
    "A completed trade where payment has settled",
    "A position that has not yet been offset or physically delivered, leaving exposure to price fluctuations",
    "A pipeline valve that is currently flowing gas",
    "An exchange order that was cancelled before execution"
  ],
  "correctAnswer": 1,
  "explanation": "An open position has net exposure to market price fluctuations because it has not been closed out with an offsetting trade or fulfilled through delivery."
},
  {
  "id": "f18",
  "category": "Foundations",
  "question": "What is the role of an exchange Clearinghouse (such as CME Clearing or ICE Clear)?",
  "options": [
    "Setting retail fuel pump taxes for municipalities",
    "Acting as the central buyer to every seller and seller to every buyer, virtually eliminating bilateral default risk",
    "Physically delivering crude oil barrels to residential consumers",
    "Publishing daily meteorological weather models"
  ],
  "correctAnswer": 1,
  "explanation": "Clearinghouses novate trades to become central counterparty, collecting initial and variation margins to protect the market from counterparty default."
},
  {
  "id": "f19",
  "category": "Foundations",
  "question": "In the energy supply chain, what is \"Midstream\"?",
  "options": [
    "Wellhead exploration and reservoir drilling",
    "Transportation, pipeline transmission, bulk storage, and cryogenic processing",
    "Refining crude oil into consumer gasoline at a service station",
    "Residential electricity metering and bill distribution"
  ],
  "correctAnswer": 1,
  "explanation": "Midstream encompasses the logistics segment: transporting, storing, and processing commodities between upstream production and downstream consumption."
},
  {
  "id": "f20",
  "category": "Foundations",
  "question": "What is a Master Agreement (such as ISDA, NAESB, or EFET)?",
  "options": [
    "An operating system software agreement",
    "A standardized umbrella contract setting general credit, legal, netting, and default terms for bilateral trades",
    "A patent certificate for refinery cracking catalysts",
    "An employment contract for chief energy risk officers"
  ],
  "correctAnswer": 1,
  "explanation": "Master Agreements govern bilateral OTC trading relationships, establishing legal terms, definitions, payment netting, credit collateral, and default procedures."
},
  {
  "id": "pm11",
  "category": "Physical Markets",
  "question": "What is \"Laytime\" in maritime charter party agreements?",
  "options": [
    "The time crew members are permitted to sleep on board",
    "The agreed amount of time allowed to load or discharge cargo before demurrage penalties begin",
    "The time required to navigate across the Panama Canal",
    "The duration a vessel sits idle in a shipyard for maintenance"
  ],
  "correctAnswer": 1,
  "explanation": "Laytime is the contractually specified duration allowed for charterers to load or discharge a vessel without incurring extra charges."
},
  {
  "id": "pm12",
  "category": "Physical Markets",
  "question": "What is a \"Notice of Readiness\" (NOR)?",
  "options": [
    "An emergency maritime distress signal",
    "An official document tendered by the ship master certifying the vessel has arrived and is ready to load/discharge",
    "A customs clearance stamp required for refined product exports",
    "A notification sent to pipeline controllers to open terminal valves"
  ],
  "correctAnswer": 1,
  "explanation": "Tendering NOR notifies the terminal charterer that the tanker has physically arrived at the port/berth and is prepared in all respects to handle cargo."
},
  {
  "id": "pm13",
  "category": "Physical Markets",
  "question": "What is the key difference between FOB (Free on Board) and CIF (Cost, Insurance & Freight)?",
  "options": [
    "FOB seller pays freight to destination; CIF buyer pays freight",
    "Under FOB the buyer arranges and pays for shipping/insurance; under CIF the seller arranges and pays for freight and insurance to the destination port",
    "FOB applies only to rail transport; CIF applies only to pipelines",
    "There is no difference in risk or title transfer points"
  ],
  "correctAnswer": 1,
  "explanation": "Under FOB, the buyer arranges shipping and absorbs maritime risk once loaded. Under CIF, the seller pays for ocean freight and marine transit insurance to the destination port."
},
  {
  "id": "pm14",
  "category": "Physical Markets",
  "question": "Why is the Bill of Lading (B/L) date so critical in physical commodity trading?",
  "options": [
    "It determines the vessel captain's retirement bonus",
    "It frequently defines the pricing period window, title transfer date, and invoice payment due date",
    "It sets the currency exchange conversion rate for the subsequent year",
    "It is only used for local maritime harbor pilot licensing"
  ],
  "correctAnswer": 1,
  "explanation": "The B/L date serves as legal proof of shipment, commonly triggering the contract pricing formula window (e.g., 5-day average around B/L date) and settlement due date."
},
  {
  "id": "pm15",
  "category": "Physical Markets",
  "question": "In pipeline operations, what is \"Linepack\"?",
  "options": [
    "The insulating wrap placed around underground steel pipelines",
    "The volume of compressed natural gas maintained within the pipeline network to maintain operating pressure",
    "The maintenance schedule for replacing pipeline compressor impellers",
    "The packing material used in shipping container boxes"
  ],
  "correctAnswer": 1,
  "explanation": "Linepack is the physical inventory of pressurized gas stored inside the transmission pipeline itself, acting as a short-term buffer against demand fluctuations."
},
  {
  "id": "pm16",
  "category": "Physical Markets",
  "question": "What is \"Capacity Release\" on interstate natural gas pipelines?",
  "options": [
    "Venting excess pipeline gas into the atmosphere during overpressure events",
    "The mechanism allowing shippers with firm transport capacity rights to temporarily sublease it to other parties",
    "Constructing wider diameter pipelines across state borders",
    "The permanent abandonment of older gathering pipeline networks"
  ],
  "correctAnswer": 1,
  "explanation": "FERC regulations allow firm capacity holders who do not need their pipeline space on a given day to release/sublet it to other shippers in the capacity release market."
},
  {
  "id": "pm17",
  "category": "Physical Markets",
  "question": "What is Locational Marginal Pricing (LMP) in competitive power grids?",
  "options": [
    "A single nationwide electricity price fixed by federal legislation",
    "A pricing model reflecting the marginal cost of supplying the next megawatt-hour at a specific bus/node, accounting for energy, losses, and congestion",
    "The retail electricity price billed to residential apartment tenants",
    "The fuel cost of running coal-fired peaker plants"
  ],
  "correctAnswer": 1,
  "explanation": "LMP determines the price of wholesale electric power at specific locations (nodes/buses) across the grid, reflecting local transmission congestion and electrical line losses."
},
  {
  "id": "pm18",
  "category": "Physical Markets",
  "question": "What is a \"Spark Spread\" in power market analytics?",
  "options": [
    "The visible electric arc emitted when high-voltage transformers disconnect",
    "The theoretical margin between the wholesale price of electricity and the cost of natural gas fuel needed to produce it",
    "The difference between Day-Ahead and Intraday electricity prices",
    "The tariff charged by power distributors to install transmission lines"
  ],
  "correctAnswer": 1,
  "explanation": "Spark Spread represents the gross margin of a gas-fired power generator: Electricity Price - (Gas Price * Heat Rate). For coal plants, it is called a \"Dark Spread\"."
},
  {
  "id": "pm19",
  "category": "Physical Markets",
  "question": "What is \"Boil-off Gas\" (BOG) in LNG shipping logistics?",
  "options": [
    "Gas vaporized intentionally to power kitchen facilities on board tankers",
    "Ambient heat ingress causing cryogenic LNG (-162°C) to slowly vaporize during maritime transit",
    "Gas vented into the atmosphere to lighten ship weight in shallow waters",
    "A chemical contaminant removed during natural gas sweetening"
  ],
  "correctAnswer": 1,
  "explanation": "Because LNG is stored at -162°C, minor thermal heat leakage into cargo tanks continuously boils off small percentages of liquid into gas, which modern vessels use as propulsion fuel."
},
  {
  "id": "pm20",
  "category": "Physical Markets",
  "question": "What is an \"Operational Balancing Agreement\" (OBA) between pipeline operators and interconnecting facilities?",
  "options": [
    "An agreement to split corporate profits equally between pipeline firms",
    "A contract where the pipeline and interconnecting party agree to manage operational physical flow differences on paper to avoid immediate commercial balancing penalties",
    "A regulatory requirement forbidding pipeline maintenance during winter months",
    "A financial swap used to balance equity stock prices"
  ],
  "correctAnswer": 1,
  "explanation": "An OBA accounts for daily variances between scheduled nominations and actual physical meter flows at an interconnect point, preventing shippers from incurring individual daily imbalance penalties."
},
  {
  "id": "risk11",
  "category": "Risk,Valuations & PnL",
  "question": "What does \"Delta\" represent in commodity derivatives risk management?",
  "options": [
    "The total physical distance between delivery hub and load port",
    "The rate of change in option value relative to a  move in the underlying commodity price",
    "The difference between realized P&L and total revenue",
    "The annual rate of crude oil production decline"
  ],
  "correctAnswer": 1,
  "explanation": "Delta measures the sensitivity of an option or derivative portfolio to small changes in the underlying commodity's market price."
},
  {
  "id": "risk12",
  "category": "Risk,Valuations & PnL",
  "question": "What is \"Vega\" in energy options trading?",
  "options": [
    "The risk of astronomical solar flares disrupting power distribution",
    "The sensitivity of option portfolio value to a 1% change in implied market volatility",
    "The rate of option time decay as expiration approaches",
    "The risk of counterparty bankruptcy during high interest rate environments"
  ],
  "correctAnswer": 1,
  "explanation": "Vega measures how much an option's price will change when implied volatility increases or decreases by 1 percentage point."
},
  {
  "id": "risk13",
  "category": "Risk,Valuations & PnL",
  "question": "If a trading portfolio has a 1-day 95% Value-at-Risk (VaR) of ,000, what does this mathematically mean?",
  "options": [
    "The desk is guaranteed to lose exactly ,000 tomorrow",
    "Under normal market conditions, portfolio daily losses are estimated not to exceed ,000 on 95 out of 100 trading days",
    "The maximum possible portfolio loss is capped at ,000 by law",
    "The company must maintain ,000 in physical cash in desk vaults"
  ],
  "correctAnswer": 1,
  "explanation": "A 95% 1-day VaR of ,000 indicates that on 95% of trading days, expected loss will not exceed ,000 under model assumptions (though losses on the worst 5% of days can exceed this)."
},
  {
  "id": "risk14",
  "category": "Risk,Valuations & PnL",
  "question": "What is \"P&L Attribution\" (or P&L Explain) in Middle Office reporting?",
  "options": [
    "Assigning credit or blame to individual junior analysts for software bugs",
    "Decomposing total daily P&L into constituent market drivers: delta price moves, curve shape, basis changes, new trades, and time decay",
    "Converting foreign currency P&L into gold ounces for international tax returns",
    "Submitting corporate financial statements to federal tax authorities"
  ],
  "correctAnswer": 1,
  "explanation": "P&L Attribution isolates and explains exactly why portfolio value changed (e.g., +k from flat price move, -k from basis widening, -k theta decay)."
},
  {
  "id": "risk15",
  "category": "Risk,Valuations & PnL",
  "question": "What is \"Shape Risk\" (or Profile Risk) in electricity trading?",
  "options": [
    "The geometrical shape of power transmission towers in mountainous regions",
    "The risk that actual hourly generation or consumption profiles mismatch standard flat block hedges (such as 5x16 on-peak)",
    "The structural fatigue observed on wind turbine blades",
    "The curvature of power forward curves when plotted on 3D computer monitors"
  ],
  "correctAnswer": 1,
  "explanation": "Electricity cannot be stored easily; shape risk occurs when a flat contract block (e.g., 50 MW all 16 hours) fails to match actual hourly consumption peaks and troughs."
},
  {
  "id": "risk16",
  "category": "Risk,Valuations & PnL",
  "question": "What is \"Stress Testing\" in an ETRM risk framework?",
  "options": [
    "Evaluating how trading floor staff perform under long work shifts",
    "Simulating portfolio financial impact under extreme historical or hypothetical disaster scenarios (e.g., Winter Storm Uri, 2008 crash)",
    "Testing high pipeline hydraulic pressures before commissioning",
    "Measuring server hardware CPU utilization during end-of-day batch runs"
  ],
  "correctAnswer": 1,
  "explanation": "Stress testing evaluates extreme tail risks and vulnerabilities by revaluing the portfolio under severe market crises beyond standard statistical VaR models."
},
  {
  "id": "risk17",
  "category": "Risk,Valuations & PnL",
  "question": "What is the primary difference between Realized and Unrealized P&L?",
  "options": [
    "Realized is based on opinion while unrealized is based on facts",
    "Realized P&L arises from completed, settled, or closed trades; Unrealized P&L reflects current paper valuation of open forward positions",
    "Realized P&L only occurs in equity markets while unrealized applies to energy",
    "There is no difference in corporate accounting"
  ],
  "correctAnswer": 1,
  "explanation": "Unrealized P&L reflects the paper gain or loss on open positions marked to prevailing forward curves; realized P&L is locked in upon position closure, delivery, or financial settlement."
},
  {
  "id": "risk18",
  "category": "Risk,Valuations & PnL",
  "question": "Why does an energy forward curve often experience \"Backwardation\" during periods of severe winter cold snaps?",
  "options": [
    "Refineries shut down completely in cold temperatures",
    "High immediate physical heating demand drives prompt spot prices far higher than forward delivery months",
    "Exchange computer systems malfunction in sub-zero weather",
    "Pipelines automatically reduce tariffs during winter seasons"
  ],
  "correctAnswer": 1,
  "explanation": "Extreme immediate cold drives acute current physical demand for heating fuel, creating a prompt price spike relative to future delivery tenors (backwardation)."
},
  {
  "id": "crd11",
  "category": "Credit,Risk Limits",
  "question": "What is a Credit Support Annex (CSA) under an ISDA Master Agreement?",
  "options": [
    "A legal document that guarantees bank loans to energy refiners",
    "A document defining the rules and collateral thresholds for posting margin between trading counterparties",
    "An annex listing approved pipeline shipping routes for physical deliveries",
    "A certificate proving corporate tax exemption status"
  ],
  "correctAnswer": 1,
  "explanation": "A CSA specifies the collateral terms (cash or government bonds), threshold levels, and valuation frequencies required to secure bilateral OTC derivative exposures."
},
  {
  "id": "crd12",
  "category": "Credit,Risk Limits",
  "question": "What is the purpose of \"Potential Future Exposure\" (PFE) in credit risk?",
  "options": [
    "Predicting the future stock price of competitor corporations",
    "Estimating the maximum credit exposure that could arise over a given time horizon at a chosen confidence level due to market price swings",
    "Measuring future corporate carbon emissions targets",
    "Calculating long-term inflation forecasts for commercial bank loans"
  ],
  "correctAnswer": 1,
  "explanation": "PFE models potential future credit exposure if market prices move unfavorably prior to contract maturity, preventing credit limit over-allocation."
},
  {
  "id": "crd13",
  "category": "Credit,Risk Limits",
  "question": "What triggers a \"Variation Margin\" call in cleared and collateralized energy trading?",
  "options": [
    "The calendar changing to a new calendar quarter",
    "Daily changes in Mark-to-Market contract value that increase credit exposure between the counterparties",
    "A ship reaching the halfway mark across the Atlantic ocean",
    "A change in corporate executive leadership"
  ],
  "correctAnswer": 1,
  "explanation": "Variation margin is called daily to true-up Mark-to-Market gains and losses, ensuring neither party builds uncollateralized exposure."
},
  {
  "id": "crd14",
  "category": "Credit,Risk Limits",
  "question": "What is \"Payment Netting\" in credit and settlement operations?",
  "options": [
    "Fishing with safety nets around offshore drilling platforms",
    "Combining all mutual cash obligations due on the same day in the same currency between counterparties into a single net settlement transfer",
    "Paying all corporate supplier bills at year-end in a single bulk transaction",
    "Deducting state fuel taxes from gross sales revenue"
  ],
  "correctAnswer": 1,
  "explanation": "Payment netting aggregates mutual obligations between two firms into a single net cash payment, dramatically reducing settlement risk and banking transaction costs."
},
  {
  "id": "crd15",
  "category": "Credit,Risk Limits",
  "question": "What is a Standby Letter of Credit (SBLC) used for in physical commodity trading?",
  "options": [
    "A letter recommending junior traders for promotion",
    "A financial guarantee issued by a commercial bank ensuring payment to the seller if the buyer defaults",
    "A customs manifest permitting cargo discharge at foreign ports",
    "A warranty certificate for high-pressure pipeline steel"
  ],
  "correctAnswer": 1,
  "explanation": "An SBLC issued by a bank acts as third-party credit enhancement, committing the bank to pay the seller if the buyer fails to meet payment obligations."
},
  {
  "id": "pts11",
  "category": "Post Trade & Settlement",
  "question": "In trade accounting, what is an \"Accrual\"?",
  "options": [
    "A mechanical accumulation of pipeline sludge inside crude oil tanks",
    "An accounting entry recognizing revenue or expense in the period the physical commodity delivered, before the final invoice is processed",
    "A penalty fine assessed by maritime coast guards for late vessel berthing",
    "An interest surcharge on corporate credit lines"
  ],
  "correctAnswer": 1,
  "explanation": "Accrual accounting recognizes revenue and expenses when physical delivery occurs, ensuring accurate monthly financial reporting before cash invoices are finalized."
},
  {
  "id": "pts12",
  "category": "Post Trade & Settlement",
  "question": "What is \"3-Way Matching\" in Back Office settlement verification?",
  "options": [
    "Matching 3 simultaneous futures contracts on different exchanges",
    "Comparing the trade contract details, operational delivery tickets (meter/BL), and vendor invoice before releasing payment",
    "Balancing electric voltage across three physical power phases",
    "Matching trade buyer, seller, and broker signatures on paper tickets"
  ],
  "correctAnswer": 1,
  "explanation": "3-way matching compares contract price/terms, operational delivery tickets (run-ticket/meter/B-L), and invoice amounts to detect billing discrepancies before payment."
},
  {
  "id": "pts13",
  "category": "Post Trade & Settlement",
  "question": "What is a \"Credit Note\" (Credit Memo) issued for in ETRM settlement operations?",
  "options": [
    "An award certificate acknowledging high trading sales volume",
    "A formal financial document reducing an existing invoice amount due to over-billing, quality adjustments, or quantity volume discrepancies",
    "A bank loan application submitted to finance tanker purchases",
    "A promissory note issued to corporate shareholders"
  ],
  "correctAnswer": 1,
  "explanation": "A Credit Note adjusts an existing invoice downwards when actual delivered volume was lower than invoiced or when pricing corrections apply."
},
  {
  "id": "pts14",
  "category": "Post Trade & Settlement",
  "question": "What does ETRM vs ERP Reconciliation ensure?",
  "options": [
    "That trading software algorithms compile without syntax errors",
    "That trade transaction details, payable/receivable sub-ledger balances, and cash settlements in the ETRM match the enterprise General Ledger (e.g. SAP/Oracle)",
    "That employee computer workstations run identical operating systems",
    "That retail pump fuel prices match wholesale refinery costs"
  ],
  "correctAnswer": 1,
  "explanation": "Reconciliation verifies that trading records, revenue, invoices, and cash settlements in the ETRM align precisely with accounting postings in the corporate ERP."
},
  {
  "id": "pts15",
  "category": "Post Trade & Settlement",
  "question": "What is \"Month-End Close\" in an energy trading organization?",
  "options": [
    "Shutting down physical gas pipelines on the last weekend of every month",
    "The systematic accounting process of locking trade blotters, finalizing accruals, reconciling bank statements, and producing audited financial statements",
    "Cancelling all open forward contracts before the calendar month changes",
    "Conducting mandatory physical stocktakes of office computers"
  ],
  "correctAnswer": 1,
  "explanation": "Month-end close locks financial books for the accounting period, finalizing realized P&L, balancing sub-ledgers against GL, and recording mark-to-market balances."
},
  {
  "id": "ops11",
  "category": "Operations",
  "question": "Under standard NAESB natural gas scheduling cycles in North America, what is the \"Timely\" cycle deadline?",
  "options": [
    "1:00 PM Central Clock Time on the day prior to gas flow",
    "6:00 AM on the day of gas flow",
    "11:59 PM on the last day of the calendar month",
    "Anytime the shipper chooses without restriction"
  ],
  "correctAnswer": 0,
  "explanation": "Under NAESB standards, the Timely nomination cycle has a deadline of 1:00 PM Central Clock Time (CCT) on the day prior to gas flow."
},
  {
  "id": "ops12",
  "category": "Operations",
  "question": "What is an \"Operational Flow Order\" (OFO) issued by a natural gas pipeline?",
  "options": [
    "A routine invoice sent to utility customers for pipeline tolls",
    "A mandatory operational directive requiring shippers to strictly balance receipts and deliveries within tight tolerances to protect pipeline integrity",
    "A permit allowing construction of new compressor stations",
    "A discount on transmission rates during low-demand seasons"
  ],
  "correctAnswer": 1,
  "explanation": "Pipelines declare an OFO during extreme cold, heat, or mechanical failures, mandating shippers balance nominations with physical flows or pay severe penalties."
},
  {
  "id": "ops13",
  "category": "Operations",
  "question": "In physical crude oil shipping, what is an \"Independent Surveyor\" responsible for?",
  "options": [
    "Navigating the ship through congested harbor canals",
    "Inspecting cargo tanks, measuring volume/temperature, determining BS&W (water/sediment), and issuing official Certificates of Quantity and Quality",
    "Negotiating spot bunker fuel prices for the voyage",
    "Auditing shipping company tax returns"
  ],
  "correctAnswer": 1,
  "explanation": "Independent surveyors (e.g. SGS, Intertek, Saybolt) objectively verify cargo volume, temperature, API gravity, and sediment at load and discharge ports."
},
  {
  "id": "ops14",
  "category": "Operations",
  "question": "What is \"Vessel Vetting\" (e.g. OCIMF SIRE program) in maritime oil trading operations?",
  "options": [
    "Checking that the tanker crew speaks English fluently",
    "A rigorous safety and technical inspection screening process to ensure tankers meet safety, structural, and environmental standards before chartering",
    "Checking the vessel's financial credit score with consumer rating agencies",
    "Washing the vessel hull before entering international waters"
  ],
  "correctAnswer": 1,
  "explanation": "Energy majors vet vessels using SIRE inspection reports to verify technical integrity, crew competence, and safety records before committing cargo."
},
  {
  "id": "ops15",
  "category": "Operations",
  "question": "What is the standard \"Gas Day\" definition in North America?",
  "options": [
    "Midnight to midnight local city time",
    "9:00 AM Central Clock Time (CCT) to 9:00 AM CCT the following day",
    "Sunrise to sunset across each individual state",
    "8:00 AM Eastern Time to 5:00 PM Eastern Time"
  ],
  "correctAnswer": 1,
  "explanation": "Under NAESB standards, the standard Gas Day commences at 9:00 AM Central Clock Time (CCT) and concludes at 9:00 AM CCT on the following calendar day."
},
  {
  "id": "cmp11",
  "category": "Compliance",
  "question": "What is the primary objective of REMIT regulation in European energy markets?",
  "options": [
    "Setting maximum retail price caps for household electricity",
    "Prohibiting insider trading and market manipulation, and mandating transparency in wholesale energy markets",
    "Regulating the manufacture of electric vehicles across EU nations",
    "Enforcing carbon tax tariffs on imported electronics"
  ],
  "correctAnswer": 1,
  "explanation": "REMIT (Regulation on Wholesale Energy Market Integrity and Transparency) prohibits insider trading and market manipulation in European power and gas markets."
},
  {
  "id": "cmp12",
  "category": "Compliance",
  "question": "In energy compliance and market surveillance, what is \"Wash Trading\"?",
  "options": [
    "Cleaning physical crude oil storage tanks before inspection",
    "Entering offsetting buy and sell transactions at the same time and price with no change in economic risk or beneficial ownership, artificially inflating trading volume",
    "Laundering foreign currency proceeds from illegal fuel smuggling",
    "Trading biofuels refined from recycled kitchen grease"
  ],
  "correctAnswer": 1,
  "explanation": "Wash trading is an illegal market manipulation practice where trades are executed without economic substance or market risk to fabricate volume or manipulate benchmarks."
},
  {
  "id": "cmp13",
  "category": "Compliance",
  "question": "What is \"Spoofing\" in electronic commodity order books?",
  "options": [
    "Impersonating another trader's voice on telephone squawk boxes",
    "Submitting non-bona fide orders that the trader intends to cancel before execution to create a false impression of market demand or supply",
    "Sending phishing emails to pipeline scheduling operators",
    "Altering the GPS transponder coordinates of a crude oil tanker"
  ],
  "correctAnswer": 1,
  "explanation": "Spoofing involves placing large algorithmic orders with the intent to cancel before execution, artificially moving prices to benefit trades on the other side of the book."
},
  {
  "id": "cmp14",
  "category": "Compliance",
  "question": "Under the US Dodd-Frank Act, what is a \"Swap Data Repository\" (SDR)?",
  "options": [
    "An underground storage vault for confidential paper contracts",
    "A centralized registered facility that electronically collects and maintains records of swap transactions for regulatory transparency",
    "A backup hard drive installed in desk traders' computers",
    "A database storing retail consumer credit card transactions"
  ],
  "correctAnswer": 1,
  "explanation": "SDRs collect and maintain real-time swap records to provide regulators (such as the CFTC) with transparency across derivative markets and monitor systemic risk."
},
  {
  "id": "cmp15",
  "category": "Compliance",
  "question": "Why are trading floors required to record trader phone lines and retain instant message chats?",
  "options": [
    "To monitor employee productivity and break times",
    "To comply with regulatory mandates (such as CFTC/FCA/FERC) requiring auditable records for trade reconstruction and anti-manipulation investigations",
    "To train artificial intelligence voice recognition software models",
    "To reduce commercial telephone subscription bills"
  ],
  "correctAnswer": 1,
  "explanation": "Regulations mandate comprehensive audio and electronic communications recording to enable regulators and compliance officers to reconstruct trade events and detect misconduct."
}
];

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const quizService = {
  getQuestions: () => quizQuestions,
  getQuestionsByCategory: (category: string) => quizQuestions.filter(q => q.category === category),
  getRandomQuestions: (category: string, count: number) => {
    const categoryQuestions = category === 'All' 
      ? quizQuestions 
      : quizQuestions.filter(q => q.category === category);
    
    const shuffledQuestions = shuffleArray(categoryQuestions);
    const selectedQuestions = shuffledQuestions.slice(0, Math.min(count, categoryQuestions.length));

    // Shuffle options for each selected question
    return selectedQuestions.map(q => {
      const originalCorrectOption = q.options[q.correctAnswer];
      const shuffledOptions = shuffleArray(q.options);
      const newCorrectAnswer = shuffledOptions.indexOf(originalCorrectOption);
      
      return {
        ...q,
        options: shuffledOptions,
        correctAnswer: newCorrectAnswer >= 0 ? newCorrectAnswer : 0
      };
    });
  },
  getCategories: () => {
    return QUIZ_CATEGORY_ORDER;
  },
  getCategoryProgress: async (category: string) => {
    try {
      const score = await AsyncStorage.getItem(`${STORAGE_KEY_PREFIX}${category}`);
      return score ? parseInt(score) : 0;
    } catch (e) {
      return 0;
    }
  },
  saveCategoryScore: async (category: string, score: number) => {
    try {
      const currentHighScore = await quizService.getCategoryProgress(category);
      if (score > currentHighScore) {
        await AsyncStorage.setItem(`${STORAGE_KEY_PREFIX}${category}`, score.toString());
      }
    } catch (e) {
      console.error('Error saving score', e);
    }
  },
  isCategoryUnlocked: async (category: string) => {
    const index = QUIZ_CATEGORY_ORDER.indexOf(category);
    if (index === 0) return true; // Only the first category (Foundations) is unlocked by default
    if (index === -1) return false;
    
    const prevCategory = QUIZ_CATEGORY_ORDER[index - 1];
    const prevScore = await quizService.getCategoryProgress(prevCategory);
    return prevScore >= 60; // Unlock next section ONLY when previous completed successfully with 60% or higher
  },
  getNextCategory: (category: string): string | null => {
    const index = QUIZ_CATEGORY_ORDER.indexOf(category);
    if (index >= 0 && index < QUIZ_CATEGORY_ORDER.length - 1) {
      return QUIZ_CATEGORY_ORDER[index + 1];
    }
    return null;
  },
  getPreviousCategory: (category: string): string | null => {
    const index = QUIZ_CATEGORY_ORDER.indexOf(category);
    if (index > 0) {
      return QUIZ_CATEGORY_ORDER[index - 1];
    }
    return null;
  },
  resetAllProgress: async () => {
    try {
      for (const cat of QUIZ_CATEGORY_ORDER) {
        await AsyncStorage.removeItem(`${STORAGE_KEY_PREFIX}${cat}`);
      }
    } catch (e) {
      console.error('Error resetting quiz progress', e);
    }
  }
};
