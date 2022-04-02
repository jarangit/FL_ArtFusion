import "./App.css";
import AboutSection from "./components/about_section/AboutSection";
import Banner from "./components/banner/Banner";
import Apr from "./components/content/APR/Apr";
import ImportantFactors from "./components/content/content_important_factors/ImportantFactors";
import FastLoanAdvoce from "./components/content/fastLoan_Advance/FastLoanAdvance";
import AskedQuestions from "./components/content/Q&A/AskedQuestions";
import Step from "./components/content/step/Step";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Banner />
      <div id="_lg_form_"></div>

      <div className="container">
        <AboutSection />
        <ImportantFactors />
        <hr />
        <FastLoanAdvoce />
        <hr />
        <Step />
        <AskedQuestions />
        <hr />
        <Apr />
      </div>
      <Footer />
    </div>
  );
}

export default App;
