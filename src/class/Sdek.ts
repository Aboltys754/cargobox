import Bot from './Bot';
import * as db from '../libs/db';


const urlGetToken = 'https://api.edu.cdek.ru/v2/oauth/token?parameters'
const grantType = 'client_credentials'
const clientId = 'EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI'
const clientSecret = 'PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG'


export default class Sdek extends Bot {
    tempFolder = './temp/Sdek';

    access_token: string | null = null
    token_type: string | null = null
    expires_in: string | null = null
    scope: string | null = null
    jti: string | null = null

    get_access_token() {
        return this.access_token
    }

    get_jti() {
        return this.jti
    }

    async set_access_json() {
        const tokens = await fetch(`${urlGetToken}&grant_type=${grantType}&client_id=${clientId}&client_secret=${clientSecret}`, {
            method: 'POST',
        })
    
        const res = await tokens.json()
        .then((access_json) => {
            this.access_token = access_json.access_token,
            this.token_type = access_json.token_type,
            this.expires_in = access_json.expires_in,
            this.scope = access_json.scope,
            this.jti = access_json.jti
        });        
    }

    async createTableDeliverypoints() {
        return db.query(`
          CREATE TABLE _deliverypoints_sdek (
            id SERIAL PRIMARY KEY,
            name text,
            uuid text,
            work_time text,
            email text,
            country_code text,
            region_code text,
            region text,
            city_code text
            city text
            postal_code text
            address text
          )
        `)
      }

    async createTableCities() {
        return db.query(`
          CREATE TABLE _cities_sdek (
            id SERIAL PRIMARY KEY,
            code integer,
            city_uuid text,
            city text,
            kladr_code text,
            country_code text,
            region text,
            region_code text,
          )
        `)
    }


}