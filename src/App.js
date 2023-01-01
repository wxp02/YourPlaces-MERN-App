import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
 
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UpdatePlace from './places/pages/UpdatePlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from "./places/pages/UserPlaces";
 
const App = () => {
  return (
   <Router>
    <MainNavigation />
     <Routes>
       <Route path="/" element={<Users/>}/>
       <Route path="/:userId/places" element={<UserPlaces/>}/>
       <Route path="/places/new" element={<NewPlace/>}/>
       <Route path="/places/:placeId" element={<UpdatePlace/>}/>
     </Routes>
   </Router>
  );
};
 
export default App;