const urlGetToken = 'https://api.edu.cdek.ru/v2/oauth/token?parameters'
const grantType = 'client_credentials'
const clientId = 'EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI'
const clientSecret = 'PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG'


class TokenJson {

    constructor() {
        this.access_token = null,
        this.token_type = null,
        this.expires_in = null,
        this.scope = null,
        this.jti = null
    }

    get_access_token() {
        return this.access_token
    }

    get_jti() {
        return this.jti
    }

    set_access_json(access_json) {
        this.access_token = access_json.access_token,
        this.token_type = access_json.token_type,
        this.expires_in = access_json.expires_in,
        this.scope = access_json.scope,
        this.jti = access_json.jti
    }

}

const tokenJson = new TokenJson();


// Получение токенов
async function getTokens(url_get_token, client_credentials, client_id, client_secret) {
    const tokens = await fetch(`${url_get_token}&grant_type=${client_credentials}&client_id=${client_id}&client_secret=${client_secret}`, {
        method: 'POST',
    })

    const res = await tokens.json()
    .then((r) => {
        console.log(r)
        tokenJson.set_access_json(r)
    });    
}

// Получение списка офисов
async function getDeliverypoints() {
    const deliv = await fetch(`https://api.edu.cdek.ru/v2/deliverypoints?size=1`, {
        headers: {
            Authorization: `Bearer ${tokenJson.access_token}`
        }
    });

    const res = await deliv.json();
    console.log(res);
}

getTokens(urlGetToken, grantType, clientId, clientSecret);
console.log(tokenJson.get_access_token());
// getDeliverypoints();