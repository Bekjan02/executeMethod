const executeMethod = (obj, keys, method, params) => {
	const splittedKeys = keys.split('.')
	const lastProperty = splittedKeys.reduce((acc, curr) => {
		acc = obj[curr] ?? acc[curr]
		return acc
	}, '')
	return lastProperty ? lastProperty[method](...params) : null
}

module.exports = executeMethod
