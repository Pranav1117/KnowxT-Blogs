import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from 'recoil'
import * as Layouts from "./Components/Layouts";
import * as Pages from "./Pages";

function App() {
  return (
    <>
    <Toaster position="top-right"/>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts.Layout />}>
            <Route path="/profile" element={<Pages.Profile />} />
            <Route path="/blogs" element={<Pages.BlogPages.Blogs />} />
            <Route path="/blog/:id" element={<Pages.BlogPages.BlogsDescription />} />
            <Route path="/createnewblog" element={<Pages.BlogPages.CreateNewBlog/>} />
            <Route path="/updateblog" element={<Pages.BlogPages.UpdateBlog />} />
            <Route path="/dataseeding" element={<Pages.DataSeed />} />
          </Route>
          <Route path="/signup" element={<Pages.AuthPages.Signup />} />
          <Route path="/login" element={<Pages.AuthPages.Login />} />
        </Routes>
      </BrowserRouter>
      </RecoilRoot>

    </>
  );
}

export default App;
