import Queue from "../queue/Queue";

function CurrentQueue({ queues, serveBtnHandler, deleteQueueHandler }) {
  return (
    <div className="flex flex-col gap-4 bg-gray-700 m-4 p-8 rounded-2xl">
      <h2 className="font-semibold text-3xl">Current Queue</h2>
      <div className="flex flex-col gap-2 text-yellow-300">
        {queues &&
          queues.map((q) => {
            return (
              <Queue
                key={q.id}
                {...q}
                serveBtnHandler={serveBtnHandler}
                deleteQueueHandler={deleteQueueHandler}
              />
            );
          })}
        {queues.length === 0 && <p>no customers in queue</p>}
      </div>
    </div>
  );
}

export default CurrentQueue;
