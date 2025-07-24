// มาตรฐานการใช้ async await ในปัจุบัน
// เมื่อ fetch แล้วจะได้ข้อมูล (respond) กลับมา
export const fetchDataAsync = async () => {
	const endpoint = "https://jsonplaceholder.typicode.com/posts";
	try {
		const response = await fetch(endpoint); //ต้องใช้ await เพื่อ กับสิ่งที่ return เป็น promise เสมอ i.e. fetch(endpoint)
		if (!response.ok) {
			throw new Error("Failed to fetch posts");
		}
		// เมื่อได้ response กลับมาก็ใช้ .json เพื่อให้อ่านได้ แล้วเก็บลงในตัวแปร data
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log("Error occurred: ", error);
	}
};

// fetchDataAsync();
