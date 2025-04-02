

// import react from "react";
// import "./Public.css";

// function Public(){

//     return(
//     <>
//         <h2>Gemini</h2>
//         <div>
//             <h1>Your public links</h1>
//             <p>You can share chats or an individual prompt and response. once you do you can manage public links that you've created and see their details here.</p>
//             <button>Chat with Gemini</button>
//         </div>
//         </>
        
//     )
// }
// export default Public;

import React from "react";
import "./Public.css";

function Public() {
  return (
    <>
      <h2 className="Public-gemini">Gemini</h2>
      <div className="Public-container">
        <div className="Public-content">
          <h1>Your public links</h1><br></br>
          <p>
            You can share chats or an individual prompt and response. Once you
            do, you can manage public links that you've created and see their
            details here.
          </p><br></br>
          <button className="Public-button">Chat with Gemini</button>
        </div>
      </div>
    </>
  );
}

export default Public;
