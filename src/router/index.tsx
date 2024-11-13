import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "../components/App/App";
import HomePage from "../pages/HomePage/HomePage";
import AddNewPostPage from "../pages/AddNewPostPage/AddNewPostPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="home" />} />
      <Route path="home" element={<HomePage />} />
      <Route path="new-post" element={<AddNewPostPage />} />
    </Route>,
  ),
);

export default router;
