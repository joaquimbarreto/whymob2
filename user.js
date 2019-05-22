const systemUserEl = document.querySelector("#system-user");
const systemDetailsEl = document.querySelector("#system-details");

const addSystemUser = user => {
	const systemUserImg = document.createElement("img");
	systemUserImg.className = "main-image";
	systemUserImg.src = user.result[0].Photo;
	systemUserEl.appendChild(systemUserImg);
};

const addSystemUserDetails = user => {
	const systemUserItem = document.createElement("div");
	const systemUserBtn = document.createElement("button");
	systemUserBtn.innerHTML = "System User";
	systemUserItem.className = "system-user-details";
	systemUserItem.innerHTML = `
		<p><strong>ID</strong>: ${user.result[0].Id} </p>
		<p><strong>Name:</strong> ${user.result[0].Name} </p>
		<p><strong>Email:</strong> ${user.result[0].Email} </p>
		<p><strong>Date Created:</strong> ${user.result[0].CreateDate} </p>
	`;
	systemDetailsEl.appendChild(systemUserItem);
};

// GET all System User details from the server
const getSystemUser = () =>
	fetch(
		"http://blueticketdb.westeurope.cloudapp.azure.com:8005/ws/api/client/systemuser"
	).then(resp => resp.json());

// GET all the system user details, *then* put them on the page upon load
getSystemUser().then(addSystemUser);
getSystemUser().then(addSystemUserDetails);
