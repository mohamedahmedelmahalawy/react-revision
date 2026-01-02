import { useState } from "react";
import AddQueue from "../../components/addqueue/AddQueue";
import CurrentQueue from "../../components/currentqueue/CurrentQueue";

function QueueManagementSystem() {
  const [queues, setQueues] = useState([]);
  const queuesHandler = (newQueue) => {
    setQueues((curr) => [...curr, newQueue]);
  };
  const serveBtnHandler = (id) => {
    const item = queues.find((q) => q.id === id);
    const itemIndex = queues.findIndex((q) => q.id === id);
    let newArray = [...queues];
    if (item.status === "waiting") {
      newArray[itemIndex] = { ...item, status: "serve" };
    } else if (item.status === "serve") {
      newArray[itemIndex] = { ...item, status: "complete" };
    }
    setQueues(newArray);
    console.log(queues);
  };
  const deleteQueueHandler = (id) => {
    const newArray = queues.filter((q) => q.id !== id);
    setQueues(newArray);
  };
  console.log(queues);
  return (
    <div className="flex flex-col items-center gap-6 bg-gray-900 p-16 w-full h-screen text-white">
      <h1 className="font-bold text-5xl">Queue Management System</h1>
      <p className="text-xl">Manage your customers efficiently</p>
      <div className="flex flex-wrap justify-center w-full">
        <div className="w-2/6 min-w-sm">
          <AddQueue queuesHandler={queuesHandler} />
        </div>
        <div className="w-4/6 min-w-xl">
          <CurrentQueue
            queues={queues}
            serveBtnHandler={serveBtnHandler}
            deleteQueueHandler={deleteQueueHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default QueueManagementSystem;
