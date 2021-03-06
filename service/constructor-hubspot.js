const api_key = process.env.API_KEY;
const crmSearch = `https://api.hubapi.com/crm/v3/objects/contacts/search?hapikey=${api_key}`

exports.objBuild = (searchInput, nextPage) => {
    let objSetup = {
        method: 'POST',
        url: crmSearch,
        headers: {
            accept: 'application/json', 
            'content-type': 'application/json',
        },
        data: {
            query: searchInput,
            properties: [
                "firstname",
                "lastname",
                "jobtitle",
                "phone",
                "email",
                "address",
                "state",
                "city",
                "zip",
                "contact_type",
                "cs_do_not_call",
                "cs_do_not_email",
                "cs_is_active",
                "cs_is_accredited",
                "cs_is_investor",
                "cs_average_investment_amount",
                "cs_is_registered"
            ],
            limit: 100,
            after: nextPage.toString(),
        }
    }
    return objSetup; 
};