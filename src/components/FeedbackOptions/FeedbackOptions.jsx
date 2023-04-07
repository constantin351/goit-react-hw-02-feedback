import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.feedbackoptions_list}>
            {options.map(option => (
                <li key={option} className={css.feedbackoptions_item}>
                    <button
                        className={css.feedbackoptions_btn}
                        type="button"
                        name={option}
                        onClick={onLeaveFeedback}>
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    )
};


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;

