const fs = require('fs');

function readJsonFile(filepath){
	let data = {};
	try {
		const fileData = fs.readFileSync(filepath);
		data = JSON.parse(fileData);
	} catch (err) {
		console.error(err);
		throw err;
	}

	return data;
}

module.exports = {readJsonFile};