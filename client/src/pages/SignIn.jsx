import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	signInStart,
	signInSuccess,
	signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SignIn() {
	const [formData, setFormData] = useState({});
	const { loading, error } = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			dispatch(signInStart());
			const res = await fetch("/api/auth/signin", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			if (data.success === false) {
				dispatch(signInFailure(data));
				return;
			}
			dispatch(signInSuccess(data));
			navigate("/");
		} catch (error) {
			dispatch(signInFailure(error));
		}
	};

	return (
		<div className="p-3 max-w-lg mx-auto">
			<h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-6">
				<input
					type="email"
					placeholder="Email"
					id="email"
					className="bg-slate-100 rounded-lg p-3"
					onChange={handleChange}
				></input>
				<input
					type="password"
					placeholder="Password"
					id="password"
					className="bg-slate-100 rounded-lg p-3"
					onChange={handleChange}
				></input>
				<button
					disabled={loading}
					className="bg-slate-700 text-white uppercase p-3 rounded-lg disabled:opacity-80 hover:opacity-95"
				>
					{loading ? "Loading..." : "Sign In"}
				</button>
			</form>
			<div className="mt-3">
				<p>
					Do not have an account?
					<Link to="/signin">
						<span className="text-blue-500 m-2">Sign Up</span>
					</Link>
				</p>
			</div>
			<p className="text-red-700 mt-4">
				{error ? error.message || "Something went wrong!" : ""}
			</p>
		</div>
	);
}
