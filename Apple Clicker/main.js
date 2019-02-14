var apples = 0;

function appleClick(number) {
	apples = apples + number;
	document.getElementById("apples").innerHTML = apples;
}

var farmers = 0;

function buyFarmer() {
	var farmerCost = Math.floor(10 * Math.pow(1.1,farmers));
	if(apples >= farmerCost) {
		farmers = farmers + 1;
		apples = apples - farmerCost;
		document.getElementById('farmers').innerHTML = farmers;
		document.getElementById('apples').innerHTML = apples;
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,farmers));
	document.getElementById('farmerCost').innerHTML = nextCost;
};

window.setInterval(function() {
	appleClick(farmers);
}, 1000);

function save() {

}

function load() {
	
}