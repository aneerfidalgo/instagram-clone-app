import "../styles/stories.scss";
import HorizonalScroll from "react-scroll-horizontal";
import Story from "./Story";

function Stories() {
  return (
    <div className="stories">
      <HorizonalScroll className="scroll" reverseScroll={true}>
        <Story />
        <Story /> <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </HorizonalScroll>
    </div>
  );
}

export default Stories;
