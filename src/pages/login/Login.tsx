import { useState } from "react"
import "./Login.css"
import { useAuthStore } from "../../context/useAuthStore"
import { useNavigate } from "react-router"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { login } = useAuthStore()
    const navigate = useNavigate()

    const handleLoging = (e: React.FormEvent) => {
        e.preventDefault()
        if (login(email, password)) {
            navigate("/admin")
        } else {
            setError("Wrong Password or Email")
        }
    }
  return (
    <div className="container section">
        <h1>Admin Login</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleLoging} >
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login