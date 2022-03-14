import React, { useState } from 'react'
import Tabs from "./components/Tabs"
import './App.css';

function App() {
  const [tabs, setTabs] = useState([

    {
      label: "Tab 1",
      content: "Tab 1 content is showing here."
    },
    {
      label: "Tab 2",
      content: "Tab 2 content is showing here."
    },
    {
      label: "Tab 3",
      content: "Tab 3 content is showing here."
    },

  ])
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="App">
      <Tabs tabs={tabs} activeTab = {activeTab} setActiveTab = {setActiveTab} />
      <p>{tabs[activeTab].content}</p>
    </div>
  );
}

export default App;
