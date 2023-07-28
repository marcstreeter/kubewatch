<script>
  import Button, { Label, Icon } from "@smui/button";
  let count = 0;
  const click = () => count++;
</script>

<h1>Hi Dali!</h1>
<p>
  This is just the beginning of a website built on
  <a href="https://kit.svelte.dev">svelte-kit</a>
  and deployed with github actions!
</p>
<Button on:mousedown={click}>
  <Icon class="material-icons">thumb_up</Icon>
  <Label>Click Me</Label>
</Button>
<p>
  {#if count}
    You've clicked {count} times!
  {:else}
    You haven't clicked the button yet...
  {/if}
</p>

<style>
  :global(:root) {
    --theme-primary: rgb(26, 143, 233);
    --theme-secondary: rgb(9, 247, 215);
    --theme-background: rgb(247, 243, 220);
  }
</style>
