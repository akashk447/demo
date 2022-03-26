import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidepanel = () => {
  return (
    <>
    <aside className="left-sidebar" data-sidebarbg="skin5">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav" className="pt-4">
              <li className="sidebar-item">
                <NavLink
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/show-students"
                  aria-expanded="false"
                  ><i className="mdi mdi-view-dashboard"></i
                  ><span className="hide-menu">Show Students</span></NavLink>
              </li>

              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i className="mdi mdi-receipt"></i
                  ><span className="hide-menu">Manipulate Student </span></a
                >
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <NavLink to="/add-student" className="sidebar-link"
                      ><i className="mdi mdi-note-outline"></i
                      ><span className="hide-menu"> Add Student </span></NavLink
                    >
                  </li>
                  <li className="sidebar-item">
                    <NavLink to="/edit-student" className="sidebar-link"
                      ><i className="mdi mdi-note-plus"></i
                      ><span className="hide-menu"> Edit Student </span></NavLink
                    >
                  </li>
                  <li className="sidebar-item">
                    <a href="form-wizard.html" className="sidebar-link"
                      ><i className="mdi mdi-note-plus"></i
                      ><span className="hide-menu"> Delete Student </span></a
                    >
                  </li>
                </ul>
              </li>

            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Sidepanel