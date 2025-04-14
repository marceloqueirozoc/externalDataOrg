const recordMetadata = {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    gender: 'gender',
    ip_address: 'ip_address',
};
const ENDPOINT ='https://my.api.mockaroo.com/users.json?key=79ce0460'; //API endpoint
const POST_METHOD = 'POST'; //POST method
const CONTENT_TYPE = 'application/json; charset=utf-8';
export default function fetchDataHelper({ amountOfRecords }) {
    /* The global fetch() method starts the process of fetching a resource from the network,
     returning a promise which is fulfilled once the response is available.
    */
    return fetch(ENDPOINT, {
        method: POST_METHOD,
        headers: {
            'Content-Type': CONTENT_TYPE,
        },
        body: JSON.stringify({
            amountOfRecords,
            recordMetadata,
        }),
    }).then((response) => response.json());
}