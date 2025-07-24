//การใช้ Async เหมือนมีโต๊ะเพิ่มอีกตัว แบ่งช่วงกันทำงานโดยไม่ต้องรออีกอันรันจนได้ผลลัพธ์ก่อน
//ใช้ setTimeout เพื่อ simulate สถานการณ์จริงว่าบาง process อาจใช้เวลามากน้อยต่างกัน
//โดยปกติจะใช้ async กรณีที่ต้องติดต่อเพื่อรอรับข้อมูล
export const asyncBasic = () => {
	console.log(`Start`); //ถูกเรียกเข้าไปใน callstack ทันที

	setTimeout(() => { //setTimeout (callback, delay [ms] ไปเข้า task queue รอ event loop)
		console.log(`Wait for 1 second -- I'm back 😎`);
	}, 1000);

	console.log(`End`); //ถูกเรียกเข้าไปใน callstack ทันที
};
// ผลลัพธ์ก็จะเป็น start, end ก่อน I'm back เพราะถูกหน่วงเวลาโดย callback func แม้ใส่ delay 0 ก็ยังต้องรอ

// setTimeout(() => console.log(1), 3000);
// setTimeout(() => console.log(2), 2000);
// setTimeout(() => console.log(3), 1000);
// ผลลัพธ์จะเป็น 3 2 1 เพราะเรียงตามดีเลย์น้อยไปมาก

// setTimeout(() => console.log(1), 1000);
// setTimeout(() => console.log(2), 2000);
// setTimeout(() => console.log(3), 1000);
// ผลลัพธ์จะเป็น 1 3 2 เพราะเรียงตามดีเลย์น้อยไปมาก แต่ถ้าดีเลย์เท่ากันแสดงผล line ที่ถูก run ก่อน

// asyncBasic();
