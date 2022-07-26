import React from "react";
import { useState, useEffect } from "react";
import {
	Select,
	MenuItem,
	Button,
	Typography,
	Paper,
	Box,
} from "@material-ui/core";
import useStyles from "../Form/styles";
import { useSelector } from "react-redux";
import { min } from "moment";
import Post from "../Posts/Post/Post";

const Query = () => {
	const posts = useSelector((state) => state.posts);
	const [dataRecived, setDataRecivied] = useState(posts);
	const [filteredData, setFilteredData] = useState([]);
	const [dataSet, setDataSet] = useState({
		city: "",
		balance: "",
		haveMortgage: "",
		creditCards: "",
	});

	const classes = useStyles();

	const eventsHandler = (e) => {
		const value = e.target.value;
		setDataSet({
			...dataSet,
			[e.target.name]: value,
		});
	};

	const getData = (e) => {
		e.preventDefault();
		console.log(dataRecived);
		const newPosts = dataRecived.filter(
			(item) =>
				item.balance > dataSet.balance &&
				item.haveMortgage === dataSet.haveMortgage 
				// item.numCreditCards === dataSet.creditCards
		);
		setFilteredData(newPosts);
		console.log(filteredData);
	};

	return (
		<div className="container">
			<Paper className={classes.paper}>
				<form autoComplete="off" noValidate className={`${classes.query}`}>
					<Typography variant="h6">Search For Details</Typography>
					<Select
						labelId="demo-simple-select-standard-label"
						id="demo-simple-select-standard"
						value={dataSet.city || "City"}
						onChange={eventsHandler}
						label="city"
						name="city"
					>
						{posts.map((item) => {
							return (
								<MenuItem key={item._id} value={item.city}>
									{item.city}
								</MenuItem>
							);
						})}
					</Select>
					<Box sx={{ width: 300 }}>
						<div className={classes.inputContainer}>
							<span className={classes.balance}>Type the amount of money</span>
							<br />
							<span className={classes.balance}>Balance: </span>
							<input
								className={classes.input}
								onClick={eventsHandler}
								type="number"
								name="balance"
								defaultValue={20000}
							/>
							<br />
							<span className={classes.balance}>How many credit cards ?</span>
							<br />
							<span className={classes.balance}>Amount: </span>
							<input
								onClick={eventsHandler}
								type="number"
								name="creditCards"
								defaultValue={1}
							/>
						</div>
					</Box>
					<em>Have Mortgage ?</em>
					<Select
						labelId="demo-simple-select-standard-label"
						id="demo-simple-select-standard"
						label="Age"
						name="haveMortgage"
						value={dataSet.haveMortgage}
						onChange={eventsHandler}
					>
						<MenuItem value="Yes">Yes</MenuItem>
						<MenuItem value="No">No</MenuItem>
					</Select>
					<Button
						className={classes.buttonSubmit}
						variant="contained"
						color="primary"
						size="large"
						type="submit"
						fullWidth
						onClick={getData}
					>Search</Button>
				</form>
			</Paper>
			{filteredData.length &&
				filteredData.map((item) => {
					return <Post key={item._id} post={item} />;
				})}
		</div>
	);
};
export default Query;
