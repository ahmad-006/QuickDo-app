import { Check, Plus } from "lucide-react";

function SingleTask({ checked, text, isLast }) {
  return (
    <div
      className={`bg-[#172130] p-4 rounded-xl ${isLast ? "mt-6 border cursor-pointer border-gray-400 border-dotted hover:border-gray-300 " : checked ? "my-1.5" : "my-1.5 border-[0.5px] border-gray-600 hover:border-gray-500"} `}
    >
      <div className="flex items-center gap-5 ">
        <span
          className={`${checked ? "bg-[#008259]" : "bg-transparent border flex items-center justify-center border-gray-500 "} ${!(isLast || checked) ? "hover:border-[#008259] p-2.5" : "p-1"}  rounded-full`}
        >
          {checked && <Check color="#ffffff" size={18} />}
          {isLast && <Plus color="#9CA3AF" size={18} />}
        </span>
        <span
          className={`text-[16px] ${checked ? "line-through text-gray-600" : isLast ? "text-gray-400" : "text-gray-50"}  `}
        >
          {text}
        </span>
      </div>
    </div>
  );
}

export default SingleTask;
