import css from './Options.module.css'

const Options = ({ updateFeedback, reset, total }) => {

    
   
   return (
    <div className={css.container}>
        <button className={css.stylebtn} onClick={() => updateFeedback('good')}>Good </button>
        <button className={css.stylebtn} onClick={() => updateFeedback('neutral')}>Neutral</button>
        <button className={css.stylebtn} onClick={() => updateFeedback('bad')}>Bad</button>
        {total > 0 ? <button className={css.stylebtn} onClick={reset}>Reset</button> : false }
        
    </div>
   )

}

export default Options;