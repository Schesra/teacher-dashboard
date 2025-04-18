import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showAttendanceMenu, setShowAttendanceMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const handleNavigate = (path, menu) => {
    navigate(path);
    setActiveMenu(menu);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Avata</h2>
        <p>Nguyễn Văn A</p>
        <p>Giáo Viên Toán</p>
      </div>

      <ul className="menu">
        {/* Trang Chủ */}
        <li
          onClick={() => handleNavigate("/dashboard", "dashboard")}
          className={`menu-item ${activeMenu === "dashboard" ? "active" : ""}`}
        >
          <i className="fas fa-home"></i> Trang Chủ
        </li>

        {/* Hồ sơ */}
        <li
          className={`menu-item has-dropdown ${
            showProfileMenu ? "active" : ""
          }`}
          onClick={() => setShowProfileMenu(!showProfileMenu)}
        >
          <div className="sidebar-dropdown-header">
            <i className="fas fa-user"></i> Hồ sơ
            <span className="dropdown-icon">{showProfileMenu ? "▲" : "▼"}</span>
          </div>
          {showProfileMenu && (
            <ul className="sidebar-dropdown-menu">
              <li
                onClick={() => handleNavigate("/profile/view", "viewProfile")}
                className={`submenu-item ${
                  activeMenu === "viewProfile" ? "active-submenu" : ""
                }`}
              >
                Xem Hồ sơ
              </li>
              <li
                onClick={() => handleNavigate("/profile/edit", "editProfile")}
                className={`submenu-item ${
                  activeMenu === "editProfile" ? "active-submenu" : ""
                }`}
              >
                Chỉnh sửa Hồ sơ
              </li>
            </ul>
          )}
        </li>

        {/* Hợp đồng */}
        <li
          onClick={() => handleNavigate("/contract", "contract")}
          className={`menu-item ${activeMenu === "contract" ? "active" : ""}`}
        >
          <i className="fas fa-file-contract"></i> Hợp đồng
        </li>

        {/* Nghỉ phép */}
        <li
          onClick={() => handleNavigate("/leave", "leave")}
          className={`menu-item ${activeMenu === "leave" ? "active" : ""}`}
        >
          <i className="fas fa-calendar-times"></i> Nghỉ phép
        </li>

        {/* Điểm danh */}
        <li
          className={`menu-item has-dropdown ${
            showAttendanceMenu ? "active" : ""
          }`}
        >
          <div
            className="sidebar-dropdown-header"
            onClick={() => setShowAttendanceMenu(!showAttendanceMenu)}
          >
            <i className="fas fa-check-circle"></i> Điểm danh
            <span className="dropdown-icon">
              {showAttendanceMenu ? "▲" : "▼"}
            </span>
          </div>
          {showAttendanceMenu && (
            <ul className="sidebar-dropdown-menu">
              <li
                onClick={() => handleNavigate("/attendance", "attendance")}
                className={`submenu-item ${
                  activeMenu === "attendance" ? "active-submenu" : ""
                }`}
              >
                Check In/Out
              </li>
              <li
                onClick={() =>
                  handleNavigate("/attendance/history", "attendance-history")
                }
                className={`submenu-item ${
                  activeMenu === "attendance-history" ? "active-submenu" : ""
                }`}
              >
                Lịch Sử Điểm Danh
              </li>
            </ul>
          )}
        </li>

        {/* Thông báo */}
        <li
          onClick={() => handleNavigate("/notifications", "notifications")}
          className={`menu-item ${
            activeMenu === "notifications" ? "active" : ""
          }`}
        >
          <i className="fas fa-bell"></i> Thông báo
        </li>

        {/* Tin nhắn */}
        <li
          onClick={() => handleNavigate("/messages", "messages")}
          className={`menu-item ${activeMenu === "messages" ? "active" : ""}`}
        >
          <i className="fas fa-envelope"></i> Tin nhắn
        </li>

        {/* Đăng xuất */}
        <li
          onClick={() => handleNavigate("/", "logout")}
          className="menu-item logout"
        >
          <i className="fas fa-sign-out-alt"></i> Đăng xuất
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
