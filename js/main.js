const converter = {
    area: {
        name: 'Area',
        units: {
            squareKM: 'Square Kilometer',
            squareM: 'Square Meter',
            squareMile: 'Square Mile',
            squareYard: 'Square Yard',
            squareFoot: 'Square Foot',
            squareInch: 'Square Inch',
            hectare: 'Hectare',
            acre: 'Acre',
        },
        variants: {
            'squareKM:squareM': {
                formulla: 'multiply the area value by 1e+6',
                calculation(n) {
                    return n * new Number('1e+6')
                }
            },
            'squareKM:squareMile': {
                formulla: 'divide the area value by 2.59',
                calculation(n) {
                    return n / 2.59
                }
            },
            'squareKM:squareYard': {
                formulla: 'multiply the area value by 1.196e+6',
                calculation(n) {
                    return n * new Number('1.196e+6')
                }
            },
            'squareKM:squareFoot': {
                formulla: 'for an approximate result, multiply the area value by 1.076e+7',
                calculation(n) {
                    return n * new Number('1.076e+7')
                }
            },
            'squareKM:squareInch': {
                formulla: 'multiply the area value by 1.55e+9',
                calculation(n) {
                    return n * new Number('1.55e+9')
                }
            },
            'squareKM:hectare': {
                formulla: 'multiply the area value by 100',
                calculation(n) {
                    return n * 100
                }
            },
            'squareKM:acre': {
                formulla: 'for an approximate result, multiply the area value by 247.1',
                calculation(n) {
                    return n * 247.1
                }
            },



            'squareM:squareKM': {
                formulla: 'divide the area value by 1e+6',
                calculation(n) {
                    return n / new Number('1e+6')
                }
            },
            'squareM:squareMile': {
                formulla: 'divide the area value by 2.59e+6',
                calculation(n) {
                    return n / new Number('2.59e+6')
                }
            },
            'squareM:squareYard': {
                formulla: 'multiply the area value by 1.196',
                calculation(n) {
                    return n * 1.196
                }
            },
            'squareM:squareFoot': {
                formulla: 'multiply the area value by 10.764',
                calculation(n) {
                    return n * 10.764
                }
            },
            'squareM:squareInch': {
                formulla: 'for an approximate result, multiply the area value by 1550',
                calculation(n) {
                    return n * 1550
                }
            },
            'squareM:hectare': {
                formulla: 'divide the area value by 10000',
                calculation(n) {
                    return n * 10000
                }
            },
            'squareM:acre': {
                formulla: 'for an approximate result, divide the area value by 4047',
                calculation(n) {
                    return n * 4047
                }
            },




            'squareMile:squareKM': {
                formulla: 'multiply the area value by 2.59',
                calculation(n) {
                    return n * 2.59
                }
            },
            'squareMile:squareM': {
                formulla: 'multiply the area value by 2.59e+6',
                calculation(n) {
                    return n * new Number('2.59e+6')
                }
            },
            'squareMile:squareYard': {
                formulla: 'for an approximate result, multiply the area value by 3.098e+6',
                calculation(n) {
                    return n * new Number('3.098e+6')
                }
            },
            'squareMile:squareFoot': {
                formulla: 'for an approximate result, multiply the area value by 2.788e+7',
                calculation(n) {
                    return n * new Number('2.788e+7')
                }
            },
            'squareMile:squareInch': {
                formulla: 'for an approximate result, multiply the area value by 4.014e+9',
                calculation(n) {
                    return n * new Number('4.014e+9')
                }
            },
            'squareMile:hectare': {
                formulla: 'for an approximate result, multiply the area value by 259',
                calculation(n) {
                    return n * 259
                }
            },
            'squareMile:acre': {
                formulla: 'multiply the area value by 640',
                calculation(n) {
                    return n * 640
                }
            },




            'squareYard:squareKM': {
                formulla: 'divide the area value by 1.196e+6',
                calculation(n) {
                    return n / new Number('1.196e+6')
                }
            },
            'squareYard:squareM': {
                formulla: 'divide the area value by 1.196',
                calculation(n) {
                    return n / 1.196
                }
            },
            'squareYard:squareMile': {
                formulla: 'for an approximate result, divide the area value by 3.098e+6',
                calculation(n) {
                    return n / new Number('3.098e+6')
                }
            },
            'squareYard:squareFoot': {
                formulla: 'multiply the area value by 9',
                calculation(n) {
                    return n * 9
                }
            },
            'squareYard:squareInch': {
                formulla: 'multiply the area value by 1296',
                calculation(n) {
                    return n * 1296
                }
            },
            'squareYard:hectare': {
                formulla: 'for an approximate result, divide the area value by 11960',
                calculation(n) {
                    return n / 11960
                }
            },
            'squareYard:acre': {
                formulla: 'divide the area value by 4840',
                calculation(n) {
                    return n / 4840
                }
            },




            'squareFoot:squareKM': {
                formulla: 'for an approximate result, divide the area value by 1.076e+7',
                calculation(n) {
                    return n / new Number('1.076e+7')
                }
            },
            'squareFoot:squareM': {
                formulla: 'divide the area value by 10.764',
                calculation(n) {
                    return n / 10.764
                }
            },
            'squareFoot:squareMile': {
                formulla: 'for an approximate result, divide the area value by 2.788e+7',
                calculation(n) {
                    return n / new Number('2.788e+7')
                }
            },
            'squareFoot:squareYard': {
                formulla: 'divide the area value by 9',
                calculation(n) {
                    return n / 9
                }
            },
            'squareFoot:squareInch': {
                formulla: 'multiply the area value by 144',
                calculation(n) {
                    return n * 144
                }
            },
            'squareFoot:hectare': {
                formulla: 'for an approximate result, divide the area value by 107600',
                calculation(n) {
                    return n / 107600
                }
            },
            'squareFoot:acre': {
                formulla: 'divide the area value by 43560',
                calculation(n) {
                    return n / 43560
                }
            },



            'squareInch:squareKM': {
                formulla: 'divide the area value by 1.55e+9',
                calculation(n) {
                    return n / new Number('1.55e+9')
                }
            },
            'squareInch:squareM': {
                formulla: 'for an approximate result, divide the area value by 1550',
                calculation(n) {
                    return n / 1550
                }
            },
            'squareInch:squareMile': {
                formulla: 'for an approximate result, divide the area value by 4.014e+9',
                calculation(n) {
                    return n / new Number('4.014e+9')
                }
            },
            'squareInch:squareYard': {
                formulla: 'divide the area value by 1296',
                calculation(n) {
                    return n / 1296
                }
            },
            'squareInch:squareFoot': {
                formulla: 'divide the area value by 144',
                calculation(n) {
                    return n / 144
                }
            },
            'squareInch:hectare': {
                formulla: 'divide the area value by 1.55e+7',
                calculation(n) {
                    return n / new Number('1.55e+7')
                }
            },
            'squareInch:acre': {
                formulla: 'for an approximate result, divide the area value by 6.273e+6',
                calculation(n) {
                    return n / new Number('6.273e+6')
                }
            },



            'hectare:squareKM': {
                formulla: 'divide the area value by 100',
                calculation(n) {
                    return n / 100
                }
            },
            'hectare:squareM': {
                formulla: 'multiply the area value by 10000',
                calculation(n) {
                    return n * 10000
                }
            },
            'hectare:squareMile': {
                formulla: 'for an approximate result, divide the area value by 259',
                calculation(n) {
                    return n / 259
                }
            },
            'hectare:squareYard': {
                formulla: 'for an approximate result, multiply the area value by 11960',
                calculation(n) {
                    return n * 11960
                }
            },
            'hectare:squareFoot': {
                formulla: 'for an approximate result, multiply the area value by 107600',
                calculation(n) {
                    return n * 107600
                }
            },
            'hectare:squareInch': {
                formulla: 'multiply the area value by 1.55e+7',
                calculation(n) {
                    return n * new Number('1.55e+7')
                }
            },
            'hectare:acre': {
                formulla: 'multiply the area value by 2.471',
                calculation(n) {
                    return n * 2.471
                }
            },




            'acre:squareKM': {
                formulla: 'for an approximate result, divide the area value by 247.1',
                calculation(n) {
                    return n / 247.1
                }
            },
            'acre:squareM': {
                formulla: 'for an approximate result, multiply the area value by 4047',
                calculation(n) {
                    return n * 4047
                }
            },
            'acre:squareMile': {
                formulla: 'divide the area value by 640',
                calculation(n) {
                    return n / 640
                }
            },
            'acre:squareYard': {
                formulla: 'multiply the area value by 4840',
                calculation(n) {
                    return n * 4840
                }
            },
            'acre:squareFoot': {
                formulla: 'multiply the area value by 43560',
                calculation(n) {
                    return n * 43560
                }
            },
            'acre:squareInch': {
                formulla: 'for an approximate result, multiply the area value by 6.273e+6',
                calculation(n) {
                    return n * new Number('6.273e+6')
                }
            },
            'acre:hectare': {
                formulla: 'divide the area value by 2.471',
                calculation(n) {
                    return n / 2.471
                }
            },

        }
    },

    length: {
        name: 'Length',
        units: {
            kiloMeter: 'Kilometer',
            metre: 'Metre',
            centiMetre: 'Centimetre',
            miliMetre: 'Milimetre',
            microMetre: 'Micrometre',
            nanoMetre: 'Nanometre',
            mile: 'Mile',
            yard: 'Yard',
            foot: 'Foot',
            nauticalMile: 'Nautical Mile',
        },
        variants: {
            'kiloMeter:metre': {
                formulla: 'multiply the length value by 1000',
                calculation(n) {
                    return n * 1000
                }
            },
            'kiloMeter:centiMetre': {
                formulla: 'multiply the length value by 100000',
                calculation(n) {
                    return n * 100000
                }
            },
            'kiloMeter:miliMetre': {
                formulla: 'multiply the length value by 1e+6',
                calculation(n) {
                    return n * new Number('1e+6')
                }
            },
            'kiloMeter:microMetre': {
                formulla: 'multiply the length value by 1e+9',
                calculation(n) {
                    return n * new Number('1e+9')
                }
            },
            'kiloMeter:nanoMetre': {
                formulla: 'for an approximate result, multiply the length value by 1e+12',
                calculation(n) {
                    return n * new Number('1e+12')
                }
            },
            'kiloMeter:mile': {
                formulla: 'for an approximate result, divide the length value by 1.609',
                calculation(n) {
                    return n / 1.609
                }
            },
            'kiloMeter:yard': {
                formulla: 'for an approximate result, multiply the length value by 1094',
                calculation(n) {
                    return n * 1094
                }
            },
            'kiloMeter:foot': {
                formulla: 'for an approximate result, multiply the length value by 3281',
                calculation(n) {
                    return n * 3281
                }
            },
            'kiloMeter:nauticalMile': {
                formulla: 'divide the length value by 1.852',
                calculation(n) {
                    return n / 1.852
                }
            },


            'metre:kiloMeter': {
                formulla: 'divide the length value by 1000',
                calculation(n) {
                    return n / 1000
                }
            },
            'metre:centiMetre': {
                formulla: 'multiply the length value by 100',
                calculation(n) {
                    return n * 100
                }
            },
            'metre:miliMetre': {
                formulla: 'multiply the length value by 1000',
                calculation(n) {
                    return n * 1000
                }
            },
            'metre:microMetre': {
                formulla: 'multiply the length value by 1e+6',
                calculation(n) {
                    return n * new Number('1e+6')
                }
            },
            'metre:nanoMetre': {
                formulla: 'for an approximate result, multiply the length value by 1e+9',
                calculation(n) {
                    return n * new Number('1e+9')
                }
            },
            'metre:mile': {
                formulla: 'for an approximate result, divide the length value by 1609',
                calculation(n) {
                    return n / 1609
                }
            },
            'metre:yard': {
                formulla: 'for an approximate result, multiply the length value by 1.094',
                calculation(n) {
                    return n * 1.094
                }
            },
            'metre:foot': {
                formulla: 'for an approximate result, multiply the length value by 3.281',
                calculation(n) {
                    return n * 3.281
                }
            },
            'metre:nauticalMile': {
                formulla: 'divide the length value by 1852',
                calculation(n) {
                    return n / 1852
                }
            },


            'centiMetre:kiloMeter': {
                formulla: 'divide the length value by 100000',
                calculation(n) {
                    return n / 100000
                }
            },
            'centiMetre:metre': {
                formulla: 'divide the length value by 100',
                calculation(n) {
                    return n / 100
                }
            },
            'centiMetre:miliMetre': {
                formulla: 'multiply the length value by 10',
                calculation(n) {
                    return n * 10
                }
            },
            'centiMetre:microMetre': {
                formulla: 'multiply the length value by 10000',
                calculation(n) {
                    return n * 10000
                }
            },
            'centiMetre:nanoMetre': {
                formulla: 'multiply the length value by 1e+7',
                calculation(n) {
                    return n * new Number('1e+7')
                }
            },
            'centiMetre:mile': {
                formulla: 'for an approximate result, divide the length value by 160900',
                calculation(n) {
                    return n / 160900
                }
            },
            'centiMetre:yard': {
                formulla: 'divide the length value by 91.44',
                calculation(n) {
                    return n / 91.44
                }
            },
            'centiMetre:foot': {
                formulla: 'divide the length value by 30.48',
                calculation(n) {
                    return n / 30.48
                }
            },
            'centiMetre:nauticalMile': {
                formulla: 'divide the length value by 185200',
                calculation(n) {
                    return n / 185200
                }
            },


            'miliMetre:kiloMeter': {
                formulla: 'divide the length value by 1e+6',
                calculation(n) {
                    return n / new Number('1e+6')
                }
            },
            'miliMetre:metre': {
                formulla: 'divide the length value by 1000',
                calculation(n) {
                    return n / 1000
                }
            },
            'miliMetre:centiMetre': {
                formulla: 'divide the length value by 10',
                calculation(n) {
                    return n / 10
                }
            },
            'miliMetre:microMetre': {
                formulla: 'multiply the length value by 1000',
                calculation(n) {
                    return n * 1000
                }
            },
            'miliMetre:nanoMetre': {
                formulla: 'multiply the length value by 1e+6',
                calculation(n) {
                    return n * new Number('1e+6')
                }
            },
            'miliMetre:mile': {
                formulla: 'for an approximate result, divide the length value by 1.609e+6',
                calculation(n) {
                    return n / new Number('1.609e+6')
                }
            },
            'miliMetre:yard': {
                formulla: 'divide the length value by 914.4',
                calculation(n) {
                    return n / 914.4
                }
            },
            'miliMetre:foot': {
                formulla: 'divide the length value by 304.8',
                calculation(n) {
                    return n / 304.8
                }
            },
            'miliMetre:nauticalMile': {
                formulla: 'divide the length value by 1.852e+6',
                calculation(n) {
                    return n / new Number('1.852e+6')
                }
            },


            'microMetre:kiloMeter': {
                formulla: 'divide the length value by 1e+9',
                calculation(n) {
                    return n / new Number('1e+9')
                }
            },
            'microMetre:metre': {
                formulla: 'divide the length value by 1e+6',
                calculation(n) {
                    return n / new Number('1e+6')
                }
            },
            'microMetre:centiMetre': {
                formulla: 'divide the length value by 10000',
                calculation(n) {
                    return n / new Number('1.852e+6')
                }
            },
            'microMetre:miliMetre': {
                formulla: 'divide the length value by 1.852e+6',
                calculation(n) {
                    return n / 10000
                }
            },
            'microMetre:nanoMetre': {
                formulla: 'multiply the length value by 1000',
                calculation(n) {
                    return n * 1000
                }
            },
            'microMetre:mile': {
                formulla: 'for an approximate result, divide the length value by 1.609e+9',
                calculation(n) {
                    return n / new Number('1.609e+9')
                }
            },
            'microMetre:yard': {
                formulla: 'divide the length value by 914400',
                calculation(n) {
                    return n / 914400
                }
            },
            'microMetre:foot': {
                formulla: 'divide the length value by 304800',
                calculation(n) {
                    return n / 304800
                }
            },
            'microMetre:nauticalMile': {
                formulla: 'divide the length value by 1.852e+9',
                calculation(n) {
                    return n / new Number('1.852e+9')
                }
            },


            'nanoMetre:kiloMeter': {
                formulla: 'divide the length value by 1e+12',
                calculation(n) {
                    return n / new Number('1e+12')
                }
            },
            'nanoMetre:metre': {
                formulla: 'divide the length value by 1e+9',
                calculation(n) {
                    return n / new Number('1e+9')
                }
            },
            'nanoMetre:centiMetre': {
                formulla: 'divide the length value by 1e+7',
                calculation(n) {
                    return n / new Number('1e+7')
                }
            },
            'nanoMetre:miliMetre': {
                formulla: 'divide the length value by 1e+6',
                calculation(n) {
                    return n / new Number('1e+6')
                }
            },
            'nanoMetre:microMetre': {
                formulla: 'divide the length value by 1000',
                calculation(n) {
                    return n / 1000
                }
            },
            'nanoMetre:mile': {
                formulla: 'for an approximate result, divide the length value by 1.609e+12',
                calculation(n) {
                    return n / new Number('1.609e+12')
                }
            },
            'nanoMetre:yard': {
                formulla: 'divide the length value by 9.144e+8',
                calculation(n) {
                    return n / new Number('9.144e+8')
                }
            },
            'nanoMetre:foot': {
                formulla: 'divide the length value by 3.048e+8',
                calculation(n) {
                    return n / new Number('3.048e+8')
                }
            },
            'nanoMetre:nauticalMile': {
                formulla: 'divide the length value by 1.852e+12',
                calculation(n) {
                    return n / new Number('1.852e+12')
                }
            },


            'mile:kiloMeter': {
                formulla: 'for an approximate result, multiply the length value by 1.609',
                calculation(n) {
                    return n * 1.609

                }
            },
            'mile:metre': {
                formulla: 'for an approximate result, multiply the length value by 1609',
                calculation(n) {
                    return n * 1609
                }
            },
            'mile:centiMetre': {
                formulla: 'for an approximate result, multiply the length value by 160900',
                calculation(n) {
                    return n * 160900
                }
            },
            'mile:miliMetre': {
                formulla: 'for an approximate result, multiply the length value by 1.609e+6',
                calculation(n) {
                    return n * new Number('1.609e+6')
                }
            },
            'mile:microMetre': {
                formulla: 'for an approximate result, multiply the length value by 1.609e+9',
                calculation(n) {
                    return n * new Number('1.609e+9')
                }
            },
            'mile:nanoMetre': {
                formulla: 'for an approximate result, multiply the length value by 1.609e+12',
                calculation(n) {
                    return n * new Number('1.609e+12')
                }
            },
            'mile:yard': {
                formulla: 'multiply the length value by 1760',
                calculation(n) {
                    return n * 1760
                }
            },
            'mile:foot': {
                formulla: 'multiply the length value by 5280',
                calculation(n) {
                    return n * 5280
                }
            },
            'mile:nauticalMile': {
                formulla: 'for an approximate result, divide the length value by 1.151',
                calculation(n) {
                    return n / 1.151
                }
            },


            'yard:kiloMeter': {
                formulla: 'for an approximate result, divide the length value by 1094',
                calculation(n) {
                    return n / 1094
                }
            },
            'yard:metre': {
                formulla: 'for an approximate result, divide the length value by 1.094',
                calculation(n) {
                    return n / 1.094
                }
            },
            'yard:centiMetre': {
                formulla: 'multiply the length value by 91.44',
                calculation(n) {
                    return n * 91.44
                }
            },
            'yard:miliMetre': {
                formulla: 'multiply the length value by 914.4',
                calculation(n) {
                    return n * 914.4
                }
            },
            'yard:microMetre': {
                formulla: 'multiply the length value by 914400',
                calculation(n) {
                    return n * 914400
                }
            },
            'yard:nanoMetre': {
                formulla: 'multiply the length value by 9.144e+8',
                calculation(n) {
                    return n * new Number('9.144e+8')
                }
            },
            'yard:mile': {
                formulla: 'divide the length value by 1760',
                calculation(n) {
                    return n / 1760
                }
            },
            'yard:foot': {
                formulla: 'multiply the length value by 3',
                calculation(n) {
                    return n * 3
                }
            },
            'yard:nauticalMile': {
                formulla: 'for an approximate result, divide the length value by 2025',
                calculation(n) {
                    return n / 2025
                }
            },


            'foot:kiloMeter': {
                formulla: 'for an approximate result, divide the length value by 3281',
                calculation(n) {
                    return n / 3281
                }
            },
            'foot:metre': {
                formulla: 'for an approximate result, divide the length value by 3.281',
                calculation(n) {
                    return n / 3.281
                }
            },
            'foot:centiMetre': {
                formulla: 'multiply the length value by 30.48',
                calculation(n) {
                    return n * 30.48
                }
            },
            'foot:miliMetre': {
                formulla: 'multiply the length value by 304.8',
                calculation(n) {
                    return n * 304.8
                }
            },
            'foot:microMetre': {
                formulla: 'multiply the length value by 304800',
                calculation(n) {
                    return n * 304800
                }
            },
            'foot:nanoMetre': {
                formulla: 'multiply the length value by 3.048e+8',
                calculation(n) {
                    return n * new Number('3.048e+8')
                }
            },
            'foot:mile': {
                formulla: 'divide the length value by 5280',
                calculation(n) {
                    return n / 5280
                }
            },
            'foot:yard': {
                formulla: 'divide the length value by 3',
                calculation(n) {
                    return n / 3
                }
            },
            'foot:nauticalMile': {
                formulla: 'for an approximate result, divide the length value by 6076',
                calculation(n) {
                    return n / 6076
                }
            },


            'nauticalMile:kiloMeter': {
                formulla: 'multiply the length value by 1.852',
                calculation(n) {
                    return n * 1.852
                }
            },
            'nauticalMile:metre': {
                formulla: 'multiply the length value by 1852',
                calculation(n) {
                    return n * 1852
                }
            },
            'nauticalMile:centiMetre': {
                formulla: 'multiply the length value by 185200',
                calculation(n) {
                    return n * 185200
                }
            },
            'nauticalMile:miliMetre': {
                formulla: 'multiply the length value by 1.852e+6',
                calculation(n) {
                    return n * new Number('1.852e+6')
                }
            },
            'nauticalMile:microMetre': {
                formulla: 'multiply the length value by 1.852e+9',
                calculation(n) {
                    return n * new Number('1.852e+9')
                }
            },
            'nauticalMile:nanoMetre': {
                formulla: 'multiply the length value by 1.852e+12',
                calculation(n) {
                    return n * new Number('1.852e+12')
                }
            },
            'nauticalMile:mile': {
                formulla: 'for an approximate result, multiply the length value by 1.151',
                calculation(n) {
                    return n * 1.151
                }
            },
            'nauticalMile:yard': {
                formulla: 'for an approximate result, multiply the length value by 2025',
                calculation(n) {
                    return n * 2025
                }
            },
            'nauticalMile:foot': {
                formulla: 'for an approximate result, multiply the length value by 6076',
                calculation(n) {
                    return n * 6076
                }
            },
        }
    },

    mass: {
        name: 'Mass',
        units: {
            tonne: 'Tonne',
            kiloGram: 'Kilogram',
            miliGram: 'Miligram',
            microGram: 'Microgram',
            imperialTone: 'Imperial Ton',
            usTon: 'Us Ton',
            stone: 'Stone',
            pound: 'Pound',
            ounce: 'Ounce',
        },
        variants: {
            'tonne:kiloGram': {
                formulla: 'multiply the mass value by 1000',
                calculation(n) {
                    return n * 1000
                }
            },
            'tonne:miliGram': {
                formulla: 'multiply the mass value by 1e+9',
                calculation(n) {
                    return n * new Number('1e+9')
                }
            },
            'tonne:microGram': {},
            'tonne:imperialTone': {},
            'tonne:usTon': {},
            'tonne:stone': {},
            'tonne:pound': {},
            'tonne:ounce': {},


            'kiloGram:tonne': {},
            'kiloGram:miliGram': {},
            'kiloGram:microGram': {},
            'kiloGram:imperialTone': {},
            'kiloGram:usTon': {},
            'kiloGram:stone': {},
            'kiloGram:pound': {},
            'kiloGram:ounce': {},


            'miliGram:tonne': {},
            'miliGram:kiloGram': {},
            'miliGram:microGram': {},
            'miliGram:imperialTone': {},
            'miliGram:usTon': {},
            'miliGram:stone': {},
            'miliGram:pound': {},
            'miliGram:ounce': {},


            'microGram:tonne': {},
            'microGram:kiloGram': {},
            'microGram:miliGram': {},
            'microGram:imperialTone': {},
            'microGram:usTon': {},
            'microGram:stone': {},
            'microGram:pound': {},
            'microGram:ounce': {},


            'imperialTone:tonne': {},
            'imperialTone:kiloGram': {},
            'imperialTone:miliGram': {},
            'imperialTone:microGram': {},
            'imperialTone:usTon': {},
            'imperialTone:stone': {},
            'imperialTone:pound': {},
            'imperialTone:ounce': {},


            'usTon:tonne': {},
            'usTon:kiloGram': {},
            'usTon:miliGram': {},
            'usTon:microGram': {},
            'usTon:imperialTone': {},
            'usTon:stone': {},
            'usTon:pound': {},
            'usTon:ounce': {},


            'stone:tonne': {},
            'stone:kiloGram': {},
            'stone:miliGram': {},
            'stone:microGram': {},
            'stone:imperialTone': {},
            'stone:usTon': {},
            'stone:pound': {},
            'stone:ounce': {},


            'pound:tonne': {},
            'pound:kiloGram': {},
            'pound:miliGram': {},
            'pound:microGram': {},
            'pound:imperialTone': {},
            'pound:usTon': {},
            'pound:stone': {},
            'pound:ounce': {},


            'ounce:tonne': {},
            'ounce:kiloGram': {},
            'ounce:miliGram': {},
            'ounce:microGram': {},
            'ounce:imperialTone': {},
            'ounce:usTon': {},
            'ounce:stone': {},
            'ounce:pound': {},

        }
    },
    time: {
        name: 'Time',
        units: {
            second: 'Second',
            minute: 'Minute',
            hour: 'Hour',
            week: 'Week',
            month: 'Month',
        },
        variants: {
            'second:minute': {
                formulla: 'divide the time value by 60',
                calculation(n) {
                    return n / 60
                }
            },
            'second:hour': {
                formulla: 'divide the time value by 3600',
                calculation(n) {
                    return n / 3600
                }
            },
            'second:week': {
                formulla: 'divide the time value by 604800',
                calculation(n) {
                    return n / 604800
                }
            },
            'second:month': {
                formulla: 'divide the time value by 2.628e+6',
                calculation(n) {
                    return n / new Number('2.628e+6')
                }
            },

            'minute:second': {
                formulla: 'multiply the time value by 60',
                calculation(n) {
                    return n * 60
                }
            },
            'minute:hour': {
                formulla: 'divide the time value by 60',
                calculation(n) {
                    return n / 60
                }
            },
            'minute:week': {
                formulla: 'divide the time value by 10080',
                calculation(n) {
                    return n / 10080
                }
            },
            'minute:month': {
                formulla: 'for an approximate result, divide the time value by 43800',
                calculation(n) {
                    return n / 43800
                }
            },

            'hour:second': {
                formulla: 'multiply the time value by 3600',
                calculation(n) {
                    return n * 3600
                }
            },
            'hour:minute': {
                formulla: 'multiply the time value by 60',
                calculation(n) {
                    return n * 60
                }
            },
            'hour:week': {
                formulla: 'divide the time value by 168',
                calculation(n) {
                    return n / 168
                }
            },
            'hour:month': {
                formulla: 'for an approximate result, divide the time value by 730',
                calculation(n) {
                    return n / 730
                }
            },

            'week:second': {
                formulla: 'multiply the time value by 604800',
                calculation(n) {
                    return n * 604800
                }
            },
            'week:minute': {
                formulla: 'multiply the time value by 10080',
                calculation(n) {
                    return n * 10080
                }
            },
            'week:hour': {
                formulla: 'multiply the time value by 168',
                calculation(n) {
                    return n * 168
                }
            },
            'week:month': {
                formulla: 'for an approximate result, divide the time value by 4.345',
                calculation(n) {
                    return n / 4.345
                }
            },

            'month:second': {
                formulla: 'multiply the time value by 2.628e+6',
                calculation(n) {
                    return n * new Number('2.628e+6')
                }
            },
            'month:minute': {
                formulla: 'for an approximate result, multiply the time value by 43800',
                calculation(n) {
                    return n * 43800
                }
            },
            'month:hour': {
                formulla: 'for an approximate result, multiply the time value by 730',
                calculation(n) {
                    return n * 730
                }
            },
            'month:week': {
                formulla: 'for an approximate result, multiply the time value by 4.345',
                calculation(n) {
                    return n * 4.345

                }
            },
        }
    }

}

