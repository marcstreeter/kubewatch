<script context="module">
  export const prerender = true;
  let count = 0;
  const click = () => count++;
</script>

<h1>Welcome to KubeWatch</h1>
<p>
  This is just the beginning of a website built on
  <a href="https://kit.svelte.dev">svelte-kit</a>
  and deployed with github actions!
</p>
<button on:click={click}>Clicked {count} times</button>
