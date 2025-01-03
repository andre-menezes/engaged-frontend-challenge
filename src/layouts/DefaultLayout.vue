<template>
	<section class="content">
		<header>
			<h1>Vue 3 + TypeScript</h1>
		</header>
		<slot></slot>
		<footer>
			<p>&copy; {{ new Date().getFullYear() }} | {{ $t(`footer.developedBy`, { name: 'AM Code Tech' }) }} {{
				$t(`footer.rights`) }}
			</p>
		</footer>
	</section>
</template>

<style scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100vh;
}

.content header,
.content footer {
	padding: 1rem 0;
}
</style>