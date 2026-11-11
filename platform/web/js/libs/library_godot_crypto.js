// WeChat Mini Game has no synchronous crypto.getRandomValues. The fallback is
// NOT cryptographically secure, so keep the native implementation when present.
var crypto = (typeof globalThis !== 'undefined' && globalThis.crypto && typeof globalThis.crypto.getRandomValues === 'function')
	? globalThis.crypto
	: {
		getRandomValues: (array) => {
			for (let i = 0; i < array.length; i++) {
				array[i] = (Math.random() * 256) | 0;
			}
			return array;
		},
	};
