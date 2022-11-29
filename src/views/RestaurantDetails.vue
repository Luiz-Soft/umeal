<template>
	<div>
		<h1
			style="
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			"
		>
			Restaurante
		</h1>
		<b-carousel
			id="carousel-1"
			v-model="slide"
			:interval="4000"
			controls
			indicators
			background="#ababab"
			img-width="1024"
			img-height="480"
			style="text-shadow: 1px 1px 2px #333"
			@sliding-start="onSlideStart"
			@sliding-end="onSlideEnd"
		>
			<!-- Text slides with image -->
			<b-carousel-slide
				img-src="https://media-cdn.tripadvisor.com/media/photo-s/17/2f/bb/fb/segunda-sala-1979.jpg"
			></b-carousel-slide>
			<b-carousel-slide
				img-src="https://res.cloudinary.com/tf-lab/image/upload/w_600,h_310,c_fill,q_auto,f_auto/restaurant/12fd8c34-59cc-43be-a728-85b6c2f7c416/b582faec-3eba-4d34-86d4-ec90043c6073.jpg"
			></b-carousel-slide>
			<b-carousel-slide
				img-src="https://res.cloudinary.com/tf-lab/image/upload/w_600,h_310,c_fill,q_auto,f_auto/restaurant/12fd8c34-59cc-43be-a728-85b6c2f7c416/34f26281-70a0-45db-890c-98ae1d8ed144.png"
			></b-carousel-slide>
		</b-carousel>
	</div>
</template>

<script>
	export default {
		name: 'RestaurantDetails',
	};
</script>
