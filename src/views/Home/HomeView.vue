<template>
	<v-container class="elevation-2 w-100 pa-8 text-subtitle font-weight-bold rounded-lg bg-white">
		<label>{{ $t(`filter.title`) }}</label>
		<v-form class="d-flex align-center ga-4 mt-2">
			<v-text-field :placeholder="$t(`filter.placeholder`)" hide-details variant="outlined"></v-text-field>
			<v-btn color="primary" text="Pesquisar" size="x-large">
				<template #prepend>
					<custom-icon icon="search" />
				</template>
			</v-btn>
		</v-form>
	</v-container>
</template>
