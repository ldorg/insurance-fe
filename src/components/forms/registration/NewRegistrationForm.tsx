import React, { useState } from "react"
import { Link } from "react-router-dom"

const NewRegistrationForm = () => {
  const [page, setPage] = useState(0)

  return (
    <main className="border-t-8 border-blue-500">
      <div className="container mx-auto py-8">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
            <text y="32" fontSize="32">
              🐝
            </text>
          </svg>
        </Link>
        {page === 0 && <Form onSubmit={() => setPage(1)} />}
        {page === 1 && <Quotes />}
      </div>
    </main>
  )
}

export default NewRegistrationForm

const Form = ({ onSubmit }: { onSubmit: Function }) => {
  return (
    <div className="mt-8">
      <h1 className="text-4xl my-4">Get your quote in minutes</h1>
      <form
        className="gap-4 border border-gray-200 rounded-lg shadow max-w-2xl"
        onSubmit={(event) => {
          event.preventDefault()
          onSubmit()
        }}
      >
        <div className="space-y-4 p-4">
          <div className="flex space-x-4">
            <div className="flex flex-col">
              <label
                htmlFor="DoB"
                className="uppercase font-semibold text-xs text-gray-700"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="DoB"
                className="rounded-md bg-gray-50 shadow-inner border-gray-300"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="sex"
                className="uppercase font-semibold text-xs text-gray-700"
              >
                Sex
              </label>
              <select
                id="sex"
                className="rounded-md bg-gray-50 shadow-inner border-gray-300"
              >
                <option value="">----</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="zip"
                className="uppercase font-semibold text-xs text-gray-700"
              >
                Zip code
              </label>
              <input
                id="zip"
                name="zip"
                type="text"
                pattern="[0-9]*"
                maxLength={5}
                className="rounded-md bg-gray-50 shadow-inner border-gray-300"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="uppercase font-semibold text-xs text-gray-700">
              Do you use Tobacco?
            </span>
            <div className="space-x-2">
              <label htmlFor="yes_tobacco">Yes</label>
              <input type="radio" name="tobacco" id="yes_tobacco" />
              <label htmlFor="no_tobacco">No</label>
              <input type="radio" name="tobacco" id="no_tobacco" />
            </div>
          </div>
        </div>
        <div className="space-x-2 p-4 bg-gray-50 border-t rounded-b-lg">
          <button
            type="submit"
            className="bg-blue-500 text-white px-5 py-2 hover:bg-blue-600 active:bg-blue-700 rounded-md font-semibold"
          >
            See your options
          </button>
          <button
            type="reset"
            className="bg-gray-500 text-white px-5 py-2 hover:bg-gray-600 active:bg-gray-700 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

const Quotes = () => {
  const quotes: QuoteParams[] = [
    { title: "Bronze Direct", deductible: "$5,000", price: "$300" },
    {
      title: "Gold Direct",
      deductible: "$5,000",
      price: "$400",
      popular: true,
    },
    { title: "Platinum Direct", deductible: "$5,000", price: "$500" },
    { title: "Bronze HSA Direct", deductible: "$2,000", price: "$350" },
  ]
  return (
    <div>
      <h1 className="text-4xl mt-4">Your Quotes</h1>
      <div className="space-y-2 mt-4">
        {quotes.map((quote) => (
          <Quote key={quote.title} {...quote} />
        ))}
      </div>
    </div>
  )
}

type QuoteParams = {
  title: string
  price: string
  deductible: string
  popular?: boolean
}
const Quote = ({ title, price, deductible, popular }: QuoteParams) => {
  return (
    <div className="border-2 border-gray-200 p-4 flex justify-between">
      <div>
        <p className="text-xl">{title}</p>
        <p>Deductible: {deductible}</p>
        <p>Price: {price}/mo</p>
        <button className="mt-2 bg-green-500 text-white px-4 py-2 hover:bg-green-600 active:bg-green-700">
          Select
        </button>
      </div>
      <div>
        {popular && (
          <span className="bg-green-500 text-white px-4 py-2">Popular</span>
        )}
      </div>
    </div>
  )
}
