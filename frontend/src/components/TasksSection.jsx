import SingleTask from "./SingleTask";

function TasksSection() {
  return (
    <div className="mt-16  md:max-w-[60%] mx-auto  bg-[#008259] rounded-2xl  ">
      <div className="px-6 py-6 text-[16px] ">
        <p>My Tasks</p>
        <p>4 tasks • 1 completed</p>
      </div>
      <div className="bg-[#101828] flex flex-col p-6 py-8 border-[0.5px] border-gray-600">
        <SingleTask checked={true} text={"Review project proposal"} />
        <SingleTask checked={false} text={"Update design mockups"} />
        <SingleTask checked={false} text={"Make a project"} />
        <SingleTask checked={false} text={"Schedule team meeting"} />
        <SingleTask checked={false} text={"Add a new task..."} isLast={true} />
      </div>
    </div>
  );
}

export default TasksSection;
