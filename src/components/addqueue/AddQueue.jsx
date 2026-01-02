import { useState } from "react";

const initialUser = {
  id: "",
  name: "",
  service: "",
  status: "waiting",
};
function AddQueue({ queuesHandler }) {
  const [user, setUser] = useState(initialUser);

  const submitHandler = (e) => {
    e.preventDefault();
    setUser(initialUser);
    queuesHandler({ ...user, id: new Date().getTime() });
  };
  return (
    <form
      className="flex flex-col gap-4 bg-gray-700 m-4 p-8 rounded-2xl"
      onSubmit={submitHandler}
    >
      <h2 className="font-semibold text-3xl">Add to Queue</h2>
      <input
        type="text"
        placeholder="Customer Name"
        className="bg-gray-900 px-4 py-2 borderborder-gray-400"
        value={user.name}
        onChange={(e) =>
          setUser((curr) => {
            return { ...curr, name: e.target.value };
          })
        }
      />
      <select
        name="service"
        className="bg-gray-900 p-2 text-white"
        onChange={(e) =>
          setUser((curr) => {
            return { ...curr, service: e.target.value };
          })
        }
        value={user.service}
      >
        <option value="" disabled>
          Select Service
        </option>

        <option value="consultation">Consultation</option>
        <option value="payment">Payment</option>
        <option value="support">Support</option>
      </select>
      <button className="bg-gray-900 p-2 rounded">Add Customer</button>
    </form>
  );
}

export default AddQueue;
