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
		},
	};
</script>
