import { Tabs, Tab } from "react-bootstrap";
import Employment from "./employment";
import Education from "./education";
import { useState } from "react";

const History: React.FC = () => {
  const [activeTab, setActiveTab] = useState("employment");

  const handleTabSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setActiveTab(eventKey.toString());
  };

  return (
    <div id="history">
      <Tabs
        activeKey={activeTab}
        onSelect={handleTabSelect}
        defaultActiveKey="home"
        id="tab-history"
        className="mb-3"
      >
        <Tab eventKey="employment" title="Employment">
          <Employment />
        </Tab>
        <Tab eventKey="education" title="Education">
          <Education />
        </Tab>
      </Tabs>
    </div>
  );
};

export default History;
