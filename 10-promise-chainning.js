const orderPizza = () => {
	return new Promise((resolve, reject) => {
		const pizzaReady = Math.random() > 0.2;
		setTimeout(() => {
			if (pizzaReady) {
				resolve("🍕 Pizza is ready!");
			} else {
				reject("❌ Sorry, pizza oven broke!");
			}
		}, 3000);
	});
};

const orderDrink = () => {
	return new Promise((resolve, reject) => {
		const drinkReady = Math.random() > 0.5;
		setTimeout(() => {
			if (drinkReady) {
				resolve("🥤 Drink is ready!");
			} else {
				reject("❌ Sorry, we ran out of drinks!");
			}
		}, 1000);
	});
};
//หลังจากได้ผลลัพธ์จาก promise (pizza) ก็ส่งไปดู promise(drink) ถัดไปว่าได้ไหม 
// เช่นได้ pizza แต่อาจไม่มีเครื่องดื่ม ก็จะ error
export const promiseChaining = () => {
	console.log("📝 Starting order…");

	orderPizza()
		.then((pizza) => {
			console.log("✅", pizza);
			return orderDrink(); // chain to next promise
		})
		.then((drink) => {
			console.log("✅", drink);
		})
		.catch((error) => {
			console.error("⚠️ Something went wrong:", error);
		})
		.finally(() => {
			console.log("ℹ️ Order process finished. Ready for the next order!");
		});
};

// promiseChaining();
