import { useState,createContext } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback,setFeedback]=useState([
        { id:1,rating:10,text:
            'This is test 1'},
        { id:2,rating:5,text:
            'This is test 2'},
        { id:3,rating:8,text:
            'This is test 3'},
    ]);

    const [feedbackEdit,setFeedbackEdit]=useState({
      item:{},
      edit:false,
    });

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure?")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      };

      const handleAdd = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
      };

      const editFeedback=(item)=>{
        setFeedbackEdit({
          item,
          edit:true,
        })
      }
      
      const updateFeedback =(id,updItem)=>{
         setFeedback(feedback.map((item)=>(
          item.id === id ? {...item,...updItem}: item
          )))
            setFeedbackEdit({ edit: false });
         
      }

    return (<FeedbackContext.Provider value={{feedback,deleteFeedback,handleAdd,editFeedback,feedbackEdit,updateFeedback}}>
        {children}
       
    </FeedbackContext.Provider>)
}

export default FeedbackContext;