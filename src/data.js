const DATA = [
    {
        email: "admin@admin.com",
        password: "abc123",
        fullname: "Admin Account",
        type: "Savings Peso",
        number: "47290539480",
        balance: 1000,
        isAdmin: true, 
        transactions: []
    },
    {
        email: "sonu@gmail.com",
        password: "abc123",
        fullname: "sonu kumar",
        type: "Savings Peso",
        number: "47290539481",
        balance: 1029300.43,
        isAdmin: true, 
        transactions: []
    },
    {
        email: "vikash1@gmail.com",
        password: "abc123",
        fullname: "vikash kumar",
        type: "Savings Peso",
        number: "47290539482",
        balance: 392830.22,
        isAdmin: false, 
        budget: [
            {
                title: "Tuition fee",
                amount: 12000
            },
            {
                title: "Food take out during the pandemic",
                amount: 4000
            }
        ], 
        transactions: [
            {
                title: "Fund transfer", 
                amount: 2000,
                type: "debit", 
                date: "October 1, 2022"
            }, 
            {
                title: "Withdraw", 
                amount: 10000, 
                type: "debit",
                date: "October 1, 2022"
            }
        ]
    },
    {
        email: "user24@gmail.com",
        password: "abc123",
        fullname: "Mohan kumar",
        type: "Savings Peso",
        number: "47290539483",
        balance: 102938.34,
        isAdmin: false, 
        transactions: []
    },
    {
        email: "user34@gmail.com",
        password: "abc123",
        fullname: "Sanoj kumar",
        type: "Checking Peso",
        number: "47290539484",
        balance: 837495.38, 
        isAdmin: false, 
        transactions: []
    },

    {
        email: "derek@gmail.com",
        password: "abc123",
        fullname: "Raj Kumar",
        type: "Checking Peso",
        number: "47290539485",
        balance: 574839.58, 
        isAdmin: false, 
        transactions: []
    },
    {
        email: "client@client.com",
        password: "abc123",
        fullname: "Client Demo Account",
        type: "Savings Peso",
        number: "47290539486",
        balance: 1000,
        isAdmin: false, 
        transactions: []
    }
];

export default DATA;
