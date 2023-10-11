import { useState } from 'react'
import Tabs from "@/components-core/Tabs/tabs";
import SearchSvg from "../assets/SearchSvg";
import ThreeDotsSvg from "../assets/ThreeDots";
import IconButton from "@/components-core/Button/IconButton";

const TabList = [{ name: "Chat" }, { name: "Group" }, { name: "Status" }];

function Chat() {
  const [activeTabIndex, setActiveIndex] = useState(0);
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
        <Tabs className="flex justify-center " items={TabList} activeIndex={activeTabIndex} onChangeTab={setActiveIndex} />
        <section>

        </section>
      </section>
    </>
  );
}

export default Chat;
