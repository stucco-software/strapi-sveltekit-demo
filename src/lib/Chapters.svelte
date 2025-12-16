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
      {#each chapters as chapter}
          <details>
            <summary>
              {chapter.Title}
            </summary>
            <h4>Board</h4>
            <ul>
              {#each chapter.board as member}
                <li>{member.username}</li>
              {/each}
            </ul>

            <h4>Leadership</h4>
            <ul>
              {#each chapter.leadership as member}
                <li>{member.username}</li>
              {/each}
            </ul>

            <h4>Members</h4>
            <ul>
              {#each chapter.members as member}
                <li>{member.username}</li>
              {/each}
            </ul>
          </details>
      {/each}

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
  details {
    margin-block-end: 1rem;
  }
  .chapters {
    grid-column: 4/13;
  }
</style>