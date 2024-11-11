import { Button } from "../ui/button";

const DashboardComponent = () => {
  return (
    <div className="px-4 py-10 w-full min-h-screen">
      <div className="flex gap-2 mb-3 text-lg font-bold flex-wrap items-center">
        <p className="text-slate-600">Reports and Recordings</p>
        <p className="text-lg font-normal text-slate-600">/</p>
        <p className="text-blue-600">Recording Files</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center items-start gap-1 mb-4 flex-wrap w-full">
        <div className="flex md:flex-row flex-col gap-2 md:items-center items-start w-full md:w-auto">
          <label className="text-slate-900 w-auto text-start">Time:</label>
          <input
            type="date"
            className="border p-2 rounded outline-none focus:outline-2 focus:outline-slate-400 text-center w-full md:w-auto"
          />
          <span className="text-gray-500 lg:flex md:flex hidden">~</span>
          <span className="lg:hidden md:hidden flex">To:</span>
          <input
            type="date"
            className="border p-2 rounded outline-none focus:outline-2 focus:outline-slate-400 text-center w-full md:w-auto"
          />
        </div>

        <label
          htmlFor="call from"
          className="lg:hidden md:hidden flex items-start text-start"
        >
          Call From:
        </label>
        <input
          type="text"
          placeholder="Call From"
          className="border p-2 rounded outline-none focus:outline-2 focus:outline-slate-400 w-full md:w-auto"
        />

        <label
          htmlFor="call to"
          className="lg:hidden md:hidden flex items-start text-start"
        >
          Call To:
        </label>
        <input
          type="text"
          placeholder="Call To"
          className="border p-2 rounded outline-none focus:outline-2 focus:outline-slate-400 w-full md:w-auto"
        />

        <label
          htmlFor="ID"
          className="lg:hidden md:hidden flex items-start text-start"
        >
          ID:
        </label>
        <input
          type="text"
          placeholder="ID"
          className="border p-2 rounded outline-none focus:outline-2 focus:outline-slate-400 w-full md:w-auto"
        />

        <Button className="bg-green-600 hover:bg-green-700 md:mt-0 lg:mt-0 mt-2 text-white p-2 rounded w-full md:w-auto">
          Download Recordings
        </Button>
        <Button className="bg-red-600 hover:bg-red-700 text-white md:mt-0 lg:mt-0 mt-2 p-2 rounded w-full md:w-auto">
          Delete
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead>
            <tr className="bg-gray-200 border-b">
              <th className="p-2 border border-slate-600 text-start">
                <input type="checkbox" />
              </th>
              <th className="p-2 border border-slate-600 text-start">ID</th>
              <th className="p-2 border border-slate-600 text-start">Time</th>
              <th className="p-2 border border-slate-600 text-start">
                Call From
              </th>
              <th className="p-2 border border-slate-600 text-start">
                Call To
              </th>
              <th className="p-2 border border-slate-600 text-start">
                Call Duration
              </th>
              <th className="p-2 border border-slate-600 text-start">Size</th>
              <th className="p-2 border border-slate-600 text-start">
                Communication Type
              </th>
              <th className="p-2 border border-slate-600 text-start">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-slate-600">
                <input type="checkbox" />
              </td>
              <td className="p-2 border border-slate-600">00965972523390</td>
              <td className="p-2 border border-slate-600">
                2024/11/05 17:30:31 PM
              </td>
              <td className="p-2 border border-slate-600">Fatima Kahf</td>
              <td className="p-2 border border-slate-600">00965972523390</td>
              <td className="p-2 border border-slate-600">00:01:11</td>
              <td className="p-2 border border-slate-600">1.10 MB</td>
              <td className="p-2 border border-slate-600">Outbound</td>
              <td className="p-2 border flex flex-col sm:flex-row gap-2 w-full justify-between border-slate-600">
                <Button className="p-2 w-full rounded-lg border bg-green-600 hover:bg-green-700">
                  Play
                </Button>
                <Button className="p-2 w-full rounded-lg border bg-red-600 hover:bg-red-700">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardComponent;
