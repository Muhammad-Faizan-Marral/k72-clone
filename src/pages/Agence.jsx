import React from "react";
import AgencyHeroSection from "../components/agence/AgencyHeroSection";
import AgencyQualites from "../components/agence/AgencyQualites";
import AgencyMarque from "../components/agence/AgencyMarque";
import AgencyFottoer from "../components/agence/AgencyFottoer";

const Agence = () => {
  return (
    <div>
      <AgencyHeroSection />
      <AgencyQualites />
      <AgencyMarque />
      <AgencyFottoer/>
    </div>
  );
};

export default Agence;
