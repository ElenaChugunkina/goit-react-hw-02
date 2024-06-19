import css from './Feedback.module.css'

const Feedback = (props) => {
    return (
        <div className={css.container}>
            <p className={css.text}>Good:{props.clicks.good}</p>
            <p className={css.text}>Neutral:{props.clicks.neutral}</p>
            <p className={css.text}>Bad:{props.clicks.bad}</p>
            <p className={css.text}>Total:{props.total}</p>
            <p className={css.text}>Positive:{props.positiveFeedback}</p>
        </div>
    )
}

export default Feedback;