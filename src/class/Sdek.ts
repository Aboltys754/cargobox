import Bot from './Bot';
import * as db from '../libs/db';
import { loggerChildProcess } from '../libs/logger';


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

    parentSend(message: string) {
      switch (message) {
        case 'update':
          if (this.state.act !== 'run_sdek') {
            this.send({ message: 'sdek catalog update start' });
            this.update();
          } else {
            this.send({ error: 'bot run ...' });
          }
          break;
        default: super.parentSend(message);
      }
    }    

    get_access_token() {
        return this.access_token
    }

    get_jti() {
        return this.jti
    }    

    async update() {
      this.state.act = 'run';
      this.error = undefined;
  
      try {
        await Promise.resolve()
          .then(() => this.set_access_json())
          .then(() => this.createTableDeliverypoints())
          .then(() => this.createTableCities())
          .then(() => this.downloadDeliverypoints())
          // .then(() => this.extractKLADR())
  
          // .then(() => this.createTableStreets())
          // .then(() => this.getKladrStreets())
          // .then(streets => this.addStreets(streets))
  
          // .then(() => this.createTableCities())
          // .then(() => this.getKladrCities())
          // .then(cities => this.addCities(cities))
          // .then(() => this.processedCities())
  
          // .then(() => this.createTableIndexes())
          // .then(() => this.dropTableStreets())
  
          .catch((error) => { throw error; });
  
      } catch (error) {
        if (error instanceof Error) {
          loggerChildProcess.error(`error update SDEK: ${error.message}`);
          this.error = error;
        }
      }
  
      this.state.act = 'wait';
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

    async downloadDeliverypoints() {
      const deliv = await fetch(`https://api.edu.cdek.ru/v2/deliverypoints`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.access_token}`
        }
      })

      const res = await deliv.json()
      console.log(res)
    }


}