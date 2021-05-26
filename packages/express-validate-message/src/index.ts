/**
 * Validation Message Lists
 */
export const validationMessage = {
    contains: '',
    equals: '',
    isAlpha: 'The :attribute may only contain letters.',
    isAlphanumeric: 'The :attribute may only contain letters and numbers.',
    isDecimal: 'The :attribute must be a decimal.',
    isEmail: 'The :attribute must be a valid email address.',
    isFloat: 'The :attribute must be a float.',
    isIn: ':attribute must in :inner',
    isInt: 'The :attribute must be an integer.',
    isIP: 'The :attribute must be a valid IP address.',
    isIPv4: 'The :attribute must be a valid IPv4 address.',
    isIPv6: 'The :attribute must be a valid IPv6 address.',
    isLowercase: 'The :attribute must be a lowercase.',
    isNull: 'The :attribute is empty.',
    isNumeric: 'The :attribute must be a number.',
    isUppercase: 'The :attribute must be a uppercase.',
    isUrl: 'The :attribute format is invalid.',
    isUUID: 'The :attribute must be a valid UUID.',
    len: '',
    notContains: '',
    notEmpty: 'The :attribute is required.',
    notIn: 'The selected :attribute is invalid.',
    notNull: 'The :attribute is required.',

    // custom validation translate
    exist: 'The :attribute :value already exist.',
    isBoolean: 'The :attribute must be a boolean.',
    isDate: 'The :attribute must be a date.',
    isLength: 'The :attribute must contain a minimum of :min and a maximum of :max',
    matches: ':attribute must contain a minimum of :matches',
    isString: ":attribute must be string",
    isArray: ":attribute must be array"
}

/**
 * Message Translate
 */
export const trans = (attribute: string, message: string, optional = {}) => {
    // check if message found or not
    if (message) {
        let newMessage = message.replace(':attribute', attribute);

        // if optional found
        // replace key with value
        if (optional) {
            Object.keys(optional).map((val) => {
                newMessage = newMessage.replace(val, optional[val]);
            })
        }

        return newMessage;
    } else {
        return `${attribute} error input.!`;
    }
}