import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero";
import Description from "../../src/components/description/Description";
import Footer from "../../src/components/footer/Footer";

export default function How(){
    return(
        <div>
            <Header />
            <Hero text="HOW IT WORKS"/>
            <Description />
            <Footer />
        </div>
    );
}