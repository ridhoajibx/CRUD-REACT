import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

function MultiSelect(props) {
    const { data, selectedItem, setSelectedItem } = props;

    function isSelected(value) {
        return selectedItem.find((el) => el === value) ? true : false;
    }

    function handleSelect(value) {
        if (!isSelected(value)) {
            const selectedItemUpdated = [
                ...selectedItem,
                data.find((el) => el === value)
            ];
            setSelectedItem(selectedItemUpdated);
        } else {
            handleDeselect(value);
        }
    }

    function handleDeselect(value) {
        const selectedItemUpdated = selectedItem.filter((el) => el !== value);
        setSelectedItem(selectedItemUpdated);
    }

    return (
        <div className="relative w-full mb-3">
            <label htmlFor="freq" className="uppercase block text-xs font-bold text-gray-100">Tags</label>
            <Listbox
                as="div"
                value={selectedItem}
                onChange={(value) => handleSelect(value)}
            >
                {({ isOpen }) => (
                    <>
                        <Listbox.Button className={
                            `mt-1 flex items-center justify-between w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none text-sm overflow-hidden`
                        }>
                            <span className="block lowercase text-secondary-500">
                                {selectedItem.length < 1
                                    ? "Tags..."
                                    : `${selectedItem}`}
                            </span>
                            <div className="px-4">
                                <svg
                                    className={
                                        `w-5 h-5 duration-300 z-40 
                                                        ${isOpen ? 'transform -rotate-180' : ''}`
                                    }
                                    fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </Listbox.Button>
                        <Transition
                            show={isOpen}
                            enter="transition ease-in-out duration-100"
                            enterFrom="transform scale-75"
                            enterTo="transform scale-100"
                            leave="transition ease-in-out duration-75"
                            leaveFrom="transform scale-100"
                            leaveTo="transform scale-75"
                        >
                            <Listbox.Options className="absolute right-0 w-full z-50 text-sm bg-white border-1 border-gray-300 shadow-lg rounded-b-lg focus:outline-none overflow-hidden">
                                {data.map((tag) => {
                                    const selected = isSelected(tag);
                                    return (
                                        <Listbox.Option key={tag} value={tag}>
                                            {({ active }) => (
                                                <div
                                                    className={`${active
                                                        ? "text-white bg-primary-600"
                                                        : "text-gray-900"
                                                        } cursor-pointer select-none relative py-2 pl-8 pr-4`}
                                                >
                                                    <span
                                                        className={`${selected ? "font-semibold" : "font-normal"
                                                            } block truncate`}
                                                    >
                                                        {tag}
                                                    </span>
                                                    {selected && (
                                                        <span
                                                            className={`${active ? "text-white" : "text-primary-600"
                                                                } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                                        >
                                                            <svg
                                                                className="h-5 w-5"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </Listbox.Option>
                                    );
                                })}
                            </Listbox.Options>
                        </Transition>
                    </>
                )}
            </Listbox>
        </div>
    );
}

export default MultiSelect;
