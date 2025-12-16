<script>
  let create

  const close = (e) => {
    e.preventDefault()
    create.close()
  }

  const showCreate = (e) => {
    create.showModal()
  }
</script>

<button
  onclick={showCreate}
  class="btn">
  Create Event
</button>

<dialog bind:this={create}>
  <div class="modal-dialog outer-border" style="width: 30rem;">
    <div class="inner-border center">
      <div class="modal-contents">
        <h1 class="modal-text">Create Event</h1>
        <form action="/demo?/event" method="POST">

          <label>Chapter</label><br/>
          <select>
            <option>tk</option>
            <option>tk</option>
          </select>
          <br/>

          <label>Name</label><br/>
          <input type="text" name="Name"><br/>

          <label>Date & Time</label><br/>
          <input type="datetime-local" name="DateTime"><br/>

          <section class="field-row" style="justify-content: flex-end">
            <button class="btn" onclick={close}>Cancel</button>
            <button type="submit" class="btn" style="width:95px;">OK</button>
          </section>
        </form>
      </div>
    </div>
  </div>
</dialog>


<style>
  input {
    margin-block-end: 1rem;
  }
</style>