let lastLeftSelectedValue = '';
let lastRightSelectedValue = '';



// =========== DOM ID Class Selector===========
const selectCategory = document.getElementById('category_select')
const leftInp = document.getElementById('leftInp')
const rightInp = document.getElementById('rightInp')


const leftSelect = document.getElementById('leftSelect')
const rightSelect = document.getElementById('rightSelect')


const converterKeys = Object.keys(converter).sort()
removeAllChild(selectCategory)
converterKeys.forEach(item => {
    addOption(selectCategory, { value: item, text: converter[item].name })

})


// ========== Set Default Value Category =============
updateCategoryChanges(selectCategory, leftSelect, rightSelect)
calculateValue(selectCategory, leftSelect, rightSelect)




selectCategory.addEventListener('change', function () {
    // ========= Hnadle Left Select =========
    updateCategoryChanges(selectCategory, leftSelect, rightSelect)
    calculateValue(selectCategory, leftSelect, rightSelect)


})

// ============ Main ===========
leftSelect.addEventListener('change', function (event) {
    if (event.target.value === rightSelect.value) {
        const options = rightSelect.getElementsByTagName('option')
        for (let i = 0; i < options.length; i++) {
            if (lastLeftSelectedValue === options[i].value) {
                options[i].selected = 'selected'
                lastRightSelectedValue = options[i].value
                break;
            }
        }
    }

    lastLeftSelectedValue = event.target.value
    calculateValue(selectCategory, leftSelect, rightSelect)



});

