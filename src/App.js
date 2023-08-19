// import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState} from "react";
import Header from "./Component/Header";
import FeedbackList from "./Component/FeedbackList";
import feedbackdata from "./Component/feedbackdata";
import FeedbackStats from "./Component/FeedbackStats";
import FeedbackForm from "./Component/FeedbackForm";
import AboutPage from "./Component/Pages/AboutPage";
import AboutIconLink from "./Component/AboutIconLink";
import { FeedbackProvider } from "./Component/context/FeedbackContext";

export default function App() {
  const [feedback, setFeedback] = useState(feedbackdata);

  
 
  return (
    <FeedbackProvider>
      <Router>
        <Header
          text="Feedback UI"
          bgColor="rgba(0,0,0,0.4)"
          textColor="#ff6a95"
        />

        {/* <Routes>
        <Route exact path="/" element={<FeedbackForm handleAdd={handleAdd} />}>

          <Route path="stats" element={<FeedbackStats feedback={feedback} />} />
          <Route path="list"
            element={
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            }
          />
        </Route>

        <Route path="/about" element={AboutPage} />
      </Routes> */}

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <FeedbackForm/>
                <FeedbackStats />
                <FeedbackList
                />
              </div>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}
