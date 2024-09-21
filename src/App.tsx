import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Auth from "./Pages/AuthPages";
import * as Layouts from "./Components/Layouts";
import * as Blog from "./Pages/Blogs";
import { Toaster } from "react-hot-toast";
import DataSeed from "./Pages/DataSeed";
import { RecoilRoot } from 'recoil'
import Profile from "./Pages/UserProfile/Profile";
function App() {
  return (
    <>
    <Toaster position="top-right"/>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts.Layout />}>
            <Route path="/blogs" element={<Blog.Blogs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/blog/:id" element={<Blog.BlogsDescription />} />
            <Route path="/createnewblog" element={<Blog.CreateNewBlog />} />
            <Route path="/updateblog" element={<Blog.UpdateBlog />} />
            <Route path="/dataseeding" element={<DataSeed />} />
          </Route>
          {/* <Route ></Route> */}
          <Route path="/signup" element={<Auth.Signup />} />
          <Route path="/login" element={<Auth.Login />} />
        </Routes>
      </BrowserRouter>
      </RecoilRoot>

    </>
  );
}

export default App;
