import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'; // Quote Icon

const TestimonialTemplate = ({ testimonial }) => {
  return (
    // Outer container: Added vertical padding for spacing inside the Swiper slide
    <div className="flex flex-col items-center h-full text-center py-10 sm:py-12 md:py-16 px-4">
      
      {/* Quote Icon */}
      <FontAwesomeIcon
        icon={faQuoteLeft}
        className="text-sky-500 text-4xl sm:text-5xl mb-6 opacity-80"
      />

      {/* Main Quote (The detailed feedback) */}
      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 max-w-3xl leading-snug mb-8 sm:mb-10">
        “{testimonial?.quote}”
      </p>

      {/* Divider */}
      <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mb-8 rounded-full"></div>

      {/* Client Info */}
      <div className="flex flex-col items-center">

        {/* Optional Avatar - Styled for prominence */}
        {testimonial?.avatar && (
          <img
            src={testimonial.avatar}
            alt={testimonial?.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-4 border-4 border-sky-200 shadow-md"
          />
        )}

        {/* Client Name */}
        <p className="text-lg sm:text-xl font-extrabold text-sky-600 mt-2">
          {testimonial?.name}
        </p>

        {/* Designation */}
        <p className="text-sm sm:text-base text-slate-500 italic">
          {testimonial?.designation}
        </p>

        {/* Testimonial message (short summary) */}
        <p className="text-md sm:text-lg text-slate-600 mt-6 max-w-xl italic">
            — {testimonial?.message}
        </p>
      </div>
    </div>
  );
};

export default TestimonialTemplate;