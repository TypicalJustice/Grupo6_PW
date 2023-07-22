'use client'

import React, { useState } from "react";
import Datos from "./tab_datos.js";
import Universidad from "./tab_universidad.js";
import Presentacion from "./tab_presentacion.js";
import "../css/tabs.css"

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    //  Functions to handle Tab Switching
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
    };
    const handleTab3 = () => {
      // update the state to tab3
      setActiveTab("tab3");
  };

  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Datos de usuario</li>
        <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Universidad</li>
        <li className={activeTab === "tab3" ? "active" : ""} onClick={handleTab3}>Presentación</li>
      </ul>
      <div className="outlet">
        {/* content will be shown here */}
        {activeTab === "tab1" ? <Datos /> : activeTab === "tab2" ? <Universidad /> : <Presentacion />}
        
        
      </div>
    </div>
  );
};

export default Tabs;