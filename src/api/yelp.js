import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer j76V9fHd5_I1sh5o9qaO0pYCJbW5au2wv-0IbN1iAEDAEJWXdYnaHMGWyGdNBK8wcMIhMPYK_cJIc0HrfO-Jh75LJnGmNfcht1BddtUEiuVc-J12EGo4ctyFswqWXXYx'
    }

});


