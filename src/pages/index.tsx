import Head from "next/head";
import { useEffect, useState } from "react";

interface Props {}

const Home = (props: Props) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button
        className="px-4 py-2 text-white bg-gray-700 rounded-md dark:bg-gray-100 dark:text-gray-700"
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        Turn {isDark ? "on" : "off"} the lights
      </button>

      {/* Forms testing (ignore this) */}
      {false && (
        <div className="px-6 antialiased text-gray-900">
          <div className="max-w-xl mx-auto divide-y pjjy-12 md:max-w-4xl">
            <div className="py-12">
              <h2 className="text-2xl font-bold">Unstyled</h2>
              <p className="mt-2 text-lg text-gray-600">
                This is how form elements look out of the box.
              </p>
              <div className="max-w-md mt-8">
                <div className="grid grid-cols-1 gap-6">
                  <label className="block">
                    <span className="text-gray-700">Full name</span>
                    <input
                      type="text"
                      className="block w-full mt-1"
                      placeholder=""
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Email address</span>
                    <input
                      type="email"
                      className="block w-full mt-1"
                      placeholder="john@example.com"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">When is your event?</span>
                    <input type="date" className="block w-full mt-1" />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">
                      What type of event is it?
                    </span>
                    <select className="block w-full mt-1">
                      <option>Corporate event</option>
                      <option>Wedding</option>
                      <option>Birthday</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Additional details</span>
                    <textarea className="block w-full mt-1" rows={3}></textarea>
                  </label>
                  <div className="block">
                    <div className="mt-2">
                      <div>
                        <label className="inline-flex items-center">
                          <input type="checkbox" checked={false} />
                          <span className="ml-2">
                            Email me news and special offers
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-12">
              <h2 className="text-2xl font-bold">Simple</h2>
              <div className="max-w-md mt-8">
                <div className="grid grid-cols-1 gap-6">
                  <label className="block">
                    <span className="text-gray-700">Full name</span>
                    <input
                      type="text"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder=""
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Email address</span>
                    <input
                      type="email"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="john@example.com"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">When is your event?</span>
                    <input
                      type="date"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">
                      What type of event is it?
                    </span>
                    <select className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>Corporate event</option>
                      <option>Wedding</option>
                      <option>Birthday</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Additional details</span>
                    <textarea
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      rows={3}
                    ></textarea>
                  </label>
                  <div className="block">
                    <div className="mt-2">
                      <div>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="text-indigo-600 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            checked={false}
                          />
                          <span className="ml-2">
                            Email me news and special offers
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-12">
              <h2 className="text-2xl font-bold">Underline</h2>
              <div className="max-w-md mt-8">
                <div className="grid grid-cols-1 gap-6">
                  <label className="block">
                    <span className="text-gray-700">Full name</span>
                    <input
                      type="text"
                      className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                      placeholder=""
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Email address</span>
                    <input
                      type="email"
                      className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                      placeholder="john@example.com"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">When is your event?</span>
                    <input
                      type="date"
                      className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">
                      What type of event is it?
                    </span>
                    <select className="block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black">
                      <option>Corporate event</option>
                      <option>Wedding</option>
                      <option>Birthday</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Additional details</span>
                    <textarea
                      className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                      rows={2}
                    ></textarea>
                  </label>
                  <div className="block">
                    <div className="mt-2">
                      <div>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                          />
                          <span className="ml-2">
                            Email me news and special offers
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-12">
              <h2 className="text-2xl font-bold">Solid</h2>
              <div className="max-w-md mt-8">
                <div className="grid grid-cols-1 gap-6">
                  <label className="block">
                    <span className="text-gray-700">Full name</span>
                    <input
                      type="text"
                      className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                      placeholder=""
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Email address</span>
                    <input
                      type="email"
                      className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                      placeholder="john@example.com"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">When is your event?</span>
                    <input
                      type="date"
                      className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">
                      What type of event is it?
                    </span>
                    <select className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0">
                      <option>Corporate event</option>
                      <option>Wedding</option>
                      <option>Birthday</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Additional details</span>
                    <textarea
                      className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                      rows={3}
                    ></textarea>
                  </label>
                  <div className="block">
                    <div className="mt-2">
                      <div>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="text-gray-700 bg-gray-200 border-transparent rounded focus:border-transparent focus:bg-gray-200 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                          />
                          <span className="ml-2">
                            Email me news and special offers
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
