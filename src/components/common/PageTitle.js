import { h } from "vue";

const PageTitleComponent = (props) => {
  return h("p", { class: "text-3xl font-medium pb-8" }, props.title);
};

export default PageTitleComponent;
