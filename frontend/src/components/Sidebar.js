import React from "react";
import "./css/Sidebar.css";
import SidebarOptions from "./SidebarOptions";


function Sidebar() {

    const spaces = [
  { title: 'Technology', imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=30&w=200' },
  { title: 'Food', imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTk4OTN8MHwxfHNlYXJjaHwxfHxBSXxlbnwwfHx8fDE2ODcyOTQ2NzB8&ixlib=rb-1.2.1&q=30&w=200' },
  { title: 'Full Stack Development', imageUrl: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=30&w=200' },
   { title: 'Fashion style', imageUrl: 'https://images.unsplash.com/photo-1524386189627-88c26ac1cc69?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
   {title:'AI',imageUrl:'https://plus.unsplash.com/premium_photo-1682814734289-00ed896e74d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFpfGVufDB8fDB8fHww'},
   {
    title:'Socal media',imageUrl:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D'
   }
];
  return (
    <div className="sidebar">
       {
        spaces.map(space=>(
            <SidebarOptions key={space.title} title={space.title} imageUrl={space.imageUrl} />
        ))
       }
    </div>
  );
}

export default Sidebar;
