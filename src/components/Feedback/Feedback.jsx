import css from './Feedback.module.css';
import clsx from 'clsx';

const Feedback = ({ options, totalFeedback, goodPercent }) => {
    return (
        <div className={css.feedback}>{Object.keys(options).map((key) => (
            <p className={clsx(css['p-feedback'], css[key])} key={key}>{key}: {options[key]}</p>
        ))
        }
            <p className={css['p-feedback']}>Total: {totalFeedback}</p> 
            <p className={css['p-feedback']}>Positive: {goodPercent}</p>  

        </div>
    );
};

export default Feedback;