import React from 'react'
import { CustomButton } from './Button';

export default function Post(props) {
    const { id, title, body, tags, editPost, deletePost } = props;

    const editBtnProps = {
        className: "btn-primary text-primary-500 mx-2",
        buttontext: "Edit",
        type: "button",
        onSubmit: () => editPost(id)
    }

    const deleteBtnProps = {
        className: "btn-danger text-red-500 mx-1",
        buttontext: "Delete",
        type: "button",
        onSubmit: () => deletePost(id)
    }
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
            <div className="mx-auto">
                <section className="max-w-sm rounded-lg bg-secondary-500 shadow-lg">
                    <div className="p-4">
                        <div className="text-primary-500 uppercase font-bold text-lg">{title}</div>
                        <div className="text-sm text-white mt-4 font-bold">
                            {body}
                        </div>
                        <div className="flex flex-row flex-wrap justify-between sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs">
                            <div className="flex items-center mt-4">
                                {tags.length > 0 && tags.map((tag, idx) => (
                                    <a key={idx} href="!#" className="lowercase mx-1">
                                        #{tag}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 flex justify-between items-center">
                            <CustomButton {...editBtnProps} />
                            <CustomButton {...deleteBtnProps} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
