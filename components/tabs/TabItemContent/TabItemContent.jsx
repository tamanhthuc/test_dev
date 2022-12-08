import Content from "./Content/Content";
import SideBar from "./SideBar/SideBar";

export default function TabItemContent({content}) {

    return (
        <div>
            <div className="grid gap-4 grid-cols-12">
                <div className={`col-span-4 `}>
                    <SideBar des={content?.des} menu={content?.menu} />
                </div>
                <div className="content col-span-8">
                    <Content 
                        note={content?.note} 
                                discount={content?.discount} 
                                items={content?.items}  
                    />
                </div>
            </div>
        </div>
    )
}