import Body from '../components/Addtocart/Body';
import Header from '../components/Addtocart/Header';
import Footer from '../components/Home/footer';
import Question from '../components/Home/question';

function Addtocart() {
  return (
    <div>
      <Header />
      <Body />
      <div className="mb-10">
        <Question />
      </div>
      <Footer />
    </div>
  );
}

export default Addtocart;
