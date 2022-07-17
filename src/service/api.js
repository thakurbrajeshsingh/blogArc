import axios from 'axios';
import { AP_NOTIFICATION_MESSAGE, SERVICE_URL } from '../constants/config.js';
import { getAccessToken, getType } from '../utils/common-utils.js';

const API_URL = 'http://localhost:8000'

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'content-type': 'application/json '
    }
})


axiosInstance.interceptors.request.use(
    function (config) {
        if (config.TYPE.params) {
            config.params = config.TYPE.params;
        } else if (config.TYPE.query) {
            config.url = config.url + '/' + config.TYPE.query;
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    }
)


axiosInstance.interceptors.response.use(
    function (response) {
        // stop global loader here
        return processResponse(response);
    },
    function (error) {
        // stop global loader here
        return Promise.reject(processError(error))
    }
)

const processResponse = (response) => {
    if (response?.status === 200) {
        return ({ isSuccess: true, data: response.data })
    } else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}


const processError = (error) => {
    if (error.response) {
        //request made and server made response of other code 
        // that fall out of range of 2.x.x 
        console.log('Error in reponse', error.toJSON())
        return ({
            isError: true,
            msg: AP_NOTIFICATION_MESSAGE.responseFailure,
            code: error.response.status
        })
    } else if (error.request) {
        // request made but no response was received
        console.log('Error in Request', error.toJSON())
        return ({
            isError: true,
            msg: AP_NOTIFICATION_MESSAGE.requestFailure,
            code: ''
        })

    } else {
        // something happend in setting up request that trigger error
        console.log('Error in Network', error.toJSON())
        return ({
            isError: true,
            msg: AP_NOTIFICATION_MESSAGE.networkError,
            code: ''
        })
    }
}


const API = {};

for (const [key, value] of Object.entries(SERVICE_URL)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: value.method === 'DELETE' ? {} : body,
            responseType: value.responseType,
            headers: {
                authorization: getAccessToken()
            },
            TYPE: getType(value, body),
            onUploadProgress: function (progressEvent) {
                if (showUploadProgress) {
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / ProgressEvent.total)
                    showUploadProgress(percentageCompleted)
                }
            },
            onDownloadProgress: function (progressEvent) {
                if (showDownloadProgress) {
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / ProgressEvent.total)
                    showDownloadProgress(percentageCompleted)
                }
            },

        })


}



export { API }