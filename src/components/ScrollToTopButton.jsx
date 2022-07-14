import { useEffect, useState } from 'react'
import { HiChevronUp } from 'react-icons/hi';
import classNames from 'utils/classNames';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <button onClick={scrollToTop} className={
      classNames(
        'w-12 h-12 flex items-center justify-center shadow pb-0.5 bg-purple-900 rounded-full fixed z-20 right-2 bottom-2 duration-200',
        showButton ? 'visible opacity-100' : 'invisible opacity-0',
      )
    }>
      <HiChevronUp className="text-white text-4xl" />
    </button>
  )
}

export default ScrollToTopButton