rightSelect.addEventListener('change', function (event) {
    if (event.target.value === leftSelect.value) {
        const options = leftSelect.getElementsByTagName('option')
        for (let i = 0; i < options.length; i++) {
            if (lastRightSelectedValue === options[i].value) {
                options[i].selected = 'selected'
                lastLeftSelectedValue = options[i].value
                break;
            }
        }
    }

    lastRightSelectedValue = event.target.value
    calculateValue(selectCategory, leftSelect, rightSelect)

});

leftInp.addEventListener('keyup', function (event) {
    if (event.target.value && !isNaN(event.target.value)) {
        const converterName = selectCategory.value
        const variants = converter[converterName].variants
        const variantKey = `${leftSelect.value}:${rightSelect.value}`
        const variant = variants[variantKey]
        leftInp.value = Number(event.target.value)
        rightInp.value = variant.calculation(Number(event.target.value))
    } else {
        rightInp.value = ''
    }
})
rightInp.addEventListener('keyup', function (event) {
    if (event.target.value && !isNaN(event.target.value)) {
        const converterName = selectCategory.value
        const variants = converter[converterName].variants
        const variantKey = `${leftSelect.value}:${rightSelect.value}`
        const variant = variants[variantKey]
        rightInp.value = Number(event.target.value)
        leftInp.value = variant.calculation(Number(event.target.value))
    } else {
        leftInp.value = ''
    }
})


