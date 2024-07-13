type ProfileType = {
    showProfile: boolean;
    setShowProfile: (profile: boolean) => void;
}

function Profile({showProfile, setShowProfile}: ProfileType) {
    return (
        <div className={showProfile ? "absolute w-dvw h-full bg-opacity-30 bg-black" : ""} onClick={() => {setShowProfile(false)}}>

        </div>
    )
}

export default Profile;
