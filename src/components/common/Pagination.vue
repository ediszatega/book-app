<script setup lang="ts">
import { ref } from "vue";
const onClickHandler = (page: number) => {
  console.log(page);
};
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: theme("colors.primary-color");
  border: 1px solid theme("colors.primary-color");
  color: white;
}
.active-page:hover {
  background-color: theme("colors.secondary-color");
  border: 1px solid theme("colors.secondary-color");
}
</style>
