import { useState } from "react";
import { Filter } from "lucide-react";
import { IoCloudDownloadOutline, IoPlayCircleOutline } from "react-icons/io5";
import { TbArrowsExchange2 } from "react-icons/tb";
import { CgTrash } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";
import { RiRefreshLine } from "react-icons/ri";

// Generate unique example records with 50 distinct entries
const generateExampleData = () => {
  return Array.from({ length: 50 }, (_, index) => ({
    time: `11/11/2024 11:${(index % 60).toString().padStart(2, "0")} AM`,
    callFrom: `Caller${index + 1}`,
    callTo: `98765432${index}`,
    callDuration: `00:00:${(index % 60).toString().padStart(2, "0")}`,
    ringDuration: `00:00:${(index % 60).toString().padStart(2, "0")}`,
    talkDuration: `00:00:${(index % 60).toString().padStart(2, "0")}`,
    status: index % 2 === 0 ? "BUSY" : "ANSWERED",
    recordingFile: `recording_${index + 1}.mp3`,
  }));
};

const CDRComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  // Example data with unique records
  const exampleData = generateExampleData();

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = exampleData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(exampleData.length / recordsPerPage);

  return (
    <div className="w-full min-h-screen bg-white p-8 flex flex-col space-y-6">
      <div className="w-full flex justify-between gap-6">
        {/* Left side inputs */}
        <div className="flex gap-6 w-full lg:w-3/4">
          <div className="flex flex-col w-full sm:w-1/4">
            <label
              htmlFor="time"
              className="mb-2 text-sm font-semibold text-gray-700"
            >
              Time
            </label>
            <div className="flex gap-2">
              <input
                id="fromTime"
                type="text"
                placeholder="From"
                className="px-4 py-2 border rounded-[3px] text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-gray-600 font-bold pt-2">~</p>
              <input
                id="toTime"
                type="text"
                placeholder="To"
                className="px-4 py-2 border rounded-[3px] text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-1/4">
            <label
              htmlFor="callFrom"
              className="mb-2 text-sm font-semibold text-gray-700"
            >
              Call From
            </label>
            <input
              id="callFrom"
              type="text"
              placeholder="Call from"
              className="px-4 py-2 border rounded-[3px] text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <TbArrowsExchange2 size={20} className="mt-9 text-gray-700" />
          <div className="flex flex-col w-full sm:w-1/4">
            <label
              htmlFor="callTo"
              className="mb-2 text-sm font-semibold text-gray-700"
            >
              Call To
            </label>
            <input
              id="callTo"
              type="text"
              placeholder="Call to"
              className="px-4 py-2 border rounded-[3px] text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Status Field with Dropdown */}
          <div className="flex flex-col w-full sm:w-1/4">
            <label
              htmlFor="status"
              className="mb-2 text-sm font-semibold text-gray-700"
            >
              Status
            </label>
            <select
              id="status"
              className="px-4 py-2 border rounded-[3px] text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled selected>
                Select Status
              </option>
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end items-center w-full lg:w-auto mt-7">
          <button className="px-3 py-2 bg-blue-500 text-white rounded-[3px] flex items-center gap-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="border-b-2 border-dotted border-gray-300 mt-1"></div>
      <div className="w-full flex gap-4 text-sm">
        <button className="bg-blue-500 p-2 rounded-[3px] text-white flex items-center gap-2">
          <IoCloudDownloadOutline size={20} />
          Download CDR
          <MdArrowDropDown size={20} className="ml-2" />
        </button>

        {/* Delete Button */}
        <button className="bg-gray-200 border border-gray-400 p-2 rounded-[3px] text-gray-700 flex items-center gap-2">
          <CgTrash size={20} />
          Delete
        </button>

        {/* Refresh Button */}
        <button className="bg-blue-500 p-2 rounded-[3px] text-white flex items-center gap-2">
          <RiRefreshLine size={20} />
          Refresh
        </button>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto text-[13px]">
          <thead className="text-slate-700">
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-2 border-b text-start">Time</th>
              <th className="px-4 py-2 border-b text-start">Call From</th>
              <th className="px-4 py-2 border-b text-start">Call To</th>
              <th className="px-4 py-2 border-b text-start">Call Duration</th>
              <th className="px-4 py-2 border-b text-start">Ring Duration</th>
              <th className="px-4 py-2 border-b text-start">Talk Duration</th>
              <th className="px-4 py-2 border-b text-start">Status</th>
              <th className="px-4 py-2 border-b text-start">Recording File</th>
              <th className="px-4 py-2 border-b text-start">Delete</th>
              <th className="px-4 py-2 border-b text-start">
                <Filter size={20} color="blue" />
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Render the current page's records */}
            {currentRecords.map((record, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 border-b">{record.time}</td>
                <td className="px-4 py-2 border-b">{record.callFrom}</td>
                <td className="px-4 py-2 border-b">{record.callTo}</td>
                <td className="px-4 py-2 border-b">{record.callDuration}</td>
                <td className="px-4 py-2 border-b">{record.ringDuration}</td>
                <td className="px-4 py-2 border-b">{record.talkDuration}</td>
                <td className="px-4 py-2 border-b">{record.status}</td>
                <td className="px-4 py-2 border-b">
                  {record.status !== "ANSWERED" && (
                    <div className="flex gap-2">
                      <IoPlayCircleOutline
                        size={20}
                        className="text-blue-500"
                      />
                      <IoCloudDownloadOutline
                        size={20}
                        className="text-blue-500"
                      />
                      <CgTrash size={20} className=" text-red-500" />
                    </div>
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  <CgTrash size={20} className="text-red-500" />
                </td>
                <td className="px-4 py-2 border-b"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
        >
          Prev
        </button>
        <div className="flex items-center">
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CDRComponent;
