"use client"

import { useState } from "react"

export default function SubscribeForm() {
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch("/api/subscribers", {
      method: "post",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json())

    console.log(response)
    if (response.created) {
      setEmail("")
      alert("Email cadastrado com sucesso!")
    } else {
      alert("Algo deu errado!")
    }
  }

  return (
    <form
      className="flex justify-center gap-4 p-4"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="on"
        placeholder="Seu e-mail principal"
        className="bg-slate-700 text-white p-3 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="bg-sky-700 text-white p-3 rounded">
        Se inscrever
      </button>
    </form>
  )
}