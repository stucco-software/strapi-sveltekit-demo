<script>
  import Members from "$lib/Members.svelte"
  import Chapters from "$lib/Chapters.svelte"
  import Events from "$lib/Events.svelte"
  import { setSession } from "$lib/session.svelte.js"

  const {data, form} = $props()

  console.log(form)
  if (form) {
    setSession(form)
  }

</script>

<div class="grid">
  <Members />

  <Chapters chapters={data.chapters} />

  <Events  events={data.events} />

</div>

<style>
  dialog {
    border: none;
    background: none;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
</style>