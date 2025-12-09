<script>
  import { clientSession } from "$lib/session.svelte.js"
  const { chapters } = $props()
</script>

<div class="window chapters">
  <div class="title-bar">
    <button aria-label="Close" class="close"></button>
    <h2 class="title" id="content-ontology">Chapters</h2>
    <button aria-label="Resize" class="resize"></button>
  </div>
  <div class="window-pane">

    <h3>All Chapters</h3>
    <ul>
      {#each chapters as chapter}
        <li>
          {chapter.Title}
        </li>
      {/each}
    </ul>

    {#if clientSession.data}
      <button class="btn">Create Chapter</button>
    {/if}
  </div>
</div>

<style>
  dialog {
    border: none;
    background: none;
  }
  .chapters {
    grid-column: 4/13;
  }
</style>