import "./App.css";
import { useState } from "react";

import walmart from './images/Walmart.png';
import target from './images/Target_logo.png';
import patelBrothers from './images/Patel_Brothers.png';
import costco from './images/Costco.png';

const App = () => {
  const [userName, setUserName] = useState("");
  const [productName, setProductName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Product Name:", productName);
    console.log("Expiry Date:", expiryDate);
  };

  const stats = [
    { id: 1, name: "Consume food past expiry date", value: "~40%" },
    {
      id: 2,
      name: "Deaths annually due to foodborne illnesses",
      value: "420,000",
    },
    { id: 3, name: "Food safely consumed than being thrown", value: "68%" },
  ];

  return (
    <>
      {/* Hero - Landing */}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            🚨 Stay ahead of expiration dates with our handy notification system. {" "}
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Product Alert Assistance using ProQRuct
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Users can effortlessly stay ahead of expiring items, we are offering
            a solution for managing expiration dates by implementing a
            user-friendly notification system.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(20%+36rem)] sm:w-[32.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      {/* Research */}
      <div className="bg-white py-14 sm:py-32">
        <div className="text-center">
          <h3 className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-6xl my-5">
            Research says that
          </h3>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 my-5 py-5">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:py-14">
        <div className="text-center">
          <h1 className="mt-6 text-2xl font-bold text-black-600">
            Stay mindful of product details and expiration dates to prevent
            foodborne illnesses.
          </h1>
          <p className="mt-6 text-md leading-8 text-gray-600">
            This not only safeguards your health but also helps reduce waste. ♻️
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-md mx-auto my-5 p-6 rounded-md shadow-lg shadow-blue-500/40">
        <h2 className="text-center text-2xl font-medium mb-6">
          Enter product details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-600"
            >
              User Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="shadow mt-1 p-2 w-full border rounded-md"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow mt-1 p-2 w-full border rounded-md"
              placeholder="johndoe@gmail.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-600"
            >
              Product Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="shadow mt-1 p-2 w-full border rounded-md"
              placeholder="Milk"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-gray-600"
            >
              Expiry Date
            </label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="shadow mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      { /* Customers */ }
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Our system can help retailers like
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={walmart}
              alt="Walmart"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={patelBrothers}
              alt="Patel Brothers"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={costco}
              alt="Costco Wholesale"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={target}
              alt="Target"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
