// import AppRouter from "./router/AppRouter.jsx";
// import Navbar from "./components/Navbar.jsx";

// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <AppRouter />
//     </>
//   );
// }

import { AnimatePresence } from "framer-motion";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <AppRouter />
      </AnimatePresence>
    </>
  );
}
