import { Link } from "react-router-dom";

export default function SignUp() {
	return (
		<div className="p-3 max-w-lg mx-auto">
			<h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
			<form className="flex flex-col gap-6">
				<input
					type="text"
					placeholder="Username"
					id="username"
					className="bg-slate-100 rounded-lg p-3"
				></input>
				<input
					type="email"
					placeholder="Email"
					id="email"
					className="bg-slate-100 rounded-lg p-3"
				></input>
				<input
					type="password"
					placeholder="Password"
					id="password"
					className="bg-slate-100 rounded-lg p-3"
				></input>
				<button className="bg-slate-700 text-white uppercase p-3 rounded-lg disabled:opacity-80 hover:opacity-95">
					Sign Up
				</button>
			</form>
			<div className="mt-3">
				<p>
					Already have an account?
					<Link to="/signin">
						<span className="text-blue-500 m-2">Sign In</span>
					</Link>
				</p>
			</div>
		</div>
	);
}
