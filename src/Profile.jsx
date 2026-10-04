
function Profile(props) {
    return (
        <div>
            <img src={props.img} width="150" />

            <h2>{props.name}</h2>

            <p>{props.desc}</p>
        </div>
    );
}

export default Profile;