import Slider from "react-slick";
import Intro from './slide/intro';
export default function MyCarousel() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return (
		<Slider {...settings}>
			<div>
				<h3>1</h3>
			</div>
			<div>
				<h3>this is second</h3>
			</div>
			<div>
				<Intro></Intro>
			</div>
		</Slider>
	)
}
