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
