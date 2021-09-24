const input = document.getElementById("input");
document.getElementById("addItem").onclick = () => {
	const inputValue = input.value;
	if (!inputValue) {
		return;
	};
	input.value = "";
	storeProduct(inputValue);
	displayData(inputValue)
};
const displayData = inputValue => {
	// UI
	const ul = document.getElementById("ul");
	const li = document.createElement("li");
	li.innerText = inputValue;
	ul.appendChild(li)
};

// Cheack Data
const products = () => {
	const products = localStorage.getItem("products");
	let object;
	if (products) {
		object = JSON.parse(products);
	} else {
		object = {};
	};
	return object;
};

// Data Store
const storeProduct = inputValue => {
	 const cart = products();
	 if (cart[inputValue]) {
		cart[inputValue] = cart[inputValue] + 1;
	 } else {
		cart[inputValue] = 1;
	 }
	 const convertStringify = JSON.stringify(cart);
	 localStorage.setItem("products", convertStringify)
	//  console.log(cart)
};

// Display UI Data (Reload)
const displayALlData = () => {
	const carts = products();
	for (const name in carts) {
		displayData(name);
	};
}
displayALlData();

// Remove Data
document.getElementById("placeOrder").onclick = () => {
	document.getElementById("ul").textContent = "";
	localStorage.removeItem("products")
}