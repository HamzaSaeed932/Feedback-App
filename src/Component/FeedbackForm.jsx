import React ,{useState,useEffect,useContext } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from './context/FeedbackContext';

export default function FeedbackForm() {
    const [text,setText]=useState('');
    const [rating,setRating]=useState(10);
    const [btnDisabeled,setBtnDisabeled]=useState(true);
    const [message,setMessage]=useState(null)

    const {handleAdd,feedbackEdit,updateFeedback}=useContext(FeedbackContext)

    
    

    useEffect(()=>{
      if(feedbackEdit.edit === true){
        setBtnDisabeled(false);
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)

      }
    },[feedbackEdit])


    const handleTextChange =(e)=>{
        if(text===''){
            setBtnDisabeled(true)
            setMessage(null)
        }
        else if(text != '' && text.trim().length < 10){
            setBtnDisabeled(true)
            setMessage('Text must be greater then 10 Character')     
        }
        else{
            setMessage(null)     
            setBtnDisabeled(false)
        }

        setText(e.target.value)
    }
    const handleRating=(value)=>{
      setRating(value)
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      const newFeedback ={
        text: text,
        rating:rating
      }

      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id,newFeedback)
      }
      else{
        handleAdd(newFeedback)
      }
    }

   

  return (
    <Card>
        <form  onSubmit={handleSubmit}>
      <h1>How would you rate your services with us?</h1>
      <RatingSelect  handleRating={handleRating}/>

      <div className="input-group">
        <input type="text" placeholder='Write your review' onChange={handleTextChange} value={text}/>
        <Button type="submit" version='secondary' isDisabled={btnDisabeled}>Send</Button>
      </div>
        {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}
