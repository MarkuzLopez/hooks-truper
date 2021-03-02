const name = process.env.NODE_ENV || 'local';

let enviroments;

switch (name) {
    case 'uat':
        enviroments = {
            apiUrl: 'https://api.datos.gob.mx/v1/'
        }
        break;
    case 'production':
        enviroments = {
            apiUrl: 'https://api.datos.gob.mx/v1/'
        }
        break;
    
        default: { 
            enviroments = { 
                apiUrl: 'https://api.datos.gob.mx/v1/'
            }
        };

        break;
}

export default enviroments;