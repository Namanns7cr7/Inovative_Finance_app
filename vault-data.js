(function () {
  const user = {
    id: 'usr_naman_sharma',
    firstName: 'Naman',
    lastName: 'Sharma',
    displayName: 'Naman Sharma',
    initials: 'NS',
    plan: 'Premium Plan',
    locale: 'en-US',
    currency: 'USD',
    timezone: 'America/New_York'
  };

  const accounts = [
    {
      id: 'acct_checking_4829',
      type: 'checking',
      name: 'Vault Checking',
      institution: 'Vault Financial',
      last4: '4829',
      balance: 184920.48,
      availableBalance: 184920.48,
      isPrimary: true
    },
    {
      id: 'acct_savings_7341',
      type: 'savings',
      name: 'High Yield Savings',
      institution: 'Vault Financial',
      last4: '7341',
      balance: 62400,
      availableBalance: 62400,
      interestRate: 4.25
    },
    {
      id: 'acct_credit_4829',
      type: 'credit_card',
      name: 'Vault Signature Visa',
      institution: 'Vault Financial',
      last4: '4829',
      balance: -3284.87,
      creditLimit: 15000,
      availableCredit: 11715.13
    }
  ];

  const cards = [
    {
      id: 'card_signature_4829',
      accountId: 'acct_credit_4829',
      network: 'Visa',
      product: 'Vault Signature',
      holderName: 'Naman Sharma',
      last4: '4829',
      expiry: '2029-08',
      status: 'active',
      monthlySpend: 3284.87,
      monthlyCashback: 48.2,
      dailyLimit: 2000,
      dailyRemaining: 1850,
      creditLimit: 15000,
      availableCredit: 11715.13
    },
    {
      id: 'card_gold_1120',
      accountId: 'acct_credit_1120',
      network: 'Mastercard',
      product: 'Vault Gold',
      holderName: 'Naman Sharma',
      last4: '1120',
      expiry: '2028-11',
      status: 'active',
      monthlySpend: 0,
      monthlyCashback: 0,
      dailyLimit: 1200,
      dailyRemaining: 1200,
      creditLimit: 10000,
      availableCredit: 10000
    }
  ];

  const budgetCategories = [
    {
      id: 'housing',
      name: 'Housing',
      group: 'fixed',
      monthlyLimit: 3000,
      spent: 2100,
      remaining: 900,
      usedPct: 70,
      essential: true,
      risk: 'safe'
    },
    {
      id: 'food',
      name: 'Food & Drink',
      group: 'variable',
      monthlyLimit: 1000,
      spent: 810,
      remaining: 190,
      usedPct: 81,
      essential: false,
      risk: 'watch'
    },
    {
      id: 'transport',
      name: 'Transport',
      group: 'variable',
      monthlyLimit: 300,
      spent: 284,
      remaining: 16,
      usedPct: 94.7,
      essential: false,
      risk: 'critical'
    },
    {
      id: 'shopping',
      name: 'Shopping',
      group: 'variable',
      monthlyLimit: 500,
      spent: 229,
      remaining: 271,
      usedPct: 45.8,
      essential: false,
      risk: 'safe'
    },
    {
      id: 'subscriptions',
      name: 'Subscriptions',
      group: 'fixed',
      monthlyLimit: 100,
      spent: 36.47,
      remaining: 63.53,
      usedPct: 36.5,
      essential: true,
      risk: 'safe'
    },
    {
      id: 'health',
      name: 'Health',
      group: 'variable',
      monthlyLimit: 200,
      spent: 23.4,
      remaining: 176.6,
      usedPct: 11.7,
      essential: true,
      risk: 'safe'
    },
    {
      id: 'entertainment',
      name: 'Entertainment',
      group: 'variable',
      monthlyLimit: 150,
      spent: 0,
      remaining: 150,
      usedPct: 0,
      essential: false,
      risk: 'safe'
    }
  ];

  const transactions = [
    {
      id: 'txn_2026_04_09_payroll',
      postedAt: '2026-04-09T08:00:00-04:00',
      description: 'Payroll - April',
      merchant: 'Acme Corp LLC',
      amount: 9200,
      direction: 'income',
      categoryId: 'income_salary',
      categoryName: 'Salary',
      accountId: 'acct_checking_4829',
      paymentMethod: 'direct_deposit',
      status: 'completed',
      recurring: true,
      reference: 'PAY-APR-2026'
    },
    {
      id: 'txn_2026_04_09_blue_bottle',
      postedAt: '2026-04-09T09:14:00-04:00',
      description: 'Blue Bottle Coffee',
      merchant: 'Blue Bottle Coffee #12',
      amount: -6.5,
      direction: 'expense',
      categoryId: 'food',
      categoryName: 'Food & Drink',
      accountId: 'acct_credit_4829',
      cardId: 'card_signature_4829',
      paymentMethod: 'card',
      status: 'completed',
      tags: ['coffee', 'card']
    },
    {
      id: 'txn_2026_04_08_spotify',
      postedAt: '2026-04-08T00:00:00-04:00',
      description: 'Spotify Premium',
      merchant: 'Spotify AB',
      amount: -10.99,
      direction: 'expense',
      categoryId: 'subscriptions',
      categoryName: 'Subscriptions',
      accountId: 'acct_credit_4829',
      cardId: 'card_signature_4829',
      paymentMethod: 'card',
      status: 'completed',
      recurring: true,
      nextBillAt: '2026-05-08'
    },
    {
      id: 'txn_2026_04_08_uber',
      postedAt: '2026-04-08T23:32:00-04:00',
      description: 'Uber',
      merchant: 'Uber Trip',
      amount: -14.2,
      direction: 'expense',
      categoryId: 'transport',
      categoryName: 'Transport',
      accountId: 'acct_credit_4829',
      cardId: 'card_signature_4829',
      paymentMethod: 'card',
      status: 'completed',
      details: { distanceMi: 4.2, durationMin: 12 }
    },
    {
      id: 'txn_2026_04_08_nobu',
      postedAt: '2026-04-08T20:15:00-04:00',
      description: 'Nobu Restaurant',
      merchant: 'Nobu Restaurant NYC',
      amount: -184,
      direction: 'expense',
      categoryId: 'food',
      categoryName: 'Food & Drink',
      accountId: 'acct_credit_4829',
      cardId: 'card_signature_4829',
      paymentMethod: 'card',
      status: 'completed',
      tags: ['dining', 'largest_flexible']
    },
    {
      id: 'txn_2026_04_07_cvs',
      postedAt: '2026-04-07T11:10:00-04:00',
      description: 'CVS Pharmacy',
      merchant: 'CVS Pharmacy #8821',
      amount: -23.4,
      direction: 'expense',
      categoryId: 'health',
      categoryName: 'Health',
      accountId: 'acct_credit_4829',
      cardId: 'card_signature_4829',
      paymentMethod: 'card',
      status: 'completed'
    },
    {
      id: 'txn_2026_04_07_uniqlo',
      postedAt: '2026-04-07T14:30:00-04:00',
      description: 'Uniqlo',
      merchant: 'Uniqlo Fifth Avenue',
      amount: -87,
      direction: 'expense',
      categoryId: 'shopping',
      categoryName: 'Shopping',
      accountId: 'acct_credit_4829',
      cardId: 'card_signature_4829',
      paymentMethod: 'card',
      status: 'completed'
    },
    {
      id: 'txn_2026_04_06_freshdirect',
      postedAt: '2026-04-06T18:20:00-04:00',
      description: 'FreshDirect',
      merchant: 'FreshDirect',
      amount: -154.55,
      direction: 'expense',
      categoryId: 'food',
      categoryName: 'Food & Drink',
      accountId: 'acct_credit_4829',
      cardId: 'card_signature_4829',
      paymentMethod: 'card',
      status: 'completed',
      tags: ['groceries']
    },
    {
      id: 'txn_2026_04_06_doordash',
      postedAt: '2026-04-06T21:04:00-04:00',
      description: 'DoorDash',
      merchant: 'DoorDash',
      amount: -74.25,
      direction: 'expense',
      categoryId: 'food',
      categoryName: 'Food & Drink',
      accountId: 'acct_credit_4829',
      cardId: 'card_signature_4829',
      paymentMethod: 'card',
      status: 'completed',
      tags: ['delivery']
    },
    {
      id: 'txn_2026_04_05_icloud',
      postedAt: '2026-04-05T00:00:00-04:00',
      description: 'iCloud Storage 2TB',
      merchant: 'Apple Inc.',
      amount: -9.99,
      direction: 'expense',
      categoryId: 'subscriptions',
      categoryName: 'Subscriptions',
      accountId: 'acct_credit_4829',
      cardId: 'card_signature_4829',
      paymentMethod: 'card',
      status: 'completed',
      recurring: true,
      nextBillAt: '2026-05-05'
    },
    {
      id: 'txn_2026_04_05_amazon',
      postedAt: '2026-04-05T15:45:00-04:00',
      description: 'Amazon',
      merchant: 'Amazon Marketplace',
      amount: -142,
      direction: 'expense',
      categoryId: 'shopping',
      categoryName: 'Shopping',
      accountId: 'acct_credit_4829',
      cardId: 'card_signature_4829',
      paymentMethod: 'card',
      status: 'pending',
      reference: 'ORDER-123-456-789'
    },
    {
      id: 'txn_2026_04_05_freelance',
      postedAt: '2026-04-05T09:00:00-04:00',
      description: 'Freelance Payment',
      merchant: 'Design Studio Co.',
      amount: 2400,
      direction: 'income',
      categoryId: 'income_freelance',
      categoryName: 'Freelance',
      accountId: 'acct_checking_4829',
      paymentMethod: 'bank_transfer',
      status: 'completed',
      reference: 'INV-2026-042'
    },
    {
      id: 'txn_2026_04_04_sweetgreen',
      postedAt: '2026-04-04T12:36:00-04:00',
      description: 'Sweetgreen',
      merchant: 'Sweetgreen Bryant Park',
      amount: -18.6,
      direction: 'expense',
      categoryId: 'food',
      categoryName: 'Food & Drink',
      accountId: 'acct_credit_4829',
      cardId: 'card_signature_4829',
      paymentMethod: 'card',
      status: 'completed'
    },
    {
      id: 'txn_2026_04_04_mta',
      postedAt: '2026-04-04T08:15:00-04:00',
      description: 'MTA Auto Reload',
      merchant: 'MTA New York',
      amount: -132,
      direction: 'expense',
      categoryId: 'transport',
      categoryName: 'Transport',
      accountId: 'acct_credit_4829',
      cardId: 'card_signature_4829',
      paymentMethod: 'card',
      status: 'completed'
    },
    {
      id: 'txn_2026_04_03_trader_joes',
      postedAt: '2026-04-03T18:05:00-04:00',
      description: "Trader Joe's",
      merchant: "Trader Joe's",
      amount: -162.1,
      direction: 'expense',
      categoryId: 'food',
      categoryName: 'Food & Drink',
      accountId: 'acct_credit_4829',
      cardId: 'card_signature_4829',
      paymentMethod: 'card',
      status: 'completed',
      tags: ['groceries']
    },
    {
      id: 'txn_2026_04_03_parking',
      postedAt: '2026-04-03T19:22:00-04:00',
      description: 'Icon Parking',
      merchant: 'Icon Parking',
      amount: -89,
      direction: 'expense',
      categoryId: 'transport',
      categoryName: 'Transport',
      accountId: 'acct_credit_4829',
      cardId: 'card_signature_4829',
      paymentMethod: 'card',
      status: 'completed'
    },
    {
      id: 'txn_2026_04_02_momofuku',
      postedAt: '2026-04-02T20:42:00-04:00',
      description: 'Momofuku Ko',
      merchant: 'Momofuku Ko',
      amount: -210,
      direction: 'expense',
      categoryId: 'food',
      categoryName: 'Food & Drink',
      accountId: 'acct_credit_4829',
      cardId: 'card_signature_4829',
      paymentMethod: 'card',
      status: 'completed',
      tags: ['dining']
    },
    {
      id: 'txn_2026_04_02_lyft',
      postedAt: '2026-04-02T22:18:00-04:00',
      description: 'Lyft',
      merchant: 'Lyft Ride',
      amount: -48.8,
      direction: 'expense',
      categoryId: 'transport',
      categoryName: 'Transport',
      accountId: 'acct_credit_4829',
      cardId: 'card_signature_4829',
      paymentMethod: 'card',
      status: 'completed'
    },
    {
      id: 'txn_2026_04_01_rent',
      postedAt: '2026-04-01T09:00:00-04:00',
      description: 'Rent - April',
      merchant: 'Park Ave Properties',
      amount: -2100,
      direction: 'expense',
      categoryId: 'housing',
      categoryName: 'Housing',
      accountId: 'acct_checking_4829',
      paymentMethod: 'auto_transfer',
      status: 'completed',
      recurring: true,
      nextBillAt: '2026-05-01'
    },
    {
      id: 'txn_2026_04_01_netflix',
      postedAt: '2026-04-01T00:00:00-04:00',
      description: 'Netflix Standard',
      merchant: 'Netflix Inc.',
      amount: -15.49,
      direction: 'expense',
      categoryId: 'subscriptions',
      categoryName: 'Subscriptions',
      accountId: 'acct_credit_4829',
      cardId: 'card_signature_4829',
      paymentMethod: 'card',
      status: 'completed',
      recurring: true,
      nextBillAt: '2026-05-01'
    }
  ];

  const goals = [
    {
      id: 'goal_emergency_fund',
      name: 'Emergency Fund',
      targetAmount: 20000,
      currentAmount: 12400,
      remainingAmount: 7600,
      progressPct: 62,
      targetDate: '2026-12-31',
      priority: 'high'
    },
    {
      id: 'goal_europe_vacation',
      name: 'Europe Vacation',
      targetAmount: 5000,
      currentAmount: 1850,
      remainingAmount: 3150,
      progressPct: 37,
      targetDate: '2026-06-30',
      priority: 'medium'
    },
    {
      id: 'goal_macbook_pro',
      name: 'MacBook Pro M4',
      targetAmount: 3500,
      currentAmount: 2800,
      remainingAmount: 700,
      progressPct: 80,
      targetDate: '2026-05-31',
      priority: 'medium'
    },
    {
      id: 'goal_investment_topup',
      name: 'Investment Top-up',
      targetAmount: 10000,
      currentAmount: 4200,
      remainingAmount: 5800,
      progressPct: 42,
      targetDate: '2026-08-31',
      priority: 'medium'
    }
  ];

  const investments = [
    { ticker: 'AAPL', name: 'Apple Inc.', assetClass: 'stock', shares: 78.4, price: 189.42, dayChangePct: 1.24, value: 14844.53 },
    { ticker: 'MSFT', name: 'Microsoft Corp.', assetClass: 'stock', shares: 50, price: 418.85, dayChangePct: 0.87, value: 20942.5 },
    { ticker: 'NVDA', name: 'NVIDIA Corp.', assetClass: 'stock', shares: 20, price: 875.4, dayChangePct: 3.21, value: 17508 },
    { ticker: 'TSLA', name: 'Tesla Inc.', assetClass: 'stock', shares: 50, price: 172.63, dayChangePct: -2.14, value: 8631.5 },
    { ticker: 'VOO', name: 'Vanguard S&P 500', assetClass: 'etf', shares: 50, price: 484.2, dayChangePct: 0.62, value: 24210 },
    { ticker: 'BTC', name: 'Bitcoin', assetClass: 'crypto', shares: 0.2, price: 68420, dayChangePct: 4.55, value: 13684 },
    { ticker: 'AMZN', name: 'Amazon.com Inc.', assetClass: 'stock', shares: 50, price: 184.92, dayChangePct: 1.08, value: 9246 },
    { ticker: 'ETH', name: 'Ethereum', assetClass: 'crypto', shares: 2, price: 3240.5, dayChangePct: -0.93, value: 6481 }
  ];

  const analytics = {
    period: {
      id: '2026-04',
      label: 'April 2026',
      startDate: '2026-04-01',
      asOfDate: '2026-04-09',
      daysElapsed: 9,
      daysRemaining: 21
    },
    monthly: {
      income: 11600,
      budgeted: 5250,
      spent: 3482.87,
      budgetRoom: 1767.13,
      remainingDailyCap: 84.15,
      savingsRatePct: 70,
      healthScore: 74,
      paceScore: 54,
      largestFlexiblePurchase: {
        transactionId: 'txn_2026_04_08_nobu',
        merchant: 'Nobu Restaurant',
        amount: 184
      }
    },
    flexibleDailySpend: [
      { date: '2026-04-01', amount: 15.49 },
      { date: '2026-04-02', amount: 258.8 },
      { date: '2026-04-03', amount: 251.1 },
      { date: '2026-04-04', amount: 150.6 },
      { date: '2026-04-05', amount: 151.99 },
      { date: '2026-04-06', amount: 228.8 },
      { date: '2026-04-07', amount: 110.4 },
      { date: '2026-04-08', amount: 209.19 },
      { date: '2026-04-09', amount: 6.5 }
    ],
    monthlyComparison: [
      { month: '2026-04', label: 'April (current)', amount: 3482.87, budgetPct: 66 },
      { month: '2026-03', label: 'March', amount: 3184, budgetPct: 64 },
      { month: '2026-02', label: 'February', amount: 2940, budgetPct: 59 },
      { month: '2026-01', label: 'January', amount: 3560, budgetPct: 71 }
    ],
    insights: [
      {
        id: 'insight_budget_room',
        tone: 'positive',
        title: 'Budget room is still positive',
        body: '$1,767 remains from the monthly budget, or about $84 per day through Apr 30.',
        action: 'Keep daily flexible spend under $84.'
      },
      {
        id: 'insight_food_pace',
        tone: 'warning',
        title: 'Food is ahead of pace',
        body: 'Food & Drink is 81% used after 9 days because of two larger dining charges.',
        action: 'Keep remaining food spend under $9 per day.'
      },
      {
        id: 'insight_transport_limit',
        tone: 'critical',
        title: 'Transport needs a limit decision',
        body: 'Transport has $16 left against a $300 limit.',
        action: 'Freeze rideshares or raise the transport limit before the next commute.'
      }
    ]
  };

  const dataQuality = {
    sourceType: 'synthetic_seed',
    inspiredBy: [
      'Personal finance datasets with transaction-level rows and category labels',
      'Dashboard patterns that derive budgets, trends, and insights from transactions'
    ],
    checks: [
      {
        id: 'budget_spend_equals_category_sum',
        status: 'pass',
        detail: 'Monthly spend equals the sum of budget category spend: 3482.87.'
      },
      {
        id: 'income_equals_income_transaction_sum',
        status: 'pass',
        detail: 'Monthly income equals salary plus freelance deposits: 11600.'
      },
      {
        id: 'category_risk_has_budget_context',
        status: 'pass',
        detail: 'Each budget category includes limit, spent, remaining, usedPct, and risk.'
      }
    ]
  };

  window.VAULT_DATA = {
    version: '2026.04.seed.1',
    generatedAt: '2026-06-06T00:00:00Z',
    user,
    accounts,
    cards,
    budgetCategories,
    transactions,
    goals,
    investments,
    analytics,
    dataQuality
  };
})();
