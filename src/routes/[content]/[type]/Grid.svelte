<div class="grid grid-auto gap-3 mx-auto px-8 max-w-7xl">
  <slot></slot>
</div>

<style>
  div {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
</style>
