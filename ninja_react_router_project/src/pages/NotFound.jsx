import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A non est
        beatae mollitia animi tenetur, ad voluptates perspiciatis! Soluta, sint.
        Optio temporibus ex voluptate sed facilis. Dolor labore consequuntur
        fugiat!
      </p>
      <p>
        Go to the <Link to="/"> Home</Link> .
      </p>
    </div>
  );
};

export default NotFound;
