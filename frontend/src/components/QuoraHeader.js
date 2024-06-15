// import React, { useState } from "react";
// import HomeIcon from "@mui/icons-material/Home";
// import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
// import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import CloseIcon from '@mui/icons-material/Close';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import "./css/QuoraHeader.css";
// import { Modal } from "react-responsive-modal";
// import "react-responsive-modal/styles.css";
// import { Button} from "@mui/material";
// import axios from "axios";
// import { logout, selectUser } from "../feature/userSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { auth } from "../firebase";
// import { signOut } from "firebase/auth";
// function QuoraHeader() {
// const [isModalOpen ,setIsModalOpen]=useState(false)
//  const [inputUrl, setInputUrl] = useState("");
//   const [question, setQuestion] = useState("");
// const Close = <CloseIcon />;
// const dispatch = useDispatch();
//   const user = useSelector(selectUser);
// const handleSubmit = async () => {
//     if (question !== "") {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const body = {
//         questionName: question,
//         questionUrl: inputUrl,
//         user: user,
//       };
//       await axios
//         .post("http://localhost:3000/api/questions", body, config)
//         .then((res) => {
//           console.log(res.data);
//           alert(res.data.message);
//           window.location.href = "/";
//         })
//         .catch((e) => {
//           console.log(e);
//           alert("Error in adding question");
//         });
//     }
//   };
//    const handleLogout = () => {
//     if (window.confirm("Are you sure to logout ?")) {
//       // signout mehtod h firebase ka 
//       signOut(auth)
//         .then(() => {
//           dispatch(logout());
//           console.log("Logged out");
//         })
//         .catch(() => {
//           console.log("error in logout");
//         });
//     }
//   };
//   return (
//     <div className="qHeader">
//       <div className="qHeader-content">
//         <div className="qHeader__logo">
//           <img
//             src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
//             alt="logo" 
//           />
//         </div>
//         <div className="qHeader__icons">
//           <div className="qHeader__icon">
//             <HomeIcon />
//           </div>
//           <div className="qHeader__icon">
//             <FeaturedPlayListIcon />
//           </div>
//           <div className="qHeader__icon">
//             <AssignmentTurnedInIcon />
//           </div>
//           <div className="qHeader__icon">
//             < PeopleAltIcon/>
//           </div>
//           <div className="qHeader__icon">
//             <NotificationsNoneIcon/>
//           </div>
//         </div>
//         <div className="qHeader__input">
//           <SearchIcon />
//           <input type="text" placeholder="Search questions" />
//         </div>
//         <div className="qHeader__Rem">
//           <span onClick={handleLogout} >
//             <AccountCircleIcon  src={user?.photo} />
//           </span>
//           <Button onClick={()=>setIsModalOpen(true)}>Add Question</Button>
//           <Modal
//             open={isModalOpen}
//             closeIcon={Close}
//              onClose={() => setIsModalOpen(false)}
//             closeOnEsc
//             center
//             closeOnOverlayClick={false}
//             styles={{
//               overlay: {
//                 height: "auto",
                
//               },
//             }}
//           >
//             <div className="modal__title">
//               <h5>Add Question</h5>
//               <h5>Share Link</h5>
//             </div>
//             <div className="modal__info">
//               <AccountCircleIcon   src={user?.photo} className="avatar" />
//               <div className="modal__scope">
//                 <PeopleAltIcon />
//                 <p>Public</p>
//                 < ExpandMoreIcon/>
//               </div>
//             </div>
//             <div className="modal__Field">
//               <Button
//                 value={question}
//                 onChange={(e) => setQuestion(e.target.value)}
//                 type=" text"
//                 placeholder="Start your question with 'What', 'How', 'Why', etc. "
//               />
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//               >
//                 <input
//                   type="text"
//                     value={inputUrl}
//                   onChange={(e) => setInputUrl(e.target.value)}
//                   style={{
//                     margin: "5px 0",
//                     border: "1px solid lightgray",
//                     padding: "10px",
//                     outline: "2px solid #000",
//                   }}
//                   placeholder="Optional: inclue a link that gives context"
//                 />
//                  {inputUrl !== "" && (
//                   <img
//                     style={{
//                       height: "40vh",
//                       objectFit: "contain",
//                     }}
//                     src={inputUrl}
//                     alt="displayimage"
//                   />
//                 )}
//               </div>
//             </div>
//             <div className="modal__buttons">
//               <button  className="cancle"  onClick={() => setIsModalOpen(false)} >
//                 Cancel
//               </button>
//               <button onClick={handleSubmit} type="submit" className="add">
//                 Add Question
//               </button>
//             </div>
//           </Modal>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuoraHeader;


import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./css/QuoraHeader.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Button } from "@mui/material";
import axios from "axios";
import { logout, selectUser } from "../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function QuoraHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const Close = <CloseIcon />;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user,
      };
      try {
        const res = await axios.post("http://localhost:3000/api/questions", body, config);
        console.log(res.data);
        alert(res.data.message);
        window.location.href = "/";
      } catch (e) {
        console.log(e);
        alert("Error in adding question");
      }
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure to logout ?")) {
      signOut(auth)
        .then(() => {
          dispatch(logout());
          console.log("Logged out");
        })
        .catch(() => {
          console.log("error in logout");
        });
    }
  };

  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif" alt="logo" />
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon"><HomeIcon /></div>
          <div className="qHeader__icon"><FeaturedPlayListIcon /></div>
          <div className="qHeader__icon"><AssignmentTurnedInIcon /></div>
          <div className="qHeader__icon"><PeopleAltIcon /></div>
          <div className="qHeader__icon"><NotificationsNoneIcon /></div>
        </div>
        <div className="qHeader__input">
          <SearchIcon />
          <input type="text" placeholder="Search questions" />
        </div>
        <div className="qHeader__Rem">
          <span onClick={handleLogout}><AccountCircleIcon src={user?.photo} /></span>
          <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
          <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{ overlay: { height: "auto" } }}
          >
            <div className="modal__title">
              <h5>Add Question</h5>
              <h5>Share Link</h5>
            </div>
            <div className="modal__info">
              <AccountCircleIcon src={user?.photo} className="avatar" />
              <div className="modal__scope">
                <PeopleAltIcon />
                <p>Public</p>
                <ExpandMoreIcon />
              </div>
            </div>
            <div className="modal__Field">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Start your question with 'What', 'How', 'Why', etc."
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  style={{ margin: "5px 0", border: "1px solid lightgray", padding: "10px", outline: "2px solid #000" }}
                  placeholder="Optional: include a link that gives context"
                />
                {inputUrl !== "" && (
                  <img
                    style={{ height: "40vh", objectFit: "contain" }}
                    src={inputUrl}
                    alt="displayimage"
                  />
                )}
              </div>
            </div>
            <div className="modal__buttons">
              <button className="cancel" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button onClick={handleSubmit} type="submit" className="add">Add Question</button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default QuoraHeader;
