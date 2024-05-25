import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import tasksData from './TaskDetails.json';
import "./css/LandingPage.css";
import "./css/TaskCard.css";
import myimage from '../assets/target_1070980 (1).png'



function LandingPage() {
  const [tasks, setTasks] = useState(tasksData);
  const [selectedTask, setSelectedTask] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  
  
  const handleTaskClick = (taskId) => {
    const task = tasks.find(task => task.id === taskId);
    setSelectedTask(task);
    setOpenDialog(true);
  };
  
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const data = [
    {
      id: 1,
      title: "Dr.YYYYYYY",
      description: "Submission of CIA results",
      date: "25-04-2024",
      type: "progress",
    },
    {
      id: 2,
      title: "Dr.SASASAS",
      description: "Spread this info to students",
      date: "29-04-2024",
      type: "yet",
    },
    {
      id: 3,
      title: "Dr.qwerty",
      description: "Awareness on civil exams",
      date: "23-04-2024",
      type: "completed",
    },
    {
      id: 4,
      title: "Dr.SASASAS",
      description: "Spread this info to students",
      date: "29-04-2024",
      type: "yet",
    },
    {
      id: 5,
      title: "Dr.qwerty",
      description: "Awareness on civil exams",
      date: "23-04-2024",
      type: "completed",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const getTaskStatusColor = (type) => {
    switch (type) {
      case "yet":
        return "var(--yettostart)";
      case "progress":
        return "var(--progress)";
      case "completed":
        return "var(--completed)";
      default:
        return "inherit";
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredData = activeTab === "all" ? data : data.filter((item) => item.type === activeTab);

  return (
    <>
      <div className="land-container">
        <div className="main-bar">
          <input type="text" className="main-search" placeholder="🔎 Search..." />
        </div>
        <div className="main-tabs">
          <div onClick={() => handleTabClick("all")}><h2>All Tasks</h2></div>
          <div onClick={() => handleTabClick("yet")}><h2>Yet to start</h2></div>
          <div onClick={() => handleTabClick("progress")}><h2>In progress</h2></div>
          <div onClick={() => handleTabClick("completed")}><h2>Completed</h2></div>
        </div>
        <div className="taskbar">
          <h3>Tasks assigned</h3>
          <div className="task-list">
            {filteredData.map((item, index) => (
              <div key={index} id={item.type} onClick={() => handleTaskClick(item.id)}>
                <div>
                  <h3>{item.title} assigned</h3>
                  <div>
                    <p>Task Description: {item.description}</p>
                    <p style={{marginRight:"10px"}}>Date: {item.date}</p>
                  </div>
                </div>
                <div className="task-status" style={{ backgroundColor: getTaskStatusColor(item.type) }}>&nbsp;</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Dialog onClose={handleCloseDialog} open={openDialog} fullWidth maxWidth="md" className="custom-dialog">
      <DialogContent dividers>
      <div className='logo'>
      <img src={myimage} alt='Logo'></img>
      </div>
              {selectedTask && (
                <div className="task-description">
                <div className="boxassign">
        
                <div className="texts">
                        <p>Assingnedby  :   {selectedTask.AssignedBy}</p>
                        </div>
                
                </div>
                
                <div className="boxtask">
                <div className="texts">
                        <p>Task Name:  {selectedTask.Task}</p>
                        </div>
                </div>
                <div className="boxdesc">
                <div className="texts">
                        <p>Description  :  {selectedTask.Desc}</p>
                        </div>
                </div>
                <div className="boxdate">
                <div className="texts">
                        <p>Due date :  {selectedTask.Due}</p>
                        </div>
                </div>
                <div className="boxstatus">
                <div className="texts">
                        <p>Task Stat:  {selectedTask.Task_s}</p>
                        </div>
                </div>
               { <div className="button-container">
                <div className="item">{
                  <button className="button">Cancel</button>
              }
              </div>
              <div className="item">{
                  <button className="button1">Update Task Status</button>
              }
              </div>
            </div>}
            {/*<div className="btk">{
              <button className="button">OK</button>
              }
              </div>*/}
            </div>
              )}
            </DialogContent>
            
          </Dialog>
    </>
  );
}

export default LandingPage;