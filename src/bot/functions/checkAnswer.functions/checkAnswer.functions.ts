const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const PHONE_REGEXP = /[\d\(\)\ -]{4,14}$/;



export const isEmailValid = function isEmailValid(value: string) {
    return EMAIL_REGEXP.test(value);
};

export const isPhoneValid = function isPhoneValid(value: string) {
    return PHONE_REGEXP.test(value);
};