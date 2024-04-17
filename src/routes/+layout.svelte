<script>
	import '../app.pcss';
  import Header from "./Header.svelte";
</script>

<Header />
<main class="mx-auto px-6 max-w-7xl">
  <slot></slot>
</main>
