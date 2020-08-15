const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");


	try {
		var info = await Clickup.TimeTracking.get_singular_time_entry("team_id", "timer_id");
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
