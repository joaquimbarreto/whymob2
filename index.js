const cloudListEl = document.querySelector("#cloud-list");
const systemUserEl = document.querySelector("#system-user");
const detailsEl = document.querySelector("#details");
let accountId = 1;

// add a single cloud to the page
const addCloud = cloud => {
	const cloudItem = document.createElement("li");
	cloudItem.className = "cloud-item";
	cloudItem.id = cloud.id;
	cloudItem.innerHTML = `<img src="${cloud.CloudLogo}" />`;
	cloudListEl.appendChild(cloudItem);
};

// use the above function multiple times
const addClouds = clouds => {
	clouds.result.forEach(cloud => addCloud(cloud));
};

const addSystemUser = user => {
	const systemUserImg = document.createElement("img");
	systemUserImg.className = "main-image";
	systemUserImg.src = user.result[0].Photo;
	systemUserEl.appendChild(systemUserImg);
};

const addAccountDetails = account => {
	const accountItem = document.createElement("div");
	accountItem.className = "account-details";
	accountItem.innerHTML = `
		<p><strong>ID</strong>: ${account.result[0].Id} </p>
		<p><strong>Name:</strong> ${account.result[0].Name} </p>
		<p><strong>Description:</strong> ${account.result[0].Description} </p>
		<p><strong>Date Created:</strong> ${account.result[0].CreateDate} </p>
	`;
	detailsEl.appendChild(accountItem);
};

// GET all Service from the server
const getClouds = () =>
	fetch(
		"http://blueticketdb.westeurope.cloudapp.azure.com:8005/ws/api/client/cloudservice"
	).then(resp => resp.json());

// GET all System User from the server
const getSystemUser = () =>
	fetch(
		"http://blueticketdb.westeurope.cloudapp.azure.com:8005/ws/api/client/systemuser"
	).then(resp => resp.json());

// GET all Account from the server
const getAccount = () =>
	fetch(
		`http://blueticketdb.westeurope.cloudapp.azure.com:8005/ws/api/client/account/${accountId}`
	).then(resp => resp.json());

// GET all the clouds, *then* put them on the page upon load
getClouds().then(addClouds);
getSystemUser().then(addSystemUser);
getAccount().then(addAccountDetails);
