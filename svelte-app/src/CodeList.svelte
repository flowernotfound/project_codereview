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
