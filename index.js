const cloudListEl = document.querySelector("#cloud-list");
const systemUserEl = document.querySelector("#system-user");
const detaislEl = document.querySelector("#details");
let accountId = 1;

// add a single cloud to the page
const addCloud = cloud => {
	const cloudItem = document.createElement("li");
	//   const agentButton = document.createElement("button");
	cloudItem.className = "cloud-item";
	cloudItem.id = cloud.id;
	cloudItem.innerHTML = `
    <h3>${cloud.Name}</h3>
    <img src="${cloud.CloudLogo}" />
  `;

	cloudListEl.appendChild(cloudItem);
};

// use the above function multiple times
const addClouds = clouds => {
	clouds.forEach(cloud => addCloud(cloud));
};

const addSystemUser = user => {
	const systemUserImg = document.createElement("img");
	systemUserImg.src = user.CloudLogo;
	systemUserEl.appendChild(systemUserImg);
};

// GET all Service from the server
const getClouds = () =>
	fetch(
		"http://blueticketdb.westeurope.cloudapp.azure.com:8005/ws/api/client/cloudservice",
		{
			mode: "no-cors",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			}
		}
	).then(resp => resp.json());

// GET all System User from the server
const getSystemUser = () =>
	fetch(
		"http://blueticketdb.westeurope.cloudapp.azure.com:8005/ws/api/client/systemuser"
	).then(resp => resp.json());

// GET all Account from the server
const getAccount = () =>
	fetch(
		`http://blueticketdb.westeurope.cloudapp.azure.com:8005/ws/api/client/accoint/${accountId}`
	).then(resp => resp.json());

// GET all the clouds, *then* put them on the page upon load
getClouds().then(addClouds);
