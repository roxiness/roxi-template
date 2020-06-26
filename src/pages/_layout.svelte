<script>
  import { layout } from "roxi/routify";
</script>


<style>
  a {
    margin-right: 1ex;
  }
</style>

<h3>My Project</h3>

<nav>
    {#each $layout.children as child}
        <a href={child.path}>{child.title}</a>
    {/each}
</nav>

<slot />
