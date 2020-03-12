import React from "react";

const Links = ({links=[]}) => {
    console.log(links);
    return (
      <div>
        {  Object.keys(links).length === 0 ?"": links.map(link => (
          <a href={"http://localhost:3000/"+link._id}>{link.url}</a>
        ))}
      </div>
    );
  };

  export default Links;