export default (req, res) => {
	console.log(`executed ${Date.now()}`);
	res.status(200).json({ name: "John Doe" });
};
