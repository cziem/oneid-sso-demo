import React, { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import "../App.css"

const Dashboard = () => {
  const navigate = useNavigate()
  let [searchParams] = useSearchParams()

  useEffect(() => {
    let token = searchParams.get("token") || ""
    localStorage.setItem("sso_test", token)
  }, [searchParams])

  let user = searchParams.get("user")
  let uData = JSON.parse(user ?? "")

  const logout = () => {
    localStorage.removeItem("sso_test")
    navigate("/")
  }

  console.log(uData, "user data")

  return (
    <div className="App-header">
      <h3 className="text-6xl capitalize mb-4">Welcome to OneID SSO</h3>
      <p className="text-base lowercase mb-4">You are viewing the dashboard</p>

      <code className="mt-8 px-4 py-4 bg-slate-700 rounded">
        {uData ? (
          <>
            <pre className="underline text-lg mb-4">Here are your details</pre>
            <p className="text-base text-left">
              Email:{" "}
              <span className="text-sm text-slate-400">{uData.email}</span>
            </p>
            <p className="text-base text-left">
              OneId:{" "}
              <span className="text-sm text-slate-400">{uData.oneId}</span>
            </p>
            <p className="text-base text-left">
              Username:{" "}
              <span className="text-sm text-slate-400">{uData.username}</span>
            </p>
          </>
        ) : (
          "Not logged in..."
        )}
      </code>

      <div className="mt-8">
        <button
          onClick={logout}
          className="rounded-full bg-red-400 px-4 py-2 text-base cursor-pointer hover:bg-red-100 hover:text-red-400"
          type="button"
        >
          {uData ? "Logout" : "Back"}
        </button>
      </div>
    </div>
  )
}

export default Dashboard
