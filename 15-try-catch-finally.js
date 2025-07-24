const onSuccess = (data) => {
	console.log("✅ Data fetched successfully:", data);
};

const onFailure = (error) => {
	console.error("❌ Error fetching data:", error.message);
};

export const fetchDataAsyncSingle = async (id) => {
	const endpoint = `https://jsonplaceholder.typicode.com/todos/${id}`;
	try {
		const response = await fetch(endpoint);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		onSuccess(data); //สร้างเป็น function เพื่อให้ code clean ขึ้น
	} catch (error) {
		onFailure(error); //สร้างเป็น function เพื่อให้ code clean ขึ้น

//optional ใช้เพื่อจบการทำงาน for i.e. security reason
	} finally {
		console.log("ℹ️ Fetch operation completed."); //ทำเสร็จแล้ว ไม่ว่าจะสำเร็จหรือไม่สำเร็จ
	}
};

// fetchDataAsyncSingle(1);
