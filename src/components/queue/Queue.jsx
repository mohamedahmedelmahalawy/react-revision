function Queue({
  id,
  name,
  service,
  status,
  serveBtnHandler,
  deleteQueueHandler,
}) {
  return (
    <article className="flex justify-between bg-gray-900 p-5">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-xl">{name}</h3>
        <p className="text-teal-300">Service: {service}</p>
        <h4 className="text-fuchsia-200 text-sm">
          {status === "waiting" && "waiting"}
          {status === "serve" && "Serving"}
          {status === "complete" && "Completed"}
        </h4>
      </div>
      <div className="flex items-baseline gap-3">
        <button
          className={`flex justify-center items-center 
            ${status === "serve" && "bg-blue-400"}
            ${status === "waiting" && "bg-green-400"} ${
            status === "complete" && "hidden"
          } px-6 py-1 rounded-xl font-bold text-gray-900 text-2xl `}
          onClick={() => serveBtnHandler(id)}
        >
          {status === "waiting" && "Serve"}
          {status === "serve" && "Complete"}
        </button>
        <button
          className="flex justify-center items-center bg-red-500 px-6 py-1 rounded-xl font-bold text-gray-900 text-2xl"
          onClick={() => deleteQueueHandler(id)}
          disabled={status !== "complete"}
        >
          x
        </button>
      </div>
    </article>
  );
}

export default Queue;
