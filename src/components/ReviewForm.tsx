import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs';
import './ReviewForm.css';

type ReviewProps = {
    data: {
        review: string,
        comment: string
    };
    updateFieldHandler: (key:string, value:string) => void;
}

const ReviewForm = ({ data, updateFieldHandler }: ReviewProps) => {
    return (
        <div className="review-form">
            <div className="form-control score-container">
                <label className="radio-container">
                    <input 
                        type="radio" 
                        value="dissatisfied" 
                        name="review" 
                        required 
                        checked={data.review === "dissatisfied"}
                        onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <BsFillEmojiFrownFill />
                    <p>Dissatisfied</p>
                </label>
                <label className="radio-container">
                    <input 
                        type="radio"
                        value="neutral" 
                        name="review"
                        required
                        checked={data.review === "neutral"}
                        onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <BsEmojiNeutralFill />
                    <p>Neutral</p>
                </label>
                <label className="radio-container">
                    <input 
                        type="radio"
                        value="satisfied"
                        name="review"
                        required
                        checked={data.review === "satisfied"}
                        onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <BsFillEmojiSmileFill />
                    <p>Satisfied</p>
                </label>
                <label className="radio-container">
                    <input 
                        type="radio"
                        value="very_satisfied"
                        name="review"
                        required
                        checked={data.review === "very_satisfied"}
                        onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <BsFillEmojiHeartEyesFill />
                    <p>Very Satisfied</p>
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="comment">Comment:</label>
                <textarea 
                    name="comment"
                    id="comment"
                    placeholder="Tell us about your experience with the product..."
                    required
                    value={data.comment}
                    onChange={(e) => updateFieldHandler("comment", e.target.value)}
                ></textarea>
            </div>
        </div>
    )
}

export default ReviewForm