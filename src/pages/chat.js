import Tab from "@/components-core/Tab/tab";
import SearchSvg from "../assets/SearchSvg";
import ThreeDotsSvg from "../assets/ThreeDots";
import IconButton from "@/components-core/Button/IconButton";

const TabList = [{ name: "Chat" }, { name: "Group" }, { name: "Status" }];

function Chat() {
  return (
    <>
      <section className="flex items-center px-6 py-4 gap-1 ">
        <h1 className="text-4xl font-bold grow">Moments</h1>
        <IconButton>
          <SearchSvg />
        </IconButton>

        <IconButton>
          <ThreeDotsSvg />
        </IconButton>
      </section>
      <section>
        <Tab items={TabList} activeIndex={0} />
      </section>
    </>
  );
}

export default Chat;