// ============ Main ===========




// ============ DOM Functions ===============
function addOption(parent, option) {
    const opt = document.createElement('option')
    opt.setAttribute('value', option.value)
    opt.innerText = option.text

    parent.appendChild(opt)
}

function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
}


function updateCategoryChanges(selectCategory, leftSelect, rightSelect) {
    const converterName = selectCategory.value
    const units = converter[converterName].units
    const options = Object.keys(units)


    // ========= Hnadle Left Select =========
    removeAllChild(leftSelect)
    options.forEach(item => {
        addOption(leftSelect, { value: item, text: units[item] })
    })
    lastLeftSelectedValue = leftSelect.value

    // ========= Hnadle Right Select =========
    removeAllChild(rightSelect)
    options.forEach(item => {
        addOption(rightSelect, { value: item, text: units[item] })
    })

    lastRightSelectedValue = rightSelect.value

    // change default option of right select 
    rightSelect.value = options[1]


}


//  Display Calculate value Function

function calculateValue(selectCategory, leftSelect, rightSelect) {
    const formullaText = document.getElementById('formullaText')


    const converterName = selectCategory.value
    const variants = converter[converterName].variants
    const variantKey = `${leftSelect.value}:${rightSelect.value}`
    const variant = variants[variantKey]
    leftInp.value = 1
    rightInp.value = variant.calculation(1)
    formullaText.innerText = variant.formulla
}