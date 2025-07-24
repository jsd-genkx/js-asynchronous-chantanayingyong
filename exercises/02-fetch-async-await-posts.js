/* 
TODO-01: Create a function named fetchPostsAsync
         Mark it as async
         Use await fetch('https://dummyjson.com/posts')
         Handle response and parse JSON with await
         Log the posts data
         Wrap in try/catch to handle errors

TODO-02: Export fetchPostsAsync and test it in main.js 
*/

const onSuccess = (data) => {
	console.log("✅ Data fetched successfully:", data.posts[0]);
};

const onFailure = (error) => {
	console.error("❌ Error fetching data:", error.message);
};

export const fetchPostsAsync = async (id) => {
	const endpoint = `https://dummyjson.com/posts`;
	try {
		const response = await fetch(endpoint);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		onSuccess(data);
	} catch (error) {
		onFailure(error);

	} finally {
		console.log("ℹ️ Fetch operation completed.");
	}
};

fetchPostsAsync();