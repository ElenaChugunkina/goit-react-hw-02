import css from './App.module.css'
import Description from '../Description/Description';
import Options from '../Options/Options';
import { useState, useEffect } from 'react';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
function App() {
    //  const [ clicks, setClicks ] = useState({
    //     good: 0,
    //      neutral: 0,
    //     bad: 0,
    //  }
    //  );

    const [ clicks, setClicks ] = useState(() => {
    const savedFeedback = localStorage.getItem('saved-clicks');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
});

useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
    }, [clicks]);



    const updateFeedback  = (feedbackType) =>{
        setClicks(state => ({...state, [feedbackType]: state[feedbackType] + 1}));
    }

    const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
    console.log(totalFeedback);

    const Reset = () => {
        setClicks({
            good: 0,
            neutral: 0,
            bad: 0,
        })
    };
    
const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);






    
return (
        <div className={css.container}>
            <Description/>
            <Options updateFeedback={updateFeedback} reset={Reset} total={totalFeedback}/>
            {totalFeedback > 0 ? <Feedback clicks={clicks} total={totalFeedback} positiveFeedback={positiveFeedback}/> : <Notification/>}
            
        </div>
    )

}

export default App;
