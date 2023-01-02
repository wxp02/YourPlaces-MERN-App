import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
 
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
 
const App = () => {
  return (
    <Router>
     <MainNavigation />
      <Routes>
        <Route path="/" element={<Users/>}/>
        <Route path="/:userId/places" element={<UserPlaces/>}/>
        <Route path="/places/new" element={<NewPlace/>}/>
        <Route path="/places/:placeId" element={<UpdatePlace/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </Router>
   );
 };
  
 export default App;