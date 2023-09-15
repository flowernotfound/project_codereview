<script>
  import { onMount } from 'svelte';

  let codeReviews = [];

  onMount(async () => {
    const response = await fetch("http://localhost:3000/api/code");
    codeReviews = await response.json();
  });
</script>

<div>
  {#each codeReviews as review}
    <div class="code-review">
      <p>{review.id}: {review.code}</p>
    </div>
  {/each}
</div>

<style>
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 1rem;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>
