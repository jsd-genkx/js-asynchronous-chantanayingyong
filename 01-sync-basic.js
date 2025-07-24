// synchronous = code ก็จะรันแล้วแสดงผลลัพธ์ตามลำดับ
export const syncBasic = () => {
	const logTwo = () => {
		console.log(2);
	};

	const logTwoAndThree = (message) => {
		logTwo();
		console.log(message);
	};

	console.log(1);

	logTwoAndThree(3);

	console.log(4);
};
// ถ้าต้องการให้รันใน vs code เลย ให้เอา comment line ล่างออก
// syncBasic();
