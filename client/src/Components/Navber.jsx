import React from "react";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Navber() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink
          exact
          to="/"
          style={{ textDecoration: "none", color: "black" }}
        >
          Home
        </NavLink>

        <NavLink
          exact
          to="/ShowData"
          style={{ textDecoration: "none", color: "black" }}
        >
          ShowData
        </NavLink>
      </Container>
    </Navbar>
  );
}

// export default function Navber() {
//   return (
//     <div>
//       <nav>
//         <Button variant="primary">
//           <NavLink
//             exact
//             to="/"
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             Home
//           </NavLink>
//         </Button>
//         {"  "}
//         <Button variant="primary">
//           <NavLink
//             exact
//             to="/ShowData"
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             ShowData
//           </NavLink>
//         </Button>
//         {/* <ul>
//           <li>
//             <NavLink
//               exact
//               to="/"
//               activeStyle={{
//                 frontweight: "bold",
//                 color: "green",
//               }}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               exact
//               to="/ShowData"
//               activeStyle={{
//                 frontweight: "bold",
//                 color: "green",
//               }}
//             >
//               ShowData
//             </NavLink>
//           </li>
//         </ul> */}
//       </nav>
//     </div>
//   );
// }
