import React, { useState } from "react";

const ScanPage = () => {
  const [activeTab, setActiveTab] = useState("file");
  const [fileName, setFileName] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleCheck = () => {
    const result = Math.random() > 0.5 ? "safe" : "infected";
    setScanResult(result);
    setShowResult(true);
  };

  const handleGoBack = () => {
    setShowResult(false);
    setScanResult(null);
  };

  return (
    <div className="scan-page">
      <h2>Choose your file</h2>
      {!showResult ? (
        <div>
          <div className="tabs">
            <button
              className={activeTab === "file" ? "tab active" : "tab"}
              onClick={() => setActiveTab("file")}
            >
              File
            </button>
            <button
              className={activeTab === "url" ? "tab active" : "tab"}
              onClick={() => setActiveTab("url")}
            >
              URL
            </button>
          </div>

          {activeTab === "file" ? (
            <div className="file-upload">
              <button
                className="file-icon-button"
                onClick={() => document.getElementById("fileInput").click()}
              >
                📄
              </button>
              <input
                type="file"
                id="fileInput"
                className="file-input"
                onChange={handleFileChange}
              />
              <label htmlFor="fileInput" className="choose-file">
                Choose file
              </label>
              {fileName ? (
                <p className="file-name">Selected file: <strong>{fileName}</strong></p>
              ) : (
                <p className="file-name">No file selected</p>
              )}
              <button className="check-button" onClick={handleCheck}>
                Check
              </button>
            </div>
          ) : (
            <div className="url-scan">
              <div className="icon">🌐</div>
              <input
                type="text"
                className="url-input"
                placeholder="Enter URL to scan"
              />
              <button className="check-button" onClick={handleCheck}>
                Check
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className={`result ${scanResult}`}>
          {scanResult === "safe" ? (
            <>
              <h2>✅ No threats detected!</h2>
              <p>Your file or URL appears safe.</p>
            </>
          ) : (
            <>
              <h2>⚠️ Threats detected!</h2>
              <p>Malicious content has been found. Take action immediately.</p>
            </>
          )}
          <button className="check-button" onClick={handleGoBack}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default ScanPage;
