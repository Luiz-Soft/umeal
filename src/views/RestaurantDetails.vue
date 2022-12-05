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
			Nome do Restaurante
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
		<ul class="mt-5 border border-dark rounded">
			<li>
				<font-awesome-icon icon="fa-solid fa-house" color="#502314" /><b>
					Morada:</b
				>
				Praça da Repbública, 123
			</li>
			<li>
				<font-awesome-icon icon="fa-solid fa-file-invoice" color="#502314" /><b>
					Avaliação:</b
				>
				⭐️⭐️⭐️⭐️
			</li>
			<li>
				<font-awesome-icon icon="fa-solid fa-globe" color="#502314" /><b>
					Website:</b
				>
				sitiodorestaurante.com.pt
			</li>
			<li>
				<font-awesome-icon icon="fa-solid fa-phone" color="#502314" /><b>
					Telemóvel:</b
				>
				932-937-475
			</li>
			<li>
				<font-awesome-icon icon="fa-solid fa-clock" color="#502314" /><b>
					Horário:</b
				>
				8:00 –10:00
			</li>
		</ul>

		<VueSlickCarousel v-bind="settings">
			<img
				src="../assets/coupons/Bitoque.png"
				alt="Girl in a jacket"
				width="300"
				height="140"
			/>
			<img
				src="../assets/coupons/Hamburguer.png"
				alt="Girl in a jacket"
				width="300"
				height="140"
			/>
			<img
				src="../assets/coupons/Kebab.png"
				alt="Girl in a jacket"
				width="300"
				height="140"
			/>
			<img
				src="../assets/coupons/Pizza.png"
				alt="Girl in a jacket"
				width="300"
				height="140"
			/>
			<img
				src="../assets/coupons/Bitoque.png"
				alt="Girl in a jacket"
				width="300"
				height="140"
			/>
			<img
				src="../assets/coupons/Hamburguer.png"
				alt="Girl in a jacket"
				width="300"
				height="140"
			/>
			<img
				src="../assets/coupons/Kebab.png"
				alt="Girl in a jacket"
				width="300"
				height="140"
			/>
			<img
				src="../assets/coupons/Pizza.png"
				alt="Girl in a jacket"
				width="300"
				height="140"
			/>
			<img
				src="../assets/coupons/Bitoque.png"
				alt="Girl in a jacket"
				width="300"
				height="140"
			/>
			<img
				src="../assets/coupons/Hamburguer.png"
				alt="Girl in a jacket"
				width="300"
				height="140"
			/>
			<img
				src="../assets/coupons/Kebab.png"
				alt="Girl in a jacket"
				width="300"
				height="140"
			/>
			<img
				src="../assets/coupons/Pizza.png"
				alt="Girl in a jacket"
				width="300"
				height="140"
			/>
		</VueSlickCarousel>
		<b-modal
			v-model="modalVisibility"
			:title="'AVALIE NOSSA APLICAÇÃO'"
			hide-footer="true"
			><div class="modal-container">
				<SelectLanguage />
				<p>
					Este foi o caso de uso de
					<strong> visualizar um Restaurante</strong> do app UMeal
				</p>
				<button
					type="button"
					class="btn btn-secondary m-2"
					id="initial-modal-button"
					@click.prevent="goToLink()"
				>
					O que achastes?
				</button>
			</div></b-modal
		>
	</div>
</template>

<script>
	import VueSlickCarousel from 'vue-slick-carousel';
	import 'vue-slick-carousel/dist/vue-slick-carousel.css';

	import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
	export default {
		name: 'RestaurantDetails',
		components: { VueSlickCarousel },
		data() {
			return {
				settings: {
					infinite: true,
					slidesToShow: 3,
					speed: 500,
					rows: 2,
					slidesPerRow: 1,
				},
				modalVisibility: false,
			};
		},
		mounted() {
			setTimeout(this.showModal, 5000);
		},
		methods: {
			goToLink() {
				window.open('https://forms.gle/Nmo89s8TpvS3UMtT7');
			},
			showModal() {
				this.modalVisibility = true;
			},
		},
	};
</script>
