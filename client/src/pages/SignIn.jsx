import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
	
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(true);
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
				<button disabled={loading} className="bg-slate-700 text-white uppercase p-3 rounded-lg disabled:opacity-80 hover:opacity-95">
					{loading ? 'Loading...' : 'Sign In'}
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
			<p className="text-red-700 mt-4">{error && 'Something went wrong!'}</p>
		</div>
	);
}
