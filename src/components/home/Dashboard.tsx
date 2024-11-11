import { useState } from "react";
import Topbar from "./Topbar";
import CDR from "./CDR";
import ScheduledCDR from "./ScheduledCDR";
import DownloadList from "./DownloadList";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("CDR");

  const renderContent = () => {
    switch (activeTab) {
      case "CDR":
        return <CDR />;
      case "Scheduled CDR":
        return <ScheduledCDR />;
      case "Download List":
        return <DownloadList />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full min-h-screen px-8 py-8 flex flex-col bg-gray-100">
      <Topbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-4">{renderContent()}</div>
    </section>
  );
};

export default Dashboard;
