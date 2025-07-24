//สร้างตัวแปรมารับค่า fetch
export 
const fetchDataBasic = () => {
	const endpoint = "https://jsonplaceholder.typicode.com/posts";
	fetch(endpoint)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to fetch posts");
			}
			return response.json(); //.json เพื่อเอาข้อมูลไปแปลงเพื่อให้อ่านได้
		})
		//then ครั้งที่สองนี้เพื่อเอา data ไปใช้ต่อ
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.log("Error occurred: ", error);
		});
};

// fetchDataBasic();
