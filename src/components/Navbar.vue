<template>
	<div>
		<b-navbar
			toggleable="lg"
			type="primary"
			variant="primary"
			fixed="bottom"
			style="background-color: #f5ebdc !important"
		>
			<b-nav>
				<b-nav-item
					class="font-weight-bold"
					@click.prevent="goTo('restaurants')"
				>
					<div style="display: flex; flex-direction: column">
						<font-awesome-icon icon="fa-solid fa-utensils" color="#502314" />
						<span
							style="color: #502314 !important; font-weight: bold !important"
							>Restaurantes</span
						>
					</div></b-nav-item
				>
				<b-nav-item class="font-weight-bold" @click.prevent="goTo('coupons')"
>
					<div style="display: flex; flex-direction: column">
						<font-awesome-icon icon="fa-solid fa-ticket" color="#502314" />
						<span
							style="color: #502314 !important; font-weight: bold !important"
							>Cupões</span
						>
					</div></b-nav-item
				>
				<b-nav-item class="font-weight-bold" @click.prevent="goTo('profile')">
					<div style="display: flex; flex-direction: column">
						<font-awesome-icon icon="fa-solid fa-user" color="#502314" />
						<span
							style="color: #502314 !important; font-weight: bold !important"
							>Perfil</span
						>
					</div></b-nav-item
				>
			</b-nav>
		</b-navbar>
	</div>
</template>

<script>
	export default {
		name: 'Navbar',
		data() {
			return {
				searchedCountry: '',
				selectedRegion: null,
			};
		},

		methods: {
			goTo(routeName) {
				this.$router.push({ name: routeName });
			},
		},
	};
</script>
<style>
	.cursor-pointer {
		cursor: pointer;
		margin-left: 20px !important;
	}
	.select-margin {
		margin-right: 20px !important;
	}
	.language-position {
		display: flex;
		flex-direction: row;
		height: 20%;
		align-items: baseline;
	}

	@media only screen and (max-device-width: 820px) {
	}
</style>
