import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import API_ROUTE from "./apiRoute";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CreatePost from './components/posts/CreatePost';
import Dashboard from './components/Dashboard';
import { history } from './history'
import Profile from './components/users/Profile';
import ForgotPassword from './components/users/ForgotPassword';
import ResetPassword from './components/users/ResetPassword';
import PostDetails from './components/posts/PostDetails';
import AuthPosts from './components/posts/AuthPosts';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/authposts" element={<AuthPosts />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
  // return <h1>Hellow World</h1>
};

export default AppRoutes;

// const AppRoutes = () => {
//   return (
//     <BrowserRouter>
//       <CssBaseline />
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/player/:playlistId" element={<PlayerPage />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// const Routes  = () => {
//     return (
//       <Router history={history}>
//         <div className="App">
//           <Switch>
//             <Route exact path='/' component={ Dashboard } />
//             <Route path='/login' component={Login} />
//             <Route path='/signup' component={Register} />
//             <Route path='/createpost' component={CreatePost} />
//             <Route path='/profile/:id' component={Profile} />
//             <Route path='/forgotpassword' component={ForgotPassword} />
//             <Route path='/resetpassword/:token' component={ResetPassword} />
//             <Route path='/posts/:id' component={PostDetails} />
//             <Route path='/authposts' component={AuthPosts} />
//           </Switch>
//         </div>
//       </Router>
//     );
// }

// export default AppRoutes;