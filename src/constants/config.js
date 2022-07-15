// API Notification Message


export const AP_NOTIFICATION_MESSAGE = {
    loading: {
        title: 'loading...',
        message: 'Data is being loaded,please wait'
    },
    success: {
        title: 'success',
        message: 'Data successfully loaded'
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occured while fetching data.Please Try again'
    },
    requestFailure: {
        title: "Error",
        message: 'An error occured while parsing request data'
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect with the server.Please check internet connectivity'
    }
}

// API_SERVICE_CALL
// SAMPLE REQUEST
// NEED SERVICE CALL: { url: '/', method: 'POST/GET/PUT/DELETE/PATCH' params: true / false, query: true / false }
export const SERVICE_URL = {
    userSignup: {
        url: '/signup',
        method: 'POST'
    },
    userLogin: {
        url: '/login',
        method: 'POST'
    },
    uploadFile: {
        url: '/file/upload',
        method: 'POST'
    },
    createPost: {
        url: '/create',
        method: 'POST'
    },
    getAllPosts: {
        url: '/posts',
        method: 'GET'
    }
}