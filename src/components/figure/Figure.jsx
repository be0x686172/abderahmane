import './style.scss';

const Figure = (props) => {
    return (
        <figure className="c-Figure">
            <img src={props.image} style={props.style} />
            <figcaption>
                {props.figcaption}
            </figcaption>
        </figure>
    );
};

export default Figure;