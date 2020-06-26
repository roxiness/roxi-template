<script>
  import { page, layout } from "roxi/routify";
  console.log($layout);
</script>

<h3>Posts</h3>

<ul>
    {#each $layout.parent.children.find((node) => node.title === 'posts').children as child}
        <li><a href={child.path}>{child.title}</a></li>
    {/each}
</ul>

<slot />
