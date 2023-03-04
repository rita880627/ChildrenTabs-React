import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabs">
      {React.Children.map(children, (child, tabId) => {
        const { title } = child.props;
        const isTabActive = tabId === activeTab;

        return (
          <button
            className={`btn ${isTabActive ? "btn-active" : ""}`}
            disabled={isTabActive}
            onClick={() => handleTabClick(tabId)}
          >
            {title}
          </button>
        );
      })}
      <div className="view">{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
