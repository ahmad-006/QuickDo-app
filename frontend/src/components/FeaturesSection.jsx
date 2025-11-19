import { Check, Shield, Smartphone } from "lucide-react";

function FeaturesSection() {
  return (
    <main className="mt-32 ">
      <div className="text-center flex flex-col gap-5 px-3 md:px-6">
        <p className="md:text-3xl text-2xl text-gray-100">
          Everything you need, nothing you don't
        </p>
        <p className="text-gray-400 md:text-xl text-xl mb-7 ">
          Built for simplicity and productivity. Get things done without the
          complexity.
        </p>
      </div>
      <div className="flex  flex-col md:flex-row gap-6 justify-evenly px-3 py-4">
        <div className="border border-gray-700 p-6 flex flex-col gap-5 rounded-4xl hover:border-[#08ffad] ">
          <div className="p-4 w-fit  bg-[#00AB72] rounded-3xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-circle-check w-6 h-6 text-white"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          <p className="text-xl md:text-2xl font-medium">SImple and Clean</p>
          <p className="text-gray-400 text-xl ">
            No unnecessary features. Just add tasks, check them off, and stay
            organized effortlessly.
          </p>
        </div>

        <div className="border border-gray-700 p-6 flex flex-col gap-5 rounded-4xl hover:border-[#08ffad] ">
          <div className="p-4 w-fit  bg-[#05e66a] rounded-3xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-smartphone w-6 h-6 text-white"
              aria-hidden="true"
            >
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
              <path d="M12 18h.01"></path>
            </svg>
          </div>
          <p className="text-xl md:text-2xl font-medium">Always Accessible</p>
          <p className="text-gray-400 text-xl ">
            Access your tasks from anywhere. Works seamlessly across all your
            devices.
          </p>
        </div>
        <div className="border border-gray-700 p-6 flex flex-col gap-5 rounded-4xl hover:border-[#09ffad]">
          <div className="p-4 w-fit  bg-[#00A797] rounded-3xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shield w-6 h-6 text-white"
              aria-hidden="true"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
          </div>
          <p className="text-xl md:text-2xl font-medium">Stay Focused</p>
          <p className="text-gray-400 text-xl ">
            Minimal design that keeps you focused on completing tasks, not
            managing tools.
          </p>
        </div>
      </div>
    </main>
  );
}

export default FeaturesSection;
