import css from './Options.module.css';

const Options = ({ options, updateFeedback, totalFeedback, reset }) => {
   
    return (
        <div className={css['btn-wrap']}>
            {Object.keys(options).map((key) => (
                <button onClick={() => updateFeedback(key)} className={css['btn-option']} key={key}>{key}</button>
            ))}
            {totalFeedback>0 && <button onClick={reset} className={css['btn-option']}>Reset</button>}
            
        </div>
    );
};

export default Options;