import React from "react";

type TopbarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const Topbar: React.FC<TopbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ["CDR", "Scheduled CDR", "Download List"];

  return (
    <div className="w-full flex justify-start items-center border-b border-gray-300 pl-4 bg-white">
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`relative cursor-pointer font-semibold pt-2 pb-3 ${
              activeTab === tab ? "text-blue-500" : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-[-1px] w-full h-[2px] bg-blue-500"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
