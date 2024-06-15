
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
import "./css/QuoraBox.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function QuoraBox() {
  const user = useSelector(selectUser);
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <AccountCircleIcon src={user?.photo} />
      </div>
      <div className="quoraBox__quora">
        <h5>What is your question or link?</h5>
      </div>
    </div>
  );
}

export default QuoraBox;
