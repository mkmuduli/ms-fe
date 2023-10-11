import { twMerge as tm } from 'tailwind-merge'

const Tabs = ({ items, activeIndex, className, onChangeTab }) => {
    return (
        <div className={tm("mb-4 border-b border-gray-200", className)}>
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center w-96">
                {
                    items.map((eachItem, idx) => {
                        return (
                            <li className="mr-2 flex-1" key={eachItem.id || idx}>
                                <button className={
                                    tm(
                                        "inline-block p-4 rounded-t-lg hover:text-primary-600 hover:border-primary-300",
                                        activeIndex === idx && 'border-b-2 text-primary-600 border-primary-300'
                                    )
                                }
                                    onClick={() => { onChangeTab(eachItem.id || idx) }}
                                    type="button">
                                    {eachItem.name}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    )
}

export default Tabs;