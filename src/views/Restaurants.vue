<template>
	<div>
		<l-map style="height: 100vh" :zoom="zoom" :center="center">
			<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
			<l-marker :lat-lng="markerLatLng" @click="goTo('restaurantDetails')">
				<l-icon
					:icon-size="[80, 80]"
					:icon-anchor="dynamicAnchor"
					icon-url="https://static.thenounproject.com/png/1661307-200.png"
				/>
			</l-marker>
		</l-map>
		<b-modal
			v-model="modalVisibility"
			:title="'Bem vindo ao Umeal'"
			hide-footer="true"
			><div class="modal-container">
				<SelectLanguage />
				<p>
					Esta é a nova APP da UMeal, desenvolvida pelos alunos da disciplina de
					PGDI da Universidade de Coimbra
				</p>
				<p>
					<strong>
						Esta aplicação cobre o caso de uso de selecionar
						restaurante:</strong
					>
					navegue pelos restaurantes listados no mapa e selecione o que lhe
					parece mais interessante.
				</p>
				<div
					style="
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
					"
				>
					<img
						src="../assets/umeal-logo.jpeg"
						alt="logo umeal"
						height="50%"
						width="50%"
						class="justify-content"
					/>
					<button
						type="button"
						class="btn btn-secondary m-2"
						id="initial-modal-button"
						@click.prevent="closeModal()"
					>
						Deixe-me ver o site!
					</button>
					<h1>
						siga nosso
						<a href="https://www.tiktok.com/@umeal_uc">TikTok!</a>
					</h1>
				</div>
			</div></b-modal
		>
	</div>
</template>

<script>
	import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet';

	export default {
		name: 'Restaurants',
		components: {
			LMap,
			LTileLayer,
			LMarker,
			LIcon,
		},
		data() {
			return {
				modalVisibility: true,
				url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
				attribution:
					'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				zoom: 30,
				center: [40.209652529592496, -8.419574472243566],
				markerLatLng: [40.209652529592496, -8.419574472243566],
			};
		},
		computed: {
			dynamicSize() {
				return [this.iconSize, this.iconSize * 1.15];
			},
			dynamicAnchor() {
				return [this.iconSize / 2, this.iconSize * 1.15];
			},
		},
		methods: {
			goTo(pageName) {
				this.$router.push({ name: pageName });
			},
			closeModal() {
				this.modalVisibility = false;
			},
		},
	};
</script>
