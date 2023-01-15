<script setup>
	import { onBeforeMount, ref } from "vue";
	import { addIdZeros, firstCapitalLetter } from "@/js/functions.js";

	const props = defineProps({
		name: {
			type: String,
			default: null,
		},
		url: {
			type: String,
			
		},
	});
	
	let show = ref(true);

	const showDetails = () => {
		show.value === false ? (show.value = true) : (show.value = false);
	};

	let pokeDetails = ref({});
	let pokemonImg = ref();
	let pokemonId = ref();
	let pokemonType = ref();
	let pokeType = ref("");
	let pokeAttack = ref();
	let pokeDefense = ref();

	onBeforeMount(async () => {
		const resp = await fetch(props.url);
		const data = await resp.json();
		pokeDetails.value = data;
		pokemonImg.value =
		pokeDetails.value.sprites.other.home.front_default;
		pokemonId.value = pokeDetails.value.id;
		pokemonType.value = pokeDetails.value.types[0].type.name;
		pokeType = pokemonType.value;
		pokeAttack.value = pokeDetails.value.stats[1].base_stat;
		pokeDefense.value = pokeDetails.value.stats[2].base_stat;
	});

</script>

<template>
	<div class="card">
		<picture class="card__container-img">
			<img
				:src="pokemonImg"
				alt="Imagen de Pokemon"
			/>
		</picture>
		<div class="card__container-propertiers">
			<h2 class="card__container-propertiers__id">
				N.º {{ addIdZeros(pokemonId) }}
			</h2>
			<h1 class="card__container-propertiers__name">
				{{ firstCapitalLetter(props.name) }}
			</h1>
			<p
				class="card__container-propertiers__type"
				v-color-type
			>
				{{ firstCapitalLetter(pokeType) }}
			</p>
			<div
				class="card__container-propertiers__button"
				@click="showDetails"
			>
				<i
					class="fa-solid fa-plus"
					:class="{ none: !show }"
				></i>
				<i
					class="fa-solid fa-minus"
					:class="{ none: show }"
				></i>
			</div>
		</div>
		<div
			class="card__show-propertiers"
			:class="{ none: show }">
			<div>
				<p class="card__show-propertiers-details">
					<span class="bold">Weight: </span>{{ pokeDetails.weight }}kg
				</p>
				<p class="card__show-propertiers-details">
					<span class="bold">Height: </span>{{ pokeDetails.height }}m
				</p>
			</div>
			<div>
				<p class="card__show-propertiers-details">
					<span class="bold">Attack: </span> {{ pokeAttack }}
				</p>
				<p class="card__show-propertiers-details">
					<span class="bold">Defense: </span> {{ pokeDefense }}
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use "../scss/colors" as c;
	@use "@/scss/mixins" as m;

	.card {
		@include m.borderRadius();
		@include m.mv(600px){
			margin: 0 auto;
			width: 80%;
		}

		&__container-img {
			@include m.flex(flex, auto, auto, center, center);
			@include m.borderRadius();
			background: map-get(c.$colors, "light-grayish");
			height: 10em;

			img {
				margin: 0 auto;
				max-width: 80%;
				max-height: 80%;
			}
		}
		&__container-propertiers {
			@include m.flex(flex, column, auto, auto, auto);
			margin: 0.1em 0.5em;

			&__id {
				color: map-get(c.$colors, "grey");
				font-size: 0.8em;
			}

			&__name {
				color: map-get(c.$colors, "very-dark-blue");
				font-size: 1.2em;
				font-weight: bold;
				margin-top: 0.5em;
			}

			&__type {
				@include m.borderRadius();
				background: map-get(c.$colors, "orange");
				font-size: 0.7em;
				margin-top: 0.3em;
				text-align: center;
				width: 5em;
			}

			&__button {
				@include m.borderRadius();
				align-self: flex-end;
				background-color: map-get(c.$colors, "green");
				bottom: 1.1em;
				color: map-get(c.$colors, "white");
				cursor: pointer;
				padding: 0.1em 0.3em;
				position: relative;
				&:hover {
					opacity: 0.7;
				}
			}
		}
		&__show-propertiers {
			@include m.flex(flex, row, auto, space-around, center);
			text-align: center;

			div {
				@include m.flex(flex, column, auto, center, center);
				font-size: 0.65em;
				.card__show-propertiers-details {
					@include m.borderRadius();
					background-color: rgb(216, 205, 205);
					margin: 0.2em ;
					width: 95%;
					padding: 0.3em 0.3em;
					@include m.mv(700px){
						@include m.flex(flex, column, auto, center, center);
                		height: 4em;
       				 }
				}
			}
		}

		.none {
			display: none;
		}
	}
</style>
