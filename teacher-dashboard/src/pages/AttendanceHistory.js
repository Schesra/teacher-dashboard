// src/pages/AttendanceHistory.js

import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/teacher_dashboard.css";

// import mock API
import { getHistory } from "../api/mockAttendance";

const AttendanceHistory = () => {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getHistory()
      .then((data) => setRecords(data))
      .catch(() =>
        setError(
          "Error: Không thể lấy dữ liệu điểm danh. Vui lòng thử lại sau."
        )
      );
  }, []);

  const filtered = records.filter(
    (r) =>
      r.date.includes(search) ||
      r.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="content-container">
        <Topbar title="Lịch Sử Điểm Danh" />

        <div className="scroll-content">
          <div className="table-container">
            <div className="table-header">
              <h3>Lịch Sử Điểm Danh</h3>
            </div>

            {error ? (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            ) : (
              <>
                <div className="action-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm theo ngày hoặc trạng thái..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                <table className="table">
                  <thead>
                    <tr>
                      <th>Ngày</th>
                      <th>Check In</th>
                      <th>Check Out</th>
                      <th>Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(search ? filtered : records).map((rec, i) => (
                      <tr key={i}>
                        <td>{rec.date}</td>
                        <td>{rec.checkIn || "--"}</td>
                        <td>{rec.checkOut || "--"}</td>
                        <td>{rec.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceHistory;
