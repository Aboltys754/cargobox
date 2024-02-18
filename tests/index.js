const urlGetToken = 'https://api.edu.cdek.ru/v2/oauth/token?parameters'
const grantType = 'client_credentials'
const clientId = 'EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI'
const clientSecret = 'PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG'

// ответ по офисам полный
// {
//     "code": "CHEL11",
//     "name": "На Пушкина",
//     "uuid": "3e10e9e9-2232-459a-a809-4c41e366f99d",
//     "address_comment": "200м от ТРК Куба в сторону ул. Свободы, 60м направо от пересечения ул. К. Маркса и ул. Пушкина.",
//     "nearest_station": "ул. Цвиллинга",
//     "work_time": "Пн-Пт 10:00-20:00, Сб-Вс 10:00-16:00",
//     "phones": [
//         {
//             "number": "+79507333305"
//         }
//     ],
//     "email": "o.astahova@cdek.ru",
//     "note": "200м от ТРК Куба в сторону ул. Свободы, 60м направо от пересечения ул. К. Маркса и ул. Пушкина.",
//     "type": "PVZ",
//     "owner_code": "CDEK",
//     "take_only": false,
//     "is_handout": true,
//     "is_reception": true,
//     "is_dressing_room": true,
//     "is_ltl": false,
//     "have_cashless": true,
//     "have_cash": true,
//     "allowed_cod": true,
//     "office_image_list": [
//         {
//             "url": "edu.api-pvz.imageRepository.service.cdek.tech:8008/images/1321/88_1_CHEL11"
//         },
//         {
//             "url": "edu.api-pvz.imageRepository.service.cdek.tech:8008/images/1321/90_3_CHEL11"
//         },
//         {
//             "url": "edu.api-pvz.imageRepository.service.cdek.tech:8008/images/1321/89_2_CHEL11"
//         }
//     ],
//     "work_time_list": [
//         {
//             "day": 1,
//             "time": "10:00/20:00"
//         },
//         {
//             "day": 2,
//             "time": "10:00/20:00"
//         },
//         {
//             "day": 3,
//             "time": "10:00/20:00"
//         },
//         {
//             "day": 4,
//             "time": "10:00/20:00"
//         },
//         {
//             "day": 5,
//             "time": "10:00/20:00"
//         },
//         {
//             "day": 6,
//             "time": "10:00/16:00"
//         },
//         {
//             "day": 7,
//             "time": "10:00/16:00"
//         }
//     ],
//     "weight_min": 0.0,
//     "weight_max": 30.0,
//     "location": {
//         "country_code": "RU",
//         "region_code": 3,
//         "region": "Челябинская область",
//         "city_code": 259,
//         "city": "Челябинск",
//         "postal_code": "454091",
//         "longitude": 61.409184,
//         "latitude": 55.164833,
//         "address": "Ул. Пушкина, 25",
//         "address_full": "454091, Россия, Челябинская область, Челябинск, Ул. Пушкина, 25"
//     },
//     "fulfillment": false
// },

// Ответ по Городам

// [{
//     "code": 259,
//     "city_uuid": "856de44b-c8e4-4890-898d-50088dc00656",
//     "city": "Челябинск",
//     "kladr_code": "7400000100000",
//     "country_code": "RU",
//     "country": "Россия",
//     "region": "Челябинская область",
//     "region_code": 3,
//     "sub_region": "Челябинский городской округ",
//     "longitude": 61.4026,
//     "latitude": 55.16,
//     "time_zone": "Asia/Yekaterinburg",
//     "payment_limit": -1.0
// },]

// То что записываю в базу по офисам

// {
//     "name": "На Пушкина",
//     "uuid": "3e10e9e9-2232-459a-a809-4c41e366f99d",
//     "work_time": "Пн-Пт 10:00-20:00, Сб-Вс 10:00-16:00",
//     "email": "o.astahova@cdek.ru",
//     "country_code": "RU",
//     "region_code": 3,
//     "region": "Челябинская область",
//     "city_code": 259,
//     "city": "Челябинск",
//     "postal_code": "454091",
//     "address": "Ул. Пушкина, 25",
// },

// То что записываю по городам в базу

// {
    //     "code": 259,
    //     "city_uuid": "856de44b-c8e4-4890-898d-50088dc00656",
    //     "city": "Челябинск",
    //     "kladr_code": "7400000100000",
    //     "country_code": "RU",
    //     "region": "Челябинская область",
    //     "region_code": 3,
    // }