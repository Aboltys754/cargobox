import Bot from './Bot';


export default class Sdek extends Bot {
    tempFolder = './temp/Sdek';

    access_token: string | null = null
    token_type: string | null = null
    expires_in: string | null = null
    scope: string | null = null
    jti: string | null = null

    

}