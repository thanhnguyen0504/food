import axios from 'axios';

export default axios.create({
    baseURL: 'http://api.yelp.com/v3/businesses',
    // baseURL: 'http://151.101.0.116/v3/businesses',
    headers: {
        'Authorization': 'Bearer h3nbCXgYG9K4Hpa-VYt-uAHbBg1fAeCtUPA1YQoEHBLTLQJnPRldLoR--VXLy6TBD9Dt8Zo_q5W7yJ6KFR-5SBsGIK5Y1qln55nztDiZHSoMKDwp57SSewtAMgG5XXYx',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Header': 'Origin, X-Requested-With, Content-Type, Accept'
    }
});

