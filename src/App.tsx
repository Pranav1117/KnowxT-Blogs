import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import * as Layouts from "./Components/Layouts";
import * as Pages from "./Pages";
import { ROUTES } from "./Constants";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layouts.Layout />}>
              <Route path={ROUTES.PROFILE} element={<Pages.Profile />} />
              <Route
                path={ROUTES.BLOG_ALL}
                element={<Pages.BlogPages.Blogs />}
              />
              <Route
                path={ROUTES.BLOG_DESCRIPTION}
                element={<Pages.BlogPages.BlogsDescription />}
              />
              <Route
                path={ROUTES.BLOG_CREATE_NEW}
                element={<Pages.BlogPages.CreateNewBlog />}
              />
              <Route
                path={ROUTES.BLOG_UPDATE}
                element={<Pages.BlogPages.UpdateBlog />}
              />
              {/* <Route path="/dataseeding" element={<Pages.DataSeed />} /> */}
            </Route>

            <Route path="/" element={<Layouts.PublicLayout />}>
              <Route
                path={ROUTES.SIGNUP}
                element={<Pages.AuthPages.Signup />}
              />
              <Route path={ROUTES.LOGIN} element={<Pages.AuthPages.Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
