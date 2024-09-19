import { ReactElement } from 'react';
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiFrownFill, BsFillEmojiNeutralFill } from 'react-icons/bs';
import "./Thanks.css";

type ThanksProps = {
    data: {
        name: string,
        review: string,
        comment: string,
    }
}

type emojiObject = {
    dissatisfied: ReactElement,
    neutral: ReactElement,
    satisfied: ReactElement,
    very_satisfied: ReactElement,
}

const emojiData: emojiObject = {
    dissatisfied: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }: ThanksProps) => {
    return (
        <div className="thanks-container">
            <h2>Almost there...</h2>
            <p>Your opinion is very important, soon you will receive a 10% discount coupon for your next purchase.</p>
            <p>To complete your review, click the "Submit" button below.</p>
            <h3>{data.name}, here is your review summary</h3>
            <p className="review-data">
                <span>Product satisfaction: </span>
                {emojiData[data.review as keyof typeof emojiData]}
            </p>
            <p className="review-data">
                <span>Comment: </span>
                {data.comment}
            </p>
        </div>
    )
}

export default Thanks