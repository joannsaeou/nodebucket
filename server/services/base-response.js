// <!-- * Title: base-response.js
// * Author: Professor Krasso
// * Date: 8 October 2020
// * Modified: Joann Saeou
// * Description: file for error response   -->

class BaseResponse {
    constructor(httpCode, message, data) {
        this.httpCode = httpCode;
        this.message = message;
        this.data = data;
    }
    toObject() {
        return {
            'httpCode': this.httpCode,
            'message': this.message,
            'data': this.data,
            'timestamp': new Date().toLocaleDateString()
        }
    }
}


module.exports = BaseResponse;