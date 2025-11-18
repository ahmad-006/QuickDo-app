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
            <Check
              color="white"
              size="35"
              className="border bg-[#00AB72] rounded-full "
            />
          </div>
          <p className="text-xl md:text-2xl font-medium">SImple and Clean</p>
          <p className="text-gray-400 text-xl ">
            No unnecessary features. Just add tasks, check them off, and stay
            organized effortlessly.
          </p>
        </div>

        <div className="border border-gray-700 p-6 flex flex-col gap-5 rounded-4xl hover:border-[#08ffad] ">
          <div className="p-4 w-fit  bg-[#00AB72] rounded-3xl ">
            <Smartphone
              color="white"
              size="35"
              className=" bg-[#00AB72] rounded-full "
            />
          </div>
          <p className="text-xl md:text-2xl font-medium">Always Accessible</p>
          <p className="text-gray-400 text-xl ">
            Access your tasks from anywhere. Works seamlessly across all your
            devices.
          </p>
        </div>
        <div className="border border-gray-700 p-6 flex flex-col gap-5 rounded-4xl hover:border-[#09ffad]">
          <div className="p-4 w-fit  bg-[#00AB72] rounded-3xl ">
            <Shield
              color="white"
              size="35"
              className=" bg-[#00AB72] rounded-full "
            />
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
