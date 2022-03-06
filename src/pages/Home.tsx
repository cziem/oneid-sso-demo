import logo from "../logo.svg"
import "../App.css"

const Home = () => {
  const one_api_key = process.env.REACT_APP_API_KEY

  const handleAuth = () => {
    window.location.replace(
      `http://localhost:3000/auth?type=login&scope=profile&callback=http://localhost:3001/dashboard&api_key=${one_api_key}`
    )
  }

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl font-bold uppercase tracking-wide">
          OneID SSO, Onboarding Simplified
        </p>
        <p className="mt-12">
          <button
            onClick={handleAuth}
            className="rounded-full bg-red-400 px-4 py-2 text-base cursor-pointer hover:bg-red-100 hover:text-red-400"
            type="button"
          >
            Login with OneID
          </button>
        </p>
      </header>
    </div>
  )
}

export default Home
