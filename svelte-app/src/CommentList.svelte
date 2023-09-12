<script>
  import { onMount } from "svelte";

  let comments = [];

  onMount(async () => {
    const res = await fetch("http://localhost:3000/api/comments");
    comments = await res.json();
  });
</script>

<ul>
  {#each comments as comment}
    <li>
      {comment.comment} (Code Review ID: {comment.code_review_id})
    </li>
  {/each}
</ul>
