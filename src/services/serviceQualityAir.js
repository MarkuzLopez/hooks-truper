import http from '../constants/config';

export const getQualityAir = () => http.get('calidadAire');