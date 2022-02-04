import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import ProfileContainer from "../../../src/components/profile/ProfileContainer";
import dataProfiles from "../../../data/profile.json";
import { useRouter } from "next/router";
import { useState , useEffect } from "react";
import styles from "./Profile.module.scss";


export default function Profile() {
    
    const router = useRouter();
    const profileId = router.query.id;
    
    const [profiles, setProfiles] = useState([]);
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        setProfiles(dataProfiles);
        setProfile(profiles[0]);
    })
    
    return (
        <div className="wrapper">
            <Header/>
            <img className={styles.background} src='../../../images/background.png' />
            <ProfileContainer {...profile}/>
            <Footer/>
      </div>
    );
}